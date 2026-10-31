---
shortcode: nyalbnlng
name: {full: Nyáluban Language}
type: skill
subType: language
description: "The Nyáluban oral speech, whose keepers carry messages across miles by drum and pitch as readily as by voice."
tags: []
data:
  roman: "abdefghijklmnoprstuwyzáéíóúë0123456789()–-'"
  core: true
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
    - name: "Everyday speech"
      holds: "Ordinary words and complete spoken expressions for daily life."
  affixes:
    - form: "-zi"
      gloss: "the people of it: a clan, named for its totem"
      attaches: "added"
      examples: ["ruwo > ruwozi, the lion-clan"]
    - form: "-inya"
      gloss: "the quality of it: a noun of what a thing is"
      attaches: "added"
      examples: ["shor- > shorinya, brightness"]
    - {form: "-o", gloss: "a man's name", attaches: "added", examples: ["tabes- > tabeso"]}
    - {form: "-a", gloss: "a woman's name", attaches: "added", examples: ["lushey- > lusheya"]}
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
    - form: nyoli
      class: "n"
      field: The Pact and the council
      gloss: "a daughter"
      concept: daughter
    - {form: ndafo, class: adj, field: The Pact and the council, gloss: "great, senior"}
    - "form": "nkulu"
      "class": "n"
      "field": "The Pact and the council"
      "gloss": "an elder"
      "concept": "elder"
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
    - "form": "zhone"
      "class": "v"
      "field": "The Brightness and the guides"
      "gloss": "abides, stays near"
      "concept": "remain"
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
    - {"form": "le", "class": "adj", "field": "Grammar words", "gloss": "good", "concept": "good"}
    - "form": "enyi"
      "class": "pron"
      "field": "Grammar words"
      "gloss": "you, the one honored"
      "concept": "you-reference"
    - {form: "mi-", class: pref, field: Grammar words, gloss: "I: set before the verb"}
    - form: mewi
      class: pron
      field: Everyday speech
      gloss: me; I, the speaker, as an object or independent reference; the existing mi- before a verb marks a first-person subject
      source: {kind: coined}
      concept: i
    - form: weyi
      class: pron
      field: Everyday speech
      gloss: he; she; the single person already identified, without marking sex
      source: {kind: coined}
      concept: [he, she]
    - form: lowa
      class: pron
      field: Everyday speech
      gloss: it; the thing, matter or proposition already identified
      source: {kind: coined}
      concept: it
    - form: weyu
      class: pron
      field: Everyday speech
      gloss: they; the people or things already identified
      source: {kind: coined}
      concept: they
    - form: mewo
      class: pron
      field: Everyday speech
      gloss: we; us, the speaker and others
      source: {kind: coined}
      concept: we
    - form: liwe
      class: part
      field: Everyday speech
      gloss: "of; marks alienable ownership or possession: kabe liwe mewi, my cup; body and kin possession uses the separately cited prefixed forms; also relates a number to the counted kind in ndeyela liwe kabe, an amount to its substance in ndeyeli liwe mashelu, and a name to its bearer in nyendelyo liwe lewi bwelo"
      source: {kind: coined}
    - form: liye
      class: part
      field: Everyday speech
      gloss: toward; directed to the following person, thing or goal, including the object of a feeling; liye enyi, toward you, the one honored
      source: {kind: coined}
      concept: [toward, to]
    - form: shewe
      class: part
      field: Everyday speech
      gloss: not; negates the following predicate or stated quality
      source: {kind: coined}
      concept: not
    - form: nyeme
      class: part
      field: Everyday speech
      gloss: without; lacking the following named thing or faculty
      source: {kind: coined}
    - form: lome
      class: v
      field: Everyday speech
      gloss: "to be; links the subject to the condition stated after the verb: weyi lome le, that person is well or good as context determines"
      source: {kind: coined}
      concept: be
    - form: lomeli
      class: v
      field: Everyday speech
      gloss: to have; to possess or experience the following object
      source: {kind: coined}
      concept: have
    - form: ndalo
      class: n
      field: Everyday speech
      gloss: [a person; a human being of any age or sex, a human; a human person of any age or sex]
      source: {kind: coined}
      concept: [person, human]
    - form: mbele
      class: n
      field: Everyday speech
      gloss: the body; the physical body of a living being
      source: {kind: coined}
    - form: nzeli
      class: n
      field: Everyday speech
      gloss: an emotion; a feeling, distinct from bodily sensation alone
      source: {kind: coined}
    - form: nalewa
      class: n
      field: Everyday speech
      gloss: love; affectionate concern and attachment, distinct from sexual appetite alone
      source: {kind: coined}
      concept: affection
    - form: nalemo
      class: n
      field: Everyday speech
      gloss: a romantic beloved; a person loved as a partner
      source: {kind: coined}
    - form: mbeli
      class: n
      field: Everyday speech
      gloss: a friend
      source: {kind: coined}
      concept: friend
    - form: nyemo
      class: n
      field: Everyday speech
      gloss: kin; one's relatives, including relatives outside the household
      source: {kind: coined}
      concept: kin
    - form: ndeshi
      class: n
      field: Everyday speech
      gloss: a companion; someone sharing company or an activity
      source: {kind: coined}
      concept: companion
    - form: namele
      class: n
      field: Everyday speech
      gloss: a desire; something wanted
      source: {kind: coined}
      concept: desire
    - form: ndale
      class: adj
      field: Everyday speech
      gloss: fulfilled; satisfied through attaining what was desired
      source: {kind: coined}
    - form: ndelo
      class: adj
      field: Everyday speech
      gloss: settled; at ease rather than restless or disturbed
      source: {kind: coined}
    - form: ndebe
      class: n
      field: Everyday speech
      gloss: absence; the condition of not being present or attained
      source: {kind: coined}
    - form: ndeshe
      class: adj
      field: Everyday speech
      gloss: enduring; continuing for a sustained time
      source: {kind: coined}
      concept: lasting-duration
    - form: ndewa
      class: adj
      field: Everyday speech
      gloss: excessive; beyond a fitting or intended limit
      source: {kind: coined}
    - form: nyela
      class: adj
      field: Everyday speech
      gloss: gentle; mild in effect or intensity
      source: {kind: coined}
    - form: ntali
      class: adj
      field: Everyday speech
      gloss: low; below the stated or ordinary level
      source: {kind: coined}
      concept: low
    - form: ngwi
      class: conj
      field: Everyday speech
      gloss: and; joins the named things or complete clauses
      source: {kind: coined}
      concept: and
    - form: ngo
      class: conj
      field: Everyday speech
      gloss: or; offers the named alternatives
      source: {kind: coined}
      concept: or
    - form: nde
      class: conj
      field: Everyday speech
      gloss: but; contrasts the two complete clauses it joins
      source: {kind: coined}
      concept: but
    - form: lashe
      class: v
      field: Everyday speech
      gloss: to see; to discern with the eyes
      source: {kind: coined}
      concept: see-verb
    - form: lasha
      class: n
      field: Everyday speech
      gloss: a sight; what is seen, distinct from the ability to see
      source: {kind: coined}
      concept: see-noun
    - form: nyeshi
      class: v
      field: Everyday speech
      gloss: to hear; to perceive sound with the ears
      source: {kind: coined}
      concept: hear-verb
    - form: nyeshe
      class: n
      field: Everyday speech
      gloss: a sound; something audible
      source: {kind: coined}
      concept: hear-noun
    - form: febele
      class: v
      field: Everyday speech
      gloss: to smell; to sense a scent with the nose
      source: {kind: coined}
      concept: smell-verb
    - form: febelo
      class: n
      field: Everyday speech
      gloss: a smell; a scent, pleasant or unpleasant
      source: {kind: coined}
      concept: smell-noun
    - form: labesha
      class: v
      field: Everyday speech
      gloss: to taste; to sense a flavour
      source: {kind: coined}
      concept: taste-verb
    - form: labesho
      class: n
      field: Everyday speech
      gloss: a taste; a flavour
      source: {kind: coined}
      concept: taste-noun
    - form: labeyi
      class: v
      field: Everyday speech
      gloss: to touch; to feel something with the hand
      source: {kind: coined}
      concept: touch-verb
    - form: labeya
      class: n
      field: Everyday speech
      gloss: a touch; an instance of physical contact
      source: {kind: coined}
      concept: touch-noun
    - form: lasheya
      class: v
      field: Everyday speech
      gloss: to look; to direct one's eyes at the object
      source: {kind: coined}
      concept: look
    - form: lashemi
      class: v
      field: Everyday speech
      gloss: to watch; to keep an attentive gaze upon someone or something
      source: {kind: coined}
      concept: watch
    - form: lasha liye bwelo
      class: n
      field: Everyday speech
      gloss: appearance; the outward look of a thing, conventionally the sight toward the thing; bwelo is replaced by the thing named
      source: {kind: coined}
      concept: appearance
    - form: lashele
      class: adj
      field: Everyday speech
      gloss: visible; discernible to a situated observer with sight
      source: {kind: coined}
      concept: visible
    - form: shewe lashele
      class: adj
      field: Everyday speech
      gloss: invisible; not discernible to a situated observer with sight
      source: {kind: coined}
      concept: invisible
    - form: nyeshemi
      class: v
      field: Everyday speech
      gloss: to listen; to direct attention to what is heard
      source: {kind: coined}
      concept: listen
    - form: nyeshela
      class: n
      field: Everyday speech
      gloss: noise; intrusive or irregular sound
      source: {kind: coined}
      concept: noise
    - form: nyesho
      class: n
      field: Everyday speech
      gloss: a voice; sound produced by a speaker or animal
      source: {kind: coined}
      concept: voice
    - form: nyeme nyeshe
      class: part
      field: Everyday speech
      gloss: silence; without audible sound in the situation
      source: {kind: coined}
      concept: silence
    - form: nyeshelo
      class: adj
      field: Everyday speech
      gloss: loud; having great audible intensity
      source: {kind: coined}
      concept: loud
    - form: nyesheli
      class: adj
      field: Everyday speech
      gloss: quiet; making little or no sound
      source: {kind: coined}
      concept: quiet
    - form: febelele
      class: adj
      field: Everyday speech
      gloss: fragrant; having a pleasant scent
      source: {kind: coined}
      concept: fragrant
    - form: febeleshe
      class: adj
      field: Everyday speech
      gloss: foul-smelling; having an unpleasant smell
      source: {kind: coined}
      concept: foul
    - form: labeshe
      class: adj
      field: Everyday speech
      gloss: sweet
      source: {kind: coined}
      concept: sweet
    - form: labeshi
      class: adj
      field: Everyday speech
      gloss: sour
      source: {kind: coined}
      concept: sour
    - form: labeshu
      class: adj
      field: Everyday speech
      gloss: bitter
      source: {kind: coined}
      concept: bitter
    - form: labeshewa
      class: adj
      field: Everyday speech
      gloss: salty
      source: {kind: coined}
      concept: salty
    - form: nyabeya
      class: v
      field: Everyday speech
      gloss: to feel a bodily sensation, rather than merely hold a belief
      source: {kind: coined}
      concept: feel-verb
    - form: nyabeyo
      class: n
      field: Everyday speech
      gloss: a bodily sensation; an experience through the senses
      source: {kind: coined}
      concept: sensation
    - form: labwele
      class: adj
      field: Everyday speech
      gloss: smooth
      source: {kind: coined}
      concept: smooth
    - form: labweshe
      class: adj
      field: Everyday speech
      gloss: rough
      source: {kind: coined}
      concept: rough
    - form: labweli
      class: adj
      field: Everyday speech
      gloss: soft
      source: {kind: coined}
      concept: soft
    - form: labwelo
      class: adj
      field: Everyday speech
      gloss: hard to the touch; firm rather than soft
      source: {kind: coined}
      concept: hard-texture
    - form: lashebo
      class: v
      field: Everyday speech
      gloss: to notice
      source: {kind: coined}
      concept: notice
    - form: nyabemi
      class: v
      field: Everyday speech
      gloss: to perceive; to become aware through the senses
      source: {kind: coined}
      concept: perceive
    - form: lashebi
      class: v
      field: Everyday speech
      gloss: to recognize; to identify something already known
      source: {kind: coined}
      concept: recognize
    - form: lashemo
      class: v
      field: Everyday speech
      gloss: to seem; to present the appearance stated after the subject
      source: {kind: coined}
      concept: seem
    - form: nzembu ndewa
      class: n
      field: Everyday speech
      gloss: wrath; intense overwhelming anger
      source: {kind: coined}
      concept: wrath
    - form: mbazeli
      class: n
      field: Everyday speech
      gloss: envy; distress at another's good fortune and desire to possess it oneself
      source: {kind: coined}
      concept: envy
    - form: nyadelo
      class: n
      field: Everyday speech
      gloss: hope; desire for a good outcome accompanied by an expectation that it may occur
      source: {kind: coined}
      concept: hope
    - form: namele ndewa
      class: n
      field: Everyday speech
      gloss: greed; desire beyond a fitting share, including desire for wealth or power
      source: {kind: coined}
      concept: greed
    - form: nyeshabo
      class: n
      field: Everyday speech
      gloss: boasting; speech displaying one's own worth or achievements excessively
      source: {kind: coined}
      concept: boasting
    - form: ndabemi
      class: n
      field: Everyday speech
      gloss: pride; felt esteem in oneself or what one identifies with
      source: {kind: coined}
      concept: pride
    - form: nalawo
      class: n
      field: Everyday speech
      gloss: lust; sexual appetite, distinct from romantic or universal selfless love
      source: {kind: coined}
      concept: lust
    - form: nyeme nyadelo
      class: part
      field: Everyday speech
      gloss: despair; without hope in the felt sense of having lost it
      source: {kind: coined}
      concept: despair
    - form: nyadeli
      class: n
      field: Everyday speech
      gloss: disappointment; sadness at an expectation not being fulfilled
      source: {kind: coined}
      concept: disappointment
    - form: nyadewa
      class: n
      field: Everyday speech
      gloss: faith; committed trust in a person, teaching or sacred promise without requiring proof
      source: {kind: coined}
      concept: faith
    - form: ndameli
      class: n
      field: Everyday speech
      gloss: joy; a keen feeling of gladness
      source: {kind: coined}
      concept: joy
    - form: ndamela
      class: n
      field: Everyday speech
      gloss: happiness; a sustained feeling of being happy and one's life going well
      source: {kind: coined}
      concept: happiness
    - form: ndamelo
      class: n
      field: Everyday speech
      gloss: pleasure; felt enjoyment or delight
      source: {kind: coined}
      concept: pleasure
    - form: mbale ndelo
      class: n
      field: Everyday speech
      gloss: contentment; a heart at ease with what it has, a conventional feeling rather than merely a settled dispute
      source: {kind: coined}
      concept: contentment
    - form: mbesheli
      class: n
      field: Everyday speech
      gloss: gratitude; thankful recognition of a benefit received
      source: {kind: coined}
      concept: gratitude
    - form: ndabemi liye ndalo
      class: n
      field: Everyday speech
      gloss: admiration; esteem directed toward another's qualities or deeds; the admired person may replace ndalo
      source: {kind: coined}
      concept: admiration
    - form: nyademe
      class: n
      field: Everyday speech
      gloss: trust; willing reliance on someone or something, without asserting that the reliance is justified
      source: {kind: coined}
      concept: trust
    - form: nyabende
      class: n
      field: Everyday speech
      gloss: courage; resolve to act or endure despite fear, rather than an absence of fear
      source: {kind: coined}
      concept: courage
    - form: nzembu
      class: n
      field: Everyday speech
      gloss: anger; a feeling of displeasure directed against someone or something
      source: {kind: coined}
      concept: anger
    - form: nzelamo
      class: n
      field: Everyday speech
      gloss: hatred; enduring intense aversion
      source: {kind: coined}
      concept: hatred
    - form: nzembu liye nalewa
      class: n
      field: Everyday speech
      gloss: jealousy; anger and anxiety at a rival taking a valued relationship, conventionally anger over love
      source: {kind: coined}
      concept: jealousy
    - form: nyabendo
      class: n
      field: Everyday speech
      gloss: fear
      source: {kind: coined}
      concept: fear
    - form: nyabendo ndewa
      class: n
      field: Everyday speech
      gloss: terror; overwhelming fear, not necessarily fear of a spirit
      source: {kind: coined}
      concept: terror
    - form: nzelami
      class: n
      field: Everyday speech
      gloss: sadness
      source: {kind: coined}
      concept: sadness
    - form: nzelami liye ndebe
      class: n
      field: Everyday speech
      gloss: grief; deep sadness at loss, the conventional sorrow directed toward absence; the lost person or thing may be named after liye
      source: {kind: coined}
      concept: grief
    - form: mbadeli
      class: n
      field: Everyday speech
      gloss: shame; painful awareness of being diminished in one's own or others' eyes
      source: {kind: coined}
      concept: shame
    - form: mbadela
      class: n
      field: Everyday speech
      gloss: guilt; the felt recognition of one's own wrongdoing, distinct from a legal finding or an inherited obligation
      source: {kind: coined}
      concept: guilt
    - form: mbadelo
      class: n
      field: Everyday speech
      gloss: regret; sorrow over what happened or what one did or failed to do
      source: {kind: coined}
      concept: regret
    - form: ndabeli
      class: n
      field: Everyday speech
      gloss: humility
      source: {kind: coined}
      concept: humility
    - form: nyademi
      class: n
      field: Everyday speech
      gloss: confidence; subjective assurance in one's capacity, an outcome or a claim, without guaranteeing truth
      source: {kind: coined}
      concept: confidence
    - form: mbadeli nyela
      class: n
      field: Everyday speech
      gloss: embarrassment; the gentler shame of awkward self-consciousness, without necessarily a moral fault
      source: {kind: coined}
      concept: embarrassment
    - form: nalewa liye nzelami
      class: n
      field: Everyday speech
      gloss: compassion; concern for another's suffering and a wish to relieve it, conventionally love directed toward sorrow
      source: {kind: coined}
      concept: compassion
    - form: nzelami liye ndalo
      class: n
      field: Everyday speech
      gloss: pity; sorrow at another's suffering or misfortune; the affected person may replace ndalo
      source: {kind: coined}
      concept: pity
    - form: nzeli liye ndeshi
      class: n
      field: Everyday speech
      gloss: sympathy; sharing or understanding another's feeling, conventionally feeling directed toward a companion; not restricted to friends
      source: {kind: coined}
      concept: sympathy
    - form: nzembu ndeshe
      class: n
      field: Everyday speech
      gloss: resentment; enduring anger at a remembered injury or unfairness
      source: {kind: coined}
      concept: resentment
    - form: nzelamo ntali
      class: n
      field: Everyday speech
      gloss: contempt; aversion joined to a judgement that its object is beneath regard
      source: {kind: coined}
      concept: contempt
    - form: nalebemi
      class: n
      field: Everyday speech
      gloss: forgiveness; release of blame or a claim against another, distinct from payment or merely ending an angry feeling
      source: {kind: coined}
      concept: forgiveness
    - form: namele liye ndebe
      class: n
      field: Everyday speech
      gloss: longing; persistent desire for what is absent or unattained, not restricted to an absent person
      source: {kind: coined}
      concept: longing
    - form: nzeli liye namele ndale
      class: n
      field: Everyday speech
      gloss: satisfaction; the felt fulfillment of a desire, not merely finishing a task or settling an account
      source: {kind: coined}
      concept: satisfaction
    - form: namelemi
      class: n
      field: Everyday speech
      gloss: frustration; distress at an obstructed desire or effort
      source: {kind: coined}
      concept: frustration
    - form: nyabeli
      class: n
      field: Everyday speech
      gloss: curiosity
      source: {kind: coined}
      concept: curiosity
    - form: nyabele
      class: n
      field: Everyday speech
      gloss: confusion; inability to make sense of a situation or distinguish its parts
      source: {kind: coined}
      concept: confusion
    - form: nyademo
      class: n
      field: Everyday speech
      gloss: doubt; felt uncertainty about a claim or outcome
      source: {kind: coined}
      concept: doubt
    - form: nyademi ndaza
      class: n
      field: Everyday speech
      gloss: certainty; complete subjective assurance, not a claim to objective truth
      source: {kind: coined}
      concept: certainty
    - form: nyabemo
      class: n
      field: Everyday speech
      gloss: surprise; the feeling occasioned by something unexpected
      source: {kind: coined}
      concept: surprise
    - form: ndamishi
      class: n
      field: Everyday speech
      gloss: boredom
      source: {kind: coined}
      concept: boredom
    - form: nyadeliya
      class: n
      field: Everyday speech
      gloss: anticipation; attentive expectation of something to come, pleasant or unpleasant
      source: {kind: coined}
      concept: anticipation
    - form: nyadema
      class: n
      field: Everyday speech
      gloss: belief; acceptance of a claim as true without guaranteeing its truth
      source: {kind: coined}
      concept: belief
    - form: ndabemi ndeshe
      class: n
      field: Everyday speech
      gloss: reverence; deep respectful regard toward someone or something revered, rather than status alone
      source: {kind: coined}
      concept: reverence
    - form: nyabemelo
      class: n
      field: Everyday speech
      gloss: awe; humbled wonder before something overwhelming, which may include fear without being terror
      source: {kind: coined}
      concept: awe
    - form: nalewa liye nalemo
      class: n
      field: Everyday speech
      gloss: romantic love; affectionate attachment to a beloved partner, distinct from sexual appetite alone
      source: {kind: coined}
      concept: love-eros
    - form: nalewa liye mbeli
      class: n
      field: Everyday speech
      gloss: friendship; affectionate regard between friends
      source: {kind: coined}
      concept: love-philia
    - form: nalewa liye nyemo
      class: n
      field: Everyday speech
      gloss: family love; affectionate attachment between kin
      source: {kind: coined}
      concept: love-storge
    - form: naleme
      class: n
      field: Everyday speech
      gloss: selfless universal love; concern for everyone's good without seeking repayment, standing, kinship advantage or sexual gratification; wider than reciprocity within the five clans
      source: {kind: coined}
      concept: love-agape
    - form: nalewi
      class: n
      field: Everyday speech
      gloss: attraction; a felt pull toward someone or something, romantic, physical or otherwise
      source: {kind: coined}
      concept: attraction
    - form: naleyo
      class: n
      field: Everyday speech
      gloss: intimacy; shared closeness and private mutual familiarity
      source: {kind: coined}
      concept: intimacy
    - form: nalewa ndeshe
      class: n
      field: Everyday speech
      gloss: devotion; enduring affectionate dedication to a person, undertaking or ideal
      source: {kind: coined}
      concept: devotion
    - form: nyadewa ndeshe
      class: n
      field: Everyday speech
      gloss: loyalty; steadfast allegiance to a person, group or commitment
      source: {kind: coined}
      concept: loyalty
    - form: ndeshimi
      class: n
      field: Everyday speech
      gloss: companionship; sharing company or an activity with a companion, including company without close friendship
      source: {kind: coined}
      concept: companionship
    - form: nzelame
      class: n
      field: Everyday speech
      gloss: enmity; a relationship of hostility
      source: {kind: coined}
      concept: enmity
    - form: bwelo
      class: n
      field: Everyday speech
      gloss: a thing; something referred to or considered
      source: {kind: coined}
      concept: thing
    - form: mbale
      class: n
      field: Everyday speech
      gloss: the heart; the bodily organ, also the conventional seat of felt concern in the cited heart expressions
      source: {kind: coined}
      concept: heart
    - form: ndaza
      class: adj
      field: Everyday speech
      gloss: all; the whole specified set without exception
      source: {kind: coined}
      concept: all
    - form: ne-
      class: pref
      field: Grammar words
      gloss: my; the speaker as possessor in the two cited inalienable forms nelabwe, my hand, and nedalo, my father; no further possessive forms are specified
      source: {kind: coined}
    - form: labwe
      class: n
      field: Everyday speech
      gloss: a hand; the bodily part at the end of an arm
      source: {kind: coined}
      concept: hand
    - form: dalo
      class: n
      field: Everyday speech
      gloss: a father; one's male parent
      source: {kind: coined}
      concept: father
    - form: nelabwe
      class: n
      field: Everyday speech
      gloss: my hand; the speaker's hand, ne- joined to labwe, using the prefixed inalienable-possession construction
      source: {kind: coined}
      built: [ne-, labwe]
    - form: nedalo
      class: n
      field: Everyday speech
      gloss: my father; the speaker's father, ne- joined to dalo, using the prefixed inalienable-possession construction
      source: {kind: coined}
      built: [ne-, dalo]
    - form: mbelo
      class: n
      field: Everyday speech
      gloss: the head
      source: {kind: coined}
      concept: head
    - form: mbelu
      class: n
      field: Everyday speech
      gloss: hair; the strands growing on a person's head, distinct from sheep's fleece
      source: {kind: coined}
      concept: hair
    - form: labele
      class: n
      field: Everyday speech
      gloss: the face
      source: {kind: coined}
      concept: face
    - form: lashebu
      class: n
      field: Everyday speech
      gloss: the eye
      source: {kind: coined}
      concept: eye
    - form: nyeshebu
      class: n
      field: Everyday speech
      gloss: the ear
      source: {kind: coined}
      concept: ear
    - form: febela
      class: n
      field: Everyday speech
      gloss: the nose
      source: {kind: coined}
      concept: nose
    - form: labe
      class: n
      field: Everyday speech
      gloss: the mouth
      source: {kind: coined}
      concept: mouth
    - form: labewe
      class: n
      field: Everyday speech
      gloss: the lip
      source: {kind: coined}
      concept: lip
    - form: labemi
      class: n
      field: Everyday speech
      gloss: the tooth
      source: {kind: coined}
      concept: tooth
    - form: labemo
      class: n
      field: Everyday speech
      gloss: the tongue; the muscular organ inside the mouth, distinct from a language
      source: {kind: coined}
      concept: tongue
    - form: mbelewa
      class: n
      field: Everyday speech
      gloss: the neck
      source: {kind: coined}
      concept: neck
    - form: labema
      class: n
      field: Everyday speech
      gloss: the shoulder
      source: {kind: coined}
      concept: shoulder
    - form: labwi
      class: n
      field: Everyday speech
      gloss: the arm
      source: {kind: coined}
      concept: arm
    - form: labwiyo
      class: n
      field: Everyday speech
      gloss: the elbow
      source: {kind: coined}
      concept: elbow
    - form: labye
      class: n
      field: Everyday speech
      gloss: the finger
      source: {kind: coined}
      concept: finger
    - form: labyela
      class: n
      field: Everyday speech
      gloss: the fingernail
      source: {kind: coined}
      concept: nail
    - form: mbalo
      class: n
      field: Everyday speech
      gloss: the chest
      source: {kind: coined}
      concept: chest
    - form: mbali
      class: n
      field: Everyday speech
      gloss: a breast; an organ that produces milk, distinct from the chest as a whole
      source: {kind: coined}
      concept: breast
    - form: mbolu
      class: n
      field: Everyday speech
      gloss: the belly
      source: {kind: coined}
      concept: belly
    - form: mbora
      class: n
      field: Everyday speech
      gloss: the back
      source: {kind: coined}
      concept: back
    - form: mbola
      class: n
      field: Everyday speech
      gloss: the hip
      source: {kind: coined}
      concept: hip
    - form: pabo
      class: n
      field: Everyday speech
      gloss: the leg
      source: {kind: coined}
      concept: leg
    - form: pabe
      class: n
      field: Everyday speech
      gloss: the knee
      source: {kind: coined}
      concept: knee
    - form: pobe
      class: n
      field: Everyday speech
      gloss: the foot
      source: {kind: coined}
      concept: foot
    - form: pobi
      class: n
      field: Everyday speech
      gloss: the toe
      source: {kind: coined}
      concept: toe
    - form: nyalwe
      class: n
      field: Everyday speech
      gloss: the skin
      source: {kind: coined}
      concept: skin
    - form: ngele
      class: n
      field: Everyday speech
      gloss: the bone
      source: {kind: coined}
      concept: bone
    - form: mbase
      class: n
      field: Everyday speech
      gloss: blood
      source: {kind: coined}
      concept: blood
    - form: mbelemi
      class: n
      field: Everyday speech
      gloss: flesh
      source: {kind: coined}
      concept: flesh
    - form: mbelola
      class: n
      field: Everyday speech
      gloss: the forehead; the region of the face above the eyes
      source: {kind: coined}
      concept: forehead
    - form: labyelo
      class: n
      field: Everyday speech
      gloss: jaw
      source: {kind: coined}
      concept: jaw
    - form: labyenu
      class: n
      field: Everyday speech
      gloss: chin
      source: {kind: coined}
      concept: chin
    - form: labena
      class: n
      field: Everyday speech
      gloss: cheek
      source: {kind: coined}
      concept: cheek
    - form: labeno
      class: n
      field: Everyday speech
      gloss: the throat; the inner passage through the neck
      source: {kind: coined}
      concept: throat
    - form: mbolwe
      class: n
      field: Everyday speech
      gloss: the stomach; the digestive organ within the belly
      source: {kind: coined}
      concept: stomach
    - form: mbole
      class: n
      field: Everyday speech
      gloss: waist
      source: {kind: coined}
      concept: waist
    - form: mbore
      class: n
      field: Everyday speech
      gloss: spine
      source: {kind: coined}
      concept: spine
    - form: mbori
      class: n
      field: Everyday speech
      gloss: buttock
      source: {kind: coined}
      concept: buttock
    - form: labwena
      class: n
      field: Everyday speech
      gloss: wrist
      source: {kind: coined}
      concept: wrist
    - form: labwemi
      class: n
      field: Everyday speech
      gloss: the palm; the inner gripping face of the hand
      source: {kind: coined}
      concept: palm
    - form: labyebu
      class: n
      field: Everyday speech
      gloss: thumb
      source: {kind: coined}
      concept: thumb
    - form: pabewa
      class: n
      field: Everyday speech
      gloss: thigh
      source: {kind: coined}
      concept: thigh
    - form: pobwe
      class: n
      field: Everyday speech
      gloss: ankle
      source: {kind: coined}
      concept: ankle
    - form: pobyo
      class: n
      field: Everyday speech
      gloss: heel
      source: {kind: coined}
      concept: heel
    - form: pobeya
      class: n
      field: Everyday speech
      gloss: sole
      source: {kind: coined}
      concept: sole
    - form: pobela
      class: n
      field: Everyday speech
      gloss: toenail
      source: {kind: coined}
      concept: toenail
    - form: mbelema
      class: n
      field: Everyday speech
      gloss: muscle
      source: {kind: coined}
      concept: muscle
    - form: mbelemo
      class: n
      field: Everyday speech
      gloss: fat; the bodily tissue and its fatty substance
      source: {kind: coined}
      concept: fat
    - form: nyalelo
      class: n
      field: Everyday speech
      gloss: sweat (noun)
      source: {kind: coined}
      concept: sweat
    - form: lashewa
      class: n
      field: Everyday speech
      gloss: tears
      source: {kind: coined}
      concept: tears
    - form: labelo
      class: n
      field: Everyday speech
      gloss: saliva
      source: {kind: coined}
      concept: saliva
    - form: mbeloli
      class: n
      field: Everyday speech
      gloss: brain
      source: {kind: coined}
      concept: brain
    - form: mbeleya
      class: n
      field: Everyday speech
      gloss: lung
      source: {kind: coined}
      concept: lung
    - form: mbasele
      class: n
      field: Everyday speech
      gloss: liver
      source: {kind: coined}
      concept: liver
    - form: mbaseli
      class: n
      field: Everyday speech
      gloss: kidney
      source: {kind: coined}
      concept: kidney
    - form: mbolami
      class: n
      field: Everyday speech
      gloss: intestine
      source: {kind: coined}
      concept: intestine
    - form: nalabo
      class: n
      field: Everyday speech
      gloss: the genitals; the external reproductive parts
      source: {kind: coined}
      concept: genitals
    - form: nalabe
      class: n
      field: Everyday speech
      gloss: womb
      source: {kind: coined}
      concept: womb
    - form: nalabi
      class: n
      field: Everyday speech
      gloss: penis
      source: {kind: coined}
      concept: penis
    - form: nalabu
      class: n
      field: Everyday speech
      gloss: vagina
      source: {kind: coined}
      concept: vagina
    - form: nalabeya
      class: n
      field: Everyday speech
      gloss: testicle
      source: {kind: coined}
      concept: testicle
    - form: kemba
      class: n
      field: Everyday speech
      gloss: food
      source: {kind: coined}
      concept: food
    - form: kembe
      class: v
      field: Everyday speech
      gloss: to eat
      source: {kind: coined}
      concept: eat
    - form: mashe
      class: n
      field: Everyday speech
      gloss: a drink; a serving of liquid for drinking
      source: {kind: coined}
      concept: drink-noun
    - form: mashela
      class: v
      field: Everyday speech
      gloss: to drink
      source: {kind: coined}
      concept: drink-verb
    - form: mashelu
      class: n
      field: Everyday speech
      gloss: water
      source: {kind: coined}
      concept: water
    - form: helami
      class: n
      field: Everyday speech
      gloss: air
      source: {kind: coined}
      concept: air
    - form: helamo
      class: n
      field: Everyday speech
      gloss: breath
      source: {kind: coined}
      concept: breath
    - form: helame
      class: v
      field: Everyday speech
      gloss: to breathe; to draw air into and let air out of the lungs
      source: {kind: coined}
      concept: breathe
    - form: lembo
      class: n
      field: Everyday speech
      gloss: sleep
      source: {kind: coined}
      concept: sleep-noun
    - form: lembe
      class: v
      field: Everyday speech
      gloss: to sleep
      source: {kind: coined}
      concept: sleep-verb
    - form: mbonya
      class: n
      field: Everyday speech
      gloss: urine
      source: {kind: coined}
      concept: urine
    - form: mbonye
      class: v
      field: Everyday speech
      gloss: to urinate
      source: {kind: coined}
      concept: urinate
    - form: mbonyo
      class: n
      field: Everyday speech
      gloss: dung
      source: {kind: coined}
      concept: dung
    - form: mbonyi
      class: v
      field: Everyday speech
      gloss: to defecate
      source: {kind: coined}
      concept: defecate
    - form: ndeleinya
      class: n
      field: Everyday speech
      gloss: warmth; the quality of being warm, ndele with the existing quality ending -inya
      source: {kind: coined}
      concept: warmth
      built: [ndele, -inya]
    - form: kabeyo
      class: n
      field: Everyday speech
      gloss: shelter; protection against exposure, and a place providing it
      source: {kind: coined}
      concept: shelter
    - form: kembi
      class: n
      field: Everyday speech
      gloss: hunger; bodily need for food
      source: {kind: coined}
      concept: hunger
    - form: namela kemba
      class: v
      field: Everyday speech
      gloss: to be hungry; to want food because the body needs nourishment
      source: {kind: coined}
      concept: hungry
    - form: mashili
      class: n
      field: Everyday speech
      gloss: thirst; bodily need to drink
      source: {kind: coined}
      concept: thirst
    - form: namela mashe
      class: v
      field: Everyday speech
      gloss: to be thirsty; to want a drink because the body needs fluid, rather than merely prefer a particular beverage
      source: {kind: coined}
      concept: thirsty
    - form: helameya
      class: v
      field: Everyday speech
      gloss: to inhale; to draw air into the lungs
      source: {kind: coined}
      concept: inhale
    - form: helamewa
      class: v
      field: Everyday speech
      gloss: to exhale; to let air out of the lungs
      source: {kind: coined}
      concept: exhale
    - form: helabo
      class: v
      field: Everyday speech
      gloss: to suffocate; to be unable to obtain breathable air because air is absent or breathing is obstructed
      source: {kind: coined}
      concept: suffocate
    - form: lembeya
      class: v
      field: Everyday speech
      gloss: to wake; to cease sleeping
      source: {kind: coined}
      concept: wake
    - form: lembeye
      class: adj
      field: Everyday speech
      gloss: awake
      source: {kind: coined}
      concept: awake
    - form: lembomi
      class: n
      field: Everyday speech
      gloss: a dream; an experience during sleep, not a prediction by itself
      source: {kind: coined}
      concept: dream
    - form: lembela
      class: n
      field: Everyday speech
      gloss: rest; a pause in exertion that permits recovery
      source: {kind: coined}
      concept: rest
    - form: lembele
      class: adj
      field: Everyday speech
      gloss: tired
      source: {kind: coined}
      concept: tired
    - form: nyalele
      class: v
      field: Everyday speech
      gloss: to sweat
      source: {kind: coined}
      concept: sweat-verb
    - form: ndela
      class: n
      field: Everyday speech
      gloss: heat
      source: {kind: coined}
      concept: heat
    - form: zheleinya
      class: n
      field: Everyday speech
      gloss: cold; the temperature condition, zhele with the existing quality ending -inya
      source: {kind: coined}
      concept: cold-noun
      built: [zhele, -inya]
    - form: ndelu
      class: adj
      field: Everyday speech
      gloss: hot
      source: {kind: coined}
      concept: hot
    - form: ndele
      class: adj
      field: Everyday speech
      gloss: warm; moderately hot, pleasantly or undesirably as context determines
      source: {kind: coined}
      concept: warm
    - form: zheli
      class: adj
      field: Everyday speech
      gloss: cool; moderately cold
      source: {kind: coined}
      concept: cool
    - form: zhela
      class: v
      field: Everyday speech
      gloss: to freeze; to turn to ice or become frozen
      source: {kind: coined}
      concept: freeze
    - form: ndelawe
      class: v
      field: Everyday speech
      gloss: to burn; to be consumed or damaged by fire or heat
      source: {kind: coined}
      concept: burn
    - form: nzame
      class: n
      field: Everyday speech
      gloss: safety
      source: {kind: coined}
      concept: safety
    - form: nzami
      class: n
      field: Everyday speech
      gloss: danger
      source: {kind: coined}
      concept: danger
    - form: nzameli
      class: n
      field: Everyday speech
      gloss: protection; guarding someone or something against harm, not restricted to a member of the Pact
      source: {kind: coined}
      concept: protection
    - form: nalabiya
      class: n
      field: Everyday speech
      gloss: sex; sexual intercourse
      source: {kind: coined}
      concept: sex
    - form: nalabemi
      class: v
      field: Everyday speech
      gloss: to conceive; to become pregnant, distinct from forming a plan
      source: {kind: coined}
      concept: conceive
    - form: nalabemo
      class: n
      field: Everyday speech
      gloss: pregnancy
      source: {kind: coined}
      concept: pregnancy
    - form: nalabela
      class: adj
      field: Everyday speech
      gloss: pregnant
      source: {kind: coined}
      concept: pregnant
    - form: nyalebo
      class: n
      field: Everyday speech
      gloss: birth; the event of being born
      source: {kind: coined}
      concept: birth
    - form: nyalebe
      class: v
      field: Everyday speech
      gloss: to give birth; the birthing parent's act
      source: {kind: coined}
      concept: give-birth
    - form: nyabema
      class: v
      field: Everyday speech
      gloss: to nurse a child; to feed a child at the breast
      source: {kind: coined}
      concept: nurse
    - form: nyabela
      class: v
      field: Everyday speech
      gloss: to grow; to increase in size or develop toward maturity
      source: {kind: coined}
      concept: grow
    - form: nkulemi
      class: v
      field: Everyday speech
      gloss: to age; to grow older, an individual ordinary verb beside the existing elder word nkulu
      source: {kind: coined}
      concept: [age-verb, aging]
    - form: nyendelo
      class: n
      field: Everyday speech
      gloss: death
      source: {kind: coined}
      concept: death
    - form: nyendele
      class: adj
      field: Everyday speech
      gloss: dead
      source: {kind: coined}
      concept: dead
    - form: mbelele
      class: adj
      field: Everyday speech
      gloss: healthy; having a well-functioning body, an individually cited adjective related to mbele and le
      source: {kind: coined}
      concept: healthy
    - form: mbeleshe
      class: adj
      field: Everyday speech
      gloss: sick; ill
      source: {kind: coined}
      concept: sick
    - form: mbashele
      class: adj
      field: Everyday speech
      gloss: injured; wounded
      source: {kind: coined}
      concept: injured
    - form: ndabele
      class: adj
      field: Everyday speech
      gloss: Strong
      source: {kind: coined}
      concept: strong
    - form: ndabeshe
      class: adj
      field: Everyday speech
      gloss: weak
      source: {kind: coined}
      concept: weak
    - form: lembele ndewa
      class: adj
      field: Everyday speech
      gloss: exhausted; tired to the point that one's strength is spent
      source: {kind: coined}
      concept: exhausted
    - form: kembela
      class: adj
      field: Everyday speech
      gloss: sated; full after eating or drinking
      source: {kind: coined}
      concept: sated
    - form: zhele
      class: adj
      field: Everyday speech
      gloss: cold in temperature
      source: {kind: coined}
      concept: cold
    - form: ndelu mbeyi mbelesho
      class: adj
      field: Everyday speech
      gloss: feverish; hot with illness, not merely hot from weather or exertion
      source: {kind: coined}
      concept: feverish
    - form: mbasheli
      class: n
      field: Everyday speech
      gloss: Pain
      source: {kind: coined}
      concept: pain
    - form: mbashe
      class: v
      field: Everyday speech
      gloss: to hurt someone; to cause pain or injury to the object
      source: {kind: coined}
      concept: hurt-verb
    - form: mbashemi
      class: n
      field: Everyday speech
      gloss: an ache; persistent dull bodily pain
      source: {kind: coined}
      concept: ache
    - form: mbasheya
      class: v
      field: Everyday speech
      gloss: to suffer; to undergo pain or distress
      source: {kind: coined}
      concept: suffer
    - form: mbaseya
      class: v
      field: Everyday speech
      gloss: Bleed
      source: {kind: coined}
      concept: bleed
    - form: mbeleme
      class: v
      field: Everyday speech
      gloss: to heal; to restore an injured body or cause a wound to close
      source: {kind: coined}
      concept: heal
    - form: mbelewo
      class: v
      field: Everyday speech
      gloss: to recover; to return toward health after illness or injury
      source: {kind: coined}
      concept: recover
    - form: nyeme lasheinya
      class: part
      field: Everyday speech
      gloss: blind; without sight as a bodily incapacity, not merely unable to see one hidden object
      source: {kind: coined}
      concept: blind
    - form: nyeme nyeshiinya
      class: part
      field: Everyday speech
      gloss: deaf; without hearing as a bodily incapacity, not simply inattentive
      source: {kind: coined}
      concept: deaf
    - form: pobeshi
      class: adj
      field: Everyday speech
      gloss: lame; having an impairment of the legs or feet that hinders walking
      source: {kind: coined}
      concept: lame
    - form: nyebele
      class: adj
      field: Everyday speech
      gloss: Alive
      source: {kind: coined}
      concept: alive
    - form: nyabeye
      class: adj
      field: Everyday speech
      gloss: conscious; awake to one's surroundings and able to have sensory awareness
      source: {kind: coined}
      concept: conscious
    - form: shewe nyabeye
      class: adj
      field: Everyday speech
      gloss: unconscious; lacking sensory awareness of one's surroundings
      source: {kind: coined}
      concept: unconscious
    - form: nyebelo
      class: adj
      field: Everyday speech
      gloss: Young
      source: {kind: coined}
      concept: young
    - form: nkuleli
      class: adj
      field: Everyday speech
      gloss: old in age, of a living being
      source: {kind: coined}
      concept: old
    - form: mbashelo
      class: v
      field: Everyday speech
      gloss: to hurt; to experience bodily pain, rather than cause it in another
      source: {kind: coined}
      concept: hurt-pain
    - form: mbelesho
      class: n
      field: Everyday speech
      gloss: illness; the condition of being sick
      source: {kind: coined}
    - form: mbeyi
      class: part
      field: Everyday speech
      gloss: with; together with the following person or thing, or using the named instrument
      source: {kind: coined}
    - form: lasheinya
      class: n
      field: Everyday speech
      gloss: sight; the faculty of seeing, rather than one thing seen; lashe with the quality ending -inya
      source: {kind: coined}
      built: [lashe, -inya]
    - form: nyeshiinya
      class: n
      field: Everyday speech
      gloss: hearing; the faculty of hearing, rather than one sound; nyeshi with the quality ending -inya
      source: {kind: coined}
      built: [nyeshi, -inya]
    - form: namela
      class: v
      field: Everyday speech
      gloss: to want; to desire the object or named action
      source: {kind: coined}
      concept: want
    - form: pando
      class: adj
      field: Everyday speech
      gloss: male; of the male sex
      source: {kind: coined}
    - form: pande
      class: adj
      field: Everyday speech
      gloss: female; of the female sex
      source: {kind: coined}
    - form: mbeleli
      class: adj
      field: Everyday speech
      gloss: adult; physically and socially mature, rather than a child
      source: {kind: coined}
    - form: nyelabo
      class: n
      field: Everyday speech
      gloss: a sibling; a person sharing a parent
      source: {kind: coined}
    - form: nyelabi
      class: n
      field: Everyday speech
      gloss: a grandparent; a parent's parent
      source: {kind: coined}
      concept: grandparent
    - form: nyelabu
      class: n
      field: Everyday speech
      gloss: a parent's sibling
      source: {kind: coined}
    - form: nyelabeyo
      class: n
      field: Everyday speech
      gloss: a sibling's child
      source: {kind: coined}
    - form: nalewelo
      class: n
      field: Everyday speech
      gloss: a spouse; a married partner
      source: {kind: coined}
      concept: spouse
    - form: nyebali
      class: n
      field: Everyday speech
      gloss: a child; a young person, male or female
      source: {kind: coined}
      concept: child
    - form: nyebalo
      class: n
      field: Everyday speech
      gloss: a parent; a father or mother
      source: {kind: coined}
      concept: parent
    - form: nyelomi
      class: n
      field: Everyday speech
      gloss: a family; the people joined by kinship or household life
      source: {kind: coined}
      concept: family
    - form: dala
      class: n
      field: Everyday speech
      gloss: a mother
      source: {kind: coined}
      concept: mother
    - form: nyebali pando
      class: n
      field: Everyday speech
      gloss:
        - a son; a person's male child, including an adult son
        - a boy; a young male person; the same ordinary child-male phrase also has the conventional relationship sense son, including an adult son when a parent is specified
      source: {kind: coined}
      concept: [son, boy]
    - form: nyelabo pando
      class: n
      field: Everyday speech
      gloss: a brother; a male sibling
      source: {kind: coined}
      concept: brother
    - form: nyelabo pande
      class: n
      field: Everyday speech
      gloss: a sister; a female sibling
      source: {kind: coined}
      concept: sister
    - form: nyelabi pande
      class: n
      field: Everyday speech
      gloss: a grandmother; a female grandparent
      source: {kind: coined}
      concept: grandmother
    - form: nyelabi pando
      class: n
      field: Everyday speech
      gloss: a grandfather; a male grandparent
      source: {kind: coined}
      concept: grandfather
    - form: nyelobya
      class: n
      field: Everyday speech
      gloss: a grandchild; a child of one's child
      source: {kind: coined}
      concept: grandchild
    - form: nyelabu pando
      class: n
      field: Everyday speech
      gloss: an uncle; a male sibling of a parent
      source: {kind: coined}
      concept: uncle
    - form: nyelabu pande
      class: n
      field: Everyday speech
      gloss: an aunt; a female sibling of a parent
      source: {kind: coined}
      concept: aunt
    - form: nyelabemi
      class: n
      field: Everyday speech
      gloss: a cousin; a child of a parent's sibling
      source: {kind: coined}
      concept: cousin
    - form: nalewelo pando
      class: n
      field: Everyday speech
      gloss: a husband; a male spouse
      source: {kind: coined}
      concept: husband
    - form: nalewelo pande
      class: n
      field: Everyday speech
      gloss: a wife; a female spouse
      source: {kind: coined}
      concept: wife
    - form: nyelonda
      class: n
      field: Everyday speech
      gloss: an ancestor; a relative in an earlier generation from whom one descends
      source: {kind: coined}
      concept: ancestor
    - form: nyelonde
      class: n
      field: Everyday speech
      gloss: a descendant; a person in a later generation descended from another
      source: {kind: coined}
      concept: descendant
    - form: nyebali nyeme nyebalo
      class: n
      field: Everyday speech
      gloss: an orphan; a child without a living parent, with nyeme naming the absence of a living parent rather than denying ancestry
      source: {kind: coined}
      concept: orphan
    - form: nalewelo pande nyeme nalewelo
      class: n
      field: Everyday speech
      gloss: a widow; a woman whose spouse has died, conventionally a female spouse without a living spouse
      source: {kind: coined}
      concept: widow
    - form: nyelabeyo pando
      class: n
      field: Everyday speech
      gloss: a nephew; a male child of one's sibling
      source: {kind: coined}
      concept: nephew
    - form: nyelabeyo pande
      class: n
      field: Everyday speech
      gloss: a niece; a female child of one's sibling
      source: {kind: coined}
      concept: niece
    - form: nalewela
      class: n
      field: Everyday speech
      gloss: marriage; the recognized union of spouses, distinct from kinship generally
      source: {kind: coined}
      concept: marriage
    - form: naleweli
      class: v
      field: Everyday speech
      gloss: to marry; to enter marriage with the person named as object
      source: {kind: coined}
      concept: marry
    - form: nyelondelo
      class: n
      field: Everyday speech
      gloss: a lineage; a line of descent traced through generations
      source: {kind: coined}
      concept: lineage
    - form: nalewelo pando nyeme nalewelo
      class: n
      field: Everyday speech
      gloss: a widower; a man whose spouse has died, conventionally a male spouse without a living spouse
      source: {kind: coined}
      concept: widower
    - form: nzelambi
      class: n
      field: Everyday speech
      gloss: an enemy; a person or group in hostility to another
      source: {kind: coined}
      concept: enemy
    - form: nyebeshi
      class: n
      field: Everyday speech
      gloss: a stranger; a person not known to the speaker or community
      source: {kind: coined}
      concept: stranger
    - form: nyebesha
      class: n
      field: Everyday speech
      gloss: a neighbor; a person living nearby
      source: {kind: coined}
      concept: neighbor
    - form: ndeshabo
      class: n
      field: Everyday speech
      gloss: a guest; a person received in another's home or company
      source: {kind: coined}
      concept: guest
    - form: ndeshabe
      class: n
      field: Everyday speech
      gloss: a host; a person receiving a guest
      source: {kind: coined}
      concept: host
    - form: ndalemi
      class: n
      field: Everyday speech
      gloss: a leader; a person directing or guiding a group, without implying a king or permanent central office
      source: {kind: coined}
      concept: leader
    - form: ndalemo
      class: n
      field: Everyday speech
      gloss: a follower; a person following a leader, practice or teaching
      source: {kind: coined}
      concept: follower
    - form: ndaleshi
      class: n
      field: Everyday speech
      gloss: a servant; a person serving another in household or work duties
      source: {kind: coined}
      concept: servant
    - form: ndaleyo
      class: n
      field: Everyday speech
      gloss: a master; a person exercising authority over the stated household, craft or service relationship
      source: {kind: coined}
      concept: master
    - form: nyeshemiya
      class: n
      field: Everyday speech
      gloss: a teacher; a person who instructs another
      source: {kind: coined}
      concept: teacher
    - form: nyeshemiye
      class: n
      field: Everyday speech
      gloss: a student; a person learning from instruction
      source: {kind: coined}
      concept: student
    - form: lembabo
      class: n
      field: Everyday speech
      gloss: a chair; a single-person seat with a back
      source: {kind: coined}
      concept: chair
    - form: lembabe
      class: n
      field: Everyday speech
      gloss: a table; a raised surface for placing food or work
      source: {kind: coined}
      concept: table
    - form: lembabu
      class: n
      field: Everyday speech
      gloss: a bed; a place or structure prepared for sleeping
      source: {kind: coined}
      concept: bed
    - form: kabolwe
      class: n
      field: Everyday speech
      gloss: a floor; the surface walked upon inside a building
      source: {kind: coined}
      concept: floor
    - form: kabolya
      class: n
      field: Everyday speech
      gloss: a wall; an upright enclosing or dividing structure
      source: {kind: coined}
      concept: wall
    - form: kabolye
      class: n
      field: Everyday speech
      gloss: a roof; the outside covering over a building
      source: {kind: coined}
      concept: roof
    - form: kaboma
      class: n
      field: Everyday speech
      gloss: a house; an abode; a dwelling that can be someone's home
      source: {kind: coined}
      concept: abode
    - form: ndemba
      class: n
      field: Everyday speech
      gloss: fire; burning heat and light, distinct from the fireplace
      source: {kind: coined}
      concept: fire
    - form: ndembalo
      class: n
      field: Everyday speech
      gloss: a hearth; the physical place prepared for a household fire
      source: {kind: coined}
      concept: hearth
    - form: kabole
      class: n
      field: Everyday speech
      gloss: a door; the movable closure of an entrance
      source: {kind: coined}
      concept: door
    - form: kabolu
      class: n
      field: Everyday speech
      gloss: a lock; a device securing a closure
      source: {kind: coined}
      concept: lock
    - form: kabolumi
      class: n
      field: Everyday speech
      gloss: a key; an implement that opens a lock
      source: {kind: coined}
      concept: key
    - form: kabeli
      class: n
      field: Everyday speech
      gloss: a window; an opening in a wall admitting light or air
      source: {kind: coined}
      concept: window
    - form: kabelimi
      class: n
      field: Everyday speech
      gloss: shutters; movable covers closing a window
      source: {kind: coined}
      concept: shutters
    - form: kabe
      class: n
      field: Everyday speech
      gloss: a cup; a drinking vessel
      source: {kind: coined}
      concept: cup
    - form: kabeya
      class: n
      field: Everyday speech
      gloss: a bowl; a rounded open vessel
      source: {kind: coined}
      concept: bowl
    - form: labenda
      class: n
      field: Everyday speech
      gloss: a knife; a cutting blade with a handle
      source: {kind: coined}
      concept: knife
    - form: labende
      class: n
      field: Everyday speech
      gloss: a spoon; a small scooped eating implement
      source: {kind: coined}
      concept: spoon
    - form: kambu
      class: n
      field: Everyday speech
      gloss: a pot; a vessel for cooking or holding material
      source: {kind: coined}
      concept: pot
    - form: ndembeli
      class: n
      field: Everyday speech
      gloss: a lamp; a device holding a source of light
      source: {kind: coined}
      concept: lamp
    - form: nyabola
      class: n
      field: Everyday speech
      gloss: cloth; woven or otherwise worked textile material
      source: {kind: coined}
      concept: cloth
    - form: nyaboli
      class: n
      field: Everyday speech
      gloss: clothes; garments worn on the body
      source: {kind: coined}
      concept: clothes
    - form: kabomi
      class: n
      field: Everyday speech
      gloss: a room; an enclosed space inside a building
      source: {kind: coined}
      concept: room
    - form: kabolyo
      class: n
      field: Everyday speech
      gloss: a ceiling; the overhead inside surface of a room
      source: {kind: coined}
      concept: ceiling
    - form: lembabi
      class: n
      field: Everyday speech
      gloss: a seat; a place or support for sitting
      source: {kind: coined}
      concept: seat
    - form: lembabyo
      class: n
      field: Everyday speech
      gloss: a bench; an extended seat for several people
      source: {kind: coined}
      concept: bench
    - form: kambuli
      class: n
      field: Everyday speech
      gloss: a jar; a storage vessel with an opening at the top
      source: {kind: coined}
      concept: jar
    - form: kambule
      class: n
      field: Everyday speech
      gloss: a bottle; a vessel with a narrow neck
      source: {kind: coined}
      concept: bottle
    - form: nyabomba
      class: n
      field: Everyday speech
      gloss: a basket; a container made from interwoven strips or fibers
      source: {kind: coined}
      concept: basket
    - form: nyabombe
      class: n
      field: Everyday speech
      gloss: a bag; a flexible container for carrying things
      source: {kind: coined}
      concept: bag
    - form: ndambeli
      class: n
      field: Everyday speech
      gloss: a hammer; a tool for striking with a heavy head
      source: {kind: coined}
      concept: hammer
    - form: nyabenda
      class: n
      field: Everyday speech
      gloss: rope; a stout length of twisted or braided strands
      source: {kind: coined}
      concept: rope
    - form: nyabenu
      class: n
      field: Everyday speech
      gloss: cord; a slender length of twisted or braided strands
      source: {kind: coined}
      concept: cord
    - form: nyabendi
      class: n
      field: Everyday speech
      gloss: a needle; a pointed implement for passing thread through material
      source: {kind: coined}
      concept: needle
    - form: ndembala
      class: n
      field: Everyday speech
      gloss: a flame; a tongue of visible burning gas
      source: {kind: coined}
      concept: flame
    - form: ndembila
      class: n
      field: Everyday speech
      gloss: smoke; airborne particles and gases from burning
      source: {kind: coined}
      concept: smoke
    - form: ndembilo
      class: n
      field: Everyday speech
      gloss: ash; powdery residue of burning
      source: {kind: coined}
      concept: ash
    - form: ndembulu
      class: n
      field: Everyday speech
      gloss: coal; carbon-rich fuel or a solid glowing remnant of a fire
      source: {kind: coined}
      concept: coal
    - form: ndembela
      class: n
      field: Everyday speech
      gloss: a torch; a portable burning light on a handle
      source: {kind: coined}
      concept: torch
    - form: ndembele
      class: n
      field: Everyday speech
      gloss: a candle; a wick held in solid fuel for light
      source: {kind: coined}
      concept: candle
    - form: nyabolo
      class: n
      field: Everyday speech
      gloss: a garment; one item of clothing
      source: {kind: coined}
      concept: garment
    - form: nyabolo mbalo
      class: n
      field: Everyday speech
      gloss: a shirt; a garment covering the chest and upper body, with mbalo naming the covered region
      source: {kind: coined}
      concept: shirt
    - form: nyabolo mbora
      class: n
      field: Everyday speech
      gloss: a cloak; a loose outer garment over the back and shoulders, with mbora naming the covered region
      source: {kind: coined}
      concept: cloak
    - form: nyabolwe
      class: n
      field: Everyday speech
      gloss: a belt; a band worn around the waist
      source: {kind: coined}
      concept: belt
    - form: nyabopwe
      class: n
      field: Everyday speech
      gloss: a shoe; footwear covering a foot
      source: {kind: coined}
      concept: shoe
    - form: nyabopwi
      class: n
      field: Everyday speech
      gloss: a boot; footwear covering the foot and extending above the ankle
      source: {kind: coined}
      concept: boot
    - form: kaboleni
      class: n
      field: Everyday speech
      gloss: a gate; a movable closure in an enclosure or boundary
      source: {kind: coined}
      concept: gate
    - form: kabolena
      class: n
      field: Everyday speech
      gloss: a barrier; something obstructing passage
      source: {kind: coined}
      concept: barrier
    - form: ngabolu
      class: n
      field: Everyday speech
      gloss: wood; the solid material of trees
      source: {kind: coined}
      concept: wood
    - form: ngabeli
      class: n
      field: Everyday speech
      gloss: stone; hard mineral material
      source: {kind: coined}
      concept: stone
    - form: ngabelu
      class: n
      field: Everyday speech
      gloss: metal; workable mineral material such as iron or copper
      source: {kind: coined}
      concept: metal
    - form: ngabeya
      class: n
      field: Everyday speech
      gloss: clay; fine earth that can be shaped while wet
      source: {kind: coined}
      concept: clay
    - form: nyabweya
      class: n
      field: Everyday speech
      gloss: leather; prepared animal hide
      source: {kind: coined}
      concept: leather
    - form: nyabweli
      class: n
      field: Everyday speech
      gloss: wool; the soft fleece fiber of a sheep used for thread or cloth, not hair of the human head
      source: {kind: coined}
      concept: wool
    - form: nyabendiwa
      class: n
      field: Everyday speech
      gloss: thread; a fine strand used in sewing or weaving
      source: {kind: coined}
      concept: thread
    - form: ngabola
      class: n
      field: Everyday speech
      gloss: earth; the mineral substance of the ground
      source: {kind: coined}
      concept: earth
    - form: ngaboli
      class: n
      field: Everyday speech
      gloss: soil; earth in which plants can grow
      source: {kind: coined}
      concept: soil
    - form: ngabelo
      class: n
      field: Everyday speech
      gloss: a rock; a mass or piece of stone
      source: {kind: coined}
      concept: rock
    - form: ngabesha
      class: n
      field: Everyday speech
      gloss: sand; loose small grains of mineral material
      source: {kind: coined}
      concept: sand
    - form: ngabeshi
      class: n
      field: Everyday speech
      gloss: mud; wet earth
      source: {kind: coined}
      concept: mud
    - form: ngabesho
      class: n
      field: Everyday speech
      gloss: dust; fine dry particles lying loose or carried in air
      source: {kind: coined}
      concept: dust
    - form: ngabolo
      class: n
      field: Everyday speech
      gloss: land; ground or territory, whether owned or unowned, as distinct from water
      source: {kind: coined}
      concept: land
    - form: ngabyela
      class: n
      field: Everyday speech
      gloss: a mountain; a high natural rise of land
      source: {kind: coined}
      concept: mountain
    - form: ngabyeli
      class: n
      field: Everyday speech
      gloss: a hill; a natural rise of land smaller than a mountain
      source: {kind: coined}
      concept: hill
    - form: ngabyelo
      class: n
      field: Everyday speech
      gloss: a valley; low ground between higher land
      source: {kind: coined}
      concept: valley
    - form: ngabyolu
      class: n
      field: Everyday speech
      gloss: a plain; a broad flat or gently rolling area of open land
      source: {kind: coined}
      concept: plain-landform
    - form: ngalebo
      class: n
      field: Everyday speech
      gloss: a forest; a large area of closely growing trees
      source: {kind: coined}
      concept: forest
    - form: ngalebi
      class: n
      field: Everyday speech
      gloss: a field; an open area of land, cultivated or available for cultivation
      source: {kind: coined}
      concept: field
    - form: ngabyoma
      class: n
      field: Everyday speech
      gloss: a cave; a natural cavity in rock or earth
      source: {kind: coined}
      concept: cave
    - form: mashelela
      class: n
      field: Everyday speech
      gloss: a river; a natural flowing watercourse
      source: {kind: coined}
      concept: river
    - form: masheleli
      class: n
      field: Everyday speech
      gloss: a stream; a small flowing watercourse
      source: {kind: coined}
      concept: stream
    - form: mashelelo
      class: n
      field: Everyday speech
      gloss: a lake; a substantial inland body of water
      source: {kind: coined}
      concept: lake
    - form: mashelami
      class: n
      field: Everyday speech
      gloss: the sea; a large body of salt water
      source: {kind: coined}
      concept: sea
    - form: mashelamo
      class: n
      field: Everyday speech
      gloss: an ocean; the broad connected sea beyond coastal waters
      source: {kind: coined}
      concept: ocean
    - form: mashelwe
      class: n
      field: Everyday speech
      gloss: a shore; the land bordering a body of water
      source: {kind: coined}
      concept: shore
    - form: lusheyemi
      class: n
      field: Everyday speech
      gloss: rain; water falling from clouds, an independently cited ordinary noun related to the old bound name stem lushey-
      source: {kind: coined}
      concept: rain
    - form: lusheyela
      class: n
      field: Everyday speech
      gloss: snow; falling or settled flakes of frozen water
      source: {kind: coined}
      concept: snow
    - form: mashezhe
      class: n
      field: Everyday speech
      gloss: ice; frozen water
      source: {kind: coined}
      concept: ice
    - form: helabyo
      class: n
      field: Everyday speech
      gloss: the sky; the visible expanse overhead
      source: {kind: coined}
      concept: sky
    - form: shembo
      class: n
      field: Everyday speech
      gloss: the sun; the daylight-giving body in the sky, distinct from the Great Brightness as a religious source
      source: {kind: coined}
      concept: sun
    - form: shembi
      class: n
      field: Everyday speech
      gloss: the moon; the bright body seen changing shape over the month
      source: {kind: coined}
      concept: moon
    - form: shembu
      class: n
      field: Everyday speech
      gloss: a star; a distant point of light in the night sky
      source: {kind: coined}
      concept: star
    - form: helabya
      class: n
      field: Everyday speech
      gloss: a cloud; a visible mass of droplets or ice in the sky
      source: {kind: coined}
      concept: cloud
    - form: helabwa
      class: n
      field: Everyday speech
      gloss: wind; air moving through the surroundings
      source: {kind: coined}
      concept: wind
    - form: helabwi
      class: n
      field: Everyday speech
      gloss: a storm; strong disturbed weather with wind and often rain
      source: {kind: coined}
      concept: storm
    - form: helabwu
      class: n
      field: Everyday speech
      gloss: thunder; the loud sound accompanying lightning
      source: {kind: coined}
      concept: thunder
    - form: shemela
      class: n
      field: Everyday speech
      gloss: lightning; a sudden electrical flash in a storm
      source: {kind: coined}
      concept: lightning
    - form: ngaleya
      class: n
      field: Everyday speech
      gloss: a plant; a living rooted growth
      source: {kind: coined}
      concept: plant
    - form: ngaleye
      class: n
      field: Everyday speech
      gloss: a tree; a woody plant with a substantial trunk
      source: {kind: coined}
      concept: tree
    - form: ngaleyeli
      class: n
      field: Everyday speech
      gloss: a leaf; a thin growth from a plant used to receive light
      source: {kind: coined}
      concept: leaf
    - form: ngaleyemi
      class: n
      field: Everyday speech
      gloss: a root; the part of a plant anchoring it and drawing from the ground
      source: {kind: coined}
      concept: root
    - form: ngaleyemo
      class: n
      field: Everyday speech
      gloss: a branch; a woody limb of a tree or shrub
      source: {kind: coined}
      concept: branch
    - form: ngaleyela
      class: n
      field: Everyday speech
      gloss: a flower; the blossom of a plant
      source: {kind: coined}
      concept: flower
    - form: ngaleyelo
      class: n
      field: Everyday speech
      gloss: a fruit; the seed-bearing growth of a plant
      source: {kind: coined}
      concept: fruit
    - form: ngaleyebu
      class: n
      field: Everyday speech
      gloss: a seed; a reproductive grain or body from which a plant grows
      source: {kind: coined}
      concept: seed
    - form: ngalebya
      class: n
      field: Everyday speech
      gloss: grass; narrow-leaved low plants growing together
      source: {kind: coined}
      concept: grass
    - form: nyangeli
      class: n
      field: Everyday speech
      gloss: an animal; a living creature other than a plant, including people where context calls for that wider category
      source: {kind: coined}
      concept: animal
    - form: nyangelo
      class: n
      field: Everyday speech
      gloss: a beast; a land animal, especially a large wild one
      source: {kind: coined}
      concept: beast
    - form: ngonela
      class: n
      field: Everyday speech
      gloss: a bird; an independently cited ordinary noun related to the old bound eagle-name stem ngon-, with the broader bird sense confined to this new word
      source: {kind: coined}
      concept: bird
    - form: mashengo
      class: n
      field: Everyday speech
      gloss: a fish; an animal that lives and breathes in water by gills
      source: {kind: coined}
      concept: fish
    - form: nyangeshi
      class: n
      field: Everyday speech
      gloss: an insect; a small six-legged animal
      source: {kind: coined}
      concept: insect
    - form: nyangeshe
      class: n
      field: Everyday speech
      gloss: a worm; a slender soft-bodied crawling animal
      source: {kind: coined}
      concept: worm
    - form: masheyo
      class: adj
      field: Everyday speech
      gloss: wet; bearing or soaked with liquid
      source: {kind: coined}
      concept: wet
    - form: masheye
      class: adj
      field: Everyday speech
      gloss: dry; lacking surface moisture
      source: {kind: coined}
      concept: dry
    - form: shembe
      class: adj
      field: Everyday speech
      gloss: bright; giving or reflecting much light
      source: {kind: coined}
      concept: bright
    - form: shembeshe
      class: adj
      field: Everyday speech
      gloss: dark; lacking light
      source: {kind: coined}
      concept: dark
    - form: nyeme helabya
      class: part
      field: Everyday speech
      gloss: "clear weather; without clouds, used of the sky: helabyo lome nyeme helabya, the sky is without clouds"
      source: {kind: coined}
      concept: clear-weather
    - form: helabya ndawe
      class: n
      field: Everyday speech
      gloss: cloudy weather; many clouds in the sky; the full sky report helabyo lomeli helabya ndawe means the sky has many clouds
      source: {kind: coined}
      concept: cloudy
    - form: nyabolawe
      class: n
      field: Everyday speech
      gloss: north; the northern direction
      source: {kind: coined}
      concept: north
    - form: nyaboliwe
      class: n
      field: Everyday speech
      gloss: south; the southern direction
      source: {kind: coined}
      concept: south
    - form: nyabolowe
      class: n
      field: Everyday speech
      gloss: east; the eastern direction
      source: {kind: coined}
      concept: east
    - form: nyaboluwe
      class: n
      field: Everyday speech
      gloss: west; the western direction
      source: {kind: coined}
      concept: west
    - form: ndawe
      class: adj
      field: Everyday speech
      gloss: many; a large count of the things named
      source: {kind: coined}
      concept: many
    - form: ndawa
      class: num
      field: Everyday speech
      gloss: one; the cardinal number one
      source: {kind: coined}
      concept: one
    - form: ndawi
      class: num
      field: Everyday speech
      gloss: two; the cardinal number two
      source: {kind: coined}
      concept: two
    - form: ndawo
      class: num
      field: Everyday speech
      gloss: three; the cardinal number three
      source: {kind: coined}
      concept: three
    - form: ndawu
      class: num
      field: Everyday speech
      gloss: four; the cardinal number four
      source: {kind: coined}
      concept: four
    - form: ndaweya
      class: num
      field: Everyday speech
      gloss: five; the cardinal number five
      source: {kind: coined}
      concept: five
    - form: ndaweye
      class: num
      field: Everyday speech
      gloss: six; the cardinal number six
      source: {kind: coined}
      concept: six
    - form: ndaweyi
      class: num
      field: Everyday speech
      gloss: seven; the cardinal number seven
      source: {kind: coined}
      concept: seven
    - form: ndaweyo
      class: num
      field: Everyday speech
      gloss: eight; the cardinal number eight
      source: {kind: coined}
      concept: eight
    - form: ndaweyu
      class: num
      field: Everyday speech
      gloss: nine; the cardinal number nine
      source: {kind: coined}
      concept: nine
    - form: ndawila
      class: num
      field: Everyday speech
      gloss: ten; the cardinal number ten
      source: {kind: coined}
      concept: ten
    - form: ndawile
      class: num
      field: Everyday speech
      gloss: twenty; the cardinal number twenty
      source: {kind: coined}
      concept: twenty
    - form: ndawili
      class: num
      field: Everyday speech
      gloss: a hundred; the cardinal number one hundred
      source: {kind: coined}
      concept: hundred
    - form: ndawilo
      class: num
      field: Everyday speech
      gloss: a thousand; the cardinal number one thousand
      source: {kind: coined}
      concept: thousand
    - form: ndeleyo
      class: n
      field: Everyday speech
      gloss: a position; the spatial place occupied by a body or thing; also a numbered place in an ordered sequence
      source: {kind: coined}
      concept: position
    - form: ndebyo
      class: part
      field: Everyday speech
      gloss: in; at or inside the following place, time or stated position
      source: {kind: coined}
      concept: in
    - form: ndewi
      class: adj
      field: Everyday speech
      gloss: few; a small count of the things named
      source: {kind: coined}
      concept: few
    - form: ndewo
      class: num
      field: Everyday speech
      gloss: zero; no units in a stated count
      source: {kind: coined}
      concept: zero
    - form: ndewola
      class: n
      field: Everyday speech
      gloss: none; nothing; no person or thing in the relevant set
      source: {kind: coined}
      concept: none
    - form: ndayela
      class: adj
      field: Everyday speech
      gloss: more; a greater number or amount, with the comparison standard introduced by ndeyemi
      source: {kind: coined}
      concept: more
    - form: ndayeli
      class: adj
      field: Everyday speech
      gloss: less; a smaller number or amount, with the comparison standard introduced by ndeyemi
      source: {kind: coined}
      concept: less
    - form: ndeyemi
      class: part
      field: Everyday speech
      gloss: than; introduces the explicit standard in a comparison
      source: {kind: coined}
      concept: than
    - form: ndeyemo
      class: adj
      field: Everyday speech
      gloss: other; distinct from the referent already named
      source: {kind: coined}
      concept: other
    - form: ndeyelo
      class: adj
      field: Everyday speech
      gloss: each; every member considered individually
      source: {kind: coined}
      concept: [each, every]
    - form: ndeyele
      class: adj
      field: Everyday speech
      gloss: some; an unspecified part of the relevant count or amount
      source: {kind: coined}
      concept: some
    - form: ndeyeli
      class: n
      field: Everyday speech
      gloss: an amount; a quantity, whether counted or measured
      source: {kind: coined}
      concept: amount
    - form: ndeyela
      class: n
      field: Everyday speech
      gloss: a number; a value stating a count or position
      source: {kind: coined}
      concept: number
    - form: ndayelo
      class: adj
      field: Everyday speech
      gloss: enough; sufficient for the stated need or purpose
      source: {kind: coined}
      concept: enough
    - form: ndayesha
      class: adj
      field: Everyday speech
      gloss: much; a large amount of the named substance or activity
      source: {kind: coined}
      concept: much
    - form: ndayeshi
      class: adj
      field: Everyday speech
      gloss: little; a small amount of the named substance or activity
      source: {kind: coined}
      concept: little-quantity
    - form: ndeyale
      class: adj
      field: Everyday speech
      gloss: first; occupying position one in an ordered sequence
      source: {kind: coined}
      concept: first
    - form: ndeyalya
      class: adj
      field: Everyday speech
      gloss: second; occupying position two in an ordered sequence
      source: {kind: coined}
      concept: second
    - form: ndeyalyo
      class: adj
      field: Everyday speech
      gloss: third; occupying position three in an ordered sequence
      source: {kind: coined}
      concept: third
    - form: ndawabe
      class: n
      field: Everyday speech
      gloss: a half; one of two equal parts of a whole
      source: {kind: coined}
      concept: half
    - form: ndebyo ndeleyo ndaweyi
      class: part
      field: Everyday speech
      gloss: "seventh; in position seven in an ordered sequence; replace ndaweyi with the actual position number: ndebyo ndeleyo ndaweyo is in position eight"
      source: {kind: coined}
      concept: ordinal-construction
    - form: ndawabi
      class: n
      field: Everyday speech
      gloss: a quarter; one of four equal parts of a whole
      source: {kind: coined}
      concept: quarter
    - form: ndazeli
      class: adj
      field: Everyday speech
      gloss: whole; complete, with no part missing
      source: {kind: coined}
      concept: [whole, complete]
    - form: ndayela ndeyemi ndeyelo bwelo ndeyemo
      class: adj
      field: Everyday speech
      gloss: most; more in count or amount than every other compared thing; replace bwelo with the actual counted or measured kind
      source: {kind: coined}
      concept: most
    - form: ndayeli ndeyemi ndeyelo bwelo ndeyemo
      class: adj
      field: Everyday speech
      gloss: least; less in count or amount than every other compared thing; replace bwelo with the actual counted or measured kind
      source: {kind: coined}
      concept: least
    - form: ndayele
      class: adj
      field: Everyday speech
      gloss: equal; the same in the property, number or amount under discussion
      source: {kind: coined}
      concept: equal
    - form: ndawi ndaza
      class: n
      field: Everyday speech
      gloss: both; the two taken together, with the pair already identified
      source: {kind: coined}
      concept: both
    - form: ndawa ndeyema ndawi
      class: num
      field: Everyday speech
      gloss: either; one from the two already identified; ndeyema introduces the set selected from
      source: {kind: coined}
      concept: either
    - form: ndewola ndeyema ndawi
      class: num
      field: Everyday speech
      gloss: neither; none from the two already identified
      source: {kind: coined}
      concept: neither
    - form: ndeyesha ndawila
      class: part
      field: Everyday speech
      gloss: about ten; approximately ten; replace ndawila with the actual quantity being approximated
      source: {kind: coined}
      concept: about
    - form: ndayeshe ndewena ndawila
      class: part
      field: Everyday speech
      gloss: almost ten; near but below ten, rather than merely near it in time; replace ndawila with the actual numerical threshold
      source: {kind: coined}
      concept: almost
    - form: ndeyeshi ndawila
      class: part
      field: Everyday speech
      gloss: exactly ten; ten with no approximation; replace ndawila with the actual precise quantity
      source: {kind: coined}
      concept: exactly
    - form: ndeyaba
      class: v
      field: Everyday speech
      gloss: to measure; to determine an amount by a standard unit
      source: {kind: coined}
      concept: measure-verb
    - form: ndeyabe
      class: v
      field: Everyday speech
      gloss: to count; to determine how many individual things there are
      source: {kind: coined}
      concept: count-verb
    - form: ndeyema
      class: part
      field: Everyday speech
      gloss: from among; introduces the set from which a member is selected
      source: {kind: coined}
    - form: ndeyesha
      class: part
      field: Everyday speech
      gloss: about; approximately, before the stated quantity
      source: {kind: coined}
    - form: ndayeshe
      class: part
      field: Everyday speech
      gloss: near; close to the following place, time or numerical point
      source: {kind: coined}
      concept: near
    - form: ndewena
      class: part
      field: Everyday speech
      gloss: below; lower than the following position, level or numerical threshold
      source: {kind: coined}
      concept: below
    - form: ndeyeshi
      class: part
      field: Everyday speech
      gloss: exactly; with no approximation, before the stated quantity
      source: {kind: coined}
    - form: nzabo
      class: adj
      field: Everyday speech
      gloss: black; of the darkest colour
      source: {kind: coined}
      concept: black
    - form: nzabe
      class: adj
      field: Everyday speech
      gloss: white; of the lightest colour
      source: {kind: coined}
      concept: white
    - form: nzabi
      class: adj
      field: Everyday speech
      gloss: red; blood-coloured
      source: {kind: coined}
      concept: red
    - form: nzabu
      class: adj
      field: Everyday speech
      gloss: green; the colour of growing leaves
      source: {kind: coined}
      concept: green
    - form: nzabeya
      class: adj
      field: Everyday speech
      gloss: yellow; the colour of ripe pale grain
      source: {kind: coined}
      concept: yellow
    - form: nzabeyi
      class: adj
      field: Everyday speech
      gloss: blue; the colour of a clear deep sky
      source: {kind: coined}
      concept: blue
    - form: nzabeyo
      class: adj
      field: Everyday speech
      gloss: grey; between black and white without a strong hue
      source: {kind: coined}
      concept: grey
    - form: nzabeyu
      class: adj
      field: Everyday speech
      gloss: brown; the colour of much earth or dry wood
      source: {kind: coined}
      concept: brown
    - form: nzabele
      class: adj
      field: Everyday speech
      gloss: light in colour; having a high light value, distinct from emitting light
      source: {kind: coined}
      concept: light-colour
    - form: nzabeli
      class: adj
      field: Everyday speech
      gloss: pale; weak or washed out in colour
      source: {kind: coined}
      concept: pale
    - form: lashebwe
      class: adj
      field: Everyday speech
      gloss: clear in appearance; having a distinct outline or mark that can be readily discerned, rather than necessarily transparent
      source: {kind: coined}
      concept: clear-appearance
    - form: lashebwi
      class: adj
      field: Everyday speech
      gloss: opaque; not allowing a view through the material
      source: {kind: coined}
      concept: opaque
    - form: lashebwa
      class: adj
      field: Everyday speech
      gloss: transparent; allowing a view through the material
      source: {kind: coined}
      concept: transparent
    - form: shembele
      class: adj
      field: Everyday speech
      gloss: shiny; reflecting conspicuous light
      source: {kind: coined}
      concept: shiny
    - form: shembeli
      class: adj
      field: Everyday speech
      gloss: dull in appearance; lacking shine or luster
      source: {kind: coined}
      concept: dull-appearance
    - form: nyeme nzabomi
      class: part
      field: Everyday speech
      gloss: plain; without a decorative pattern, used of a surface or garment
      source: {kind: coined}
      concept: plain-pattern
    - form: nzabola
      class: adj
      field: Everyday speech
      gloss: spotted; marked with distinct spots
      source: {kind: coined}
      concept: spotted
    - form: nzaboli
      class: adj
      field: Everyday speech
      gloss: striped; marked with parallel or repeated bands
      source: {kind: coined}
      concept: striped
    - form: ndeya
      class: v
      field: Everyday speech
      gloss: to go; to move away from here or toward the named destination
      source: {kind: coined}
      concept: go
    - form: ndeye
      class: v
      field: Everyday speech
      gloss: to come; to move toward the speaker or the stated reference point
      source: {kind: coined}
      concept: come
    - form: mbeya
      class: v
      field: Everyday speech
      gloss: "to give; to transfer the named thing to a recipient introduced by liye: enyi mbeya kabe liye mewi, you give a cup to me"
      source: {kind: coined}
      concept: give
    - form: mbeye
      class: v
      field: Everyday speech
      gloss: to take; to gain hold or possession of the named thing
      source: {kind: coined}
      concept: take
    - form: nyamba
      class: v
      field: Everyday speech
      gloss: to make; to fashion the named thing
      source: {kind: coined}
      concept: make
    - form: nyambe
      class: v
      field: Everyday speech
      gloss: to do; to perform the named action or task, rather than necessarily make an object
      source: {kind: coined}
      concept: do
    - form: nyenda
      class: v
      field: Everyday speech
      gloss: to say; to state the following words or proposition
      source: {kind: coined}
      concept: say
    - form: nyende
      class: v
      field: Everyday speech
      gloss: to speak; to use a voice or language, without necessarily stating the truth
      source: {kind: coined}
      concept: speak
    - form: nyendemi
      class: v
      field: Everyday speech
      gloss: to know; to have knowledge of the named thing or fact
      source: {kind: coined}
      concept: know
    - form: nyendema
      class: v
      field: Everyday speech
      gloss: to think; to consider a matter or entertain a thought, without claiming it true
      source: {kind: coined}
      concept: think
    - form: nyebeli
      class: v
      field: Everyday speech
      gloss: to live; to be alive or to conduct one's life, not merely to occupy a dwelling
      source: {kind: coined}
      concept: live
    - form: nyendeleya
      class: v
      field: Everyday speech
      gloss: to die; to cease living
      source: {kind: coined}
      concept: die
    - form: pobelawe
      class: v
      field: Everyday speech
      gloss: to walk; to travel on foot at a walking pace
      source: {kind: coined}
      concept: walk
    - form: pobelawi
      class: v
      field: Everyday speech
      gloss: to run; to travel on foot with running strides
      source: {kind: coined}
      concept: run
    - form: lembabiya
      class: v
      field: Everyday speech
      gloss: to sit; to take or maintain a sitting posture
      source: {kind: coined}
      concept: sit
    - form: pobenda
      class: v
      field: Everyday speech
      gloss: to stand; to take or maintain an upright posture on the feet
      source: {kind: coined}
      concept: stand
    - form: lembabeya
      class: v
      field: Everyday speech
      gloss: to lie down; to lower the body into a reclining posture
      source: {kind: coined}
      concept: lie-down
    - form: labweya
      class: v
      field: Everyday speech
      gloss: to hold; to keep the named thing in one's grasp or control
      source: {kind: coined}
      concept: hold
    - form: labweyela kabe liye mewi
      class: v
      field: Everyday speech
      gloss: to bring a cup here; to carry a cup toward the speaker; replace kabe with the thing brought and mewi with the reference recipient as context requires; enyi labweyela kabe liye mewi means you bring a cup to me
      source: {kind: coined}
      concept: bring
    - form: labweyemi
      class: v
      field: Everyday speech
      gloss: to put; to place the named thing at a location introduced by ndebyo
      source: {kind: coined}
      concept: put
    - form: lashebe
      class: v
      field: Everyday speech
      gloss: to find; to discover the location or presence of the named thing
      source: {kind: coined}
      concept: find
    - form: lashebeshe
      class: v
      field: Everyday speech
      gloss: to lose; to cease to know where the named thing is or to cease to retain it
      source: {kind: coined}
      concept: lose
    - form: kaboleya
      class: v
      field: Everyday speech
      gloss: to open; to move the named closure so that passage or access is possible
      source: {kind: coined}
      concept: open
    - form: kaboleye
      class: v
      field: Everyday speech
      gloss: to close; to move the named closure so that passage or access is shut
      source: {kind: coined}
      concept: close
    - form: ndeyebela
      class: v
      field: Everyday speech
      gloss: to begin; to start the named action or event
      source: {kind: coined}
      concept: begin
    - form: ndeyobya
      class: v
      field: Everyday speech
      gloss: to end; to bring the named action or event to its conclusion
      source: {kind: coined}
      concept: end
    - form: kaboma lome
      class: v
      field: Everyday speech
      gloss: a house exists; there is a house, with kaboma replaced by the thing whose existence is asserted; a bare subject plus lome in this complete use asserts existence rather than leaving an unstated quality
      source: {kind: coined}
      concept: exist
    - form: lome liwe mewi
      class: v
      field: Everyday speech
      gloss: "belongs to me; the named alienable thing precedes lome and the owner follows liwe: kabe lome liwe mewi, the cup belongs to me"
      source: {kind: coined}
      concept: belong
    - form: lomela
      class: v
      field: Everyday speech
      gloss: "to become; to enter the stated resulting condition: weyi lomela mbelele, that person becomes healthy"
      source: {kind: coined}
      concept: become
    - form: ndeyomi
      class: v
      field: Everyday speech
      gloss: to leave; to depart from the person or place introduced by ndeyoma
      source: {kind: coined}
      concept: leave
    - form: ndeyome
      class: v
      field: Everyday speech
      gloss: to arrive; to reach the destination introduced by liye
      source: {kind: coined}
      concept: arrive
    - form: pobembe
      class: v
      field: Everyday speech
      gloss: to crawl; to move close to the ground using hands and knees or the body
      source: {kind: coined}
      concept: crawl
    - form: pobembu
      class: v
      field: Everyday speech
      gloss: to climb; to move up the named rise or support
      source: {kind: coined}
      concept: climb
    - form: pobembi
      class: v
      field: Everyday speech
      gloss: to jump; to leave the ground by pushing with the feet
      source: {kind: coined}
      concept: jump
    - form: pobemi
      class: v
      field: Everyday speech
      gloss: to fall; to move downward without support
      source: {kind: coined}
      concept: fall
    - form: pobemu
      class: v
      field: Everyday speech
      gloss: to rise; to move upward from a lower position
      source: {kind: coined}
      concept: rise
    - form: kabolemi
      class: v
      field: Everyday speech
      gloss: to enter; to move into the named place
      source: {kind: coined}
      concept: enter
    - form: kabolemo
      class: v
      field: Everyday speech
      gloss: to exit; to move out of the named place
      source: {kind: coined}
      concept: exit
    - form: ndeyomo
      class: v
      field: Everyday speech
      gloss: to return; to go or come back to a previous place or condition
      source: {kind: coined}
      concept: return
    - form: tabeshela
      class: v
      field: Everyday speech
      gloss: to follow; to go after the named person or thing or adhere to a stated course, an independent ordinary citation related to bound tabes-
      source: {kind: coined}
      concept: follow
    - form: ndalemela
      class: v
      field: Everyday speech
      gloss: to lead; to guide the named person or group
      source: {kind: coined}
      concept: lead
    - form: labweyela
      class: v
      field: Everyday speech
      gloss: to carry; to support and transport the named thing
      source: {kind: coined}
      concept: carry
    - form: ndeyobye
      class: v
      field: Everyday speech
      gloss: to move; to change position or cause the named thing to change position
      source: {kind: coined}
      concept: move
    - form: labweyele
      class: v
      field: Everyday speech
      gloss: to push; to exert force on the named thing away from the agent
      source: {kind: coined}
      concept: push
    - form: labweyeli
      class: v
      field: Everyday speech
      gloss: to pull; to exert force on the named thing toward the agent
      source: {kind: coined}
      concept: pull
    - form: labweyelo
      class: v
      field: Everyday speech
      gloss: to lift; to raise the named thing by exerting force
      source: {kind: coined}
      concept: lift
    - form: labweyolu
      class: v
      field: Everyday speech
      gloss: to drop; to let the named thing fall from one's hold
      source: {kind: coined}
      concept: drop
    - form: labweyaba
      class: v
      field: Everyday speech
      gloss: to throw; to propel the named thing away through the air
      source: {kind: coined}
      concept: throw
    - form: labweyabe
      class: v
      field: Everyday speech
      gloss: to catch; to receive and stop the movement of the named offered, thrown or falling thing
      source: {kind: coined}
      concept: catch
    - form: nyambela
      class: v
      field: Everyday speech
      gloss: to build; to assemble the named structure
      source: {kind: coined}
      concept: build
    - form: nyambeli
      class: v
      field: Everyday speech
      gloss: to create; to bring the named thing into being, whether physical or imagined
      source: {kind: coined}
      concept: create
    - form: nyambeshe
      class: v
      field: Everyday speech
      gloss: to break; to damage the named thing so its continuity or operation fails
      source: {kind: coined}
      concept: break
    - form: nyambesho
      class: v
      field: Everyday speech
      gloss: to destroy; to render the named thing unusable or beyond restoration
      source: {kind: coined}
      concept: destroy
    - form: nyambeshela
      class: v
      field: Everyday speech
      gloss: to repair; to restore the named damaged thing to a usable condition
      source: {kind: coined}
      concept: repair
    - form: nyambelo
      class: v
      field: Everyday speech
      gloss: to change; to make or undergo a difference in form, state or conduct
      source: {kind: coined}
      concept: change-verb
    - form: nyendela
      class: v
      field: Everyday speech
      gloss: to tell; to communicate the named information to a person introduced by liye
      source: {kind: coined}
      concept: tell
    - form: nyendeli
      class: v
      field: Everyday speech
      gloss: to ask; to request information or a response from the person introduced by liye
      source: {kind: coined}
      concept: ask
    - form: nyendola
      class: v
      field: Everyday speech
      gloss: to answer; to give a response to the named question or request
      source: {kind: coined}
      concept: answer
    - form: nyendelu
      class: v
      field: Everyday speech
      gloss: to call; to address or summon the named person by voice
      source: {kind: coined}
      concept: call
    - form: nyende mbeyi nyeshelo nyesho
      class: v
      field: Everyday speech
      gloss: to shout; to speak with a loud voice; the voice phrase follows the speaking verb
      source: {kind: coined}
      concept: shout
    - form: nyende mbeyi nyesheli nyeshelwe
      class: v
      field: Everyday speech
      gloss: to whisper; to speak with a quiet breathy unvoiced voice, nyesheli qualifying the voice noun nyeshelwe
      source: {kind: coined}
      concept: whisper
    - form: nyendelya
      class: v
      field: Everyday speech
      gloss: to explain; to make the named matter intelligible by giving its meaning or reasons
      source: {kind: coined}
      concept: explain
    - form: nyendelye
      class: v
      field: Everyday speech
      gloss: to name; to give the named person or thing a name, introduced by liye in the worked naming use
      source: {kind: coined}
      concept: name-verb
    - form: nyademela
      class: v
      field: Everyday speech
      gloss: to believe; to accept the named claim or account as true, without guaranteeing its truth
      source: {kind: coined}
      concept: believe
    - form: nyendebya
      class: v
      field: Everyday speech
      gloss: to understand; to grasp the meaning or relations of the named matter
      source: {kind: coined}
      concept: understand
    - form: nyendebye
      class: v
      field: Everyday speech
      gloss: to remember; to retain or recall the named matter
      source: {kind: coined}
      concept: remember
    - form: nyendebyo
      class: v
      field: Everyday speech
      gloss: to forget; to cease to retain or fail to recall the named matter
      source: {kind: coined}
      concept: forget
    - form: nyeshemiba
      class: v
      field: Everyday speech
      gloss: to learn; to gain the named knowledge or skill
      source: {kind: coined}
      concept: learn
    - form: nyeshemibe
      class: v
      field: Everyday speech
      gloss: to teach; to instruct the named learner, with the content already stated or introduced by liye
      source: {kind: coined}
      concept: teach
    - form: nyendebyu
      class: v
      field: Everyday speech
      gloss: to decide; to settle on a course or conclusion after considering alternatives
      source: {kind: coined}
      concept: decide
    - form: nyendemela
      class: v
      field: Everyday speech
      gloss: to imagine; to form a mental image or conception without asserting it exists
      source: {kind: coined}
      concept: imagine
    - form: namelasha
      class: v
      field: Everyday speech
      gloss: to need; to require the named thing or action for a stated condition or purpose
      source: {kind: coined}
      concept: need-verb
    - form: namelashe
      class: v
      field: Everyday speech
      gloss: to wish; to desire a state or outcome, including one not expected to occur
      source: {kind: coined}
      concept: wish-verb
    - form: nyadelaya
      class: v
      field: Everyday speech
      gloss: to hope; to desire a possible outcome while allowing its uncertainty
      source: {kind: coined}
      concept: hope-verb
    - form: nyendebela
      class: v
      field: Everyday speech
      gloss: to intend; to have the named action or outcome as one's purpose
      source: {kind: coined}
      concept: intend
    - form: nyendebele
      class: v
      field: Everyday speech
      gloss: to choose; to select the named option from alternatives
      source: {kind: coined}
      concept: choose
    - form: namelashi
      class: v
      field: Everyday speech
      gloss: to prefer; to want the named option more than the alternative introduced by ndeyemi
      source: {kind: coined}
      concept: prefer
    - form: nyambeyi
      class: v
      field: Everyday speech
      gloss: to try; to make an effort to perform the named action, whether or not it succeeds
      source: {kind: coined}
      concept: try
    - form: lashebela
      class: v
      field: Everyday speech
      gloss: to search; to seek the named person or thing whose location is not yet found
      source: {kind: coined}
      concept: search
    - form: ndeshaya
      class: v
      field: Everyday speech
      gloss: to meet; to encounter or join the named person
      source: {kind: coined}
      concept: meet
    - form: ndeshaye
      class: v
      field: Everyday speech
      gloss: to help; to assist the named person or undertaking
      source: {kind: coined}
      concept: help
    - form: mbeyela
      class: v
      field: Everyday speech
      gloss: to share; to make the named resource available with another person introduced by mbeyi
      source: {kind: coined}
      concept: share
    - form: mbeyele
      class: v
      field: Everyday speech
      gloss: to trade; to exchange the named thing for another thing introduced by mbeyi
      source: {kind: coined}
      concept: trade
    - form: mbeyeli
      class: v
      field: Everyday speech
      gloss: to buy; to acquire the named thing in exchange for an agreed payment
      source: {kind: coined}
      concept: buy
    - form: mbeyelo
      class: v
      field: Everyday speech
      gloss: to sell; to transfer the named thing in exchange for an agreed payment
      source: {kind: coined}
      concept: sell
    - form: nyadewela
      class: v
      field: Everyday speech
      gloss: to promise; to commit oneself to the named future action or undertaking
      source: {kind: coined}
      concept: promise-verb
    - form: mbesheya
      class: v
      field: Everyday speech
      gloss: to thank; to express gratitude to the named person
      source: {kind: coined}
      concept: thank-verb
    - form: nalebeya
      class: v
      field: Everyday speech
      gloss: to forgive; to release resentment or a claim against the named person for an acknowledged wrong, without declaring that no wrong occurred
      source: {kind: coined}
      concept: forgive-verb
    - form: nyendewa
      class: v
      field: Everyday speech
      gloss: to refuse; to decline the named offer, request or action
      source: {kind: coined}
      concept: refuse-verb
    - form: nyendewi
      class: v
      field: Everyday speech
      gloss: to agree; to assent to the named claim or course
      source: {kind: coined}
      concept: agree-verb
    - form: nzambela
      class: v
      field: Everyday speech
      gloss: to fight; to engage in a struggle against the named opponent
      source: {kind: coined}
      concept: fight
    - form: nzambeli
      class: v
      field: Everyday speech
      gloss: to hit; to strike the named thing or person
      source: {kind: coined}
      concept: hit
    - form: nyendesha
      class: v
      field: Everyday speech
      gloss: to kill; to cause the named living being to die
      source: {kind: coined}
      concept: kill
    - form: nzamela
      class: v
      field: Everyday speech
      gloss: to defend; to protect the named person, thing or position against harm or attack
      source: {kind: coined}
      concept: defend
    - form: nzambelo
      class: v
      field: Everyday speech
      gloss: to attack; to initiate force against the named target
      source: {kind: coined}
      concept: attack
    - form: pobelashe
      class: v
      field: Everyday speech
      gloss: to flee; to run or withdraw from danger introduced by ndeyoma
      source: {kind: coined}
      concept: flee
    - form: nyende liye nzami
      class: v
      field: Everyday speech
      gloss: to threaten; conventionally to speak toward danger, signaling the speaker's intention or agency to cause harm to the addressed person, rather than merely warning of danger
      source: {kind: coined}
      concept: threaten
    - form: ndeyebya
      class: v
      field: Everyday speech
      gloss: to stop; to cease the named action or halt the named movement
      source: {kind: coined}
      concept: stop
    - form: ndeyebye
      class: v
      field: Everyday speech
      gloss: to continue; to keep performing the named action or maintain its course
      source: {kind: coined}
      concept: continue
    - form: ndeyoshi
      class: v
      field: Everyday speech
      gloss: to wait; to remain pending the arrival, event or opportunity named
      source: {kind: coined}
      concept: wait
    - form: ndeyebyo
      class: v
      field: Everyday speech
      gloss: to happen; to occur, with the event or matter as subject
      source: {kind: coined}
      concept: happen
    - form: pabeya
      class: v
      field: Everyday speech
      gloss: to kneel; to lower oneself onto one or both knees
      source: {kind: coined}
      concept: kneel
    - form: mboreya
      class: v
      field: Everyday speech
      gloss: to bend; to make or take a curved or angled form
      source: {kind: coined}
      concept: bend
    - form: mboreye
      class: v
      field: Everyday speech
      gloss: to lean; to incline the body or named thing against a support
      source: {kind: coined}
      concept: lean
    - form: nyaboleya
      class: v
      field: Everyday speech
      gloss: to cover; to put a covering over the named thing
      source: {kind: coined}
      concept: cover-verb
    - form: nyaboleye
      class: v
      field: Everyday speech
      gloss: to uncover; to remove a covering from the named thing
      source: {kind: coined}
      concept: uncover
    - form: lashebesha
      class: v
      field: Everyday speech
      gloss: to hide; to keep the named thing out of sight or knowledge
      source: {kind: coined}
      concept: hide
    - form: lashebeshi
      class: v
      field: Everyday speech
      gloss: to reveal; to bring the named thing into sight or knowledge
      source: {kind: coined}
      concept: reveal
    - form: kabolumeya
      class: v
      field: Everyday speech
      gloss: to lock; to secure the named closure with a lock
      source: {kind: coined}
      concept: lock-verb
    - form: kabolumeye
      class: v
      field: Everyday speech
      gloss: to unlock; to release the lock securing the named closure
      source: {kind: coined}
      concept: unlock
    - form: nzabomi
      class: n
      field: Everyday speech
      gloss: a pattern; a repeated or decorative arrangement of marks
      source: {kind: coined}
    - form: ndeyoma
      class: part
      field: Everyday speech
      gloss: from; introduces the source, origin or point departed from
      source: {kind: coined}
      concept: from
    - form: nyeshelwe
      class: n
      field: Everyday speech
      gloss: a breathy voice; speech carried on breath without voiced sound
      source: {kind: coined}
    - form: ndebya
      class: adv
      field: Everyday speech
      gloss: here; at the place occupied by the speaker
      source: {kind: coined}
      concept: here
    - form: ndebyi
      class: adv
      field: Everyday speech
      gloss: there; at the place indicated away from the speaker
      source: {kind: coined}
      concept: there
    - form: ndeyalo
      class: n
      field: Everyday speech
      gloss: a place; a location, whether occupied or empty
      source: {kind: coined}
      concept: place-noun
    - form: ndeyali
      class: n
      field: Everyday speech
      gloss: a direction; the course toward which something points or moves
      source: {kind: coined}
      concept: direction
    - form: ndeyolu
      class: n
      field: Everyday speech
      gloss: distance; the extent of separation between places
      source: {kind: coined}
      concept: distance
    - form: ndebeya
      class: part
      field: Everyday speech
      gloss: beside; next to the following person or thing
      source: {kind: coined}
      concept: beside
    - form: ndebeye
      class: part
      field: Everyday speech
      gloss: between; in the interval separating the named things
      source: {kind: coined}
      concept: between
    - form: ndebeyi
      class: part
      field: Everyday speech
      gloss: among; surrounded by or included within the named group
      source: {kind: coined}
      concept: among
    - form: ndebeyo
      class: part
      field: Everyday speech
      gloss: above; higher than the following thing
      source: {kind: coined}
      concept: above
    - form: ndebeyu
      class: part
      field: Everyday speech
      gloss: under; beneath the following thing, especially within its downward cover
      source: {kind: coined}
      concept: under
    - form: ndebwela
      class: part
      field: Everyday speech
      gloss: over; across or directly above the following thing
      source: {kind: coined}
      concept: over
    - form: ndebweli
      class: part
      field: Everyday speech
      gloss: outside; on the exterior side of the following boundary or enclosure
      source: {kind: coined}
      concept: outside
    - form: ndebwelo
      class: part
      field: Everyday speech
      gloss: beyond; farther along than the following boundary or landmark
      source: {kind: coined}
      concept: beyond
    - form: ndebweya
      class: part
      field: Everyday speech
      gloss: in front of; on the forward-facing side of the following person or thing
      source: {kind: coined}
      concept: before-spatial
    - form: ndebweyi
      class: part
      field: Everyday speech
      gloss: behind; on the rear-facing side of the following person or thing
      source: {kind: coined}
      concept: behind
    - form: ndebwelu
      class: n
      field: Everyday speech
      gloss: the left side or direction relative to the stated facing
      source: {kind: coined}
      concept: left-direction
    - form: ndebwala
      class: n
      field: Everyday speech
      gloss: the right side or direction relative to the stated facing
      source: {kind: coined}
      concept: right-direction
    - form: ndebwali
      class: n
      field: Everyday speech
      gloss: the center; the middle point or region
      source: {kind: coined}
      concept: center
    - form: ndebwale
      class: adv
      field: Everyday speech
      gloss: up; toward a higher position
      source: {kind: coined}
      concept: up
    - form: ndebwalo
      class: adv
      field: Everyday speech
      gloss: down; toward a lower position
      source: {kind: coined}
      concept: down
    - form: ndebwaba
      class: adv
      field: Everyday speech
      gloss: forward; in the direction of the front or ongoing course
      source: {kind: coined}
      concept: forward
    - form: ndebwabe
      class: adv
      field: Everyday speech
      gloss: backward; in the direction of the rear
      source: {kind: coined}
      concept: backward
    - form: ndebwabi
      class: part
      field: Everyday speech
      gloss: away from; moving to greater separation from the following reference point
      source: {kind: coined}
    - form: ndebwabo
      class: part
      field: Everyday speech
      gloss: through; passing within and out of the following space or opening
      source: {kind: coined}
      concept: through
    - form: ndebwabu
      class: part
      field: Everyday speech
      gloss: across; passing from one side of the following area to the other
      source: {kind: coined}
      concept: across
    - form: ndebwasha
      class: part
      field: Everyday speech
      gloss: around; surrounding or passing along the outside of the following thing
      source: {kind: coined}
      concept: around
    - form: ndebwashi
      class: part
      field: Everyday speech
      gloss: on; in contact with and supported by the following surface
      source: {kind: coined}
      concept: on
    - form: ndebwashu
      class: part
      field: Everyday speech
      gloss: at; located at the named place, without claiming inside or on it
      source: {kind: coined}
      concept: at
    - form: ndayaba
      class: n
      field: Everyday speech
      gloss: time; the dimension and occasions in which events occur
      source: {kind: coined}
      concept: time
    - form: ndayabi
      class: n
      field: Everyday speech
      gloss: a moment; a short point or interval of time
      source: {kind: coined}
      concept: moment
    - form: ndayabu
      class: n
      field: Everyday speech
      gloss: a day; a complete daily cycle or its daylight portion as context determines
      source: {kind: coined}
      concept: day
    - form: ndayabya
      class: n
      field: Everyday speech
      gloss: a night; the dark interval between days
      source: {kind: coined}
      concept: night
    - form: ndayabye
      class: n
      field: Everyday speech
      gloss: a morning; the early part of a day
      source: {kind: coined}
      concept: morning
    - form: ndayabyi
      class: n
      field: Everyday speech
      gloss: noon; the middle of the daylight period
      source: {kind: coined}
      concept: noon
    - form: ndayabyo
      class: n
      field: Everyday speech
      gloss: an evening; the late part of a day before night
      source: {kind: coined}
      concept: evening
    - form: ndayabyu
      class: n
      field: Everyday speech
      gloss: midnight; the middle of the night
      source: {kind: coined}
      concept: midnight
    - form: ndayema
      class: adv
      field: Everyday speech
      gloss: now; at the present time
      source: {kind: coined}
      concept: now
    - form: ndayeme
      class: adv
      field: Everyday speech
      gloss: then; at the time already indicated
      source: {kind: coined}
      concept: then
    - form: ndayemi
      class: n
      field: Everyday speech
      gloss: today; this day
      source: {kind: coined}
      concept: today
    - form: ndayemo
      class: adv
      field: Everyday speech
      gloss: yesterday; on the day before today
      source: {kind: coined}
      concept: yesterday
    - form: ndayemu
      class: adv
      field: Everyday speech
      gloss: tomorrow; on the day after today
      source: {kind: coined}
      concept: tomorrow
    - form: ndayenya
      class: n
      field: Everyday speech
      gloss: the past; time before now
      source: {kind: coined}
      concept: past
    - form: ndayenye
      class: n
      field: Everyday speech
      gloss: the present; the time occurring now
      source: {kind: coined}
      concept: present
    - form: ndayenyo
      class: n
      field: Everyday speech
      gloss: the future; time after now
      source: {kind: coined}
      concept: future
    - form: ndayembi
      class: part
      field: Everyday speech
      gloss: before; earlier than the following event or time
      source: {kind: coined}
    - form: ndayemba
      class: part
      field: Everyday speech
      gloss: after; later than the following event or time
      source: {kind: coined}
    - form: ndayembo
      class: part
      field: Everyday speech
      gloss: during; within the duration of the following event or time
      source: {kind: coined}
    - form: ndayembu
      class: part
      field: Everyday speech
      gloss: until; continuing up to the following endpoint event or time
      source: {kind: coined}
    - form: ndayembela
      class: part
      field: Everyday speech
      gloss: since; from the following starting event or time through the reference time
      source: {kind: coined}
    - form: ndayebya
      class: n
      field: Everyday speech
      gloss: an occasion; one occurrence of an event, not the recurrence marker again
      source: {kind: coined}
    - form: ndayebye
      class: n
      field: Everyday speech
      gloss: an ending; the final event or stage of a sequence
      source: {kind: coined}
    - form: ndayebyo
      class: n
      field: Everyday speech
      gloss: a meal; an occasion of eating
      source: {kind: coined}
    - form: ndayelya
      class: adv
      field: Everyday speech
      gloss: again; once more, marking recurrence rather than one counted occasion
      source: {kind: coined}
      concept: again
    - form: ndayelye
      class: adv
      field: Everyday speech
      gloss: already; before the expected or stated reference time, before the predicate in the cited clause
      source: {kind: coined}
      concept: already
    - form: ndayelyi
      class: adv
      field: Everyday speech
      gloss: still; continuing at the reference time, before the predicate in the cited clause
      source: {kind: coined}
      concept: still
    - form: ndayelyo
      class: adv
      field: Everyday speech
      gloss: yet; up to the reference time in a question or negated clause, before the predicate in the cited use
      source: {kind: coined}
      concept: yet
    - form: ndayelyu
      class: adv
      field: Everyday speech
      gloss: soon; after a short interval from the reference time
      source: {kind: coined}
      concept: soon
    - form: ndayelwa
      class: adv
      field: Everyday speech
      gloss: later; after the current or previously stated time
      source: {kind: coined}
      concept: later
    - form: ndayelwe
      class: adv
      field: Everyday speech
      gloss: early; before the expected or usual time
      source: {kind: coined}
      concept: early
    - form: ndayelwi
      class: adv
      field: Everyday speech
      gloss: late; after the expected or usual time
      source: {kind: coined}
      concept: late
    - form: ndayelwo
      class: adj
      field: Everyday speech
      gloss: next; immediately following in the sequence
      source: {kind: coined}
    - form: ndayelwu
      class: adj
      field: Everyday speech
      gloss: last; at the end of the sequence
      source: {kind: coined}
      concept: last
    - form: ndayalwe
      class: n
      field: Everyday speech
      gloss: a season; a recurring division of the year associated with weather or activity
      source: {kind: coined}
      concept: season
    - form: ndayalwi
      class: n
      field: Everyday speech
      gloss: a year; one complete annual cycle
      source: {kind: coined}
      concept: year
    - form: ndayalwo
      class: n
      field: Everyday speech
      gloss: a month; a conventional division of the year, historically associated with the moon
      source: {kind: coined}
      concept: month
    - form: shemelo
      class: n
      field: Everyday speech
      gloss: dawn; the first light before sunrise
      source: {kind: coined}
      concept: dawn
    - form: shemeli
      class: n
      field: Everyday speech
      gloss: dusk; the fading light after sunset
      source: {kind: coined}
      concept: dusk
    - form: ndebyo ndeyalo ndeyele
      class: part
      field: Everyday speech
      gloss: somewhere; at some place, with the place unspecified
      source: {kind: coined}
      concept: somewhere
    - form: nyeme ndeyalo
      class: part
      field: Everyday speech
      gloss: nowhere; without any place where the stated condition holds; enyi shewe lome ndebyo ndeyalo means you are not at any place under discussion
      source: {kind: coined}
      concept: nowhere
    - form: ndebyo ndeyalo ndaza
      class: part
      field: Everyday speech
      gloss: everywhere; at all places in the relevant area
      source: {kind: coined}
      concept: everywhere
    - form: ndeyashelo
      class: adj
      field: Everyday speech
      gloss: far; separated by a large distance from the stated reference point
      source: {kind: coined}
      concept: far
    - form: ndebyo kaboma
      class: part
      field: Everyday speech
      gloss: inside a house; in its interior, with kaboma replaceable by the named enclosure
      source: {kind: coined}
      concept: inside
    - form: ndebwabi ndebya
      class: part
      field: Everyday speech
      gloss: away from here; moving to greater separation from the speaker's place
      source: {kind: coined}
      concept: away
    - form: ndayembi lusheyemi
      class: part
      field: Everyday speech
      gloss: before the rain; earlier than the named rain event, replace lusheyemi with the actual event or time
      source: {kind: coined}
      concept: before-time
    - form: ndayemba lusheyemi
      class: part
      field: Everyday speech
      gloss: after the rain; later than the named rain event, replace lusheyemi with the actual event or time
      source: {kind: coined}
      concept: after
    - form: ndayembo ndayebyo
      class: part
      field: Everyday speech
      gloss:
        - during the meal; within the meal's duration, replace ndayebyo with the actual event or time
        - while eating; during the meal, with the actual eating occasion as the time reference, not a new verb-to-noun rule
      source: {kind: coined}
      concept: [during, while]
    - form: ndayembu lusheyemi
      class: part
      field: Everyday speech
      gloss: until the rain; continuing up to the named rain event, replace lusheyemi with the endpoint event or time
      source: {kind: coined}
      concept: until
    - form: ndayembela lusheyemi
      class: part
      field: Everyday speech
      gloss: since the rain; from the named rain event to the reference time, replace lusheyemi with the starting event or time
      source: {kind: coined}
      concept: since-time
    - form: ndebyo ndayaba ndaza
      class: part
      field: Everyday speech
      gloss: always; at all relevant times
      source: {kind: coined}
      concept: always
    - form: ndebyo ndayebya ndawe
      class: part
      field: Everyday speech
      gloss: [often; on many occasions, "repeatedly; on many occasions, not merely again once"]
      source: {kind: coined}
      concept: [often, repeatedly]
    - form: ndebyo ndayebya ndeyele
      class: part
      field: Everyday speech
      gloss: sometimes; on some occasions
      source: {kind: coined}
      concept: sometimes
    - form: ndebyo ndayebya ndewi
      class: part
      field: Everyday speech
      gloss: rarely; on few occasions
      source: {kind: coined}
      concept: rarely
    - form: nyeme ndayebya
      class: part
      field: Everyday speech
      gloss: never; without an occasion on which the condition holds, used in the full negated utterance weyi shewe ndeye ndebyo ndayebya, that person does not come on any occasion
      source: {kind: coined}
      concept: never
    - form: ndeshe ndebyo ndayaba
      class: adj
      field: Everyday speech
      gloss: long in duration; enduring through time, rather than long in physical length
      source: {kind: coined}
      concept: long-duration
    - form: ndayabi ndewi
      class: n
      field: Everyday speech
      gloss:
        - a short duration; few moments, rather than a short physical object
        - a brief duration; few moments
      source: {kind: coined}
      concept: [short-duration, brief-duration]
    - form: ndebyo ndayebya ndawa
      class: part
      field: Everyday speech
      gloss: once; on one occasion
      source: {kind: coined}
      concept: once
    - form: ndebyo ndayebya ndawi
      class: part
      field: Everyday speech
      gloss: twice; on two occasions
      source: {kind: coined}
      concept: twice
    - form: ndebyo ndayebya ndeyale
      class: part
      field: Everyday speech
      gloss: first in a sequence of events; on the first occasion
      source: {kind: coined}
      concept: first-sequence
    - form: ndebyo ndayebya ndayelwo
      class: part
      field: Everyday speech
      gloss: next; on the immediately following occasion
      source: {kind: coined}
      concept: next
    - form: ndebyo ndayebye
      class: part
      field: Everyday speech
      gloss: finally; at the ending of the sequence
      source: {kind: coined}
      concept: finally
    - form: lewi
      class: dem
      field: Everyday speech
      gloss: this; the single nearby person or thing indicated, preceding its noun in the cited uses
      source: {kind: coined}
      concept: this
    - form: lewo
      class: dem
      field: Everyday speech
      gloss: that; the single person or thing indicated away from the speaker, preceding its noun
      source: {kind: coined}
      concept: that
    - form: lewemi
      class: dem
      field: Everyday speech
      gloss: these; the nearby people or things indicated, preceding their noun
      source: {kind: coined}
      concept: these
    - form: lewemo
      class: dem
      field: Everyday speech
      gloss: those; the people or things indicated away from the speaker, preceding their noun
      source: {kind: coined}
      concept: those
    - form: ndalo ndeyele
      class: n
      field: Everyday speech
      gloss: someone; some person, with the person's identity unspecified
      source: {kind: coined}
      concept: someone
    - form: ndalo ndawena
      class: n
      field: Everyday speech
      gloss: anyone; any person without restricting which one
      source: {kind: coined}
      concept: anyone
    - form: ndawena
      class: adj
      field: Everyday speech
      gloss: any; without restricting which member or instance
      source: {kind: coined}
    - form: ndalo ndaza
      class: n
      field: Everyday speech
      gloss: everyone; all the people in the relevant domain
      source: {kind: coined}
      concept: everyone
    - form: ndalo ndewola
      class: n
      field: Everyday speech
      gloss: no one; no person in the relevant domain
      source: {kind: coined}
      concept: no-one
    - form: bwelo ndeyele
      class: n
      field: Everyday speech
      gloss: something; some unspecified thing or matter
      source: {kind: coined}
      concept: something
    - form: bwelo ndawena
      class: n
      field: Everyday speech
      gloss: anything; any thing or matter without restriction
      source: {kind: coined}
      concept: anything
    - form: bwelo ndaza
      class: n
      field: Everyday speech
      gloss: everything; all things or matters in the relevant domain
      source: {kind: coined}
      concept: everything
    - form: ndeyembo
      class: pron
      field: Everyday speech
      gloss: "self; the object referring back to the subject of the same clause: enyi lashe ndeyembo, you see yourself; weyi lashe ndeyembo, that person sees themself"
      source: {kind: coined}
      concept: self
    - form: ndeyemba
      class: adj
      field: Everyday speech
      gloss: same; identical in the relevant identity or property
      source: {kind: coined}
      concept: same
    - form: ndeyembi
      class: adj
      field: Everyday speech
      gloss: different; not identical in the relevant identity or property
      source: {kind: coined}
      concept: different
    - form: nyewaba
      class: pron
      field: Everyday speech
      gloss: who; the person whose identity is requested, in the subject or object slot of the cited question
      source: {kind: coined}
    - form: nyewabe
      class: pron
      field: Everyday speech
      gloss: what; the thing or matter whose identity is requested, in the relevant subject or object slot
      source: {kind: coined}
    - form: nyewabi
      class: pron
      field: Everyday speech
      gloss: which; the member selected from an already stated set of alternatives
      source: {kind: coined}
    - form: nyewabo
      class: adv
      field: Everyday speech
      gloss: how; in what manner, after the action in the cited question
      source: {kind: coined}
    - form: nyewabu
      class: n
      field: Everyday speech
      gloss: what place; the location requested in the cited where question
      source: {kind: coined}
    - form: nyewabya
      class: n
      field: Everyday speech
      gloss: what time; the time requested in the cited when question
      source: {kind: coined}
    - form: nyewabye
      class: n
      field: Everyday speech
      gloss: a reason; the fact or consideration explaining why an event occurs
      source: {kind: coined}
      concept: reason
    - form: nyewabyi
      class: n
      field: Everyday speech
      gloss: a purpose; an intended outcome for which an action is undertaken
      source: {kind: coined}
      concept: purpose
    - form: nyewabyo
      class: part
      field: Everyday speech
      gloss: because of; introduces the named reason, not the intended goal
      source: {kind: coined}
    - form: nyewabyu
      class: part
      field: Everyday speech
      gloss: for the purpose of; introduces the named intended outcome
      source: {kind: coined}
      concept: for-purpose
    - form: nyewala
      class: part
      field: Everyday speech
      gloss: question marker; after the complete cited clause, requests whether that clause is true, without changing its word order
      source: {kind: coined}
    - form: liwe mewi
      class: part
      field: Everyday speech
      gloss: "my; mine; of me, for alienable possession: kabe liwe mewi, my cup; inalienable my hand and my father are the separately cited nelabwe and nedalo"
      source: {kind: coined}
      concept: my
    - form: liwe enyi
      class: part
      field: Everyday speech
      gloss: "your; yours; of you, the one honored, for alienable possession: kabe liwe enyi, your cup"
      source: {kind: coined}
      concept: your
    - form: liwe mewo
      class: part
      field: Everyday speech
      gloss: "our; ours; of us, for alienable possession: kabe liwe mewo, our cup"
      source: {kind: coined}
      concept: our
    - form: bwelo ndeyemo
      class: n
      field: Everyday speech
      gloss: another; an additional or different thing of the kind under discussion
      source: {kind: coined}
      concept: another
    - form: nyewaba lashe enyi
      class: v
      field: Everyday speech
      gloss: who sees you, the one honored? nyewaba fills the subject slot; enyi lashe nyewaba asks whom you see
      source: {kind: coined}
      concept: question-who
    - form: nyewabe lome ndebya
      class: v
      field: Everyday speech
      gloss: what is here? nyewabe requests the identity of the thing at the speaker's place
      source: {kind: coined}
      concept: question-what
    - form: nyewabi lome le
      class: v
      field: Everyday speech
      gloss: which is good? nyewabi selects a member from the set already under discussion
      source: {kind: coined}
      concept: question-which
    - form: enyi lome ndebyo nyewabu
      class: v
      field: Everyday speech
      gloss: where are you, the one honored? nyewabu occupies the place slot after ndebyo
      source: {kind: coined}
      concept: question-where
    - form: enyi ndeye ndebyo nyewabya
      class: v
      field: Everyday speech
      gloss: when do you come? nyewabya occupies the time slot after ndebyo
      source: {kind: coined}
      concept: question-when
    - form: enyi ndeya nyewabyo nyewabe
      class: v
      field: Everyday speech
      gloss: why do you go? what is the reason for your going? the question asks for a reason after nyewabyo
      source: {kind: coined}
      concept: question-why
    - form: enyi nyambe nyewabo
      class: v
      field: Everyday speech
      gloss: how do you do it? nyewabo requests the manner after the action
      source: {kind: coined}
      concept: question-how
    - form: ndeyela liwe kabe lome nyewabe
      class: v
      field: Everyday speech
      gloss: how many cups? what is the number of cups? kabe is replaced by the counted kind; ndeyela is number, not amount
      source: {kind: coined}
      concept: question-how-many
    - form: ndeyeli liwe mashelu lome nyewabe
      class: v
      field: Everyday speech
      gloss: how much water? what is the amount of water? mashelu is replaced by the measured substance
      source: {kind: coined}
      concept: question-how-much
    - form: lewi kabe lome liwe nyewaba
      class: v
      field: Everyday speech
      gloss: whose cup is this? the owner requested follows liwe; lewi precedes the cup noun
      source: {kind: coined}
      concept: question-whose
    - form: enyi mbeya kabe liye nyewaba
      class: v
      field: Everyday speech
      gloss: to whom do you give a cup? the recipient requested follows liye
      source: {kind: coined}
      concept: question-to-whom
    - form: enyi ndeye ndeyoma nyewabu
      class: v
      field: Everyday speech
      gloss: from where do you come? the source requested follows ndeyoma
      source: {kind: coined}
      concept: question-from-where
    - form: enyi ndeya nyewabyu nyewabe
      class: v
      field: Everyday speech
      gloss: for what purpose do you go? the intended outcome requested follows nyewabyu
      source: {kind: coined}
      concept: question-for-what-purpose
    - form: weyi ndeye nyewala
      class: v
      field: Everyday speech
      gloss: does that person come? the final nyewala requests a yes or no response to the complete clause
      source: {kind: coined}
      concept: question-polar
    - form: enyi nyenda nyewabe
      class: v
      field: Everyday speech
      gloss: what do you mean? please clarify what you say; the whole question requests clarification without asserting an imperative inflection
      source: {kind: coined}
      concept: [question-clarification, expression-what-do-you-mean]
    - form: nyewela
      class: adj
      field: Everyday speech
      gloss: true; corresponding to what is actually the case, not merely believed
      source: {kind: coined}
      concept: "true"
    - form: nyeweshe
      class: adj
      field: Everyday speech
      gloss: false; contrary to what is actually the case
      source: {kind: coined}
      concept: "false"
    - form: nyewelo
      class: n
      field: Everyday speech
      gloss: truth; what is actually the case, distinct from the speaker's confidence
      source: {kind: coined}
      concept: truth
    - form: nyeweli
      class: n
      field: Everyday speech
      gloss: a statement; a claim that can be true or false
      source: {kind: coined}
    - form: nyeweshela
      class: n
      field: Everyday speech
      gloss: a lie; an intentionally deceptive statement made to lead the hearer to believe a false account
      source: {kind: coined}
      concept: lie-noun
    - form: nyewesheli
      class: n
      field: Everyday speech
      gloss: a falsehood; a false assertion, whether deliberately deceptive or honestly mistaken
      source: {kind: coined}
      concept: falsehood
    - form: nyembele
      class: adv
      field: Everyday speech
      gloss: really; truly; genuinely; asserts the reality or sincerity of the following predicate rather than asking whether it is true
      source: {kind: coined}
      concept: sincerity
    - form: nyembali
      class: adv
      field: Everyday speech
      gloss: certainly; marks the speaker's assurance about the following proposition without making it objectively true
      source: {kind: coined}
      concept: certainly
    - form: nyembala
      class: adv
      field: Everyday speech
      gloss: perhaps; marks the following proposition as possible but unsettled
      source: {kind: coined}
      concept: perhaps
    - form: nyembalo
      class: adv
      field: Everyday speech
      gloss: probably; marks the following proposition as more likely than not
      source: {kind: coined}
      concept: probably
    - form: nyembalu
      class: adv
      field: Everyday speech
      gloss: apparently; according to what can be observed, with the appearance left open to correction
      source: {kind: coined}
      concept: apparently
    - form: nyembaya
      class: adv
      field: Everyday speech
      gloss: supposedly; according to a reported claim, without endorsing it as established fact
      source: {kind: coined}
      concept: supposedly
    - form: nyembaye
      class: adv
      field: Everyday speech
      gloss: in fact; actually; introduces what the speaker asserts to be the real case
      source: {kind: coined}
      concept: in-fact
    - form: nyembayi
      class: adj
      field: Everyday speech
      gloss: unlikely; not expected to occur or be true, though not impossible
      source: {kind: coined}
      concept: unlikely
    - form: nyembayo
      class: adj
      field: Everyday speech
      gloss: certain; settled in one's judgment, not guaranteed objectively true
      source: {kind: coined}
      concept: certain
    - form: nyembayu
      class: adj
      field: Everyday speech
      gloss: uncertain; not settled in one's judgment
      source: {kind: coined}
      concept: uncertain
    - form: nyeweya
      class: v
      field: Everyday speech
      gloss: to doubt; to be unsure of or question the named claim
      source: {kind: coined}
      concept: doubt-verb
    - form: nyeweye
      class: v
      field: Everyday speech
      gloss: to suspect; to consider the named claim or event possible on incomplete grounds, including neutral events rather than only wrongdoing
      source: {kind: coined}
      concept: suspect
    - form: nyeweyi
      class: v
      field: Everyday speech
      gloss: to guess; to offer the named answer without sufficient knowledge to establish it
      source: {kind: coined}
      concept: guess-verb
    - form: nyeweyo
      class: v
      field: Everyday speech
      gloss: to assume; to take the named claim as a working premise without first establishing it
      source: {kind: coined}
      concept: assume-verb
    - form: nyewole
      class: adj
      field: Everyday speech
      gloss: correct; fitting the relevant fact, answer or standard
      source: {kind: coined}
      concept: correct
    - form: nyewoshe
      class: adj
      field: Everyday speech
      gloss: incorrect; failing to fit the relevant fact, answer or standard
      source: {kind: coined}
      concept: incorrect
    - form: nyewolu
      class: v
      field: Everyday speech
      gloss: to disagree; to hold a different opinion on the named matter
      source: {kind: coined}
      concept: disagree
    - form: ngoya
      class: conj
      field: Everyday speech
      gloss: "nor; after a negated clause introduces a second negated alternative: weyi shewe ndeye ngoya weyi shewe nyenda, that person neither comes nor speaks"
      source: {kind: coined}
      concept: nor
    - form: ngoye
      class: conj
      field: Everyday speech
      gloss: "because; joins the asserted result to a complete reason clause: weyi ndeye ngoye weyi namela kemba, that person comes because they want food"
      source: {kind: coined}
      concept: because
    - form: ngoyi
      class: conj
      field: Everyday speech
      gloss: therefore; introduces the asserted consequence of the preceding complete clause
      source: {kind: coined}
      concept: therefore
    - form: ngoyo
      class: conj
      field: Everyday speech
      gloss: if; introduces a complete condition clause followed by ngoyela and its consequence
      source: {kind: coined}
      concept: if
    - form: ngoyela
      class: conj
      field: Everyday speech
      gloss: then; introduces the consequence of the preceding ngoyo condition
      source: {kind: coined}
      concept: then-conditional
    - form: ngoyele
      class: conj
      field: Everyday speech
      gloss: "unless; introduces a condition whose absence makes the following consequence hold: ngoyele enyi lome ndebya ngoyela mindeya, unless you are here, then I go; equivalent to ngoyo enyi shewe lome ndebya ngoyela mindeya"
      source: {kind: coined}
      concept: unless
    - form: ngoyeli
      class: conj
      field: Everyday speech
      gloss: "otherwise; introduces what holds if the preceding condition or course does not: enyi ndeye ngoyeli mindeya, you come, otherwise I go"
      source: {kind: coined}
      concept: otherwise
    - form: ngoyelo
      class: conj
      field: Everyday speech
      gloss: although; introduces a complete conceded clause followed by the contrasting main clause
      source: {kind: coined}
      concept: although
    - form: ngoyelu
      class: conj
      field: Everyday speech
      gloss: however; introduces a contrasting complete clause after a previous assertion
      source: {kind: coined}
      concept: however
    - form: ngoyemya
      class: conj
      field: Everyday speech
      gloss: nevertheless; introduces what remains true despite the previous conceded fact
      source: {kind: coined}
      concept: nevertheless
    - form: ngoyemi
      class: part
      field: Everyday speech
      gloss: despite; introduces the named adverse circumstance that does not prevent the main assertion
      source: {kind: coined}
      concept: despite
    - form: ngoyemo
      class: part
      field: Everyday speech
      gloss: "instead of; marks replacement of the following option: mbeya kabe ngoyemo kambu, give a cup instead of a pot, in the conventional request use"
      source: {kind: coined}
      concept: instead
    - form: ngoyemu
      class: part
      field: Everyday speech
      gloss: like; similar to the following person or thing in the stated respect
      source: {kind: coined}
      concept: like
    - form: ngoyemela
      class: part
      field: Everyday speech
      gloss: unlike; different from the following person or thing in the stated respect
      source: {kind: coined}
      concept: unlike
    - form: ngoyemeli
      class: part
      field: Everyday speech
      gloss: as; in the role or capacity of the following person or title, not merely resembling them
      source: {kind: coined}
      concept: as
    - form: ngwelo
      class: conj
      field: Everyday speech
      gloss: "either; introduces the first alternative, with ngo before the second: ngwelo weyi ndeye ngo weyi ndeya, either that person comes or that person goes"
      source: {kind: coined}
      concept: either-alternative
    - form: ngole
      class: conj
      field: Everyday speech
      gloss: "neither; introduces each of two excluded alternatives: ngole weyi ndeye ngole weyi ndeya, that person neither comes nor goes"
      source: {kind: coined}
      concept: neither-alternative
    - form: ngoli
      class: conj
      field: Everyday speech
      gloss: "both; introduces the first affirmed clause, with ngwi before the second: ngoli weyi ndeye ngwi weyi nyenda, that person both comes and speaks"
      source: {kind: coined}
      concept: both-conjunction
    - form: ngolo
      class: conj
      field: Everyday speech
      gloss: whether; introduces the uncertain alternatives considered in the cited complete utterance weyi nyendema ngolo weyi ndeye ngo weyi shewe ndeye, that person considers whether they come or do not come
      source: {kind: coined}
      concept: whether
    - form: ngolu
      class: conj
      field: Everyday speech
      gloss: that is; introduces a restatement of the preceding phrase or clause
      source: {kind: coined}
      concept: that-is
    - form: ngoleya
      class: conj
      field: Everyday speech
      gloss: "namely; introduces the explicit identity or members of the preceding description: ndalo ndawi, ngoleya mbeli ngwi ndeshi, two people, namely a friend and a companion"
      source: {kind: coined}
      concept: namely
    - form: ngoleye
      class: part
      field: Everyday speech
      gloss: for example; introduces a particular instance of the preceding general assertion
      source: {kind: coined}
      concept: for-example
    - form: ngoleyi
      class: part
      field: Everyday speech
      gloss: except; excludes the following member from the relevant set
      source: {kind: coined}
      concept: except
    - form: ngoleyo
      class: adv
      field: Everyday speech
      gloss: only; restricts the following named member or condition
      source: {kind: coined}
      concept: only
    - form: ngoleyu
      class: adv
      field: Everyday speech
      gloss: even; includes the following member or condition despite an expectation of exclusion
      source: {kind: coined}
      concept: even
    - form: ngolya
      class: adv
      field: Everyday speech
      gloss: also; adds the following member or predicate to one already asserted
      source: {kind: coined}
      concept: also
    - form: ngolye
      class: adv
      field: Everyday speech
      gloss: especially; singles out the following member or condition as particularly relevant
      source: {kind: coined}
      concept: especially
    - form: nyewema
      class: call
      field: Everyday speech
      gloss: yes; an affirmative response to the question or claim
      source: {kind: coined}
      concept: yes
    - form: nyewemo
      class: call
      field: Everyday speech
      gloss: no; a negative response to the question or claim
      source: {kind: coined}
      concept: no
    - form: nyewema nyembele
      class: call
      field: Everyday speech
      gloss: indeed; an emphatic affirmation of what was just asserted
      source: {kind: coined}
      concept: indeed
    - form: ndahela
      class: adj
      field: Everyday speech
      gloss: big; of large physical size
      source: {kind: coined}
      concept: big
    - form: ndaheli
      class: adj
      field: Everyday speech
      gloss: small; of little physical size
      source: {kind: coined}
      concept: small
    - form: ndahelo
      class: adj
      field: Everyday speech
      gloss: long; extending far in physical length
      source: {kind: coined}
      concept: long
    - form: ndahelu
      class: adj
      field: Everyday speech
      gloss: short; extending little in physical length
      source: {kind: coined}
      concept: short
    - form: ndahelya
      class: adj
      field: Everyday speech
      gloss: high; at a raised vertical position
      source: {kind: coined}
      concept: high
    - form: ndahelye
      class: adj
      field: Everyday speech
      gloss: tall; of great upright height
      source: {kind: coined}
      concept: tall
    - form: ndahelyi
      class: adj
      field: Everyday speech
      gloss: wide; extending far from side to side
      source: {kind: coined}
      concept: wide
    - form: ndahelyo
      class: adj
      field: Everyday speech
      gloss: narrow; extending little from side to side
      source: {kind: coined}
      concept: narrow
    - form: ndahelyu
      class: adj
      field: Everyday speech
      gloss: heavy; of great weight
      source: {kind: coined}
      concept: heavy
    - form: ndaherwa
      class: adj
      field: Everyday speech
      gloss: light in weight; of little weight
      source: {kind: coined}
      concept: light-weight
    - form: ndaherwe
      class: adj
      field: Everyday speech
      gloss: new; recently made, acquired or begun
      source: {kind: coined}
      concept: new
    - form: ndaherwi
      class: adj
      field: Everyday speech
      gloss: old; not new, of an object or practice rather than necessarily an aged person
      source: {kind: coined}
      concept: old-object
    - form: ndaherwo
      class: adj
      field: Everyday speech
      gloss: fast; moving or occurring at high speed
      source: {kind: coined}
      concept: fast
    - form: ndaherwu
      class: adj
      field: Everyday speech
      gloss: slow; moving or occurring at low speed
      source: {kind: coined}
      concept: slow
    - form: ndahesha
      class: adj
      field: Everyday speech
      gloss: easy; requiring little effort or difficulty
      source: {kind: coined}
      concept: easy
    - form: ndaheshe
      class: adj
      field: Everyday speech
      gloss: difficult; requiring substantial effort or skill
      source: {kind: coined}
      concept: difficult
    - form: leshe
      class: adj
      field: Everyday speech
      gloss: bad; poor in the relevant practical or evaluative respect
      source: {kind: coined}
      concept: bad
    - form: leya
      class: adj
      field: Everyday speech
      gloss: better; more good than the explicit comparison standard
      source: {kind: coined}
      concept: better
    - form: lesheya
      class: adj
      field: Everyday speech
      gloss: worse; more bad than the explicit comparison standard
      source: {kind: coined}
      concept: worse
    - form: ndahesho
      class: adj
      field: Everyday speech
      gloss: important; consequential or worthy of attention
      source: {kind: coined}
      concept: important
    - form: ndaheshi
      class: adj
      field: Everyday speech
      gloss: trivial; of little consequence
      source: {kind: coined}
      concept: trivial
    - form: ndaheshu
      class: adj
      field: Everyday speech
      gloss: necessary; required for the stated purpose or condition
      source: {kind: coined}
      concept: necessary
    - form: ndaheshela
      class: adj
      field: Everyday speech
      gloss: valuable; having substantial worth, whether material or otherwise
      source: {kind: coined}
      concept: valuable
    - form: ndahesheli
      class: adj
      field: Everyday speech
      gloss: worthless; having no worth in the stated context, not merely little worth
      source: {kind: coined}
      concept: worthless
    - form: ndaheshelo
      class: adj
      field: Everyday speech
      gloss: useful; serving the stated practical purpose
      source: {kind: coined}
      concept: useful
    - form: ndaheshelu
      class: adj
      field: Everyday speech
      gloss: useless; serving no useful purpose in the stated context
      source: {kind: coined}
      concept: useless
    - form: nyambesheli
      class: adj
      field: Everyday speech
      gloss: broken; damaged so that continuity or operation fails
      source: {kind: coined}
      concept: broken
    - form: ndahesheya
      class: adj
      field: Everyday speech
      gloss: honest; sincere and not intending to deceive in speech or dealings, rather than guaranteed correct
      source: {kind: coined}
      concept: honest
    - form: ndahesheyi
      class: adj
      field: Everyday speech
      gloss: dishonest; intentionally deceptive in speech or dealings
      source: {kind: coined}
      concept: dishonest
    - form: nyendewe
      class: adv
      field: Everyday speech
      gloss: very; a high degree of the following quality
      source: {kind: coined}
      concept: very
    - form: nyendewela
      class: adv
      field: Everyday speech
      gloss: extremely; a degree near the limit of the following quality
      source: {kind: coined}
      concept: extremely
    - form: nyendewele
      class: adv
      field: Everyday speech
      gloss: somewhat; a moderate degree of the following quality
      source: {kind: coined}
      concept: somewhat
    - form: nyendeweli
      class: adv
      field: Everyday speech
      gloss: slightly; a small degree of the following quality
      source: {kind: coined}
      concept: slightly
    - form: nyendewelo
      class: adv
      field: Everyday speech
      gloss: barely; only just reaching the stated threshold
      source: {kind: coined}
      concept: barely
    - form: nyendewelu
      class: adj
      field: Everyday speech
      gloss: similar; alike in the relevant respect
      source: {kind: coined}
      concept: similar
    - form: nyendeweya
      class: adj
      field: Everyday speech
      gloss: opposite; directly opposed in direction, placement or the stated relation
      source: {kind: coined}
      concept: opposite
    - form: nyendewela ndaheli
      class: adj
      field: Everyday speech
      gloss: tiny; extremely small in absolute physical size
      source: {kind: coined}
      concept: tiny
    - form: nyendewela ndahela
      class: adj
      field: Everyday speech
      gloss: huge; extremely big in absolute physical size
      source: {kind: coined}
      concept: huge
    - form: leya ndeyemi ndeyelo bwelo ndeyemo
      class: adj
      field: Everyday speech
      gloss: best; better than every other compared thing, with bwelo replaced by the actual kind compared
      source: {kind: coined}
      concept: best
    - form: lesheya ndeyemi ndeyelo bwelo ndeyemo
      class: adj
      field: Everyday speech
      gloss: worst; worse than every other compared thing, with bwelo replaced by the actual kind compared
      source: {kind: coined}
      concept: worst
    - form: shewe ndazeli
      class: adj
      field: Everyday speech
      gloss: incomplete; not whole or complete
      source: {kind: coined}
      concept: incomplete
    - form: ndayesha ndewa
      class: adj
      field: Everyday speech
      gloss: too much; an excessive amount
      source: {kind: coined}
      concept: too-much
    - form: ndayeshi ndewa
      class: adj
      field: Everyday speech
      gloss: too little; an amount deficient for the stated need, a conventional smallness-beyond-fitting expression
      source: {kind: coined}
      concept: too-little
    - form: ndawule
      class: v
      field: Everyday speech
      gloss: "can; to be able to perform the following named action: enyi ndawule ndeya, you can go"
      source: {kind: coined}
      concept: can
    - form: ndawuli
      class: adj
      field: Everyday speech
      gloss: possible; capable of occurring or being realized, whether or not permitted
      source: {kind: coined}
      concept: possible
    - form: ndawolu
      class: v
      field: Everyday speech
      gloss: "may; to have permission to perform the following named action: enyi ndawolu ndeya, you may go"
      source: {kind: coined}
      concept: may-permission
    - form: ndawole
      class: v
      field: Everyday speech
      gloss: "must; to be obliged to perform the following named action: enyi ndawole ndeya, you must go"
      source: {kind: coined}
      concept: must
    - form: ndawola
      class: v
      field: Everyday speech
      gloss: "ought; to be well advised to perform the following named action: enyi ndawola ndeya, you should go"
      source: {kind: coined}
      concept: ought
    - form: ndawosha
      class: adj
      field: Everyday speech
      gloss: required; obligatory under the stated rule or circumstances
      source: {kind: coined}
      concept: required
    - form: ndawoshe
      class: adj
      field: Everyday speech
      gloss: optional; permitted and not required
      source: {kind: coined}
      concept: optional
    - form: ndawoshi
      class: adj
      field: Everyday speech
      gloss: allowed; permitted under the relevant authority or rule
      source: {kind: coined}
      concept: allowed
    - form: ndawosho
      class: adj
      field: Everyday speech
      gloss: forbidden; prohibited under the relevant authority or rule
      source: {kind: coined}
      concept: forbidden
    - form: ndawoshu
      class: v
      field: Everyday speech
      gloss: to permit; to grant the named person permission for the action already under discussion
      source: {kind: coined}
      concept: permit
    - form: ndawoshela
      class: v
      field: Everyday speech
      gloss: to prohibit; to forbid the named person from the action already under discussion
      source: {kind: coined}
      concept: prohibit
    - form: ndawosheli
      class: adj
      field: Everyday speech
      gloss: free to act; unconstrained in the action under discussion
      source: {kind: coined}
      concept: free
    - form: ndawoshelo
      class: adj
      field: Everyday speech
      gloss: constrained; restricted in the action under discussion
      source: {kind: coined}
      concept: constrained
    - form: ndawoshelu
      class: adj
      field: Everyday speech
      gloss: willing; ready and consenting to perform the action under discussion
      source: {kind: coined}
      concept: willing
    - form: ndawosheya
      class: adj
      field: Everyday speech
      gloss: unwilling; not consenting to perform the action under discussion
      source: {kind: coined}
      concept: unwilling
    - form: ndawosheyi
      class: adj
      field: Everyday speech
      gloss: intended; planned as the agent's purpose
      source: {kind: coined}
      concept: intended
    - form: ndawosheyo
      class: adj
      field: Everyday speech
      gloss: accidental; occurring without being the agent's purpose
      source: {kind: coined}
      concept: accidental
    - form: shewe ndawule
      class: v
      field: Everyday speech
      gloss: "cannot; not able to perform the following action: enyi shewe ndawule ndeya, you cannot go; shewe negates ability, not permission"
      source: {kind: coined}
      concept: cannot
    - form: shewe ndawuli
      class: adj
      field: Everyday speech
      gloss: impossible; not capable of occurring or being realized
      source: {kind: coined}
      concept: impossible
    - form: nyembala weyi ndeye
      class: v
      field: Everyday speech
      gloss: that person might come; perhaps that person comes, asserting possibility rather than permission; replace the full weyi ndeye event with the actual event
      source: {kind: coined}
      concept: might-possibility
    - form: ndawole shewe ndeya
      class: v
      field: Everyday speech
      gloss: "must not go; obliged not to go, with shewe negating the action after ndawole: enyi ndawole shewe ndeya; this differs from enyi shewe ndawole ndeya, you are not obliged to go"
      source: {kind: coined}
      concept: must-not
    - form: mimbesheya
      class: v
      field: Everyday speech
      gloss: I thank; to express gratitude to the named person
      source: {kind: coined}
      built: [mi-, mbesheya]
    - form: minyendebya
      class: v
      field: Everyday speech
      gloss: I understand; to grasp the meaning or relations of the named matter
      source: {kind: coined}
      built: [mi-, nyendebya]
    - form: minalebeya
      class: v
      field: Everyday speech
      gloss: I forgive; to release resentment or a claim against the named person for an acknowledged wrong, without declaring that no wrong occurred
      source: {kind: coined}
      built: [mi-, nalebeya]
    - form: mindeshaye
      class: v
      field: Everyday speech
      gloss: I help; to assist the named person or undertaking
      source: {kind: coined}
      built: [mi-, ndeshaye]
    - form: minyendelye
      class: v
      field: Everyday speech
      gloss: I name; to give the named person or thing a name, introduced by liye in the worked naming use
      source: {kind: coined}
      built: [mi-, nyendelye]
    - form: minyendema
      class: v
      field: Everyday speech
      gloss: I think; to consider a matter or entertain a thought, without claiming it true
      source: {kind: coined}
      built: [mi-, nyendema]
    - form: mindeya
      class: v
      field: Everyday speech
      gloss: I go; to move away from here or toward the named destination
      source: {kind: coined}
      built: [mi-, ndeya]
    - form: ndeshawo
      class: v
      field: Everyday speech
      gloss: to receive as a welcome guest; to welcome the named person into one's place or company
      source: {kind: coined}
    - form: nyewemya
      class: call
      field: Everyday speech
      gloss: please; a courtesy appeal accompanying a complete request, without changing its verb form
      source: {kind: coined}
      concept: expression-please
    - form: nyewemye
      class: call
      field: Everyday speech
      gloss: excuse me; a conventional request for attention, passage or pardon for a minor interruption
      source: {kind: coined}
      concept: expression-excuse-me
    - form: nzelameya
      class: n
      field: Everyday speech
      gloss: regret; the feeling of sorrow for one's action or its consequences
      source: {kind: coined}
    - form: nyeshemi nyewemya
      class: call
      field: Everyday speech
      gloss: listen, please; an appeal to attend to the sound or words, using nyewemya as a request marker
      source: {kind: coined}
      concept: expression-listen
    - form: nyabeyawe
      class: n
      field: Everyday speech
      gloss: a group; people or things considered together
      source: {kind: coined}
      concept: group
    - form: nyabeyawi
      class: n
      field: Everyday speech
      gloss: a crowd; many people gathered closely together
      source: {kind: coined}
      concept: crowd
    - form: nyemoli
      class: n
      field: Everyday speech
      gloss: a clan; a recognized kin or totem group, not the bare clan-name ending -zi
      source: {kind: coined}
      concept: clan
    - form: nyemole
      class: n
      field: Everyday speech
      gloss: a tribe; a larger people linked by recognized descent and shared practices
      source: {kind: coined}
      concept: tribe
    - form: nyemolo
      class: n
      field: Everyday speech
      gloss: a community; people sharing a locality, practices or mutual life, whether or not one clan
      source: {kind: coined}
      concept: community
    - form: ndalemyo
      class: n
      field: Everyday speech
      gloss: a ruler; a person holding governing authority over a stated domain, without claiming that the Long Pact has a king
      source: {kind: coined}
      concept: ruler
    - form: nyambeya
      class: n
      field: Everyday speech
      gloss: a worker; a person doing work
      source: {kind: coined}
      concept: worker
    - form: nyambeye
      class: n
      field: Everyday speech
      gloss: an artisan; a worker skilled in making or repairing things
      source: {kind: coined}
      concept: artisan
    - form: mbeyelya
      class: n
      field: Everyday speech
      gloss: a merchant; a person engaged in buying and selling
      source: {kind: coined}
      concept: merchant
    - form: nyendelyo
      class: n
      field: Everyday speech
      gloss: a name; the identifying word or expression of a person or thing
      source: {kind: coined}
      concept: name-noun
    - form: nyendelyu
      class: n
      field: Everyday speech
      gloss: a title; an appellation expressing an office, rank or honor
      source: {kind: coined}
      concept: title
    - form: ndalemya
      class: n
      field: Everyday speech
      gloss: a rank; a position in an order of status or responsibility
      source: {kind: coined}
      concept: rank
    - form: nyemela
      class: n
      field: Everyday speech
      gloss: a custom; an established shared way of acting
      source: {kind: coined}
      concept: custom
    - form: nyemeli
      class: n
      field: Everyday speech
      gloss: a tradition; a practice or account handed down across generations
      source: {kind: coined}
      concept: tradition
    - form: nyemelo
      class: n
      field: Everyday speech
      gloss: law; a recognized binding norm or body of norms, including the Pact's binding undertakings without implying a centralized state
      source: {kind: coined}
      concept: law
    - form: nyemelu
      class: n
      field: Everyday speech
      gloss: a rule; a stated requirement governing a particular activity
      source: {kind: coined}
      concept: rule
    - form: ndalemola
      class: n
      field: Everyday speech
      gloss: an order; a coherent arrangement or organization of things, including their arrangement in a sequence or system, distinct from a command
      source: {kind: coined}
      concept: order-noun
    - form: ndalemeli
      class: n
      field: Everyday speech
      gloss: a command; a directive given by someone claiming authority
      source: {kind: coined}
      concept: command-noun
    - form: ndalemelo
      class: n
      field: Everyday speech
      gloss: obedience; acting in accordance with a command or binding rule
      source: {kind: coined}
      concept: obedience
    - form: nyemelwi
      class: n
      field: Everyday speech
      gloss: justice; fair treatment and due regard for persons and claims
      source: {kind: coined}
      concept: justice
    - form: nyemelwo
      class: n
      field: Everyday speech
      gloss: injustice; unfair treatment or denial of due regard
      source: {kind: coined}
      concept: injustice
    - form: nyemelwe
      class: adj
      field: Everyday speech
      gloss: right; morally acceptable under the ethical judgment being stated, not merely factually correct
      source: {kind: coined}
      concept: right-ethical
    - form: nyemelwu
      class: adj
      field: Everyday speech
      gloss: wrong; morally unacceptable under the ethical judgment being stated, not merely factually incorrect
      source: {kind: coined}
      concept: wrong-ethical
    - form: nzamelo
      class: n
      field: Everyday speech
      gloss: peace; a condition of freedom from active hostility or violence
      source: {kind: coined}
      concept: peace
    - form: nzambelya
      class: n
      field: Everyday speech
      gloss: war; organized sustained armed conflict
      source: {kind: coined}
      concept: war
    - form: ndawoshelwa
      class: n
      field: Everyday speech
      gloss: freedom; the condition of being free to act
      source: {kind: coined}
      concept: freedom
    - form: ndawoshelwe
      class: n
      field: Everyday speech
      gloss: captivity; confinement under another's control
      source: {kind: coined}
      concept: captivity
    - form: mbeyalo
      class: n
      field: Everyday speech
      gloss: a gift; something transferred without requiring an agreed return, distinct from an exchange or debt
      source: {kind: coined}
      concept: gift
    - form: mbeyalwe
      class: n
      field: Everyday speech
      gloss: an exchange; a transfer of things or services between parties in return for one another
      source: {kind: coined}
      concept: exchange-noun
    - form: mbeyalwi
      class: n
      field: Everyday speech
      gloss: a debt; an outstanding obligation to return a thing, value or service
      source: {kind: coined}
      concept: debt
    - form: mbeyalwo
      class: n
      field: Everyday speech
      gloss: wealth; an abundance of resources or recognized value, including circulating cattle wealth without restricting the word to cattle
      source: {kind: coined}
      concept: wealth
    - form: mbeyalwu
      class: n
      field: Everyday speech
      gloss: poverty; a shortage of resources for one's needs or standing
      source: {kind: coined}
      concept: poverty
    - form: mbeyalwa
      class: n
      field: Everyday speech
      gloss: property; things over which a person or group has recognized possession or rights
      source: {kind: coined}
      concept: property
    - form: mbeyalewa
      class: n
      field: Everyday speech
      gloss: ownership; the recognized relation of belonging to an owner
      source: {kind: coined}
      concept: ownership
    - form: ndabemya
      class: n
      field: Everyday speech
      gloss: honor; respected standing or esteem, not a statement that every social exclusion is just
      source: {kind: coined}
      concept: honor
    - form: lashebesho
      class: n
      field: Everyday speech
      gloss: a secret; a matter kept from general knowledge, not restricted to sacred names
      source: {kind: coined}
      concept: secret
    - form: nyendemyo
      class: n
      field: Everyday speech
      gloss: knowledge; what is known, distinct from belief alone
      source: {kind: coined}
      concept: knowledge
    - form: nyebelwa
      class: n
      field: Everyday speech
      gloss: a being; something that exists, including a living being or a spirit where asserted
      source: {kind: coined}
      concept: being
    - form: nyebelwe
      class: n
      field: Everyday speech
      gloss: life; the condition or course of being alive
      source: {kind: coined}
      concept: life
    - form: ndeyomya
      class: n
      field: Everyday speech
      gloss: an origin; the source from which a thing, person or practice arose
      source: {kind: coined}
      concept: origin
    - form: ndeyebelo
      class: n
      field: Everyday speech
      gloss: a beginning; the first stage or start of a thing or event
      source: {kind: coined}
      concept: beginning
    - form: ndeyobyelo
      class: n
      field: Everyday speech
      gloss: an end; the final boundary or stage of a thing or event
      source: {kind: coined}
      concept: end-noun
    - form: nyambelya
      class: n
      field: Everyday speech
      gloss: completion; the condition or event of finishing what was undertaken
      source: {kind: coined}
      concept: completion
    - form: nyambelye
      class: n
      field: Everyday speech
      gloss: a change; a difference arising in a thing's form, condition or conduct
      source: {kind: coined}
      concept: change-noun
    - form: nyambelyi
      class: n
      field: Everyday speech
      gloss: a transformation; a substantial change of form or nature
      source: {kind: coined}
      concept: transformation
    - form: ndabelwa
      class: n
      field: Everyday speech
      gloss: a part; a constituent portion of a whole
      source: {kind: coined}
      concept: part
    - form: nyewabwe
      class: n
      field: Everyday speech
      gloss: a cause; something that brings an event or condition about
      source: {kind: coined}
      concept: cause
    - form: nyewabwi
      class: n
      field: Everyday speech
      gloss: an effect; the event or condition brought about by a cause
      source: {kind: coined}
      concept: effect
    - form: nyewali
      class: n
      field: Everyday speech
      gloss: a kind; a category of things sharing relevant characteristics
      source: {kind: coined}
      concept: kind
    - form: nyewelwa
      class: adj
      field: Everyday speech
      gloss: real; actually existing or occurring, not merely imagined
      source: {kind: coined}
      concept: real
    - form: nyewelwe
      class: adj
      field: Everyday speech
      gloss: unreal; imagined or not actually existing or occurring
      source: {kind: coined}
      concept: unreal
    - form: nyewelwi
      class: adj
      field: Everyday speech
      gloss: natural; arising from the ordinary processes of living beings or the world rather than deliberate manufacture, without denying the culture's neighborly understanding of spirits
      source: {kind: coined}
      concept: natural
    - form: nyewelwo
      class: adj
      field: Everyday speech
      gloss: unnatural; contrary to the usual processes of living beings or the world, or deliberately made in contrast to them, as the stated context determines
      source: {kind: coined}
      concept: unnatural
    - form: mindeshawo
      class: v
      field: Everyday speech
      gloss: I receive as a welcome guest; to welcome the named person into one's place or company
      source: {kind: coined}
      built: [mi-, ndeshawo]
    - form: zherami le zhone
      class: call
      field: Everyday speech
      gloss: hello; the existing peaceful greeting invocation, literally spirits good abide, reused as a whole greeting without changing its old words or asserting a new spirit-name meaning
      concept: hello
    - form: enyi lome nzame
      class: call
      field: Everyday speech
      gloss: goodbye; a conventional parting wish that you, the one honored, be safe
      source: {kind: coined}
      concept: goodbye
    - form: mindeshawo enyi
      class: call
      field: Everyday speech
      gloss: welcome; I receive you, the one honored, as a welcome guest
      source: {kind: coined}
      concept: expression-welcome
    - form: mimbesheya enyi
      class: call
      field: Everyday speech
      gloss: thank you; I express gratitude to you, the one honored
      source: {kind: coined}
      concept: expression-thank-you
    - form: nyeme mbeyalwi
      class: call
      field: Everyday speech
      gloss: you are welcome; the conventional response without a debt after thanks, not a claim that every gift in society creates no reciprocal duty
      source: {kind: coined}
      concept: expression-youre-welcome
    - form: milomeli nzelameya
      class: call
      field: Everyday speech
      gloss: sorry; I have regret, an expression of remorse rather than an admission of a particular legal liability
      source: {kind: coined}
      concept: expression-sorry
    - form: enyi nalebeya mewi nyewemya
      class: call
      field: Everyday speech
      gloss: forgive me, please; the whole cited request asks the honored addressee to release resentment for a wrong
      source: {kind: coined}
      concept: expression-forgive-me
    - form: nyewema nyembali
      class: call
      field: Everyday speech
      gloss: of course; an assured affirmative response
      source: {kind: coined}
      concept: of-course
    - form: enyi lasheya nyewemya
      class: call
      field: Everyday speech
      gloss: look, please; a conventional request that the addressee direct their gaze
      source: {kind: coined}
      concept: expression-look
    - form: enyi ndeyoshi nyewemya
      class: call
      field: Everyday speech
      gloss: wait, please; a conventional request to remain pending the stated event
      source: {kind: coined}
      concept: expression-wait
    - form: enyi ndeye liye ndebya nyewemya
      class: call
      field: Everyday speech
      gloss: come here, please; a conventional request to move toward the speaker's place
      source: {kind: coined}
      concept: expression-come-here
    - form: enyi ndeya ndebwabi ndebya
      class: call
      field: Everyday speech
      gloss: go away; a conventional request to move away from the speaker's place
      source: {kind: coined}
      concept: expression-go-away
    - form: enyi ndeshaye mewi
      class: call
      field: Everyday speech
      gloss: help; a direct appeal to the honored addressee to assist the speaker
      source: {kind: coined}
      concept: expression-help
    - form: enyi ndeyebya
      class: call
      field: Everyday speech
      gloss: stop; a conventional urgent request to cease the action or movement under discussion
      source: {kind: coined}
      concept: expression-stop
    - form: nyewabe nyewala
      class: call
      field: Everyday speech
      gloss: what? a brief request to identify or clarify the matter just mentioned
      source: {kind: coined}
      concept: expression-what
    - form: nyewemye nyewala
      class: call
      field: Everyday speech
      gloss: pardon? a courteous request to repeat or clarify what was just said
      source: {kind: coined}
      concept: expression-pardon
    - form: ndayelya nyewemya
      class: call
      field: Everyday speech
      gloss: again, please; a request for the action or words to be repeated
      source: {kind: coined}
      concept: expression-again
    - form: minyendebya lowa
      class: call
      field: Everyday speech
      gloss: I understand it; an acknowledgment that the speaker grasps the matter
      source: {kind: coined}
      concept: expression-i-understand
    - form: shewe minyendebya lowa
      class: call
      field: Everyday speech
      gloss: I do not understand it; shewe negates the first-person predicate minyendebya
      source: {kind: coined}
      concept: expression-i-do-not-understand
    - form: enyi nyenda lowa nyewabo
      class: v
      field: Everyday speech
      gloss: how do you say it? lowa stands for the expression whose spoken wording is sought
      source: {kind: coined}
      concept: expression-how-do-you-say
    - form: nyewabe lome nyendelyo liwe lewi bwelo
      class: v
      field: Everyday speech
      gloss: what is this called? what is the name of this thing? lewi precedes bwelo, and the question asks for the identifying name
      source: {kind: coined}
      concept: expression-what-is-this-called
    - form: nyembele nyewala
      class: call
      field: Everyday speech
      gloss: really? a surprised request to confirm the reality of what was just asserted
      source: {kind: coined}
      concept: expression-really
    - form: nyewemo nyendewe
      class: call
      field: Everyday speech
      gloss: not at all; an emphatic negative response, conventionally no to any degree in the matter just asked
      source: {kind: coined}
      concept: expression-not-at-all
    - form: ndalo ndawe
      class: n
      field: Everyday speech
      gloss: people; many persons, a complete ordinary counted expression rather than an invented plural prefix
      source: {kind: coined}
      concept: people
    - form: ndalo pando mbeleli
      class: n
      field: Everyday speech
      gloss: a man; an adult male human person
      source: {kind: coined}
      concept: man
    - form: ndalo pande mbeleli
      class: n
      field: Everyday speech
      gloss: a woman; an adult female human person
      source: {kind: coined}
      concept: woman
    - form: nyebali pande
      class: n
      field: Everyday speech
      gloss: a girl; a young female person
      source: {kind: coined}
      concept: girl
    - form: ndalo mbeleli
      class: n
      field: Everyday speech
      gloss: an adult; a mature person
      source: {kind: coined}
      concept: adult
    - form: ndalo ndawa
      class: n
      field: Everyday speech
      gloss: an individual; one person considered separately
      source: {kind: coined}
      concept: individual
    - form: milashe
      class: v
      field: Everyday speech
      gloss: I see; to discern with the eyes
      source: {kind: coined}
      built: [mi-, lashe]
    - form: minyeshi
      class: v
      field: Everyday speech
      gloss: I hear; to perceive sound with the ears
      source: {kind: coined}
      built: [mi-, nyeshi]
    - form: mifebele
      class: v
      field: Everyday speech
      gloss: I smell; to sense a scent with the nose
      source: {kind: coined}
      built: [mi-, febele]
    - form: milabesha
      class: v
      field: Everyday speech
      gloss: I taste; to sense a flavour
      source: {kind: coined}
      built: [mi-, labesha]
    - form: milabeyi
      class: v
      field: Everyday speech
      gloss: I touch; to feel something with the hand
      source: {kind: coined}
      built: [mi-, labeyi]
    - form: milasheya
      class: v
      field: Everyday speech
      gloss: I look; to direct one's eyes at the object
      source: {kind: coined}
      built: [mi-, lasheya]
    - form: milashemi
      class: v
      field: Everyday speech
      gloss: I watch; to keep an attentive gaze upon someone or something
      source: {kind: coined}
      built: [mi-, lashemi]
    - form: minyeshemi
      class: v
      field: Everyday speech
      gloss: I listen; to direct attention to what is heard
      source: {kind: coined}
      built: [mi-, nyeshemi]
    - form: minyabeya
      class: v
      field: Everyday speech
      gloss: I feel a bodily sensation, rather than merely hold a belief
      source: {kind: coined}
      built: [mi-, nyabeya]
    - form: milashebo
      class: v
      field: Everyday speech
      gloss: I notice
      source: {kind: coined}
      built: [mi-, lashebo]
    - form: minyabemi
      class: v
      field: Everyday speech
      gloss: I perceive; to become aware through the senses
      source: {kind: coined}
      built: [mi-, nyabemi]
    - form: milashebi
      class: v
      field: Everyday speech
      gloss: I recognize; to identify something already known
      source: {kind: coined}
      built: [mi-, lashebi]
    - form: milashemo
      class: v
      field: Everyday speech
      gloss: I seem; to present the appearance stated after the subject
      source: {kind: coined}
      built: [mi-, lashemo]
    - form: milomeli
      class: v
      field: Everyday speech
      gloss: I have; to possess or experience the following object
      source: {kind: coined}
      built: [mi-, lomeli]
    - form: milome
      class: v
      field: Everyday speech
      gloss: I am; milome mbelele, I am healthy
      source: {kind: coined}
      built: [mi-, lome]
    - form: "nyemoya"
      class: n
      field: "Everyday speech"
      gloss: "griot or keeper who carries an oral record"
      source: {kind: coined}
    - form: "ruwolabemi"
      class: n
      field: "Clan and totem"
      gloss: "lion tooth worn as an emblem"
      built: ["ruwo", "labemi"]
      source: {kind: coined}
    - form: "mbelaya"
      class: n
      field: "Everyday speech"
      gloss: "braid of hair carrying a lineage reckoning"
      source: {kind: coined}
    - form: "milabweyela"
      class: v
      field: "Everyday speech"
      gloss: "I carry the named thing, an individually cited first-person utterance"
      built: ["mi-", "labweyela"]
      source: {kind: coined}
    - form: "ndahola"
      class: n
      field: "Everyday speech"
      gloss: "length or full extent"
      source: {kind: coined}
    - form: "nyandale"
      class: adj
      field: "Everyday speech"
      gloss: "given or received for keeping"
      source: {kind: coined}
    - form: "nyolawa"
      class: n
      field: "Everyday speech"
      gloss: "generation in a line of descent"
      source: {kind: coined}
    - form: "mbowa"
      class: n
      field: "Everyday speech"
      gloss: "cattle or a cattle herd"
      source: {kind: coined}
    - form: "mboyela"
      class: n
      field: "Everyday speech"
      gloss: "feud over cattle"
      source: {kind: coined}
    - form: "nyamboloshe"
      class: adj
      field: "Everyday speech"
      gloss: "broken apart by hostile force"
      source: {kind: coined}
    - form: "nzemowa"
      class: n
      field: "Everyday speech"
      gloss: "armed host or war force"
      source: {kind: coined}
    - form: "labwesha"
      class: adj
      field: "Everyday speech"
      gloss: "worn smooth through repeated handling or telling"
      source: {kind: coined}
    - form: "mbesha"
      class: n
      field: "Everyday speech"
      gloss: "reed used for a canoe"
      source: {kind: coined}
    - {form: "koleya", class: n, field: "Everyday speech", gloss: "canoe", source: {kind: coined}}
    - form: "ngone"
      class: n
      field: "Clan and totem"
      gloss: "eagle, as an ordinary animal word"
      source: {kind: coined}
    - form: "ngayela"
      class: n
      field: "Everyday speech"
      gloss: "high country with an escarpment"
      source: {kind: coined}
    - {form: "ngobela", class: n, field: "Everyday speech", gloss: "gold", source: {kind: coined}}
    - form: "selenga"
      class: n
      field: "Clan and totem"
      gloss: "leopard, as an ordinary animal word"
      source: {kind: coined}
    - form: "ngende"
      class: n
      field: "Everyday speech"
      gloss: "language or manner of speech"
      source: {kind: coined}
    - form: "ndeyala"
      class: n
      field: "Everyday speech"
      gloss: "road or traveled route"
      source: {kind: coined}
    - form: "ndeyola"
      class: n
      field: "Everyday speech"
      gloss: "edge of a stand of trees"
      source: {kind: coined}
    - form: "kembowa"
      class: n
      field: "Everyday speech"
      gloss: "grain kept for food"
      source: {kind: coined}
    - form: "mashebo"
      class: n
      field: "Everyday speech"
      gloss: "well providing water"
      source: {kind: coined}
    - form: "ndebeyele"
      class: n
      field: "Everyday speech"
      gloss: "middle or central part of an area"
      source: {kind: coined}
    - form: "nyoliruwo"
      class: n
      field: "The Pact and the council"
      gloss: "Daughter of the Lion, the meaning spoken for the hereditary name"
      built: ["nyoli", "ruwo"]
      source: {kind: coined}
    - form: "selemba"
      class: n
      field: "The Pact and the council"
      gloss: "witness, without a claim to have founded or ruled the Pact"
      source: {kind: coined}
    - form: "nyemawa"
      class: n
      field: "The Pact and the council"
      gloss: "term of an agreement"
      source: {kind: coined}
    - form: "mbeyosha"
      class: n
      field: "Everyday speech"
      gloss: "weapon raised against an opponent"
      source: {kind: coined}
    - form: "nduloba"
      class: adj
      field: "Everyday speech"
      gloss: "old or long established, of a thing or practice"
      source: {kind: coined}
    - {form: "pabweya", class: n, field: "Everyday speech", gloss: "spear", source: {kind: coined}}
    - form: "nyemanda"
      class: n
      field: "The Pact and the council"
      gloss: "pact or sworn agreement"
      source: {kind: coined}
    - form: "ndalewa"
      class: n
      field: "The Pact and the council"
      gloss: "paramount of a clan, without authority over the other clans"
      source: {kind: coined}
    - form: "mbaloya"
      class: n
      field: "The Pact and the council"
      gloss: "kingdom or centralized royal state"
      source: {kind: coined}
    - form: "mbalowa"
      class: n
      field: "The Pact and the council"
      gloss: "king"
      source: {kind: coined}
    - form: "nyoliwemwo"
      class: n
      field: "Everyday speech"
      gloss: "our daughters, a whole kin reference cited in Nyoli's promise without a wider possession paradigm"
      source: {kind: coined}
    - form: "nyemeleyo"
      class: n
      field: "Everyday speech"
      gloss: "the rest or matters remaining to be settled"
      source: {kind: coined}
    - form: "ndalebwo"
      class: n
      field: "Everyday speech"
      gloss: "owner of the property under discussion"
      source: {kind: coined}
    - form: "mbeyami"
      class: adj
      field: "Everyday speech"
      gloss: "precious or worth carrying and preserving"
      source: {kind: coined}
    - form: "nyesheya"
      class: v
      field: "Everyday speech"
      gloss: "confirm an oral recital against the version known to its hearers"
      source: {kind: coined}
    - form: "nyabelomi"
      class: n
      field: "The Brightness and the guides"
      gloss: "initiation into a tradition"
      source: {kind: coined}
    - form: "ndeyamo"
      class: n
      field: "Everyday speech"
      gloss: "purpose or intended use"
      source: {kind: coined}
    - form: "nyendemoshi"
      class: n
      field: "Everyday speech"
      gloss: "oral record kept by trained memory keepers"
      source: {kind: coined}
    - form: nyembe
      class: n
      field: Everyday speech
      gloss: "a song or performed memory-song"
      source: {kind: coined}
    - form: nzambowa
      class: n
      field: Everyday speech
      gloss: "a challenge or contest"
      source: {kind: coined}
    - form: ndahala
      class: adj
      field: Everyday speech
      gloss: "longer than the stated length"
      source: {kind: coined}
    - form: ndahele
      class: adj
      field: Everyday speech
      gloss: "shorter than the stated length"
      source: {kind: coined}
    - form: nyendo
      class: n
      field: Everyday speech
      gloss: "a word; something said, including a word given and held to"
      source: {kind: coined}
    - form: ndeyalwu
      class: adj
      field: Everyday speech
      gloss: "fourth; occupying position four in an ordered sequence, and with ndeyelo every fourth in a recurring count"
      source: {kind: coined}
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {clan}"
    given:
      female:
        - "adenza"
        - "aíbesa"
        - "akisa"
        - "amífeli"
        - "ándiya"
        - "azímela"
        - "bálesha"
        - "bénduya"
        - "búndeya"
        - "daliba"
        - "díngoya"
        - "dombesa"
        - "éduma"
        - "fádewa"
        - "féliwa"
        - "gaja"
        - "góndesi"
        - "habishe"
        - "háyeba"
        - "jenda"
        - "juma"
        - "kaja"
        - "káleshi"
        - "kénzowa"
        - "kíshela"
        - "kóbesa"
        - "lálija"
        - "lanja"
        - "lenza"
        - "lólewa"
        - "malya"
        - "méshola"
        - "mídewa"
        - "míndeli"
        - "móndawe"
        - "múndewa"
        - "ndaka"
        - "néntoli"
        - "nija"
        - "níseta"
        - "njuma"
        - "núremi"
        - "panja"
        - "píkesa"
        - "raja"
        - "rálesi"
        - "sálua"
        - "sándeyo"
        - "sáwemi"
        - "séndowe"
        - "sílowe"
        - "súnemi"
        - "táliba"
        - "témoyi"
        - "téndoli"
        - "túndaye"
        - "wanja"
        - "wéndasi"
        - "yaja"
        - "záyeli"
      male:
        - "amaleso"
        - "bákeni"
        - "bálesho"
        - "dámbani"
        - "fódemi"
        - "gaduno"
        - "gongwelo"
        - "jao"
        - "jelo"
        - "kádewo"
        - "kásimo"
        - "kisado"
        - "lálumo"
        - "lóbezo"
        - "máshelo"
        - "mbuka"
        - "mondú"
        - "ndáfiyo"
        - "njaka"
        - "panza"
        - "rábesi"
        - "sálumo"
        - "sandé"
        - "sandó"
        - "tálemo"
        - "tamasé"
        - "tímbelo"
        - "tóbesho"
        - "yámeto"
        - "zákesho"
    clan:
      - "árambu"
      - "bándala"
      - "béndawe"
      - "dándira"
      - "dóbalanda"
      - "édumba"
      - "fámangali"
      - "gúndala"
      - "índawe"
      - "jándaka"
      - "kásiramba"
      - "kéndalu"
      - "kómaludi"
      - "kúbola"
      - "lándala"
      - "lúsani"
      - "málazuli"
      - "mbándala"
      - "mpanza"
      - "múgandala"
      - "ndálude"
      - "ndánga-sólembe"
      - "nkúndala"
      - "nómaledi"
      - "ntalandi"
      - "nyámelo"
      - "óbandala"
      - "ódawe"
      - "ódumbala"
      - "ófawe"
      - "ólambala"
      - "ómalesi"
      - "ómaletu"
      - "ópala"
      - "órindi"
      - "ótandala"
      - "pálambe"
      - "pándazuli"
      - "péndala"
      - "rábandala"
      - "róbandala"
      - "sábandala"
      - "sándambala"
      - "shándiro"
      - "sónkelada"
      - "tábandala"
      - "tálamba"
      - "tándizuli"
      - "téndiro"
      - "tómalinde"
      - "túbandala"
      - "udandala"
      - "úlambo"
      - "úndala"
      - "utúndala"
      - "wánduri"
      - "yándala"
      - "yómasunde"
      - "zákedala"
      - "zímbala"
  sounds:
    stress: {two: first, longer: first, mark: acute}
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
    - {name: ékunda, tongue: nyaluban}
    - {name: Ékunda Tribe, tongue: translation}
    - {name: Ékunda Village, tongue: translation}
    - {name: Elder, tongue: translation}
    - {name: Elder Shaman, tongue: translation}
    - {name: Envoy, tongue: translation}
    - {name: fénjara, tongue: nyaluban}
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
    - {name: heto lubemo, tongue: nyaluban, built: [heto, lubemo]}
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
    - {name: kwendari zohiring, tongue: kept}
    - {name: zherami nyende, tongue: nyaluban, built: [zherami, nyende]}
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
    - {name: ndawelari thakwaring, tongue: kept}
    - {name: Ngonzi Eagle, tongue: translation}
    - {name: Ngonzi Totem, tongue: translation}
    - {name: nyáluba, tongue: nyaluban}
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
    - {name: shorinya ndafo, tongue: nyaluban, built: [shor-, -inya, ndafo]}
    - {name: Speaker of the Council, tongue: translation}
    - {name: Spirit-shunned, tongue: translation}
    - {name: Spirit-Speaker, tongue: translation}
    - {name: tabeso, tongue: nyaluban, built: [tabes-, -o]}
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
    - name: ngende ngabeli
      tongue: nyaluban
      gloss: "the Stone Tongue, the speech in Lusheya's recital"
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
    - {form: Ómandalí, instead: Ómalesi, why: "an Earth word, in the name lists"}
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

