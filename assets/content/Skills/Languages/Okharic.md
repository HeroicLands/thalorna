---
shortcode: okharclng
name: {full: Okharik Language, aliases: []}
type: skill
subType: language
description: "The tongue of the three Okhari city-states, with an archaic sacred register reserved for scripture and temple rites."
tags: []
data:
  roman: "abcdefghiklmnoprstuvwyzABCDEFGHIKLMNOPRSTUVWYZáéíóúëÁÉÍÓÚË0123456789()–-jJ'"
  core: true
  abbreviation: Okh.
  fields:
    - name: The Flame and the temple
      holds: "Fire, light, gold and battle, and the ladder of offices the three city-states climb."
    - name: The spirits and the cairn
      holds: "The zohira, the shamans who deal with them, and the river, forest, earth and storm they keep."
    - name: "Kingdom, clan and kin"
      holds: "The people, the realm, the ancestors and the words of the oath."
    - {name: Grammar words, holds: "The particles and pointing words."}
    - name: Everyday speech
      holds: "Ordinary words and expressions for perception, bodily life, relationships, things, actions and conversation."
  affixes:
    - form: "-u"
      gloss: "the thing itself: a noun"
      attaches: "added"
      examples: ["nkar- > nkaru, flame"]
    - form: "-om"
      gloss: "the plain act: a verb"
      attaches: "added"
      examples: ["thar- > tharom, endures"]
    - form: "-ari"
      gloss: "the one who does it, by calling or office"
      attaches: "added"
      examples: ["korth- > korthari, a guardian"]
    - form: "-elo"
      gloss: "the one it is done to, the one taken in hand"
      attaches: "added"
      examples: ["kwend- > kwendelo, a student"]
    - form: "-ira"
      gloss: "many of them, a company or a kind"
      attaches: "replaces a closing vowel"
      replaces: vowel
      examples: ["korthari > kortharira, guardians"]
    - form: "-ing"
      gloss: "of it, belonging to it; set after the word it qualifies"
      attaches: "replaces a closing vowel"
      replaces: vowel
      examples: ["nkaru > nkaring, of the flame"]
    - form: "-in"
      gloss: "bearing it, of its kind: the adjective"
      attaches: "added"
      examples: ["thokor- > thokorin, high"]
    - form: "-é"
      gloss: "one of it: a person of a people or a land"
      attaches: "added"
      examples: ["okhár- > okharé, one of the people"]
    - form: "-is"
      gloss: "the land or the seat of it"
      attaches: "added"
      examples: ["okhár- > Okharis"]
    - {form: "-o", gloss: "a man's name", attaches: "added", examples: ["tákor- > Tákoro"]}
    - {form: "-a", gloss: "a woman's name", attaches: "added", examples: ["ashénd- > Ashenda"]}
  words:
    - {form: nkar-, class: stem, field: The Flame and the temple, gloss: to burn}
    - form: nkaru
      class: n
      field: The Flame and the temple
      gloss: flame, fire
      concept: [fire, flame]
      built: [nkar-, -u]
    - form: nkaring
      class: adj
      field: The Flame and the temple
      gloss: of the flame, of fire
      built: [nkaru, -ing]
    - {form: thar-, class: stem, field: The Flame and the temple, gloss: to endure}
    - form: tharom
      class: v
      field: The Flame and the temple
      gloss: endures
      built: [thar-, -om]
    - {form: zhék-, class: stem, field: The Flame and the temple, gloss: to shine}
    - {form: zheku, class: n, field: The Flame and the temple, gloss: light, built: [zhék-, -u]}
    - form: zheking
      class: adj
      field: The Flame and the temple
      gloss: of light
      built: [zheku, -ing]
    - {form: shimb-, class: stem, field: The Flame and the temple, gloss: to gleam yellow; gold}
    - form: shimbing
      class: adj
      field: The Flame and the temple
      gloss: of gold
      built: [shimb-, -ing]
    - form: mákoro
      class: n
      field: The Flame and the temple
      gloss: prosperity, wealth
      concept: wealth
    - form: mákoring
      class: adj
      field: The Flame and the temple
      gloss: of wealth
      built: [mákoro, -ing]
    - form: vuthr-
      class: stem
      field: The Flame and the temple
      gloss: to clash in the battle line
    - form: vuthring
      class: adj
      field: The Flame and the temple
      gloss: of battle
      built: [vuthr-, -ing]
    - {form: zhab-, class: stem, field: The Flame and the temple, gloss: to trade}
    - form: zhabing
      class: adj
      field: The Flame and the temple
      gloss: of the market
      built: [zhab-, -ing]
    - form: ngolu
      class: n
      field: The Flame and the temple
      gloss: a council, a sitting of elders
    - {form: shurem, class: n, field: The Flame and the temple, gloss: ash, concept: ash}
    - {form: thokor-, class: stem, field: The Flame and the temple, gloss: to stand high}
    - form: thokorin
      class: adj
      field: The Flame and the temple
      gloss: high, great
      built: [thokor-, -in]
      concept: [big, high, tall]
    - {form: imbil-, class: stem, field: The Flame and the temple, gloss: to trust}
    - form: imbilari
      class: n
      field: The Flame and the temple
      gloss: a believer, a lay worshipper
      built: [imbil-, -ari]
    - {form: kwend-, class: stem, field: The Flame and the temple, gloss: to teach}
    - form: kwendelo
      class: n
      field: The Flame and the temple
      gloss: a student, one under instruction
      built: [kwend-, -elo]
      concept: student
    - form: kwendari
      class: n
      field: The Flame and the temple
      gloss: a teacher
      built: [kwend-, -ari]
      concept: teacher
    - {form: talith-, class: stem, field: The Flame and the temple, gloss: to know by study}
    - form: talithari
      class: n
      field: The Flame and the temple
      gloss: a scholar; an ordained priest of Zarhanis
      built: [talith-, -ari]
    - {form: sheb-, class: stem, field: The Flame and the temple, gloss: to serve}
    - form: shebari
      class: n
      field: The Flame and the temple
      gloss: a servant; an ordained priest of Kaljekor
      built: [sheb-, -ari]
      concept: servant
    - {form: zhang-, class: stem, field: The Flame and the temple, gloss: to bear arms}
    - form: zhangari
      class: n
      field: The Flame and the temple
      gloss: a soldier; a warrior-priest of Vuthraka
      built: [zhang-, -ari]
    - {form: korth-, class: stem, field: The Flame and the temple, gloss: to keep watch over}
    - form: korthari
      class: n
      field: The Flame and the temple
      gloss: a guardian, a warden
      built: [korth-, -ari]
    - form: kortharira
      class: n
      field: The Flame and the temple
      gloss: guardians, a company of them
      built: [korthari, -ira]
    - {form: ambel-, class: stem, field: The Flame and the temple, gloss: to see far}
    - form: ambelari
      class: n
      field: The Flame and the temple
      gloss: a prophet
      built: [ambel-, -ari]
    - form: ndumb-
      class: stem
      field: The Flame and the temple
      gloss: to rule, to hold the reins
    - form: ndumbari
      class: n
      field: The Flame and the temple
      gloss: a master, one who rules
      built: [ndumb-, -ari]
      concept: ruler
    - {form: zhonk-, class: stem, field: The Flame and the temple, gloss: to command}
    - form: zhonkari
      class: n
      field: The Flame and the temple
      gloss: a commander
      built: [zhonk-, -ari]
    - {form: zoh-, class: stem, field: The spirits and the cairn, gloss: to be near and unseen}
    - form: zohu
      class: n
      field: The spirits and the cairn
      gloss: a spirit, one of the zohira
      built: [zoh-, -u]
    - form: zohira
      class: n
      field: The spirits and the cairn
      gloss: the spirits, the intermediaries of the Flame
      built: [zoh-, -ira]
    - form: zohiring
      class: adj
      field: The spirits and the cairn
      gloss: of the spirits
      built: [zohira, -ing]
    - {form: yenor, class: n, field: The spirits and the cairn, gloss: "a path, a way"}
    - {form: zhimbalu, class: n, field: The spirits and the cairn, gloss: a shadow}
    - {form: ombe, class: n, field: The spirits and the cairn, gloss: a forest, concept: forest}
    - form: ombing
      class: adj
      field: The spirits and the cairn
      gloss: of the forest
      built: [ombe, -ing]
    - {form: yombel, class: n, field: The spirits and the cairn, gloss: a mother, concept: mother}
    - {form: ngor-, class: stem, field: The spirits and the cairn, gloss: to run as water runs}
    - form: ngorira
      class: n
      field: The spirits and the cairn
      gloss: the rivers
      built: [ngor-, -ira]
    - form: ngoriring
      class: adj
      field: The spirits and the cairn
      gloss: of the rivers
      built: [ngorira, -ing]
    - {form: pembur-, class: stem, field: The spirits and the cairn, gloss: to beget}
    - form: pemburari
      class: n
      field: The spirits and the cairn
      gloss: a begetter
      built: [pembur-, -ari]
    - form: khuthel
      class: n
      field: The spirits and the cairn
      gloss: the earth, the soil
      concept: [earth, land]
    - form: khutheling
      class: adj
      field: The spirits and the cairn
      gloss: of the earth
      built: [khuthel, -ing]
    - form: gorombe
      class: n
      field: The spirits and the cairn
      gloss: thunder, the storm
      concept: [storm, thunder]
    - {form: shengel, class: n, field: The spirits and the cairn, gloss: a blade}
    - form: shéngeling
      class: adj
      field: The spirits and the cairn
      gloss: of the blade
      built: [shengel, -ing]
    - form: ngwelo
      class: n
      field: The spirits and the cairn
      gloss: a beast
      concept: [animal, beast]
    - {form: shikoro, class: n, field: The spirits and the cairn, gloss: envy, concept: envy}
    - {form: khamwesi, class: n, field: The spirits and the cairn, gloss: a land-crocodile}
    - {form: rokhom-, class: stem, field: The spirits and the cairn, gloss: to hunt in a pack}
    - form: rokhomira
      class: n
      field: The spirits and the cairn
      gloss: the pack-hunters
      built: [rokhom-, -ira]
    - {form: ndawel-, class: stem, field: The spirits and the cairn, gloss: to contend with}
    - form: ndawelari
      class: n
      field: The spirits and the cairn
      gloss: a rival, one who contends
      built: [ndawel-, -ari]
    - {form: thakw-, class: stem, field: The spirits and the cairn, gloss: to hunt}
    - form: thakwari
      class: n
      field: The spirits and the cairn
      gloss: a hunter
      built: [thakw-, -ari]
    - form: thakwaring
      class: adj
      field: The spirits and the cairn
      gloss: of the hunter
      built: [thakwari, -ing]
    - form: okhár-
      class: stem
      field: Kingdom, clan and kin
      gloss: the people of the three flames
    - form: okharé
      class: n
      field: Kingdom, clan and kin
      gloss: one of the people, an Okharin
      built: [okhár-, -é]
    - form: okharin
      class: adj
      field: Kingdom, clan and kin
      gloss: Okharik, of the people
      built: [okhár-, -in]
    - form: ashénd-
      class: stem
      field: Kingdom, clan and kin
      gloss: to keep faith; a root of women's names
    - {form: zhondu, class: n, field: "Kingdom, clan and kin", gloss: "the kingdom, the realm"}
    - {form: somba, class: n, field: "Kingdom, clan and kin", gloss: the ancestors}
    - {form: sembor, class: n, field: "Kingdom, clan and kin", gloss: truth, concept: truth}
    - {form: orung, class: v, field: "Kingdom, clan and kin", gloss: stands firm}
    - {form: shara, class: v, field: "Kingdom, clan and kin", gloss: witnesses}
    - {form: zarun, class: v, field: "Kingdom, clan and kin", gloss: flows}
    - form: thalé
      class: n
      field: Kingdom, clan and kin
      gloss: greeting, peace on the one met
    - {form: en, class: part, field: Grammar words, gloss: "may, let it be: set before the verb"}
    - {form: ne, class: part, field: Grammar words, gloss: "you, hear me: the word of address"}
    - form: ren
      class: part
      field: Grammar words
      gloss: "in the name of: set after what it names"
    - {form: ngem, class: pron, field: Grammar words, gloss: I, concept: i}
    - {form: tebu, class: pron, field: Grammar words, gloss: this, concept: this}
    - {form: ngaru, class: n, field: Everyday speech, gloss: blood, concept: blood}
    - form: sombari
      class: n
      field: Everyday speech
      gloss: an ancestor; a forebear from an earlier generation of one’s lineage. This individual word is related to the existing somba, the ancestors.
      concept: ancestor
    - form: ngorili
      class: n
      field: Everyday speech
      gloss: a cord or rope; a twisted or knotted line for tying, binding or hauling
      concept: [cord, rope]
    - {form: ngoru, class: n, field: Everyday speech, gloss: a river, concept: river}
    - {form: ngorolu, class: n, field: Everyday speech, gloss: a lake, concept: lake}
    - form: yombilu
      class: n
      field: Everyday speech
      gloss: a son, the younger of the holding
      concept: son
    - form: yombelili
      class: n
      field: Everyday speech
      gloss: a daughter, a woman born to the holding
      concept: daughter
    - form: ndumbari ombeling
      class: n
      field: Everyday speech
      gloss: a master or mistress of a household; the person with authority over it. The existing ndumbari retains its general sense of a master or one who rules; ombeling specifies the household.
      concept: master
    - form: sombili mbenarin
      class: n
      field: Everyday speech
      gloss: a brother, a kinsman within the kindred's peace
      concept: brother
    - {form: sombili mbenelin, class: n, field: Everyday speech, gloss: a sister, concept: sister}
    - form: mbesom
      class: v
      field: Everyday speech
      gloss: "to see; to look; to watch attentively by continuing to look at a person, thing or event. Ngem mbesom ngwelit: I see the boar. Ngem mbesom ngwelit thamili: I watch the boar for a while."
      concept: [see-verb, look, watch, expression-look]
    - form: mbesu
      class: n
      field: Everyday speech
      gloss: a sight; what is seen; the visible appearance of a person or thing
      concept: [see-noun, appearance]
    - {form: ntelom, class: v, field: Everyday speech, gloss: to hear a sound, concept: hear-verb}
    - form: ntelu
      class: n
      field: Everyday speech
      gloss: a sound; something heard
      concept: hear-noun
    - form: ngusom
      class: v
      field: Everyday speech
      gloss: to smell; to perceive a scent with the nose
      concept: smell-verb
    - {form: ngusu, class: n, field: Everyday speech, gloss: a smell; a scent, concept: smell-noun}
    - form: lemom
      class: v
      field: Everyday speech
      gloss: to taste; to perceive a flavour in the mouth
      concept: taste-verb
    - form: lemu
      class: n
      field: Everyday speech
      gloss: a taste; a flavour
      concept: taste-noun
    - form: mbalom
      class: v
      field: Everyday speech
      gloss: to touch; to feel with the hand
      concept: touch-verb
    - form: mbalu
      class: n
      field: Everyday speech
      gloss: a touch; contact with a hand or another part of the body
      concept: touch-noun
    - form: mbesin
      class: adj
      field: Everyday speech
      gloss: "visible; able to be discerned by sight in the stated conditions. Ngwelit thumom mbesin: the boar is visible."
      concept: visible
    - form: mbes mbesin
      class: adj
      field: Everyday speech
      gloss: "invisible; unable to be discerned by sight in the stated conditions. Ngwelit thumom mbes mbesin: the boar is invisible."
      concept: invisible
    - form: ntekom
      class: v
      field: Everyday speech
      gloss: to listen; to attend to a sound rather than merely hear it. Said as a call, ntekom means listen!
      concept: [listen, expression-listen]
    - form: nteku
      class: n
      field: Everyday speech
      gloss: noise; disturbing or irregular sound
      concept: noise
    - form: zheboru
      class: n
      field: Everyday speech
      gloss: a voice; the sound made in speaking or singing
      concept: voice
    - form: ntelmu
      class: n
      field: Everyday speech
      gloss: silence; absence of audible sound
      concept: silence
    - form: ntelin
      class: adj
      field: Everyday speech
      gloss: loud; strong in audible volume
      concept: loud
    - form: ntemin
      class: adj
      field: Everyday speech
      gloss: quiet; low in audible volume
      concept: quiet
    - form: ngusin
      class: adj
      field: Everyday speech
      gloss: fragrant; pleasant to smell
      concept: fragrant
    - form: nguronin
      class: adj
      field: Everyday speech
      gloss: foul-smelling; unpleasant to smell
      concept: foul
    - form: lemin
      class: adj
      field: Everyday speech
      gloss: sweet in taste, as honey is
      concept: sweet
    - form: lemarin
      class: adj
      field: Everyday speech
      gloss: sour in taste, as a tart berry is
      concept: sour
    - {form: lemborin, class: adj, field: Everyday speech, gloss: bitter in taste, concept: bitter}
    - {form: lemzin, class: adj, field: Everyday speech, gloss: salty in taste, concept: salty}
    - form: sharom
      class: v
      field: Everyday speech
      gloss: to feel a bodily sensation, including warmth, pressure or pain
      concept: feel-verb
    - form: sharulu
      class: n
      field: Everyday speech
      gloss: a bodily sensation; an experience of warmth, pressure, pain or another physical stimulus
      concept: sensation
    - form: mbalin
      class: adj
      field: Everyday speech
      gloss: smooth to the touch; even and free of roughness
      concept: smooth
    - form: mbelkin
      class: adj
      field: Everyday speech
      gloss: rough to the touch; uneven or abrasive
      concept: rough
    - form: membin
      class: adj
      field: Everyday speech
      gloss: soft; yielding to pressure
      concept: soft
    - form: gorthin
      class: adj
      field: Everyday speech
      gloss: hard to the touch; firm and resistant to pressure
      concept: hard-texture
    - form: mbetom
      class: v
      field: Everyday speech
      gloss: to notice; to become aware of something
      concept: notice
    - form: shabom
      class: v
      field: Everyday speech
      gloss: to perceive; to become aware through one or more senses
      concept: perceive
    - form: mberom
      class: v
      field: Everyday speech
      gloss: to recognize a person or thing as already known
      concept: recognize
    - form: mbelom
      class: v
      field: Everyday speech
      gloss: "to seem; to give an impression. Ngorili mbelom gorthin: the cord seems hard."
      concept: seem
    - form: ndorbu
      class: n
      field: Everyday speech
      gloss: anger; the feeling of being affronted or opposed
      concept: anger
    - form: thokemin ndorbu
      class: n
      field: Everyday speech
      gloss: wrath; intense, consuming anger
      concept: wrath
    - form: zhonelu
      class: n
      field: Everyday speech
      gloss: hope; desire for a possible good outcome, with some expectation of it
      concept: hope
    - form: zhombelu
      class: n
      field: Everyday speech
      gloss: greed; an excessive desire to possess or consume
      concept: greed
    - form: ngarulu
      class: n
      field: Everyday speech
      gloss: boasting; speech that displays or exaggerates one's own merits
      concept: boasting
    - form: ngaromu
      class: n
      field: Everyday speech
      gloss: pride; a feeling of worth or satisfaction in oneself or one's people
      concept: pride
    - {form: lemkuru, class: n, field: Everyday speech, gloss: lust; sexual desire, concept: lust}
    - form: mbeslu zhoneling
      class: n
      field: Everyday speech
      gloss: despair; the felt loss of hope, literally loss of hope. The phrase names a feeling of hopelessness.
      concept: despair
    - form: zhonburu
      class: n
      field: Everyday speech
      gloss: disappointment; sadness when a hoped-for outcome fails
      concept: disappointment
    - form: imbilu
      class: n
      field: Everyday speech
      gloss: faith; trust placed in a person, undertaking or sacred power
      concept: [faith, trust]
    - form: beloru
      class: n
      field: Everyday speech
      gloss: joy; happiness; a glad state of feeling
      concept: [joy, happiness]
    - form: shabelu
      class: n
      field: Everyday speech
      gloss: pleasure; agreeable feeling from an experience
      concept: pleasure
    - form: belomu
      class: n
      field: Everyday speech
      gloss: contentment; feeling at ease with what one has
      concept: contentment
    - form: zharenu
      class: n
      field: Everyday speech
      gloss: gratitude; thankful feeling for a benefit received
      concept: gratitude
    - form: mbeloru
      class: n
      field: Everyday speech
      gloss: admiration; appreciative regard for someone's qualities or deeds
      concept: admiration
    - form: tharinu
      class: n
      field: Everyday speech
      gloss: courage; keeping one's purpose while afraid
      concept: courage
    - form: ndorku
      class: n
      field: Everyday speech
      gloss: hatred; enduring hostile feeling toward someone or something
      concept: hatred
    - form: lemkithu
      class: n
      field: Everyday speech
      gloss: jealousy; fear or resentment that a valued relationship or place will be taken by another
      concept: jealousy
    - form: ngithu
      class: n
      field: Everyday speech
      gloss: fear; apprehension of danger or harm
      concept: fear
    - form: thokemin ngithu
      class: n
      field: Everyday speech
      gloss: terror; overwhelming fear
      concept: terror
    - form: mberku
      class: n
      field: Everyday speech
      gloss: sadness; an inward heaviness of feeling
      concept: sadness
    - form: mberku mbesling
      class: n
      field: Everyday speech
      gloss: grief; deep sorrow at loss, especially at a death
      concept: grief
    - form: ndeshu
      class: n
      field: Everyday speech
      gloss: shame; painful feeling that one is exposed as unworthy
      concept: shame
    - form: ndeshoru
      class: n
      field: Everyday speech
      gloss: guilt; the feeling of responsibility for a wrong one has done
      concept: guilt
    - form: thambelu
      class: n
      field: Everyday speech
      gloss: regret; sorrow at one's past act or a missed possibility
      concept: regret
    - form: mborinu
      class: n
      field: Everyday speech
      gloss: humility; modest regard for one's own importance
      concept: humility
    - form: thimbaru
      class: n
      field: Everyday speech
      gloss: confidence in one's capacity or an outcome; subjective certainty that a belief is right. Thimbaru can be mistaken; it does not mean truth.
      concept: [confidence, certainty]
    - form: ndeshenu
      class: n
      field: Everyday speech
      gloss: embarrassment; self-conscious discomfort in a social situation
      concept: embarrassment
    - form: yomboru
      class: n
      field: Everyday speech
      gloss: compassion; pity; sympathetic concern for another's suffering, with a wish to relieve it
      concept: [compassion, pity, sympathy]
    - form: ndorbu talitharing
      class: n
      field: Everyday speech
      gloss: resentment; lingering anger over a remembered injury or unfairness, literally anger of memory
      concept: resentment
    - form: mborkelu
      class: n
      field: Everyday speech
      gloss: contempt; regarding someone or something as beneath respect
      concept: contempt
    - form: ndokhelu
      class: n
      field: Everyday speech
      gloss: forgiveness; release of resentment or a claim to punish someone for a wrong
      concept: forgiveness
    - form: lembaru
      class: n
      field: Everyday speech
      gloss: desire; wanting a person, thing or outcome
      concept: desire
    - form: lembaru mbenthing
      class: n
      field: Everyday speech
      gloss: longing; persistent desire for an absent person or something beyond reach. Mbenthu names the absent person or thing desired.
      concept: longing
    - form: beloru thambing lembaring
      class: n
      field: Everyday speech
      gloss: satisfaction; the glad feeling that a desire has been fulfilled, literally joy of fulfillment of desire. The fulfillment relation belongs inside the joy relation.
      concept: satisfaction
    - form: lemberu
      class: n
      field: Everyday speech
      gloss: frustration; distress when a desire or intended act is obstructed
      concept: frustration
    - form: mbetharu
      class: n
      field: Everyday speech
      gloss: curiosity; desire to find out about something
      concept: curiosity
    - form: mbendelu
      class: n
      field: Everyday speech
      gloss: confusion; inability to make sense of a matter
      concept: confusion
    - form: thimbelu
      class: n
      field: Everyday speech
      gloss: doubt; uncertainty whether a claim or expectation is right
      concept: doubt
    - form: sharengu
      class: n
      field: Everyday speech
      gloss: surprise; the startled response to something unexpected, pleasant or unpleasant
      concept: surprise
    - form: lemneru
      class: n
      field: Everyday speech
      gloss: boredom; weary lack of interest in what is happening
      concept: boredom
    - form: zhonaru
      class: n
      field: Everyday speech
      gloss: anticipation; looking forward in feeling or thought to an expected event
      concept: anticipation
    - form: sembelu
      class: n
      field: Everyday speech
      gloss: belief; accepting a claim or explanation as true
      concept: belief
    - form: zohenu
      class: n
      field: Everyday speech
      gloss: reverence; deep respectful regard, especially toward the sacred
      concept: reverence
    - form: zohongu
      class: n
      field: Everyday speech
      gloss: awe; wonder mixed with fear before something powerful or vast
      concept: awe
    - form: membelu
      class: n
      field: Everyday speech
      gloss: affection; warm, caring regard for someone
      concept: affection
    - form: membelu lemkheraring
      class: n
      field: Everyday speech
      gloss: romantic love; affection for a beloved partner, distinct from sexual lust alone. The partner qualifier names the recipient of the affection.
      concept: love-eros
    - form: membelu mbenalaring
      class: n
      field: Everyday speech
      gloss: friendship; affectionate regard toward chosen friends. The friend qualifier names the recipient of the affection.
      concept: love-philia
    - form: membelu sombening
      class: n
      field: Everyday speech
      gloss: family love; caring attachment among kin and household members. The family qualifier names the recipients of the affection.
      concept: love-storge
    - form: membelu mbenaring mbemoi
      class: n
      field: Everyday speech
      gloss: universal selfless love; caring regard for all human beings without demanding a return. Mbenaring mbemoi gives the whole relevant human set as the recipients of the affection.
      concept: love-agape
    - form: lemkharu
      class: n
      field: Everyday speech
      gloss: attraction; the felt pull toward a person one finds appealing
      concept: attraction
    - form: mbelenu
      class: n
      field: Everyday speech
      gloss: intimacy; personal closeness in which people share private feelings or bodily affection
      concept: intimacy
    - form: lemtharu
      class: n
      field: Everyday speech
      gloss: devotion; sustained, committed attachment to a person or cause
      concept: devotion
    - form: tharolu
      class: n
      field: Everyday speech
      gloss: loyalty; keeping faith with a person or group through difficulty
      concept: loyalty
    - form: mbenoru
      class: n
      field: Everyday speech
      gloss: companionship; the state of being together with a companion
      concept: companionship
    - form: ndorkelu
      class: n
      field: Everyday speech
      gloss: enmity; a relationship of enduring hostility
      concept: enmity
    - form: mboru
      class: n
      field: Everyday speech
      gloss: the head of a person or animal
      concept: head
    - {form: mborashi, class: n, field: Everyday speech, gloss: hair on the head, concept: hair}
    - form: mbelu
      class: n
      field: Everyday speech
      gloss: the face; the front of the head bearing the eyes, nose and mouth
      concept: face
    - form: mbeselu
      class: n
      field: Everyday speech
      gloss: an eye; the organ of sight
      concept: eye
    - form: ntelel
      class: n
      field: Everyday speech
      gloss: an ear; the organ of hearing
      concept: ear
    - form: ngusel
      class: n
      field: Everyday speech
      gloss: the nose; the organ of smell
      concept: nose
    - form: lemelu
      class: n
      field: Everyday speech
      gloss: the mouth; the opening used for eating and speaking
      concept: mouth
    - form: lemberel
      class: n
      field: Everyday speech
      gloss: a lip; either fleshy edge of the mouth
      concept: lip
    - {form: lemket, class: n, field: Everyday speech, gloss: a tooth, concept: tooth}
    - form: lemthel
      class: n
      field: Everyday speech
      gloss: the tongue; the muscular organ inside the mouth
      concept: tongue
    - form: mbongel
      class: n
      field: Everyday speech
      gloss: the neck; the part connecting the head and trunk
      concept: neck
    - form: mbandelu
      class: n
      field: Everyday speech
      gloss: a shoulder; the region where the arm meets the trunk
      concept: shoulder
    - {form: mbarel, class: n, field: Everyday speech, gloss: an arm, concept: arm}
    - form: mbareku
      class: n
      field: Everyday speech
      gloss: an elbow; the joint in the middle of the arm
      concept: elbow
    - {form: mbalel, class: n, field: Everyday speech, gloss: a hand, concept: hand}
    - form: mbalili
      class: n
      field: Everyday speech
      gloss: a finger; a digit of the hand
      concept: finger
    - form: mbaliket
      class: n
      field: Everyday speech
      gloss: a fingernail; the hard plate on the end of a finger
      concept: nail
    - form: mbathoru
      class: n
      field: Everyday speech
      gloss: the chest; the upper front region of the trunk
      concept: chest
    - form: yombelu
      class: n
      field: Everyday speech
      gloss: a breast; the milk-producing part of the chest
      concept: breast
    - form: thengelu
      class: n
      field: Everyday speech
      gloss: the heart; the organ that pumps blood
      concept: heart
    - form: ngombel
      class: n
      field: Everyday speech
      gloss: the belly; the front region below the chest
      concept: belly
    - form: ngorbel
      class: n
      field: Everyday speech
      gloss: the back; the rear of the trunk
      concept: back
    - form: ngoboru
      class: n
      field: Everyday speech
      gloss: a hip; the side of the pelvis
      concept: hip
    - {form: ndarel, class: n, field: Everyday speech, gloss: a leg, concept: leg}
    - form: ndareku
      class: n
      field: Everyday speech
      gloss: a knee; the joint in the middle of the leg
      concept: knee
    - {form: ndalu, class: n, field: Everyday speech, gloss: a foot, concept: foot}
    - form: ndalili
      class: n
      field: Everyday speech
      gloss: a toe; a digit of the foot
      concept: toe
    - form: mbolu
      class: n
      field: Everyday speech
      gloss: skin; the outer living covering of a body
      concept: skin
    - {form: ngorun, class: n, field: Everyday speech, gloss: a bone, concept: bone}
    - form: ngombu
      class: n
      field: Everyday speech
      gloss: flesh; the soft bodily tissue beneath the skin
      concept: flesh
    - form: mboreku
      class: n
      field: Everyday speech
      gloss: the forehead; the face above the eyes
      concept: forehead
    - form: lemkoru
      class: n
      field: Everyday speech
      gloss: a jaw; the bony structure that opens and closes the mouth
      concept: jaw
    - form: lemkhoru
      class: n
      field: Everyday speech
      gloss: the chin; the projecting lower front of the jaw
      concept: chin
    - form: mbelaku
      class: n
      field: Everyday speech
      gloss: a cheek; either side of the face below an eye
      concept: cheek
    - form: mbongoru
      class: n
      field: Everyday speech
      gloss: the throat; the passage through the neck for air and swallowed food
      concept: throat
    - form: lemgoru
      class: n
      field: Everyday speech
      gloss: the stomach; the digestive organ
      concept: stomach
    - form: ngomboru
      class: n
      field: Everyday speech
      gloss: the waist; the narrow region between ribs and hips
      concept: waist
    - form: ngorbelu
      class: n
      field: Everyday speech
      gloss: the spine; the backbone
      concept: spine
    - form: ngorkelu
      class: n
      field: Everyday speech
      gloss: a buttock; either fleshy part on which a person sits
      concept: buttock
    - form: mbaloru
      class: n
      field: Everyday speech
      gloss: a wrist; the joint between arm and hand
      concept: wrist
    - form: mbalenu
      class: n
      field: Everyday speech
      gloss: the palm; the inner face of the hand
      concept: palm
    - form: mbalombu
      class: n
      field: Everyday speech
      gloss: a thumb; the opposed digit of the hand
      concept: thumb
    - form: ndarkelu
      class: n
      field: Everyday speech
      gloss: a thigh; the upper portion of the leg
      concept: thigh
    - form: ndaloru
      class: n
      field: Everyday speech
      gloss: an ankle; the joint between leg and foot
      concept: ankle
    - form: ndalkelu
      class: n
      field: Everyday speech
      gloss: the heel; the rear portion of the foot
      concept: heel
    - form: ndalenu
      class: n
      field: Everyday speech
      gloss: the sole; the underside of the foot
      concept: sole
    - form: ndaliket
      class: n
      field: Everyday speech
      gloss: a toenail; the hard plate at the end of a toe
      concept: toenail
    - form: mbarku
      class: n
      field: Everyday speech
      gloss: a muscle; bodily tissue that contracts to move or support the body
      concept: muscle
    - form: mborkoru
      class: n
      field: Everyday speech
      gloss: fat; the soft oily tissue of a body
      concept: fat
    - form: shombu
      class: n
      field: Everyday speech
      gloss: sweat; moisture given off through the skin
      concept: sweat
    - form: uzhoru mbeseling
      class: n
      field: Everyday speech
      gloss: tears; the liquid shed by the eyes
      concept: tears
    - form: uzhoru lemeling
      class: n
      field: Everyday speech
      gloss: saliva; the liquid in the mouth
      concept: saliva
    - form: mborombu
      class: n
      field: Everyday speech
      gloss: the brain; the organ within the skull
      concept: brain
    - form: ngemelu
      class: n
      field: Everyday speech
      gloss: a lung; an organ used in breathing
      concept: lung
    - form: ngomeru
      class: n
      field: Everyday speech
      gloss: the liver; the large internal organ that processes nutrients and blood
      concept: liver
    - form: ngomelu
      class: n
      field: Everyday speech
      gloss: a kidney; an organ that filters the blood and produces urine
      concept: kidney
    - form: ngomolu
      class: n
      field: Everyday speech
      gloss: an intestine; the long digestive passage below the stomach
      concept: intestine
    - form: lemkhelu
      class: n
      field: Everyday speech
      gloss: genitals; the sexual organs
      concept: genitals
    - form: lemkhuru
      class: n
      field: Everyday speech
      gloss: the womb; the uterus in which a child develops
      concept: womb
    - {form: lemkhilu, class: n, field: Everyday speech, gloss: a penis, concept: penis}
    - form: lemkhara
      class: n
      field: Everyday speech
      gloss: a vagina; the internal passage from vulva to womb
      concept: vagina
    - form: lemkhutu
      class: n
      field: Everyday speech
      gloss: a testicle; either male reproductive gland within the scrotum
      concept: testicle
    - form: meboru
      class: n
      field: Everyday speech
      gloss: food; something eaten for nourishment
      concept: food
    - {form: mebom, class: v, field: Everyday speech, gloss: to eat food, concept: eat}
    - form: uzhelu
      class: n
      field: Everyday speech
      gloss: a drink; liquid for drinking
      concept: drink-noun
    - form: uzhelom
      class: v
      field: Everyday speech
      gloss: to drink liquid
      concept: drink-verb
    - form: uzhoru
      class: n
      field: Everyday speech
      gloss: "water. Ngem mbathurom uzhoru: I have water."
      concept: water
    - form: ngemoru
      class: n
      field: Everyday speech
      gloss: air; the physical substance breathed and moved by wind
      concept: air
    - form: ngemuru
      class: n
      field: Everyday speech
      gloss: a breath; an inhalation or exhalation of air
      concept: breath
    - form: ngemom
      class: v
      field: Everyday speech
      gloss: to breathe; to draw air into and out of the lungs
      concept: breathe
    - form: ntombu
      class: n
      field: Everyday speech
      gloss: sleep; the bodily state of sleeping
      concept: sleep-noun
    - {form: ntombom, class: v, field: Everyday speech, gloss: to sleep, concept: sleep-verb}
    - {form: nguzhu, class: n, field: Everyday speech, gloss: urine, concept: urine}
    - {form: nguzhom, class: v, field: Everyday speech, gloss: to urinate, concept: urinate}
    - {form: mbuzhu, class: n, field: Everyday speech, gloss: dung; feces, concept: dung}
    - {form: mbuzhom, class: v, field: Everyday speech, gloss: to defecate, concept: defecate}
    - form: nkarelu
      class: n
      field: Everyday speech
      gloss: warmth; heat; the condition or energy that warms a body
      concept: [warmth, heat]
    - form: korthu
      class: n
      field: Everyday speech
      gloss: shelter; a place or covering giving protection from exposure
      concept: shelter
    - form: meborku
      class: n
      field: Everyday speech
      gloss: hunger; the bodily need to eat
      concept: hunger
    - form: mbathurom meborku
      class: v
      field: Everyday speech
      gloss: "to be hungry; to have hunger. Ngem mbathurom meborku: I am hungry."
      concept: hungry
    - form: uzhelku
      class: n
      field: Everyday speech
      gloss: thirst; the bodily need to drink
      concept: thirst
    - form: mbathurom uzhelku
      class: v
      field: Everyday speech
      gloss: "to be thirsty; to have thirst. Ngem mbathurom uzhelku: I am thirsty."
      concept: thirsty
    - form: ngemom mbo
      class: v
      field: Everyday speech
      gloss: "to inhale; to draw a breath in. Ngem ngemom mbo: I breathe in."
      concept: inhale
    - form: ngemom ngo
      class: v
      field: Everyday speech
      gloss: "to exhale; to let a breath out. Ngem ngemom ngo: I breathe out."
      concept: exhale
    - form: ngemkom
      class: v
      field: Everyday speech
      gloss: to suffocate; to be deprived of the air needed to breathe
      concept: suffocate
    - form: ntembom
      class: v
      field: Everyday speech
      gloss: to wake; to pass from sleep into wakefulness
      concept: wake
    - form: ntembin
      class: adj
      field: Everyday speech
      gloss: awake; not sleeping
      concept: awake
    - form: ntombarom
      class: n
      field: Everyday speech
      gloss: a dream; an experience of images or events during sleep
      concept: dream
    - form: thomu
      class: n
      field: Everyday speech
      gloss: rest; a pause from effort for bodily recovery
      concept: rest
    - form: thomin
      class: adj
      field: Everyday speech
      gloss: tired; in need of rest
      concept: tired
    - form: shombom
      class: v
      field: Everyday speech
      gloss: to sweat; to give off sweat through the skin
      concept: sweat-verb
    - form: ngoloru
      class: n
      field: Everyday speech
      gloss: cold; low temperature as a bodily condition or need for warmth
      concept: cold-noun
    - form: nkarin
      class: adj
      field: Everyday speech
      gloss: hot; high in temperature
      concept: hot
    - form: mbemin nkarin
      class: adj
      field: Everyday speech
      gloss: "warm; pleasantly or moderately hot. Uzhoru thumom mbemin nkarin: the water is warm."
      concept: warm
    - form: mbemin ngolin
      class: adj
      field: Everyday speech
      gloss: "cool; moderately cold. Uzhoru thumom mbemin ngolin: the water is cool."
      concept: cool
    - form: ngolom
      class: v
      field: Everyday speech
      gloss: to freeze; to become frozen solid
      concept: freeze
    - form: nkarom
      class: v
      field: Everyday speech
      gloss: to burn; to be consumed or damaged by fire or heat
      concept: burn
    - form: korthelu
      class: n
      field: Everyday speech
      gloss: safety; protection; the safe state and the care that maintains someone free from harm
      concept: [safety, protection]
    - form: kortheku
      class: n
      field: Everyday speech
      gloss: danger; a condition in which harm is possible
      concept: danger
    - {form: lemkheru, class: n, field: Everyday speech, gloss: sex; sexual activity, concept: sex}
    - form: pembom
      class: v
      field: Everyday speech
      gloss: to conceive; to begin carrying a developing child
      concept: conceive
    - form: pembelu
      class: n
      field: Everyday speech
      gloss: pregnancy; carrying a developing child in the womb
      concept: pregnancy
    - form: mbathurom pembelu
      class: v
      field: Everyday speech
      gloss: "to be pregnant; to carry a developing child. Ngem mbathurom pembelu: I am pregnant."
      concept: pregnant
    - form: pemburu
      class: n
      field: Everyday speech
      gloss: a birth; the arrival of a child from the womb
      concept: birth
    - form: zharurom pemburu
      class: v
      field: Everyday speech
      gloss: "to give birth to a child. Yombel zharurom pemburu: the mother gives birth."
      concept: give-birth
    - form: mebelom mbenem yombelu
      class: v
      field: Everyday speech
      gloss: "to nurse a child at the breast. Yombel mebelom yombilu mbenem yombelu: the mother nurses her son at the breast."
      concept: nurse
    - form: pembelom
      class: v
      field: Everyday speech
      gloss: to grow; to increase in size or develop toward maturity
      concept: grow
    - form: thoremom
      class: v
      field: Everyday speech
      gloss: to age; to grow older
      concept: age-verb
    - form: ndengu
      class: n
      field: Everyday speech
      gloss: death; the end of a living being's life
      concept: death
    - form: ndengin
      class: adj
      field: Everyday speech
      gloss: dead; no longer living
      concept: dead
    - form: mborithin
      class: adj
      field: Everyday speech
      gloss: healthy; hale; in good bodily condition
      concept: healthy
    - {form: mborekin, class: adj, field: Everyday speech, gloss: sick; ill, concept: sick}
    - form: mborkin
      class: adj
      field: Everyday speech
      gloss: injured; wounded
      concept: injured
    - form: mbakhorin
      class: adj
      field: Everyday speech
      gloss: strong; physically able to exert much force
      concept: strong
    - form: mbakhomin
      class: adj
      field: Everyday speech
      gloss: weak; lacking physical strength
      concept: weak
    - form: thomkin
      class: adj
      field: Everyday speech
      gloss: exhausted; extremely tired
      concept: exhausted
    - form: meborin
      class: adj
      field: Everyday speech
      gloss: sated; bodily full after enough food or drink
      concept: sated
    - {form: ngolin, class: adj, field: Everyday speech, gloss: cold in temperature, concept: cold}
    - form: nkarin mborekin
      class: adj
      field: Everyday speech
      gloss: feverish; hot with illness. Mbenaru thumom nkarin mborekin describes the person’s feverish bodily heat.
      concept: feverish
    - form: mborku
      class: n
      field: Everyday speech
      gloss: pain; an ache; bodily hurt, including a dull continuing pain
      concept: [pain, ache]
    - form: mborkom
      class: v
      field: Everyday speech
      gloss: to hurt someone; to cause bodily pain or injury
      concept: hurt-verb
    - form: mborkhom
      class: v
      field: Everyday speech
      gloss: to suffer; to undergo pain, distress or hardship
      concept: suffer
    - form: ngarom
      class: v
      field: Everyday speech
      gloss: to bleed; to shed blood
      concept: bleed
    - form: mborithom
      class: v
      field: Everyday speech
      gloss: to heal; to make or become sound after a wound
      concept: heal
    - form: mborithom thebom
      class: v
      field: Everyday speech
      gloss: to recover; to become healthy again. The two cited verbs name healing and becoming together in this fixed recovery expression.
      concept: recover
    - form: mbeskomin
      class: adj
      field: Everyday speech
      gloss: blind; unable to see through a lasting or bodily loss of sight
      concept: blind
    - form: ntelkom
      class: adj
      field: Everyday speech
      gloss: deaf; unable to hear through a lasting or bodily loss of hearing
      concept: deaf
    - form: ndarkomin
      class: adj
      field: Everyday speech
      gloss: lame; physically impaired in walking
      concept: lame
    - form: pembin
      class: adj
      field: Everyday speech
      gloss: alive; living rather than dead
      concept: alive
    - form: shabin
      class: adj
      field: Everyday speech
      gloss: conscious; awake and aware of oneself or one's surroundings
      concept: conscious
    - form: mbes shabin
      class: adj
      field: Everyday speech
      gloss: unconscious; lacking awareness of oneself and one's surroundings
      concept: unconscious
    - form: mbelithin
      class: adj
      field: Everyday speech
      gloss: young; early in a living being's life
      concept: young
    - form: thoremin
      class: adj
      field: Everyday speech
      gloss: old; advanced in age, said of a living being or an object
      concept: [old, old-object]
    - form: thoreminin
      class: adj
      field: Everyday speech
      gloss: aging; growing older
      concept: aging
    - form: mbathurom mborku
      class: v
      field: Everyday speech
      gloss: "to hurt; to experience bodily pain. Ngem mbathurom mborku: I am in pain."
      concept: hurt-pain
    - {form: pembaru, class: n, field: Everyday speech, gloss: a father, concept: father}
    - form: pemboru
      class: n
      field: Everyday speech
      gloss: a parent; a mother or father
      concept: parent
    - form: yombili
      class: n
      field: Everyday speech
      gloss: a child; someone's offspring, regardless of present age
      concept: child
    - form: yombel pemboring
      class: n
      field: Everyday speech
      gloss: a grandmother; the mother of one's mother or father
      concept: grandmother
    - form: pembaru pemboring
      class: n
      field: Everyday speech
      gloss: a grandfather; the father of one's mother or father
      concept: grandfather
    - form: yombili yombiling
      class: n
      field: Everyday speech
      gloss: a grandchild; the child of one's child
      concept: grandchild
    - form: sombili mbenarin pemboring
      class: n
      field: Everyday speech
      gloss: an uncle; a brother of one’s mother or father. Pemboring qualifies the complete brother expression as the parent’s brother.
      concept: uncle
    - form: sombili mbenelin pemboring
      class: n
      field: Everyday speech
      gloss: an aunt; a sister of one’s mother or father. Pemboring qualifies the complete sister expression as the parent’s sister.
      concept: aunt
    - form: yombili sombiling pemboring
      class: n
      field: Everyday speech
      gloss: a cousin; the child of a sibling of one's parent. The sibling-of-parent relation belongs inside the child relation.
      concept: cousin
    - form: mbenarin lembari
      class: n
      field: Everyday speech
      gloss: a husband; a male spouse
      concept: husband
    - form: mbenelin lembari
      class: n
      field: Everyday speech
      gloss: a wife; a female spouse
      concept: wife
    - form: sombeluru
      class: n
      field: Everyday speech
      gloss: a descendant; a person of a later generation in someone's line
      concept: descendant
    - form: yombili pembomin
      class: n
      field: Everyday speech
      gloss: an orphan; a child with no living parent. Pembomin describes the child’s lack of a living parent.
      concept: orphan
    - form: mbenelin lembari ndengin
      class: n
      field: Everyday speech
      gloss: a widow; a woman whose spouse has died. The whole expression names the surviving spouse.
      concept: widow
    - form: pemboru pemboring
      class: n
      field: Everyday speech
      gloss: a grandparent; a parent of one's parent
      concept: grandparent
    - form: mbenarin yombili sombiling
      class: n
      field: Everyday speech
      gloss: a nephew; the male child of one's sibling
      concept: nephew
    - form: mbenelin yombili sombiling
      class: n
      field: Everyday speech
      gloss: a niece; the female child of one's sibling
      concept: niece
    - form: lembari
      class: n
      field: Everyday speech
      gloss: a spouse; a partner joined in marriage
      concept: spouse
    - form: lembarilu
      class: n
      field: Everyday speech
      gloss: marriage; the recognized union of spouses
      concept: marriage
    - form: lembarom
      class: v
      field: Everyday speech
      gloss: "to marry; to enter marriage with someone. Ngem lembarom lemkherari: I marry my beloved."
      concept: marry
    - form: somberu
      class: n
      field: Everyday speech
      gloss: kin; one's relatives taken together
      concept: kin
    - form: somboru
      class: n
      field: Everyday speech
      gloss: a lineage; a line of descent from remembered ancestors
      concept: lineage
    - form: mbenarin lembari ndengin
      class: n
      field: Everyday speech
      gloss: a widower; a man whose spouse has died. The whole expression names the surviving spouse.
      concept: widower
    - form: ndorkari
      class: n
      field: Everyday speech
      gloss: an enemy; a person or group in a relationship of hostility
      concept: enemy
    - form: mbenkari
      class: n
      field: Everyday speech
      gloss: a stranger; a person one does not know
      concept: stranger
    - form: mbelari
      class: n
      field: Everyday speech
      gloss: a neighbor; a person living nearby
      concept: neighbor
    - form: mbenari
      class: n
      field: Everyday speech
      gloss: a companion; someone together with or accompanying another
      concept: companion
    - form: mbenelo
      class: n
      field: Everyday speech
      gloss: a guest; a visitor received in a home or gathering
      concept: guest
    - form: mbenkoro
      class: n
      field: Everyday speech
      gloss: a host; a person who receives a guest
      concept: host
    - form: zhonari
      class: n
      field: Everyday speech
      gloss: a leader; one who guides or directs others
      concept: leader
    - form: zhonelo
      class: n
      field: Everyday speech
      gloss: a follower; one who goes after or accepts the direction of a leader
      concept: follower
    - form: ndeloru
      class: n
      field: Everyday speech
      gloss: a chair; a seat with a back
      concept: chair
    - {form: ndelaru, class: n, field: Everyday speech, gloss: a table, concept: table}
    - form: thomu ntombing
      class: n
      field: Everyday speech
      gloss: a bed; the place furnished for sleeping, conventionally the rest-place of sleep.
      concept: bed
    - form: khuthel ombeling
      class: n
      field: Everyday speech
      gloss: a floor; the lower surface of a room or dwelling, literally the ground of the house.
      concept: floor
    - {form: ombethu, class: n, field: Everyday speech, gloss: a wall, concept: wall}
    - form: ombeloru
      class: n
      field: Everyday speech
      gloss: a roof; the outer covering above a building
      concept: roof
    - form: ombelu
      class: n
      field: Everyday speech
      gloss: an abode; a house or home
      concept: abode
    - form: mbethoru nkaring ombeling
      class: n
      field: Everyday speech
      gloss: a hearth; the physical place in a house where a fire is maintained, literally the place of the household fire. Nkaring qualifies the place as a fire-place; ombeling sets it in the dwelling.
      concept: hearth
    - form: ndozhu
      class: n
      field: Everyday speech
      gloss: a door; the movable closure of an entrance
      concept: door
    - form: ndozhku
      class: n
      field: Everyday speech
      gloss: a lock; a fastening opened with a key
      concept: lock
    - form: ndozhili
      class: n
      field: Everyday speech
      gloss: a key; the implement that opens a lock
      concept: key
    - form: ndozhu mbeseling
      class: n
      field: Everyday speech
      gloss: a window; an opening in a building that admits light and a view, conventionally the door of the eye.
      concept: window
    - form: ndozhkelu
      class: n
      field: Everyday speech
      gloss: shutters; movable covers closing a window
      concept: shutters
    - form: uzhelili
      class: n
      field: Everyday speech
      gloss: a cup; a vessel for drinking
      concept: cup
    - form: mebonu
      class: n
      field: Everyday speech
      gloss: a bowl; an open vessel wider than it is deep
      concept: bowl
    - {form: shengili, class: n, field: Everyday speech, gloss: a knife, concept: knife}
    - {form: mebomili, class: n, field: Everyday speech, gloss: a spoon, concept: spoon}
    - form: mebothu
      class: n
      field: Everyday speech
      gloss: a pot; a vessel for cooking or storage
      concept: pot
    - form: mbothulu nkaring
      class: n
      field: Everyday speech
      gloss: a lamp; a vessel holding fuel and flame to provide light, literally the vessel of fire.
      concept: lamp
    - form: ngembelu
      class: n
      field: Everyday speech
      gloss: cloth; woven fabric
      concept: cloth
    - form: ngembaru
      class: n
      field: Everyday speech
      gloss: clothes; a garment or garments worn on the body
      concept: [clothes, garment]
    - form: ombelili
      class: n
      field: Everyday speech
      gloss: a room; an enclosed space within a building
      concept: room
    - form: mbo ombeloru
      class: n
      field: Everyday speech
      gloss: a ceiling; the inward-facing overhead surface of a room. This household phrase names the roof as seen from within.
      concept: ceiling
    - form: ndelu
      class: n
      field: Everyday speech
      gloss: a seat; a place or object for sitting
      concept: seat
    - form: ngororin ndelu
      class: n
      field: Everyday speech
      gloss: a bench; a long seat for several people
      concept: bench
    - form: meborulu
      class: n
      field: Everyday speech
      gloss: a jar; a broad-mouthed storage vessel
      concept: jar
    - form: uzheluru
      class: n
      field: Everyday speech
      gloss: a bottle; a narrow-necked liquid container
      concept: bottle
    - {form: ngembenu, class: n, field: Everyday speech, gloss: a basket, concept: basket}
    - form: ngembolu
      class: n
      field: Everyday speech
      gloss: a bag; a flexible container
      concept: bag
    - {form: thangulu, class: n, field: Everyday speech, gloss: a hammer, concept: hammer}
    - {form: ngembili, class: n, field: Everyday speech, gloss: a needle, concept: needle}
    - {form: nkaremu, class: n, field: Everyday speech, gloss: smoke, concept: smoke}
    - form: nkarku
      class: n
      field: Everyday speech
      gloss: a coal; a lump of carbon fuel or a glowing ember
      concept: coal
    - form: thangoru nkaring
      class: n
      field: Everyday speech
      gloss: a torch; a portable burning light
      concept: torch
    - form: mborkoru nkaring
      class: n
      field: Everyday speech
      gloss: a candle; a wax or tallow light with a wick
      concept: candle
    - form: ngembaru mbathoring
      class: n
      field: Everyday speech
      gloss: a shirt; a garment covering the trunk and arms
      concept: shirt
    - form: ngembaru ngorbeling
      class: n
      field: Everyday speech
      gloss: a cloak; a loose outer garment
      concept: cloak
    - form: ngorili ngomboring
      class: n
      field: Everyday speech
      gloss: a belt; a band worn around the waist
      concept: belt
    - form: ngembaru ndaling
      class: n
      field: Everyday speech
      gloss: a shoe; a covering for the foot
      concept: shoe
    - form: ngororin ngembaru ndaling
      class: n
      field: Everyday speech
      gloss: a boot; a foot covering extending up the lower leg
      concept: boot
    - form: ndozhoru
      class: n
      field: Everyday speech
      gloss: a gate; a closure across an entrance in a fence or wall
      concept: gate
    - form: ndozhelu
      class: n
      field: Everyday speech
      gloss: a barrier; something that blocks passage
      concept: barrier
    - form: thangoru
      class: n
      field: Everyday speech
      gloss: wood; the material of a tree's trunk and branches
      concept: wood
    - form: ngorethu
      class: n
      field: Everyday speech
      gloss: stone; a rock; the hard mineral material and a piece of it
      concept: [stone, rock]
    - form: thangu
      class: n
      field: Everyday speech
      gloss: metal; a hard material worked by heating and hammering or casting
      concept: metal
    - form: khubelu
      class: n
      field: Everyday speech
      gloss: clay; fine earth molded when wet and fired hard
      concept: clay
    - form: mboloru
      class: n
      field: Everyday speech
      gloss: leather; animal skin prepared for use by tanning or another curing process
      concept: leather
    - form: ngembelu mbeshoring
      class: n
      field: Everyday speech
      gloss: wool; the fleece fibre of a sheep, including the fibre prepared for spinning or weaving. The phrase names sheep-fibre, not head hair.
      concept: wool
    - form: ngemboru
      class: n
      field: Everyday speech
      gloss: thread; a fine spun line used for weaving or sewing
      concept: thread
    - form: khuthel pembeling
      class: n
      field: Everyday speech
      gloss: soil; the loose earth in which plants grow
      concept: soil
    - form: khuremu
      class: n
      field: Everyday speech
      gloss: sand; loose small grains of stone
      concept: sand
    - form: khubelu uzhoring
      class: n
      field: Everyday speech
      gloss: mud; wet soft earth
      concept: mud
    - form: khurelu
      class: n
      field: Everyday speech
      gloss: dust; fine dry particles on a surface or in air
      concept: dust
    - form: thokoru
      class: n
      field: Everyday speech
      gloss: a mountain; a great natural height of land
      concept: mountain
    - form: thokili
      class: n
      field: Everyday speech
      gloss: a hill; a rounded or sloping natural rise of land
      concept: hill
    - form: thokenu
      class: n
      field: Everyday speech
      gloss: a valley; low land between higher slopes
      concept: valley
    - form: khuthin
      class: n
      field: Everyday speech
      gloss: a plain; broad flat open land
      concept: plain-landform
    - form: khuthel meboring
      class: n
      field: Everyday speech
      gloss: a field; open ground used for grazing or cultivation
      concept: field
    - form: ombelu ngorething
      class: n
      field: Everyday speech
      gloss: a cave; a natural hollow in rock large enough to enter
      concept: cave
    - form: ngorelu
      class: n
      field: Everyday speech
      gloss: a stream; a small natural flowing watercourse
      concept: stream
    - form: ngorothu
      class: n
      field: Everyday speech
      gloss: the sea; the ocean; the great open salt water
      concept: [sea, ocean]
    - form: ngorelku
      class: n
      field: Everyday speech
      gloss: a shore; the edge where land meets a sea or lake
      concept: shore
    - form: ngothu
      class: n
      field: Everyday speech
      gloss: rain; water falling from clouds
      concept: rain
    - form: ngozhu
      class: n
      field: Everyday speech
      gloss: snow; frozen flakes falling from clouds or lying on the ground
      concept: snow
    - {form: ngolku, class: n, field: Everyday speech, gloss: ice; frozen water, concept: ice}
    - form: zhekoru
      class: n
      field: Everyday speech
      gloss: the sky; the visible expanse above the earth
      concept: sky
    - {form: zhekomu, class: n, field: Everyday speech, gloss: the sun, concept: sun}
    - form: zhekolu
      class: n
      field: Everyday speech
      gloss: the moon; also a month, a lunar or calendar division of the year
      concept: [moon, month]
    - form: zhekem
      class: n
      field: Everyday speech
      gloss: a star; a distant light in the night sky
      concept: star
    - form: zhomelu
      class: n
      field: Everyday speech
      gloss: a cloud; a visible mass of suspended water in the sky
      concept: cloud
    - {form: ngorenu, class: n, field: Everyday speech, gloss: wind; moving air, concept: wind}
    - form: zhekurun
      class: n
      field: Everyday speech
      gloss: lightning; a flash of electricity in the sky
      concept: lightning
    - form: pembeli
      class: n
      field: Everyday speech
      gloss: a plant; a growing living thing rooted in or drawing nourishment from soil or water
      concept: plant
    - {form: thangelu, class: n, field: Everyday speech, gloss: a tree, concept: tree}
    - {form: thangili, class: n, field: Everyday speech, gloss: a leaf, concept: leaf}
    - form: thangenu
      class: n
      field: Everyday speech
      gloss: a root; the part of a plant growing into the ground
      concept: root
    - form: thangolu
      class: n
      field: Everyday speech
      gloss: a branch; an arm growing from a tree's trunk
      concept: branch
    - {form: pembolu, class: n, field: Everyday speech, gloss: a flower, concept: flower}
    - form: pembomelu
      class: n
      field: Everyday speech
      gloss: a fruit; a seed-bearing part of a plant, especially one eaten
      concept: fruit
    - {form: pembilu, class: n, field: Everyday speech, gloss: a seed, concept: seed}
    - {form: pembenu, class: n, field: Everyday speech, gloss: grass, concept: grass}
    - {form: ngwelili, class: n, field: Everyday speech, gloss: a bird, concept: bird}
    - {form: ngweloru, class: n, field: Everyday speech, gloss: a fish, concept: fish}
    - form: ngwelimu
      class: n
      field: Everyday speech
      gloss: an insect; a small six-legged creature
      concept: insect
    - form: ngwelenu
      class: n
      field: Everyday speech
      gloss: a worm; a soft long-bodied creeping animal
      concept: worm
    - form: uzhorin
      class: adj
      field: Everyday speech
      gloss: wet; covered or soaked with liquid
      concept: wet
    - form: khurin
      class: adj
      field: Everyday speech
      gloss: dry; free of moisture
      concept: dry
    - form: zhekin
      class: adj
      field: Everyday speech
      gloss: bright; giving or reflecting much light; light in colour toward white
      concept: [bright, light-colour]
    - form: zhimbalin
      class: adj
      field: Everyday speech
      gloss: dark; lacking light; black in colour
      concept: [dark, black]
    - form: mbes mbathurom zhomelu
      class: v
      field: Everyday speech
      gloss: "to be clear of clouds; said of the sky or weather. Zhekoru mbes mbathurom zhomelu: the sky has no clouds."
      concept: clear-weather
    - form: mbathurom zhomelu
      class: v
      field: Everyday speech
      gloss: "to be cloudy; to have clouds. Zhekoru mbathurom zhomelu: the sky is cloudy."
      concept: cloudy
    - form: mbanoru
      class: n
      field: Everyday speech
      gloss: north; the direction of the northern pole
      concept: north
    - form: mbatheru
      class: n
      field: Everyday speech
      gloss: south; the direction opposite north
      concept: south
    - form: zhekarolu
      class: n
      field: Everyday speech
      gloss: east; the direction of sunrise
      concept: east
    - form: zhekethoru
      class: n
      field: Everyday speech
      gloss: west; the direction of sunset
      concept: west
    - form: em
      class: num
      field: Everyday speech
      gloss: one; the count of a single thing
      concept: one
    - {form: mbet, class: num, field: Everyday speech, gloss: two, concept: two}
    - {form: ngen, class: num, field: Everyday speech, gloss: three, concept: three}
    - {form: ket, class: num, field: Everyday speech, gloss: four, concept: four}
    - {form: mbil, class: num, field: Everyday speech, gloss: five, concept: five}
    - {form: zhem, class: num, field: Everyday speech, gloss: six, concept: six}
    - {form: ngel, class: num, field: Everyday speech, gloss: seven, concept: seven}
    - {form: ngot, class: num, field: Everyday speech, gloss: eight, concept: eight}
    - {form: kethen, class: num, field: Everyday speech, gloss: nine, concept: nine}
    - {form: ntem, class: num, field: Everyday speech, gloss: ten, concept: ten}
    - form: mbet ntem
      class: num
      field: Everyday speech
      gloss: twenty; two tens
      concept: twenty
    - {form: mbethen, class: num, field: Everyday speech, gloss: one hundred, concept: hundred}
    - {form: ngokem, class: num, field: Everyday speech, gloss: one thousand, concept: thousand}
    - form: thokalu em
      class: num
      field: Everyday speech
      gloss: first in a numbered order; ordinal position one
      concept: first
    - form: thokalu mbet
      class: num
      field: Everyday speech
      gloss: second in a numbered order; ordinal position two
      concept: second
    - form: thokalu ngen
      class: num
      field: Everyday speech
      gloss: third in a numbered order; ordinal position three
      concept: third
    - form: mbethilu
      class: num
      field: Everyday speech
      gloss: half; one of two equal portions
      concept: half
    - form: ngamin
      class: num
      field: Everyday speech
      gloss: "many when counting things; much when measuring a substance. Ngamin mebothu: many pots; ngamin uzhoru: much water."
      concept: [many, much]
    - form: ngomin
      class: num
      field: Everyday speech
      gloss: "few when counting things; little when measuring a substance. Ngomin mebothu: few pots; ngomin uzhoru: little water."
      concept: [few, little-quantity]
    - form: mbekhu
      class: num
      field: Everyday speech
      gloss: "none; zero; no members or quantity of the stated set. Mbekhu mebothu: no pots."
      concept: [none, zero]
    - form: thokalu ket
      class: num
      field: Everyday speech
      gloss: "fourth; thokalu before a cardinal gives its ordinal position. Mebothu thumom thokalu ket: the pot is fourth in the row; thokalu mbethen is hundredth."
      concept: ordinal-construction
    - form: kethilu
      class: num
      field: Everyday speech
      gloss: one quarter; one of four equal portions
      concept: quarter
    - form: mbemoin
      class: adj
      field: Everyday speech
      gloss: whole; comprising every part without division or loss
      concept: whole
    - form: zhemel
      class: num
      field: Everyday speech
      gloss: some; an unspecified portion or number
      concept: some
    - form: mborinmu
      class: num
      field: Everyday speech
      gloss: "enough; as many or as much as needed for the stated purpose. Mborinmu uzhoru mbon meboru: enough water for the food."
      concept: enough
    - form: ngorel
      class: num
      field: Everyday speech
      gloss: "more; a greater number or amount. Ngorel uzhoru mborethen tebu: more water than this."
      concept: more
    - form: ngomel
      class: num
      field: Everyday speech
      gloss: "less; a smaller number or amount. Ngomel uzhoru mborethen tebu: less water than this."
      concept: less
    - form: ngorel mborethen mbemoi mbenerin
      class: num
      field: Everyday speech
      gloss: "most; more than every other member of the comparison set. Mebothu tebu mbathurom ngorel uzhoru mborethen mbemoi mbenerin mebothu: this pot has more water than all the other pots. Mbenerin excludes the target pot."
      concept: most
    - form: ngomel mborethen mbemoi mbenerin
      class: num
      field: Everyday speech
      gloss: "least; less than every other member of the comparison set. Mebothu tebu mbathurom ngomel uzhoru mborethen mbemoi mbenerin mebothu: this pot has less water than all the other pots."
      concept: least
    - form: ngorimin
      class: adj
      field: Everyday speech
      gloss: "equal; the same in number, measure or standing. Mbet mebothu thumom ngorimin mbo uzhoru: the two pots are equal in their water quantity."
      concept: equal
    - form: mben
      class: num
      field: Everyday speech
      gloss: "each; every member considered separately. Mben mebothu mbathurom uzhoru: each pot contains water."
      concept: each
    - form: mbetin
      class: num
      field: Everyday speech
      gloss: both; the two together. Mbetin uzhoru ngeme meboru thumom mbethu means both water and food are here; the paired things follow mbetin and are joined by ngeme.
      concept: [both, both-conjunction]
    - form: em mbeting
      class: num
      field: Everyday speech
      gloss: "either one of the two; one selected from that pair. Zharurom em mbeting mebothu: give either of the two pots."
      concept: either
    - form: mbekhu mbeting
      class: num
      field: Everyday speech
      gloss: "neither of the two; no member selected from the pair. Mbekhu mbeting mebothu thumom uzhorin: neither pot is wet."
      concept: neither
    - form: ngorut
      class: adv
      field: Everyday speech
      gloss: "about; approximately, before a quantity. Ngorut ntem mebothu thumom mbethu: about ten pots are here."
      concept: about
    - form: mbetel ndokel
      class: adv
      field: Everyday speech
      gloss: "almost; just short of the stated quantity or completion, literally near below. Mbetel ndokel ntem mebothu thumom mbethu: almost ten pots are here, with the count still below ten."
      concept: almost
    - form: ngorim
      class: adv
      field: Everyday speech
      gloss: "exactly; precisely at the stated number or measure. Ngorim ntem mebothu: exactly ten pots."
      concept: exactly
    - form: ngorimu
      class: n
      field: Everyday speech
      gloss: "a number or amount; a counted or measured quantity. Ngorimu mebothing thumom ntem: the number of pots is ten. Ngorimu uzhoring thumom mbet uzhelili: the amount of water is two cups."
      concept: [number, amount]
    - form: mbedom
      class: v
      field: Everyday speech
      gloss: "to measure a quantity, length or other dimension. Ngem mbedom uzhoru mbenem uzhelili: I measure the water with a cup."
      concept: measure-verb
    - form: ngorimom
      class: v
      field: Everyday speech
      gloss: "to count things. Ngem ngorimom mebothu: I count the pots."
      concept: count-verb
    - {form: zhebin, class: adj, field: Everyday speech, gloss: white in colour, concept: white}
    - {form: zhembin, class: adj, field: Everyday speech, gloss: red in colour, concept: red}
    - {form: pembelin, class: adj, field: Everyday speech, gloss: green in colour, concept: green}
    - form: shimbin
      class: adj
      field: Everyday speech
      gloss: yellow in colour
      concept: yellow
      built: [shimb-, -in]
    - {form: ngorzin, class: adj, field: Everyday speech, gloss: blue in colour, concept: blue}
    - {form: shuremin, class: adj, field: Everyday speech, gloss: grey in colour, concept: grey}
    - {form: khubelin, class: adj, field: Everyday speech, gloss: brown in colour, concept: brown}
    - form: zhemin
      class: adj
      field: Everyday speech
      gloss: pale; weak or washed-out in colour
      concept: pale
    - form: mbeselin
      class: adj
      field: Everyday speech
      gloss: clear in appearance; distinct and easy to discern, as a clean outline or plainly visible mark
      concept: clear-appearance
    - form: mbeskin
      class: adj
      field: Everyday speech
      gloss: opaque; not allowing sight through it
      concept: opaque
    - form: mbesthin
      class: adj
      field: Everyday speech
      gloss: transparent; allowing objects beyond it to be seen through it
      concept: transparent
    - form: zhekinin
      class: adj
      field: Everyday speech
      gloss: shiny; reflecting light with a gleam
      concept: shiny
    - form: zhekomin
      class: adj
      field: Everyday speech
      gloss: dull; lacking a gleam on the surface
      concept: dull-appearance
    - form: mbenin
      class: adj
      field: Everyday speech
      gloss: plain; without a decorative pattern
      concept: plain-pattern
    - form: mbetbin
      class: adj
      field: Everyday speech
      gloss: spotted; marked with spots
      concept: spotted
    - form: ngorelin
      class: adj
      field: Everyday speech
      gloss: striped; marked with stripes
      concept: striped
    - form: ngenom
      class: v
      field: Everyday speech
      gloss: "to go; to move from one place to another; to walk when travelling on foot. Ngem ngenom mbor ombelu: I walk toward the house."
      concept: [go, walk]
    - form: mbekom
      class: v
      field: Everyday speech
      gloss: "to come; to arrive at the speaker's place or a stated destination. Ngem mbekom mbor ombelu: I arrive at the house."
      concept: [come, arrive]
    - form: ndalom
      class: v
      field: Everyday speech
      gloss: "to take; to receive, including catching an offered or thrown object before it falls. Ngem ndalom uzhelili: I take the cup; ngem ndalom uzhelili mbo ngemoru: I catch the cup in the air."
      concept: [take, catch]
    - form: thabom
      class: v
      field: Everyday speech
      gloss: "to make; to do; to create something. Ngem thabom ndelaru: I make a table; ngem thabom thabelu: I do the work."
      concept: [make, do, create]
    - form: zhepom
      class: v
      field: Everyday speech
      gloss: "to say; to speak; to tell someone a matter. Ngem zhepom mbor ndem: I speak to you; ngem zhepom zhepulu mbor ndem: I tell you a tale."
      concept: [say, speak, tell]
    - form: mbethom
      class: v
      field: Everyday speech
      gloss: "to know a person, fact or practice. Ngem mbethom ndem: I know you."
      concept: know
    - form: mbendom
      class: v
      field: Everyday speech
      gloss: to think; to consider a matter
      concept: think
    - form: lembom
      class: v
      field: Everyday speech
      gloss: "to want; to wish for a person, thing or outcome. Ngem lembom uzhoru: I want water."
      concept: [want, wish-verb]
    - form: pembinom
      class: v
      field: Everyday speech
      gloss: to live; to be alive
      concept: live
    - form: ndengom
      class: v
      field: Everyday speech
      gloss: to die; to cease living
      concept: die
    - form: ndawom
      class: v
      field: Everyday speech
      gloss: to run; to move quickly on foot
      concept: run
    - form: ndelom
      class: v
      field: Everyday speech
      gloss: to sit; to rest one's weight on a seat or the ground
      concept: sit
    - form: thokorom
      class: v
      field: Everyday speech
      gloss: to stand; to be upright on one's feet
      concept: stand
    - form: ntelalom
      class: v
      field: Everyday speech
      gloss: to lie down; to take a reclining position
      concept: lie-down
    - form: ndelthom
      class: v
      field: Everyday speech
      gloss: to hold; to keep something in one's grasp or support it in place
      concept: hold
    - form: mbathom
      class: v
      field: Everyday speech
      gloss: "to carry; to bring by carrying or leading toward the speaker or stated destination adopted as the viewpoint. Ngem mbathom mebothu mbor ndem: I bring the pot to you."
      concept: [bring, carry]
    - form: thangom
      class: v
      field: Everyday speech
      gloss: "to put; to set someone or something in a place. Ngem thangom mebothu mbam ndelaru: I put the pot at the table."
      concept: put
    - form: mbeskom
      class: v
      field: Everyday speech
      gloss: to find; to discover or come upon something sought or previously unnoticed
      concept: find
    - form: mbeslom
      class: v
      field: Everyday speech
      gloss: to lose; to cease having or be unable to find something
      concept: lose
    - form: ndozhom
      class: v
      field: Everyday speech
      gloss: to open; to uncover or free an entrance or container
      concept: open
    - form: ndozhkom
      class: v
      field: Everyday speech
      gloss: "to close an opening or container; to end an activity. Ngem ndozhkom ndozhu: I close the door; zhepulu ndozhkom: the tale ends."
      concept: [close, end]
    - form: mbangom
      class: v
      field: Everyday speech
      gloss: to begin; to start happening or doing something
      concept: begin
    - form: thumom ngemin
      class: v
      field: Everyday speech
      gloss: "to belong to me; to be mine. Mebothu thumom ngemin: the pot is mine. Mebothu ngemin means my pot. Another owner uses that owner’s cited belonging expression."
      concept: belong
    - form: mebothu ngemin
      class: n
      field: Everyday speech
      gloss: "my pot; a pot belonging to the speaker. Replace mebothu with the possessed noun: uzhelili ngemin means my cup."
      concept: my
    - form: thebom
      class: v
      field: Everyday speech
      gloss: "to become; to change into a new state. Uzhoru thebom ngolku: the water becomes ice."
      concept: [become, change-verb]
    - form: tharalom
      class: v
      field: Everyday speech
      gloss: to remain; to stay in the same place or state
      concept: remain
    - form: ngenthom
      class: v
      field: Everyday speech
      gloss: "to leave; to depart from a place or person. Ngem ngenthom ombelu: I leave the house."
      concept: leave
    - form: ndalimom
      class: v
      field: Everyday speech
      gloss: to crawl; to move close to the ground using hands and knees or a low body
      concept: crawl
    - form: thokelom
      class: v
      field: Everyday speech
      gloss: to climb; to move upward using hands, feet or bodily grip
      concept: climb
    - form: ndalemom
      class: v
      field: Everyday speech
      gloss: to jump; to spring away from a supporting surface
      concept: jump
    - form: ndolom
      class: v
      field: Everyday speech
      gloss: to fall; to move downward without support
      concept: fall
    - form: thokemom
      class: v
      field: Everyday speech
      gloss: to rise; to move upward or stand up
      concept: rise
    - form: ngenom mbo
      class: v
      field: Everyday speech
      gloss: "to enter; to go inside. Ngem ngenom mbo ombelu: I enter the house."
      concept: enter
    - form: ngenom ngo
      class: v
      field: Everyday speech
      gloss: "to exit; to go out. Ngem ngenom ngo ombelu: I exit the house."
      concept: exit
    - form: mbekom mbathen
      class: v
      field: Everyday speech
      gloss: "to return; to come back. Ngem mbekom mbathen mbor ombelu: I return to the house."
      concept: return
    - form: zhonelom
      class: v
      field: Everyday speech
      gloss: to follow; to go after someone or accept their direction
      concept: follow
    - form: zhonom
      class: v
      field: Everyday speech
      gloss: to lead; to guide someone on a route or direct their action
      concept: lead
    - form: ngenbom
      class: v
      field: Everyday speech
      gloss: to move; to change position or move something to another position
      concept: move
    - form: mbalekom
      class: v
      field: Everyday speech
      gloss: to push; to apply force that moves something away from the point of pressure
      concept: push
    - form: mbaldom
      class: v
      field: Everyday speech
      gloss: to pull; to draw something toward the point of force
      concept: pull
    - form: mbatharom
      class: v
      field: Everyday speech
      gloss: to lift; to raise something from a lower position
      concept: lift
    - form: ndolkom
      class: v
      field: Everyday speech
      gloss: to drop; to let something fall
      concept: drop
    - form: mbalangom
      class: v
      field: Everyday speech
      gloss: to throw; to send something through the air by a movement of the hand or body
      concept: throw
    - form: thabom ombelu
      class: v
      field: Everyday speech
      gloss: "to build a house; to make a structure by joining materials. Ngem thabom ombelu: I build a house; replace ombelu with the structure being built."
      concept: build
    - form: thangekom
      class: v
      field: Everyday speech
      gloss: to break; to divide or damage something so that it no longer holds together or works
      concept: break
    - form: ndengkom
      class: v
      field: Everyday speech
      gloss: to destroy; to ruin something beyond its continued existence or use
      concept: destroy
    - form: thabangom
      class: v
      field: Everyday speech
      gloss: to repair; to restore a damaged thing to working order
      concept: repair
    - form: zhepimom
      class: v
      field: Everyday speech
      gloss: to ask; to request an answer or a thing from someone
      concept: ask
    - form: zhebom
      class: v
      field: Everyday speech
      gloss: to answer; to give a reply to a question or request
      concept: answer
    - form: zheparom
      class: v
      field: Everyday speech
      gloss: to call; to summon someone or hail them by voice
      concept: call
    - form: zhepom mbenem ntelin zheboru
      class: v
      field: Everyday speech
      gloss: "to shout; to speak in a loud voice. Ngem zhepom mbenem ntelin zheboru: I shout."
      concept: shout
    - form: zhepminom
      class: v
      field: Everyday speech
      gloss: to whisper; to speak softly using unvoiced breath rather than an ordinary voiced murmur
      concept: whisper
    - form: zhepelom
      class: v
      field: Everyday speech
      gloss: to explain; to make a matter clear in words
      concept: explain
    - form: zhepolom
      class: v
      field: Everyday speech
      gloss: to name; to give or state a name for someone or something
      concept: name-verb
    - form: sembelom
      class: v
      field: Everyday speech
      gloss: to believe; to accept a claim as true
      concept: believe
    - form: talithelom
      class: v
      field: Everyday speech
      gloss: to understand; to grasp the meaning of a word, act or situation
      concept: understand
    - form: talitharom
      class: v
      field: Everyday speech
      gloss: to remember; to bring or keep something in memory
      concept: remember
    - form: talithakom
      class: v
      field: Everyday speech
      gloss: to forget; to lose the ability to recall something known
      concept: forget
    - form: kwenbom
      class: v
      field: Everyday speech
      gloss: to learn; to acquire knowledge or skill
      concept: learn
    - form: kwendom
      class: v
      field: Everyday speech
      gloss: to teach; to help someone acquire knowledge or skill
      concept: teach
    - form: mbendarom
      class: v
      field: Everyday speech
      gloss: to decide; to choose one course or thing among possibilities
      concept: [decide, choose]
    - form: ntombelom
      class: v
      field: Everyday speech
      gloss: to imagine; to form a mental picture or conception of something absent or not actual
      concept: imagine
    - form: mbothom
      class: v
      field: Everyday speech
      gloss: to need; to require something for a purpose or for living
      concept: need-verb
    - form: zhonemom
      class: v
      field: Everyday speech
      gloss: to hope; to desire and look for a possible good outcome
      concept: hope-verb
    - form: mbendalom
      class: v
      field: Everyday speech
      gloss: to intend; to have a purpose of acting in a stated way
      concept: intend
    - form: lembelom
      class: v
      field: Everyday speech
      gloss: "to prefer; to choose one thing ahead of another. Ngem lembelom uzhoru mborethen uzhelu: I prefer water to the other drink."
      concept: prefer
    - form: thabelom
      class: v
      field: Everyday speech
      gloss: to try; to make an effort toward an act or result
      concept: try
    - form: mbesarom
      class: v
      field: Everyday speech
      gloss: to search; to look actively for someone or something
      concept: search
    - form: mbenom
      class: v
      field: Everyday speech
      gloss: to meet; to come together with or encounter someone
      concept: meet
    - form: mbenthom
      class: v
      field: Everyday speech
      gloss: to help; to give support that assists someone in an act or difficulty. Said as an urgent call, mbenthom means help!
      concept: [help, expression-help]
    - form: mbathilom
      class: v
      field: Everyday speech
      gloss: to share; to give or use part of something with others
      concept: share
    - form: zhabom
      class: v
      field: Everyday speech
      gloss: to trade; to exchange goods or services by agreement
      concept: trade
    - form: zhabekom
      class: v
      field: Everyday speech
      gloss: to buy; to obtain something in return for a payment
      concept: buy
    - form: zhabokom
      class: v
      field: Everyday speech
      gloss: to sell; to provide something in return for a payment
      concept: sell
    - form: thambom
      class: v
      field: Everyday speech
      gloss: to promise; to commit oneself to an act or outcome
      concept: promise-verb
    - form: zharom
      class: v
      field: Everyday speech
      gloss: to thank; to express gratitude to someone
      concept: thank-verb
    - form: ndokhelom
      class: v
      field: Everyday speech
      gloss: to forgive; to release resentment or a claim to punish someone for a wrong
      concept: forgive-verb
    - form: zhepkom
      class: v
      field: Everyday speech
      gloss: to refuse; to decline a request, offer or proposed action
      concept: refuse-verb
    - form: sembom
      class: v
      field: Everyday speech
      gloss: to agree; to accept a claim or join another's choice
      concept: agree-verb
    - form: vuthrom
      class: v
      field: Everyday speech
      gloss: to clash in the battle line; also, in ordinary speech, to fight or contend against another. The wider fighting sense is an extension of this free citation.
      concept: fight
      built: [vuthr-, -om]
    - form: mbarkom
      class: v
      field: Everyday speech
      gloss: to hit; to strike with a bodily part, tool or weapon
      concept: hit
    - form: ndengbom
      class: v
      field: Everyday speech
      gloss: to kill; to cause a living being's death
      concept: kill
    - form: korthom
      class: v
      field: Everyday speech
      gloss: "to keep watch over a person, place or thing; also, in ordinary speech, to defend or protect it against attack or harm. Ngem korthom ombelu: I guard or defend the house."
      concept: defend
      built: [korth-, -om]
    - form: vuthrelom
      class: v
      field: Everyday speech
      gloss: to attack; to begin hostile force against a target
      concept: attack
    - form: ngithom
      class: v
      field: Everyday speech
      gloss: to flee; to escape or run from danger
      concept: flee
    - form: ngitharom
      class: v
      field: Everyday speech
      gloss: to threaten; to state or signal an intention to cause harm
      concept: threaten
    - form: thambekom
      class: v
      field: Everyday speech
      gloss: to stop; to cease an activity or bring it to a halt. Said as a command, thambekom means stop!
      concept: [stop, expression-stop]
    - form: tharekom
      class: v
      field: Everyday speech
      gloss: to continue; to keep an act or state going
      concept: continue
    - form: thambelom
      class: v
      field: Everyday speech
      gloss: to wait; to remain until an expected person, event or time. Said as a call, thambelom means wait!
      concept: [wait, expression-wait]
    - form: ngembom
      class: v
      field: Everyday speech
      gloss: to happen; to take place as an event
      concept: happen
    - form: thangom ndareku
      class: v
      field: Everyday speech
      gloss: to kneel; to rest one's weight on one or both knees
      concept: kneel
    - form: mbarekom
      class: v
      field: Everyday speech
      gloss: to bend; to curve or fold a body or object
      concept: bend
    - form: ndelalom
      class: v
      field: Everyday speech
      gloss: to lean; to incline one's body or rest it against a support
      concept: lean
    - form: ngembarom
      class: v
      field: Everyday speech
      gloss: to cover; to put something over a surface or object
      concept: cover-verb
    - form: ngembelom
      class: v
      field: Everyday speech
      gloss: to uncover; to take a covering off
      concept: uncover
    - form: zhimbalom
      class: v
      field: Everyday speech
      gloss: to hide; to put someone or something out of sight or knowledge
      concept: hide
    - form: zhekom
      class: v
      field: Everyday speech
      gloss: "to shine; also, in ordinary speech, to reveal or bring something into view. Ngem zhekom mebothu: I reveal the pot. The revealing use is an extension of this free citation."
      concept: reveal
      built: [zhék-, -om]
    - form: ndozhthom
      class: v
      field: Everyday speech
      gloss: to lock; to fasten something with a lock
      concept: lock-verb
    - form: ndozhkelom
      class: v
      field: Everyday speech
      gloss: to unlock; to release a lock with its key or mechanism
      concept: unlock
    - form: mbethu
      class: adv
      field: Everyday speech
      gloss: "here; in this place. Ngem thumom mbethu: I am here."
      concept: here
    - form: ntethu
      class: adv
      field: Everyday speech
      gloss: "there; in that place. Ngem thumom ntethu: I am there."
      concept: there
    - form: zhemel mbethoru
      class: n
      field: Everyday speech
      gloss: "somewhere; an unspecified place. Ngem ngenom mbor zhemel mbethoru: I go somewhere."
      concept: somewhere
    - form: mbekhu mbethoru
      class: n
      field: Everyday speech
      gloss: "nowhere; no place. Mbekhu mbethoru mbathurom uzhoru: nowhere has water."
      concept: nowhere
    - form: mbemoi mbethoru
      class: n
      field: Everyday speech
      gloss: "everywhere; all places in the stated area. Mbemoi mbethoru mbathurom uzhoru: everywhere has water."
      concept: everywhere
    - form: mbetel
      class: part
      field: Everyday speech
      gloss: "near; at a short distance from the following place or object. Mebothu thumom mbetel ndelaru: the pot is near the table."
      concept: near
    - form: ngothen
      class: adv
      field: Everyday speech
      gloss: "far; at a great distance. Ombelu thumom ngothen: the house is far away; ngothen ngorathen ombelu, far from the house."
      concept: far
    - form: mbethal
      class: part
      field: Everyday speech
      gloss: "beside; at the side of. Mebothu thumom mbethal ndelaru: the pot is beside the table."
      concept: beside
    - form: mbethenel
      class: part
      field: Everyday speech
      gloss: "between; in the interval separating two stated things. Mebothu thumom mbethenel ndelaru ngeme ndelu: the pot is between the table and the seat."
      concept: between
    - form: ngwemer
      class: part
      field: Everyday speech
      gloss: "among; within a group or set. Mebothu thumom ngwemer mbenerin mebothu: the pot is among other pots."
      concept: among
    - form: thokel
      class: part
      field: Everyday speech
      gloss: "above; over; higher than the stated object, with or without contact. Ndozhu mbeseling thumom thokel ndelaru: the window is above the table; ngwelili ngenom thokel ombelu: a bird goes over the house."
      concept: [above, over]
    - form: ndokel
      class: part
      field: Everyday speech
      gloss: "below; under; lower than the stated object. Mebothu thumom ndokel ndelaru: the pot is under the table."
      concept: [below, under]
    - form: ngothal
      class: part
      field: Everyday speech
      gloss: "beyond; farther along than a stated boundary or reference. Ombelu thumom ngothal ndozhelu: the house is beyond the barrier."
      concept: beyond
    - form: mbanor
      class: part
      field: Everyday speech
      gloss: "before; in front of a stated person or thing. Mebothu thumom mbanor ndelaru: the pot is in front of the table."
      concept: before-spatial
    - form: mbathar
      class: part
      field: Everyday speech
      gloss: "behind; at the rear of a stated person or thing. Mebothu thumom mbathar ndelaru: the pot is behind the table."
      concept: behind
    - form: mbalethel
      class: n
      field: Everyday speech
      gloss: the left; the direction on one's left side
      concept: left-direction
    - form: mbalathel
      class: n
      field: Everyday speech
      gloss: the right; the direction on one's right side
      concept: right-direction
    - form: mbelthu
      class: n
      field: Everyday speech
      gloss: the center; the middle of a place or group
      concept: center
    - form: thoku
      class: adv
      field: Everyday speech
      gloss: up; toward a higher position
      concept: up
    - form: ndoku
      class: adv
      field: Everyday speech
      gloss: down; toward a lower position
      concept: down
    - form: mbanem
      class: adv
      field: Everyday speech
      gloss: forward; toward the front
      concept: forward
    - form: ngorathen mbethu
      class: part
      field: Everyday speech
      gloss: "away; from here or from the context's point of reference. Ngem ngenom ngorathen mbethu: I go away."
      concept: away
    - form: ngembel
      class: part
      field: Everyday speech
      gloss: "through; entering and passing inside a place or opening. Ngem ngenom ngembel ndozhu: I go through the doorway."
      concept: through
    - form: ngembet
      class: part
      field: Everyday speech
      gloss: "across; from one side to the other of a stated place. Ngem ngenom ngembet khuthel meboring: I go across the field."
      concept: across
    - form: ngombet
      class: part
      field: Everyday speech
      gloss: "around; along the outside of a stated object or place. Ngem ngenom ngombet ombelu: I go around the house."
      concept: around
    - form: mbathel
      class: part
      field: Everyday speech
      gloss: "on; upon a supporting surface. Mebothu thumom mbathel ndelaru: the pot is on the table."
      concept: on
    - form: ngorathen
      class: part
      field: Everyday speech
      gloss: "from; away out of a stated source. Ngem mbekom ngorathen ombelu: I come from the house."
      concept: from
    - form: thamu
      class: n
      field: Everyday speech
      gloss: time; the dimension in which events occur and endure
      concept: time
    - form: thameku
      class: n
      field: Everyday speech
      gloss: a moment; a very short stretch or point of time
      concept: moment
    - form: zhekathu
      class: n
      field: Everyday speech
      gloss: a day; daylight time or a full daily cycle, as context makes clear
      concept: day
    - form: zhimbathu
      class: n
      field: Everyday speech
      gloss: a night; the dark part of a daily cycle
      concept: night
    - form: zhekaru
      class: n
      field: Everyday speech
      gloss: dawn; the first light of day; also the morning as it begins
      concept: [morning, dawn]
    - form: mbelthu zhekoming
      class: n
      field: Everyday speech
      gloss: noon; the middle of daylight time
      concept: noon
    - form: zhekethu
      class: n
      field: Everyday speech
      gloss: dusk; the fading of daylight; also the evening as night approaches
      concept: [evening, dusk]
    - form: mbelthu zhimbathing
      class: n
      field: Everyday speech
      gloss: midnight; the middle of the night
      concept: midnight
    - form: thame
      class: adv
      field: Everyday speech
      gloss: now; at the time of speaking
      concept: now
    - form: thamo
      class: adv
      field: Everyday speech
      gloss: then; at the time already indicated
      concept: then
    - form: zhekathu tebu
      class: n
      field: Everyday speech
      gloss: "today; this day. Ngem mbekom zhekathu tebu: I come today."
      concept: today
    - form: zhekathu thomarin
      class: n
      field: Everyday speech
      gloss: yesterday; the day before today
      concept: yesterday
    - form: zhekathu thebarin
      class: n
      field: Everyday speech
      gloss: tomorrow; the day after today
      concept: tomorrow
    - form: thamu thomarin
      class: n
      field: Everyday speech
      gloss: the past; time before now
      concept: past
    - form: thamu thamin
      class: n
      field: Everyday speech
      gloss: the present; the current time
      concept: present
    - form: thamu thebarin
      class: n
      field: Everyday speech
      gloss: the future; time after now
      concept: future
    - form: mbanor pemburu
      class: part
      field: Everyday speech
      gloss: "before a birth; before a stated event. Ngem mbekom mbanor pemburu: I arrive before the birth. Replace pemburu with the reference event or time."
      concept: before-time
    - form: thebaren pemburu
      class: part
      field: Everyday speech
      gloss: "after a birth; after a stated event. Ngem mbekom thebaren pemburu: I arrive after the birth."
      concept: after
    - form: mbo pemburu
      class: part
      field: Everyday speech
      gloss: "during a birth; within the duration of a stated event. Ngem thambelom mbo pemburu: I wait during the birth."
      concept: during
    - form: mbo mebu ngemin
      class: part
      field: Everyday speech
      gloss: "while I eat; during my eating. Ngem ntekom mbo mebu ngemin: I listen while I eat. Ngemin names the eater in this phrase."
      concept: while
    - form: mbor pemburu
      class: part
      field: Everyday speech
      gloss: "until the birth; up to a stated time or event. Ngem thambelom mbor pemburu: I wait until the birth."
      concept: until
    - form: ngorathen pemburu
      class: part
      field: Everyday speech
      gloss: "since the birth; from a stated time or event onward. Ngem thumom mbethu ngorathen pemburu: I have been here since the birth."
      concept: since-time
    - form: mbemoi thamu
      class: n
      field: Everyday speech
      gloss: "always; at every relevant time. Ngem thumom mbethu mbemoi thamu: I am always here."
      concept: always
    - form: ngamin ngembu
      class: n
      field: Everyday speech
      gloss: "often; on many occasions. Ngem mbekom ngamin ngembu: I often come."
      concept: often
    - form: zhemel ngembu
      class: n
      field: Everyday speech
      gloss: "sometimes; on some occasions. Ngem mbekom zhemel ngembu: I sometimes come."
      concept: sometimes
    - form: ngomin ngembu
      class: n
      field: Everyday speech
      gloss: "rarely; on few occasions. Ngem mbekom ngomin ngembu: I rarely come."
      concept: rarely
    - form: mbekhu ngembu
      class: n
      field: Everyday speech
      gloss: "never; on no occasion. Ngem mbekom mbekhu ngembu: I never come."
      concept: never
    - form: thamorin
      class: adj
      field: Everyday speech
      gloss: long-lasting; continuing for a long time
      concept: [long-duration, lasting-duration]
    - form: thamilin
      class: adj
      field: Everyday speech
      gloss: short in duration; brief
      concept: [short-duration, brief-duration]
    - form: mbetham
      class: adv
      field: Everyday speech
      gloss: again; one more time. Said alone as a request, mbetham means again; please repeat it.
      concept: [again, expression-again]
    - form: em ngembu
      class: n
      field: Everyday speech
      gloss: "once; on one occasion. Ngem mbekom em ngembu: I come once."
      concept: once
    - form: mbet ngembu
      class: n
      field: Everyday speech
      gloss: "twice; on two occasions. Ngem mbekom mbet ngembu: I come twice."
      concept: twice
    - form: ngamin mbetham
      class: adv
      field: Everyday speech
      gloss: "repeatedly; again many times. Ngem mbekom ngamin mbetham: I come repeatedly."
      concept: repeatedly
    - form: ngatham
      class: adv
      field: Everyday speech
      gloss: "already; before now or before the expected reference time. Ngem thumom mbethu ngatham: I am already here."
      concept: already
    - form: thartham
      class: adv
      field: Everyday speech
      gloss: "still; continuing through the reference time. Ngem thambelom thartham: I am still waiting."
      concept: still
    - form: mbes ngatham
      class: adv
      field: Everyday speech
      gloss: "not yet; the act has not occurred by the reference time. Ngem mbes mbekom ngatham: I have not come yet. Said alone, mbes ngatham means not yet."
      concept: yet
    - form: mbethim
      class: adv
      field: Everyday speech
      gloss: soon; after only a short interval from the reference time
      concept: soon
    - form: thengem
      class: adv
      field: Everyday speech
      gloss: later; after the stated or understood reference time
      concept: later
    - form: thamaren
      class: adv
      field: Everyday speech
      gloss: early; before the expected or usual time
      concept: early
    - form: thamekin
      class: adv
      field: Everyday speech
      gloss: late; after the expected or usual time
      concept: late
    - form: mbanor mbemoi mbenerin ngembu
      class: part
      field: Everyday speech
      gloss: "first; before every other event in the sequence. Ngem mebom mbanor mbemoi mbenerin ngembu: I eat first, before the other events."
      concept: first-sequence
    - form: thebarin
      class: adj
      field: Everyday speech
      gloss: next; immediately following in a sequence
      concept: next
    - form: thomarin
      class: adj
      field: Everyday speech
      gloss: last; final in a sequence; also previous or earlier relative to the time in view. Zhekathu thomarin is yesterday; thamu thomarin is the past.
      concept: last
    - form: mbam thamburu
      class: part
      field: Everyday speech
      gloss: "finally; at the end of the sequence or after waiting. Ngem mbekom mbam thamburu: I finally arrive."
      concept: finally
    - form: ngothamu
      class: n
      field: Everyday speech
      gloss: a season; a recurring part of the year
      concept: season
    - {form: thamoru, class: n, field: Everyday speech, gloss: a year, concept: year}
    - form: ndemin
      class: adj
      field: Everyday speech
      gloss: your; yours; belonging to the addressee. Mebothu ndemin means your pot.
      concept: [your]
    - form: mbenemu
      class: pron
      field: Everyday speech
      gloss: "he; she; it; the already indicated person or being. The referent supplies the sex or kind: mbenemu mbekom, he or she comes; mbenemu thumom uzhorin, it is wet."
      concept: [he, she, it]
    - form: mbenira
      class: pron
      field: Everyday speech
      gloss: they; them; the indicated people or things
      concept: they
    - form: ngemi
      class: pron
      field: Everyday speech
      gloss: we; us; the speaker together with other people
      concept: we
    - form: ngemirin
      class: adj
      field: Everyday speech
      gloss: our; ours; belonging to the speaker and others. Ombelu ngemirin means our house.
      concept: [our]
    - form: ntabu
      class: dem
      field: Everyday speech
      gloss: "that; the farther or previously indicated thing. Mebothu ntabu: that pot."
      concept: that
    - form: tebira
      class: dem
      field: Everyday speech
      gloss: "these; the nearby or indicated things. Mebothu tebira: these pots."
      concept: these
    - form: ntabira
      class: dem
      field: Everyday speech
      gloss: "those; the farther or previously indicated things. Mebothu ntabira: those pots."
      concept: those
    - form: zhemel mbenaru
      class: n
      field: Everyday speech
      gloss: "someone; an unspecified person. Zhemel mbenaru mbekom: someone comes."
      concept: someone
    - form: mbethem mbenaru
      class: n
      field: Everyday speech
      gloss: "anyone; any person without restricting who. Mbethem mbenaru mbakom mbekom: anyone can come."
      concept: anyone
    - form: mbemoi mbenaru
      class: n
      field: Everyday speech
      gloss: "everyone; all the people in the stated context. Mbemoi mbenaru mbekom: everyone comes."
      concept: everyone
    - form: mbekhu mbenaru
      class: n
      field: Everyday speech
      gloss: "no one; not a single person. Mbekhu mbenaru mbekom: no one comes."
      concept: no-one
    - form: zhemel mbathilu
      class: n
      field: Everyday speech
      gloss: "something; an unspecified thing. Zhemel mbathilu ndolom: something falls."
      concept: something
    - form: mbethem mbathilu
      class: n
      field: Everyday speech
      gloss: "anything; any thing without restricting which. Ngem mbakom thabom mbethem mbathilu: I can make anything."
      concept: anything
    - form: mbemoi mbathilu
      class: n
      field: Everyday speech
      gloss: "everything; all things in the stated context. Mbemoi mbathilu thumom mbethu: everything is here."
      concept: everything
    - form: ngemilu
      class: pron
      field: Everyday speech
      gloss: "self; oneself; the object refers back to the clause's subject. Ngem mbesom ngemilu: I see myself; mbenemu mbesom ngemilu: that person sees themself."
      concept: self
    - form: mbeneru
      class: dem
      field: Everyday speech
      gloss: "another; one more or a different one. Zharurom mbeneru mebothu: give another pot."
      concept: another
    - form: mbemorin
      class: adj
      field: Everyday speech
      gloss: the same; identical with the person, thing or kind already indicated
      concept: same
    - form: mbeyi
      class: pron
      field: Everyday speech
      gloss: "who; the unknown person in a question. Mbeyi mbekom: who comes?"
      concept: question-who
    - form: ntayi
      class: pron
      field: Everyday speech
      gloss: "what; the unknown thing in a question. Ntayi ndolom: what falls? Said alone, ntayi asks what was said or expresses surprise: what?"
      concept: [question-what, expression-what]
    - form: tebi
      class: dem
      field: Everyday speech
      gloss: "which; selecting from a stated set. Tebi mebothu mbathurom uzhoru: which pot has water?"
      concept: question-which
    - form: mbethyi
      class: adv
      field: Everyday speech
      gloss: "where. Ndem thumom mbethyi: where are you?"
      concept: question-where
    - form: thamyi
      class: adv
      field: Everyday speech
      gloss: "when. Ndem mbekom thamyi: when do you come?"
      concept: question-when
    - form: thonyi
      class: adv
      field: Everyday speech
      gloss: "why; for what reason. Ndem mbekom thonyi: why do you come?"
      concept: question-why
    - form: moryi
      class: adv
      field: Everyday speech
      gloss: "how; in what manner. Ndem thabom mbathilu moryi: how do you make the thing?"
      concept: question-how
    - form: ngorimu mebothing thumom ntayi
      class: call
      field: Everyday speech
      gloss: how many pots are there? Literally the number of pots is what; replace mebothu with the things being counted.
      concept: question-how-many
    - form: ngorimu uzhoring thumom ntayi
      class: call
      field: Everyday speech
      gloss: how much water is there? Literally the amount of water is what; replace uzhoru with the substance being measured.
      concept: question-how-much
    - form: mbeyin
      class: adj
      field: Everyday speech
      gloss: whose; belonging to whom. Mebothu thumom mbeyin asks whose the pot is.
      concept: [question-whose]
    - form: mbor mbeyi
      class: part
      field: Everyday speech
      gloss: "to whom. Ndem zharurom mebothu mbor mbeyi: to whom do you give the pot?"
      concept: question-to-whom
    - form: ngorathen mbethyi
      class: part
      field: Everyday speech
      gloss: "from where. Ndem mbekom ngorathen mbethyi: from where do you come?"
      concept: question-from-where
    - form: mbon ntayi
      class: part
      field: Everyday speech
      gloss: "for what purpose. Ndem thabom mebothu mbon ntayi: for what purpose do you make the pot?"
      concept: question-for-what-purpose
    - form: zhembe
      class: part
      field: Everyday speech
      gloss: "question particle after a clause; asks for confirmation or denial. Ndem mbekom zhembe: are you coming?"
      concept: question-polar
    - form: ndem zhepomelom ntayi
      class: call
      field: Everyday speech
      gloss: what do you mean; what meaning do you intend? Ndem zhepomelom ntayi asks the speaker to clarify the meaning of their words.
      concept: [question-clarification, expression-what-do-you-mean]
    - form: mbekhe
      class: part
      field: Everyday speech
      gloss: yes; affirmation of a question or proposal
      concept: yes
    - form: ndekhe
      class: part
      field: Everyday speech
      gloss: no; denial of a question or rejection of a proposal
      concept: no
    - form: sembin
      class: adj
      field: Everyday speech
      gloss: true; real; corresponding to what actually is the case. A sembin claim can be doubted; certainty alone does not make it true.
      concept: ["true", real]
    - form: mbes sembin
      class: adj
      field: Everyday speech
      gloss: false; unreal; not corresponding to what actually is the case
      concept: ["false", unreal]
    - form: zhepku
      class: n
      field: Everyday speech
      gloss: a lie; a statement made with the intention of deceiving someone about what is true
      concept: lie-noun
    - form: sembe
      class: adv
      field: Everyday speech
      gloss: "indeed; truly; really; said to affirm the truth or sincerity of one’s own assertion. Sembe, ngem lembom mbenthom: truly, I want to help."
      concept: [sincerity, indeed, in-fact]
    - form: thimbe
      class: adv
      field: Everyday speech
      gloss: "certainly; with the speaker's full conviction. Thimbe, mbenemu mbekom: certainly, that person is coming. The speaker's confidence may be mistaken."
      concept: certainly
    - form: mbethe
      class: adv
      field: Everyday speech
      gloss: "perhaps; might; presents an event as possible rather than certain. Mbenemu mbekom mbethe: that person might come."
      concept: [perhaps, might-possibility]
    - form: mbethel
      class: adv
      field: Everyday speech
      gloss: "probably; the event is judged more likely than not. Mbenemu mbekom mbethel: that person will probably come."
      concept: probably
    - form: mbes mbethel
      class: adv
      field: Everyday speech
      gloss: "unlikely; the event is judged less likely than not. Mbenemu mbekom mbes mbethel: that person is unlikely to come."
      concept: unlikely
    - form: mbathurom thimbaru
      class: v
      field: Everyday speech
      gloss: "to be sure; to have subjective certainty. Ngem mbathurom thimbaru: I am sure."
      concept: certain
    - form: mbathurom thimbelu
      class: v
      field: Everyday speech
      gloss: "to be uncertain; to have doubt. Ngem mbathurom thimbelu: I am uncertain."
      concept: uncertain
    - form: mbese
      class: adv
      field: Everyday speech
      gloss: "apparently; on the evidence of appearances. Mbenemu thumom mborekin mbese: apparently, that person is ill."
      concept: apparently
    - form: zhepe
      class: adv
      field: Everyday speech
      gloss: "supposedly; according to what someone says, without the speaker's endorsement. Mbenemu thumom mborekin zhepe: supposedly, that person is ill."
      concept: supposedly
    - form: thimbom
      class: v
      field: Everyday speech
      gloss: to doubt; to be uncertain whether a claim is right
      concept: doubt-verb
    - form: mbenderom
      class: v
      field: Everyday speech
      gloss: "to suspect; to consider a claim possible on limited indications. Ngem mbenderom ngothu thengem: I suspect rain later; the suspected matter can be welcome, unwelcome or neutral."
      concept: suspect
    - form: mbendekom
      class: v
      field: Everyday speech
      gloss: to guess; to offer a judgment without sufficient knowledge
      concept: guess-verb
    - form: mbendinom
      class: v
      field: Everyday speech
      gloss: to assume; to accept a claim as a starting point without first proving it
      concept: assume-verb
    - form: sembelin
      class: adj
      field: Everyday speech
      gloss: correct; accurate or in agreement with the relevant fact or rule
      concept: correct
    - form: mbes sembelin
      class: adj
      field: Everyday speech
      gloss: incorrect; inaccurate or at odds with the relevant fact or rule
      concept: incorrect
    - form: mbes sembom
      class: v
      field: Everyday speech
      gloss: "to disagree; not to accept another's claim or choice. Ngem mbes sembom mbenem ndem: I disagree with you."
      concept: disagree
    - form: mbes sembin zhepu
      class: n
      field: Everyday speech
      gloss: a falsehood; an untrue statement, whether deliberately deceptive or mistaken
      concept: falsehood
    - form: ngothe
      class: conj
      field: Everyday speech
      gloss: "or; joins alternatives. Ngem lembom uzhoru ngothe meboru: I want water or food. Ngothe uzhoru ngothe meboru means either water or food."
      concept: [or, either-alternative]
    - form: mbethes
      class: conj
      field: Everyday speech
      gloss: "but; however; nevertheless; joins a contrasting continuation. Ngem thumom thomin mbethes ngem ngenom: I am tired, but I go."
      concept: [but, however, nevertheless]
    - form: ndekhe mben
      class: conj
      field: Everyday speech
      gloss: "neither; nor; denies the joined alternatives. Ndekhe mben uzhoru ndekhe mben meboru thumom mbethu: neither water nor food is here."
      concept: [nor, neither-alternative]
    - form: thombes
      class: conj
      field: Everyday speech
      gloss: "because; introduces a reason. Ngem uzhelom thombes ngem mbathurom uzhelku: I drink because I am thirsty."
      concept: because
    - form: thombele
      class: conj
      field: Everyday speech
      gloss: "therefore; the following clause is a consequence. Ngem mbathurom uzhelku; thombele ngem uzhelom: I am thirsty; therefore I drink."
      concept: therefore
    - form: mbis
      class: conj
      field: Everyday speech
      gloss: "if; introduces a condition. Mbis ngothu ngembom, ngem tharalom mbo: if rain comes, I stay inside."
      concept: if
    - form: thombin
      class: conj
      field: Everyday speech
      gloss: "then; introduces the consequence of a condition. Mbis ngothu ngembom, thombin ngem tharalom mbo: if rain comes, then I stay inside."
      concept: then-conditional
    - form: mbis ndem mbes mbekom
      class: conj
      field: Everyday speech
      gloss: "unless you come; if you do not come. Mbis ndem mbes mbekom, ngem ngenom: unless you come, I go. In this cited condition, ndem is the subject and mbes immediately precedes the denied verb mbekom."
      concept: unless
    - form: mbis ndembethe
      class: conj
      field: Everyday speech
      gloss: "otherwise; if the preceding condition does not hold. Ngem thambelom mbis ndem mbekom; mbis ndembethe ngem ngenom: I wait if you come; otherwise I go."
      concept: otherwise
    - form: mbithen
      class: conj
      field: Everyday speech
      gloss: "although; introduces a conceded fact. Mbithen ngem thumom thomin, ngem ngenom: although I am tired, I go."
      concept: although
    - form: mbithe
      class: part
      field: Everyday speech
      gloss: "despite; even with the stated obstacle. Ngem ngenom mbithe mborekin: I go despite being ill. In this cited use mborekin states the person's illness as the obstacle."
      concept: despite
    - form: mbam mbethoru uzheling
      class: part
      field: Everyday speech
      gloss: "instead of another drink; in place of the other drink. Ngem ndalom uzhoru mbam mbethoru uzheling: I take water instead of the other drink. Replace uzheling with the cited belonging form of the alternative being replaced."
      concept: instead
    - form: mbethil
      class: part
      field: Everyday speech
      gloss: "like; as; in the manner or role of. Ngem thabom mbethil kwendari: I work as a teacher; mebothu thumom mbethil uzhelili: the pot is like a cup."
      concept: [like, as]
    - form: mbes mbethil
      class: part
      field: Everyday speech
      gloss: "unlike; without the stated resemblance. Mebothu thumom mbes mbethil uzhelili: the pot is unlike a cup."
      concept: unlike
    - form: zhemiyi
      class: conj
      field: Everyday speech
      gloss: "whether; introduces a polar matter being considered. Ngem mbendom zhemiyi ndem mbekom: I consider whether you are coming. The considered subject is explicitly ndem, you."
      concept: whether
    - form: zhepme
      class: part
      field: Everyday speech
      gloss: "that is; namely; introduces a restatement or explicit name. Ngem lembom em mbathilu, zhepme uzhoru: I want one thing, namely water."
      concept: [that-is, namely]
    - form: mbethil tebu
      class: part
      field: Everyday speech
      gloss: "for example; introduces a specimen. Ngamin mbathilu thumom uzhorin, mbethil tebu mebothu: many things are wet, for example this pot."
      concept: for-example
    - form: mbekhar
      class: part
      field: Everyday speech
      gloss: "except; excluding the following member. Mbemoi mebothu thumom mbethu mbekhar mebothu ntabu: all the pots are here except that pot."
      concept: except
    - form: mbemor
      class: adv
      field: Everyday speech
      gloss: "only; restricts the following constituent. Mbemor ngem thumom mbethu: only I am here."
      concept: only
    - form: mbenge
      class: adv
      field: Everyday speech
      gloss: "even; includes an unexpected case. Mbenge yombili mbakom kwenbom: even a child can learn."
      concept: even
    - form: mbethege
      class: adv
      field: Everyday speech
      gloss: "also; adds another matching case. Ngem mbekom mbethege: I come too."
      concept: also
    - form: thokelin
      class: adv
      field: Everyday speech
      gloss: "especially; marks the case given particular weight. Ngem lembom meboru, thokelin pembilu: I want food, especially seeds."
      concept: especially
    - form: mbelikin
      class: adj
      field: Everyday speech
      gloss: small; little in overall size
      concept: small
    - form: thokem mbelikin
      class: adj
      field: Everyday speech
      gloss: tiny; very small
      concept: tiny
    - form: thokem thokorin
      class: adj
      field: Everyday speech
      gloss: huge; very large
      concept: huge
    - form: thokimin
      class: adj
      field: Everyday speech
      gloss: short in physical length
      concept: short
    - form: ndokin
      class: adj
      field: Everyday speech
      gloss: low; close to the ground or lower reference level
      concept: low
    - form: mbathin
      class: adj
      field: Everyday speech
      gloss: wide; extending far from side to side
      concept: wide
    - form: mbes mbathin
      class: adj
      field: Everyday speech
      gloss: narrow; small from side to side
      concept: narrow
    - form: ngorthin
      class: adj
      field: Everyday speech
      gloss: heavy; great in weight
      concept: heavy
    - form: ngorthimin
      class: adj
      field: Everyday speech
      gloss: light; small in weight
      concept: light-weight
    - form: mbelin
      class: adj
      field: Everyday speech
      gloss: new; recently made, acquired or encountered
      concept: new
    - form: ndawin
      class: adj
      field: Everyday speech
      gloss: fast; quick in movement or occurrence
      concept: fast
    - form: ndomin
      class: adj
      field: Everyday speech
      gloss: slow; taking much time in movement or occurrence
      concept: slow
    - form: membelin
      class: adj
      field: Everyday speech
      gloss: easy; requiring little effort or difficulty
      concept: easy
    - form: gorthilin
      class: adj
      field: Everyday speech
      gloss: difficult; requiring considerable effort or skill
      concept: difficult
    - form: mborin
      class: adj
      field: Everyday speech
      gloss: good; desirable or beneficial in the relevant respect; ethically right when judging conduct
      concept: [good, right-ethical]
    - form: mborkhin
      class: adj
      field: Everyday speech
      gloss: bad; undesirable or harmful in the relevant respect; ethically wrong when judging conduct
      concept: [bad, wrong-ethical]
    - form: mborel
      class: adj
      field: Everyday speech
      gloss: "better; more good or beneficial than the comparison. Uzhoru thumom mborel mborethen uzhelu: the water is better than the other drink."
      concept: better
    - form: mborkel
      class: adj
      field: Everyday speech
      gloss: "worse; more bad or harmful than the comparison. Uzhelu thumom mborkel mborethen uzhoru: the drink is worse than the water."
      concept: worse
    - form: mborel mborethen mbemoi mbenerin
      class: adj
      field: Everyday speech
      gloss: "best; better than every other member of the comparison set. Mebothu tebu thumom mborel mborethen mbemoi mbenerin mebothu: this pot is better than all the other pots. Mbenerin excludes this pot from the standards."
      concept: best
    - form: mborkel mborethen mbemoi mbenerin
      class: adj
      field: Everyday speech
      gloss: "worst; worse than every other member of the comparison set. Mebothu tebu thumom mborkel mborethen mbemoi mbenerin mebothu: this pot is worse than all the other pots."
      concept: worst
    - form: tharolin
      class: adj
      field: Everyday speech
      gloss: important; carrying great consequence or significance
      concept: important
    - form: tharomin
      class: adj
      field: Everyday speech
      gloss: trivial; of little significance or consequence
      concept: trivial
    - form: mbothin
      class: adj
      field: Everyday speech
      gloss: necessary; needed for the stated purpose or situation
      concept: necessary
    - form: makorin
      class: adj
      field: Everyday speech
      gloss: valuable; having worth for use, exchange or personal regard
      concept: valuable
    - form: mbathurom mbekhu makoru
      class: v
      field: Everyday speech
      gloss: "to be worthless; to have no worth in the stated respect. Mebothu mbathurom mbekhu makoru: the pot has no worth."
      concept: worthless
    - form: thabin
      class: adj
      field: Everyday speech
      gloss: useful; serving a purpose or helping an act
      concept: useful
    - form: mbes thabin
      class: adj
      field: Everyday speech
      gloss: useless; serving no useful purpose in the stated context
      concept: useless
    - form: thangekin
      class: adj
      field: Everyday speech
      gloss: broken; damaged so that the thing no longer holds together or works
      concept: broken
    - form: thambin
      class: adj
      field: Everyday speech
      gloss: complete; having every required part or stage finished
      concept: complete
    - form: mbes thambin
      class: adj
      field: Everyday speech
      gloss: incomplete; lacking a required part or unfinished stage
      concept: incomplete
    - form: semborin
      class: adj
      field: Everyday speech
      gloss: honest; truthful and sincere rather than deceptive
      concept: honest
    - form: semborkin
      class: adj
      field: Everyday speech
      gloss: dishonest; intending to mislead or defraud
      concept: dishonest
    - form: thokem
      class: adv
      field: Everyday speech
      gloss: "very; intensifies the following quality. Mebothu thumom thokem uzhorin: the pot is very wet."
      concept: very
    - form: thokeng
      class: adv
      field: Everyday speech
      gloss: "extremely; to an exceptional degree. Uzhoru thumom thokeng ngolin: the water is extremely cold."
      concept: extremely
    - form: mbem
      class: adv
      field: Everyday speech
      gloss: "somewhat; to a moderate extent. Uzhoru thumom mbem ngolin: the water is somewhat cold."
      concept: somewhat
    - form: mbemilin
      class: adv
      field: Everyday speech
      gloss: "slightly; to a small extent. Uzhoru thumom mbemilin ngolin: the water is slightly cold."
      concept: slightly
    - form: mbekim
      class: adv
      field: Everyday speech
      gloss: "barely; only just reaching the required point or degree. Uzhoru thumom mbekim nkarin: the water is barely hot enough."
      concept: barely
    - form: ngorel mborethen ngorimu mbothin
      class: num
      field: Everyday speech
      gloss: "too much; more than the needed quantity. Mebothu mbathurom ngorel uzhoru mborethen ngorimu mbothin: the pot has too much water for the stated purpose."
      concept: too-much
    - form: ngomel mborethen ngorimu mbothin
      class: num
      field: Everyday speech
      gloss: "too little; less than the needed quantity. Mebothu mbathurom ngomel uzhoru mborethen ngorimu mbothin: the pot has too little water for the stated purpose."
      concept: too-little
    - form: mbemorilin
      class: adj
      field: Everyday speech
      gloss: similar; sharing relevant qualities without being identical
      concept: similar
    - form: mbemokin
      class: adj
      field: Everyday speech
      gloss: opposite; contrary in position, direction or relevant quality
      concept: opposite
    - form: mbakom
      class: v
      field: Everyday speech
      gloss: "can; be able to do something. Ngem mbakom ngenom: I can walk. This verb names ability, not permission."
      concept: can
    - form: mbes mbakom
      class: v
      field: Everyday speech
      gloss: "cannot; be unable to do something. Ngem mbes mbakom ngenom: I cannot walk."
      concept: cannot
    - form: mbakhin
      class: adj
      field: Everyday speech
      gloss: possible; able to happen or be done
      concept: possible
    - form: mbes mbakhin
      class: adj
      field: Everyday speech
      gloss: impossible; unable to happen or be done
      concept: impossible
    - form: mbathurom lemkolu
      class: v
      field: Everyday speech
      gloss: "to have permission to act. Ngem mbathurom lemkolu ngenom: I may go. Lemkolu ngenom is the cited permission-to-go expression, distinct from bodily ability."
      concept: may-permission
    - form: mbotharom
      class: v
      field: Everyday speech
      gloss: "must; be obliged to perform the following act. Ngem mbotharom ngenom: I must go."
      concept: must
    - form: mbotharom mbes
      class: v
      field: Everyday speech
      gloss: "must not; be obliged to refrain from the following act. Ngem mbotharom mbes ngenom: I must not go."
      concept: must-not
    - form: mbothilom
      class: v
      field: Everyday speech
      gloss: "ought; should; be advised by duty or good judgment to perform the act. Ngem mbothilom ngenom: I should go."
      concept: ought
    - form: mbotharin
      class: adj
      field: Everyday speech
      gloss: required; demanded by an authority or rule
      concept: required
    - form: lembithin
      class: adj
      field: Everyday speech
      gloss: optional; left to choice rather than required
      concept: optional
    - form: lemkorin
      class: adj
      field: Everyday speech
      gloss: allowed; permitted by the relevant person or rule
      concept: allowed
    - form: lemkokin
      class: adj
      field: Everyday speech
      gloss: forbidden; prohibited by the relevant person or rule
      concept: forbidden
    - form: lemkorom
      class: v
      field: Everyday speech
      gloss: "to permit; to give someone permission to act. Ngem lemkorom ndem ngenom: I permit you to go."
      concept: permit
    - form: lemkokom
      class: v
      field: Everyday speech
      gloss: "to prohibit; to forbid an act. Ngem lemkokom ngenom: I prohibit going."
      concept: prohibit
    - form: lembelin
      class: adj
      field: Everyday speech
      gloss: free to act; not subject to the relevant restraint
      concept: free
    - form: lemkekin
      class: adj
      field: Everyday speech
      gloss: constrained; limited in action by a bond, force or rule
      concept: constrained
    - form: lembin
      class: adj
      field: Everyday speech
      gloss: willing; ready to act by one's own desire or consent
      concept: willing
    - form: mbes lembin
      class: adj
      field: Everyday speech
      gloss: unwilling; not ready to act by one's own desire or consent
      concept: unwilling
    - form: mbendalin
      class: adj
      field: Everyday speech
      gloss: intended; done or planned on purpose
      concept: intended
    - form: mbes mbendalin
      class: adj
      field: Everyday speech
      gloss: accidental; occurring without the relevant person's intention
      concept: accidental
    - form: okharé ne thalé
      class: call
      field: Everyday speech
      gloss: hello; the existing greeting of Okharis, hailing the person met as one of the people and wishing peace. Okharé is the person addressed, ne the word of address and thalé the greeting.
      concept: hello
    - form: ngenom mbenem tharelu
      class: call
      field: Everyday speech
      gloss: goodbye; go in peace; a farewell to a departing person
      concept: goodbye
    - form: mbekom mbo
      class: call
      field: Everyday speech
      gloss: welcome; come inside; a formula receiving someone as a guest
      concept: expression-welcome
    - form: ngem zhepimom
      class: call
      field: Everyday speech
      gloss: "please; I ask; introduces a courteous request. Ngem zhepimom, zharurom uzhoru: please give water."
      concept: expression-please
    - form: ngem zharom ndem
      class: call
      field: Everyday speech
      gloss: thank you; I give you thanks
      concept: expression-thank-you
    - form: mbenem beloru
      class: call
      field: Everyday speech
      gloss: you're welcome; gladly; a courteous response to thanks, literally with joy
      concept: expression-youre-welcome
    - form: ngem zhepimom lemkolu
      class: call
      field: Everyday speech
      gloss: excuse me; I ask permission; said when requesting someone's attention or room to pass
      concept: expression-excuse-me
    - form: ngem mbathurom thambelu
      class: call
      field: Everyday speech
      gloss: sorry; I feel regret; said as an apology for one's act or its effect
      concept: expression-sorry
    - form: ndokhelom ngem
      class: call
      field: Everyday speech
      gloss: forgive me; a request to release resentment or blame for one's wrong
      concept: expression-forgive-me
    - form: mbekhe thimbe
      class: call
      field: Everyday speech
      gloss: of course; a confident affirmative response
      concept: of-course
    - form: mbekom mbethu
      class: call
      field: Everyday speech
      gloss: come here; a request or call to approach the speaker
      concept: expression-come-here
    - form: ngenom ngorathen mbethu
      class: call
      field: Everyday speech
      gloss: go away; a request or command to leave the speaker's place
      concept: expression-go-away
    - form: zhepom mbetham
      class: call
      field: Everyday speech
      gloss: pardon; say it again; a request to repeat speech that was not heard or understood
      concept: expression-pardon
    - form: ngem talithelom
      class: call
      field: Everyday speech
      gloss: I understand; an acknowledgment that the meaning is clear
      concept: expression-i-understand
    - form: ngem mbes talithelom
      class: call
      field: Everyday speech
      gloss: I do not understand; a response asking for clearer explanation
      concept: expression-i-do-not-understand
    - form: ndem zhepom tebu moryi
      class: call
      field: Everyday speech
      gloss: how do you say this? A request for wording, said while indicating the thing or meaning to express. Replace tebu with the meaning being asked about.
      concept: expression-how-do-you-say
    - form: zhepolu tebwin thumom ntayi
      class: call
      field: Everyday speech
      gloss: what is this called? Literally the name of this is what; said while indicating the thing to be named
      concept: expression-what-is-this-called
    - form: sembe zhembe
      class: call
      field: Everyday speech
      gloss: really? A surprised request to confirm that what was said is actually the case
      concept: expression-really
    - form: ndekhe mbekhu
      class: call
      field: Everyday speech
      gloss: not at all; an emphatic denial of the presence or degree just suggested, literally no, zero
      concept: expression-not-at-all
    - form: mbaniru
      class: n
      field: Everyday speech
      gloss: people; human beings taken together
      concept: people
    - {form: mbenkharu, class: n, field: Everyday speech, gloss: a male human being}
    - {form: mbenelu, class: n, field: Everyday speech, gloss: a female human being}
    - form: mbenorin mbenkharu
      class: n
      field: Everyday speech
      gloss: a man; an adult male human being
      concept: man
    - form: mbenorin mbenelu
      class: n
      field: Everyday speech
      gloss: a woman; an adult female human being
      concept: woman
    - form: mbelithin mbenkharu
      class: n
      field: Everyday speech
      gloss: a boy; a young male human who has not reached adulthood
      concept: boy
    - form: mbelithin mbenelu
      class: n
      field: Everyday speech
      gloss: a girl; a young female human who has not reached adulthood
      concept: girl
    - form: mbenorin
      class: n
      field: Everyday speech
      gloss: an adult; a person who has reached maturity
      concept: adult
    - form: thoremin mbenaru
      class: n
      field: Everyday speech
      gloss: an elder; an old person, especially one respected for age and experience
      concept: elder
    - form: em mbenaru
      class: n
      field: Everyday speech
      gloss: an individual; one person considered separately
      concept: individual
    - form: ngweloro
      class: n
      field: Everyday speech
      gloss: a group; people or things considered together
      concept: group
    - form: ngwelu
      class: n
      field: Everyday speech
      gloss: a crowd; a dense gathering of people
      concept: crowd
    - form: sombaru
      class: n
      field: Everyday speech
      gloss: a clan; a named kin group reckoning descent together
      concept: clan
    - form: sombathiru
      class: n
      field: Everyday speech
      gloss: a tribe; a people made up of related clans sharing customs and identity
      concept: tribe
    - form: ngweloro ombeling
      class: n
      field: Everyday speech
      gloss: a community; people sharing a place and an ongoing common life
      concept: community
    - form: thabari
      class: n
      field: Everyday speech
      gloss: a worker; someone who performs work
      concept: worker
    - form: thabelari
      class: n
      field: Everyday speech
      gloss: an artisan; a worker skilled in making useful or beautiful things by hand
      concept: artisan
    - form: zhabari
      class: n
      field: Everyday speech
      gloss: a merchant; someone who trades goods as an occupation
      concept: merchant
    - form: zhepolu
      class: n
      field: Everyday speech
      gloss: a name; the word by which a person, thing or place is called
      concept: name-noun
    - form: zheparu
      class: n
      field: Everyday speech
      gloss: a title; a word expressing office, recognized standing or a formal claim
      concept: title
    - form: thokaru
      class: n
      field: Everyday speech
      gloss: a rank; a recognized position in an ordered body
      concept: rank
    - form: thomboru
      class: n
      field: Everyday speech
      gloss: a custom; an established habitual way of acting in a group
      concept: custom
    - form: sombathu
      class: n
      field: Everyday speech
      gloss: a tradition; a custom or practice handed down between generations
      concept: tradition
    - form: thambaru
      class: n
      field: Everyday speech
      gloss: law; a binding public rule or the body of such rules
      concept: law
    - form: thambilu
      class: n
      field: Everyday speech
      gloss: a rule; a stated requirement guiding conduct or procedure
      concept: rule
    - form: thangelulu
      class: n
      field: Everyday speech
      gloss: order; a coherent arrangement of things rather than disorder
      concept: order-noun
    - form: zhonku
      class: n
      field: Everyday speech
      gloss: a command; an instruction given with authority
      concept: command-noun
    - form: zhonkulu
      class: n
      field: Everyday speech
      gloss: obedience; acting as commanded or required
      concept: obedience
    - form: sembalu
      class: n
      field: Everyday speech
      gloss: justice; fair judgment and treatment according to what is due
      concept: justice
    - form: mbes sembalu
      class: n
      field: Everyday speech
      gloss: injustice; unfair treatment or a violation of what is due
      concept: injustice
    - form: tharelu
      class: n
      field: Everyday speech
      gloss: peace; absence of war or hostile disturbance; a relationship in which people refrain from harm
      concept: peace
    - form: vuthru
      class: n
      field: Everyday speech
      gloss: war; sustained organized armed conflict between peoples or political bodies
      concept: war
    - form: lemkorelu
      class: n
      field: Everyday speech
      gloss: freedom; the state of being able to act without the relevant restraint
      concept: freedom
    - form: lemkeku
      class: n
      field: Everyday speech
      gloss: captivity; the state of being held and prevented from leaving
      concept: captivity
    - form: zharu
      class: n
      field: Everyday speech
      gloss: a gift; something given without a required return
      concept: gift
    - form: zharu zhabing
      class: n
      field: Everyday speech
      gloss: an exchange; a reciprocal transfer of goods, acts or services
      concept: exchange-noun
    - form: mbatharulu
      class: n
      field: Everyday speech
      gloss: a debt; something owed to another person or body
      concept: debt
    - form: makoku
      class: n
      field: Everyday speech
      gloss: poverty; lacking the resources needed for an adequate life
      concept: poverty
    - form: mbathu
      class: n
      field: Everyday speech
      gloss: property; things or land owned by someone
      concept: property
    - form: mbathalu
      class: n
      field: Everyday speech
      gloss: ownership; the recognized relation of having a thing as one's own
      concept: ownership
    - form: tharoku
      class: n
      field: Everyday speech
      gloss: honor; recognized worth and the respect accorded to it
      concept: honor
    - form: zhimbelu
      class: n
      field: Everyday speech
      gloss: a secret; something known but intentionally kept from others
      concept: secret
    - form: mbethenu
      class: n
      field: Everyday speech
      gloss: knowledge; what someone knows, or the state of knowing it
      concept: knowledge
    - form: thamenu
      class: n
      field: Everyday speech
      gloss: a being; an entity that exists
      concept: being
    - form: pembinu
      class: n
      field: Everyday speech
      gloss: life; the living condition or course of a living being
      concept: life
    - form: pemborulu
      class: n
      field: Everyday speech
      gloss: an origin; the source from which something arises
      concept: origin
    - form: mbangu
      class: n
      field: Everyday speech
      gloss: a beginning; the point or stage at which something starts
      concept: beginning
    - form: thambu
      class: n
      field: Everyday speech
      gloss: completion; fulfillment, including the completion of a desired outcome
      concept: [completion]
    - form: thebu
      class: n
      field: Everyday speech
      gloss: a change; a transformation; an alteration of state, shape or character
      concept: [change-noun, transformation]
    - form: mbathili
      class: n
      field: Everyday speech
      gloss: a part; a portion or constituent of a whole
      concept: part
    - form: thombu
      class: n
      field: Everyday speech
      gloss: a cause; something that brings about an event or condition
      concept: cause
    - form: thombelu
      class: n
      field: Everyday speech
      gloss: an effect; an outcome brought about by a cause
      concept: effect
    - form: mbendu
      class: n
      field: Everyday speech
      gloss: a reason; an explanation or ground for an act, claim or event
      concept: reason
    - form: mbendalu
      class: n
      field: Everyday speech
      gloss: a purpose; the result an act is intended to bring about
      concept: purpose
    - form: ngwelin
      class: n
      field: Everyday speech
      gloss: a kind; a type or category sharing relevant qualities
      concept: kind
    - form: pembolin
      class: adj
      field: Everyday speech
      gloss: natural; arising through the ordinary workings of living things or the physical world
      concept: natural
    - form: mbes pembolin
      class: adj
      field: Everyday speech
      gloss: unnatural; contrary to the ordinary workings of living things or the physical world
      concept: unnatural
    - form: thumom
      class: v
      field: Everyday speech
      gloss: "to be; links a subject to an identity or quality. Ngwelit thumom mbesin: the boar is visible. In an absolute utterance, ombelu thumom means a house exists; there is a house."
      concept: [be, exist]
    - form: mbes
      class: part
      field: Everyday speech
      gloss: "not; negates the following predicate or quality. Ngem mbes mbesom ngwelit: I do not see the boar."
      concept: not
    - form: thamili
      class: adv
      field: Everyday speech
      gloss: "for a while; through a stretch of time. Ngem mbesom ngwelit thamili: I watch the boar for a while."
    - form: thokemin
      class: adj
      field: Everyday speech
      gloss: intense; strong in degree; before an emotion noun, as in thokemin ndorbu, wrath
    - form: mbeslu
      class: n
      field: Everyday speech
      gloss: loss; the absence left by something lost
    - form: talitharu
      class: n
      field: Everyday speech
      gloss: memory; what one recalls or the faculty of recalling it
    - form: mbenthu
      class: n
      field: Everyday speech
      gloss: an absent person or thing; someone or something not present or beyond reach
    - form: lemkherari
      class: n
      field: Everyday speech
      gloss: a romantic partner; one's beloved in a romantic relationship
    - form: mbenalari
      class: n
      field: Everyday speech
      gloss: a friend; a person held in mutual affectionate regard
      concept: friend
    - form: sombenu
      class: n
      field: Everyday speech
      gloss: family; people related by birth, marriage or adopted household ties
      concept: family
    - form: mbenaru
      class: n
      field: Everyday speech
      gloss: a person; a human being
      concept: [person, human]
    - form: mbemoi
      class: num
      field: Everyday speech
      gloss: "all; every member of the stated set. Mbemoi mbenaru: every human being."
      concept: [all, every]
    - form: mbenomin
      class: adj
      field: Everyday speech
      gloss: "alone; without others. Tebu mbenomin: this, alone."
    - form: mbathurom
      class: v
      field: Everyday speech
      gloss: "to have; to possess or contain. Ngem mbathurom uzhoru: I have water."
      concept: have
    - form: mbo
      class: part
      field: Everyday speech
      gloss: "in; inside; inward. Ngem ngemom mbo: I breathe in."
      concept: [in, inside]
    - form: ngo
      class: part
      field: Everyday speech
      gloss: "out; outside; outward. Ngem ngemom ngo: I breathe out."
      concept: outside
    - form: mbemin
      class: adv
      field: Everyday speech
      gloss: moderately; mildly; before a temperature adjective, as in mbemin nkarin, warm
    - form: zharurom
      class: v
      field: Everyday speech
      gloss: "to give something to someone. Ngem zharurom uzhoru mbor ndem: I give water to you."
      concept: give
    - {form: mebelom, class: v, field: Everyday speech, gloss: to feed someone with food or milk}
    - form: mbenem
      class: part
      field: Everyday speech
      gloss: "with; by means of. Ngem mbalom ngorili mbenem mbalel: I touch the cord with a hand."
    - form: ndem
      class: pron
      field: Everyday speech
      gloss: you; the person addressed
      concept: you-reference
    - form: mbor
      class: part
      field: Everyday speech
      gloss: "to; toward the stated recipient or goal. Ngem zharurom uzhoru mbor ndem: I give water to you."
      concept: [to, toward]
    - {form: sombili, class: n, field: Everyday speech, gloss: a sibling; a brother or sister}
    - form: mbenarin
      class: adj
      field: Everyday speech
      gloss: male; describes male sex in the listed kin and body expressions. Sombili mbenarin is a brother; mbenarin yombili sombiling is a nephew. These fixed phrases retain their cited word order.
    - form: mbenelin
      class: adj
      field: Everyday speech
      gloss: female; describes female sex in the listed kin and body expressions. Sombili mbenelin is a sister; mbenelin yombili sombiling is a niece. These fixed phrases retain their cited word order.
    - form: lembari ndengin
      class: n
      field: Everyday speech
      gloss: a widowed person; a person whose spouse has died. The whole status expression applies to the living survivor. Lembari retains spouse, and ndengin retains dead in other uses.
    - form: ngororin
      class: adj
      field: Everyday speech
      gloss: long in physical length
      concept: long
    - form: mbethoru
      class: n
      field: Everyday speech
      gloss: a place; a location
      concept: place-noun
    - form: thokalu
      class: part
      field: Everyday speech
      gloss: in numbered position; before a cardinal, as in thokalu ket, fourth
    - form: mbon
      class: part
      field: Everyday speech
      gloss: "for; for the benefit or purpose of. Mborinmu uzhoru mbon meboru: enough water for the food; ngem ngenom mbon uzhelom: I go in order to drink."
      concept: for-purpose
    - form: mborethen
      class: part
      field: Everyday speech
      gloss: "than; introduces the standard after a comparison. Ngorel uzhoru mborethen tebu: more water than this."
      concept: than
    - form: mbenerin
      class: adj
      field: Everyday speech
      gloss: other; different from the person or thing already mentioned. Mbemoi mbenerin mebothu excludes the pot currently being compared.
      concept: [other, different]
    - {form: thabelu, class: n, field: Everyday speech, gloss: a task; work to be done}
    - form: mbam
      class: part
      field: Everyday speech
      gloss: "at; in the stated location. Ngem thangom mebothu mbam ndelaru: I put the pot at the table."
      concept: at
    - form: mbathen
      class: adv
      field: Everyday speech
      gloss: backward; back toward the previous place or position
      concept: backward
    - form: thebaren
      class: part
      field: Everyday speech
      gloss: after; later than the following event or time, as in thebaren pemburu, after the birth
    - form: mebu
      class: n
      field: Everyday speech
      gloss: eating; the act of taking food for nourishment. Mebu ngemin means my eating.
    - form: ngembu
      class: n
      field: Everyday speech
      gloss: an event; an occasion on which something happens
    - form: thamburu
      class: n
      field: Everyday speech
      gloss: an end; the point at which something stops
      concept: end-noun
    - form: mbethem
      class: num
      field: Everyday speech
      gloss: "any; whichever member or amount is selected, without restriction. Mbethem mebothu: any pot."
    - form: mbathilu
      class: n
      field: Everyday speech
      gloss: a thing; an object or matter of thought
      concept: thing
    - form: zhepomelom
      class: v
      field: Everyday speech
      gloss: to mean; to intend a meaning by a word or act
    - form: mbendulu
      class: n
      field: Everyday speech
      gloss: mind; the seat of thought, attention and inward feeling
    - form: zhepu
      class: n
      field: Everyday speech
      gloss: a statement; something said as a claim
    - form: makoru
      class: n
      field: Everyday speech
      gloss: worth; value in use, exchange or personal regard
    - form: ngorimu mbothin
      class: n
      field: Everyday speech
      gloss: the quantity needed for the stated purpose; the required amount of something
    - form: lemkolu
      class: n
      field: Everyday speech
      gloss: "permission; consent to an act. Lemkolu ngenom: permission to go."
    - form: mbathenu
      class: n
      field: Everyday speech
      gloss: a position; the place occupied or relation in which something stands
      concept: position
    - form: ngenelu
      class: n
      field: Everyday speech
      gloss: a direction; an orientation or course toward a place
      concept: direction
    - form: ngothoru
      class: n
      field: Everyday speech
      gloss: distance; the interval between two places or things
      concept: distance
    - form: ngeme
      class: conj
      field: Everyday speech
      gloss: "and; joins words or clauses. Ndelaru ngeme ndelu: the table and the seat; ngem mbesom ngwelit ngeme ndem ntelom ntelu: I see the boar and you hear a sound."
      concept: and
    - form: ngemin
      class: adj
      field: Everyday speech
      gloss: my; mine; belonging to the speaker. Mebothu ngemin means my pot.
    - form: tebwin
      class: adj
      field: Everyday speech
      gloss: of this; concerning the nearby thing indicated. Zhepolu tebwin means the name of this.
    - form: mbenaring
      class: adj
      field: Everyday speech
      gloss: of person; belonging to or concerning mbenaru. The closing vowel is replaced by -ing.
    - form: mbetu
      class: n
      field: Everyday speech
      gloss: a pair; two things considered together.
    - form: mbeting
      class: adj
      field: Everyday speech
      gloss: of pair; belonging to or concerning mbetu. The closing vowel is replaced by -ing.
    - form: mbothulu
      class: n
      field: Everyday speech
      gloss: a vessel; a container holding a liquid or other substance.
    - form: ombeling
      class: adj
      field: Everyday speech
      gloss: of a house; belonging to the dwelling; from ombelu with its closing vowel replaced by -ing.
    - form: pembomin
      class: adj
      field: Everyday speech
      gloss: parentless; having no living parent. Yombili pembomin names an orphan.
    - form: mbeshoru
      class: n
      field: Everyday speech
      gloss: a sheep; the wool-bearing herd animal.
    - form: mbeshoring
      class: adj
      field: Everyday speech
      gloss: of a sheep; from mbeshoru with its closing vowel replaced by -ing.
    - {form: ngwelit, class: n, field: Everyday speech, gloss: a boar; a male wild pig.}
    - {form: zhepulu, class: n, field: Everyday speech, gloss: a tale; a story told or recited.}
    - form: thamin
      class: adj
      field: Everyday speech
      gloss: present; belonging to the time now.
    - form: ndembethe
      class: adv
      field: Everyday speech
      gloss: otherwise; in the alternative event just contrasted.
    - form: zhoneling
      class: adj
      field: Everyday speech
      gloss: of hope; belonging to or concerning zhonelu. The closing vowel is replaced by -ing.
    - form: mbesling
      class: adj
      field: Everyday speech
      gloss: of loss; belonging to or concerning mbeslu. The closing vowel is replaced by -ing.
    - form: talitharing
      class: adj
      field: Everyday speech
      gloss: of memory; belonging to or concerning talitharu. The closing vowel is replaced by -ing.
    - form: mbenthing
      class: adj
      field: Everyday speech
      gloss: of absent person or thing; belonging to or concerning mbenthu. The closing vowel is replaced by -ing.
    - form: lembaring
      class: adj
      field: Everyday speech
      gloss: of desire; belonging to or concerning lembaru. The closing vowel is replaced by -ing.
    - form: thambing
      class: adj
      field: Everyday speech
      gloss: of fulfillment; belonging to or concerning thambu. The closing vowel is replaced by -ing.
    - form: lemkheraring
      class: adj
      field: Everyday speech
      gloss: of romantic partner; belonging to or concerning lemkherari. The closing vowel is replaced by -ing.
    - form: mbenalaring
      class: adj
      field: Everyday speech
      gloss: of friend; belonging to or concerning mbenalari. The closing vowel is replaced by -ing.
    - form: sombening
      class: adj
      field: Everyday speech
      gloss: of family; belonging to or concerning sombenu. The closing vowel is replaced by -ing.
    - form: pemboring
      class: adj
      field: Everyday speech
      gloss: of parent; belonging to or concerning pemboru. The closing vowel is replaced by -ing.
    - form: yombiling
      class: adj
      field: Everyday speech
      gloss: of child; belonging to or concerning yombili. The closing vowel is replaced by -ing.
    - form: sombiling
      class: adj
      field: Everyday speech
      gloss: of sibling; belonging to or concerning sombili. The closing vowel is replaced by -ing.
    - form: mebothing
      class: adj
      field: Everyday speech
      gloss: of pot; belonging to or concerning mebothu. The closing vowel is replaced by -ing.
    - form: uzhoring
      class: adj
      field: Everyday speech
      gloss: of water; belonging to or concerning uzhoru. The closing vowel is replaced by -ing.
    - form: mbeseling
      class: adj
      field: Everyday speech
      gloss: of eye; the belonging form of mbeselu, with its closing vowel replaced by -ing.
    - form: lemeling
      class: adj
      field: Everyday speech
      gloss: of mouth; the belonging form of lemelu, with its closing vowel replaced by -ing.
    - form: ntombing
      class: adj
      field: Everyday speech
      gloss: of sleep; the belonging form of ntombu, with its closing vowel replaced by -ing.
    - form: mbathoring
      class: adj
      field: Everyday speech
      gloss: of chest; the belonging form of mbathoru, with its closing vowel replaced by -ing.
    - form: ngorbeling
      class: adj
      field: Everyday speech
      gloss: of spine; the belonging form of ngorbelu, with its closing vowel replaced by -ing.
    - form: ngomboring
      class: adj
      field: Everyday speech
      gloss: of waist; the belonging form of ngomboru, with its closing vowel replaced by -ing.
    - form: ndaling
      class: adj
      field: Everyday speech
      gloss: of foot; the belonging form of ndalu, with its closing vowel replaced by -ing.
    - form: pembeling
      class: adj
      field: Everyday speech
      gloss: of pregnancy; also of a plant or plants. Both pembelu, pregnancy, and pembeli, a plant, have this belonging form. Khuthel pembeling, soil, uses the plant reading.
    - form: meboring
      class: adj
      field: Everyday speech
      gloss: of food; the belonging form of meboru, with its closing vowel replaced by -ing.
    - form: ngorething
      class: adj
      field: Everyday speech
      gloss: of stone; the belonging form of ngorethu, with its closing vowel replaced by -ing.
    - form: zhekoming
      class: adj
      field: Everyday speech
      gloss: of sun; the belonging form of zhekomu, with its closing vowel replaced by -ing.
    - form: zhimbathing
      class: adj
      field: Everyday speech
      gloss: of night; the belonging form of zhimbathu, with its closing vowel replaced by -ing.
    - form: uzheling
      class: adj
      field: Everyday speech
      gloss: of drink; the belonging form of uzhelu, with its closing vowel replaced by -ing.
    - form: talithom
      class: v
      field: Everyday speech
      gloss: to know by study; the plain act of the established talith- stem.
      built: [talith-, -om]
    - form: talithu
      class: n
      field: Everyday speech
      gloss: knowledge gained by study; what has been learned through study.
      built: [talith-, -u]
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {tribe}"
    given:
      female:
        - "Adeli"
        - "Ádhora"
        - "Akeva"
        - "Árethi"
        - "Ásira"
        - "Beda"
        - "Bómeli"
        - "Búkisa"
        - "Dóuma"
        - "Ézura"
        - "Fáreba"
        - "Fureli"
        - "Jara"
        - "Jeza"
        - "Kara"
        - "Kesa"
        - "Kéthira"
        - "Kithma"
        - "Láfara"
        - "Lanthi"
        - "Leya"
        - "Lomba"
        - "Mbaka"
        - "Mbara"
        - "Mbika"
        - "Mbula"
        - "Míseka"
        - "N'aleya"
        - "N'kala"
        - "Nangu"
        - "Ndori"
        - "Neba"
        - "Ngomi"
        - "Nola"
        - "Nomeli"
        - "Nyora"
        - "Ogana"
        - "Ókira"
        - "Ólida"
        - "Ómazi"
        - "Omera"
        - "Oruna"
        - "Pékani"
        - "Pembura"
        - "Rato"
        - "Ruta"
        - "Sáfila"
        - "Sárela"
        - "Sashi"
        - "Séngola"
        - "Suna"
        - "Tameka"
        - "Táreli"
        - "Tásara"
        - "Tebo"
        - "Tebu"
        - "Tenzi"
        - "Wákori"
        - "Wíthala"
        - "Zani"
      male:
        - "Amaru"
        - "Báhatu"
        - "Bárachi"
        - "Bawe"
        - "Bázou"
        - "Chumeth"
        - "Dethu"
        - "Douma"
        - "Esa"
        - "Ezoro"
        - "Foma"
        - "Ghizu"
        - "Hambor"
        - "Ijato"
        - "Isoreth"
        - "Jara"
        - "Jara"
        - "Joma"
        - "Jori"
        - "Juka"
        - "Kelé"
        - "Kíngare"
        - "Kwathor"
        - "Lemi"
        - "Lésothi"
        - "Lézaru"
        - "Loro"
        - "Makoda"
        - "Manjor"
        - "Mbato"
        - "Moseka"
        - "Neka"
        - "Ngalu"
        - "Ngoro"
        - "Nkamu"
        - "Ntemba"
        - "Omala"
        - "Omare"
        - "Omengo"
        - "Orube"
        - "Otham"
        - "Pajo"
        - "Peka"
        - "Rembol"
        - "Romba"
        - "Ruko"
        - "Saidhor"
        - "Sámbaro"
        - "Táfuro"
        - "Taki"
        - "Tárasi"
        - "Teko"
        - "Tekor"
        - "Tidi"
        - "Tofi"
        - "Tuko"
        - "Ukara"
        - "Wega"
        - "Yambá"
        - "Zenthar"
    tribe:
      - "Akeri"
      - "Árambu"
      - "Bámare"
      - "Békata"
      - "Chándira"
      - "Dómana"
      - "Dúngara"
      - "Endu"
      - "Fámali"
      - "Fimbwa"
      - "Góbani"
      - "Jákora"
      - "Jándaka"
      - "Jondo"
      - "Kárambi"
      - "Kásara"
      - "Káwiri"
      - "Kúmawe"
      - "Kweni"
      - "Lémkata"
      - "Mágara"
      - "Mágosi"
      - "Mbárazi"
      - "Mbáromi"
      - "Mbesa"
      - "Múbari"
      - "Mugba"
      - "N'dalu"
      - "Nánjeri"
      - "Ndamo"
      - "Nézika"
      - "Ngolu"
      - "Ngombeth"
      - "Nogari"
      - "Nyanthel"
      - "Óbamba"
      - "Olumba"
      - "Ómiwa"
      - "Ónkura"
      - "Órachi"
      - "Ótanda"
      - "Otanga"
      - "Pébara"
      - "Pézawa"
      - "Rébara"
      - "Rómara"
      - "Sábeni"
      - "Sángweri"
      - "Shéwuru"
      - "Sónkara"
      - "Tángwari"
      - "Tárombu"
      - "Tébara"
      - "Téwala"
      - "Tókosi"
      - "Tómanga"
      - "Úlambo"
      - "Wótara"
      - "Yumbaro"
      - "Zékara"
  sounds:
    edges:
      - {edge: openCluster, sounds: [mb, nd, nj, nk, nt, kw, ngw, n']}
      - {edge: closeConsonant, sounds: [n, ng, m, l, r, t, s]}
      - {edge: vowelPair, sounds: [ai, au, ei, oi, ou, io]}
    clusters: {max: 2}
    stress: {two: first, longer: penultimate, mark: acute}
  scope:
    folders:
      - okharis
      - northernfertileregionokharis
      - citystates
      - tribes
      - pantheonsnkaruthar
      - deitiesnkaruthar
      - nkaruthar
      - lorespiritsokharic
      - spiritskillsokharic
    cultures: [okharinclt]
    parents: [okharisrgn]
    addresses:
      - lore-okharinclt
      - skill-okharclng
      - skill-okhthztscrpt
      - lore-zohira
      - affiliation-crwntrdskhrs
      - doc-okharisadvguide
  tongues:
    - {tag: okharik, meaning: an Okharik name, language: skill-okharclng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Ambelari Zheking, tongue: okharik, built: [ambel-, -ari, zheku, -ing]}
    - {name: Ashenda, tongue: okharik, built: [ashénd-, -a]}
    - {name: Blade-Singer, tongue: translation}
    - {name: Bondservant, tongue: translation}
    - {name: Bondsman, tongue: translation}
    - {name: Bone-Reader, tongue: translation}
    - {name: Candidate of the Hunt, tongue: translation}
    - {name: Captain of the Host, tongue: translation}
    - {name: Chartered Craftsman, tongue: translation}
    - {name: Chief Scribe, tongue: translation}
    - {name: Chieftain, tongue: translation}
    - {name: Council Officer, tongue: translation}
    - {name: Delegate, tongue: translation}
    - {name: Dóngaru Tribe, tongue: translation}
    - {name: Dóngaru Village, tongue: translation}
    - {name: Elder, tongue: translation}
    - {name: Elder of the Spirit, tongue: translation}
    - {name: Envoy, tongue: translation}
    - {name: Exalted One, tongue: translation}
    - {name: Gorombe, tongue: okharik, built: [gorombe]}
    - {name: Gorombe Spirit Power, tongue: translation}
    - {name: Granary-Keeper, tongue: translation}
    - {name: High Priest, tongue: translation}
    - {name: Honored One, tongue: translation}
    - {name: Householder, tongue: translation}
    - {name: Imbilari, tongue: okharik, built: [imbil-, -ari]}
    - {name: Intercessor, tongue: translation}
    - {name: Interpreter of Signs, tongue: translation}
    - {name: Kaljekor, tongue: okharik}
    - {name: Keeper of a Cairn, tongue: translation}
    - {name: Keeper of the Ashmark, tongue: translation}
    - {name: Keeper of the Feud, tongue: translation}
    - {name: Keeper of the Three Flames, tongue: translation}
    - {name: Khamunda Tribe, tongue: translation}
    - {name: Khamunda Village, tongue: translation}
    - {name: King, tongue: translation}
    - {name: Kinless, tongue: translation}
    - {name: Kinsman, tongue: translation}
    - {name: Kiroba, tongue: okharik}
    - {name: Kirofa Tribe, tongue: translation}
    - {name: Kirofa Village, tongue: translation}
    - {name: Korthari Nkaring, tongue: okharik, built: [korth-, -ari, nkaru, -ing]}
    - {name: Korthari Zohiring, tongue: okharik, built: [korth-, -ari, zohira, -ing]}
    - {name: Kwendari Zohiring, tongue: okharik, built: [kwend-, -ari, zohira, -ing]}
    - {name: Kwendelo Nkaring, tongue: okharik, built: [kwend-, -elo, nkaru, -ing]}
    - {name: Licensee, tongue: translation}
    - {name: Magara, tongue: okharik}
    - {name: Magara Tribe, tongue: translation}
    - {name: Magara Village, tongue: translation}
    - {name: Master of the Hunt, tongue: translation}
    - {name: Ndawelari Thakwaring, tongue: okharik, built: [ndawel-, -ari, thakwari, -ing]}
    - {name: Ndumbari Zhabing, tongue: okharik, built: [ndumb-, -ari, zhab-, -ing]}
    - {name: Ngolu Nkaring, tongue: okharik, built: [ngolu, nkaru, -ing]}
    - {name: Ngorasha Tribe, tongue: translation}
    - {name: Ngorasha Village, tongue: translation}
    - {name: Nkaru'thar, tongue: okharik, built: [nkaru, thar-]}
    - {name: Of the People, tongue: translation}
    - {name: Okharik, tongue: translation}
    - {name: Okharik Language, tongue: translation}
    - {name: Okharik Lexicon, tongue: translation}
    - {name: Okharin, tongue: okharik, built: [okhár-, -in]}
    - {name: Okharis, tongue: okharik, built: [okhár-, -is]}
    - {name: Okharis Adventurer's Guide, tongue: translation}
    - {name: Okharis Region, tongue: translation}
    - {name: Okhatha-zethu Script, tongue: translation}
    - {name: Oracle, tongue: translation}
    - {name: Outcast, tongue: translation}
    - {name: Pemburari Khutheling, tongue: okharik, built: [pembur-, -ari, khuthel, -ing]}
    - {name: Pemburari Khutheling Spirit Power, tongue: translation}
    - {name: Priest, tongue: translation}
    - {name: Pyremant Thokorin, tongue: translation}
    - {name: Queen, tongue: translation}
    - {name: Revoked Charter, tongue: translation}
    - {name: "Ritual: Nkaru'thar", tongue: translation}
    - {name: Royal Trades of Okharis, tongue: translation}
    - {name: Shókuma, tongue: okharik}
    - {name: Shókuma Tribe, tongue: translation}
    - {name: Shókuma Village, tongue: translation}
    - {name: Shurem, tongue: okharik, built: [shurem]}
    - {name: Shuremis, tongue: okharik}
    - {name: Spirit-Deaf, tongue: translation}
    - {name: Steward of the Trades, tongue: translation}
    - {name: Tákoro Zanethar, tongue: okharik}
    - {name: Talithari Nkaring, tongue: okharik, built: [talith-, -ari, nkaru, -ing]}
    - {name: Táluméng Tribe, tongue: translation}
    - {name: Táluméng Village, tongue: translation}
    - {name: Temple Steward, tongue: translation}
    - {name: The Ash-Fold, tongue: translation}
    - {name: The Begetter of the Earth, tongue: translation}
    - {name: The Crown Trades of Okharis, tongue: translation}
    - {name: The Emissaries of the Flame, tongue: translation}
    - {name: The Eternal Flame, tongue: translation}
    - {name: The First Flame, tongue: translation}
    - {name: The Golden Flame, tongue: translation}
    - {name: The Intermediary Spirits, tongue: translation}
    - {name: The Mother of Rivers, tongue: translation}
    - {name: The Mountains of the Spirits, tongue: translation}
    - {name: The Oracle of Bones, tongue: translation}
    - {name: The Oracle of Bones Spirit Power, tongue: translation}
    - {name: The Reader in the Yanda Zohiring, tongue: translation}
    - {name: The Royal Trades, tongue: translation}
    - {name: The Shadow of the Forest, tongue: translation}
    - {name: The Shamanic Tradition of Okharis, tongue: translation}
    - {name: The Spirit Blade Warrior, tongue: translation}
    - {name: The Spirit of the Blade, tongue: translation}
    - {name: The Spirit Path, tongue: translation}
    - {name: The Three Flames, tongue: translation}
    - {name: The Three-Flame Charters, tongue: translation}
    - {name: The Thunder Above, tongue: translation}
    - {name: The Triune Fire, tongue: translation}
    - {name: The Way of the Zohira, tongue: translation}
    - {name: The Wild Flame, tongue: translation}
    - {name: Tribute-Warden, tongue: translation}
    - {name: Villager/Townsman, tongue: translation}
    - {name: Vuthraka, tongue: okharik}
    - {name: Wámbuchi Tribe, tongue: translation}
    - {name: Wámbuchi Village, tongue: translation}
    - {name: Warden of the Frontier, tongue: translation}
    - {name: Yanda Zohiring, tongue: okharik}
    - {name: Yenor Zohiring, tongue: okharik, built: [yenor, zohira, -ing]}
    - {name: Yéshiro Tribe, tongue: translation}
    - {name: Yéshiro Village, tongue: translation}
    - {name: Yombel Ngoriring, tongue: okharik, built: [yombel, ngorira, -ing]}
    - {name: Yombel Ngoriring Spirit Power, tongue: translation}
    - {name: Zarhanis, tongue: okharik}
    - {name: Zhíkande Tribe, tongue: translation}
    - {name: Zhíkande Village, tongue: translation}
    - {name: Zhimbalu Ombing, tongue: okharik, built: [zhimbalu, ombe, -ing]}
    - {name: Zhimbalu Ombing Spirit Power, tongue: translation}
    - {name: Zhonkari Nkaring, tongue: okharik, built: [zhonk-, -ari, nkaru, -ing]}
    - {name: Zohira, tongue: okharik, built: [zoh-, -ira]}
    - {name: Zohu Shéngeling, tongue: okharik, built: [zoh-, -u, shengel, -ing]}
    - {name: Zohu Shéngeling Spirit Power, tongue: translation}
    - {name: Ntemba Kásara, tongue: okharik}
    - {name: Chief Ntemba, tongue: translation}
  retired:
    - {form: Njia ya Roho, instead: Yenor Zohiring, why: "an Earth phrase, the shamans' path"}
    - form: Mwalimu wa Roho
      instead: Kwendari Zohiring
      why: "an Earth phrase, the shaman's title"
    - form: mwalimu wa roho
      instead: kwendari zohiring
      why: "an Earth phrase, the shaman's title"
    - {form: Jivu, instead: Shurem, why: "an Earth word, the rank of the cast-out"}
    - {form: Mwamini, instead: Imbilari, why: "an Earth word, the lay worshipper"}
    - {form: Mwanafunzi, instead: Kwendelo Nkaring, why: "an Earth word, the initiate"}
    - form: Mtaalamu wa Moto
      instead: Talithari Nkaring
      why: "an Earth phrase, a priest of Zarhanis"
    - form: Mhudumu wa Dhahabu
      instead: Shebari Shimbing
      why: "an Earth phrase, a priest of Kaljekor"
    - form: Askari wa Moto
      instead: Zhangari Nkaring
      why: "an Earth phrase, a warrior-priest of Vuthraka"
    - form: Mlinzi wa Roho
      instead: Korthari Zohiring
      why: "an Earth phrase, a senior priest of Zarhanis"
    - form: Mlinzi wa Utajiri
      instead: Korthari Mákoring
      why: "an Earth phrase, a senior priest of Kaljekor"
    - form: Mlinzi wa Vita
      instead: Korthari Vuthring
      why: "an Earth phrase, a senior priest of Vuthraka"
    - form: Mlinzi wa Mwali
      instead: Korthari Nkaring
      why: "an Earth phrase, the Warden of the Flame"
    - {form: Mlinzi, instead: Korthari, why: "an Earth word, guardian"}
    - form: Nabii wa Mwanga
      instead: Ambelari Zheking
      why: "an Earth phrase, the temple master of Zarhanis"
    - form: Mtawala wa Soko
      instead: Ndumbari Zhabing
      why: "an Earth phrase, the temple master of Kaljekor"
    - form: Jemadari wa Moto
      instead: Zhonkari Nkaring
      why: "an Earth phrase, the temple master of Vuthraka"
    - form: Baraza ya Moto
      instead: Ngolu Nkaring
      why: "an Earth phrase, the council of Kaljekor"
    - {form: Pyremant Mkuu, instead: Pyremant Thokorin, why: an Earth word for great}
    - {form: Moto-Walinzi, instead: Nkaru-Kortharira, why: "an Earth phrase, the Fire Guardians"}
    - form: Kivuli cha Msitu
      instead: Zhimbalu Ombing
      why: "an Earth phrase, the zohira of the hunt"
    - {form: Mama wa Mito, instead: Yombel Ngoriring, why: "an Earth phrase, the zohira of rivers"}
    - form: Mzazi wa Ardhi
      instead: Pemburari Khutheling
      why: "an Earth phrase, the zohira of fertility"
    - {form: Ngurumo, instead: Gorombe, why: "an Earth word, the zohira of storms"}
    - form: Roho wa Upanga
      instead: Zohu Shéngeling
      why: "an Earth phrase, the zohira of the blade"
    - {form: Maláika, instead: Zohiring, why: "an Earth word, in the name of the mountains"}
    - {form: Eshe, instead: Ashenda, why: an Earth given name}
    - form: Mnyama-Kijicho
      instead: Ngwelo-Shikoro
      why: "an Earth phrase, a beast of the jungle"
    - {form: Mandari, instead: Nduvari, why: "an Earth word, a chief's name"}
    - {form: Jinmuaji, instead: Khamwesi, why: "built on an Earth word, the land-crocodile"}
    - {form: jinmuaji, instead: khamwesi, why: "built on an Earth word, the land-crocodile"}
    - {form: Roqomuaji, instead: Rokhomira, why: "built on an Earth word, the pack-hunters"}
    - {form: Khátu, instead: Zhondu, why: "an Earth word, in the blessing formula"}
    - {form: khuma, instead: khuthel, why: "an Earth word, in the sacred oath"}
    - {form: lékha, instead: ngem, why: "an Earth word, in the affirmation"}
    - {form: óta, instead: sembor, why: "an Earth word, in the sacred oath"}
    - {form: ónda, instead: tharom, why: "an Earth word, in the blessing formula"}
    - {form: Bára, instead: Bárakho, why: "an Earth word, in the name lists"}
    - {form: Chômba, instead: Chombaro, why: "an Earth word, in the name lists"}
    - {form: Chuma, instead: Chumeth, why: "an Earth word, in the name lists"}
    - {form: Déma, instead: Dethu, why: "an Earth word, in the name lists"}
    - {form: Ebo, instead: Ezoro, why: "an Earth given name, in the name lists"}
    - {form: Ézi, instead: Ezhi, why: "an Earth word, in the name lists"}
    - {form: Ghíza, instead: Ghizu, why: "an Earth word, in the name lists"}
    - {form: Hama, instead: Hambor, why: "an Earth word, in the name lists"}
    - {form: Isáka, instead: Isoreth, why: "an Earth given name, in the name lists"}
    - {form: Jâmira, instead: Jamuro, why: "an Earth given name, in the name lists"}
    - {form: Kênya, instead: Kenthor, why: "an Earth place name, in the name lists"}
    - {form: Kwâmi, instead: Kwathor, why: "an Earth given name, in the name lists"}
    - {form: Laki, instead: Lakhor, why: "an Earth word, in the name lists"}
    - {form: Lésedi, instead: Lésothi, why: "an Earth given name, in the name lists"}
    - {form: Mánje, instead: Manjor, why: "an Earth word, in the name lists"}
    - {form: Mbélé, instead: Mbeleth, why: "an Earth word, in the name lists"}
    - {form: Ngâra, instead: Ngathu, why: "an Earth word, in the name lists"}
    - {form: Nyara, instead: Nyarol, why: "an Earth word, in the name lists"}
    - {form: Òta, instead: Otham, why: "an Earth word, in the name lists"}
    - {form: Rémbo, instead: Rembol, why: "an Earth word, in the name lists"}
    - {form: Saídou, instead: Saidhor, why: "an Earth given name, in the name lists"}
    - {form: Sámba, instead: Sámbaro, why: "an Earth word, in the name lists"}
    - {form: Táfari, instead: Táfuro, why: "an Earth given name, in the name lists"}
    - {form: Téka, instead: Tekor, why: "an Earth word, in the name lists"}
    - {form: Zénu, instead: Zenthar, why: "an Earth word, in the name lists"}
    - {form: Ádira, instead: Ádhora, why: "an Earth given name, in the name lists"}
    - {form: Ári, instead: Árethi, why: "an Earth word, in the name lists"}
    - {form: Bána, instead: Banthi, why: "an Earth word, in the name lists"}
    - {form: Béka, instead: Bérathi, why: "an Earth word, in the name lists"}
    - {form: Boma, instead: Bómeli, why: "an Earth word, in the name lists"}
    - {form: Fúmba, instead: Fúmbari, why: "an Earth word, in the name lists"}
    - {form: Fûra, instead: Fureli, why: "an Earth word, in the name lists"}
    - {form: Kéña, instead: Kéthira, why: "an Earth place name, in the name lists"}
    - {form: Kíma, instead: Kithma, why: "an Earth word, in the name lists"}
    - {form: Kímba, instead: Kímbeli, why: "an Earth word, in the name lists"}
    - {form: Kúla, instead: Kúlari, why: "an Earth word, in the name lists"}
    - {form: Láni, instead: Lanthi, why: "an Earth word, in the name lists"}
    - {form: Léva, instead: Lévara, why: "an Earth word, in the name lists"}
    - {form: Lînga, instead: Língola, why: "an Earth word, in the name lists"}
    - {form: Mìla, instead: Mílatha, why: "an Earth word, in the name lists"}
    - {form: Ndani, instead: Ndárima, why: "an Earth word, in the name lists"}
    - {form: Ngôzi, instead: Ngothi, why: "an Earth given name, in the name lists"}
    - {form: Nôma, instead: Nomeli, why: "an Earth word, in the name lists"}
    - {form: Sárai, instead: Sárela, why: "an Earth given name, in the name lists"}
    - {form: Sènga, instead: Séngola, why: "an Earth word, in the name lists"}
    - {form: Táma, instead: Támbori, why: "an Earth word, in the name lists"}
    - {form: Tári, instead: Táreli, why: "an Earth word, in the name lists"}
    - {form: Waka, instead: Wákori, why: "an Earth word, in the name lists"}
    - {form: Wîta, instead: Wíthala, why: "an Earth word, in the name lists"}
    - {form: Bêka, instead: Bekhar, why: "an Earth word, in the name lists"}
    - {form: Ngoma, instead: Ngombeth, why: "an Earth word, in the name lists"}
    - {form: Ngóma, instead: Ngombeth, why: "an Earth word, in the name lists"}
    - {form: Nyánda, instead: Nyanthel, why: "an Earth word, in the name lists"}
    - {form: Tárabu, instead: Tárombu, why: "an Earth word, in the name lists"}
    - {form: Yûmba, instead: Yumbaro, why: "an Earth word, in the name lists"}
    - {form: Omára, instead: Pembura, why: "an Earth personal name, in the name lists"}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Okharik (isolate)}}
---

Okharik is a tongue of the Okharik (isolate) family. Fluency measures the sophistication of expression in Okharik, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

The roman repertoire includes the established name spellings `j` and `J` (Jákora, Nánjeri) and the straight catch apostrophe (Nkaru'thar, N'aleya).

## Overview

Okharik is the principal tongue of the kingdom of [[affiliation-okharis|Okharis]] and surrounding communities in the northern fertile regions of [[place-xerathia|Zerathia]]. Spoken by approximately 5-7 million people, Okharik occupies a unique position in the continent's linguistic landscape as the bridge language between the [[affiliation-empireakhlth|Khelathi Empire]] to the south and the distant civilizations of the east.

Unlike its neighbors, Okharik has developed a robust oral tradition alongside written literature. Religious texts in a sacred archaic form are preserved and recited by trained priests, while vernacular speech continues to evolve with marked vitality. The language reflects centuries of trade, cultural contact, and adaptation, making it a living repository of regional history.

## How Okharik sounds

Okharik is the tongue of the savanna clans and their temple-cities.

**The vowels.** _a_, _o_, _e_ and _i_, open and even.

**The consonants.** _ng_, _mb_, _nd_, _zh_, _sh_, _k_, _r_, _m_ and _b_.

**Clusters.** _ng-_, _mb-_ and _nd-_ open words and syllables.

**Endings.** Okharik words end in _-ing_, _-ari_, _-oro_, _-el_ or _-u_.

## Phonology

### Consonant System

Okharik employs a moderately-complex consonantal inventory influenced by areal contact with neighboring linguistic zones:

**Stops and Affricates:**

Unvoiced
: p, t, k

Voiced
: b, d, g

Affricates
: ch (TS), j (DZH)

**Fricatives:**

Unvoiced
: f, s, sh (as in "ship"), th (as in "thin"), kh (a rasp at the back of the throat, as when clearing it)

Voiced
: v, z, zh (as the "s" in "measure")

**Nasals:** m, n, ng (particularly in final position)

**Liquids & Approximants:** l, r, w, y

**Characteristic Features:**

- A robust system of final nasals, particularly -ng and -m, marking grammatical classes
- The velar fricative /kh/ is distinctive and frequently occurs in both initial and medial positions
- Geminate consonants appear in certain morphological contexts, particularly plurals and intensives
- The affricate /ch/ occupies an intermediate position between stops and fricatives

### Vowel System

Okharik distinguishes five cardinal vowels, each occurring in short and long variants:

**Vowels:** a, e, i, o and u, each short or long

**Diphthongs:** Common sequences include ai, au, ei, oi, which tend to be produced as true diphthongs rather than vowel clusters

**Vowel Harmony:** Weak evidence of historical harmony; modern speech shows only vestigial traces, mostly in plural formation and diminutive morphology

### Phonotactic Patterns

Analysis of attested names reveals:

Initial Clusters
: Less common than in [[skill-vedyarlng|Vedyari]]; typically restricted to obstruent + liquid or fricative + stop combinations

Syllable Structure
: Predominantly CV; CVC structures appear frequently in medial positions

Final Consonants
: Commonly -n, -ng, -l, -r, -t, -s; final vowels are common, particularly in nominal classes marked for definiteness

Word Length
: Moderate; names are typically two to three morphemes, though some compounds extend to four or more syllables

Stress Patterns
: Generally penultimate; in longer compounds, secondary stress appears on the first syllable

## Grammar Notes

### Word Order

Okharik predominantly follows a **Subject-Verb-Object (SVO)** order in declarative main clauses, though postposed complements and topicalization create variation.

### Nominal System

- **Nouns** have number (singular/plural)
- **Gender:** A three-way system (masculine, feminine, neuter) is preserved in adjectives and some pronominal forms, though nominal gender marking has largely eroded
- **Definiteness:** Prefix and suffix markers indicate definite vs. indefinite status; demonstratives are frequently used to intensify definiteness

### Participles and Infinitives

- Participles are used attributively and predicatively; they readily nominalize into agent and patient nouns
- Infinitival forms exist but are less productive than in Vedyari; more commonly expressed through gerundial constructions

## Script & Literacy

**Traditional Script:** Okharik employs an abjadic consonantal script, [[skill-okhthztscrpt|Okhatha-zethu Script]], consisting of 23 basic characters, with diacritical marks indicating vowels. This system is ancient and is preserved in sacred texts and formal inscriptions. The consonantal base renders the script somewhat ambiguous, requiring context for correct interpretation.

**Hybrid Script ([[skill-okhthztscrpt|Okhatha-zethu Script]]):** A modified version adds explicit vowel markers, making it less ambiguous and more suitable for trade and administration. This system is now standard for mercantile use.

**Literacy:** True literacy is confined to the priesthood, professional scribes, and perhaps a quarter of the nobility. Guildsmen in major urban centers may possess functional literacy—recognizing trade marks, numerals, and common abbreviations—but rely on scribes for contracts and record-keeping. Rural populations are almost entirely non-literate. The priesthood maintains exclusive knowledge of the oldest liturgical forms, which are recited rather than read, reducing the practical necessity for mass literacy of the sacred texts.

## Historical Development

### Proto-Okhárik

Okharik is an isolate language with uncertain external relationships. Some scholars propose ancient connections to languages of the far south (possibly related to [[skill-nyalbnlng|Nyáluban]] or other Central Zerathian languages), but evidence is sparse and speculative. Its isolate status has made it a focus of intense linguistic study, as it may represent a linguistic refuge population.

### Classical Period (Age of Kingdoms)

The standardization of Classical Okharik occurred approximately 1,500 years before present, during the period when the Kingdom of Okharis emerged as a major regional power. Sacred liturgical texts were fixed at this time and have been preserved with remarkable fidelity through oral tradition and written inscription. This classical register remains the prestige form and is taught to priests and scribes.

### Contact-Induced Change

Unlike Vedyari and Khelathi, which have maintained relatively conservative classical standards, Okharik has been subject to more rapid vernacular change due to its role as a trade language. Extensive contact with Khelathi, Vedyari, and maritime pidgins has introduced loanwords and structural innovations.

### Modern Dialects

Regional speech shows considerable variation:

Urban Okharik
: More conservative; maintains gender and some archaic forms; influenced by liturgical registers

Rural Dialects
: More divergent; simplification of verbal morphology; loss of gender distinctions; greater borrowing from neighboring languages

Trading Post Dialects
: Extreme simplification; approaching creolized structures; significant code-switching

## Regional Dialects

### Northern Okharik (Heartland)

- Most conservative; closest to Classical Okharik
- All verbal tenses and moods are morphologically realized
- Gender distinctions are maintained
- Pronunciation emphasizes the distinctive /kh/ and final nasals

### Western Okharik (Western Temple-Cities & Trade Routes)

- Moderate innovation; some verbal simplification via auxiliaries
- Gender distinction weakening, particularly in adjectives
- More loanwords from neighboring languages
- Stress patterns increasingly variable

### Southern Okharik (Riverine & Agricultural Communities)

- More rapid innovation
- Verbal morphology increasingly simplified
- Gender largely lost except in pronouns
- Final nasals may be denasalized or simplified
- Considerable mutual influence with Khelathi

## Sample Phrases

Okharé, ne thalé
: _Greeting; literally "Okharik one, greetings"_

Zhondu en tharom
: _Blessing formula; "May the kingdom endure"_

Somba ren, ngem orung
: _Affirmation; "In the name of the ancestors, I stand firm"_

Mákoro en zarun
: _Trade expression; "May prosperity flow"_

Khuthel en shara tebu sembor
: _Sacred oath; "Let the earth witness this truth"_

The [[skill-okharclng#lexicon|Okharik Lexicon]] holds the words these phrases are built from, the endings that make titles and names, and the register of every Okharik name in the setting.

## Related Languages

Okharik maintains linguistic contacts with several neighboring languages:

Khelathi
: Ancient contact has left traces in sacred vocabulary and some archaic grammatical forms; modern contact is primarily through trade language

Vedyari
: More distant contact; some mutual intelligibility in trade pidgins, but limited direct borrowing

Maritime Pidgins
: Okharik has been both a substrate and source in the development of trade linguas

## Naming Traditions

### Cultural Significance

In Okharik tradition, names are deeply connected to ancestral identity, spiritual lineage, and clan affiliation. The bestowal of a name is often a ceremonial event overseen by elders or priests, linking the child to the community and to spiritual forces. Names are believed to carry the virtues and achievements of honored ancestors, creating a spiritual continuity between generations.

### Naming Patterns

**Given Names (Male):**

- Frequently incorporate geographical or clan references, particularly place names or territorial markers
- Many reference qualities valued in the culture: strength, courage, wisdom, endurance
- Often compound structures joining a descriptor with a suffix marking masculine gender or status
- Characteristic phonology includes prominent nasals and the velar fricative /kh/
- Examples: _Kwathor_ (strength-bearer), _Ngoro_ (one of the river), _Táfuro_ (traveler)

**Given Names (Female):**

- Similarly structured but often ending in open vowels or the feminine suffix -a or -i
- Many reference beauty, grace, fertility, or connection to nature
- Frequently incorporate diminutive suffixes, creating terms of endearment
- Examples: _Ádhora_ (noble woman), _Kithma_ (beloved), _Nyora_ (the river's gift)

**Clan or Tribe Names:**

- Typically reference the ancestral founder, a geographical feature, or a significant historical event
- Often elaborate compounds marking the relationship to a sacred site or spiritual principle
- May include honorific prefixes or suffixes marking the tribe's status or military prowess
- Examples: _Mbárazi_ (the gatherers), _Ngombeth_ (drum-people, keepers of tradition), _Dómana_ (river-lords)

### Titles and Honorifics

Among the nobility and priesthood, extensive titulature is employed. These titles may reflect military rank, religious office, or exceptional accomplishment and are often prefixed to or substituted for personal names in formal contexts.

---

## Name Lists

### Male Names

- Amaru
- Báhatu
- Baho
- Bárachi
- Bárakho
- Bawe
- Bázou
- Chombaro
- Chumeth
- Daigu
- Dethu
- Douma
- Éduma
- Esa
- Ezhi
- Ezoro
- Foma
- Ghalu
- Ghizu
- Gobi
- Hambor
- Ijato
- Ikari
- Isoreth
- Jamuro
- Jara
- Jara
- Jengu
- Joma
- Jomba
- Jori
- Juka
- Kápio
- Kelé
- Kenthor
- Kíngare
- Kwathor
- Lakhor
- Lemi
- Lepi
- Lésothi
- Lézaru
- Loisa
- Loro
- Lotso
- Makoda
- Manjor
- Mbana
- Mbato
- Mbeleth
- Moseka
- Neka
- Ngalé
- Ngalu
- Ngathu
- Ngoro
- Nkamu
- Nkosa
- Ntemba
- Nyarol
- Omala
- Omare
- Ómari
- Omengo
- Omilo
- Orube
- Otham
- Owaki
- Pajo
- Paro
- Peka
- Rembol
- Rito
- Romba
- Rombo
- Ruko
- Saidhor
- Sákora
- Sámbaro
- Somba
- Táfuro
- Taki
- Talo
- Tárasi
- Taro
- Teko
- Tekor
- Teso
- Tidi
- Tiru
- Tofi
- Tuko
- Ufiro
- Ukara
- Umeja
- Wega
- Yambá
- Zeli
- Zenthar
- Zumi

### Female Names

- Adeli
- Ádhora
- Akazi
- Akeva
- Amila
- Árethi
- Ásira
- Banthi
- Beda
- Bérathi
- Bómeli
- Búkisa
- Daura
- Dóuma
- Éwura
- Ézura
- Fáreba
- Fúmbari
- Fureli
- Ira
- Jara
- Jeza
- Jomara
- Kara
- Kenthi
- Kesa
- Kéthira
- Kímbeli
- Kithma
- Kúlari
- Láfara
- Lanthi
- Lévara
- Leya
- Língola
- Lomba
- Mbaka
- Mbala
- Mbara
- Mbeda
- Mbika
- Mbula
- Mílatha
- Míseka
- Múseka
- N'aleya
- N'kala
- Nábala
- Nangu
- Ndárima
- Ndori
- Neba
- Ngasi
- Ngomi
- Ngothi
- Nola
- Nomeli
- Nyomi
- Nyora
- Ofewa
- Ogana
- Ókira
- Oleka
- Ólida
- Óluba
- Ómazi
- Omera
- Omiwa
- Oruna
- Otala
- Pékani
- Pembura
- Pórali
- Rato
- Riya
- Ruta
- Sáfila
- Sandi
- Sárela
- Saru
- Sashi
- Séngola
- Shewa
- Suna
- Támbori
- Tameka
- Táreli
- Táriya
- Tásara
- Tawo
- Tebo
- Tebu
- Témbeli
- Tenzi
- Úmeja
- Wákori
- Wíthala
- Zámola
- Zani
- Zera

### Tribe Names

- Akeri
- Árambu
- Ároka
- Bámare
- Békata
- Bekhar
- Chándira
- Dángura
- Dómana
- Dúngara
- Émuru
- Endu
- Erada
- Fámali
- Fimbwa
- Fóyira
- Góbani
- Ibari
- Jákora
- Jándaka
- Járubi
- Jondo
- Kánari
- Kárambi
- Kásara
- Kátawi
- Káwiri
- Kembo
- Kúmawe
- Kweni
- Lémberi
- Lémkata
- Lusani
- Mágara
- Mágosi
- Mákora
- Mbárazi
- Mbáromi
- Mbasu
- Mbesa
- Mbúlawe
- Múbari
- Mugba
- Múlangi
- N'dalu
- N'ozi
- Nánjeri
- Ndamo
- Ndepi
- Nézika
- Ngáleza
- Ngolu
- Ngombeth
- Ngosai
- Nogari
- Nombo
- Nyanthel
- Óbamba
- Ókwebo
- Olumba
- Omáreka
- Ómiwa
- Ónkura
- Opira
- Órachi
- Órungi
- Ótanda
- Otanga
- Pánawe
- Pébara
- Pézawa
- Póbani
- Rébara
- Rembi
- Rómara
- Sábeni
- Sámboro
- Sángweri
- Sároba
- Shéwuru
- Sónkara
- Tábuza
- Tángwari
- Tárezi
- Tárombu
- Tébara
- Térami
- Téwala
- Todo
- Tókosi
- Tómanga
- Úfara
- Úlambo
- Wánduri
- Wótara
- Yumbaro
- Záturi
- Zékara
- Zúmara

## Okharik Lexicon {#lexicon}

The common greeting of Okharis, _Okharé, ne thalé_, hails a stranger as one of the people before it wishes him well. The two halves of [[lore-okharinclt|Okharin]] religious life, the [[lore-zohira|zohira]] who are dealt with and [[lore-nkaruthardty|Nkaru'thar]], the Eternal Flame, who is worshipped, share one tongue, and this page is its word-hoard: the stems the clans and the cities use, what each ending makes of them, the rules a new word is built by, and the register of every name the setting gives in Okharis.

An Okharik stem names an act, and an ending says what part the act plays. _Korth-_ is to keep watch; _korthari_ is the guardian who keeps it, and _kortharira_ is a company of them. The same handful of endings is laid on every stem, and a title is two words: the office, then the thing it serves, set in the _-ing_ form that marks belonging. _Korthari Zohiring_ is the Guardian of the Spirits; _Korthari Nkaring_ is the Warden of the Flame.

The sound of Okharik is full and nasal. Words open freely on _mb_, _nd_ and _nk_, the rasping _kh_ falls anywhere, and _-ng_ and _-m_ close words that mark a class. Vowels come short or long, and stress falls on the second-last syllable.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its plain form, a verb in its _-om_ form. A form that closes on a hyphen is a bound stem, which never stands alone. A word made of smaller parts names the stem or word and the ending the form is made of, joined by `+`, and the form is exactly what the suffix table makes of them.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-okharclng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

A word opens on a vowel, a single consonant or one of the pairs below, and closes on a vowel or on one of the consonants below. A bound stem, written with a closing hyphen, closes on anything.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' WHEN 'vowelPair' THEN 'Vowels that may stand together' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-okharclng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-okharclng'
```

## Building words {#building-words}

Two moves make every built word on this page. **An ending on a stem:** the stem is bound, and each ending says what part the stem's act plays. **A word and its belonging:** a noun takes _-ing_ in place of its closing vowel and stands after the word it qualifies, so a title, a spirit's name and a place's name are each a head word and a word of belonging.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-okharclng'
ORDER BY position
```

## Words {#words}

### The Flame and the temple

The faith of [[affiliation-nkaruthar|Nkaru'thar]] is a ladder, and its rungs are agent words. Every office is a stem with _-ari_, the one who does the act, set before the thing the office serves: a _talithari_ is a scholar and a _shebari_ a servant, and _Talithari Nkaring_ and _Shebari Shimbing_ say whose. The one rung that is not an office is the student, a _kwendelo_, the one taken in hand; the three cities share it.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-okharclng' AND field = 'The Flame and the temple' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### The spirits and the cairn

The zohira are named the way the temple's offices are: a head word and a word of belonging. _[[lore-yombelspr|Yombel Ngoriring]]_ is the mother of the rivers and _[[lore-zhimbalspr|Zhimbalu Ombing]]_ the shadow of the forest; only the storm, _[[lore-gorombespr|Gorombe]]_, goes by a single word. The shamans' own name for their path, _[[affiliation-yenorzhrng|Yenor Zohiring]]_, is built the same way, and a shaman is a _kwendari zohiring_, a teacher of the spirits.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-okharclng' AND field = 'The spirits and the cairn' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Kingdom, clan and kin

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-okharclng' AND field = 'Kingdom, clan and kin' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

## Making names {#making-names}

**An Okharin person** carries a given name and a tribe: [[being-kirobashkm|Kiroba of the Shókuma]] is Kiroba, of the [[affiliation-shokumatrb|Shókuma tribe]], and the tribe is named in the reader's tongue as _of the_. A man's given name commonly closes on _-o_ or _-u_, and a woman's on _-a_ or _-i_; the name lists above hold the names in use.

**A tribe** is named for its founder or its ground, with no ending of its own: _Shókuma_, _Magara_, _Táluméng_. **A city or a land** takes _-is_ when it is a seat: _Okharis_, _Zarhanis_.

**A title** is the office and the thing it serves, the second word in its _-ing_ form: _Ambelari Zheking_, the Prophet of Light. The High Pyremant is written half in the reader's tongue, _Pyremant Thokorin_.

## Scope {#scope}

The register below holds every name of every note in Okharis and its faith. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'parents' THEN 'parent' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-okharclng'
GROUP BY kind ORDER BY CASE kind WHEN 'folders' THEN 0 WHEN 'cultures' THEN 1 WHEN 'parents' THEN 2 WHEN 'addresses' THEN 3 END
```

## Attested names {#attested-names}

Every name the setting gives a person, place, polity, office or thing of Okharis, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not yet built from it shows `—`, and a name in the reader's tongue is listed so that the register is complete.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'okharic' THEN ', [[' || tongue_language || '|Okharik]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-okharclng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-okharclng' ORDER BY position
```

## Retired names {#retired-names}

A retired name is one the setting does not write: a word of an Earth language. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose and is not read.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-okharclng' ORDER BY position
```

## Everyday speech

The additional entries give ordinary words and complete expressions for daily use. A bound stem still closes with a hyphen and never stands alone. The new free words are cited individually; the old titles, names and sacred formulas keep their existing forms. Verbs are given in their plain citation form, usually ending in _-om_. The existing _orung_, _shara_ and _zarun_ remain as written.

### People, acts and descriptions

The ordinary examples follow subject, verb, object: _Ngem mbesom ngwelit_, I see the boar; _ndem mbathom mebothu_, you carry the pot. Deliberate continued looking is also _mbesom_: _Ngem mbesom ngwelit thamili_, I watch the boar for a while. _Ntelom_ is hearing, _ntekom_ listening, and _mbetom_ noticing something. The noun _ntelu_ is a sound; _zheboru_ is specifically a voice.

_Thumom_ serves the cited descriptions: _Uzhoru thumom ngolin_, the water is cold; _ngwelit thumom mbesin_, the boar is visible in the stated viewing conditions. _Ngwelit thumom mbes mbesin_ says it is invisible. This concerns the object in those conditions. _Mbeskomin_ describes a person's blindness. _Mbemin_ gives a moderate degree: _Uzhoru thumom mbemin ngolin_, the water is cool. The examples describe qualities without filling a gender or agreement table. _Shimbin_ gives the yellow or golden quality of the established _shimb-_ stem; _zhembin_ is red.

The difference between an organ and an experience is kept in the words themselves. _Mbeselu_ is an eye, _mbesu_ a sight or appearance, and _sharulu_ a felt sensation. _Mborku_ is pain; _mborkom_ causes pain or injury. _Ngem mbathurom mborku_ says I am in pain. _Meborin_ means physically sated after sufficient eating or drinking, including _uzhelu_, a drink. It does not mean the satisfaction of a fulfilled desire.

### Belonging and kin

The head comes before its word of belonging. In the new examples, a noun's closing vowel is replaced by _-ing_: _ombelu_, house, gives _ombeling_, of the house; _mbeselu_, eye, gives _mbeseling_, of the eye. _Khuthel ombeling_ is the house's floor, _uzhoru mbeseling_ tears, and _ndozhu mbeseling_ a window, conventionally the eye's doorway. _Mbothulu nkaring_ is a lamp, the vessel of fire. The physical hearth is _mbethoru nkaring ombeling_, the fire-place in the house. Existing _nkaring_ retains its ordinary meaning of the flame or fire.

Kin phrases name the relationship, not a clan office. _Yombel pemboring_ is a grandmother, the mother of a parent. _Yombili yombiling_ is a grandchild. _Yombili sombiling pemboring_ is a cousin: the child of a sibling of one's parent. In that complete expression, the sibling-of-parent relation belongs inside the child relation. _Lembari ndengin_ is the separately cited status of a surviving person whose spouse has died; _mbenelin lembari ndengin_ names a widow and _mbenarin lembari ndengin_ a widower.

_Khuthel pembeling_ is soil, earth of plants. The same qualifier also belongs to _pembelu_, pregnancy; the soil phrase uses the plant sense. The cited kin phrases retain their own modifier order: _sombili mbenarin_ is a brother and _sombili mbenelin_ a sister.

The personal qualifiers are individually cited: _ngemin_, my or mine; _ndemin_, your or yours; _ngemirin_, our or ours. _Mebothu ngemin_ means my pot; _mebothu thumom ngemin_ means the pot is mine. The question _Mebothu thumom mbeyin?_ asks whose the pot is. These examples use the listed qualifiers, rather than prescribing new endings for every pronoun.

### Feelings and affection

_Mbethom_ is knowing in general and _mbethenu_ knowledge in general. _Talithom_ and _talithu_ specifically concern knowing by study, preserving the established _talith-_ stem’s scope.

_Thimbaru_ is subjective certainty or confidence, including confidence in one's own capacity. _Sembor_ remains truth, and _sembin_ means true. Confidence may be mistaken. _Beloru thambing lembaring_ is satisfaction at a desire's fulfillment; its inner relation is fulfillment of desire. _Lemberu_ is frustration, the distress of an obstructed desire or effort.

The four love expressions distinguish their recipients and the kind of care. _Membelu lemkheraring_ is romantic love for a beloved partner; _membelu mbenalaring_ friendship; _membelu sombening_ family love. _Membelu mbenaring mbemoi_ names selfless care for all human beings without demanding a return. In these affection phrases the qualifier names the recipient. _Lemkuru_ is sexual lust, which can occur with or without romantic attachment. _Yomboru_ expresses sympathy, compassion and pity as concern for another's suffering, including a wish to relieve it.

### Quantity, place and time

A count or measured amount is _ngorimu_. _Ngorimu mebothing thumom ntem_ says the number of pots is ten; _ngorimu uzhoring thumom mbet uzhelili_ says the amount of water is two cups. The questions replace the result with _ntayi_: _Ngorimu mebothing thumom ntayi?_ and _Ngorimu uzhoring thumom ntayi?_ The same forms work for other counted objects or measured substances when their cited belonging forms replace the pot or water qualifier.

_Thokalu ket_ is fourth, literally numbered position four; _thokalu mbethen_ is hundredth. _Mborinmu uzhoru_ is enough water for the purpose in view. _Mebothu tebu mbathurom ngorel uzhoru mborethen mbemoi mbenerin mebothu_ says this pot has more water than all the other pots. The comparison excludes the pot being described. The corresponding _ngomel_ construction gives least, and the _mborel_ and _mborkel_ comparisons give best and worst. _Mbetel ndokel ntem mebothu thumom mbethu_ means almost ten pots are here, still below ten. _Ngorut ntem mebothu thumom mbethu_ gives an approximate count around ten, which may be higher or lower.

_Ngem ngenom mbo ombelu_ means I enter the house; _ngem ngenom ngo ombelu_, I exit it. _Mbo_ and _ngo_ have the inward and outward relation uses shown here. _Ngem mbekom ngorathen ombelu_ means I come from the house. _Mbor_ names a goal: _Ngem mbathom mebothu mbor ndem_, I bring the pot to you.

A named time can situate an act: _Ngem mbekom zhekathu tebu_, I come today. _Ngem thambelom mbo pemburu_ means I wait during the birth; _ngem ntekom mbo mebu ngemin_, I listen while I eat. Here _mebu_ is the noun eating and _ngemin_ identifies its doer. _Ngem thumom mbethu ngorathen pemburu_ locates my being here from the birth onward. The words do not add a tense or conjugation table.

### Questions, scope and conversation

_Mbes_ negates the following act or quality: _Ngem mbes ngenom_, I do not go; _mbes sembin_, false. In _Ngem mbes mbakom ngenom_, I cannot go, the negation concerns ability. _Ngem mbathurom lemkolu ngenom_ says I have permission to go. _Ngem mbotharom mbes ngenom_ says I must not go: the obligation is to refrain. The dictionary gives each modal expression with its own scope.

_Mbis ndem mbes mbekom, ngem ngenom_ means unless you come, I go. _Ngem thambelom mbis ndem mbekom; mbis ndembethe ngem ngenom_ means I wait if you come; otherwise I go. The concessive and whether expressions likewise have complete clause examples in their entries. _Sembe, ngem lembom mbenthom_ affirms sincerity: truly, I want to help. _Thimbe_ instead expresses the speaker's conviction.

_Korthom_ retains keeping watch over someone or something and extends to active defense in ordinary speech. _Zhekom_ retains shining and extends to revealing something; _vuthrom_ retains clashing in the battle line and extends to fighting more generally.

The old _Okharé, ne thalé_ remains the greeting. _Ngem zhepimom, zharurom uzhoru_ is a courteous request: please give water. _Ngem zharom ndem_ gives thanks; _mbenem beloru_, with joy, answers them. _Ndokhelom ngem_ requests forgiveness. The short calls _mbekom mbethu_, come here, and _ngenom ngorathen mbethu_, go away, are cited requests. They do not prescribe a new imperative paradigm for every verb.
