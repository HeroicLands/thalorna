---
shortcode: ekpelulng
name: {full: Ekpelu Language, aliases: []}
type: skill
subType: language
description: "The common tongue of the forest peoples of central Zerathia: small, open and unwritten, spoken with a different accent and a different word for the sacred by each of the four traditions."
tags: []
data:
  roman: "abdeghiklmnoprstuwyABDEGHIKLMNOPRSTUWY0123456789()–-"
  core: true
  abbreviation: Ekp.
  fields:
    - name: The people and the bands
      holds: "A person, a band, a tribe, the fire, and the four standings within a tribe."
    - name: The forest and the water
      holds: "The river, the forest, the trail, the weather and the beasts that matter most."
    - name: Spirits and manners
      holds: "The spirits, the places they hold, and what is owed to them."
    - {name: Qualities, holds: "Size, depth and darkness, the words that finish a name."}
    - name: The traditions
      holds: "The four ways of being a forest person, each named for what it keeps or dwells by."
    - name: Words of one tradition
      holds: "The words for sacred things that one tradition uses and the others do not."
    - name: Everyday speech
      holds: "Ordinary words and phrases for daily conversation, thought, relationships and the wider world."
  affixes:
    - form: "-ndo"
      gloss: "the keeper of it: one who tends and holds it"
      attaches: "added"
      examples: ["luwa > luwando, a keeper of the river"]
      tones: L
    - form: "-ma"
      gloss: "the child of it: one who is fed by it"
      attaches: "added"
      examples: ["yeso > yesoma, a child of the forest"]
      tones: H
    - form: "-ye"
      gloss: "the dweller beside it: one who lives at its border"
      attaches: "added"
      examples: ["pewa > pewaye, a dweller at the edge"]
      tones: L
    - form: "-la"
      gloss: "the band of it: those who follow or camp by it"
      attaches: "added"
      examples: ["luwa > luwala, the river's band"]
      tones: H
  words:
    - form: ekpelu
      class: "n"
      field: The people and the bands
      gloss: "speech, the common tongue of the forest peoples"
      tones: LHL
    - form: biko
      class: "n"
      field: The people and the bands
      gloss: "a person, one of the people"
      tones: HL
      concept: ["person", "people", "human"]
    - form: sepo
      class: "n"
      field: The people and the bands
      gloss: "a child"
      tones: LH
      concept: ["child"]
    - form: dumo
      class: "n"
      field: The people and the bands
      gloss: "a band, those who camp and eat together"
      tones: HL
      concept: ["group"]
    - form: ndaro
      class: "n"
      field: The people and the bands
      gloss: "a tribe, the bands who follow one leader"
      tones: HH
      concept: ["tribe"]
    - form: hoba
      class: "n"
      field: The people and the bands
      gloss: "a fire, the fire a band eats at"
      concept: ["fire"]
      tones: LL
    - form: gbulu
      class: "n"
      field: The people and the bands
      gloss: "an ancestor, one of the dead who are still spoken to"
      concept: ["ancestor"]
      tones: HL
    - form: tolu
      class: "n"
      field: The people and the bands
      gloss: "a dependent: a child, a captive, or a stranger not yet taken in"
      tones: LH
    - form: wibo
      class: "n"
      field: The people and the bands
      gloss: "a member, a full adult with a voice in the band"
      tones: HH
    - form: mbeli
      class: "n"
      field: The people and the bands
      gloss: "an elder, a member whose memory and dealings with the spirits count"
      tones: LL
      concept: ["elder"]
    - form: kpaso
      class: "n"
      field: The people and the bands
      gloss: "the tribal leader, the one person the tribe follows"
      tones: HL
      concept: ["leader", "ruler"]
    - form: gbolo
      class: "n"
      field: The people and the bands
      gloss: "an outsider, one who is not of the people"
      tones: LH
      concept: ["stranger"]
    - form: gbeni
      class: "n"
      field: The people and the bands
      gloss: "a trade-friendship, the hereditary bond between a forest family and an outside one"
      tones: HH
    - form: gbenindo
      class: "n"
      field: The people and the bands
      gloss: "a trade-keeper, one who holds a trade-friendship by inheritance"
      built: [gbeni, "-ndo"]
      tones: HHL
      concept: ["merchant"]
    - form: luwa
      class: "n"
      field: The forest and the water
      gloss: "a river"
      tones: LH
      concept: ["river"]
    - form: yeso
      class: "n"
      field: The forest and the water
      gloss: "the forest, the living forest, the canopy and what it holds"
      tones: HL
      concept: ["forest"]
    - form: pewa
      class: "n"
      field: The forest and the water
      gloss: "the edge, where the forest ends"
      tones: LL
    - form: gbele
      class: "n"
      field: The forest and the water
      gloss: "a tree"
      tones: HL
      concept: ["tree"]
    - {form: kiro, class: "n", field: The forest and the water, gloss: "a trail", tones: LH}
    - form: mbala
      class: "n"
      field: The forest and the water
      gloss: "a swamp, flooded ground"
      tones: HH
    - form: rano
      class: "n"
      field: The forest and the water
      gloss: "rain"
      tones: LL
      concept: ["rain"]
    - {form: wene, class: "n", field: The forest and the water, gloss: "mist", tones: HL}
    - {form: ngoto, class: "n", field: The forest and the water, gloss: "an elephant", tones: LH}
    - {form: kpalu, class: "n", field: The forest and the water, gloss: "a leopard", tones: HH}
    - {form: sewi, class: "n", field: The forest and the water, gloss: "a serpent", tones: LL}
    - form: liho
      class: "n"
      field: The forest and the water
      gloss: "a fish"
      tones: HL
      concept: ["fish"]
    - form: kubi
      class: "n"
      field: Spirits and manners
      gloss: "a spirit-court, a place held by one spirit and its etiquette"
      tones: LH
    - {form: mbosa, class: "n", field: Spirits and manners, gloss: "a spirit", tones: HL}
    - {form: dipo, class: "n", field: Spirits and manners, gloss: "an offering", tones: LL}
    - form: kele
      class: v
      field: Spirits and manners
      gloss: "keep, tend, observe the etiquette of"
      tones: HH
    - form: hira
      class: v
      field: Spirits and manners
      gloss: "give"
      tones: LH
      concept: ["give"]
    - form: dibo
      class: v
      field: Spirits and manners
      gloss: "share, divide among all"
      tones: HL
      concept: ["share"]
    - {form: sogo, class: v, field: Spirits and manners, gloss: "sing", tones: HH}
    - form: dano
      class: v
      field: Spirits and manners
      gloss: "walk, follow a trail"
      tones: LL
      concept: ["walk"]
    - form: bolu
      class: adj
      field: Qualities
      gloss: "great, old"
      tones: HL
      concept: ["big", "old"]
    - form: sini
      class: adj
      field: Qualities
      gloss: "small, young"
      tones: LH
      concept: ["small", "young"]
    - {form: gbasa, class: adj, field: Qualities, gloss: "dark", tones: HH, concept: ["dark"]}
    - {form: moro, class: adj, field: Qualities, gloss: "deep", tones: LL}
    - form: luwando
      class: "n"
      field: The traditions
      gloss: "a river-keeper, one who keeps the river"
      built: [luwa, "-ndo"]
      tones: LHL
    - form: yesoma
      class: "n"
      field: The traditions
      gloss: "a canopy forager, a child of the forest"
      built: [yeso, "-ma"]
      tones: HLH
    - form: kubindo
      class: "n"
      field: The traditions
      gloss: "a court-keeper, one who keeps a spirit-court"
      built: [kubi, "-ndo"]
      tones: LHL
    - form: pewaye
      class: "n"
      field: The traditions
      gloss: "an edge-person, one who dwells where the forest ends"
      built: [pewa, "-ye"]
      tones: LLL
    - form: yobe
      class: "n"
      field: Words of one tradition
      gloss: "the river as host, the spirit that brings guests and feeds them; said by the river-keepers"
      tones: HL
    - form: dombe
      class: "n"
      field: Words of one tradition
      gloss: "guest-right, the three nights owed to anyone the river brings; said by the river-keepers"
      tones: LH
    - form: ewudi
      class: "n"
      field: Words of one tradition
      gloss: "the bark boat that carries one of the dead downstream; said by the river-keepers"
      tones: LHL
    - form: iyemo
      class: "n"
      field: Words of one tradition
      gloss: "the forest as parent, mother-and-father in one; said by the canopy foragers"
      tones: HLH
    - form: kpeti
      class: "n"
      field: Words of one tradition
      gloss: "a share, the part of every kill and comb each person is owed; said by the canopy foragers"
      tones: HL
    - form: sogola
      class: "n"
      field: Words of one tradition
      gloss: "the band of song that sings the forest awake at night; said by the canopy foragers"
      built: [sogo, "-la"]
      tones: HHH
    - form: hewo
      class: "n"
      field: Words of one tradition
      gloss: "a camp left to the dead; said by the canopy foragers"
      tones: LH
    - form: mbuyo
      class: "n"
      field: Words of one tradition
      gloss: "the manners of one spirit-court, what its spirit demands; said by the court-keepers"
      tones: HL
    - form: kelendo
      class: "n"
      field: Words of one tradition
      gloss: "the keeper, the eldest who knows a court's manners entire; said by the court-keepers"
      built: [kele, "-ndo"]
      tones: HHL
    - form: ngobe
      class: "n"
      field: Words of one tradition
      gloss: "the night-sitting at a court, by which the spirit makes a leader; said by the court-keepers"
      tones: LH
    - form: tegbo
      class: "n"
      field: Words of one tradition
      gloss: "the stretch of edge a family holds; said by the edge-people"
      tones: HH
    - form: hokpe
      class: "n"
      field: Words of one tradition
      gloss: "the grave-post that faces out of the forest; said by the edge-people"
      tones: LL
    - form: bewu
      class: "n"
      field: Words of one tradition
      gloss: "the leader's gift, brought from outside for every member; said by the edge-people"
      tones: HL
    - "form": "neloba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "an act, state or occurrence; before a verb, its action as a noun"
      "tones": "LHL"
    - "form": "helo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["out; outward; away from an interior", "outside"]
      "tones": "HL"
      "concept": "outside"
    - "form": "dabo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["again; back in a sequence; previously when following a time noun", "again"]
      "tones": "LH"
      "concept": "again"
    - "form": "nudo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "following; upcoming"
      "tones": "HL"
    - "form": "tabe"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "with directed attention; deliberately"
      "tones": "LH"
    - "form": "lako"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "possession: follows the possessor before the possessed noun"
      "tones": "HL"
    - "form": "keno"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "position in an ordered series: follows any cardinal number"
      "tones": "LH"
    - "form": "pali"
      "class": "v"
      "field": "Everyday speech"
      "gloss": ["taste; split into equal portions in counting and sharing contexts", "to taste"]
      "tones": "LH"
      "concept": "taste-verb"
    - "form": "palohoho"
      "class": "num"
      "field": "Everyday speech"
      "gloss": ["a whole; an undivided quantity", "whole"]
      "tones": "LHL"
      "concept": "whole"
    - "form": "nabe"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a key; a tool that releases a fastening"
      "tones": "LH"
    - "form": "kabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["a barrier or restraint; a tool for fastening or striking", "hammer"]
      "tones": "HL"
      "concept": "hammer"
    - "form": "tolo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["above; on the upper or forward side", "Above"]
      "tones": "LH"
      "concept": "above"
    - "form": "danulo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["below; on the lower side", "below"]
      "tones": "HLH"
      "concept": "below"
    - "form": "sepa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["inside; within a boundary", "Inside"]
      "tones": "LH"
      "concept": "inside"
    - "form": "somin"
      "class": "v"
      "field": "Everyday speech"
      "gloss": ["grow; become mature", "grow"]
      "tones": "LH"
      "concept": "grow"
    - "form": "bamiwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["a woman; female when qualifying a person", "woman"]
      "tones": "LHL"
      "concept": "woman"
    - "form": "bame"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["a man; male when qualifying a person", "Man"]
      "tones": "HL"
      "concept": "man"
    - "form": "melibo"
      "class": "call"
      "field": "Everyday speech"
      "gloss": ["a courteous greeting wishing a good meeting", "Hello"]
      "tones": "LHL"
      "concept": "hello"
    - "form": "kelan"
      "class": "part"
      "field": "Everyday speech"
      "gloss": ["permission to perform the following act", "may; have permission to act"]
      "tones": "HL"
      "concept": "may-permission"
    - "form": "dodan"
      "class": "part"
      "field": "Everyday speech"
      "gloss": ["an obligation to perform the following act", "Must"]
      "tones": "LH"
      "concept": "must"
    - "form": "dedan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["possible; able to occur", "Possible"]
      "tones": "HL"
      "concept": "possible"
    - "form": "hewan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "free to act; unconstrained"
      "tones": "LH"
      "concept": "free"
    - "form": "melan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["easy; good or favourable in an evaluative use", "easy", "good"]
      "tones": "HL"
      "concept": ["easy", "good"]
    - "form": "gaban"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["bad; unfavourable", "bad"]
      "tones": "LH"
      "concept": "bad"
    - "form": "mbaka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["much; to a great degree; more in comparison", "much", "very"]
      "tones": "HL"
      "concept": ["much", "very"]
    - "form": "sika"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["little; to a small degree; less in comparison", "little", "slightly"]
      "tones": "LH"
      "concept": ["little-quantity", "slightly"]
    - "form": "soka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["some; to an unspecified degree", "some", "somewhat"]
      "tones": "HL"
      "concept": ["some", "somewhat"]
    - "form": "beka"
      "class": "num"
      "field": "Everyday speech"
      "gloss": ["all; the entire relevant set", "all"]
      "tones": "LH"
      "concept": "all"
    - "form": "doba"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["enough; complete; completion of the preceding action", "enough"]
      "tones": "HL"
      "concept": "enough"
    - "form": "nuka"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "one"
      "tones": "LH"
      "concept": "one"
    - "form": "nuke"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "two"
      "tones": "HL"
      "concept": "two"
    - "form": "pawa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["toward; to; up to an endpoint", "Toward"]
      "tones": "LH"
      "concept": "toward"
    - "form": "hewa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["away; from a starting point", "away"]
      "tones": "HL"
      "concept": "away"
    - "form": "leli"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["equal; the same in the stated respect; correct when matching a standard", "Correct"]
      "tones": "LH"
      "concept": "correct"
    - "form": "wano"
      "class": "part"
      "field": "Everyday speech"
      "gloss": ["no; not; follows what is denied", "no", "Not"]
      "tones": "HL"
      "concept": ["no", "not"]
    - "form": "kene"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["true; agreeing with what is real", "True"]
      "tones": "LH"
      "concept": "true"
    - "form": "keniwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss":
        - "certainty; being sure of a claim"
        - "certainty; the speaker’s state of being sure, which does not establish truth"
      "tones": "LHL"
      "concept": "certainty"
    - "form": "kedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": ["be; exist; identify or predicate a quality", "to be"]
      "tones": "HL"
      "concept": "be"
    - "form": "nemo"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "frames a following clause as a reported statement"
      "tones": "LH"
    - "form": "nelo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to see"
      "concept": "see-verb"
      "tones": "LH"
    - "form": "neloba nelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "seeing; the act or faculty of seeing"
      "built": ["neloba", "nelo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "bami"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hear"
      "concept": "hear-verb"
      "tones": "LH"
    - "form": "neloba bami"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hearing; the act or faculty of hearing"
      "built": ["neloba", "bami"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "senu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to smell"
      "concept": "smell-verb"
      "tones": "LH"
    - "form": "senuba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a smell; an odour"
      "concept": "smell-noun"
      "tones": "LHL"
    - "form": "paliba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a taste; a flavour"
      "concept": "taste-noun"
      "tones": "LHL"
    - "form": "kumo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to touch; to feel with the hand"
      "concept": "touch-verb"
      "tones": "LH"
    - "form": "kumoba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "touch; physical contact"
      "concept": "touch-noun"
      "tones": "LHL"
    - "form": "nela"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to look"
      "concept": "look"
      "tones": "LH"
    - "form": "nela kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to watch; to observe attentively"
      "concept": "watch"
      "built": ["nela", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "biko nelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a person’s appearance; how a person looks"
      "built": ["biko", "nelo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "nelihe"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "visible; available to sight"
      "concept": "visible"
      "tones": "LHL"
    - "form": "nelihe wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "invisible"
      "concept": "invisible"
      "built": ["nelihe", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "bami kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to listen"
      "concept": "listen"
      "built": ["bami", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "bamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "noise"
      "concept": "noise"
      "tones": "LH"
    - "form": "bamu biko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "voice"
      "concept": "voice"
      "built": ["bamu", "biko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "bamu wano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "silence"
      "concept": "silence"
      "built": ["bamu", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "bamu bolu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "loud"
      "concept": "loud"
      "built": ["bamu", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "bamu sini"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "quiet"
      "concept": "quiet"
      "built": ["bamu", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "senu meli"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "fragrant"
      "concept": "fragrant"
      "built": ["senu", "meli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "senu gabo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "foul-smelling; having an unpleasant smell"
      "concept": "foul"
      "built": ["senu", "gabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "meli"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "sweet"
      "concept": "sweet"
      "tones": "LH"
    - "form": "sali"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "sour"
      "concept": "sour"
      "tones": "LH"
    - "form": "gabo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "bitter"
      "concept": "bitter"
      "tones": "LH"
    - "form": "teli"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "salty"
      "concept": "salty"
      "tones": "LH"
    - "form": "kumi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to feel a sensation"
      "concept": "feel-verb"
      "tones": "LH"
    - "form": "kumiba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a sensation; a bodily feeling"
      "concept": "sensation"
      "tones": "LHL"
    - "form": "lami"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "smooth"
      "concept": "smooth"
      "tones": "LH"
    - "form": "lako kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "rough"
      "concept": "rough"
      "built": ["lako", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "melo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "soft"
      "concept": "soft"
      "tones": "LH"
    - "form": "kadu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "hard to the touch; firm rather than soft"
      "concept": "hard-texture"
      "tones": "LH"
    - "form": "nelo tabe"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to notice"
      "concept": "notice"
      "built": ["nelo", "tabe"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo bami"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "perceive"
      "concept": "perceive"
      "built": ["nelo", "bami"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo keni"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "recognize"
      "concept": "recognize"
      "built": ["nelo", "keni"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nebo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "seem"
      "concept": "seem"
      "tones": "LH"
    - "form": "ndebu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wrath; intense anger"
      "concept": "wrath"
      "tones": "LH"
    - "form": "pamo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "envy"
      "concept": "envy"
      "tones": "LH"
    - "form": "yeli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hope"
      "concept": "hope"
      "tones": "LH"
    - "form": "mando"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "greed"
      "concept": "greed"
      "tones": "LH"
    - "form": "bala"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "boasting"
      "concept": "boasting"
      "tones": "LH"
    - "form": "loba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pride"
      "concept": "pride"
      "tones": "LH"
    - "form": "kposi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lust; sexual appetite, whether or not accompanied by love"
      "concept": "lust"
      "tones": "LH"
    - "form": "yeli wano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "despair"
      "concept": "despair"
      "built": ["yeli", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "toba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "disappointment"
      "concept": "disappointment"
      "tones": "LH"
    - "form": "mbemi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "faith"
      "concept": "faith"
      "tones": "LH"
    - "form": "meliwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "joy"
      "concept": "joy"
      "tones": "LHL"
    - "form": "meliba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "happiness"
      "concept": "happiness"
      "tones": "LHL"
    - "form": "melisu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pleasure"
      "concept": "pleasure"
      "tones": "LHL"
    - "form": "meliko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "contentment"
      "concept": "contentment"
      "tones": "LHL"
    - "form": "hibo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "gratitude"
      "concept": "gratitude"
      "tones": "LH"
    - "form": "leba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "admiration"
      "concept": "admiration"
      "tones": "LH"
    - "form": "kenu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "trust; reliance on someone’s care or reliability"
      "concept": "trust"
      "tones": "LH"
    - "form": "nambu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "courage"
      "concept": "courage"
      "tones": "LH"
    - "form": "debu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "anger"
      "concept": "anger"
      "tones": "LH"
    - "form": "gomu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hatred"
      "concept": "hatred"
      "tones": "LH"
    - "form": "pamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "jealousy"
      "concept": "jealousy"
      "tones": "LH"
    - "form": "wosi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fear"
      "concept": "fear"
      "tones": "LH"
    - "form": "wosi bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "terror"
      "concept": "terror"
      "built": ["wosi", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sadness"
      "concept": "sadness"
      "tones": "LH"
    - "form": "sabun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grief"
      "concept": "grief"
      "tones": "LH"
    - "form": "nabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shame"
      "concept": "shame"
      "tones": "LH"
    - "form": "dabe"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "guilt"
      "concept": "guilt"
      "tones": "LH"
    - "form": "dabu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "regret"
      "concept": "regret"
      "tones": "LH"
    - "form": "lobi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "humility"
      "concept": "humility"
      "tones": "LH"
    - "form": "kenuba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "confidence in one’s ability or expectation of success"
      "concept": "confidence"
      "tones": "LHL"
    - "form": "nabun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "embarrassment"
      "concept": "embarrassment"
      "tones": "LH"
    - "form": "mbalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "compassion"
      "concept": "compassion"
      "tones": "LH"
    - "form": "mbalu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pity"
      "concept": "pity"
      "tones": "LH"
    - "form": "mbali"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sympathy"
      "concept": "sympathy"
      "tones": "LH"
    - "form": "gobe"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "resentment"
      "concept": "resentment"
      "tones": "LH"
    - "form": "gomu gbasa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "contempt"
      "concept": "contempt"
      "built": ["gomu", "gbasa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "doli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "forgiveness"
      "concept": "forgiveness"
      "tones": "LH"
    - "form": "yemo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "desire"
      "concept": "desire"
      "tones": "LH"
    - "form": "yemoba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "longing"
      "concept": "longing"
      "tones": "LHL"
    - "form": "meliwa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "satisfaction (desire fulfilled)"
      "concept": "satisfaction"
      "tones": "LHL"
    - "form": "kobun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "frustration"
      "concept": "frustration"
      "tones": "LH"
    - "form": "neliwa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "curiosity"
      "concept": "curiosity"
      "tones": "LHL"
    - "form": "nebu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "confusion"
      "concept": "confusion"
      "tones": "LH"
    - "form": "nemi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "doubt"
      "concept": "doubt"
      "tones": "LH"
    - "form": "neloba nelo tabe"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "surprise"
      "concept": "surprise"
      "built": ["neloba", "nelo", "tabe"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHLH
    - "form": "lamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "boredom"
      "concept": "boredom"
      "tones": "LH"
    - "form": "yemolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "anticipation"
      "concept": "anticipation"
      "tones": "LHL"
    - "form": "bemi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "belief"
      "concept": "belief"
      "tones": "LH"
    - "form": "mbelu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "reverence"
      "concept": "reverence"
      "tones": "LH"
    - "form": "mbelu bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "awe"
      "concept": "awe"
      "built": ["mbelu", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lenu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "romantic love; love for a desired partner"
      "concept": "love-eros"
      "tones": "LH"
    - "form": "beno"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the affection and love of friends"
      "concept": "love-philia"
      "tones": "LH"
    - "form": "soma"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "familial love; the love of kin"
      "concept": "love-storge"
      "tones": "LH"
    - "form": "mbaloba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "selfless love extended to any person, without kinship, friendship or desire"
      "concept": "love-agape"
      "tones": "LHL"
    - "form": "lenu sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "affection"
      "concept": "affection"
      "built": ["lenu", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lemo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "attraction"
      "concept": "attraction"
      "tones": "LH"
    - "form": "lenuba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "intimacy"
      "concept": "intimacy"
      "tones": "LHL"
    - "form": "kele lenu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "devotion"
      "concept": "devotion"
      "built": ["kele", "lenu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HHLH
    - "form": "kele beno"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "loyalty"
      "concept": "loyalty"
      "built": ["kele", "beno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HHLH
    - "form": "biko leno"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["companionship; being together with a companion", "companion"]
      "concept": ["companionship", "companion"]
      "built": ["biko", "leno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "gomu biko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "enmity"
      "concept": "enmity"
      "built": ["gomu", "biko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "kebo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the head"
      "concept": "head"
      "tones": "LH"
    - "form": "kebu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the hair"
      "concept": "hair"
      "tones": "LH"
    - "form": "keba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the face"
      "concept": "face"
      "tones": "LH"
    - "form": "nelilo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the eye"
      "concept": "eye"
      "tones": "LHL"
    - "form": "balilo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the ear"
      "concept": "ear"
      "tones": "LHL"
    - "form": "seno"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the nose"
      "concept": "nose"
      "tones": "LH"
    - "form": "polo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the mouth"
      "concept": "mouth"
      "tones": "LH"
    - "form": "pole"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the lip"
      "concept": "lip"
      "tones": "LH"
    - "form": "tano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the tooth"
      "concept": "tooth"
      "tones": "LH"
    - "form": "palo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the tongue"
      "concept": "tongue"
      "tones": "LH"
    - "form": "kelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the neck"
      "concept": "neck"
      "tones": "LH"
    - "form": "pemo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the shoulder"
      "concept": "shoulder"
      "tones": "LH"
    - "form": "mabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the arm"
      "concept": "arm"
      "tones": "LH"
    - "form": "mabe"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the elbow"
      "concept": "elbow"
      "tones": "LH"
    - "form": "malo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the hand"
      "concept": "hand"
      "tones": "LH"
    - "form": "male"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the finger"
      "concept": "finger"
      "tones": "LH"
    - "form": "malen"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the fingernail"
      "concept": "nail"
      "tones": "LH"
    - "form": "koba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the chest"
      "concept": "chest"
      "tones": "LH"
    - "form": "kobi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the breast"
      "concept": "breast"
      "tones": "LH"
    - "form": "bemo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the heart"
      "concept": "heart"
      "tones": "LH"
    - "form": "bolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the belly"
      "concept": "belly"
      "tones": "LH"
    - "form": "boko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the back"
      "concept": "back"
      "tones": "LH"
    - "form": "bako"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the hip"
      "concept": "hip"
      "tones": "LH"
    - "form": "dalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the leg"
      "concept": "leg"
      "tones": "LH"
    - "form": "dale"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the knee"
      "concept": "knee"
      "tones": "LH"
    - "form": "dalu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the foot"
      "concept": "foot"
      "tones": "LH"
    - "form": "dalun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the toe"
      "concept": "toe"
      "tones": "LH"
    - "form": "selo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the skin"
      "concept": "skin"
      "tones": "LH"
    - "form": "bano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the bone"
      "concept": "bone"
      "tones": "LH"
    - "form": "banu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "blood"
      "concept": "blood"
      "tones": "LH"
    - "form": "buna"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "flesh"
      "concept": "flesh"
      "tones": "LH"
    - "form": "keba tolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "forehead"
      "concept": "forehead"
      "built": ["keba", "tolo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "keba tano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "jaw"
      "concept": "jaw"
      "built": ["keba", "tano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "keba nuko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "chin"
      "concept": "chin"
      "built": ["keba", "nuko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "keba melo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cheek"
      "concept": "cheek"
      "built": ["keba", "melo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kelo polo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "throat"
      "concept": "throat"
      "built": ["kelo", "polo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "boli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "stomach"
      "concept": "stomach"
      "tones": "LH"
    - "form": "bako sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "waist"
      "concept": "waist"
      "built": ["bako", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "bano dabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "spine"
      "concept": "spine"
      "built": ["bano", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "boko melo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "buttock"
      "concept": "buttock"
      "built": ["boko", "melo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "mabo dalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wrist"
      "concept": "wrist"
      "built": ["mabo", "dalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "malo melo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "palm"
      "concept": "palm"
      "built": ["malo", "melo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "male bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thumb"
      "concept": "thumb"
      "built": ["male", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "dalo bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thigh"
      "concept": "thigh"
      "built": ["dalo", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "dalu kelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ankle"
      "concept": "ankle"
      "built": ["dalu", "kelo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dalu boko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "heel"
      "concept": "heel"
      "built": ["dalu", "boko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dalu melo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sole"
      "concept": "sole"
      "built": ["dalu", "melo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dalun selo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "toenail"
      "concept": "toenail"
      "built": ["dalun", "selo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "buni"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "muscle"
      "concept": "muscle"
      "tones": "LH"
    - "form": "buno"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fat"
      "concept": "fat"
      "tones": "LH"
    - "form": "penu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sweat (noun)"
      "concept": "sweat"
      "tones": "LH"
    - "form": "nelu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "tears"
      "concept": "tears"
      "tones": "LH"
    - "form": "polu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "saliva"
      "concept": "saliva"
      "tones": "LH"
    - "form": "kebi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "brain"
      "concept": "brain"
      "tones": "LH"
    - "form": "bemiwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lung"
      "concept": "lung"
      "tones": "LHL"
    - "form": "beli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "liver"
      "concept": "liver"
      "tones": "LH"
    - "form": "beku"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "kidney"
      "concept": "kidney"
      "tones": "LH"
    - "form": "bolun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "intestine"
      "concept": "intestine"
      "tones": "LH"
    - "form": "basi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "genitals"
      "concept": "genitals"
      "tones": "LH"
    - "form": "somu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "womb"
      "concept": "womb"
      "tones": "LH"
    - "form": "baso"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "penis"
      "concept": "penis"
      "tones": "LH"
    - "form": "basa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "vagina"
      "concept": "vagina"
      "tones": "LH"
    - "form": "basu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "testicle"
      "concept": "testicle"
      "tones": "LH"
    - "form": "paliwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "food"
      "concept": "food"
      "tones": "LHL"
    - "form": "palu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to eat"
      "concept": "eat"
      "tones": "LH"
    - "form": "selu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a drink"
      "concept": "drink-noun"
      "tones": "LH"
    - "form": "seli"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to drink"
      "concept": "drink-verb"
      "tones": "LH"
    - "form": "salu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "water"
      "concept": "water"
      "tones": "LH"
    - "form": "walu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "air"
      "concept": "air"
      "tones": "LH"
    - "form": "walo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "breath"
      "concept": "breath"
      "tones": "LH"
    - "form": "wali"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to breathe"
      "concept": "breathe"
      "tones": "LH"
    - "form": "nomo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sleep"
      "concept": "sleep-noun"
      "tones": "LH"
    - "form": "nomi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sleep"
      "concept": "sleep-verb"
      "tones": "LH"
    - "form": "sulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "urine"
      "concept": "urine"
      "tones": "LH"
    - "form": "suli"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to urinate"
      "concept": "urinate"
      "tones": "LH"
    - "form": "dono"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "dung"
      "concept": "dung"
      "tones": "LH"
    - "form": "doni"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to defecate"
      "concept": "defecate"
      "tones": "LH"
    - "form": "hoba meli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "warmth"
      "concept": "warmth"
      "built": ["hoba", "meli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "kolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["shelter", "an abode; a house; a home"]
      "concept": ["shelter", "abode"]
      "tones": "LH"
    - "form": "pamuwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hunger"
      "concept": "hunger"
      "tones": "LHL"
    - "form": "pamuwo kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "hungry"
      "concept": "hungry"
      "built": ["pamuwo", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "saluba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thirst"
      "concept": "thirst"
      "tones": "LHL"
    - "form": "saluba kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "thirsty"
      "concept": "thirsty"
      "built": ["saluba", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "wali dalo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "inhale"
      "concept": "inhale"
      "built": ["wali", "dalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "wali helo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "exhale"
      "concept": "exhale"
      "built": ["wali", "helo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "wali wano"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "suffocate"
      "concept": "suffocate"
      "built": ["wali", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nomu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "wake"
      "concept": "wake"
      "tones": "LH"
    - "form": "nomu doba"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "awake"
      "concept": "awake"
      "built": ["nomu", "doba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nomelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a dream"
      "concept": "dream"
      "tones": "LHL"
    - "form": "nomalo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "rest (noun)"
      "concept": "rest"
      "tones": "LHL"
    - "form": "nomalo kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "tired"
      "concept": "tired"
      "built": ["nomalo", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "peni"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sweat"
      "concept": "sweat-verb"
      "tones": "LH"
    - "form": "hobalu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "heat"
      "concept": "heat"
      "tones": "LHL"
    - "form": "sobu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cold as a bodily need or temperature condition"
      "concept": "cold-noun"
      "tones": "LH"
    - "form": "hobali"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "hot"
      "concept": "hot"
      "tones": "LHL"
    - "form": "hobali sini"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "warm"
      "concept": "warm"
      "built": ["hobali", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "sobu sini"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "cool"
      "concept": "cool"
      "built": ["sobu", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sobu kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "freeze"
      "concept": "freeze"
      "built": ["sobu", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "hoba kumo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "burn"
      "concept": "burn"
      "built": ["hoba", "kumo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "koluba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "safety"
      "concept": "safety"
      "tones": "LHL"
    - "form": "wosiba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "danger"
      "concept": "danger"
      "tones": "LHL"
    - "form": "kolubo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "protection"
      "concept": "protection"
      "tones": "LHL"
    - "form": "basili"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sex"
      "concept": "sex"
      "tones": "LHL"
    - "form": "somuli"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "conceive"
      "concept": "conceive"
      "tones": "LHL"
    - "form": "somuba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pregnancy"
      "concept": "pregnancy"
      "tones": "LHL"
    - "form": "somuba kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "pregnant"
      "concept": "pregnant"
      "built": ["somuba", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "somulo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "birth"
      "concept": "birth"
      "tones": "LHL"
    - "form": "somulo doba"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "give birth"
      "concept": "give-birth"
      "built": ["somulo", "doba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "kobi hira"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to nurse a child; to feed a child at the breast"
      "concept": "nurse"
      "built": ["kobi", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "somabo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to age; to grow older"
      "concept": "age-verb"
      "tones": "LHL"
    - "form": "nobu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "death"
      "concept": "death"
      "tones": "LH"
    - "form": "nobi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dead"
      "concept": "dead"
      "tones": "LH"
    - "form": "beluba"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "healthy; hale"
      "concept": "healthy"
      "tones": "LHL"
    - "form": "belu wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "sick; ill"
      "concept": "sick"
      "built": ["belu", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "seloba"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "injured; wounded"
      "concept": "injured"
      "tones": "LHL"
    - "form": "nabu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Strong"
      "concept": "strong"
      "tones": "LH"
    - "form": "nabu wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "weak"
      "concept": "weak"
      "built": ["nabu", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nabu wano bolu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "exhausted"
      "concept": "exhausted"
      "built": ["nabu", "wano", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLHL
    - "form": "paliwo meliko"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "full; satisfied after eating or drinking"
      "concept": "sated"
      "built": ["paliwo", "meliko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHL
    - "form": "sobu kele kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "cold in temperature"
      "concept": "cold"
      "built": ["sobu", "kele", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHHHL
    - "form": "hobalu belu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "feverish"
      "concept": "feverish"
      "built": ["hobalu", "belu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "bulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Pain"
      "concept": "pain"
      "tones": "LH"
    - "form": "buli"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hurt; to cause pain or injury to someone"
      "concept": "hurt-verb"
      "tones": "LH"
    - "form": "bulu kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "ache"
      "concept": "ache"
      "built": ["bulu", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "bulu kumi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "suffer"
      "concept": "suffer"
      "built": ["bulu", "kumi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "banu helo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "Bleed"
      "concept": "bleed"
      "built": ["banu", "helo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "belo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "heal"
      "concept": "heal"
      "tones": "LH"
    - "form": "belo nomu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "recover"
      "concept": "recover"
      "built": ["belo", "nomu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["Blind", "opaque"]
      "concept": ["blind", "opaque"]
      "built": ["nelo", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "bami wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "deaf"
      "concept": "deaf"
      "built": ["bami", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "dano wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "lame"
      "concept": "lame"
      "built": ["dano", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLHL
    - "form": "nobi wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Alive"
      "concept": "alive"
      "built": ["nobi", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nebu kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "conscious"
      "concept": "conscious"
      "built": ["nebu", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "nebu wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unconscious"
      "concept": "unconscious"
      "built": ["nebu", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "somabo kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "aging; growing older"
      "concept": "aging"
      "built": ["somabo", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "bulu kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "to hurt; to experience bodily pain"
      "concept": "hurt-pain"
      "built": ["bulu", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "some"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "mother"
      "concept": "mother"
      "tones": "LH"
    - "form": "somo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "father"
      "concept": "father"
      "tones": "LH"
    - "form": "some somo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "parent"
      "concept": "parent"
      "built": ["some", "somo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sepo bame"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["son", "boy"]
      "concept": ["son", "boy"]
      "built": ["sepo", "bame"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sepo bamiwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["daughter", "girl"]
      "concept": ["daughter", "girl"]
      "built": ["sepo", "bamiwo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "samelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "brother"
      "concept": "brother"
      "tones": "LHL"
    - "form": "samilo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sister"
      "concept": "sister"
      "tones": "LHL"
    - "form": "some some"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grandmother"
      "concept": "grandmother"
      "built": ["some", "some"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "somo somo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grandfather"
      "concept": "grandfather"
      "built": ["somo", "somo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sepo sepo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grandchild"
      "concept": "grandchild"
      "built": ["sepo", "sepo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "samelo some somo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "uncle"
      "concept": "uncle"
      "built": ["samelo", "some", "somo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHLH
    - "form": "samilo some somo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "aunt"
      "concept": "aunt"
      "built": ["samilo", "some", "somo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHLH
    - "form": "sepo samelo samilo some somo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cousin"
      "concept": "cousin"
      "built": ["sepo", "samelo", "samilo", "some", "somo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLLHLLHLH
    - "form": "lome"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "husband"
      "concept": "husband"
      "tones": "LH"
    - "form": "lomi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wife"
      "concept": "wife"
      "tones": "LH"
    - "form": "somela"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "descendant"
      "concept": "descendant"
      "tones": "LHL"
    - "form": "sepo some somo wano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "orphan"
      "concept": "orphan"
      "built": ["sepo", "some", "somo", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLHHL
    - "form": "lomi lome nobi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "widow"
      "concept": "widow"
      "built": ["lomi", "lome", "nobi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "some somo some somo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grandparent"
      "concept": "grandparent"
      "built": ["some", "somo", "some", "somo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLHLH
    - "form": "sepo bame samelo samilo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "nephew"
      "concept": "nephew"
      "built": ["sepo", "bame", "samelo", "samilo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLLHLLHL
    - "form": "sepo bamiwo samelo samilo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "niece"
      "concept": "niece"
      "built": ["sepo", "bamiwo", "samelo", "samilo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLLHLLHL
    - "form": "lomo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "spouse"
      "concept": "spouse"
      "tones": "LH"
    - "form": "lomuba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "marriage"
      "concept": "marriage"
      "tones": "LHL"
    - "form": "lomu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "marry"
      "concept": "marry"
      "tones": "LH"
    - "form": "somela dumo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "family"
      "concept": "family"
      "built": ["somela", "dumo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "somela biko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "kin"
      "concept": "kin"
      "built": ["somela", "biko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "somela kiro"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lineage"
      "concept": "lineage"
      "built": ["somela", "kiro"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "lome lomi nobi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "widower"
      "concept": "widower"
      "built": ["lome", "lomi", "nobi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "benoba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "friend"
      "concept": "friend"
      "tones": "LHL"
    - "form": "gomuba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "enemy"
      "concept": "enemy"
      "tones": "LHL"
    - "form": "biko pewa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "neighbor"
      "concept": "neighbor"
      "built": ["biko", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLL
    - "form": "yobiko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "guest"
      "concept": "guest"
      "tones": "LHL"
    - "form": "yobindo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "host"
      "concept": "host"
      "tones": "LHL"
    - "form": "biko dano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "follower"
      "concept": "follower"
      "built": ["biko", "dano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLL
    - "form": "biko kele"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "servant"
      "concept": "servant"
      "built": ["biko", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHH
    - "form": "biko kele bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "master"
      "concept": "master"
      "built": ["biko", "kele", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHHHL
    - "form": "biko tembo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "teacher"
      "concept": "teacher"
      "built": ["biko", "tembo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "biko tembi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "student"
      "concept": "student"
      "built": ["biko", "tembi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "salo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a chair"
      "concept": "chair"
      "tones": "LH"
    - "form": "tapelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a table"
      "concept": "table"
      "tones": "LHL"
    - "form": "nomolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a bed"
      "concept": "bed"
      "tones": "LHL"
    - "form": "kolu dalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a floor"
      "concept": "floor"
      "built": ["kolu", "dalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kolu pewa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a wall"
      "concept": "wall"
      "built": ["kolu", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "kolu tolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a roof"
      "concept": "roof"
      "built": ["kolu", "tolo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "hoba kolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a hearth"
      "concept": "hearth"
      "built": ["hoba", "kolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "hebo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a door"
      "concept": "door"
      "tones": "LH"
    - "form": "hebo nabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a lock"
      "concept": "lock"
      "built": ["hebo", "nabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "hebo nabe"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a key"
      "concept": "key"
      "built": ["hebo", "nabe"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo hebo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a window"
      "concept": "window"
      "built": ["nelo", "hebo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo hebo kabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shutters"
      "concept": "shutters"
      "built": ["nelo", "hebo", "kabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "selolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a cup"
      "concept": "cup"
      "tones": "LHL"
    - "form": "palolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a bowl"
      "concept": "bowl"
      "tones": "LHL"
    - "form": "kipo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a knife"
      "concept": "knife"
      "tones": "LH"
    - "form": "palolo sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a spoon"
      "concept": "spoon"
      "built": ["palolo", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "palobo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a pot"
      "concept": "pot"
      "tones": "LHL"
    - "form": "hoba selolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a lamp"
      "concept": "lamp"
      "built": ["hoba", "selolo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLHL
    - "form": "sebo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["cloth", "garment"]
      "concept": ["cloth", "garment"]
      "tones": "LH"
    - "form": "sebo biko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "clothes"
      "concept": "clothes"
      "built": ["sebo", "biko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "kolu selo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "room"
      "concept": "room"
      "built": ["kolu", "selo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kolu tolo selo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ceiling"
      "concept": "ceiling"
      "built": ["kolu", "tolo", "selo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "salolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "seat"
      "concept": "seat"
      "tones": "LHL"
    - "form": "salo bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bench"
      "concept": "bench"
      "built": ["salo", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "selobo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "jar"
      "concept": "jar"
      "tones": "LHL"
    - "form": "selobu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bottle"
      "concept": "bottle"
      "tones": "LHL"
    - "form": "paloba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "basket"
      "concept": "basket"
      "tones": "LHL"
    - "form": "palobu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bag"
      "concept": "bag"
      "tones": "LHL"
    - "form": "kalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "rope"
      "concept": "rope"
      "tones": "LH"
    - "form": "kali"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cord"
      "concept": "cord"
      "tones": "LH"
    - "form": "kaliba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "needle"
      "concept": "needle"
      "tones": "LHL"
    - "form": "hoba neli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "flame"
      "concept": "flame"
      "built": ["hoba", "neli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "hobamo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "smoke"
      "concept": "smoke"
      "tones": "LHL"
    - "form": "hobaso"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ash"
      "concept": "ash"
      "tones": "LHL"
    - "form": "hobano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "coal"
      "concept": "coal"
      "tones": "LHL"
    - "form": "hoba kalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "torch"
      "concept": "torch"
      "built": ["hoba", "kalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "hoba sebo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "candle"
      "concept": "candle"
      "built": ["hoba", "sebo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "sebo koba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shirt"
      "concept": "shirt"
      "built": ["sebo", "koba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo boko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cloak"
      "concept": "cloak"
      "built": ["sebo", "boko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo bako"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "belt"
      "concept": "belt"
      "built": ["sebo", "bako"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo dalu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shoe"
      "concept": "shoe"
      "built": ["sebo", "dalu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo dalu bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "boot"
      "concept": "boot"
      "built": ["sebo", "dalu", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "hebo bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "gate"
      "concept": "gate"
      "built": ["hebo", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "kabo bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "barrier"
      "concept": "barrier"
      "built": ["kabo", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "gbele buna"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wood"
      "concept": "wood"
      "built": ["gbele", "buna"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "baloba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["stone", "rock"]
      "concept": ["stone", "rock"]
      "tones": "LHL"
    - "form": "gbano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "metal"
      "concept": "metal"
      "tones": "LH"
    - "form": "saboho"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "clay"
      "concept": "clay"
      "tones": "LHL"
    - "form": "selo nobi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "leather"
      "concept": "leather"
      "built": ["selo", "nobi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo kebu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wool"
      "concept": "wool"
      "built": ["sebo", "kebu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thread"
      "concept": "thread"
      "tones": "LH"
    - "form": "daba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "earth"
      "concept": "earth"
      "tones": "LH"
    - "form": "dabi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "soil"
      "concept": "soil"
      "tones": "LH"
    - "form": "baloba sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sand"
      "concept": "sand"
      "built": ["baloba", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "daba salu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "mud"
      "concept": "mud"
      "built": ["daba", "salu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "daba sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "dust"
      "concept": "dust"
      "built": ["daba", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "daba bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "land"
      "concept": "land"
      "built": ["daba", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "dabolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "mountain"
      "concept": "mountain"
      "tones": "LHL"
    - "form": "dabolo sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hill"
      "concept": "hill"
      "built": ["dabolo", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "daba moro"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "valley"
      "concept": "valley"
      "built": ["daba", "moro"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "daba lami"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a plain; flat open land"
      "concept": "plain-landform"
      "built": ["daba", "lami"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "paloho"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "field"
      "concept": "field"
      "tones": "LHL"
    - "form": "daba kolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cave"
      "concept": "cave"
      "built": ["daba", "kolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "luwa sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "stream"
      "concept": "stream"
      "built": ["luwa", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "salu kolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lake"
      "concept": "lake"
      "built": ["salu", "kolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "salu bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sea"
      "concept": "sea"
      "built": ["salu", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "salu bolu bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ocean"
      "concept": "ocean"
      "built": ["salu", "bolu", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLHL
    - "form": "salu pewa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shore"
      "concept": "shore"
      "built": ["salu", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "rano sobu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "snow"
      "concept": "snow"
      "built": ["rano", "sobu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "salu sobu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ice"
      "concept": "ice"
      "built": ["salu", "sobu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "toloho"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sky"
      "concept": "sky"
      "tones": "LHL"
    - "form": "hobelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sun"
      "concept": "sun"
      "tones": "LHL"
    - "form": "sobelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "moon"
      "concept": "moon"
      "tones": "LHL"
    - "form": "tololi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "star"
      "concept": "star"
      "tones": "LHL"
    - "form": "tolomo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cloud"
      "concept": "cloud"
      "tones": "LHL"
    - "form": "walu dano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wind"
      "concept": "wind"
      "built": ["walu", "dano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "rano bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "storm"
      "concept": "storm"
      "built": ["rano", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLHL
    - "form": "rano bamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thunder"
      "concept": "thunder"
      "built": ["rano", "bamu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "rano neli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lightning"
      "concept": "lightning"
      "built": ["rano", "neli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "gbele sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "plant"
      "concept": "plant"
      "built": ["gbele", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "gbele sebo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "leaf"
      "concept": "leaf"
      "built": ["gbele", "sebo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "gbele dalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "root"
      "concept": "root"
      "built": ["gbele", "dalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "gbele mabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "branch"
      "concept": "branch"
      "built": ["gbele", "mabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "gbele meli"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "flower"
      "concept": "flower"
      "built": ["gbele", "meli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "gbele paliwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fruit"
      "concept": "fruit"
      "built": ["gbele", "paliwo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLHL
    - "form": "gbele sepo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "seed"
      "concept": "seed"
      "built": ["gbele", "sepo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "daba kebu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grass"
      "concept": "grass"
      "built": ["daba", "kebu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "beloho"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "animal"
      "concept": "animal"
      "tones": "LHL"
    - "form": "beloho bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "beast"
      "concept": "beast"
      "built": ["beloho", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "welu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bird"
      "concept": "bird"
      "tones": "LH"
    - "form": "welu sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "insect"
      "concept": "insect"
      "built": ["welu", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dabali"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "worm"
      "concept": "worm"
      "tones": "LHL"
    - "form": "salu kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "wet"
      "concept": "wet"
      "built": ["salu", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "salu wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dry"
      "concept": "dry"
      "built": ["salu", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "neli bolu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "bright"
      "concept": "bright"
      "built": ["neli", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "tolomo wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "clear weather; without clouds"
      "concept": "clear-weather"
      "built": ["tolomo", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "tolomo kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "cloudy"
      "concept": "cloudy"
      "built": ["tolomo", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "ndelu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "north"
      "concept": "north"
      "tones": "LH"
    - "form": "ndolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "south"
      "concept": "south"
      "tones": "LH"
    - "form": "hobelo nomu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["east", "dawn"]
      "concept": ["east", "dawn"]
      "built": ["hobelo", "nomu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "hobelo nomi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["west", "dusk"]
      "concept": ["west", "dusk"]
      "built": ["hobelo", "nomi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "nuki"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "three"
      "concept": "three"
      "tones": "LH"
    - "form": "nuko"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "four"
      "concept": "four"
      "tones": "LH"
    - "form": "nuku"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "five"
      "concept": "five"
      "tones": "LH"
    - "form": "meka"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "six"
      "concept": "six"
      "tones": "LH"
    - "form": "meke"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "seven"
      "concept": "seven"
      "tones": "LH"
    - "form": "meki"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "eight"
      "concept": "eight"
      "tones": "LH"
    - "form": "meko"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "nine"
      "concept": "nine"
      "tones": "LH"
    - "form": "meku"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "ten"
      "concept": "ten"
      "tones": "LH"
    - "form": "meku nuke"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "twenty"
      "concept": "twenty"
      "built": ["meku", "nuke"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "mekuba"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "a hundred"
      "concept": "hundred"
      "tones": "LHL"
    - "form": "mekubo"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "a thousand"
      "concept": "thousand"
      "tones": "LHL"
    - "form": "nuka keno"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "first in ordinal position"
      "concept": "first"
      "built": ["nuka", "keno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nuke keno"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "second"
      "concept": "second"
      "built": ["nuke", "keno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "nuki keno"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "third"
      "concept": "third"
      "built": ["nuki", "keno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nuke pali"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "half"
      "concept": "half"
      "built": ["nuke", "pali"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "maba"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "many"
      "concept": "many"
      "tones": "LH"
    - "form": "saba"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "few"
      "concept": "few"
      "tones": "LH"
    - "form": "wano keno"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "none; nothing"
      "concept": "none"
      "built": ["wano", "keno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "nukwa"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "zero"
      "concept": "zero"
      "tones": "LH"
    - "form": "meku keno"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "tenth; a numbered position, with the cardinal followed by keno for any later ordinal"
      "concept": "ordinal-construction"
      "built": ["meku", "keno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nuko pali"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "quarter"
      "concept": "quarter"
      "built": ["nuko", "pali"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "mbaka toba"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "more"
      "concept": "more"
      "built": ["mbaka", "toba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "sika toba"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "less"
      "concept": "less"
      "built": ["sika", "toba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "mbaka bolu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["most", "extremely"]
      "concept": ["most", "extremely"]
      "built": ["mbaka", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "sika bolu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "least"
      "concept": "least"
      "built": ["sika", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "leli keno"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "equal"
      "concept": "equal"
      "built": ["leli", "keno"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "bika"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "each"
      "concept": "each"
      "tones": "LH"
    - "form": "bika beka"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "every"
      "concept": "every"
      "built": ["bika", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nuke beka"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "both"
      "concept": "both"
      "built": ["nuke", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "nuka nuke"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "either"
      "concept": "either"
      "built": ["nuka", "nuke"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nuka nuke wano"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "neither"
      "concept": "neither"
      "built": ["nuka", "nuke", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLHL
    - "form": "leli sini"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "about"
      "concept": "about"
      "built": ["leli", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "doba sini"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "almost"
      "concept": "almost"
      "built": ["doba", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "leli kele"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "exactly"
      "concept": "exactly"
      "built": ["leli", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "nukalo"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "number"
      "concept": "number"
      "tones": "LHL"
    - "form": "mbakalo"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "amount"
      "concept": "amount"
      "tones": "LHL"
    - "form": "dobi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "measure"
      "concept": "measure-verb"
      "tones": "LH"
    - "form": "nukiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "count"
      "concept": "count-verb"
      "tones": "LHL"
    - "form": "gbasa bolu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "black"
      "concept": "black"
      "built": ["gbasa", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HHHL
    - "form": "selan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "white"
      "concept": "white"
      "tones": "LH"
    - "form": "belan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "red"
      "concept": "red"
      "tones": "LH"
    - "form": "yesan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "green"
      "concept": "green"
      "tones": "LH"
    - "form": "hoban"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "yellow"
      "concept": "yellow"
      "tones": "LH"
    - "form": "luwan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "blue"
      "concept": "blue"
      "tones": "LH"
    - "form": "gbanan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "grey"
      "concept": "grey"
      "tones": "LH"
    - "form": "daban"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "brown"
      "concept": "brown"
      "tones": "LH"
    - "form": "selan sini"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "light in colour; approaching white"
      "concept": "light-colour"
      "built": ["selan", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "selan melo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "pale"
      "concept": "pale"
      "built": ["selan", "melo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "neli lami"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "clear in appearance"
      "concept": "clear-appearance"
      "built": ["neli", "lami"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo helo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "transparent"
      "concept": "transparent"
      "built": ["nelo", "helo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "neli meli"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "shiny"
      "concept": "shiny"
      "built": ["neli", "meli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "neli sobu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dull"
      "concept": "dull-appearance"
      "built": ["neli", "sobu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo lami"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "plain; without a pattern"
      "concept": "plain-pattern"
      "built": ["sebo", "lami"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo balo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "spotted"
      "concept": "spotted"
      "built": ["sebo", "balo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo kiro"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "striped"
      "concept": "striped"
      "built": ["sebo", "kiro"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kado"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to have"
      "concept": "have"
      "tones": "LH"
    - "form": "nodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to go"
      "concept": "go"
      "tones": "LH"
    - "form": "nudi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to come"
      "concept": "come"
      "tones": "LH"
    - "form": "tadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to take"
      "concept": "take"
      "tones": "LH"
    - "form": "medi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to make"
      "concept": "make"
      "tones": "LH"
    - "form": "dedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to do"
      "concept": "do"
      "tones": "LH"
    - "form": "sedu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to say"
      "concept": "say"
      "tones": "LH"
    - "form": "sedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to speak"
      "concept": "speak"
      "tones": "LH"
    - "form": "keni"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to know"
      "concept": "know"
      "tones": "LH"
    - "form": "nedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to think"
      "concept": "think"
      "tones": "LH"
    - "form": "yemi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to want"
      "concept": "want"
      "tones": "LH"
    - "form": "beliwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to live"
      "concept": "live"
      "tones": "LHL"
    - "form": "nobiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to die"
      "concept": "die"
      "tones": "LHL"
    - "form": "ndali"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to run"
      "concept": "run"
      "tones": "LH"
    - "form": "sadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sit"
      "concept": "sit"
      "tones": "LH"
    - "form": "tadiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to stand"
      "concept": "stand"
      "tones": "LHL"
    - "form": "nomi dalo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lie down"
      "concept": "lie-down"
      "built": ["nomi", "dalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hold"
      "concept": "hold"
      "tones": "LH"
    - "form": "nadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to bring"
      "concept": "bring"
      "tones": "LH"
    - "form": "padi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to put"
      "concept": "put"
      "tones": "LH"
    - "form": "hedolo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to find"
      "concept": "find"
      "tones": "LHL"
    - "form": "podi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lose"
      "concept": "lose"
      "tones": "LH"
    - "form": "hedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to open"
      "concept": "open"
      "tones": "LH"
    - "form": "kabi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to close"
      "concept": "close"
      "tones": "LH"
    - "form": "badi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to begin"
      "concept": "begin"
      "tones": "LH"
    - "form": "bodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to end"
      "concept": "end"
      "tones": "LH"
    - "form": "kediwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to exist"
      "concept": "exist"
      "tones": "LHL"
    - "form": "kado biko"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to belong"
      "concept": "belong"
      "built": ["kado", "biko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "bedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to become"
      "concept": "become"
      "tones": "LH"
    - "form": "kedi kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to remain"
      "concept": "remain"
      "built": ["kedi", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHH
    - "form": "nodi helo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to leave"
      "concept": "leave"
      "built": ["nodi", "helo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nudi kolu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to arrive"
      "concept": "arrive"
      "built": ["nudi", "kolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dadali"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to crawl"
      "concept": "crawl"
      "tones": "LHL"
    - "form": "gbele dandi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to climb"
      "concept": "climb"
      "built": ["gbele", "dandi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "dadalo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to jump"
      "concept": "jump"
      "tones": "LHL"
    - "form": "dadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to fall"
      "concept": "fall"
      "tones": "LH"
    - "form": "todi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to rise"
      "concept": "rise"
      "tones": "LH"
    - "form": "dalo nodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to enter"
      "concept": "enter"
      "built": ["dalo", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "helo nodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to exit"
      "concept": "exit"
      "built": ["helo", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "nudi dabo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to return"
      "concept": "return"
      "built": ["nudi", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dano kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to follow"
      "concept": "follow"
      "built": ["dano", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLHH
    - "form": "dano kpaso"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lead"
      "concept": "lead"
      "built": ["dano", "kpaso"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLHL
    - "form": "kabiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to carry"
      "concept": "carry"
      "tones": "LHL"
    - "form": "dodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to move"
      "concept": "move"
      "tones": "LH"
    - "form": "padiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to push"
      "concept": "push"
      "tones": "LHL"
    - "form": "pudi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to pull"
      "concept": "pull"
      "tones": "LH"
    - "form": "ladi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lift"
      "concept": "lift"
      "tones": "LH"
    - "form": "lodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to drop"
      "concept": "drop"
      "tones": "LH"
    - "form": "tedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to throw"
      "concept": "throw"
      "tones": "LH"
    - "form": "todiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to catch"
      "concept": "catch"
      "tones": "LHL"
    - "form": "kolu medi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to build"
      "concept": "build"
      "built": ["kolu", "medi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "medi sepo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to create"
      "concept": "create"
      "built": ["medi", "sepo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kobiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to break"
      "concept": "break"
      "tones": "LHL"
    - "form": "kobiwo bolu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to destroy"
      "concept": "destroy"
      "built": ["kobiwo", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "belo medi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to repair"
      "concept": "repair"
      "built": ["belo", "medi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "bediwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to change"
      "concept": "change-verb"
      "tones": "LHL"
    - "form": "sedu biko"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to tell"
      "concept": "tell"
      "built": ["sedu", "biko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sedu nebi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to ask"
      "concept": "ask"
      "built": ["sedu", "nebi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu dabo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to answer"
      "concept": "answer"
      "built": ["sedu", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu bamu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to call"
      "concept": "call"
      "built": ["sedu", "bamu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu bolu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to shout"
      "concept": "shout"
      "built": ["sedu", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sedu sini"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to whisper"
      "concept": "whisper"
      "built": ["sedu", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu nelo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to explain"
      "concept": "explain"
      "built": ["sedu", "nelo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu nukalo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": ["to name", "namely"]
      "concept": ["name-verb", "namely"]
      "built": ["sedu", "nukalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "bemi kadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to believe"
      "concept": "believe"
      "built": ["bemi", "kadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "keni palo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to understand"
      "concept": "understand"
      "built": ["keni", "palo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "keni dabo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to remember"
      "concept": "remember"
      "built": ["keni", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "keni wano"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to forget"
      "concept": "forget"
      "built": ["keni", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "keni nudi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to learn"
      "concept": "learn"
      "built": ["keni", "nudi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "tembo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to teach"
      "concept": "teach"
      "tones": "LH"
    - "form": "nebadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to decide"
      "concept": "decide"
      "tones": "LHL"
    - "form": "nomelo medi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to imagine"
      "concept": "imagine"
      "built": ["nomelo", "medi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "dobadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to need"
      "concept": "need-verb"
      "tones": "LHL"
    - "form": "yemi sedu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to wish"
      "concept": "wish-verb"
      "built": ["yemi", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "yeli kadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hope"
      "concept": "hope-verb"
      "built": ["yeli", "kadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "yemi dabo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to intend"
      "concept": "intend"
      "built": ["yemi", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dobadi keni"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to choose"
      "concept": "choose"
      "built": ["dobadi", "keni"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "yemi mbaka"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to prefer"
      "concept": "prefer"
      "built": ["yemi", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "dedi tabe"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to try"
      "concept": "try"
      "built": ["dedi", "tabe"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo yemi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to search"
      "concept": "search"
      "built": ["nelo", "yemi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "biko nudi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to meet"
      "concept": "meet"
      "built": ["biko", "nudi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "hadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to help"
      "concept": "help"
      "tones": "LH"
    - "form": "gbedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to trade"
      "concept": "trade"
      "tones": "LH"
    - "form": "gbedi tadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to buy"
      "concept": "buy"
      "built": ["gbedi", "tadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "gbedi hira"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sell"
      "concept": "sell"
      "built": ["gbedi", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to promise"
      "concept": "promise-verb"
      "built": ["sedu", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "hibo sedu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to thank"
      "concept": "thank-verb"
      "built": ["hibo", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "doli hira"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to forgive"
      "concept": "forgive-verb"
      "built": ["doli", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu wano"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to refuse"
      "concept": "refuse-verb"
      "built": ["sedu", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sedu leli"
      "class": "v"
      "field": "Everyday speech"
      "gloss": ["to agree", "That is"]
      "concept": ["agree-verb", "that-is"]
      "built": ["sedu", "leli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "gbadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to fight"
      "concept": "fight"
      "tones": "LH"
    - "form": "badiwo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hit"
      "concept": "hit"
      "tones": "LHL"
    - "form": "nobiwo medi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to kill"
      "concept": "kill"
      "built": ["nobiwo", "medi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "koluba kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to defend"
      "concept": "defend"
      "built": ["koluba", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "gbadi nodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to attack"
      "concept": "attack"
      "built": ["gbadi", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "wosi nodi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to flee"
      "concept": "flee"
      "built": ["wosi", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "wosi hira"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to threaten"
      "concept": "threaten"
      "built": ["wosi", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dedi wano"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to stop"
      "concept": "stop"
      "built": ["dedi", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "dedi kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to continue"
      "concept": "continue"
      "built": ["dedi", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "sadi kele"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to wait"
      "concept": "wait"
      "built": ["sadi", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "dedi nudi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to happen"
      "concept": "happen"
      "built": ["dedi", "nudi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dale dadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to kneel"
      "concept": "kneel"
      "built": ["dale", "dadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "boko dadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to bend"
      "concept": "bend"
      "built": ["boko", "dadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "boko padi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lean"
      "concept": "lean"
      "built": ["boko", "padi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo padi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to cover"
      "concept": "cover-verb"
      "built": ["sebo", "padi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sebo helo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to uncover"
      "concept": "uncover"
      "built": ["sebo", "helo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nelo kabo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hide"
      "concept": "hide"
      "built": ["nelo", "kabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nelo hira"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to reveal"
      "concept": "reveal"
      "built": ["nelo", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "hebo nabo kadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lock"
      "concept": "lock-verb"
      "built": ["hebo", "nabo", "kadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "hebo nabo helo"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to unlock"
      "concept": "unlock"
      "built": ["hebo", "nabo", "helo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "daloho"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Here"
      "concept": "here"
      "tones": "LHL"
    - "form": "heloho"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "there"
      "concept": "there"
      "tones": "LHL"
    - "form": "daloho soka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "somewhere"
      "concept": "somewhere"
      "built": ["daloho", "soka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "daloho wano"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "nowhere"
      "concept": "nowhere"
      "built": ["daloho", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "daloho beka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "everywhere"
      "concept": "everywhere"
      "built": ["daloho", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "pewani"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Near"
      "concept": "near"
      "tones": "LHL"
    - "form": "pewano"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "far"
      "concept": "far"
      "tones": "LHL"
    - "form": "pewa tabe"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "beside"
      "concept": "beside"
      "built": ["pewa", "tabe"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "nuke sepa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "between"
      "concept": "between"
      "built": ["nuke", "sepa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "biko sepa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "among"
      "concept": "among"
      "built": ["biko", "sepa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "danulo tolo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "under"
      "concept": "under"
      "built": ["danulo", "tolo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHLH
    - "form": "tolo danulo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "over"
      "concept": "over"
      "built": ["tolo", "danulo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLH
    - "form": "pewa helo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "beyond"
      "concept": "beyond"
      "built": ["pewa", "helo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLHL
    - "form": "tolo pewa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "before; in front of (spatial)"
      "concept": "before-spatial"
      "built": ["tolo", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "boko pewa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "behind"
      "concept": "behind"
      "built": ["boko", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "malo same"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "left (direction)"
      "concept": "left-direction"
      "built": ["malo", "same"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "malo sami"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "right (direction)"
      "concept": "right-direction"
      "built": ["malo", "sami"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sepa nuka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "center"
      "concept": "center"
      "built": ["sepa", "nuka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "tolo nodi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Up"
      "concept": "up"
      "built": ["tolo", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "danulo nodi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "down"
      "concept": "down"
      "built": ["danulo", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHLH
    - "form": "tolo padi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "forward"
      "concept": "forward"
      "built": ["tolo", "padi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "boko padi tabe"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "backward"
      "concept": "backward"
      "built": ["boko", "padi", "tabe"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "sepa dano"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "through"
      "concept": "through"
      "built": ["sepa", "dano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "nuke pewa dano"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "across"
      "concept": "across"
      "built": ["nuke", "pewa", "dano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLLLL
    - "form": "pewa dano"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "around"
      "concept": "around"
      "built": ["pewa", "dano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLL
    - "form": "sepa kedi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "In"
      "concept": "in"
      "built": ["sepa", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "tolo kedi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "on"
      "concept": "on"
      "built": ["tolo", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "daloho kedi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "at"
      "concept": "at"
      "built": ["daloho", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "hewa kedi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "from"
      "concept": "from"
      "built": ["hewa", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "pawa kedi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "to"
      "concept": "to"
      "built": ["pawa", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "daboko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a place; a location"
      "concept": "place-noun"
      "tones": "LHL"
    - "form": "daboki"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "position"
      "concept": "position"
      "tones": "LHL"
    - "form": "kiro nukalo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "direction"
      "concept": "direction"
      "built": ["kiro", "nukalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "kiro nukali"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "distance"
      "concept": "distance"
      "built": ["kiro", "nukali"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "ladoba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "time; the passage or span in which events occur"
      "concept": "time"
      "tones": "LHL"
    - "form": "ladiwo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "moment"
      "concept": "moment"
      "tones": "LHL"
    - "form": "habelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "day"
      "concept": "day"
      "tones": "LHL"
    - "form": "nobelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "night"
      "concept": "night"
      "tones": "LHL"
    - "form": "hobelo nomu lado"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "morning"
      "concept": "morning"
      "built": ["hobelo", "nomu", "lado"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHLH
    - "form": "hobelo tolo lado"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "noon"
      "concept": "noon"
      "built": ["hobelo", "tolo", "lado"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHLH
    - "form": "hobelo nomi lado"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "evening"
      "concept": "evening"
      "built": ["hobelo", "nomi", "lado"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHLH
    - "form": "nobelo moro"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "midnight"
      "concept": "midnight"
      "built": ["nobelo", "moro"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLL
    - "form": "ladoni"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "now"
      "concept": "now"
      "tones": "LHL"
    - "form": "ladono"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "then"
      "concept": "then"
      "tones": "LHL"
    - "form": "habelo ladoni"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "today"
      "concept": "today"
      "built": ["habelo", "ladoni"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHL
    - "form": "habelo dabo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "yesterday"
      "concept": "yesterday"
      "built": ["habelo", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "habelo nudo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "tomorrow"
      "concept": "tomorrow"
      "built": ["habelo", "nudo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "lado dabo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "past"
      "concept": "past"
      "built": ["lado", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado ladoni"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "present"
      "concept": "present"
      "built": ["lado", "ladoni"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "lado nudo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "future"
      "concept": "future"
      "built": ["lado", "nudo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lado tolo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "before (temporal)"
      "concept": "before-time"
      "built": ["lado", "tolo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado boko"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "after"
      "concept": "after"
      "built": ["lado", "boko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado sepa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "during"
      "concept": "during"
      "built": ["lado", "sepa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado leli"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "while"
      "concept": "while"
      "built": ["lado", "leli"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado pawa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "until"
      "concept": "until"
      "built": ["lado", "pawa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado hewa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "since a time"
      "concept": "since-time"
      "built": ["lado", "hewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lado beka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "always"
      "concept": "always"
      "built": ["lado", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado mbaka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "often"
      "concept": "often"
      "built": ["lado", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lado soka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "sometimes"
      "concept": "sometimes"
      "built": ["lado", "soka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lado saba"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "rarely"
      "concept": "rarely"
      "built": ["lado", "saba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado wano"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "never"
      "concept": "never"
      "built": ["lado", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lado bolu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "lasting a long time"
      "concept": "long-duration"
      "built": ["lado", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lado sini"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "lasting a short time"
      "concept": "short-duration"
      "built": ["lado", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado sini sini"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "brief in duration"
      "concept": "brief-duration"
      "built": ["lado", "sini", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "lado kele"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "lasting; continuing for a sustained time"
      "concept": "lasting-duration"
      "built": ["lado", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "dabo nuka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "once"
      "concept": "once"
      "built": ["dabo", "nuka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dabo nuke"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "twice"
      "concept": "twice"
      "built": ["dabo", "nuke"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "dabo mbaka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "repeatedly"
      "concept": "repeatedly"
      "built": ["dabo", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "doba dabo"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "already"
      "concept": "already"
      "built": ["doba", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "kele lado"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "still"
      "concept": "still"
      "built": ["kele", "lado"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HHLH
    - "form": "pawa lado"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "yet"
      "concept": "yet"
      "built": ["pawa", "lado"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado pewa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "soon"
      "concept": "soon"
      "built": ["lado", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLL
    - "form": "lado boko pewa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "later"
      "concept": "later"
      "built": ["lado", "boko", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLL
    - "form": "lado tolo pewa"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "early"
      "concept": "early"
      "built": ["lado", "tolo", "pewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLL
    - "form": "lado boko bolu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "late"
      "concept": "late"
      "built": ["lado", "boko", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "lado nuka"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "first; before the other events in a sequence"
      "concept": "first-sequence"
      "built": ["lado", "nuka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lado nuke"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "next"
      "concept": "next"
      "built": ["lado", "nuke"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lado dabo bolu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "last"
      "concept": "last"
      "built": ["lado", "dabo", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "lado doba"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "finally"
      "concept": "finally"
      "built": ["lado", "doba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "rano lado"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "season"
      "concept": "season"
      "built": ["rano", "lado"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "rano dabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "year"
      "concept": "year"
      "built": ["rano", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LLLH
    - "form": "sobelo dabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "month"
      "concept": "month"
      "built": ["sobelo", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "nimo"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "I; me (the speaker)"
      "concept": "i"
      "tones": "LH"
    - "form": "nimo lako"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "my; mine (possession by the speaker)"
      "concept": "my"
      "built": ["nimo", "lako"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nimohe"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "you (person addressed; number as the language permits)"
      "concept": "you-reference"
      "tones": "LHL"
    - "form": "nimohe lako"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "your; yours (possession by the addressee)"
      "concept": "your"
      "built": ["nimohe", "lako"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "nibo"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "He"
      "concept": "he"
      "tones": "LH"
    - "form": "nibo bamiwo"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "she"
      "concept": "she"
      "built": ["nibo", "bamiwo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "nilo"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "it"
      "concept": "it"
      "tones": "LH"
    - "form": "nibo beka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "they"
      "concept": "they"
      "built": ["nibo", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nimo beka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "we; us (the speaker and others)"
      "concept": "we"
      "built": ["nimo", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nimo beka lako"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "our; ours (possession by the speaker and others)"
      "concept": "our"
      "built": ["nimo", "beka", "lako"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "delo"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "This"
      "concept": "this"
      "tones": "LH"
    - "form": "dolo"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "that"
      "concept": "that"
      "tones": "LH"
    - "form": "delo beka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "these"
      "concept": "these"
      "built": ["delo", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dolo beka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "those"
      "concept": "those"
      "built": ["dolo", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "biko soka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "Someone"
      "concept": "someone"
      "built": ["biko", "soka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "biko nuka nuke"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "anyone"
      "concept": "anyone"
      "built": ["biko", "nuka", "nuke"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLHHL
    - "form": "biko beka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "everyone"
      "concept": "everyone"
      "built": ["biko", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "biko wano"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "no one"
      "concept": "no-one"
      "built": ["biko", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "belo nise"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "Something"
      "concept": "something"
      "built": ["belo", "nise"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "belo nuka nuke"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "anything"
      "concept": "anything"
      "built": ["belo", "nuka", "nuke"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "belo beka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "everything"
      "concept": "everything"
      "built": ["belo", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nise"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "self; oneself (reflexive reference)"
      "concept": "self"
      "tones": "LH"
    - "form": "nobe"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "other"
      "concept": "other"
      "tones": "LH"
    - "form": "nobe nuka"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "another"
      "concept": "another"
      "built": ["nobe", "nuka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "leli kedi"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "Same"
      "concept": "same"
      "built": ["leli", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "leli wano"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "different"
      "concept": "different"
      "built": ["leli", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nebi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Who (question)"
      "concept": "question-who"
      "tones": "LH"
    - "form": "neboho"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "What (question)"
      "concept": "question-what"
      "tones": "LHL"
    - "form": "neki"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Which (question)"
      "concept": "question-which"
      "tones": "LH"
    - "form": "nedalo"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Where (question)"
      "concept": "question-where"
      "tones": "LHL"
    - "form": "nelado"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "When (question)"
      "concept": "question-when"
      "tones": "LHL"
    - "form": "neyabo"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Why (question)"
      "concept": "question-why"
      "tones": "LHL"
    - "form": "nepalo"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "How (question)"
      "concept": "question-how"
      "tones": "LHL"
    - "form": "nenuka"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "How many (question)"
      "concept": "question-how-many"
      "tones": "LHL"
    - "form": "nembaka"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "How much (question)"
      "concept": "question-how-much"
      "tones": "LHL"
    - "form": "nebi lako"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Whose (question)"
      "concept": "question-whose"
      "built": ["nebi", "lako"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nebi pawa"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "To whom (question)"
      "concept": "question-to-whom"
      "built": ["nebi", "pawa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nedalo hewa"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "From where (question)"
      "concept": "question-from-where"
      "built": ["nedalo", "hewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "neyemi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "For what purpose (question)"
      "concept": "question-for-what-purpose"
      "tones": "LHL"
    - "form": "nene"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "forming yes/no questions (question)"
      "concept": "question-polar"
      "tones": "LH"
    - "form": "nene dabo"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "requesting clarification (question)"
      "concept": "question-clarification"
      "built": ["nene", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "hemi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Yes"
      "concept": "yes"
      "tones": "LH"
    - "form": "kene wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "false"
      "concept": "false"
      "built": ["kene", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "kenelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "truth; accordance with what is real"
      "concept": "truth"
      "tones": "LHL"
    - "form": "sedu gomu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a lie; an intentionally deceptive statement"
      "concept": "lie-noun"
      "built": ["sedu", "gomu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sedu kene"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "really; truly; genuinely; de veras (asserting sincerity or reality)"
      "concept": "sincerity"
      "built": ["sedu", "kene"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "hemi bolu"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Indeed"
      "concept": "indeed"
      "built": ["hemi", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "keniwo kele"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "certainly"
      "concept": "certainly"
      "built": ["keniwo", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "nemiwo"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Perhaps"
      "concept": "perhaps"
      "tones": "LHL"
    - "form": "nemiwo mbaka"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Probably"
      "concept": "probably"
      "built": ["nemiwo", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "nemiwo sika"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "unlikely"
      "concept": "unlikely"
      "built": ["nemiwo", "sika"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "keniwo kele kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Sure"
      "concept": "certain"
      "built": ["keniwo", "kele", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHHL
    - "form": "keniwo wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "uncertain"
      "concept": "uncertain"
      "built": ["keniwo", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "nelo sedu"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Apparently"
      "concept": "apparently"
      "built": ["nelo", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "biko sedu"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "supposedly"
      "concept": "supposedly"
      "built": ["biko", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "kene kedi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Actually"
      "concept": "in-fact"
      "built": ["kene", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nemi dedi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "doubt"
      "concept": "doubt-verb"
      "built": ["nemi", "dedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nemi kadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "suspect"
      "concept": "suspect"
      "built": ["nemi", "kadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nedi soka"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "guess"
      "concept": "guess-verb"
      "built": ["nedi", "soka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nedi kadi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "assume"
      "concept": "assume-verb"
      "built": ["nedi", "kadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "leli wano kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "incorrect"
      "concept": "incorrect"
      "built": ["leli", "wano", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLHL
    - "form": "leli wano sedu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "disagree"
      "concept": "disagree"
      "built": ["leli", "wano", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLLH
    - "form": "sedu kene wano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a falsehood; a false claim, whether intentional or mistaken"
      "concept": "falsehood"
      "built": ["sedu", "kene", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "leno"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "And"
      "concept": "and"
      "tones": "LH"
    - "form": "lano"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "or"
      "concept": "or"
      "tones": "LH"
    - "form": "lino"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "but"
      "concept": "but"
      "tones": "LH"
    - "form": "lano wano"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "nor"
      "concept": "nor"
      "built": ["lano", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "yabo"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Because"
      "concept": "because"
      "tones": "LH"
    - "form": "yaba"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "therefore"
      "concept": "therefore"
      "tones": "LH"
    - "form": "yabi"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "If"
      "concept": "if"
      "tones": "LH"
    - "form": "yabu"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "then, in a condition and its consequence"
      "concept": "then-conditional"
      "tones": "LH"
    - "form": "yabi wano"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "unless"
      "concept": "unless"
      "built": ["yabi", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "yabu wano"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "otherwise"
      "concept": "otherwise"
      "built": ["yabu", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "lino yabi"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Although"
      "concept": "although"
      "built": ["lino", "yabi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lino sedu"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "however"
      "concept": "however"
      "built": ["lino", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lino kele"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "nevertheless"
      "concept": "nevertheless"
      "built": ["lino", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "lino kadi"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "despite"
      "concept": "despite"
      "built": ["lino", "kadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nobe kadi"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "instead"
      "concept": "instead"
      "built": ["nobe", "kadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "yemi pawa"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "for; in order to; so that (purpose)"
      "concept": "for-purpose"
      "built": ["yemi", "pawa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "leli nelo"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Like"
      "concept": "like"
      "built": ["leli", "nelo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "leli nelo wano"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "unlike"
      "concept": "unlike"
      "built": ["leli", "nelo", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "leli dedi"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "as"
      "concept": "as"
      "built": ["leli", "dedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "mbaka hewa"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "than"
      "concept": "than"
      "built": ["mbaka", "hewa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "lano nuka"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Either"
      "concept": "either-alternative"
      "built": ["lano", "nuka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "lano nuka wano"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "neither"
      "concept": "neither-alternative"
      "built": ["lano", "nuka", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "leno nuke"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "both"
      "concept": "both-conjunction"
      "built": ["leno", "nuke"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "nene lano"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "whether"
      "concept": "whether"
      "built": ["nene", "lano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nelo nuka"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "for example"
      "concept": "for-example"
      "built": ["nelo", "nuka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "helo beka"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Except"
      "concept": "except"
      "built": ["helo", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "nuka kele"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "only"
      "concept": "only"
      "built": ["nuka", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "bolu kele"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "even"
      "concept": "even"
      "built": ["bolu", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHH
    - "form": "leno kele"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "also"
      "concept": "also"
      "built": ["leno", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "mbaka kele"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "especially"
      "concept": "especially"
      "built": ["mbaka", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHH
    - "form": "sini sini"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "tiny"
      "concept": "tiny"
      "built": ["sini", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "bolu bolu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "huge"
      "concept": "huge"
      "built": ["bolu", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "kalan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "long in spatial length"
      "concept": "long"
      "tones": "LH"
    - "form": "kalen"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "short in spatial length"
      "concept": "short"
      "tones": "LH"
    - "form": "tolon"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "high"
      "concept": "high"
      "tones": "LH"
    - "form": "dalon"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "low"
      "concept": "low"
      "tones": "LH"
    - "form": "dalo kalan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "tall"
      "concept": "tall"
      "built": ["dalo", "kalan"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kalan mabo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "wide"
      "concept": "wide"
      "built": ["kalan", "mabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "kalen mabo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "narrow"
      "concept": "narrow"
      "built": ["kalen", "mabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "badan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "heavy"
      "concept": "heavy"
      "tones": "LH"
    - "form": "badan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "light in weight"
      "concept": "light-weight"
      "built": ["badan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sepon"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "new"
      "concept": "new"
      "tones": "LH"
    - "form": "bolu kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "old; not new"
      "concept": "old-object"
      "built": ["bolu", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "ndalan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "fast"
      "concept": "fast"
      "tones": "LH"
    - "form": "ndalan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "slow"
      "concept": "slow"
      "built": ["ndalan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "melan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "difficult"
      "concept": "difficult"
      "built": ["melan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "melan mbaka"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "better"
      "concept": "better"
      "built": ["melan", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "gaban mbaka"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "worse"
      "concept": "worse"
      "built": ["gaban", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "melan mbaka bolu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "best"
      "concept": "best"
      "built": ["melan", "mbaka", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHLHL
    - "form": "gaban mbaka bolu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "worst"
      "concept": "worst"
      "built": ["gaban", "mbaka", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLHL
    - "form": "keban"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "important"
      "concept": "important"
      "tones": "LH"
    - "form": "keban wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "trivial"
      "concept": "trivial"
      "built": ["keban", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "doban"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "necessary"
      "concept": "necessary"
      "tones": "LH"
    - "form": "leban"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "valuable"
      "concept": "valuable"
      "tones": "LH"
    - "form": "leban wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "worthless"
      "concept": "worthless"
      "built": ["leban", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "hadan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "useful"
      "concept": "useful"
      "tones": "LH"
    - "form": "hadan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "useless"
      "concept": "useless"
      "built": ["hadan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "kobin"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "broken"
      "concept": "broken"
      "tones": "LH"
    - "form": "doban kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "complete"
      "concept": "complete"
      "built": ["doban", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "doban wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "incomplete"
      "concept": "incomplete"
      "built": ["doban", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "kenan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "honest"
      "concept": "honest"
      "tones": "LH"
    - "form": "kenan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dishonest"
      "concept": "dishonest"
      "built": ["kenan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sika sini"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "barely"
      "concept": "barely"
      "built": ["sika", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "mbaka gaban"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "too much"
      "concept": "too-much"
      "built": ["mbaka", "gaban"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "sika gaban"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "too little"
      "concept": "too-little"
      "built": ["sika", "gaban"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "leli sini kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "similar"
      "concept": "similar"
      "built": ["leli", "sini", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "leli boko"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "opposite"
      "concept": "opposite"
      "built": ["leli", "boko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nabu dedi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "can; able to do something (ability)"
      "concept": "can"
      "built": ["nabu", "dedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nabu wano dedi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "cannot; unable to do something (lack of ability)"
      "concept": "cannot"
      "built": ["nabu", "wano", "dedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLLH
    - "form": "dedan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "impossible"
      "concept": "impossible"
      "built": ["dedan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "dedan soka"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "might; an event is possible"
      "concept": "might-possibility"
      "built": ["dedan", "soka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "dodan kabo"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "must not"
      "concept": "must-not"
      "built": ["dodan", "kabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "melan dedi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Should"
      "concept": "ought"
      "built": ["melan", "dedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "dodan kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Required"
      "concept": "required"
      "built": ["dodan", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "dobadi kelan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "optional"
      "concept": "optional"
      "built": ["dobadi", "kelan"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "kelan kele"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Allowed"
      "concept": "allowed"
      "built": ["kelan", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHH
    - "form": "kelan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "forbidden"
      "concept": "forbidden"
      "built": ["kelan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "kelan hira"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "Permit"
      "concept": "permit"
      "built": ["kelan", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "kelan wano hira"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "prohibit"
      "concept": "prohibit"
      "built": ["kelan", "wano", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHLLH
    - "form": "hewan wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "constrained in action; not free to act"
      "concept": "constrained"
      "built": ["hewan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "yemi dedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Willing"
      "concept": "willing"
      "built": ["yemi", "dedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "yemi dedi wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unwilling"
      "concept": "unwilling"
      "built": ["yemi", "dedi", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "yemi dabo kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Intended"
      "concept": "intended"
      "built": ["yemi", "dabo", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHL
    - "form": "yemi wano dabo"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "accidental"
      "concept": "accidental"
      "built": ["yemi", "wano", "dabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLLH
    - "form": "melibo nodi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Goodbye"
      "concept": "goodbye"
      "built": ["melibo", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "melibo nudi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Welcome"
      "concept": "expression-welcome"
      "built": ["melibo", "nudi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "hibo pawa"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Please"
      "concept": "expression-please"
      "built": ["hibo", "pawa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "hibo sedu sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Thank you"
      "concept": "expression-thank-you"
      "built": ["hibo", "sedu", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "hibo hira"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "You’re welcome"
      "concept": "expression-youre-welcome"
      "built": ["hibo", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nimohe nelo"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Excuse me"
      "concept": "expression-excuse-me"
      "built": ["nimohe", "nelo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "nimo dabu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Sorry"
      "concept": "expression-sorry"
      "built": ["nimo", "dabu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nimo doli hira"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Forgive me"
      "concept": "expression-forgive-me"
      "built": ["nimo", "doli", "hira"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "hemi kele"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Of course"
      "concept": "of-course"
      "built": ["hemi", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHH
    - "form": "bami kele sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Listen"
      "concept": "expression-listen"
      "built": ["bami", "kele", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHHLH
    - "form": "nela sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Look"
      "concept": "expression-look"
      "built": ["nela", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "sadi kele sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Wait"
      "concept": "expression-wait"
      "built": ["sadi", "kele", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHHLH
    - "form": "daloho nudi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Come here"
      "concept": "expression-come-here"
      "built": ["daloho", "nudi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "hewa nodi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Go away"
      "concept": "expression-go-away"
      "built": ["hewa", "nodi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "hadi sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Help!"
      "concept": "expression-help"
      "built": ["hadi", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "dedi wano sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Stop!"
      "concept": "expression-stop"
      "built": ["dedi", "wano", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHLLH
    - "form": "neboho sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "What"
      "concept": "expression-what"
      "built": ["neboho", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "nene dabo sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Pardon"
      "concept": "expression-pardon"
      "built": ["nene", "dabo", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "dabo sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Again"
      "concept": "expression-again"
      "built": ["dabo", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "nimo keni palo"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "I understand"
      "concept": "expression-i-understand"
      "built": ["nimo", "keni", "palo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLH
    - "form": "nimo keni palo wano"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "I do not understand"
      "concept": "expression-i-do-not-understand"
      "built": ["nimo", "keni", "palo", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLHHL
    - "form": "nimohe neboho sedu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "What do you mean"
      "concept": "expression-what-do-you-mean"
      "built": ["nimohe", "neboho", "sedu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHLLH
    - "form": "nepalo sedi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "How do you say…"
      "concept": "expression-how-do-you-say"
      "built": ["nepalo", "sedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "delo neboho sedu nukalo"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "What is this called"
      "concept": "expression-what-is-this-called"
      "built": ["delo", "neboho", "sedu", "nukalo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHLLHLHL
    - "form": "nene kene"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Really? (conversational surprise or request for confirmation)"
      "concept": "expression-really"
      "built": ["nene", "kene"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLH
    - "form": "wano beka"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "not at all (conversational response)"
      "concept": "expression-not-at-all"
      "built": ["wano", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "biko somin doba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "an adult; a person whose growth is complete"
      "concept": "adult"
      "built": ["biko", "somin", "doba"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLHHL
    - "form": "biko nuka"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Individual"
      "concept": "individual"
      "built": ["biko", "nuka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "biko mbaka"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "crowd"
      "concept": "crowd"
      "built": ["biko", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "somela bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "clan"
      "concept": "clan"
      "built": ["somela", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "dumo beka"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "community"
      "concept": "community"
      "built": ["dumo", "beka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "biko dedi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Worker"
      "concept": "worker"
      "built": ["biko", "dedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "biko medi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "artisan"
      "concept": "artisan"
      "built": ["biko", "medi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "nukaloba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Name"
      "concept": "name-noun"
      "tones": "LHLH"
    - "form": "nukaloba kele"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "title"
      "concept": "title"
      "built": ["nukaloba", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHHH
    - "form": "biko tolo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "rank"
      "concept": "rank"
      "built": ["biko", "tolo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLLH
    - "form": "keloba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Custom"
      "concept": "custom"
      "tones": "LHL"
    - "form": "keloba gbulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "tradition"
      "concept": "tradition"
      "built": ["keloba", "gbulu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "kelobo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "law"
      "concept": "law"
      "tones": "LHL"
    - "form": "kelobo sini"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "rule"
      "concept": "rule"
      "built": ["kelobo", "sini"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "seduba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Order"
      "concept": "order-noun"
      "tones": "LHL"
    - "form": "seduba bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "command"
      "concept": "command-noun"
      "built": ["seduba", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "seduba kele"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "obedience"
      "concept": "obedience"
      "built": ["seduba", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "diboba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Justice"
      "concept": "justice"
      "tones": "LHL"
    - "form": "diboba wano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "injustice"
      "concept": "injustice"
      "built": ["diboba", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "diboba melan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "morally right; fair and acceptable in conduct"
      "concept": "right-ethical"
      "built": ["diboba", "melan"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "diboba gaban"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "morally wrong; unfair and unacceptable in conduct"
      "concept": "wrong-ethical"
      "built": ["diboba", "gaban"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "gbadi wano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Peace"
      "concept": "peace"
      "built": ["gbadi", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "neloba gbadi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "war"
      "concept": "war"
      "built": ["neloba", "gbadi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "neloba hewan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Freedom"
      "concept": "freedom"
      "built": ["neloba", "hewan"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "neloba hewan wano"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "captivity"
      "concept": "captivity"
      "built": ["neloba", "hewan", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLHHL
    - "form": "hirabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Gift"
      "concept": "gift"
      "tones": "LHL"
    - "form": "gbediba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "exchange"
      "concept": "exchange-noun"
      "tones": "LHL"
    - "form": "hirabo pawa"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "debt"
      "concept": "debt"
      "built": ["hirabo", "pawa"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "kadoba mbaka"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Wealth"
      "concept": "wealth"
      "built": ["kadoba", "mbaka"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "kadoba sika"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "poverty"
      "concept": "poverty"
      "built": ["kadoba", "sika"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "kadoba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Property"
      "concept": "property"
      "tones": "LHL"
    - "form": "kadoba kele"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ownership"
      "concept": "ownership"
      "built": ["kadoba", "kele"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHH
    - "form": "leban biko"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Honor"
      "concept": "honor"
      "built": ["leban", "biko"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "sedu kabo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Secret"
      "concept": "secret"
      "built": ["sedu", "kabo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "keniba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "knowledge"
      "concept": "knowledge"
      "tones": "LHL"
    - "form": "neloba belo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Thing"
      "concept": "thing"
      "built": ["neloba", "belo"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLLH
    - "form": "belo kedi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "being"
      "concept": "being"
      "built": ["belo", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "beliwoba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Life"
      "concept": "life"
      "tones": "LHLH"
    - "form": "somelo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "origin"
      "concept": "origin"
      "tones": "LHL"
    - "form": "kabiba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "beginning"
      "concept": "beginning"
      "tones": "LHL"
    - "form": "bodiba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "End"
      "concept": "end-noun"
      "tones": "LHL"
    - "form": "dobaba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "completion"
      "concept": "completion"
      "tones": "LHL"
    - "form": "bediba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Change"
      "concept": "change-noun"
      "tones": "LHL"
    - "form": "bediba bolu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "transformation"
      "concept": "transformation"
      "built": ["bediba", "bolu"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHLHL
    - "form": "paluba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Part"
      "concept": "part"
      "tones": "LHL"
    - "form": "yaboba"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Cause"
      "concept": "cause"
      "tones": "LHL"
    - "form": "yababo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "effect"
      "concept": "effect"
      "tones": "LHL"
    - "form": "yabobi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Reason"
      "concept": "reason"
      "tones": "LHL"
    - "form": "yemibo"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "purpose"
      "concept": "purpose"
      "tones": "LHL"
    - "form": "nukalobi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Kind"
      "concept": "kind"
      "tones": "LHLH"
    - "form": "kenen"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Real"
      "concept": "real"
      "tones": "LH"
    - "form": "kenen wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unreal"
      "concept": "unreal"
      "built": ["kenen", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": LHHL
    - "form": "yeso kedi"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Natural"
      "concept": "natural"
      "built": ["yeso", "kedi"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHL
    - "form": "yeso kedi wano"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unnatural"
      "concept": "unnatural"
      "built": ["yeso", "kedi", "wano"]
      "note": "Ordinary separately spoken words; read with the head, modifier and clause constructions in Everyday speech."
      "tones": HLHLHL
    - "form": "belu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bodily wellness"
      "tones": "LH"
    - "form": "tembi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "learn as a student"
      "tones": "LH"
    - {"form": "neli", "class": "n", "field": "Everyday speech", "gloss": "an eye", "tones": "LH"}
    - {"form": "balo", "class": "n", "field": "Everyday speech", "gloss": "a stone", "tones": "LH"}
    - "form": "dandi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "move up a tree"
      "tones": "LH"
    - "form": "same"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "left side; left when qualifying a hand"
      "tones": "LH"
    - "form": "sami"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "right side; right when qualifying a hand"
      "tones": "LH"
    - "form": "nukali"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a measured span or reach"
      "tones": "LHL"
    - "form": "lado"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "at a time; during a time"
      "tones": "LH"
    - form: nelobo
      class: n
      field: Everyday speech
      gloss: "a sight; a visible thing or scene that is seen"
      concept: see-noun
      tones: LHL
    - form: bamuba
      class: n
      field: Everyday speech
      gloss: "a sound; an audible thing that is heard"
      concept: hear-noun
      tones: LHL
    - form: nebola
      class: n
      field: Everyday speech
      gloss: "appearance; the way any person, thing or place looks"
      concept: appearance
      tones: LHL
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: ["{given}", "{given} {band}"]
    given:
      female:
        - "Sepo"
        - "Dano"
        - "Wene"
        - "Rano"
        - "Biko"
        - "Sogo"
        - "Dipo"
        - "Liho"
        - "Moro"
        - "Kiro"
        - "Gbulu"
        - "Hira"
        - "Dibo"
        - "Kele"
        - "Sini"
      male:
        - "Sepo"
        - "Dano"
        - "Wene"
        - "Rano"
        - "Biko"
        - "Sogo"
        - "Dipo"
        - "Liho"
        - "Moro"
        - "Kiro"
        - "Gbulu"
        - "Hira"
        - "Dibo"
        - "Kele"
        - "Sini"
    band: ["Luwala", "Ngotola", "Kpalula", "Sewila", "Gbelela"]
  sounds:
    edges:
      - {edge: openCluster, sounds: [mb, nd, ng]}
      - {edge: closeConsonant, sounds: [n]}
      - {edge: vowelPair, sounds: []}
    clusters: {max: 2}
  scope:
    addresses:
      - skill-ekpelulng
      - lore-bikoclt
      - lore-luwandoclt
      - lore-yesomaclt
      - lore-kubindoclt
      - lore-pewayeclt
  tongues:
    - {tag: ekpelu, meaning: an Ekpelu name, language: skill-ekpelulng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Biko, tongue: ekpelu, built: [biko]}
    - {name: Canopy Foragers, tongue: translation}
    - {name: Court-keepers, tongue: translation}
    - {name: Edge-people, tongue: translation}
    - {name: Ekpelu Language, tongue: translation}
    - {name: Ekpelu Lexicon, tongue: translation}
    - {name: The Forest Peoples, tongue: translation}
    - {name: Kubindo, tongue: ekpelu, built: [kubi, -ndo]}
    - {name: Luwando, tongue: ekpelu, built: [luwa, -ndo]}
    - {name: Pewaye, tongue: ekpelu, built: [pewa, -ye]}
    - {name: River-keepers, tongue: translation}
    - {name: Yesoma, tongue: ekpelu, built: [yeso, -ma]}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Isolate}}
---

Ekpelu is the tongue of the forest peoples of the [[place-cntrlrnfrsts|Central Rainforests]]. The [[lore-luwandoclt|Luwando]] (River-keepers), the [[lore-yesomaclt|Yesoma]] (Canopy foragers), the [[lore-kubindoclt|Kubindo]] (Court-keepers) and the [[lore-pewayeclt|Pewaye]] (Edge-people) all speak it, and a band from one tradition can be understood by a band from another. Fluency measures how much of it a speaker commands, from the trade words a river-trader picks up to the full speech of a song-band at night. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

## Overview

_Ekpelu_ is the people's own word for speech, and they use it for no other tongue: a stranger's speech is noise, and a stranger who learns Ekpelu is said to have been taken in. It is a small language, with few words and many of them concrete. It names the river, the fire, the band, the beast and the spirit exactly, and it leaves much else to song and gesture.

The four traditions speak it with different accents and use different words for their sacred things, but there are no branches of the language and no grammar that separates one from another. Outsiders do not hear the accents, and the words for the sacred are not spoken to outsiders.

Outsiders have never agreed on a name for it. River-traders speaking [[skill-okharclng|Okharik Language]] call it the speech of the shadow, after the shade of the forest, caravan-masters speaking [[skill-nyalbnlng|Nyáluban Language]] the quiet speech, and northern scholars, who have set down only a few hundred words of it, the common tongue of the forest.

## How Ekpelu sounds

Ekpelu is small and open, spoken across the forest by peoples with four different words for the sacred.

**The vowels.** _a_, _e_, _i_, _o_ and _u_. Every word ends on a vowel.

**The consonants.** _gb_ and _kp_, each said as one sound, together with _mb_, _nd_, _ng_, _b_, _d_, _k_, _l_, _m_, _s_ and _w_.

**Clusters.** _gb_, _kp_, _mb_, _nd_ and _ng_ only.

**Endings.** Ekpelu words end in _-o_, _-e_, _-u_, _-a_ or _-i_.

**What Ekpelu leaves out.** It has no closed syllable and no other cluster.

## Phonology

### Consonant System

**Stops:** p, t, k, b, d, g

**Double-closure stops:** kp, gb

**Fricatives:** s, h

**Nasals:** m, n, ny

**Liquids & Approximants:** l, r, w, y

### Vowel System

**Vowels:** a, e, i, o, u

### Phonotactic Patterns

Consonant Clusters
: A nasal and a stop open many words (_mb_, _nd_, _ng_); otherwise no more than two consonants meet

Syllable Structure
: Open, a consonant and a vowel

Final Consonants
: Only _n_

Word Length
: Two or three syllables

### Tone

Ekpelu is a tonal tongue with two level tones, high and low. Tone tells words apart, so a word's tones are part of its form as much as its consonants and vowels. Because the pitch carries the meaning, the forest peoples can call to one another across a long distance in pitch alone, without shaping a single consonant. Names and prose are written here without tone marks, as the people's own speech is not written; the [[skill-ekpelulng#lexicon|Ekpelu Lexicon]] shows the tones of every word.

## Grammar Notes

Word order is subject, object, verb. Nouns are not inflected for number. Four endings on a root say how a person stands toward it: the keeper of it, the child of it, the dweller beside it and the band of it. The [[skill-ekpelulng#lexicon|Ekpelu Lexicon]] sets out the words and the endings.

## Everyday speech

The ordinary words below extend the recorded word-hoard. They are common speech across the four traditions; the sacred vocabulary above retains its own speakers and occasions. A short root need not name only a concrete object. A speaker can express an abstract thought with a small word group, and the dictionary records the meaning of each whole group. These are separately spoken words, with a small pause available at a phrase boundary, rather than new long compounds. The four social suffixes keep their established meanings and their exact joins. Nothing in these everyday constructions changes a person's standing or admits an outsider to sacred speech.

### Reading and saying the words

Use the five vowels of the pronunciation guide: _a_ as in father, _e_ as in bet, _i_ as in machine, _o_ as in go and _u_ as in rule. Say a final vowel aloud. Read each vowel as its own syllable here; the new words use no vowel pairs. _Mb_, _nd_ and _ng_ at the start run directly into the vowel. The guide permits a plain consonant for a difficult nasal opening, and plain _b_ and _p_ for _gb_ and _kp_. Most ordinary roots have two or three syllables. The structured sound rules and the lexicon also permit final _n_; the earlier short description of open endings describes the predominant pattern. In _selan_, for example, say SE-lan, with a sounded final _n_. Stress the first syllable of a two-syllable word and the next-to-last syllable of a longer word.

Tone is level pitch, never a rising question tune. Each vowel has the high or low pitch given in the dictionary. A phrase keeps the tone sequence of its separate words; the displayed sequence simply puts those sequences together. Social suffixes append their established tone to the whole root sequence, so _luwa_ LH plus _-ndo_ L remains _luwando_ LHL. Ordinary names and transcribed passages require no tone marks. Pitch and emphasis do not replace the question words.

### A clause and its participants

A plain clause puts its subject first, object next and verb last: _Nimo salu seli_ means “I drink water,” literally “I water drink.” _Nimohe liho hira_ means “You give fish.” The receiver can be placed before the object with _pawa_, the word for movement toward an endpoint: _Nimo nimohe pawa liho hira_, “I give you fish.” The corresponding source word is _hewa_: _Nimo nimohe hewa liho tadi_, “I take fish from you.” Keep the receiver or source phrase together. A bare verb addresses the listener as an instruction: _Nela_, “Look,” and _Bami kele_, “Listen attentively.” A subject can be left out when the previous clause clearly supplies it; use it again to prevent a change of actor from becoming ambiguous.

Verbs keep the same form for every person and number. _Kedi_ means “be” or “exist” and also closes an explicit description: _Luwa moro kedi_, “The river is deep.” A noun naming a state can stand in that description as well: _Nimo saluba kedi_, “I am thirsty,” literally “I am thirst.” For a noun naming an action, put _neloba_ before the verb: _neloba bami_ is hearing, whereas _bami_ tells someone to hear or listen. The head _neloba_ can introduce a longer action group too. This keeps a perceived thing, such as _senuba_, an odour, distinct from _senu_, to smell it. The dictionary's action nouns and verbal phrases show the intended use directly. _Nelobo_ is a sight, the thing or scene seen; _bamuba_ is a sound, the audible thing heard. These differ from the actions _neloba nelo_ and _neloba bami_. _Nebola_ is the appearance of any person, object or place: _luwa lako nebola_, “the river’s appearance”; _nimo nebola nelo_, “I see the appearance.” _Biko nelo_ remains a narrower conventional expression for a person’s appearance.

### Nouns, qualities and possession

Nouns do not acquire a plural ending. _Biko_ can mean a person or people; context, a following number or a quantity makes the intended count clear. _Biko nuke_ means “two people,” and _biko beka_ means “all the people.” A quality follows its head: _biko sini_, “a small or young person,” follows the same order as _Luwa Gbasa_. Two qualities remain separate words. A noun may also qualify the head by substance, body part, function or relationship when the dictionary records that use: _sebo kebu_, “hair cloth,” is wool, and _gbele mabo_, a tree's arm, is a branch. The whole expression has its recorded ordinary meaning; it does not make every imaginable pair an idiom.

Possession puts the possessor first, then _lako_, then the possessed noun: _nimo lako kolu_, “my dwelling”; _nimohe lako liho_, “your fish”; _nimo beka lako kolu_, “our dwelling.” The same possession group can stand alone as an answer: _Nimo lako_, “Mine.” Kin words identify a relationship to the nearest stated possessor. _Some_ is mother and _somo_ father; _some somo_ names a parent of either sex as a paired category. _Some some_ is a maternal grandmother, and _somo somo_ a paternal grandfather; use _some somo some somo_ for an unspecified grandparent. The repeated _sepo sepo_ means a child's child. The ordinary cousin phrase _sepo samelo samilo some somo_ means a parent's sibling's child. Start with the child, identify the intervening sibling and then identify that sibling's relationship to a parent. Nephew and niece phrases specify a sibling's male or female child. These relational groups are head first and identify the intervening relative after the head.

_Nibo_ refers to a third person; _nibo bamiwo_ is the conventional feminine reference, and _nilo_ a nonpersonal thing. _Nibo beka_ refers to several third persons. These reference words need no agreement on the verb. _Nise_ refers back to the subject: _Nimo nise nelo_, “I see myself.” _Delo_ points to this and _dolo_ to that; add _beka_ for these or those. _Biko soka_ is someone, and _biko wano_ no one. A negative participant already supplies its own absence; another clause-final _wano_ would deny the entire resulting claim.

### Questions, denials and knowledge

Keep a question word in the place of the missing information. _Nimohe neboho nelo_, “What do you see?” retains subject–object–verb order. _Nebi salu seli_, “Who drinks water?” asks for the subject. _Nedalo nimohe nodi_, “Where are you going?” places the location question first. _Ne bi_ is never substituted for the single word _nebi_. Possession uses _nebi lako_: _Nebi lako kolu_, “Whose dwelling?” A confirmation question adds _nene_ after a complete clause: _Nimohe salu seli nene_, “Do you drink water?” _Nene dabo_ asks someone to repeat or clarify. Readers of the common transcription may add their normal question mark; it is not a new Ekpelu sound or a script character.

_Wano_ follows the denied word or group. _Nimo salu seli wano_, “I do not drink water,” denies the act; _biko wano_ means no person. _Hemi_ answers yes and _wano_ answers no. The ordinary dictionary groups containing _wano_ have the scope given by their glosses. _Dodan kabo_ is the fixed prohibition “must not”; _dodan wano_ can therefore deny an obligation without asserting prohibition. A sentence's final _wano_ denies the whole preceding assertion.

_Kenelo_ is truth, correspondence with reality. _Keniwo_ is certainty in a speaker's mind; _kenuba_ is confidence in ability or an expected success; _kenu_ is trust in a person. None makes the others follow. _Sedu kene wano_ can be a falsehood spoken by mistake, whereas _sedu gomu_ is a deliberate deceptive lie. _Nemiwo_ marks perhaps, _nelo sedu_ says that appearances support the claim and _biko sedu_ attributes it to what people say. Put these qualifications before the whole clause when their scope would otherwise be unclear: _Nemiwo nibo nudi_, “Perhaps that person comes.”

### Time, connection, comparison and choice

Time words precede the clause when they frame the whole event: _Habelo dabo nimo salu seli_, “Yesterday I drank water”; _habelo nudo nimo nodi_, “Tomorrow I go.” A bare verb gives no tense. _Lado tolo_ means before in time; _tolo pewa_ means in front in space. _Lado bolu_ lasts a long time; _kalan_ is long in physical length. _Dabo_ repeats an event, _kele lado_ says it still continues and _doba dabo_ says it is already done. No tense endings are required.

_Leno_ joins participants or complete clauses, _lano_ gives alternatives and _lino_ introduces a contrasting clause. _Yabo_ introduces the reason: _Nimo kolu kedi yabo rano kedi_, “I am in shelter because it is raining.” A condition comes first with _yabi_, followed by its result with _yabu_: _Yabi rano kedi, yabu nimo kolu kedi_, “If it rains, then I stay in shelter.” _Yemi pawa_ introduces a purpose; it is followed by the action being aimed at. In such connected speech, repeat a subject whenever the person changes. These words connect clauses without altering their internal order.

A degree word follows its quality. _Melan mbaka_ is better; _melan mbaka bolu_ is best in the relevant set. The comparison's standard follows _hewa_: _Luwa moro mbaka hewa salu kolu_, “The river is deeper than the lake.” _Leli_ states equality in the property under discussion. _Mbaka_ and _sika_ give much and little; _mbaka gaban_ and _sika gaban_ say too much and too little for the present need. A physical quality stays distinct from a feeling or evaluation: _badan_ is heavy, _badan wano_ light in weight, and _selan sini_ light in colour.

Numbers follow their noun. The series from one to ten is _nuka, nuke, nuki, nuko, nuku, meka, meke, meki, meko, meku_. State tens before units with _leno_: _meku nuke leno nuki_ is twenty-three, literally “ten two and three.” Multipliers follow the scale; _mekuba nuki_ is three hundred. _Keno_ after any cardinal gives its ordered position: _meku keno_, tenth; _meku nuke leno nuki keno_, twenty-third. Fractions name the denominator before _pali_, a division: _nuke pali_ is half and _nuko pali_ a quarter. A numerator can precede the whole fraction, as _nuki nuko pali_, three quarters.

### Ability, permission and courteous conversation

Place an ability or obligation group after the action it governs. _Nimo salu seli nabu dedi_, “I can drink water,” uses bodily strength as an ability construction. _Nimo nodi kelan_ means “I may go,” with permission; _nimo nodi dedan soka_ means “I might go,” a possibility. _Nimo nodi dodan_ means “I must go,” and _nimo nodi dodan kabo_, “I must not go.” _Melan dedi_ recommends an act as something one should do. An adjective such as _dedan_ can also describe an event as possible without claiming that the speaker can perform it. The corresponding negative groups express inability, impossibility and denied permission separately.

_Melibo_ greets someone, _melibo nudi_ welcomes an arrival and _melibo nodi_ takes leave. _Hibo pawa_ softens a request, _hibo sedu_ gives thanks and _hibo hira_ accepts those thanks. _Nimo dabu_ admits regret; _nimo doli hira_ asks forgiveness, rather than merely attracting attention. The listener supplies the understood addressee of short commands: _Daloho nudi_, “Come here”; _hewa nodi_, “Go away”; _hadi_, “Help!” A repair in conversation can be just _nene dabo_, “Pardon?” _Nimo keni palo_ says “I understand,” and _nimo keni palo wano_ “I do not understand.” _Delo neboho sedu nukalo_ asks what this is called. The daily vocabulary distinguishes _lenu_, romantic love; _beno_, friends' love; _soma_, familial love; and _mbaloba_, selfless love for anyone. _Kposi_, lust, names sexual appetite without implying any of those loves.

## Script & Literacy

There is no script. What a band needs to remember it keeps in song and in the spirit-posts at its camps.

## Naming Traditions

A person carries one name, a root of the forest or a thing seen on the day of the birth, and in company is known by the band set after it. Bands are named for the river, tree or beast they follow, rivers and places for a head word and its quality, and spirit-courts for what they hold. The lexicon gives the rules.

### Name Lists

**Given Names:** Sepo, Dano, Wene, Rano, Biko, Sogo, Dipo, Liho, Moro, Kiro, Gbulu, Hira, Dibo, Kele, Sini

**Band Names:** Luwala, Ngotola, Kpalula, Sewila, Gbelela

## Ekpelu Lexicon {#lexicon}

The forest peoples of central [[place-xerathia|Zerathia]] keep no books, and this page is the nearest thing to one: the word-hoard of Ekpelu, their common tongue. The vocabulary is small and concrete. It names the river, the fire, the band, the spirit and the four standings a person can hold, and it leaves finer matters to gesture, song and the long habit of living together.

An Ekpelu word is built from a short root, and an ending says how a person stands toward it: _luwa_ is a river, _luwando_ is one who keeps a river, and _luwala_ is the band that follows it. A name is two words, the head first and the quality after: _Luwa Gbasa_ is the Dark River.

The sound of Ekpelu is open and unhurried. Almost every syllable is a consonant and a vowel, a word closes on a vowel or on _n_, and a nasal before a stop opens many words: _mb_, _nd_, _ng_. Each tradition sounds the vowels a little differently, and none of them writes the difference down. Ekpelu is a tonal tongue: every vowel is sung on a high or a low pitch, and the pitch is part of the word.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited. A word made of smaller parts names the words the form is made of, joined by `+`, and the form is exactly those words set side by side.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-ekpelulng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Tones

Ekpelu has two level tones, high (`H`) and low (`L`), and each syllable carries one. Two words spelled alike with different tones are different words, so a word's tones are as much a part of its form as its letters. The lexicon writes them in the Tones column, one letter to a syllable, and nowhere else: names and prose on every other page are spelled without tone marks, since the people's own speech is not written.

An ending carries its own tone whatever the root, so a built word's tones are its root's followed by the ending's: `luwa` (`LH`) with `-ndo` (`L`) is `luwando` (`LHL`).

### Word edges

A word opens on a vowel, a single consonant or one of the pairs below, and closes on a vowel or on _n_.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-ekpelulng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-ekpelulng'
```

## Building words {#building-words}

Two moves make every built word on this page. **An ending on a root:** the ending says how a person stands toward the root. **A head and its quality:** a name sets the head word first and the word that qualifies it after, with nothing between them.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example", '`' || tones || '`' AS "Tones"
FROM affixes
WHERE language = 'thalorna-note-skill-ekpelulng'
ORDER BY position
```

## Words {#words}

### The people and the bands

Every tribe has the same four standings, and the words for them are the plainest on this page. A _tolu_ is held by the band without yet being a full part of it, a _wibo_ speaks and is heard, a _mbeli_ is heard first, and the one the tribe follows is the _kpaso_. The standing is a state a person is in, never a title passed from parent to child.

### Spirits and manners

A forest person owes the forest what a guest owes a host: gifts, restraint and good manners. The _kubi_ is a place that one spirit holds, together with the etiquette owed there, and a band that serves one keeps it.

### The traditions

The four traditions are named by what each keeps or lives beside, and the names are the common tongue's. A tradition's own words for its sacred things differ from one to the next.

### Words of one tradition

Each tradition keeps a handful of words for its sacred things, and the others do not use them. They are common Ekpelu in sound and building, and a forest person of another tradition knows what they mean without saying them.

## Making names {#making-names}

**A person** carries one name, a root of the forest or a thing seen on the day of the birth: _Sepo_, _Dano_, _Wene_. A person is known in company by the band set after the name: _Wene Luwala_ is Wene of the river's band. **A band** is named for the river, tree or beast it follows, with _-la_: _Ngotola_ follows the elephant. **A river or a place** is a head word and its quality: _Luwa Gbasa_, the Dark River. **A spirit-court** is named for what it holds: _Kubi Sewi_, the court of the serpent. **A standing** is set before the band: _Kpaso Luwala_ is the leader of the river's band.

## Scope {#scope}

The register below holds every name of every note of the forest peoples' tongue and of their culture and traditions. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-ekpelulng'
GROUP BY kind ORDER BY CASE kind WHEN 'addresses' THEN 0 END
```

## Attested names {#attested-names}

Every name the setting gives the forest peoples, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not built from it shows `—`, and a name in the reader's tongue is tagged as such.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'ekpelu' THEN ', [[' || tongue_language || '|Ekpelu]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-ekpelulng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-ekpelulng' ORDER BY position
```