Nyáluban is the principal language of the [[affiliation-nylbtrblntn|Nyáluba Tribal Nation]], a confederation of communities occupying the southern reaches of the [[place-xerathia|Zerathia]] continent. Spoken by an estimated 2-3 million people across dispersed communities, Nyáluban is an oral language with no writing tradition of its own, transmitted through memory, song, and ceremonial recitation rather than through written texts. This linguistic orientation reflects a cultural emphasis on the spoken word, memory, and communal participation in the creation and preservation of knowledge.

The language is remarkable for its sophisticated system of drum and tone communication, which permits long-distance transmission of complex messages across the savanna and through forested regions. This feature, combined with its tonal phonology and rich metaphorical vocabulary, gives Nyáluban a distinctive character among the world's languages.

## How Nyáluban sounds

Nyáluban is pitched and even, spoken as readily as it is drummed.

**The vowels.** _a_, _o_, _e_, _i_ and _u_, all open. Stress the first syllable unless an acute marks another. The acute marks stress, not high pitch.

**The consonants.** _ny_, _ng_, _mb_, _nd_, _nk_, _sh_, _l_, _b_, _d_ and _w_.

**Clusters.** _ng_, _mb_, _nd_ and _nk_ open syllables. A short hum before the consonant, as in _um-BU-ka_, or the consonant alone, is always fine.

**Endings.** Nyáluban words end in a vowel, as in _ruwo_, _nyoli_ and _Lusheya_.

**Verse.** A memory-song is called by a griot and answered by those gathered, and it does not rhyme: every Nyáluban word closes on a vowel, so a rhyme costs nothing and proves nothing. Its line has four beats. Every word stresses its first syllable, so every word of two syllables or more carries one beat, and the small joining words _ngwi_, _nu_, _nde_ and _ngo_ carry none. The gathered answer is a line of four beats too, most often a two-word phrase said twice, as in _ruwo lashemi, ruwo lashemi_, "the lion watched, the lion watched". The craft is in return: a line that opens on the words the line before closed on, a run of lines that each open on the same word, and a refrain that comes back with one word changed. A clan is praised by its name and the things it stands with, as in _ngonzi mbeyi ngayela nzabi_, "Ngonzi with the red escarpment". A count is kept on the fingers, _labye ndawa_, _labye ndawi_, "finger one, finger two", until the hand is whole.

**What Nyáluban leaves out.** Common spelling leaves tone unwritten, uses at most one mark in a word and has no closed syllable. A reader need not learn rising or falling tones to say a name or read a passage aloud.

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

Nyáluban speakers distinguish pitch levels and rising and falling contours in speech. This is part of the language within the world, including its drum register. The common spelling gives an accessible spoken approximation for readers; the descriptions below do not add pronunciation marks to words.

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

### Reading and performance

Use the letters and first-syllable stress of [[doc-prnncthlrn|Pronouncing Thalorna]] when reading Nyáluban aloud. An acute indicates a different stressed syllable; it does not identify a high tone. Common spelling uses no grave, caron or circumflex to mark pitch. Readers are not expected to reproduce tonal distinctions for their words to be understood at the table.

Linguistic tone and performance melody are separate. A call does not automatically give its words rising tones, nor does an answer give them falling tones. A griot's rhythm, repeated phrases and the hearers' responses carry the shape of a memory-song. Where useful, an optional direction outside the words can ask for a held syllable or a rising or falling phrase. It does not change the spelling or establish a new word meaning.

The dictionary and cited constructions supply the words and grammar of a passage. Do not assign unwritten tones to new words or invent tonal changes to supply missing grammar. Specialist pitch numbers belong to an explicitly described drum score, not to ordinary names or verse readings.

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
: Stress falls on the first syllable unless an acute marks another stressed syllable. Stress and pitch are separate: no secondary-stress pattern or tonal contour needs to be learned for the common reading.

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

## Everyday speech

_Milashe enyi_ means “I see you, the one honored”; _enyi lashe mewi_ means
“you see me”. The existing _mi-_ precedes the verb and carries the first-person
subject in these cited present utterances. _Mewi_ names the speaker as an object
or independent reference. _Weyi lashe lowa_ means “that person sees it”. These
examples keep subject, verb and object in the established order. The new words
are ordinary spoken citations; they do not assign additional tones or drum
patterns to the old names, words or formulae.

_Weyi lome mbelele_ means “that person is healthy”. _Weyi lomeli ndameli_ means “that person feels joy”, literally has joy.
The parallel feeling objects _ndamela_, _ndamelo_ and _mbale ndelo_ express
happiness, pleasure and contentment. _Nzeli liye namele ndale_ is the feeling of
a desire fulfilled. Bodily sensation _nyabeyo_, emotional feeling _nzeli_,
confidence _nyademi_ and truth _nyewelo_ retain their separate meanings.

The cited feeling expressions put the feeling first and its target after
_liye_. _Nalewa liye nalemo_, _nalewa liye mbeli_ and _nalewa liye nyemo_
distinguish romantic, friendship and kin love. _Naleme_ concerns everyone's
good without seeking return, including people outside the five clans. _Nalawo_
is sexual appetite. _Ndeshimi_ describes companionship without requiring a
close friendship. _Ndabemi ndeshe_ conveys reverence; _nyabemelo_ conveys awe.

_Kabe liwe mewi_ is “my cup”. _Kabe liwe enyi_ and _kabe liwe mewo_ are “your
cup” and “our cup”. _Kabe lome liwe mewi_ means “the cup belongs to me”. The
separately cited _nelabwe_ is “my hand” and _nedalo_ “my father”: _ne-_ marks
the speaker as possessor in those two inalienable forms. This adds no wider
person or noun-class table. The old _nu_ retains its person-to-clan use, as in
_Tabeso nu Fénjara_. The relational use of _liwe_ in _ndeyela liwe kabe_,
“number of cups”, _ndeyeli liwe mashelu_, “amount of water”, and _nyendelyo liwe
lewi bwelo_, “name of this thing”, identifies the thing counted, measured or
named; it does not make a body part alienable.

The demonstrative _lewi_ precedes its noun,
as in _lewi kabe_, “this cup”. _Ndalo pando mbeleli_ and _ndalo pande mbeleli_
explicitly name an adult man and woman. _Nyebali pando_ names a boy, and in a
parent-child relationship a son even when grown; _nyebali pande_ names a girl.
The old _nyoli_ remains daughter. _Nyemoli_, _nyemole_ and _nyemolo_ distinguish
clan, tribe and community. _Ndalemyo_ can name a ruler elsewhere without
asserting that the Long Pact has a king.

_Enyi helameya_ is “you inhale”; _enyi helamewa_, “you exhale”. _Weyi helabo_
means “that person suffocates” when breathable air is absent or the airflow is
blocked. _Weyi lome kembela_ describes being full after eating or drinking.
_Nyeme lasheinya_ is physical blindness and _nyeme nyeshiinya_ physical
deafness; the faculty nouns use the existing quality ending _-inya_. Neither
expression denies a person's place in the household or community. _Nyabeye_
is conscious, and _shewe nyabeye_ unconscious, rather than merely asleep.

_Enyi mbeya kabe liye mewi_ means “you give a cup to me”. _Enyi labweyela kabe
liye mewi_ means “you carry a cup toward me”, the cited bringing use.
_Enyi labweyemi kabe ndebyo kaboma_ means “you put a cup inside the house”.
_Enyi ndeyomi ndeyoma kaboma_ means “you leave the house”; _enyi ndeyome liye
kaboma_, “you arrive at the house”. _Enyi labweyolu kabe_ is “you drop a cup”.
_Kaboma lome_ is the complete existential “a house exists”. _Weyi lomela
mbelele_ means “that person becomes healthy”; the result follows _lomela_.
_Nyendelya_ explains a matter. _Nyende liye nzami_ conventionally threatens
harm from the speaker's own agency, rather than merely warning of danger.

Number words cite counts without supplying new noun-class prefixes.
_Ndalo ndawe_ means “many people”; _ndeyela liwe kabe_ counts cups, while
_ndeyeli liwe mashelu_ measures water. The comparison _ndayela ndeyemi
ndeyelo bwelo ndeyemo_ means “more than every other compared thing”, with the
actual counted or measured kind replacing _bwelo_; _ndayeli_ gives the reverse
comparison. These supply most and least, while _leya_ and _lesheya_ give best
and worst with the same explicit standard. _Ndawi ndaza_ means “both of the
two”; _ndawa ndeyema ndawi_ one from the two, and _ndewola ndeyema ndawi_ none
from the two. _Ndawabe_ and _ndawabi_ are equal halves and quarters.

_Ndebyo ndeleyo ndaweyi_ means “in position seven”; _ndebyo ndeleyo ndaweyo_
means “in position eight”. The actual position number replaces the final
number. _Ndayeshe ndewena ndawila_ means “near but below ten”, the scalar
“almost ten”; _ndeyesha ndawila_ means “about ten”, and _ndeyeshi ndawila_
“exactly ten”. _Nyendewela ndaheli_ is absolutely tiny; _nyendewela ndahela_
is huge. _Ndeshe ndebyo ndayaba_ expresses long duration, distinct from spatial
length _ndahelo_.

_Enyi ndeye ndayembi lusheyemi_ means “you come before the rain”, and
_ndayemba lusheyemi_ supplies “after the rain”. _Enyi kembe ndayembo ndayebyo_
means “you eat during the meal”; the meal is the actual event slot, also
expressing while eating. _Ndayembu lusheyemi_ continues until the rain;
_ndayembela lusheyemi_ starts at the rain and continues through the reference
time. Replace the named event or time, not a grammatical suffix. _Ndebyo
ndayebya ndawa_, _ndebyo ndayebya ndawi_ and _ndebyo ndayebya ndawe_ count
one, two and many occasions. _Ndayelya_ means again. _Weyi ndayelye ndeye_,
“that person already comes”, and _weyi ndayelyi ndeye_, “that person still
comes”, place the time word before the cited predicate. _Weyi ndayelyo shewe
ndeye_ means “that person has not come yet” in the current reference context,
without asserting a new tense ending.

_Nyewaba lashe enyi_ asks “who sees you?”; _enyi lashe nyewaba_ asks “whom do
you see?” _Nyewabi lome le_ selects “which is good?” from the stated set.
_Enyi lome ndebyo nyewabu_ asks where you are, and _enyi ndeye ndebyo nyewabya_
asks when you come. _Enyi ndeya nyewabyo nyewabe_ asks the reason for going;
_enyi ndeya nyewabyu nyewabe_ asks its intended purpose. _Enyi nyambe nyewabo_
asks how you do it. _Ndeyela liwe kabe lome nyewabe_ asks how many cups;
_ndeyeli liwe mashelu lome nyewabe_ asks how much water. _Lewi kabe lome liwe
nyewaba_ asks whose cup this is. _Enyi mbeya kabe liye nyewaba_ asks to whom
you give it; _enyi ndeye ndeyoma nyewabu_ asks from where you come.
_Weyi ndeye nyewala_ is “does that person come?”, with the question marker
after the full clause. _Enyi nyenda nyewabe_ requests clarification.

_Enyi lashe ndeyembo_ means “you see yourself”; _weyi lashe ndeyembo_, “that
person sees themself”. The object _ndeyembo_ refers to the subject of its own
clause. _Nyembali_ asserts the speaker's assurance; _nyembala_ leaves the claim
open as perhaps, and _nyembalo_ presents it as probable. _Nyembaya weyi ndeye_
means “supposedly that person comes”, a reported claim without endorsement.
_Nyembele weyi lome mbelele_ means “that person is truly healthy”, asserting
reality. The noun _nyeweshela_ specifically involves intent to deceive;
_nyewesheli_ also includes an honestly mistaken false claim.

_Ngoyo enyi lome ndebya ngoyela mindeya_ means “if you are here, then I go”.
_Ngoyele enyi lome ndebya ngoyela mindeya_ means “unless you are here, then I
go”: if you are not here, I go. _Enyi ndeye ngoyeli mindeya_ means “you come,
otherwise I go”, making my going conditional on your not coming. _Ngoyelo
weyi lome lembele, weyi ndeye_ means “although that person is tired, they
come”. _Ngwelo weyi ndeye ngo weyi ndeya_ offers either coming or going;
_ngole weyi ndeye ngole weyi ndeya_ excludes both; _ngoli weyi ndeye ngwi weyi
nyenda_ affirms both coming and speaking. _Weyi nyendema ngolo weyi ndeye ngo
weyi shewe ndeye_ means “that person considers whether they come or do not
come”. _Ndalo ndawi, ngoleya mbeli ngwi ndeshi_ identifies two people, namely
a friend and a companion. These are the cited clause constructions, not an
additional mood or person paradigm.

_Enyi ndawule ndeya_ means “you can go”; _enyi shewe ndawule ndeya_, “you
cannot go”. _Enyi ndawolu ndeya_ means “you may go”, giving permission rather
than asserting ability. _Nyembala weyi ndeye_ means “that person might come”.
_Enyi ndawole ndeya_ means “you must go”; _enyi ndawole shewe ndeya_, “you must
not go”. _Enyi shewe ndawole ndeya_ instead means “you are not obliged to go”.
_Enyi ndawola ndeya_ gives advice to go. _Ndawoshe_ is optional: permitted and
not required. _Weyi ndawoshu enyi_ permits you to perform the action already
under discussion. _Weyi ndawoshela enyi_ prohibits you from
that action. _Ndawosheli_ and _ndawoshelo_ distinguish freedom and constraint.

The whole old greeting _zherami le zhone_ supplies the peaceful hello.
_Mindeshawo enyi_ welcomes the guest; _enyi lome nzame_ is the parting wish
“be safe”. _Nyewemya_ makes a courteous appeal in _enyi ndeshaye mewi
nyewemya_, “help me, please”. These whole requests do not create an imperative
ending. _Mimbesheya enyi_ thanks you; _nyeme mbeyalwi_ answers thanks with
“no debt”, the conventional “you are welcome”. _Milomeli nzelameya_ expresses
regret. _Enyi nalebeya mewi nyewemya_ asks forgiveness for a wrong.
_Minyendebya lowa_ acknowledges understanding; _shewe minyendebya lowa_
denies it. The original respectful greeting and oath formulae retain their
words, tones and scope.

## Script & Literacy

Nyáluban has no indigenous script or writing tradition. Its speakers keep songs, genealogies, law and history through oral performance, memory and drum communication. Griots and the other trained keepers carry the authority of those traditions.

Foreign scholars and traders may transcribe Nyáluban in their own writing systems. Such copies do not establish a Nyáluban writing practice, and Nyálubans themselves do not write or transcribe their language. A foreign copy does not replace a keeper's knowledge or authority.

The parallel readings on these pages are transcriptions of oral performances accompanied by translations. The vowels and stress marks help readers pronounce the words. No written original is implied.

These transcriptions use full stops for sentence endings and commas for pauses. Questions use the documented question words or the clause-final _nyewala_; a rising delivery does not replace them. Make spoken attribution clear in the wording instead of depending on quotation marks. Separate and indent the gathered answer in a call-and-response. These readings need no additional pitch or verse-end signs.

They follow the standard roman punctuation of every tongue on these pages, so a question also ends with `?`, a command with `‼`, and quoted speech stands between `«` and `»` as well as being named in the wording.

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

The pitch descriptions below record customary delivery. They are not extra pronunciation requirements, and the acute in a written word continues to mark stress.

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
- Fámangali (the-honored-ancestors)
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
- Ódumbala (the-gem-tribe)
- Ófawe (the-learned-ones)
- Ógandala (the-mighty-ones)
- Ólambala (the-eloquent-ones)
- Ómalesi (the-honored-wise)
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

The sound of Nyáluban is open and sung. Every syllable is a consonant and a vowel or a vowel alone, every word closes on a vowel, and a nasal before a stop opens many words and stands inside many more: _mb_, _nd_, _nk_, _nj_. No word has a fricative and a stop together, so none opens on _sp_, _st_ or _sk_. Pitch carries meaning within the spoken language, which is what lets a drum speak it. The common spelling leaves that pitch unwritten and uses an acute only to mark stress away from the first syllable. The transcription remains usable without a tonal performance.

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
