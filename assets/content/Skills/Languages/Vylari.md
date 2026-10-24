---
shortcode: vylarilng
name: {full: Vylari Language, aliases: []}
type: skill
subType: language
description: "The imperial tongue of the Vylarian court and, as the Vylarians hold it, the language of learning, government, the arcane and the university system in the empire and the lands that look to it."
tags: []
data:
  core: true
  abbreviation: Vyl.
  writtenIn: {map: semaron, font: semaron-kuriale}
  classModifiers: [m, f, "n"]
  emphasis: words
  fields:
    - name: The hallowed and the gods
      holds: "The gods, the hallowed, the temple and its priests, oaths, curses, omens and the kept fire."
    - name: "Ancestors, the house and the name"
      holds: "Ancestors and founders, the noble house, the household and its master, kin, marriage, heirs and the name a person carries."
    - name: "Precedence, patronage and what is owed"
      holds: "The standings of persons, the steps of precedence, patron and client, the morning call, favor, honor, hospitality and the order of what a person owes."
    - name: "Law, the court and the written act"
      holds: "Law and custom, the court and its officers, suits, appeals, witnesses, contracts, seals and the penalties of the roll."
    - name: The state and its offices
      holds: "The empire and its sovereign, the Senate, magistrates and prefects, the treasury and its taxes, the provinces, the watch and the palace."
    - name: The legions and the frontier
      holds: "The legion and its divisions, the soldier's ranks and oath, standards, camps, arms, horses, war and the frontier."
    - name: "The city: stone, water and the street"
      holds: "The city and its boundary, the square, the street, the aqueduct and the drain, the tenement, the townhouse, the villa and the garden, the bath, the theater and the racecourse, and the words for what is falling down."
    - name: "Craft, guild and the kept secret"
      holds: "The guild and its grades, the crafts, metals and tools, the forge, and the secret a guild holds as property."
    - name: "Coin, trade and the counting-table"
      holds: "Merchants and markets, coin and its names, the moneylender and his interest, debt, weights, ledgers and the goods that cross the sea."
    - name: "Land, the vine and the river"
      holds: "Field and tenant, the olive and the vine, beasts of the farm, the great river and its springs, hills, mountains, woods and weather."
    - name: The sea and the sailing year
      holds: "The sea and its shore, ships, the fleet and its men, the winds that set the sailing year, and the lighthouse."
    - name: "The body, life and death"
      holds: "The body, life, sickness and the physician, death and the words that walk round it, the tomb and the city of the dead."
    - name: "Time, the calendar and the festivals"
      holds: "The year and its reckoning from the founding, months, days, hours, seasons and festivals."
    - name: "Learning, speech and the letters"
      holds: "Song and poet, speech and orator, letters and books, schools and the University, the masters and grades of the Arcane Order, and the arts."
    - name: Qualities
      holds: "The words that describe: rank and worth, size and age, strength and truth, the colors."
    - name: "Doing, going and being"
      holds: "The verbs of ordinary speech and of the histories, cited by the infinitive."
    - name: Numbers and grammar words
      holds: "The numbers, the pronouns, the three pointing words and the particles."
  affixes:
    - form: "-as"
      gloss: "a hallowed noun: a god, a founder, a hallowed thing"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["ulth- > ulthas"]
    - form: "-os"
      gloss: "a man who does it, or holds the office of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["us- > usos"]
    - form: "-a"
      gloss: "a woman who does it, or holds the office of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["marend- > marenda"]
    - form: "-alon"
      gloss: "the office, the body or the whole of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["orz- > orzalon"]
    - form: "-andon"
      gloss: "a thing done or made"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["tamb- > tambandon"]
    - form: "-andar"
      gloss: "doing it: the present participle"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["humelth- > humelthandar"]
    - form: "-thos"
      gloss: "done, suffered: the past participle"
      attaches: "added"
      examples: ["kelmar- > kelmarthos"]
    - form: "-en"
      gloss: "of it, from it: said of a place or a people"
      attaches: "replaces the final vowel"
      replaces: vowel
      attachesTo: [n]
      examples: ["orz- > orzen"]
    - form: "-ara"
      gloss: "a town of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      attachesTo: [n]
      examples: ["zemrol- > zemrolara"]
    - form: "-enna"
      gloss: "a farm, an estate or a village of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      attachesTo: [n]
      examples: ["taloth- > talothenna"]
    - form: "-ora"
      gloss: "a height or a stronghold of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      attachesTo: [n]
      examples: ["tholkez- > tholkezora"]
    - form: "-is"
      gloss: "those of it: a house name"
      attaches: "replaces the final vowel"
      replaces: vowel
      attachesTo: [n]
      examples: ["karalz- > karalzis"]
    - form: "-ates"
      gloss: "of the line of it: a house name"
      attaches: "replaces the final vowel"
      replaces: vowel
      attachesTo: [n]
    - form: "-andi"
      gloss: "in the keeping of: the ending that names a month"
      attaches: "replaces the final vowel"
      replaces: vowel
      attachesTo: [n]
      examples: ["zunel- > zunelandi"]
    - form: "-oros"
      gloss: "ordinal: the place in a count"
      attaches: "a cardinal's stem"
      examples: ["karzis > karzoros", "selthur > selthoros"]
    - form: "-anthi"
      gloss: "in the manner of it: the adverb of a participle"
      attaches: "replaces -andar"
      replaces: andar
      examples: ["dorandar > doranthi"]
    - form: "-immos"
      gloss: "the most: the superlative of an adjective"
      attaches: "replaces the adjective's ending"
      replaces: os
      attachesTo: [adj]
      examples: ["dayos > dayimmon"]
    - form: "an-"
      gloss: "the reverse of it"
      attaches: "prefixed"
      examples: ["ulthathen > anulthathen", "olmathen > anolmathen"]
  grammar:
    plural:
      - {ending: alon, becomes: alar}
      - {ending: os, becomes: oi}
      - {ending: on, becomes: oi}
      - {ending: is, becomes: oi}
      - {ending: as, becomes: oi}
      - {ending: a, becomes: ai}
      - {ending: e, becomes: oi}
      - {ending: i, becomes: oi}
      - {ending: o, becomes: oi}
      - {ending: u, becomes: oi}
      - {ending: "", becomes: oi}
    verbs:
      replaces: then
      persons: {I: men, you: zen, heShe: zor, we: mar, youAll: zar, they: zoi}
    agreement: {classes: [adj, pron], endings: [os, a, on, as]}
    participles: {root: [athen, ethen], affixes: ["-andar", "-thos"]}
  words:
    - form: ulthathen
      class: v
      field: The hallowed and the gods
      gloss: "to hallow; to raise a name to the hallowed endings"
      source: {kind: inherited}
    - form: ulthas
      class: n
      field: The hallowed and the gods
      gloss: "a god; anything hallowed"
      source: {kind: inherited}
      built: ["ulth-", "-as"]
    - form: ulthandon
      class: n n
      field: The hallowed and the gods
      gloss: "a consecration; the act that hallows a name"
      source: {kind: inherited}
      built: ["ulth-", "-andon"]
    - form: ulthalon
      class: n n
      field: The hallowed and the gods
      gloss: "the hallowed; the rank of the gods, the sovereign and the founders of houses"
      source: {kind: inherited}
      built: ["ulth-", "-alon"]
    - form: anulthathen
      class: v
      field: The hallowed and the gods
      gloss: "to unhallow; to strike a name back out of the hallowed"
      source: {kind: inherited}
    - form: sarkena
      class: n f
      field: The hallowed and the gods
      gloss: "a temple; a god's house"
      source: {kind: inherited}
    - form: sarkenandos
      class: n m
      field: The hallowed and the gods
      gloss: "a priest; a man who keeps a god's house"
      source: {kind: inherited}
      built: ["sarken-", "-os"]
    - form: sarkenanda
      class: n f
      field: The hallowed and the gods
      gloss: "a priestess"
      source: {kind: inherited}
      built: ["sarken-", "-a"]
    - form: holzathos
      class: n m
      field: The hallowed and the gods
      gloss: "a high priest; the first among the priests of a god"
      source: {kind: inherited}
    - form: zalvon
      class: n n
      plural: zalvar
      field: The hallowed and the gods
      gloss: "the worship of the state; the imperial cult"
      source: {kind: inherited, form: dhalwon}
    - form: thelzima
      class: n f
      field: The hallowed and the gods
      gloss: "a rite; anything done for a god in the proper order"
      source: {kind: inherited}
    - form: gageka
      class: n f
      field: The hallowed and the gods
      gloss: "a sacrifice; an offering burned"
      source: {kind: inherited}
    - form: kurzalis
      class: n f
      field: The hallowed and the gods
      gloss: "an altar"
      source: {kind: inherited, form: kurdhalis}
    - form: nekaimon
      class: n n
      field: The hallowed and the gods
      gloss: "a wayside shrine"
      source: {kind: inherited}
    - form: zaron
      class: n n
      plural: zarar
      field: The hallowed and the gods
      gloss: "an oath; a binding sworn before a god"
      source: {kind: inherited, form: dharon}
    - form: zarathen
      class: v
      field: The hallowed and the gods
      gloss: "to swear; to bind oneself"
      source: {kind: inherited, form: dharathen}
    - form: zaros
      class: n m
      field: The hallowed and the gods
      gloss: "a sworn man; one under an oath"
      source: {kind: inherited, form: dharos}
      built: ["zar-", "-os"]
    - form: holzaros
      class: n m
      field: The hallowed and the gods
      gloss: "a senior sworn man; a sworn man of long standing"
      source: {kind: inherited, form: holdharos}
      built: ["hol-", zaros]
    - form: tholmeza
      class: n f
      field: The hallowed and the gods
      gloss: "a vow; a binding laid on oneself alone"
      source: {kind: inherited}
    - form: kelmaron
      class: n n
      field: The hallowed and the gods
      gloss: "a curse; the words that put a person outside the gods' care"
      source: {kind: inherited}
    - form: kelmarthos
      class: adj
      field: The hallowed and the gods
      gloss: "accursed; put outside the gods' care and the law's"
      source: {kind: inherited}
      built: ["kelmar-", "-thos"]
    - form: ozethon
      class: n n
      plural: ozethar
      field: The hallowed and the gods
      gloss: "an omen; a sign read in a bird or a flame"
      source: {kind: inherited, form: odhethon}
    - form: ozethos
      class: n m
      field: The hallowed and the gods
      gloss: "a diviner; one licensed to read signs"
      source: {kind: inherited, form: odhethos}
      built: ["ozeth-", "-os"]
    - form: yaltheza
      class: n f
      field: The hallowed and the gods
      gloss: "a prayer"
      source: {kind: inherited}
    - form: zelmaros
      class: adj
      field: The hallowed and the gods
      gloss: "pure; fit to approach a god"
      source: {kind: inherited, form: dhelmaros}
    - form: thirelos
      class: adj
      field: The hallowed and the gods
      gloss: "set apart; of ground that may not be crossed under arms"
      source: {kind: inherited}
    - form: karalzon
      class: n n
      plural: karalzar
      field: The hallowed and the gods
      gloss: "the kept fire; the hearth of a house, never let go out"
      concept: hearth
      source: {kind: inherited, form: "k'aralzon"}
    - form: karalzis
      class: n m
      plural: karalzis
      field: The hallowed and the gods
      gloss: "the household gods; those of the kept fire"
      source: {kind: inherited}
      built: ["karalz-", "-is"]
    - form: ziravon
      class: n n
      field: The hallowed and the gods
      gloss: "the soul; the breath that goes to the ancestors"
      source: {kind: inherited, form: dhirawon}
    - form: zikon
      class: n n
      field: The hallowed and the gods
      gloss: "fate; what is spoken before a life begins"
      source: {kind: inherited, form: dhikhon}
    - form: thauras
      class: n
      plural: thaurasoi
      field: The hallowed and the gods
      gloss: "a keeper, said of a god; the hallowed keeper"
      source: {kind: coined}
      built: ["thaur-", "-as"]
    - form: thilandthauras
      class: n
      field: The hallowed and the gods
      gloss: "the Keeper of the Book; Marendas"
      source: {kind: coined}
      built: ["thiland-", thauras]
    - form: kalpezthauras
      class: n
      field: The hallowed and the gods
      gloss: "the Keeper of the Gates; Árdavon"
      source: {kind: coined}
      built: ["kalpez-", thauras]
    - form: thrimvalmas
      class: n
      field: The hallowed and the gods
      gloss: "the Walker of the Line; the Founder after the line was closed"
      source: {kind: coined}
      built: ["thrim-", "valm-", "-as"]
    - form: orlemthumisa
      class: n f
      field: The hallowed and the gods
      gloss: "the crowned mark; the frame cut to hold a hallowed name"
      source: {kind: coined}
      built: ["orlem-", thumisa]
    - form: varelon
      class: n n
      field: The hallowed and the gods
      gloss: faith; trust; the holding of a thing true
      concept: [faith, trust, belief]
      source: {kind: coined}
    - form: ulthnethoron
      class: n n
      field: The hallowed and the gods
      gloss: "agape; selfless love, given to others or to the gods without asking a return"
      concept: love-agape
      source: {kind: coined}
      built: ["ulth-", nethoron]
    - form: kalmethar
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "an ancestor; one of the dead a house still counts"
      concept: ancestor
      source: {kind: inherited}
    - form: lavura
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "an ancestor's face; the wax mask kept in the hall of a house"
      source: {kind: inherited, form: labura}
    - form: zerthas
      class: n
      field: "Ancestors, the house and the name"
      gloss: "a founder; the ancestor a house is named for"
      source: {kind: inherited, form: dherthas}
    - form: dorthene
      class: n f
      field: Ancestors, the house and the name
      gloss: a line; a lineage traced through the hall's masks
      source: {kind: inherited}
      concept: lineage
    - form: thelvaralon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "a noble house; a line with a seat in the Senate"
      source: {kind: inherited, form: thelwaralon}
      built: ["thelvar-", "-alon"]
    - form: zorka
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a household; everyone under one roof and one master, slaves included"
      source: {kind: inherited, form: dhorkha}
    - form: zorkos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "the master of a household; the man who answers for everyone in it"
      source: {kind: inherited}
      built: ["zork-", "-os"]
    - form: helthos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a father"
      concept: father
      source: {kind: inherited}
    - form: mezara
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a mother"
      concept: mother
      source: {kind: inherited, form: medhara}
    - form: nurethos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a son"
      concept: son
      source: {kind: inherited}
    - form: nuretha
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a daughter"
      concept: daughter
      source: {kind: inherited}
    - form: semrothos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a brother"
      concept: brother
      source: {kind: inherited}
    - form: semrotha
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a sister"
      concept: sister
      source: {kind: inherited}
    - form: nurizon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "a child; a person not yet of age, and in law not yet a person"
      concept: child
      source: {kind: inherited}
    - form: kambetha
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a wife; a woman married into a household"
      concept: wife
      source: {kind: inherited}
    - form: kambethos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a husband"
      concept: husband
      source: {kind: inherited}
    - form: kondamos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "an heir; the one a will names"
      source: {kind: inherited}
    - form: kondamon
      class: n n
      plural: kondamar
      field: "Ancestors, the house and the name"
      gloss: "an inheritance; what passes at a death"
      source: {kind: inherited}
    - form: aipsena
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "an adoption; the taking of an heir from another house"
      source: {kind: inherited}
    - form: lemvisa
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a will; the writing that names the heir"
      source: {kind: inherited, form: lemwisa}
    - form: gebrina
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a dowry"
      source: {kind: inherited}
    - form: harlen
      class: n n
      field: Ancestors, the house and the name
      gloss: a name
      source: {kind: inherited}
      concept: name-noun
    - form: harlenis
      class: n n
      plural: harlenar
      field: "Ancestors, the house and the name"
      gloss: "the house name; a name of those of a founder"
      source: {kind: inherited}
      built: [harlen, "-is"]
    - form: kiramharlen
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "an earned name; the epithet given after a deed or a death"
      source: {kind: inherited}
      built: ["kiram-", harlen]
    - form: neharlon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "an unnaming; the striking of a name from every roll"
      source: {kind: inherited}
    - form: kambeza
      class: n f
      field: Ancestors, the house and the name
      gloss: a marriage; the handing of a woman from one household to another
      source: {kind: inherited}
      concept: marriage
    - form: sorethis
      class: n m
      field: Ancestors, the house and the name
      gloss: kin; those of one blood
      source: {kind: inherited}
      concept: kin
    - form: sorethon
      class: n n
      plural: sorethar
      field: "Ancestors, the house and the name"
      gloss: "storge; the love of family, of parent and child"
      concept: love-storge
      source: {kind: coined}
    - form: zirothos
      class: n m
      field: Precedence, patronage and what is owed
      gloss: a step of rank; one rung of the order
      source: {kind: inherited}
      concept: rank
    - form: zirothalon
      class: n n
      field: Precedence, patronage and what is owed
      gloss: precedence; the order of a room worked out to the step
      source: {kind: inherited}
      built: [ziroth-, -alon]
      concept: order-noun
    - form: zirothathen
      class: v
      field: "Precedence, patronage and what is owed"
      gloss: "to place; to settle a stranger's rank before anything else is said"
      source: {kind: inherited}
    - form: anzirothos
      class: adj
      field: "Precedence, patronage and what is owed"
      gloss: "unplaced; of a person whose rank nobody knows"
      source: {kind: inherited}
    - form: daimela
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a patron; a lord who carries clients"
      source: {kind: inherited}
    - form: daimelalon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "patronage; the standing of a patron and the duty of it"
      source: {kind: inherited}
      built: ["daimel-", "-alon"]
    - form: thelmos
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a client; one carried by a patron, who attends him in the morning"
      source: {kind: inherited}
    - form: thelmalon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "clientage; the attendance and what it buys"
      source: {kind: inherited}
      built: ["thelm-", "-alon"]
    - form: pramolza
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "the morning call; the client's attendance at his patron's door"
      source: {kind: inherited}
    - form: orfenon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "a favor; a thing done that leaves a debt"
      source: {kind: inherited}
    - form: orfenathen
      class: v
      field: Precedence, patronage and what is owed
      gloss: to owe; to stand under a favor
      source: {kind: inherited}
      concept: must
    - form: velda
      class: n f
      field: Precedence, patronage and what is owed
      gloss: honor; a public thing, made of offices held and remembered
      source: {kind: inherited, form: welda}
      concept: honor
    - form: anvelda
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "dishonor; a name the city has stopped repeating"
      source: {kind: inherited, form: anwelda}
    - form: solkima
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "gravity; the weight of manner proper to a man of standing"
      source: {kind: inherited}
    - form: yerpalon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "duty; what is owed to the gods, the ancestors, the house, the patron, the city and the empire, in that order"
      source: {kind: inherited}
    - form: dumvaros
      class: n m
      field: Precedence, patronage and what is owed
      gloss: a guest; one under a host's roof and his protection
      source: {kind: inherited, form: dumwaros}
      concept: guest
    - form: dumvaralon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "guest-right; what a host owes a guest and a guest a host"
      source: {kind: inherited, form: dumwaralon}
      built: ["dumvar-", "-alon"]
    - form: haldethos
      class: n m
      field: Precedence, patronage and what is owed
      gloss: a host
      source: {kind: inherited}
      concept: host
    - form: verosa
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "a citizen; a person who holds a share in the city"
      source: {kind: inherited, form: werosa}
    - form: verosalon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "citizenship; the share itself"
      source: {kind: inherited, form: werosalon}
      built: ["veros-", "-alon"]
    - form: palvethos
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a resident without the share; a free man of the provinces"
      source: {kind: inherited, form: palwethos}
    - form: thrakon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "a slave; a person owned, treated as a thing"
      source: {kind: inherited}
    - form: liskothos
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a freedman; a slave given a gender by manumission"
      source: {kind: inherited}
    - form: liskotha
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "a freedwoman"
      source: {kind: inherited}
    - form: liskaima
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "manumission; the act that frees a slave and gives a name a gender"
      source: {kind: inherited}
    - form: gulmen
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a man of the horse order; one of the equestrian estate"
      source: {kind: inherited, form: ghulmalen}
      built: ["gulmal-", "-en"]
    - form: kurthos
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a senator; one who sits in the Senate"
      source: {kind: inherited}
      built: ["kurth-", "-os"]
    - form: ethlen
      class: adj
      field: "Precedence, patronage and what is owed"
      gloss: "gilded; of the highest noble estate"
      source: {kind: inherited}
      built: ["elthez-", "-en"]
    - form: ankren
      class: adj
      field: "Precedence, patronage and what is owed"
      gloss: "silver; of the second noble estate"
      source: {kind: inherited}
      built: ["ankraz-", "-en"]
    - form: thurden
      class: adj
      field: "Precedence, patronage and what is owed"
      gloss: "bronze; of the third noble estate"
      source: {kind: inherited}
      built: ["thurdim-", "-en"]
    - form: pelerenos
      class: adj
      field: "Precedence, patronage and what is owed"
      gloss: "elevated; of the estate of newly raised houses, which carries no metal"
      source: {kind: inherited}
      built: ["peler-", "-en"]
    - form: anorfenathen
      class: v
      field: Precedence, patronage and what is owed
      gloss: to forgive; to release from what is owed
      source: {kind: coined}
      built: [an-, orfenathen]
      concept: forgive-verb
    - form: vethvelda
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "pride; honor a person claims for himself"
      concept: pride
      source: {kind: coined}
      built: ["veth-", velda]
    - form: vethdokemon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "boasting; a boast; a speech made in one's own praise"
      concept: boasting
      source: {kind: coined}
      built: ["veth-", dokemon]
    - form: holvethon
      class: n n
      plural: holvethar
      field: "Precedence, patronage and what is owed"
      gloss: "philia; the affection of friends; the bond of companions"
      concept: love-philia
      source: {kind: coined}
    - form: vornon
      class: n n
      plural: vornar
      field: Law, the court and the written act
      gloss: a law; a statute the Senate has voted
      source: {kind: inherited, form: wornon}
      concept: law
    - form: vornalon
      class: n n
      field: "Law, the court and the written act"
      gloss: "the law; the whole body of statute"
      source: {kind: inherited, form: wornalon}
      built: ["vorn-", "-alon"]
    - form: zesima
      class: n f
      field: Law, the court and the written act
      gloss: a custom; what is done because it has always been done
      source: {kind: inherited, form: dhesima}
      concept: custom
    - form: nazdis
      class: n f
      plural: nazdar
      field: "Law, the court and the written act"
      gloss: "a judgment; what a court decides"
      source: {kind: inherited}
    - form: nazdos
      class: n m
      field: "Law, the court and the written act"
      gloss: "a judge of the civil courts"
      source: {kind: inherited}
      built: ["nazd-", "-os"]
    - form: nazdalon
      class: n n
      field: "Law, the court and the written act"
      gloss: "a court of law; the hall where judgment is given"
      source: {kind: inherited}
      built: ["nazd-", "-alon"]
    - form: krezulon
      class: n n
      field: "Law, the court and the written act"
      gloss: "a suit; a case brought before a judge"
      source: {kind: inherited}
    - form: krezulathen
      class: v
      field: "Law, the court and the written act"
      gloss: "to sue; to bring a case"
      source: {kind: inherited}
    - form: felakis
      class: n f
      field: "Law, the court and the written act"
      gloss: "an appeal; the carrying of a case to a higher court"
      source: {kind: inherited}
    - form: lozos
      class: n m
      field: "Law, the court and the written act"
      gloss: "an advocate; one who carries another's case before a court"
      source: {kind: inherited}
      built: ["loz-", "-os"]
    - form: okos
      class: n m
      field: "Law, the court and the written act"
      gloss: "a witness; one who saw"
      source: {kind: inherited}
      built: ["ok-", "-os"]
    - form: semnalis
      class: n f
      field: "Law, the court and the written act"
      gloss: "a contract; a binding between two parties, written and witnessed"
      source: {kind: inherited}
    - form: thizaron
      class: n n
      plural: thizarar
      field: "Law, the court and the written act"
      gloss: "a seal; the mark that makes a writing an act"
      source: {kind: inherited, form: thidharon}
    - form: thizaros
      class: n m
      field: "Law, the court and the written act"
      gloss: "a keeper of seals; the officer who seals for a court or a house"
      source: {kind: inherited, form: thidharos}
      built: ["thizar-", "-os"]
    - form: zaktela
      class: n f
      field: "Law, the court and the written act"
      gloss: "a charter; a grant written and sealed"
      source: {kind: inherited, form: dhaktela}
    - form: korvela
      class: n f
      field: "Law, the court and the written act"
      gloss: "a roll; the written list of a body's members"
      source: {kind: inherited, form: korwela}
    - form: kuthreza
      class: n f
      field: "Law, the court and the written act"
      gloss: "a penalty; a fine or a loss laid down by a court"
      source: {kind: inherited}
    - form: zamolis
      class: n f
      field: "Law, the court and the written act"
      gloss: "guilt; the state of one a court has found against"
      source: {kind: inherited, form: dhamolis}
    - form: yestharos
      class: adj
      field: Law, the court and the written act
      gloss: within one's right; lawful, of an act or a claim
      source: {kind: inherited}
      concept: allowed
    - form: frenkon
      class: n n
      plural: frenkar
      field: Law, the court and the written act
      gloss: property; a thing owned, land or slave or craft
      source: {kind: inherited}
      concept: property
    - form: nampeza
      class: n f
      field: "Law, the court and the written act"
      gloss: "theft"
      source: {kind: inherited}
    - form: sekera
      class: n f
      field: "Law, the court and the written act"
      gloss: "an inquiry; a search put to a matter by a licensed body"
      source: {kind: inherited}
    - form: sekeros
      class: n m
      field: "Law, the court and the written act"
      gloss: "an inquirer; one licensed to search out a matter and end it"
      source: {kind: inherited}
      built: ["seker-", "-os"]
    - form: sekeralon
      class: n n
      field: "Law, the court and the written act"
      gloss: "an inquisition; the body that inquires"
      source: {kind: inherited}
      built: ["seker-", "-alon"]
    - form: venthodis
      class: n f
      field: "Law, the court and the written act"
      gloss: "exile; the sentence that sends a citizen out of the empire"
      source: {kind: inherited, form: wenthodis}
    - form: orznazdalon
      class: n n
      field: "Law, the court and the written act"
      gloss: "the sovereign's tribunal; the last court of appeal"
      source: {kind: coined}
      built: ["orz-", nazdalon]
    - form: orzathen
      class: v
      field: The state and its offices
      gloss: "to rule; to hold command over"
      source: {kind: inherited}
    - form: orzas
      class: n
      field: The state and its offices
      gloss: "the sovereign; the emperor or the empress, named as a god is"
      source: {kind: inherited}
      built: ["orz-", "-as"]
    - form: orzalon
      class: n n
      field: The state and its offices
      gloss: "the empire; the whole of what is commanded"
      source: {kind: inherited}
      built: ["orz-", "-alon"]
    - form: orzen
      class: adj
      field: The state and its offices
      gloss: "imperial; of the sovereign or the empire"
      source: {kind: inherited}
      built: ["orz-", "-en"]
    - form: kurthema
      class: n f
      field: The state and its offices
      gloss: "a senate; a body entitled to sit and vote"
      source: {kind: inherited}
    - form: kurthalon
      class: n n
      field: The state and its offices
      gloss: "a council; any body that sits and votes"
      source: {kind: inherited}
      built: ["kurth-", "-alon"]
    - form: zilmara
      class: n f
      field: The state and its offices
      gloss: "a vote; a decree of the Senate"
      source: {kind: inherited, form: dhilmara}
    - form: talkos
      class: n m
      field: The state and its offices
      gloss: "a magistrate; one who holds a writ for a year"
      source: {kind: inherited}
    - form: talkalon
      class: n n
      field: The state and its offices
      gloss: "a magistracy; the writ and its year"
      source: {kind: inherited}
      built: ["talk-", "-alon"]
    - form: usathen
      class: v
      field: The state and its offices
      gloss: "to set over; to put a man in charge of a thing"
      source: {kind: inherited}
    - form: usos
      class: n m
      field: The state and its offices
      gloss: "a prefect; one set over a thing"
      source: {kind: inherited}
      built: ["us-", "-os"]
    - form: usalon
      class: n n
      field: The state and its offices
      gloss: "a prefecture; the charge a prefect holds"
      source: {kind: inherited}
      built: ["us-", "-alon"]
    - form: tavos
      class: n m
      field: The state and its offices
      gloss: "a consul; one of the two who give the year its name"
      source: {kind: inherited, form: tawos}
      built: ["tav-", "-os"]
    - form: lusathen
      class: v
      field: The state and its offices
      gloss: to protect; to stand before
      source: {kind: inherited}
      concept: defend
    - form: lusos
      class: n m
      field: The state and its offices
      gloss: "a tribune; a protector of the common citizens"
      source: {kind: inherited}
      built: ["lus-", "-os"]
    - form: therkos
      class: n m
      field: The state and its offices
      gloss: "a governor; the man who holds a province for the sovereign"
      source: {kind: inherited}
    - form: therkalon
      class: n n
      field: The state and its offices
      gloss: "a province; a land held for the sovereign"
      source: {kind: inherited}
      built: ["therk-", "-alon"]
    - form: tarkelon
      class: n n
      plural: tarkelar
      field: The state and its offices
      gloss: "the treasury; the public chest"
      source: {kind: inherited}
    - form: tarkelos
      class: n m
      field: The state and its offices
      gloss: "a treasury officer; a keeper of the public chest"
      source: {kind: inherited}
      built: ["tarkel-", "-os"]
    - form: sokata
      class: n f
      field: The state and its offices
      gloss: "a tax; what the chest demands"
      source: {kind: inherited}
    - form: sokatos
      class: n m
      field: The state and its offices
      gloss: "a tax-farmer; a man who buys the right to collect a tax"
      source: {kind: inherited}
      built: ["sokat-", "-os"]
    - form: uthrisokata
      class: n f
      field: The state and its offices
      gloss: "customs; the tax taken at a frontier"
      source: {kind: inherited}
      built: ["uthri-", sokata]
    - form: pelthra
      class: n f
      field: The state and its offices
      gloss: "a ward; one quarter of a city under its own magistrate"
      source: {kind: inherited}
    - form: zorala
      class: n f
      field: The state and its offices
      gloss: "the watch; the men who keep a city's peace by night"
      source: {kind: inherited, form: dhorala}
    - form: harkema
      class: n f
      field: The state and its offices
      gloss: "a palace; the sovereign's house"
      source: {kind: inherited}
    - form: therona
      class: n f
      field: The state and its offices
      gloss: "a census; the count of persons and property every fifth year"
      source: {kind: inherited}
    - form: theronos
      class: n m
      field: The state and its offices
      gloss: "a censor; the officer who takes the count and judges standing"
      source: {kind: inherited}
      built: ["theron-", "-os"]
    - form: kalzothos
      class: n m
      field: The state and its offices
      gloss: "a herald; an envoy who speaks for another"
      source: {kind: inherited}
    - form: karezathen
      class: v
      field: The state and its offices
      gloss: "to see to; to manage a thing for its owner"
      source: {kind: inherited}
    - form: karezos
      class: n m
      field: The state and its offices
      gloss: "a steward; one who manages for another, and the title of the sovereign's agents in a province"
      source: {kind: inherited}
      built: ["karez-", "-os"]
    - form: felzathen
      class: v
      field: The state and its offices
      gloss: [to send, to throw; to send an object through the air]
      source: {kind: inherited}
      concept: throw
    - form: felzos
      class: n m
      field: The state and its offices
      gloss: "a legate; a man sent with the sovereign's authority"
      source: {kind: inherited}
      built: ["felz-", "-os"]
    - form: kuneza
      class: n f
      field: The state and its offices
      gloss: "the commons; the citizens who are neither noble nor of the horse order"
      source: {kind: inherited}
    - form: thauralon
      class: n n
      field: The state and its offices
      gloss: "the guard; the sovereign's sworn household troops"
      source: {kind: inherited}
      built: ["thaur-", "-alon"]
    - form: thauros
      class: n m
      field: The state and its offices
      gloss: "a guardsman; one of the sovereign's guard"
      source: {kind: inherited}
      built: ["thaur-", "-os"]
    - form: vornos
      class: n m
      field: The state and its offices
      gloss: "a magistrate of the courts; one who declares the law for his year"
      source: {kind: inherited, form: wornos}
      built: ["vorn-", "-os"]
    - form: peltros
      class: n m
      field: The state and its offices
      gloss: "a ward magistrate; one who keeps a ward's markets, weights and petty order"
      source: {kind: inherited}
      built: ["pelthr-", "-os"]
    - form: pelthralon
      class: n n
      field: The state and its offices
      gloss: "the ward magistrates as a body; the bench of a city's wards"
      source: {kind: inherited}
      built: ["pelthr-", "-alon"]
    - form: tavemos
      class: n m
      field: The state and its offices
      gloss: "a town magistrate; one of the two a chartered town elects"
      source: {kind: inherited, form: tawemos}
      built: ["tavem-", "-os"]
    - form: kurthalos
      class: n m
      field: The state and its offices
      gloss: "a council member; one who sits in a lesser council"
      source: {kind: inherited}
      built: ["kurthal-", "-os"]
    - form: zalvos
      class: n m
      field: The state and its offices
      gloss: "a priest of the imperial cult; one who serves the sovereign's rites"
      source: {kind: inherited, form: dhalwos}
      built: ["zalv-", "-os"]
    - form: tavtherkos
      class: n m
      field: The state and its offices
      gloss: "a consular governor; the man who holds a senatorial province"
      source: {kind: inherited, form: tawtherkhos}
      built: ["tav-", therkos]
    - form: tavalon
      class: n n
      field: The state and its offices
      gloss: "a consulship; the office of the two who give the year its name"
      source: {kind: inherited, form: tawalon}
      built: ["tav-", "-alon"]
    - form: tavalen
      class: n m
      field: The state and its offices
      gloss: "a man of consular rank; one who has held the consulship"
      source: {kind: inherited, form: tawalen}
      built: ["taval-", "-en"]
    - form: karezalon
      class: n n
      field: The state and its offices
      gloss: "a stewardship; the charge of the sovereign's agent in a province"
      source: {kind: inherited}
      built: ["karez-", "-alon"]
    - form: rozimos
      class: n m
      field: The state and its offices
      gloss: "an auditor; one who reckons a body's ledgers against its conduct"
      source: {kind: inherited}
      built: ["rozim-", "-os"]
    - form: holrozimos
      class: n m
      field: The state and its offices
      gloss: "a chief auditor; the senior of a body's auditors"
      source: {kind: inherited}
      built: ["hol-", rozimos]
    - form: thaurusos
      class: n m
      field: The state and its offices
      gloss: "a prefect of the guard; the commander of the sovereign's guard"
      source: {kind: inherited}
      built: ["thaur-", usos]
    - form: zoralus
      class: n m
      field: The state and its offices
      gloss: "a prefect of the watch; the commander of a city's or a province's watch"
      source: {kind: inherited, form: dhoralusos}
      built: ["zoral-", usos]
    - form: veramus
      class: n m
      field: The state and its offices
      gloss: "a curator of the city; one set over a part of a city's government"
      source: {kind: inherited, form: weramusos}
      built: ["veram-", usos]
    - form: pozerus
      class: n m
      field: The state and its offices
      gloss: "a warden of the roads; one set over the imperial roads"
      source: {kind: inherited, form: podherusos}
      built: ["pozer-", usos]
    - form: therkalen
      class: n m
      field: The state and its offices
      gloss: "a provincial deputy; one who acts for a body in a province"
      source: {kind: inherited}
      built: ["therkal-", "-en"]
    - form: orlema
      class: n f
      field: The state and its offices
      gloss: "a crown"
      source: {kind: coined}
    - form: kurthas
      class: n
      plural: kurthasoi
      field: The state and its offices
      gloss: "the Senator, hallowed; a senator named as a founder is named"
      source: {kind: coined}
      built: ["kurth-", "-as"]
    - form: talktholbema
      class: n f
      field: The state and its offices
      gloss: "a cloak of office; the gown a magistrate wears"
      source: {kind: coined}
      built: ["talk-", tholbema]
    - form: thizaralon
      class: n n
      field: The state and its offices
      gloss: "the chancery; the office of the seal"
      source: {kind: coined}
      built: ["thizar-", "-alon"]
    - form: kordu
      class: n m
      field: The legions and the frontier
      gloss: "a battle"
      source: {kind: inherited}
    - form: kordathen
      class: v
      field: The legions and the frontier
      gloss: to fight; in the passive, there is fighting
      source: {kind: inherited}
      concept: fight
    - form: thramezos
      class: n m
      field: The legions and the frontier
      gloss: "a legion; five thousand sworn"
      source: {kind: inherited}
    - form: thramezan
      class: n m
      field: The legions and the frontier
      gloss: "a legionary; a sworn common soldier"
      source: {kind: inherited}
      built: ["thramez-", "-os"]
    - form: thramezgartos
      class: n m
      field: The legions and the frontier
      gloss: "a master of the sellsword companies; the head of the guild of soldiers for hire"
      source: {kind: inherited, form: thramezghartos}
      built: ["thramez-", gartos]
    - form: thramezon
      class: n n
      plural: thramezar
      field: The legions and the frontier
      gloss: "the soldier's oath; the oath that makes a legionary"
      source: {kind: inherited}
    - form: keleza
      class: n f
      field: The legions and the frontier
      gloss: "a cohort; about four hundred and eighty men"
      source: {kind: inherited}
    - form: takeza
      class: n f
      field: The legions and the frontier
      gloss: "a century; eighty men and their officer"
      source: {kind: inherited}
    - form: takezos
      class: n m
      field: The legions and the frontier
      gloss: "a centurion; the career soldier who commands a century"
      source: {kind: inherited}
      built: ["takez-", "-os"]
    - form: kamezon
      class: n n
      field: The legions and the frontier
      gloss: "a tent; the squad of eight that shares one"
      source: {kind: inherited}
    - form: forkeza
      class: n f
      field: The legions and the frontier
      gloss: "a fire team of four"
      source: {kind: inherited}
    - form: orkaima
      class: n f
      field: The legions and the frontier
      gloss: "an eagle; a legion's consecrated standard"
      source: {kind: inherited}
    - form: orkaimos
      class: n m
      field: The legions and the frontier
      gloss: "an eagle-bearer; the soldier who carries a legion's eagle"
      source: {kind: inherited}
      built: ["orkaim-", "-os"]
    - form: thulemon
      class: n n
      field: The legions and the frontier
      gloss: "a banner; a cohort's standard"
      source: {kind: inherited}
    - form: zurgalis
      class: n f
      field: The legions and the frontier
      gloss: "a camp; a fortified camp, and the fort that grows from one"
      source: {kind: inherited, form: dhurgalis}
    - form: kembothos
      class: n m
      field: The legions and the frontier
      gloss: "a wall; a city's wall or a fort's"
      source: {kind: inherited}
    - form: kalpeza
      class: n f
      field: The legions and the frontier
      gloss: a gate
      source: {kind: inherited}
      concept: gate
    - form: thorgila
      class: n f
      field: The legions and the frontier
      gloss: "a tower"
      source: {kind: inherited}
    - form: pozera
      class: n f
      field: The legions and the frontier
      gloss: "a road; a paved road the empire built"
      source: {kind: inherited, form: podhera}
    - form: brutheka
      class: n f
      field: The legions and the frontier
      gloss: "a bridge"
      source: {kind: inherited}
    - form: kadzimon
      class: n n
      field: The legions and the frontier
      gloss: "a sword; the short sword of the line"
      source: {kind: inherited}
    - form: gretala
      class: n f
      field: The legions and the frontier
      gloss: "a spear"
      source: {kind: inherited, form: ghretala}
    - form: tharkelon
      class: n n
      field: The legions and the frontier
      gloss: "a shield"
      source: {kind: inherited}
    - form: selbora
      class: n f
      field: The legions and the frontier
      gloss: "a cuirass; body armor"
      source: {kind: inherited}
    - form: gulmos
      class: n m
      field: The legions and the frontier
      gloss: "a horse"
      source: {kind: inherited, form: ghulmos}
    - form: gulman
      class: n m
      field: The legions and the frontier
      gloss: "a horseman; a cavalry trooper"
      source: {kind: inherited, form: ghulmandos}
      built: ["gulm-", "-os"]
    - form: gulmalon
      class: n n
      field: The legions and the frontier
      gloss: "the horse order; the cavalry, and the equestrian estate that once filled it"
      source: {kind: inherited, form: ghulmalon}
      built: ["gulm-", "-alon"]
    - form: thrumathen
      class: v
      field: The legions and the frontier
      gloss: to lead
      source: {kind: inherited}
      concept: lead
    - form: thrumar
      class: n m
      field: The legions and the frontier
      gloss: a general; a war-leader
      source: {kind: inherited}
      concept: leader
    - form: velzora
      class: n f
      field: The legions and the frontier
      gloss: "a triumph; the procession granted a victor"
      source: {kind: inherited, form: welzora}
    - form: uthrima
      class: n f
      field: The legions and the frontier
      gloss: "the frontier; the line the legions hold"
      source: {kind: inherited}
    - form: altheros
      class: n m
      field: The legions and the frontier
      gloss: "an outsider; one who lives outside the law"
      source: {kind: inherited}
    - form: preza
      class: n f
      field: The legions and the frontier
      gloss: peace; the quiet between neighbors
      source: {kind: inherited, form: predha}
      concept: peace
    - form: thurgezon
      class: n n
      field: The legions and the frontier
      gloss: "a siege"
      source: {kind: inherited}
    - form: kraunela
      class: n f
      field: The legions and the frontier
      gloss: "an engine; a siege engine"
      source: {kind: inherited}
    - form: ankaros
      class: n m
      field: The legions and the frontier
      gloss: "a veteran; a soldier past his sixteen years"
      source: {kind: inherited}
    - form: yunakos
      class: n m
      field: The legions and the frontier
      gloss: "a recruit; a soldier not yet sworn"
      source: {kind: inherited}
    - form: grumeza
      class: n f
      field: The legions and the frontier
      gloss: war
      source: {kind: inherited}
      concept: war
    - form: gulmeza
      class: n f
      field: The legions and the frontier
      gloss: "a troop of horse; about thirty riders"
      source: {kind: inherited}
    - form: thulemalon
      class: n n
      field: The legions and the frontier
      gloss: "a field army; the banners raised for one campaign"
      source: {kind: inherited}
      built: ["thulem-", "-alon"]
    - form: ethoros
      class: adj
      field: The legions and the frontier
      gloss: "second; next in rank"
      concept: second
      source: {kind: inherited}
    - form: yalmeza
      class: n f
      field: The legions and the frontier
      gloss: "a horn; the signal horn of a century"
      source: {kind: inherited}
    - form: faukela
      class: n f
      field: The legions and the frontier
      gloss: "a trumpet"
      source: {kind: inherited}
    - form: gaimela
      class: n f
      field: The legions and the frontier
      gloss: "a bow"
      source: {kind: inherited}
    - form: lirkeza
      class: n f
      field: The legions and the frontier
      gloss: "a sling"
      source: {kind: inherited}
    - form: holvethos
      class: n m
      field: The legions and the frontier
      gloss: a companion; one who rides beside a commander
      source: {kind: inherited, form: holwethos}
      concept: companion
    - form: zumbros
      class: n m
      field: The legions and the frontier
      gloss: "a helper; an auxiliary soldier, not a citizen"
      source: {kind: inherited}
    - form: kurandon
      class: n n
      field: The legions and the frontier
      gloss: "a thing taken; a conquest; spoils"
      source: {kind: coined}
      built: ["kur-", "-andon"]
    - form: veramis
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a city; a walled place of citizens"
      source: {kind: inherited, form: weramis}
    - form: thrima
      class: n f
      field: "The city: stone, water and the street"
      gloss: "the hallowed boundary of a city, inside which no legion marches"
      source: {kind: inherited}
      built: ["thir-", uthrima]
    - form: rembalis
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a square; the open place of public business"
      source: {kind: inherited}
    - form: kazthos
      class: n m
      field: "The city: stone, water and the street"
      gloss: "a street"
      source: {kind: inherited}
    - form: dorkima
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a column"
      source: {kind: inherited}
    - form: kambelon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "an arch"
      source: {kind: inherited}
    - form: ulmera
      class: n f
      field: "The city: stone, water and the street"
      gloss: "water"
      concept: water
      source: {kind: inherited}
    - form: ulmerpozera
      class: n f
      field: "The city: stone, water and the street"
      gloss: "an aqueduct; a road for water"
      source: {kind: inherited, form: ulmerpodhera}
      built: ["ulmer-", pozera]
    - form: zumbezon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "a cistern"
      source: {kind: inherited, form: dhumbezon}
    - form: sozrakis
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a drain; a sewer under a street"
      source: {kind: inherited, form: sodhrakis}
    - form: zolgon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "a tenement; a block of many stories in brick and timber"
      source: {kind: inherited, form: dholgon}
    - form: thegaimos
      class: n m
      field: "The city: stone, water and the street"
      gloss: "a townhouse; the house of a family of standing"
      source: {kind: inherited}
    - form: komrela
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a villa; a country house"
      source: {kind: inherited}
    - form: komrelalon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "an estate; a villa with its land, slaves and tenants"
      source: {kind: inherited}
      built: ["komrel-", "-alon"]
    - form: olthima
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a walled garden; the garden-villa at a city's edge"
      source: {kind: inherited}
    - form: thuvalis
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a bathhouse"
      source: {kind: inherited, form: thubalis}
    - form: thamlezon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "a theater"
      source: {kind: inherited}
    - form: rathauna
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a racecourse"
      source: {kind: inherited}
    - form: palthokis
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a brick"
      source: {kind: inherited}
    - form: kalmezar
      class: n n
      field: "The city: stone, water and the street"
      gloss: "marble"
      source: {kind: inherited}
    - form: grumbalon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "a quarry; a cut in a hill for stone"
      source: {kind: inherited}
    - form: malkothos
      class: n m
      field: "The city: stone, water and the street"
      gloss: a hill; one of the hills a city sits on
      source: {kind: inherited}
      concept: hill
    - form: ithrola
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a lamp; a cold-fire lamp of the Arcane Order"
      source: {kind: inherited}
    - form: selkora
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a granary; the state granary under seal"
      source: {kind: inherited}
    - form: humelthathen
      class: v
      field: "The city: stone, water and the street"
      gloss: "to rest; said of a building no one has repaired"
      source: {kind: inherited}
    - form: humelthandar
      class: adj
      field: "The city: stone, water and the street"
      gloss: "resting; the courteous word for a ruin"
      source: {kind: inherited}
      built: ["humelth-", "-andar"]
    - form: funela
      class: n f
      field: "The city: stone, water and the street"
      gloss: a cord; the measuring line a boundary is walked with
      source: {kind: coined}
      concept: cord
    - form: pozertalothos
      class: n m
      field: "The city: stone, water and the street"
      gloss: "a milestone; a road-stone"
      source: {kind: coined}
      built: ["pozer-", talothos]
    - form: kalpeztalothos
      class: n m
      field: "The city: stone, water and the street"
      gloss: "a gate-stone; the stone of a boundary that is a gate"
      source: {kind: coined}
      built: ["kalpez-", talothos]
    - form: kelron
      class: n n
      plural: kelrar
      field: "Craft, guild and the kept secret"
      gloss: "a guild; a body chartered for one craft"
      source: {kind: inherited}
    - form: kelralon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "the college of guilds; the guilds of a city as one body"
      source: {kind: inherited}
      built: ["kelr-", "-alon"]
    - form: kelthon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "a kept secret; a technique held as property, inherited and sued over"
      source: {kind: inherited}
    - form: kelthathen
      class: v
      field: "Craft, guild and the kept secret"
      gloss: "to keep a secret; to hold a craft closed"
      source: {kind: inherited}
    - form: zaralon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "a compact; an oath many swear together"
      source: {kind: inherited, form: dharalon}
      built: ["zar-", "-alon"]
    - form: palmeza
      class: n f
      field: "Craft, guild and the kept secret"
      gloss: "a craft; a trade learned at a master's bench"
      source: {kind: inherited}
    - form: gartema
      class: n f
      field: Craft, guild and the kept secret
      gloss: a bench; a master's place in a workshop, and the right to hold one
      source: {kind: inherited, form: ghartema}
      concept: bench
    - form: gartos
      class: n m
      field: Craft, guild and the kept secret
      gloss: a master; one who holds a bench and may take apprentices
      source: {kind: inherited, form: ghartos}
      built: [gart-, -os]
      concept: master
    - form: pithros
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "a journeyman; a craftsman who works another's bench for a wage"
      source: {kind: inherited}
    - form: kolmethos
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "an apprentice; one bound to a bench for seven years"
      source: {kind: inherited}
    - form: thumbalis
      class: n f
      field: "Craft, guild and the kept secret"
      gloss: "a forge; a smithy"
      source: {kind: inherited}
    - form: thumbos
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "a smith; an armorer"
      source: {kind: inherited}
      built: ["thumb-", "-os"]
    - form: zargon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "iron"
      source: {kind: inherited, form: dhargon}
    - form: thalbezon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "steel; the guarded alloy of the Vylarian smiths"
      source: {kind: inherited}
    - form: radzimon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "copper"
      source: {kind: inherited}
    - form: ethlon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "gold"
      source: {kind: inherited}
    - form: ankron
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "silver"
      source: {kind: inherited}
    - form: ulthimon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "glass"
      source: {kind: inherited}
    - form: thurdimon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "bronze"
      source: {kind: inherited}
    - form: malkeza
      class: n f
      field: Craft, guild and the kept secret
      gloss: a hammer
      source: {kind: inherited}
      concept: hammer
    - form: thumisa
      class: n f
      field: "Craft, guild and the kept secret"
      gloss: "a maker's mark; the sign struck on a finished piece"
      source: {kind: inherited}
    - form: tambathen
      class: v
      field: Craft, guild and the kept secret
      gloss: to make; to do
      concept: [make, do, create]
      source: {kind: inherited}
    - form: tambandon
      class: n n
      field: "Craft, guild and the kept secret"
      gloss: "a work; a thing made"
      source: {kind: inherited}
      built: ["tamb-", "-andon"]
    - form: kelros
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "a guild's master on the council; the guild's man in the college of guilds"
      source: {kind: inherited}
      built: ["kelr-", "-os"]
    - form: dremathen
      class: v
      field: "Craft, guild and the kept secret"
      gloss: "to cut; to carve; to cut letters in stone"
      source: {kind: coined}
    - form: lendos
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "a setter; one who sets the stones of a boundary"
      source: {kind: coined}
      built: ["lend-", "-os"]
    - form: lendgartos
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "a master of the setters; a mason"
      source: {kind: coined}
      built: ["lend-", gartos]
    - form: gauros
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "a builder; one who raises a city"
      source: {kind: coined}
      built: ["gaur-", "-os"]
    - form: delamos
      class: n m
      field: Coin, trade and the counting-table
      gloss: a merchant
      source: {kind: inherited}
      concept: merchant
    - form: delathen
      class: v
      field: Coin, trade and the counting-table
      gloss: to trade; to buy and sell
      source: {kind: inherited}
      concept: trade
    - form: delalon
      class: n n
      field: "Coin, trade and the counting-table"
      gloss: "a market; the trading place of a city"
      source: {kind: inherited}
      built: ["del-", "-alon"]
    - form: konthalon
      class: n n
      field: "Coin, trade and the counting-table"
      gloss: "a company; merchants joined in one venture"
      source: {kind: inherited}
    - form: verdakis
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "a price; the worth of a thing agreed"
      source: {kind: inherited, form: werdakis}
    - form: nozima
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "a coin"
      source: {kind: inherited}
    - form: ethla
      class: n
      field: "Coin, trade and the counting-table"
      gloss: "the gold coin; struck only at the capital, with the sovereign's face"
      source: {kind: inherited}
      built: ["elthez-", "-as"]
    - form: ankra
      class: n m
      field: "Coin, trade and the counting-table"
      gloss: "the silver coin; the coin of account"
      source: {kind: inherited}
    - form: kezilon
      class: n n
      field: "Coin, trade and the counting-table"
      gloss: "a wedge; one eighth of the silver coin, cut from it"
      source: {kind: inherited}
    - form: fezumalon
      class: n n
      field: "Coin, trade and the counting-table"
      gloss: "interest; the price of money"
      source: {kind: inherited}
      built: ["fezum-", "-alon"]
    - form: fezumathen
      class: v
      field: "Coin, trade and the counting-table"
      gloss: "to lend at interest"
      source: {kind: inherited}
    - form: fezumos
      class: n m
      field: "Coin, trade and the counting-table"
      gloss: "a moneylender; one who lends at interest"
      source: {kind: inherited}
      built: ["fezum-", "-os"]
    - form: nezora
      class: n f
      field: Coin, trade and the counting-table
      gloss: a debt
      source: {kind: inherited, form: nedhora}
      concept: debt
    - form: solkimon
      class: n n
      field: "Coin, trade and the counting-table"
      gloss: "a weight; a pound of the city's standard"
      source: {kind: inherited}
    - form: thradina
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "a scale; a balance for weighing"
      source: {kind: inherited}
    - form: rozima
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "a ledger; a book of accounts"
      source: {kind: inherited}
    - form: firsamis
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "a note; a paper the moneylenders issue against the treasury"
      source: {kind: inherited}
    - form: selvaron
      class: n n
      field: "Coin, trade and the counting-table"
      gloss: "a warehouse"
      source: {kind: inherited, form: selwaron}
    - form: kelbora
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "grain"
      source: {kind: inherited}
    - form: uzmela
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "the dole; the grain given to the citizens of a city"
      source: {kind: inherited}
    - form: yenthizon
      class: n n
      field: "Coin, trade and the counting-table"
      gloss: "wine"
      source: {kind: inherited}
    - form: usralis
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "oil; olive oil"
      source: {kind: inherited}
    - form: thremuzis
      class: n m
      field: "Coin, trade and the counting-table"
      gloss: "salt"
      source: {kind: inherited}
    - form: fainela
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "silk"
      source: {kind: inherited}
    - form: thradinos
      class: n m
      field: "Coin, trade and the counting-table"
      gloss: "a weigher; one who keeps the scale"
      source: {kind: coined}
      built: ["thradin-", "-os"]
    - form: rozimathen
      class: v
      field: Coin, trade and the counting-table
      gloss: to count; to reckon; to date by a reckoning
      source: {kind: coined}
      concept: count-verb
    - form: verdakeza
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "greed; the want of more than a thing is worth"
      concept: greed
      source: {kind: coined}
    - form: yormalis
      class: n f
      field: Land, the vine and the river
      gloss: land; the ground a house owns
      source: {kind: inherited}
      concept: land
    - form: polthamis
      class: n f
      field: Land, the vine and the river
      gloss: a field; farmland
      source: {kind: inherited}
      concept: field
    - form: polthos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a tenant farmer; one who works another's field for a share"
      source: {kind: inherited}
      built: ["polth-", "-os"]
    - form: kolsama
      class: n f
      field: "Land, the vine and the river"
      gloss: "a harvest"
      source: {kind: inherited}
    - form: pirkelos
      class: n f
      field: "Land, the vine and the river"
      gloss: "an olive tree"
      source: {kind: inherited}
    - form: gurima
      class: n f
      field: "Land, the vine and the river"
      gloss: "a vine"
      source: {kind: inherited, form: ghurima}
    - form: gurimalon
      class: n n
      field: "Land, the vine and the river"
      gloss: "a vineyard"
      source: {kind: inherited, form: ghurimalon}
      built: ["gurim-", "-alon"]
    - form: tholera
      class: n f
      field: "Land, the vine and the river"
      gloss: "a cow"
      source: {kind: inherited}
    - form: kedrilis
      class: n f
      field: "Land, the vine and the river"
      gloss: "a sheep"
      source: {kind: inherited}
    - form: vilaras
      class: n
      field: "Land, the vine and the river"
      gloss: "the great river; hallowed, the river the empire was born beside"
      source: {kind: inherited, form: wilaras}
    - form: siretha
      class: n f
      field: Land, the vine and the river
      gloss: a river; running water
      source: {kind: inherited}
      concept: river
    - form: linthima
      class: n f
      field: "Land, the vine and the river"
      gloss: "a spring"
      source: {kind: inherited}
    - form: tholmara
      class: n f
      field: Land, the vine and the river
      gloss: a lake
      source: {kind: inherited}
      concept: lake
    - form: nebralis
      class: n f
      field: Land, the vine and the river
      gloss: a valley
      source: {kind: inherited}
      concept: valley
    - form: ronethos
      class: n m
      field: Land, the vine and the river
      gloss: a mountain
      source: {kind: inherited}
      concept: mountain
    - form: ganothos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a pass; a gate through the hills"
      source: {kind: inherited}
    - form: lizela
      class: n f
      field: Land, the vine and the river
      gloss: a flower
      source: {kind: inherited}
      concept: flower
    - form: kaldrema
      class: n f
      field: Land, the vine and the river
      gloss: a wood; a forest
      source: {kind: inherited}
      concept: forest
    - form: tharozos
      class: n f
      field: "Land, the vine and the river"
      gloss: "a cedar"
      source: {kind: inherited}
    - form: venthelos
      class: n f
      field: "Land, the vine and the river"
      gloss: "a laurel; the tree of the victor's wreath"
      source: {kind: inherited, form: wenthelos}
    - form: nelamis
      class: n f
      field: Land, the vine and the river
      gloss: snow
      source: {kind: inherited}
      concept: snow
    - form: huradis
      class: n f
      field: Land, the vine and the river
      gloss: rain
      source: {kind: inherited}
      concept: rain
    - form: korvathis
      class: n m
      field: Land, the vine and the river
      gloss: the sun
      source: {kind: inherited, form: korwathis}
      concept: sun
    - form: yalzemis
      class: n f
      field: Land, the vine and the river
      gloss: the moon
      source: {kind: inherited}
      concept: moon
    - form: ilthera
      class: n f
      field: Land, the vine and the river
      gloss: a star
      source: {kind: inherited}
      concept: star
    - form: iltheron
      class: n n
      field: "Land, the vine and the river"
      gloss: "a circle of stars; the whole of the stars"
      source: {kind: inherited}
      built: ["ilther-", "-alon"]
    - form: satheros
      class: n m
      field: Land, the vine and the river
      gloss: a wind
      source: {kind: inherited}
      concept: wind
    - form: talothos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a standing stone; a boundary stone"
      source: {kind: inherited}
    - form: elza
      class: n f
      field: Land, the vine and the river
      gloss: ash; a cinder
      source: {kind: inherited, form: eldha}
      concept: ash
    - form: varthos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a ram"
      source: {kind: inherited, form: warthos}
    - form: dolveros
      class: n m
      field: "Land, the vine and the river"
      gloss: "an ox"
      source: {kind: inherited, form: dolweros}
    - form: dulmekis
      class: n f
      field: "Land, the vine and the river"
      gloss: "a tortoise"
      source: {kind: inherited}
    - form: vonthis
      class: n f
      field: "Land, the vine and the river"
      gloss: "a helm"
      source: {kind: inherited, form: wonthis}
    - form: prenkis
      class: n f
      field: "Land, the vine and the river"
      gloss: "a goad"
      source: {kind: inherited}
    - form: grelthis
      class: n m
      field: "Land, the vine and the river"
      gloss: "a stag"
      source: {kind: inherited}
    - form: ulfis
      class: n m
      field: Land, the vine and the river
      gloss: a fish
      source: {kind: inherited}
      concept: fish
    - form: sedon
      class: n n
      field: Land, the vine and the river
      gloss: a place; a spot; the ground a thing stands on
      source: {kind: coined}
      concept: place-noun
    - form: klivon
      class: n n
      field: "Land, the vine and the river"
      gloss: "a slope; the side of a hill"
      source: {kind: coined}
    - form: trazela
      class: n f
      field: "Land, the vine and the river"
      gloss: "a sledge; a sled for dragging stone"
      source: {kind: coined}
    - form: kelborkistela
      class: n f
      field: "Land, the vine and the river"
      gloss: "a seed-jar; a chest for grain"
      source: {kind: coined}
      built: ["kelbor-", kistela]
    - form: kolsamos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a harvester; a picker of grapes or olives"
      source: {kind: coined}
      built: ["kolsam-", "-os"]
    - form: ornethe
      class: n f
      field: The sea and the sailing year
      gloss: the sea
      source: {kind: inherited}
      concept: [sea, ocean]
    - form: salkon
      class: n n
      field: The sea and the sailing year
      gloss: a shore
      source: {kind: inherited}
      concept: shore
    - form: threnema
      class: n f
      field: The sea and the sailing year
      gloss: "a ship"
      source: {kind: inherited}
    - form: threnemalon
      class: n n
      field: The sea and the sailing year
      gloss: "a fleet; the ships of the empire as one body"
      source: {kind: inherited}
      built: ["threnem-", "-alon"]
    - form: korduthrenema
      class: n f
      field: The sea and the sailing year
      gloss: "a warship"
      source: {kind: inherited}
      built: [kordu, threnema]
    - form: threnemos
      class: n m
      field: The sea and the sailing year
      gloss: "a sailor of the fleet"
      source: {kind: inherited}
      built: ["threnem-", "-os"]
    - form: volkema
      class: n f
      field: The sea and the sailing year
      gloss: "a harbor"
      source: {kind: inherited, form: wolkhema}
    - form: palgezon
      class: n n
      field: The sea and the sailing year
      gloss: "an oar"
      source: {kind: inherited}
    - form: lenthizon
      class: n n
      field: The sea and the sailing year
      gloss: "a sail"
      source: {kind: inherited}
    - form: zambela
      class: n f
      field: The sea and the sailing year
      gloss: "an anchor"
      source: {kind: inherited, form: dhambela}
    - form: thersolis
      class: n f
      field: The sea and the sailing year
      gloss: "an island"
      source: {kind: inherited}
    - form: brazema
      class: n f
      field: The sea and the sailing year
      gloss: a storm
      source: {kind: inherited}
      concept: storm
    - form: zurmela
      class: n f
      field: The sea and the sailing year
      gloss: thunder
      source: {kind: inherited, form: dhurmela}
      concept: thunder
    - form: aistroi
      class: n m
      plural: aistroi
      field: The sea and the sailing year
      gloss: "the steady northerly winds of late summer that set the sailing year; a plural"
      source: {kind: inherited}
    - form: karthorgila
      class: n f
      field: The sea and the sailing year
      gloss: "a lighthouse; a tower that keeps a fire"
      source: {kind: inherited, form: "k'arthorgila"}
      built: ["kar-", thorgila]
    - form: rezothos
      class: n m
      field: The sea and the sailing year
      gloss: "a pirate"
      source: {kind: inherited}
    - form: aistren
      class: adj
      field: The sea and the sailing year
      gloss: "northern; of the north, where the summer northerlies come from"
      source: {kind: coined}
      built: ["aistr-", "-en"]
    - form: tholkezos
      class: n m
      field: "The body, life and death"
      gloss: "a head"
      concept: head
      source: {kind: inherited}
    - form: yenthamis
      class: n f
      field: "The body, life and death"
      gloss: "a face"
      concept: face
      source: {kind: inherited}
    - form: dekazu
      class: n m
      field: "The body, life and death"
      gloss: "a hand; also the power a master holds over a person"
      concept: hand
      source: {kind: inherited}
    - form: holdekazu
      class: n m
      field: "The body, life and death"
      gloss: "the high hand; the chair of the scribal guild"
      source: {kind: inherited}
      built: ["hol-", dekazu]
    - form: silkimos
      class: n m
      field: "The body, life and death"
      gloss: "an eye"
      concept: eye
      source: {kind: inherited}
    - form: nethora
      class: n f
      field: "The body, life and death"
      gloss: "a heart"
      concept: heart
      source: {kind: inherited}
    - form: bruzamis
      class: n f
      field: "The body, life and death"
      gloss: "blood"
      concept: blood
      source: {kind: inherited, form: brudhamis}
    - form: sirema
      class: n f
      field: The body, life and death
      gloss: life
      source: {kind: inherited}
      concept: life
    - form: kolvazis
      class: n f
      field: The body, life and death
      gloss: death; a word said as seldom as it can be
      source: {kind: inherited, form: kholwazis}
      concept: death
    - form: kalmethathen
      class: v
      field: "The body, life and death"
      gloss: "to go to the ancestors; to die, as the courteous say it"
      concept: die
      source: {kind: inherited}
    - form: kelmeza
      class: n f
      field: "The body, life and death"
      gloss: "a sickness"
      source: {kind: inherited}
    - form: selthkelmeza
      class: n f
      field: "The body, life and death"
      gloss: "the sickness of the Six; the affliction of a mage who holds all six currents"
      source: {kind: inherited}
      built: ["selth-", kelmeza]
    - form: rithezon
      class: n n
      plural: rithezar
      field: "The body, life and death"
      gloss: "a wound"
      source: {kind: inherited}
    - form: rithezos
      class: n m
      field: "The body, life and death"
      gloss: "a physician; a surgeon"
      source: {kind: inherited}
      built: ["rithez-", "-os"]
    - form: zemrolon
      class: n n
      field: "The body, life and death"
      gloss: "a tomb"
      source: {kind: inherited, form: dhemrolon}
    - form: zemrolara
      class: n f
      field: "The body, life and death"
      gloss: "a city of the dead; the tombs along the roads outside the boundary"
      source: {kind: inherited, form: dhemrolara}
      built: ["zemrol-", "-ara"]
    - form: tholbema
      class: n f
      field: The body, life and death
      gloss: a cloak; the citizen's gown
      source: {kind: inherited}
      concept: cloak
    - form: kistela
      class: n f
      field: "The body, life and death"
      gloss: "a chest; the chest that holds the bones of the dead"
      source: {kind: coined}
    - form: elztholbema
      class: n f
      field: "The body, life and death"
      gloss: "the ash-gown; the grey gown worn to a father's tomb"
      source: {kind: coined}
      built: ["elz-", tholbema]
    - form: kalmethandon
      class: n n
      field: "The body, life and death"
      gloss: "a funeral; the going to the ancestors"
      source: {kind: coined}
      built: ["kalmeth-", "-andon"]
    - form: nelthis
      class: n f
      field: "The body, life and death"
      gloss: "a smell; a scent"
      concept: smell-noun
      source: {kind: coined}
    - form: okandon
      class: n n
      field: The body, life and death
      gloss: a sight; a thing seen; the look of a thing (okandon ol ulfoi, the sight of fish)
      concept: [see-noun, appearance]
      source: {kind: coined}
      built: [ok-, -andon]
    - form: thavandon
      class: n n
      field: "The body, life and death"
      gloss: "a sound; a thing heard"
      concept: hear-noun
      source: {kind: coined}
      built: ["thav-", "-andon"]
    - form: tirmis
      class: n f
      field: "The body, life and death"
      gloss: "a taste; a flavour (tirmis ol thremuzis, the taste of salt)"
      concept: taste-noun
      source: {kind: coined}
    - form: tolvis
      class: n f
      field: "The body, life and death"
      gloss: "a touch; the feel of a thing"
      concept: touch-noun
      source: {kind: coined}
    - form: kremeza
      class: n f
      field: "The body, life and death"
      gloss: "wrath; anger that burns"
      concept: wrath
      source: {kind: coined}
    - form: thesavon
      class: n n
      field: "The body, life and death"
      gloss: "envy; the want of what another has"
      concept: envy
      source: {kind: coined}
    - form: orva
      class: n f
      field: "The body, life and death"
      gloss: "hope"
      concept: hope
      source: {kind: coined}
    - form: anorva
      class: n f
      field: "The body, life and death"
      gloss: "despair; hope given up"
      concept: despair
      source: {kind: coined}
      built: ["an-", orva]
    - form: nemborva
      class: n f
      field: "The body, life and death"
      gloss: "disappointment; a hope that has fallen"
      concept: disappointment
      source: {kind: coined}
      built: ["nemb-", orva]
    - form: bruzeza
      class: n f
      field: "The body, life and death"
      gloss: "lust; the want of the body, the heat of the blood"
      concept: lust
      source: {kind: coined}
    - form: nethoron
      class: n n
      field: "The body, life and death"
      gloss: "romantic love; the love between lovers"
      concept: love-eros
      source: {kind: coined}
    - form: tharnela
      class: n f
      field: Time, the calendar and the festivals
      gloss: a year
      source: {kind: inherited}
      concept: year
    - form: oltrema
      class: n f
      field: Time, the calendar and the festivals
      gloss: a month
      source: {kind: inherited}
      concept: month
    - form: nardelon
      class: n n
      field: Time, the calendar and the festivals
      gloss: a day
      source: {kind: inherited}
      concept: day
    - form: zunela
      class: n f
      field: Time, the calendar and the festivals
      gloss: night
      source: {kind: inherited, form: dhunela}
      concept: night
    - form: thapelon
      class: n n
      field: "Time, the calendar and the festivals"
      gloss: "an hour"
      source: {kind: inherited}
    - form: pramiza
      class: n f
      field: Time, the calendar and the festivals
      gloss: the morning; the hour of the morning call
      source: {kind: inherited}
      concept: morning
    - form: hilthera
      class: n f
      field: Time, the calendar and the festivals
      gloss: the evening
      source: {kind: inherited}
      concept: evening
    - form: herthema
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "summer"
      source: {kind: inherited}
    - form: luvetha
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "spring"
      source: {kind: inherited, form: lubetha}
    - form: ofrema
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "autumn"
      source: {kind: inherited}
    - form: nelameza
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "winter; the snow-time"
      source: {kind: inherited}
    - form: thurkelon
      class: n n
      field: "Time, the calendar and the festivals"
      gloss: "an age; the span of a living memory"
      source: {kind: inherited}
    - form: lordemon
      class: n n
      field: "Time, the calendar and the festivals"
      gloss: "a festival"
      source: {kind: inherited}
    - form: zerthazis
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "the founding; the day the reckoning counts from"
      source: {kind: inherited}
    - form: sorima
      class: n f
      field: "Learning, speech and the letters"
      gloss: "a song"
      source: {kind: inherited}
    - form: sorimathen
      class: v
      field: "Learning, speech and the letters"
      gloss: "to sing"
      source: {kind: inherited}
    - form: sorimos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a poet; a maker of songs"
      source: {kind: inherited}
      built: ["sorim-", "-os"]
    - form: pozersorima
      class: n f
      field: "Learning, speech and the letters"
      gloss: "a road-song; the song a legion marches to, called and answered"
      source: {kind: inherited, form: podhersorima}
      built: ["pozer-", sorima]
    - form: hilthersorima
      class: n f
      field: "Learning, speech and the letters"
      gloss: "an elegy; a song of the evening, for what is lost or kept from the singer"
      source: {kind: inherited}
      built: ["hilther-", sorima]
    - form: dokathen
      class: v
      field: Learning, speech and the letters
      gloss: to speak; to say before others
      concept: [speak, say, tell]
      source: {kind: inherited}
    - form: dokemon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "an oration; a speech made in the Senate or the square"
      source: {kind: inherited}
    - form: dokos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "an orator"
      source: {kind: inherited}
      built: ["dok-", "-os"]
    - form: tharlema
      class: n f
      field: Learning, speech and the letters
      gloss: a tongue; a language
      source: {kind: inherited}
    - form: lambizon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "a word"
      source: {kind: inherited}
    - form: semarzon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "a letter; one sign of the script"
      source: {kind: inherited}
    - form: thilathen
      class: v
      field: "Learning, speech and the letters"
      gloss: "to write"
      source: {kind: inherited}
    - form: thilos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a scribe"
      source: {kind: inherited}
      built: ["thil-", "-os"]
    - form: thilandon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "a book; a written thing"
      source: {kind: inherited}
      built: ["thil-", "-andon"]
    - form: thordimthilandon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "the book of the art; the written code of the arcane order"
      source: {kind: inherited}
      built: ["thordim-", thilandon]
    - form: thilandalon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "an archive; a house of written things"
      source: {kind: inherited}
      built: ["thiland-", "-alon"]
    - form: thilgartos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a master scribe; one examined to seal alone"
      source: {kind: inherited, form: thilghartos}
      built: ["thil-", gartos]
    - form: thilyunakos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a probationer; a scribe not yet sworn"
      source: {kind: inherited}
      built: ["thil-", yunakos]
    - form: marendis
      class: n f
      plural: marendar
      field: "Learning, speech and the letters"
      gloss: "wisdom"
      source: {kind: inherited}
    - form: marendalon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "a school"
      source: {kind: inherited}
      built: ["marend-", "-alon"]
    - form: thizarlambizon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "the sealed word; a word held under oath"
      source: {kind: inherited, form: thidharlambizon}
      built: ["thizar-", lambizon]
    - form: tavemyenthamis
      class: n f
      field: "Learning, speech and the letters"
      gloss: "two faces; a face turned both ways"
      source: {kind: inherited, form: tawemyenthamis}
      built: ["tavem-", yenthamis]
    - form: elztholmeza
      class: n f
      field: "Learning, speech and the letters"
      gloss: "an ashen vow; a vow sworn in ash"
      source: {kind: inherited, form: eldhtholmeza}
      built: ["elz-", tholmeza]
    - form: zargelza
      class: n f
      field: "Learning, speech and the letters"
      gloss: "an iron cinder; a brand of iron and ash"
      source: {kind: inherited, form: dhargeldha}
      built: ["zarg-", elza]
    - form: marendos
      class: n m
      field: Learning, speech and the letters
      gloss: a master; a teacher licensed to teach
      source: {kind: inherited}
      built: [marend-, -os]
      concept: teacher
    - form: zetmarendalon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "the University; the school of every learning"
      source: {kind: inherited}
      built: ["zet-", marendalon]
    - form: zetmarendos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "an archmaster; the master over every master"
      source: {kind: inherited}
      built: ["zet-", marendos]
    - form: galethos
      class: n m
      field: Learning, speech and the letters
      gloss: a student
      source: {kind: inherited, form: ghalethos}
      concept: student
    - form: kezdathen
      class: v
      field: "Learning, speech and the letters"
      gloss: "to know"
      concept: know
      source: {kind: inherited}
    - form: lorezathen
      class: v
      field: "Learning, speech and the letters"
      gloss: "to read aloud; to lecture"
      source: {kind: inherited}
    - form: lorezos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a reader; a lecturer of the University; a teacher of a school's initiates"
      source: {kind: inherited}
      built: ["lorez-", "-os"]
    - form: olzemon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "a history; an account of what was done"
      source: {kind: inherited, form: oldhemon}
    - form: thordima
      class: n f
      field: "Learning, speech and the letters"
      gloss: "magic; the art"
      source: {kind: inherited}
    - form: thordimos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a mage"
      source: {kind: inherited}
      built: ["thordim-", "-os"]
    - form: thordimalon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "the arcane order; the body of the art"
      source: {kind: inherited}
      built: ["thordim-", "-alon"]
    - form: fenthalon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "an order; a body living by a rule and a charter of its own"
      source: {kind: inherited}
    - form: kosthemos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "an initiate; one newly taken into an order"
      source: {kind: inherited}
    - form: therman
      class: n m
      field: "Learning, speech and the letters"
      gloss: "an adept; a practitioner licensed to work alone"
      source: {kind: inherited}
    - form: holmarendos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a prelate; a senior master with a seat on an order's council"
      source: {kind: inherited}
      built: ["hol-", marendos]
    - form: zulen
      class: n n
      plural: zulethalar
      field: "Learning, speech and the letters"
      gloss: "a fellowship; one of the six schools of an order"
      source: {kind: inherited}
    - form: ombalon
      class: n n
      field: "Learning, speech and the letters"
      gloss: "a seat of counsel; the place where a body takes its seats in order"
      source: {kind: inherited}
      built: ["omb-", "-alon"]
    - form: kuthaura
      class: n f
      field: "Learning, speech and the letters"
      gloss: "an orrery; a machine that turns the heavens"
      source: {kind: inherited}
    - form: frenkos
      class: n m
      field: "Learning, speech and the letters"
      gloss: "a keeper of a school's endowment; one who sees to its houses and property"
      source: {kind: inherited}
      built: ["frenk-", "-os"]
    - form: thelvaros
      class: adj
      field: Qualities
      gloss: high; noble
      source: {kind: inherited, form: thelwaros}
      concept: high
    - form: melvar
      class: adj
      field: Qualities
      gloss: "great"
      source: {kind: inherited, form: melwar}
    - form: dorandar
      class: adj
      field: Qualities
      gloss: enduring
      source: {kind: inherited}
      concept: lasting-duration
    - form: dayos
      class: adj
      field: Qualities
      gloss: good
      source: {kind: inherited}
      concept: good
    - form: korethos
      class: adj
      field: Qualities
      gloss: bad
      source: {kind: inherited}
      concept: bad
    - form: solteros
      class: adj
      field: Qualities
      gloss: large
      source: {kind: inherited}
      concept: big
    - form: nizelos
      class: adj
      field: Qualities
      gloss: small
      source: {kind: inherited}
      concept: small
    - form: peleros
      class: adj
      field: Qualities
      gloss: new
      source: {kind: inherited}
      concept: new
    - form: ankelos
      class: adj
      field: Qualities
      gloss: old
      source: {kind: inherited}
      concept: [old, old-object, elder]
    - form: dayimmon
      class: adj
      field: Qualities
      gloss: the best
      source: {kind: coined}
      concept: best
    - form: nizelimmon
      class: adj
      field: Qualities
      gloss: "the smallest"
      source: {kind: coined}
    - {form: ankelimmos, class: adj, field: Qualities, gloss: "the oldest", source: {kind: coined}}
    - form: thelvarimmos
      class: adj
      field: Qualities
      gloss: "the most noble; the highest"
      source: {kind: coined}
    - form: thelvarimma
      class: adj
      field: Qualities
      gloss: "the most noble; the highest"
      source: {kind: coined}
    - form: solkimimmon
      class: adj
      field: Qualities
      gloss: "the most weighty; the most grave"
      source: {kind: coined}
    - form: teremos
      class: adj
      field: Qualities
      gloss: long
      source: {kind: inherited}
      concept: long
    - form: zetimos
      class: adj
      field: Qualities
      gloss: all; every; whole
      source: {kind: inherited}
      concept: [whole, all, every, complete]
    - form: kiramos
      class: adj
      field: Qualities
      gloss: bright; famous
      source: {kind: inherited}
      concept: bright
    - form: tharkos
      class: adj
      field: Qualities
      gloss: strong
      source: {kind: inherited}
      concept: strong
    - form: solkimos
      class: adj
      field: Qualities
      gloss: weighty; grave
      source: {kind: inherited}
      concept: heavy
    - form: revothos
      class: adj
      field: Qualities
      gloss: free
      source: {kind: inherited, form: rewothos}
      concept: free
    - form: varelin
      class: adj
      field: Qualities
      gloss: "true"
      source: {kind: inherited, form: warelin}
      concept: "true"
    - form: varelza
      class: n f
      field: Qualities
      gloss: truth
      source: {kind: coined}
      built: [varel-, -za]
      concept: truth
    - form: sethros
      class: adj
      field: Qualities
      gloss: "false"
      source: {kind: inherited}
      concept: "false"
    - {form: zenothos, class: adj, field: Qualities, gloss: "wise", source: {kind: inherited}}
    - form: holimos
      class: adj
      field: Qualities
      gloss: "first"
      source: {kind: inherited}
      concept: first
    - form: orthemos
      class: adj
      field: Qualities
      gloss: last
      source: {kind: inherited}
      concept: last
    - form: iltheros
      class: adj
      field: Qualities
      gloss: "white"
      source: {kind: inherited}
      concept: white
    - form: kauros
      class: adj
      field: Qualities
      gloss: black; dark
      source: {kind: inherited}
      concept: [black, dark]
    - form: thaluros
      class: adj
      field: Qualities
      gloss: "red"
      source: {kind: inherited}
      concept: red
    - {form: ethlos, class: adj, field: Qualities, gloss: "golden", source: {kind: inherited}}
    - form: aithar
      class: adv
      field: Qualities
      gloss: "well; the irregular adverb of dayos"
      source: {kind: inherited}
    - form: korimen
      class: adv
      field: Qualities
      gloss: "badly; the irregular adverb of korethos"
      source: {kind: inherited}
    - form: mazeron
      class: adv
      field: Qualities
      gloss: more
      source: {kind: inherited}
      concept: more
    - form: nizeron
      class: adv
      field: Qualities
      gloss: less
      source: {kind: inherited}
      concept: less
    - form: zikai
      class: adv
      field: Qualities
      gloss: perhaps; the irregular adverb of zikon, fate
      source: {kind: coined}
      built: [zik-, -ai]
      concept: perhaps
    - form: varlai
      class: adv
      field: Qualities
      gloss: truly; standing alone, Really?
      source: {kind: coined}
      built: [varel-, -ai]
      concept: sincerity
    - {form: zelos, class: adj, field: Qualities, gloss: low, source: {kind: coined}, concept: low}
    - form: levros
      class: adj
      field: Qualities
      gloss: smooth
      source: {kind: coined}
      concept: smooth
    - form: yarethen
      class: v
      field: Doing, going and being
      gloss: to be
      concept: [be, exist]
      source: {kind: inherited}
    - form: kerathen
      class: v
      field: "Doing, going and being"
      gloss: "to hold; to have"
      concept: [hold, have]
      source: {kind: inherited}
    - form: lokathen
      class: v
      field: "Doing, going and being"
      gloss: "to come"
      concept: come
      source: {kind: inherited}
    - form: tigathen
      class: v
      field: "Doing, going and being"
      gloss: "to go"
      concept: go
      source: {kind: inherited}
    - form: okethen
      class: v
      field: "Doing, going and being"
      gloss: "to see"
      concept: see-verb
      source: {kind: inherited}
    - form: thavithen
      class: v
      field: "Doing, going and being"
      gloss: "to hear"
      concept: hear-verb
      source: {kind: inherited, form: thawithen}
    - form: vakathen
      class: v
      field: Doing, going and being
      gloss: to show
      source: {kind: inherited, form: wakathen}
      concept: reveal
    - form: daimathen
      class: v
      field: "Doing, going and being"
      gloss: "to give; to grant as a patron grants"
      concept: give
      source: {kind: inherited}
    - form: kurethen
      class: v
      field: "Doing, going and being"
      gloss: "to take"
      concept: take
      source: {kind: inherited}
    - form: lozethen
      class: v
      field: Doing, going and being
      gloss: to carry
      source: {kind: inherited}
      concept: carry
    - form: thalethen
      class: v
      field: "Doing, going and being"
      gloss: "to stand"
      concept: stand
      source: {kind: inherited}
    - form: ombithen
      class: v
      field: "Doing, going and being"
      gloss: "to sit; to take one's seat in order"
      concept: sit
      source: {kind: inherited}
    - form: nembethen
      class: v
      field: Doing, going and being
      gloss: to fall
      source: {kind: inherited}
      concept: fall
    - form: urzithen
      class: v
      field: Doing, going and being
      gloss: to rise
      source: {kind: inherited}
      concept: rise
    - form: gaurathen
      class: v
      field: Doing, going and being
      gloss: to build
      source: {kind: inherited, form: ghaurathen}
      concept: build
    - form: thaurathen
      class: v
      field: "Doing, going and being"
      gloss: "to keep; to guard"
      source: {kind: inherited}
    - form: thernathen
      class: v
      field: "Doing, going and being"
      gloss: "to live"
      concept: live
      source: {kind: inherited}
    - form: falvathen
      class: v
      field: "Doing, going and being"
      gloss: "to be away; to be absent"
      source: {kind: inherited, form: falwathen}
    - form: zenothatora
      class: v
      field: "Doing, going and being"
      gloss: "to ponder"
      variants: [zenothazor]
      source: {kind: inherited}
    - form: solkatora
      class: v
      field: Doing, going and being
      gloss: to follow; to attend as a client attends
      source: {kind: inherited}
      concept: follow
    - form: valmathen
      class: v
      field: "Doing, going and being"
      gloss: "to walk; to pace out a line"
      concept: walk
      source: {kind: coined}
    - form: lendathen
      class: v
      field: "Doing, going and being"
      gloss: "to set; to lay a thing in its place"
      concept: put
      source: {kind: coined}
    - form: olmathen
      class: v
      field: "Doing, going and being"
      gloss: "to open"
      concept: open
      source: {kind: coined}
    - form: volzathen
      class: v
      field: "Doing, going and being"
      gloss: "to turn"
      source: {kind: coined}
    - form: klinethen
      class: v
      field: Doing, going and being
      gloss: to bend; to lean; to bow
      source: {kind: coined}
      concept: [bend, lean]
    - form: pethathen
      class: v
      field: Doing, going and being
      gloss: to ask
      source: {kind: coined}
      concept: ask
    - form: zundathen
      class: v
      field: "Doing, going and being"
      gloss: "to tie; to make fast; to knot"
      source: {kind: coined}
    - form: linkathen
      class: v
      field: Doing, going and being
      gloss: to leave; to let be; to let go
      source: {kind: coined}
      concept: leave
    - form: kremethen
      class: v
      field: Doing, going and being
      gloss: to burn
      source: {kind: coined}
      concept: burn
    - form: sistathen
      class: v
      field: Doing, going and being
      gloss: to stop; to cease
      source: {kind: coined}
      concept: stop
    - form: avethen
      class: v
      field: Doing, going and being
      gloss: to want; to desire
      concept: [want, wish-verb]
      source: {kind: coined}
    - form: memrathen
      class: v
      field: Doing, going and being
      gloss: to remember
      source: {kind: coined}
      concept: remember
    - form: klamethen
      class: v
      field: Doing, going and being
      gloss: to call out; to shout
      source: {kind: coined}
      concept: [call, shout]
    - form: anolmathen
      class: v
      field: "Doing, going and being"
      gloss: "to close"
      concept: close
      source: {kind: coined}
      built: ["an-", olmathen]
    - form: anmemrathen
      class: v
      field: Doing, going and being
      gloss: to forget
      source: {kind: coined}
      built: [an-, memrathen]
      concept: forget
    - form: dunathen
      class: v
      field: Doing, going and being
      gloss: to be able; can
      source: {kind: coined}
      concept: can
    - form: klamandon
      class: n n
      field: "Doing, going and being"
      gloss: "a call; a shout"
      source: {kind: coined}
      built: ["klam-", "-andon"]
    - form: valmandon
      class: n n
      field: "Doing, going and being"
      gloss: "a walking; the walk of a boundary"
      source: {kind: coined}
      built: ["valm-", "-andon"]
    - form: nelthathen
      class: v
      field: "Doing, going and being"
      gloss: "to smell; to catch the smell of a thing"
      concept: smell-verb
      source: {kind: coined}
    - form: tirmathen
      class: v
      field: "Doing, going and being"
      gloss: "to taste"
      concept: taste-verb
      source: {kind: coined}
    - form: tolvathen
      class: v
      field: "Doing, going and being"
      gloss: "to feel; to touch"
      concept: touch-verb
      source: {kind: coined}
    - form: thesavethen
      class: v
      field: "Doing, going and being"
      gloss: "to envy"
      source: {kind: coined}
      built: ["thes-", avethen]
    - form: orvathen
      class: v
      field: Doing, going and being
      gloss: to hope
      source: {kind: coined}
      concept: hope-verb
    - form: vethdokathen
      class: v
      field: "Doing, going and being"
      gloss: "to boast"
      source: {kind: coined}
      built: ["veth-", dokathen]
    - form: varelathen
      class: v
      field: Doing, going and being
      gloss: to trust; to believe
      source: {kind: coined}
      concept: believe
    - form: nethorathen
      class: v
      field: "Doing, going and being"
      gloss: "to love, as lovers love"
      source: {kind: coined}
    - form: urkis
      class: num
      field: Numbers and grammar words
      gloss: "one"
      concept: one
      source: {kind: inherited}
    - form: tavemer
      class: num
      field: Numbers and grammar words
      gloss: "two"
      concept: two
      source: {kind: inherited, form: tawemer}
    - form: karzis
      class: num
      field: Numbers and grammar words
      gloss: "three"
      concept: three
      source: {kind: inherited}
    - form: felzur
      class: num
      field: Numbers and grammar words
      gloss: "four"
      concept: four
      source: {kind: inherited}
    - form: yolemiks
      class: num
      field: Numbers and grammar words
      gloss: "five"
      concept: five
      source: {kind: inherited}
    - form: selthur
      class: num
      field: Numbers and grammar words
      gloss: "six"
      concept: six
      source: {kind: inherited}
    - form: ranethur
      class: num
      field: Numbers and grammar words
      gloss: "seven"
      concept: seven
      source: {kind: inherited}
    - form: zorimaks
      class: num
      field: Numbers and grammar words
      gloss: "eight"
      concept: eight
      source: {kind: inherited}
    - form: lukemar
      class: num
      field: Numbers and grammar words
      gloss: "nine"
      concept: nine
      source: {kind: inherited}
    - form: umbaris
      class: num
      field: Numbers and grammar words
      gloss: "ten"
      concept: ten
      source: {kind: inherited}
    - form: dorekis
      class: num
      field: Numbers and grammar words
      gloss: "twelve"
      source: {kind: inherited}
    - form: karvelon
      class: num
      field: Numbers and grammar words
      gloss: "a hundred"
      concept: hundred
      source: {kind: inherited, form: kharwelon}
    - form: thambezur
      class: num
      field: Numbers and grammar words
      gloss: "a thousand"
      concept: thousand
      source: {kind: inherited}
    - form: en
      class: pron
      field: Numbers and grammar words
      gloss: I; said aloud, a raised voice
      source: {kind: inherited}
      concept: i
    - form: ko
      class: pron
      field: Numbers and grammar words
      gloss: you, one person; emphatic
      source: {kind: inherited}
      concept: you-reference
    - form: enoi
      class: pron
      field: Numbers and grammar words
      gloss: we
      source: {kind: inherited}
      concept: we
    - form: koroi
      class: pron
      field: Numbers and grammar words
      gloss: "you, many; and to one person, the formal you"
      source: {kind: inherited}
    - form: vethis
      class: pron
      field: Numbers and grammar words
      gloss: oneself; the reflexive
      source: {kind: inherited, form: wethis}
      concept: self
    - form: denos
      class: pron
      field: Numbers and grammar words
      gloss: this, here by me
      source: {kind: inherited}
      concept: [he, this]
    - form: thesos
      class: pron
      field: Numbers and grammar words
      gloss: "that of yours; said of a person, contemptuous"
      source: {kind: inherited}
    - form: alathos
      class: pron
      field: Numbers and grammar words
      gloss: that, yonder; said of a person, grand
      source: {kind: inherited}
      concept: that
    - form: kedis
      class: pron
      field: Numbers and grammar words
      gloss: "who"
      source: {kind: inherited}
    - form: ul
      class: part
      field: Numbers and grammar words
      gloss: and
      source: {kind: inherited}
      concept: and
    - form: ar
      class: part
      field: Numbers and grammar words
      gloss: not
      source: {kind: inherited}
      concept: not
    - form: eza
      class: part
      field: Numbers and grammar words
      gloss: opens a question
      source: {kind: inherited}
      concept: question-polar
    - form: areza
      class: part
      field: Numbers and grammar words
      gloss: "opens a question expecting yes"
      source: {kind: inherited}
    - form: vez
      class: part
      field: Numbers and grammar words
      gloss: "opens a question expecting no"
      source: {kind: inherited}
    - form: voza
      class: part
      field: Numbers and grammar words
      gloss: "marks a command, before the infinitive"
      source: {kind: inherited}
    - form: aia
      class: part
      field: Numbers and grammar words
      gloss: "opens an exclamation"
      source: {kind: inherited}
    - form: vethor
      class: v
      field: Numbers and grammar words
      gloss: "says, said: set inside the words it reports, and has no other form"
      source: {kind: inherited}
    - form: holethi
      class: part
      field: Numbers and grammar words
      gloss: because
      source: {kind: inherited}
      concept: because
    - form: tha
      class: part
      field: Numbers and grammar words
      gloss: that, so that
      source: {kind: inherited}
      concept: [then-conditional, for-purpose]
    - form: ir
      class: part
      field: Numbers and grammar words
      gloss: in, into
      source: {kind: inherited}
      concept: [inside, in]
    - form: us
      class: part
      field: Numbers and grammar words
      gloss: over; set over
      source: {kind: inherited}
      concept: [above, over]
    - form: fa
      class: part
      field: Numbers and grammar words
      gloss: "for, on behalf of"
      source: {kind: inherited}
    - form: zel
      class: part
      field: Numbers and grammar words
      gloss: under, beneath
      source: {kind: inherited, form: dhel}
      concept: [below, under]
    - form: pra
      class: part
      field: Numbers and grammar words
      gloss: before; in front of
      source: {kind: coined}
      concept: before-spatial
    - form: kona
      class: part
      field: Numbers and grammar words
      gloss: "with; together with"
      source: {kind: coined}
    - form: fos
      class: part
      field: Numbers and grammar words
      gloss: out; outside; beyond
      source: {kind: coined}
      concept: [outside, beyond]
    - form: kir
      class: part
      field: Numbers and grammar words
      gloss: around; round
      source: {kind: coined}
      concept: around
    - form: sa
      class: part
      field: Numbers and grammar words
      gloss: as; like; as when
      source: {kind: coined}
      concept: [like, as]
    - form: kan
      class: part
      field: Numbers and grammar words
      gloss: when
      source: {kind: coined}
      concept: while
    - form: ves
      class: part
      field: Numbers and grammar words
      gloss: or
      source: {kind: coined}
      concept: or
    - form: ol
      class: part
      field: Numbers and grammar words
      gloss: "of; set after the noun it belongs to, and before a pronoun to make a possessive (ol en, my)"
      source: {kind: coined}
    - form: kanai
      class: adv
      field: Numbers and grammar words
      gloss: "then; once; at that time: sets a narrated passage in the past"
      source: {kind: coined}
      concept: [then, past]
    - form: lokanthi
      class: adv
      field: Numbers and grammar words
      gloss: "in days to come; hereafter: sets a prophecy or a promise in the future"
      source: {kind: coined}
      built: [lok-, -anthi]
      concept: future
    - form: karzoros
      class: adj
      field: Numbers and grammar words
      gloss: "third"
      concept: third
      source: {kind: coined}
      built: ["karz-", "-oros"]
    - form: felzoros
      class: adj
      field: Numbers and grammar words
      gloss: "fourth"
      source: {kind: coined}
      built: ["felz-", "-oros"]
    - form: yolemoros
      class: adj
      field: Numbers and grammar words
      gloss: "fifth"
      source: {kind: coined}
      built: ["yolem-", "-oros"]
    - form: selthoros
      class: adj
      field: Numbers and grammar words
      gloss: "sixth"
      source: {kind: coined}
      built: ["selth-", "-oros"]
    - form: velkira
      class: n f
      field: "The body, life and death"
      gloss: "the hair of the head"
      concept: hair
      source: {kind: coined}
    - form: thavrela
      class: n f
      field: "The body, life and death"
      gloss: "the ear"
      concept: ear
      source: {kind: coined}
    - form: nelthumis
      class: n f
      field: "The body, life and death"
      gloss: "the nose"
      concept: nose
      source: {kind: coined}
    - form: kozma
      class: n f
      field: "The body, life and death"
      gloss: "the mouth"
      concept: mouth
      source: {kind: coined}
    - form: lirvela
      class: n f
      field: "The body, life and death"
      gloss: "a lip"
      concept: lip
      source: {kind: coined}
    - form: zekrima
      class: n f
      field: "The body, life and death"
      gloss: "a tooth"
      concept: tooth
      source: {kind: coined}
    - form: kolzeros
      class: n m
      field: "The body, life and death"
      gloss: "the neck"
      concept: neck
      source: {kind: coined}
    - form: dalmeros
      class: n m
      field: "The body, life and death"
      gloss: "the shoulder"
      concept: shoulder
      source: {kind: coined}
    - form: lamothos
      class: n m
      field: "The body, life and death"
      gloss: "the arm"
      concept: arm
      source: {kind: coined}
    - form: gomrisa
      class: n f
      field: "The body, life and death"
      gloss: "the elbow"
      concept: elbow
      source: {kind: coined}
    - form: dekis
      class: n f
      field: "The body, life and death"
      gloss: "a finger"
      concept: finger
      source: {kind: coined}
    - form: kirsela
      class: n f
      field: "The body, life and death"
      gloss: "a fingernail; a toenail"
      concept: nail
      source: {kind: coined}
    - form: varmothon
      class: n n
      field: "The body, life and death"
      gloss: "the chest"
      concept: chest
      source: {kind: coined}
    - form: sulmena
      class: n f
      field: "The body, life and death"
      gloss: "a breast"
      concept: breast
      source: {kind: coined}
    - form: bulmeron
      class: n n
      field: "The body, life and death"
      gloss: "the belly"
      concept: belly
      source: {kind: coined}
    - form: telkemon
      class: n n
      field: "The body, life and death"
      gloss: "the back"
      concept: back
      source: {kind: coined}
    - form: zalpima
      class: n f
      field: "The body, life and death"
      gloss: "the hip"
      concept: hip
      source: {kind: coined}
    - form: thalmeros
      class: n m
      field: "The body, life and death"
      gloss: "the leg"
      concept: leg
      source: {kind: coined}
    - form: klinemon
      class: n n
      field: "The body, life and death"
      gloss: "the knee"
      concept: knee
      source: {kind: coined}
    - form: valma
      class: n f
      field: "The body, life and death"
      gloss: "the foot"
      concept: foot
      source: {kind: coined}
    - form: valmdekis
      class: n f
      field: "The body, life and death"
      gloss: "a toe"
      concept: toe
      source: {kind: coined}
      built: ["valm-", dekis]
    - form: lethrima
      class: n f
      field: "The body, life and death"
      gloss: "the skin; a hide"
      concept: skin
      source: {kind: coined}
    - form: kolvemos
      class: n m
      field: "The body, life and death"
      gloss: "a bone"
      concept: bone
      source: {kind: coined}
    - form: meltharis
      class: n f
      field: "The body, life and death"
      gloss: "flesh; meat"
      concept: flesh
      source: {kind: coined}
    - form: paza
      class: n f
      field: "The body, life and death"
      gloss: "food; a meal"
      concept: food
      source: {kind: coined}
    - form: pazathen
      class: v
      field: "The body, life and death"
      gloss: "to eat"
      concept: eat
      source: {kind: coined}
    - form: vima
      class: n f
      field: "The body, life and death"
      gloss: "a drink"
      concept: drink-noun
      source: {kind: coined}
    - form: vimathen
      class: v
      field: "The body, life and death"
      gloss: "to drink"
      concept: drink-verb
      source: {kind: coined}
    - form: sithrema
      class: n f
      field: "The body, life and death"
      gloss: "air"
      concept: air
      source: {kind: coined}
    - form: zirva
      class: n f
      field: "The body, life and death"
      gloss: "breath; a breath"
      concept: breath
      source: {kind: coined}
    - form: zirvathen
      class: v
      field: "The body, life and death"
      gloss: "to breathe"
      concept: breathe
      source: {kind: coined}
    - form: lotha
      class: n f
      field: "The body, life and death"
      gloss: "sleep"
      concept: sleep-noun
      source: {kind: coined}
    - form: lothathen
      class: v
      field: "The body, life and death"
      gloss: "to sleep"
      concept: sleep-verb
      source: {kind: coined}
    - form: zilvena
      class: n f
      field: "The body, life and death"
      gloss: "urine"
      concept: urine
      source: {kind: coined}
    - form: zilvathen
      class: v
      field: "The body, life and death"
      gloss: "to urinate"
      concept: urinate
      source: {kind: coined}
    - form: pumzemon
      class: n n
      field: "The body, life and death"
      gloss: "dung"
      concept: dung
      source: {kind: coined}
    - form: pumzathen
      class: v
      field: "The body, life and death"
      gloss: "to defecate"
      concept: defecate
      source: {kind: coined}
    - form: auveza
      class: n f
      field: "The body, life and death"
      gloss: "warmth"
      concept: warmth
      source: {kind: coined}
    - form: zelkovra
      class: n f
      field: "The body, life and death"
      gloss: "shelter; a place under a roof"
      concept: shelter
      source: {kind: coined}
      built: ["zel-", kovra]
    - form: ombela
      class: n f
      field: Ancestors, the house and the name
      gloss: a chair
      concept: [chair, seat]
      source: {kind: coined}
    - form: morvalis
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a table"
      concept: table
      source: {kind: coined}
    - form: nalvemon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "a bed"
      concept: bed
      source: {kind: coined}
    - form: grendima
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a floor"
      concept: floor
      source: {kind: coined}
    - form: kovra
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a roof"
      concept: roof
      source: {kind: coined}
    - form: dumva
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a house; a home"
      concept: abode
      source: {kind: coined}
    - form: karvon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "fire; a fire"
      concept: fire
      source: {kind: coined}
    - form: fenza
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a door"
      concept: door
      source: {kind: coined}
    - form: zundela
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a lock"
      concept: lock
      source: {kind: coined}
    - form: kezra
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a key"
      concept: key
      source: {kind: coined}
    - form: okvela
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a window"
      concept: window
      source: {kind: coined}
    - form: plekai
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "shutters; a plural"
      concept: shutters
      source: {kind: coined}
    - form: hirkon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "a cup"
      concept: cup
      source: {kind: coined}
    - form: lankima
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a bowl"
      concept: bowl
      source: {kind: coined}
    - form: dremis
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a knife"
      concept: knife
      source: {kind: coined}
    - form: pelgira
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a spoon"
      concept: spoon
      source: {kind: coined}
    - form: tolkemon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "a pot"
      concept: pot
      source: {kind: coined}
    - form: tholbon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "cloth"
      concept: cloth
      source: {kind: coined}
    - form: vemrai
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "clothes; a plural"
      concept: clothes
      source: {kind: coined}
    - form: tavendur
      class: num
      field: "Numbers and grammar words"
      gloss: "twenty"
      concept: twenty
      source: {kind: coined}
    - form: soltha
      class: n f
      field: "Numbers and grammar words"
      gloss: "a half"
      concept: half
      source: {kind: coined}
    - form: ithros
      class: adj
      field: Numbers and grammar words
      gloss: [few, little in quantity; few]
      concept: [few, little-quantity]
      source: {kind: coined}
    - form: arurkis
      class: pron
      field: "Numbers and grammar words"
      gloss: "none; nothing; not one"
      concept: none
      source: {kind: coined}
      built: [ar, urkis]
    - form: zolmos
      class: adj
      field: Numbers and grammar words
      gloss: [many, much; many in the mass sense]
      concept: [many, much]
      source: {kind: coined}
    - form: velmiros
      class: adj
      field: Qualities
      gloss: "green"
      concept: green
      source: {kind: coined}
    - form: amelos
      class: adj
      field: Qualities
      gloss: "yellow"
      concept: yellow
      source: {kind: coined}
    - form: zalthenos
      class: adj
      field: Qualities
      gloss: "blue"
      concept: blue
      source: {kind: coined}
    - form: elzen
      class: adj
      field: Qualities
      gloss: "grey; ash-coloured"
      concept: grey
      source: {kind: coined}
      built: ["elz-", "-en"]
    - form: tharvelos
      class: adj
      field: Qualities
      gloss: "brown"
      concept: brown
      source: {kind: coined}
    - form: ilmaros
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a parent"
      concept: parent
      source: {kind: coined}
    - form: holmezara
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a grandmother"
      concept: grandmother
      source: {kind: coined}
      built: ["hol-", mezara]
    - form: holhelthos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a grandfather"
      concept: grandfather
      source: {kind: coined}
      built: ["hol-", helthos]
    - form: zelnurizon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "a grandchild"
      concept: grandchild
      source: {kind: coined}
      built: ["zel-", nurizon]
    - form: kemaros
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "an uncle"
      concept: uncle
      source: {kind: coined}
    - form: kemara
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "an aunt"
      concept: aunt
      source: {kind: coined}
    - form: sorthenos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a cousin"
      concept: cousin
      source: {kind: coined}
    - form: nurothar
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a descendant"
      concept: descendant
      source: {kind: coined}
    - form: falvizon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "an orphan"
      concept: orphan
      source: {kind: coined}
    - form: elzkambetha
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a widow"
      concept: widow
      source: {kind: coined}
      built: ["elz-", kambetha]
    - form: pelmathen
      class: v
      field: "Doing, going and being"
      gloss: "to think"
      concept: think
      source: {kind: coined}
    - form: ralvathen
      class: v
      field: "Doing, going and being"
      gloss: "to run"
      concept: run
      source: {kind: coined}
    - form: nalithen
      class: v
      field: "Doing, going and being"
      gloss: "to lie down"
      concept: lie-down
      source: {kind: coined}
    - form: amrethen
      class: v
      field: "Doing, going and being"
      gloss: "to bring"
      concept: bring
      source: {kind: coined}
    - form: halvethen
      class: v
      field: "Doing, going and being"
      gloss: "to find"
      concept: find
      source: {kind: coined}
    - form: anhalvethen
      class: v
      field: "Doing, going and being"
      gloss: "to lose"
      concept: lose
      source: {kind: coined}
      built: ["an-", halvethen]
    - form: holimathen
      class: v
      field: "Doing, going and being"
      gloss: "to begin"
      concept: begin
      source: {kind: coined}
    - form: orthemathen
      class: v
      field: "Doing, going and being"
      gloss: "to end"
      concept: end
      source: {kind: coined}
    - form: zandira
      class: n f
      field: "The city: stone, water and the street"
      gloss: "a lamp; an ordinary lamp of oil or tallow"
      concept: lamp
      source: {kind: coined}
    - form: kormeros
      class: n m
      field: "The city: stone, water and the street"
      gloss: "a wall; a house wall or a garden wall"
      concept: wall
      source: {kind: coined}
    - form: "silkathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to look; to direct the eyes at something"
      source: {"kind": "coined"}
      concept: "look"
    - form: "silkarethen"
      class: "v"
      field: "The body, life and death"
      gloss: "to watch; to observe attentively"
      source: {"kind": "coined"}
      concept: "watch"
    - form: "okelos"
      class: "adj"
      field: "The body, life and death"
      gloss: "visible; able to be seen"
      source: {"kind": "coined"}
      concept: "visible"
    - form: "anokelos"
      class: "adj"
      field: "The body, life and death"
      gloss: "invisible; unable to be seen"
      source: {"kind": "coined"}
      concept: "invisible"
    - form: "thavrelathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to listen; to attend to sound"
      source: {"kind": "coined"}
      concept: "listen"
    - form: "klamena"
      class: "n f"
      field: "The body, life and death"
      gloss: "noise; a disturbing or indistinct sound"
      source: {"kind": "coined"}
      concept: "noise"
    - form: "dokela"
      class: "n f"
      field: "The body, life and death"
      gloss: "a voice; the sound made by a speaker"
      source: {"kind": "coined"}
      concept: "voice"
    - form: "ar thavandon"
      class: "n n"
      field: "The body, life and death"
      gloss: "silence; no sound Usage: ar, not, before the noun thavandon; verbless negation."
      source: {"kind": "coined"}
      note: "ar, not, before the noun thavandon; verbless negation."
      concept: "silence"
    - form: "klamos"
      class: "adj"
      field: "The body, life and death"
      gloss: "loud; of great sound volume"
      source: {"kind": "coined"}
      concept: "loud"
    - form: "anklamos"
      class: "adj"
      field: "The body, life and death"
      gloss: "quiet; making little noise"
      source: {"kind": "coined"}
      concept: "quiet"
    - form: "daya nelthis kerandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "fragrant; having a pleasant smell Usage: daya agrees with feminine nelthis, scent; kerandar, having, is the participle of kerathen."
      source: {"kind": "coined"}
      note: "daya agrees with feminine nelthis, scent; kerandar, having, is the participle of kerathen."
      concept: "fragrant"
    - form: "koretha nelthis kerandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "foul-smelling; having an unpleasant smell Usage: koretha, bad (feminine), with nelthis, scent, and kerandar, having."
      source: {"kind": "coined"}
      note: "koretha, bad (feminine), with nelthis, scent, and kerandar, having."
      concept: "foul"
    - form: "melzos"
      class: "adj"
      field: "The body, life and death"
      gloss: "sweet in taste"
      source: {"kind": "coined"}
      concept: "sweet"
    - form: "tarzos"
      class: "adj"
      field: "The body, life and death"
      gloss: "sour; acidic in taste"
      source: {"kind": "coined"}
      concept: "sour"
    - form: "grelos"
      class: "adj"
      field: "The body, life and death"
      gloss: "bitter in taste"
      source: {"kind": "coined"}
      concept: "bitter"
    - form: "thremuzen"
      class: "adj"
      field: "The body, life and death"
      gloss: "salty; tasting of salt"
      source: {"kind": "coined"}
      note: "Lexical material adjective beside thremuzis, salt; not an expansion of the place-and-people suffix rule."
      concept: "salty"
    - form: "zarvethen"
      class: "v"
      field: "The body, life and death"
      gloss: "to feel a bodily sensation"
      source: {"kind": "coined"}
      note: "Related to unlike tolvathen, touch with the hand, it includes inner bodily sensations."
      concept: "feel-verb"
    - form: "zarvandon"
      class: "n n"
      field: "The body, life and death"
      gloss: "a sensation; an instance of bodily feeling"
      source: {"kind": "coined"}
      concept: "sensation"
    - form: "grathos"
      class: "adj"
      field: "The body, life and death"
      gloss: "rough to the touch"
      source: {"kind": "coined"}
      concept: "rough"
    - form: "lomeros"
      class: "adj"
      field: "The body, life and death"
      gloss: "soft to the touch"
      source: {"kind": "coined"}
      concept: "soft"
    - form: "kornelos"
      class: "adj"
      field: "The body, life and death"
      gloss: "hard to the touch; firm"
      source: {"kind": "coined"}
      note: "Related to does not mean difficult."
      concept: "hard-texture"
    - form: "okzedathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to notice; to become aware of something"
      source: {"kind": "coined"}
      note: "Independent lexical coinage beside okethen, see, and kezdathen, know; not a productive sound-changing compound."
      concept: "notice"
    - form: "zarvokethen"
      class: "v"
      field: "The body, life and death"
      gloss: "to perceive; to apprehend through the senses"
      source: {"kind": "coined"}
      concept: "perceive"
    - form: "memrokethen"
      class: "v"
      field: "The body, life and death"
      gloss: "to recognize; to identify as previously known"
      source: {"kind": "coined"}
      concept: "recognize"
    - form: "okandon daimathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to seem; to give an appearance Usage: okandon, appearance, object of daimathen, give; the apparent quality can follow ol in the noun phrase."
      source: {"kind": "coined"}
      note: "okandon, appearance, object of daimathen, give; the apparent quality can follow ol in the noun phrase."
      concept: "seem"
    - form: "yaleza"
      class: "n f"
      field: "Qualities"
      gloss: "joy; happiness"
      source: {"kind": "coined"}
      concept: ["joy", "happiness"]
    - form: "zelvira"
      class: "n f"
      field: "Qualities"
      gloss: "pleasure; enjoyment of an experience"
      source: {"kind": "coined"}
      note: "Related to distinct from bodily sensation and fulfilled desire."
      concept: "pleasure"
    - form: "avrethon"
      class: "n n"
      field: "Qualities"
      gloss: "contentment; peaceful satisfaction with what one has"
      source: {"kind": "coined"}
      note: "Related to avethen, want; distinct from desire fulfilled."
      concept: "contentment"
    - form: "memrandon ol orfenon"
      class: "n n"
      field: "Qualities"
      gloss: "gratitude; grateful remembrance of a kindness received Usage: memrandon, remembering, from memrathen and -andon, of orfenon, favor; lexical thankful use."
      source: {"kind": "coined"}
      note: "memrandon, remembering, from memrathen and -andon, of orfenon, favor; lexical thankful use."
      concept: "gratitude"
    - form: "velda ol zenothos"
      class: "n f"
      field: "Qualities"
      gloss: "admiration; the feeling of esteem for someone excellent Usage: Lexical emotional expression: velda, honor, of zenothos, the wise (adjective used as noun); applies also to other admired excellence."
      source: {"kind": "coined"}
      note: "Lexical emotional expression: velda, honor, of zenothos, the wise (adjective used as noun); applies also to other admired excellence."
      concept: "admiration"
    - form: "tharvela"
      class: "n f"
      field: "Qualities"
      gloss: "courage; readiness to act despite fear or danger"
      source: {"kind": "coined"}
      note: "Related to tharkos, strong; courage need not be fearless."
      concept: "courage"
    - form: "kremila"
      class: "n f"
      field: "Qualities"
      gloss: "anger; a feeling of displeasure and hostility"
      source: {"kind": "coined"}
      concept: "anger"
    - form: "zirnon"
      class: "n n"
      field: "Qualities"
      gloss: "hatred; enduring hostility toward someone or something"
      source: {"kind": "coined"}
      concept: "hatred"
    - form: "nethorzela"
      class: "n f"
      field: "Qualities"
      gloss: "jealousy; distress at a rival for an affection or bond"
      source: {"kind": "coined"}
      concept: "jealousy"
    - form: "ternandon"
      class: "n n"
      field: "Qualities"
      gloss: "fear; apprehension of danger"
      source: {"kind": "coined"}
      concept: "fear"
    - form: "ternandon solteron"
      class: "n n"
      field: "Qualities"
      gloss: "terror; overwhelming fear Usage: ternandon, fear, with neuter solteron, large."
      source: {"kind": "coined"}
      note: "ternandon, fear, with neuter solteron, large."
      concept: "terror"
    - form: "zelmira"
      class: "n f"
      field: "Qualities"
      gloss: "sadness; sorrow"
      source: {"kind": "coined"}
      concept: "sadness"
    - form: "zelmira ol anhalvandon"
      class: "n f"
      field: "Qualities"
      gloss: "grief; sorrow over a loss Usage: zelmira, sadness, of anhalvandon, losing, from anhalvethen and -andon."
      source: {"kind": "coined"}
      note: "zelmira, sadness, of anhalvandon, losing, from anhalvethen and -andon."
      concept: "grief"
    - form: "vethanvelda"
      class: "n f"
      field: "Qualities"
      gloss: "shame; one's own sense of dishonor"
      source: {"kind": "coined"}
      concept: "shame"
    - form: "vethzamolis"
      class: "n f"
      field: "Qualities"
      gloss: "guilt; the feeling of having done wrong"
      source: {"kind": "coined"}
      note: "veth-, self, and zamolis, guilt in judgment; internal guilt, whether or not a court has judged."
      concept: "guilt"
    - form: "antambeza"
      class: "n f"
      field: "Qualities"
      gloss: "regret; sorrow and a wish that something had been otherwise"
      source: {"kind": "coined"}
      note: "Related to an-, reverse, and tambathen, do; does not imply actual reversal."
      concept: "regret"
    - form: "vethnizela"
      class: "n f"
      field: "Qualities"
      gloss: "humility; a modest view of oneself"
      source: {"kind": "coined"}
      note: "veth-, self, beside nizelos, small; lexical emotion noun."
      concept: "humility"
    - form: "varelon ol dunandon"
      class: "n n"
      field: "Qualities"
      gloss: "confidence; trust in one's ability Usage: varelon, trust, of dunandon, ability, from dunathen and -andon; no assertion of factual truth."
      source: {"kind": "coined"}
      note: "varelon, trust, of dunandon, ability, from dunathen and -andon; no assertion of factual truth."
      concept: "confidence"
    - form: "vethanvelda nizela"
      class: "n f"
      field: "Qualities"
      gloss: "embarrassment; a small, passing feeling of shame Usage: vethanvelda, shame, with feminine nizela, small."
      source: {"kind": "coined"}
      note: "vethanvelda, shame, with feminine nizela, small."
      concept: "embarrassment"
    - form: "lusnethora"
      class: "n f"
      field: "Qualities"
      gloss: "compassion; concern for suffering with a wish to relieve it"
      source: {"kind": "coined"}
      note: "lus-, protect, beside nethora, heart; lexical emotion noun."
      concept: "compassion"
    - form: "zelmira fa alathos"
      class: "n f"
      field: "Qualities"
      gloss: "pity; sorrow for another person's distress Usage: zelmira, sorrow; fa, for; alathos, another person referred to as he; substitute alatha or a name as appropriate."
      source: {"kind": "coined"}
      note: "zelmira, sorrow; fa, for; alathos, another person referred to as he; substitute alatha or a name as appropriate."
      concept: "pity"
    - form: "zelmira kona alathos"
      class: "n f"
      field: "Qualities"
      gloss: "sympathy; sorrow shared with another Usage: zelmira, sorrow, with kona alathos, with him; substitute alatha, her, or a name as appropriate."
      source: {"kind": "coined"}
      note: "zelmira, sorrow, with kona alathos, with him; substitute alatha, her, or a name as appropriate."
      concept: "sympathy"
    - form: "memrandon ol anvelda"
      class: "n n"
      field: "Qualities"
      gloss: "resentment; bitter feeling over remembered dishonor or ill treatment Usage: Lexical emotional expression: memrandon, remembering, of anvelda, dishonor."
      source: {"kind": "coined"}
      note: "Lexical emotional expression: memrandon, remembering, of anvelda, dishonor."
      concept: "resentment"
    - form: "anzirotheza"
      class: "n f"
      field: "Qualities"
      gloss: "contempt; a feeling that someone or something is beneath regard"
      source: {"kind": "coined"}
      note: "an-, reverse, beside zirothos, rank; lexical emotion noun."
      concept: "contempt"
    - form: "anorfenandon"
      class: "n n"
      field: "Qualities"
      gloss: "forgiveness; release from a wrong or debt"
      source: {"kind": "coined"}
      concept: "forgiveness"
    - form: "avandon"
      class: "n n"
      field: "Qualities"
      gloss: "desire; a wish or want"
      source: {"kind": "coined"}
      concept: "desire"
    - form: "avandon teremon"
      class: "n n"
      field: "Qualities"
      gloss: "longing; sustained desire for someone or something absent Usage: avandon, desire, with neuter teremon, long; absence is specified by context."
      source: {"kind": "coined"}
      note: "avandon, desire, with neuter teremon, long; absence is specified by context."
      concept: "longing"
    - form: "avandon tambthon"
      class: "n n"
      field: "Qualities"
      gloss: "satisfaction; a desire fulfilled Usage: avandon, desire, with neuter tambthon, made or accomplished, the neuter -thos participle of tambathen (tamb- plus -thon)."
      source: {"kind": "coined"}
      note: "avandon, desire, with neuter tambthon, made or accomplished, the neuter -thos participle of tambathen (tamb- plus -thon)."
      concept: "satisfaction"
    - form: "avandon ar tambthon"
      class: "n n"
      field: "Qualities"
      gloss: "frustration; distress at a desire left unfulfilled or blocked Usage: Lexical emotional expression: avandon, desire, with negated tambthon, fulfilled; names the feeling, not merely its cause."
      source: {"kind": "coined"}
      note: "Lexical emotional expression: avandon, desire, with negated tambthon, fulfilled; names the feeling, not merely its cause."
      concept: "frustration"
    - form: "avandon ol kezdandon"
      class: "n n"
      field: "Qualities"
      gloss: "curiosity; a desire for knowledge Usage: avandon, desire, of kezdandon, knowledge; a feeling of wanting to know, not knowledge already obtained."
      source: {"kind": "coined"}
      note: "avandon, desire, of kezdandon, knowledge; a feeling of wanting to know, not knowledge already obtained."
      concept: "curiosity"
    - form: "anlambiza"
      class: "n f"
      field: "Qualities"
      gloss: "confusion; inability to make sense of what is encountered"
      source: {"kind": "coined"}
      note: "Related to lambizon, word, and an-, reversal; lexical sense, not a new derivation rule."
      concept: "confusion"
    - form: "tavemvarelon"
      class: "n n"
      field: "Qualities"
      gloss: "doubt; divided belief"
      source: {"kind": "coined"}
      note: "tavem-, two, and varelon, belief; a lexical compound, not a count of two beliefs."
      concept: "doubt"
    - form: "zetimon varelon"
      class: "n n"
      field: "Qualities"
      gloss: "certainty; complete conviction that something is so Usage: zetimon, whole (neuter), and varelon, belief; conviction can be mistaken and is distinct from varelza, truth."
      source: {"kind": "coined"}
      note: "zetimon, whole (neuter), and varelon, belief; conviction can be mistaken and is distinct from varelza, truth."
      concept: "certainty"
    - form: "okretha"
      class: "n f"
      field: "Qualities"
      gloss: "surprise; the feeling caused by an unexpected occurrence"
      source: {"kind": "coined"}
      note: "Related to okethen, see; not the occurrence itself."
      concept: "surprise"
    - form: "avzelma"
      class: "n f"
      field: "Qualities"
      gloss: "boredom; weariness from lack of interest or stimulation"
      source: {"kind": "coined"}
      note: "Related to avethen, want; distinct from peaceful contentment."
      concept: "boredom"
    - form: "lokorva"
      class: "n f"
      field: "Qualities"
      gloss: "anticipation; expectation of something yet to happen"
      source: {"kind": "coined"}
      concept: "anticipation"
    - form: "velda fa ulthas"
      class: "n f"
      field: "Qualities"
      gloss: "reverence; honor offered to the hallowed Usage: velda, honor, for ulthas, the hallowed; may address a god or something held sacred."
      source: {"kind": "coined"}
      note: "velda, honor, for ulthas, the hallowed; may address a god or something held sacred."
      concept: "reverence"
    - form: "ternandon ul velda"
      class: "n n"
      field: "Qualities"
      gloss: "awe; fear mingled with reverent honor Usage: Coordinated nouns ternandon, fear, and velda, honor."
      source: {"kind": "coined"}
      note: "Coordinated nouns ternandon, fear, and velda, honor."
      concept: "awe"
    - form: "nethila"
      class: "n f"
      field: "Ancestors, the house and the name"
      gloss: "affection; fondness or tender regard"
      source: {"kind": "coined"}
      note: "Related to nethoron, romantic love; not restricted to romance."
      concept: "affection"
    - form: "avandon ol konandon"
      class: "n n"
      field: "Ancestors, the house and the name"
      gloss: "attraction; a desire to draw close to another Usage: avandon, desire, of konandon, association or being together."
      source: {"kind": "coined"}
      note: "avandon, desire, of konandon, association or being together."
      concept: "attraction"
    - form: "konandon ol nethora"
      class: "n n"
      field: "Ancestors, the house and the name"
      gloss: "intimacy; closeness of hearts Usage: konandon, association, of nethora, heart; emotional closeness, not necessarily sexual activity."
      source: {"kind": "coined"}
      note: "konandon, association, of nethora, heart; emotional closeness, not necessarily sexual activity."
      concept: "intimacy"
    - form: "zetimon yerpalon"
      class: "n n"
      field: "Ancestors, the house and the name"
      gloss: "devotion; wholehearted commitment Usage: zetimon, whole, with yerpalon, duty; wholehearted dedication, with its object named after fa."
      source: {"kind": "coined"}
      note: "zetimon, whole, with yerpalon, duty; wholehearted dedication, with its object named after fa."
      concept: "devotion"
    - form: "thaurandon ol zaron"
      class: "n n"
      field: "Ancestors, the house and the name"
      gloss: "loyalty; faithful keeping of a bond Usage: thaurandon, keeping, from thaurathen and -andon, of zaron, oath; lexical use includes an understood bond without a formal oath."
      source: {"kind": "coined"}
      note: "thaurandon, keeping, from thaurathen and -andon, of zaron, oath; lexical use includes an understood bond without a formal oath."
      concept: "loyalty"
    - form: "konandon ol holvethos"
      class: "n n"
      field: "Ancestors, the house and the name"
      gloss: "companionship; the company of a companion Usage: konandon, association, from konathen and -andon, of holvethos, companion."
      source: {"kind": "coined"}
      note: "konandon, association, from konathen and -andon, of holvethos, companion."
      concept: "companionship"
    - form: "zirnon kona alathos"
      class: "n n"
      field: "Ancestors, the house and the name"
      gloss: "enmity; hostility between oneself and another Usage: zirnon, hatred or hostility, with kona alathos, with another; adjust the pointing word to the person."
      source: {"kind": "coined"}
      note: "zirnon, hatred or hostility, with kona alathos, with another; adjust the pointing word to the person."
      concept: "enmity"
    - form: "larmisa"
      class: "n f"
      field: "The body, life and death"
      gloss: "the tongue; the organ in the mouth"
      source: {"kind": "coined"}
      concept: "tongue"
    - form: "pratholzon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the forehead; the front of the head above the eyes"
      source: {"kind": "coined"}
      note: "Related to pra, before, and tholkezos, head."
      concept: "forehead"
    - form: "zekrimkolvemos"
      class: "n m"
      field: "The body, life and death"
      gloss: "the jaw; the tooth-bearing bone"
      source: {"kind": "coined"}
      note: "zekrim-, tooth, before kolvemos, bone; modifier-first compound."
      concept: "jaw"
    - form: "kozelon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the chin; the lower front of the face"
      source: {"kind": "coined"}
      concept: "chin"
    - form: "yenthama"
      class: "n f"
      field: "The body, life and death"
      gloss: "a cheek; either side of the face"
      source: {"kind": "coined"}
      concept: "cheek"
    - form: "kozmaron"
      class: "n n"
      field: "The body, life and death"
      gloss: "the throat; the passage behind the mouth"
      source: {"kind": "coined"}
      concept: "throat"
    - form: "pazalon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the stomach; the organ that receives food"
      source: {"kind": "coined"}
      note: "paz-, food, and -alon, the whole or body; lexical anatomical compound."
      concept: "stomach"
    - form: "bulmerziron"
      class: "n n"
      field: "The body, life and death"
      gloss: "the waist; the body's middle above the hips"
      source: {"kind": "coined"}
      concept: "waist"
    - form: "telkemkolvemos"
      class: "n m"
      field: "The body, life and death"
      gloss: "the spine; the backbone"
      source: {"kind": "coined"}
      note: "telkem-, back, before kolvemos, bone."
      concept: "spine"
    - form: "ombelma"
      class: "n f"
      field: "The body, life and death"
      gloss: "a buttock"
      source: {"kind": "coined"}
      concept: "buttock"
    - form: "dekazklinon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the wrist; the joint of the hand"
      source: {"kind": "coined"}
      note: "dekaz-, hand, before klinon, joint."
      concept: "wrist"
    - form: "dekira"
      class: "n f"
      field: "The body, life and death"
      gloss: "the palm; the inner surface of the hand"
      source: {"kind": "coined"}
      concept: "palm"
    - form: "dekis soltera"
      class: "n f"
      field: "The body, life and death"
      gloss: "the thumb; the broad finger Usage: dekis, finger, with feminine soltera, large; the thumb is the substantial opposing digit."
      source: {"kind": "coined"}
      note: "dekis, finger, with feminine soltera, large; the thumb is the substantial opposing digit."
      concept: "thumb"
    - form: "thalmon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the thigh; the upper segment of the leg"
      source: {"kind": "coined"}
      concept: "thigh"
    - form: "valmklinon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the ankle; the joint of the foot"
      source: {"kind": "coined"}
      note: "valm-, foot, before klinon, joint."
      concept: "ankle"
    - form: "valmaron"
      class: "n n"
      field: "The body, life and death"
      gloss: "the heel; the back of the foot"
      source: {"kind": "coined"}
      concept: "heel"
    - form: "valmera"
      class: "n f"
      field: "The body, life and death"
      gloss: "the sole; the underside of the foot"
      source: {"kind": "coined"}
      concept: "sole"
    - form: "kirsela ol valma"
      class: "n f"
      field: "The body, life and death"
      gloss: "a toenail Usage: kirsela, a fingernail or toenail, of valma, foot; the broader noun is retained."
      source: {"kind": "coined"}
      note: "kirsela, a fingernail or toenail, of valma, foot; the broader noun is retained."
      concept: "toenail"
    - form: "thalmeza"
      class: "n f"
      field: "The body, life and death"
      gloss: "a muscle; flesh that contracts to move the body"
      source: {"kind": "coined"}
      concept: "muscle"
    - form: "zulmera"
      class: "n f"
      field: "The body, life and death"
      gloss: "fat; the body's stored fatty tissue"
      source: {"kind": "coined"}
      concept: "fat"
    - form: "zarvela"
      class: "n f"
      field: "The body, life and death"
      gloss: "sweat; moisture exuded by the skin"
      source: {"kind": "coined"}
      note: "Related to not rain or generic water."
      concept: "sweat"
    - form: "silkulmerai"
      class: "n f"
      field: "The body, life and death"
      gloss: "tears; water shed by the eyes"
      source: {"kind": "coined"}
      note: "silk-, eye, before ulmera, water, with ordinary plural -ai."
      concept: "tears"
    - form: "kozulmera"
      class: "n f"
      field: "The body, life and death"
      gloss: "saliva; moisture in the mouth"
      source: {"kind": "coined"}
      note: "koz-, mouth, before ulmera, water."
      concept: "saliva"
    - form: "tholkelon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the brain; the organ within the head"
      source: {"kind": "coined"}
      concept: "brain"
    - form: "zirvalon"
      class: "n n"
      field: "The body, life and death"
      gloss: "a lung; a breathing organ"
      source: {"kind": "coined"}
      note: "zirv-, breathe, and -alon, body or whole; anatomical lexical compound."
      concept: "lung"
    - form: "bruzalon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the liver"
      source: {"kind": "coined"}
      concept: "liver"
    - form: "zilvalon"
      class: "n n"
      field: "The body, life and death"
      gloss: "a kidney; an organ that produces urine"
      source: {"kind": "coined"}
      note: "zilv-, urinate, and -alon, body or whole; anatomical lexical compound."
      concept: "kidney"
    - form: "pazpozera"
      class: "n f"
      field: "The body, life and death"
      gloss: "the intestine; the digestive passage after the stomach"
      source: {"kind": "coined"}
      note: "paz-, food, before pozera, road; lexical anatomical compound."
      concept: "intestine"
    - form: "nurthalar"
      class: "n n"
      field: "The body, life and death"
      gloss: "the genitals; the reproductive organs collectively"
      source: {"kind": "coined"}
      note: "Related to nurizon, child; the form is already plural and not separately inflected."
      concept: "genitals"
    - form: "nurkovra"
      class: "n f"
      field: "The body, life and death"
      gloss: "the womb; the organ in which a child develops"
      source: {"kind": "coined"}
      note: "nur-, child, before kovra, roof; lexical anatomical compound."
      concept: "womb"
    - form: "nurtalon"
      class: "n n"
      field: "The body, life and death"
      gloss: "the penis"
      source: {"kind": "coined"}
      concept: "penis"
    - form: "nurfenza"
      class: "n f"
      field: "The body, life and death"
      gloss: "the vagina; the birth passage"
      source: {"kind": "coined"}
      note: "nur-, child, before fenza, door; lexical anatomical compound."
      concept: "vagina"
    - form: "nurkelon"
      class: "n n"
      field: "The body, life and death"
      gloss: "a testicle"
      source: {"kind": "coined"}
      concept: "testicle"
    - form: "klinon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a joint; a place where two parts bend together"
      source: {"kind": "coined"}
    - form: "pazavandon"
      class: "n n"
      field: "The body, life and death"
      gloss: "hunger; bodily need for food"
      source: {"kind": "coined"}
      concept: "hunger"
    - form: "paza avandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "hungry; wanting food Usage: paza, food, object of avandar, wanting (avethen with -andar)."
      source: {"kind": "coined"}
      note: "paza, food, object of avandar, wanting (avethen with -andar)."
      concept: "hungry"
    - form: "vimavandon"
      class: "n n"
      field: "The body, life and death"
      gloss: "thirst; bodily need for drink"
      source: {"kind": "coined"}
      concept: "thirst"
    - form: "vima avandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "thirsty; wanting a drink Usage: vima, drink, object of avandar, wanting."
      source: {"kind": "coined"}
      note: "vima, drink, object of avandar, wanting."
      concept: "thirsty"
    - form: "ir zirvathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to inhale; to breathe in Usage: ir, inward, before zirvathen, breathe."
      source: {"kind": "coined"}
      note: "ir, inward, before zirvathen, breathe."
      concept: "inhale"
    - form: "fos zirvathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to exhale; to breathe out Usage: fos, out, before zirvathen, breathe."
      source: {"kind": "coined"}
      note: "fos, out, before zirvathen, breathe."
      concept: "exhale"
    - form: "zirvathen ar dunathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to suffocate; to be unable to breathe Usage: zirvathen, breathe, followed by ar dunathen, not be able; the existing ability construction."
      source: {"kind": "coined"}
      note: "zirvathen, breathe, followed by ar dunathen, not be able; the existing ability construction."
      concept: "suffocate"
    - form: "anlothathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to wake; to cease sleeping"
      source: {"kind": "coined"}
      concept: "wake"
    - form: "anlothandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "awake; no longer asleep"
      source: {"kind": "coined"}
      note: "Present participle of anlothathen, wake."
      concept: "awake"
    - form: "lothokandon"
      class: "n n"
      field: "The body, life and death"
      gloss: "a dream; an experience in sleep"
      source: {"kind": "coined"}
      note: "loth-, sleep, before okandon, a sight or appearance."
      concept: "dream"
    - form: "thumera"
      class: "n f"
      field: "The body, life and death"
      gloss: "rest; a pause for bodily recovery"
      source: {"kind": "coined"}
      concept: "rest"
    - form: "thumera avandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "tired; in need of rest Usage: thumera, rest, object of avandar, wanting."
      source: {"kind": "coined"}
      note: "thumera, rest, object of avandar, wanting."
      concept: "tired"
    - form: "zarvelathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to sweat; to exude perspiration"
      source: {"kind": "coined"}
      concept: "sweat-verb"
    - form: "karveza"
      class: "n f"
      field: "The body, life and death"
      gloss: "heat; high temperature"
      source: {"kind": "coined"}
      concept: "heat"
    - form: "nelveza"
      class: "n f"
      field: "The body, life and death"
      gloss: "cold; low temperature"
      source: {"kind": "coined"}
      concept: "cold-noun"
    - form: "karvos"
      class: "adj"
      field: "The body, life and death"
      gloss: "hot; having a high temperature"
      source: {"kind": "coined"}
      concept: "hot"
    - form: "auvos"
      class: "adj"
      field: "The body, life and death"
      gloss: "warm; having a pleasant or moderate heat"
      source: {"kind": "coined"}
      concept: "warm"
    - form: "nizelai nelvos"
      class: "adj"
      field: "The body, life and death"
      gloss: "cool; mildly cold Usage: nizelai, slightly, the regular -ai adverb of nizelos, small, before nelvos, cold; adjust nelvos to agree with its noun."
      source: {"kind": "coined"}
      note: "nizelai, slightly, the regular -ai adverb of nizelos, small, before nelvos, cold; adjust nelvos to agree with its noun."
      concept: "cool"
    - form: "nelvathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to freeze; to become frozen or turn to ice"
      source: {"kind": "coined"}
      concept: "freeze"
    - form: "lusandon"
      class: "n n"
      field: "The body, life and death"
      gloss: "safety; protection from harm"
      source: {"kind": "coined"}
      concept: ["safety", "protection"]
    - form: "rithavon"
      class: "n n"
      field: "The body, life and death"
      gloss: "danger; a risk of harm"
      source: {"kind": "coined"}
      concept: "danger"
    - form: "nurzandon"
      class: "n n"
      field: "The body, life and death"
      gloss: "sex; sexual intercourse"
      source: {"kind": "coined"}
      note: "Related to distinct from romantic love and lust."
      concept: "sex"
    - form: "nurizon holimathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to conceive; to begin a child in the womb Usage: nurizon, child, object of holimathen, begin; reproductive sense."
      source: {"kind": "coined"}
      note: "nurizon, child, object of holimathen, begin; reproductive sense."
      concept: "conceive"
    - form: "kerandon ol nurizon ir nurkovra"
      class: "n n"
      field: "The body, life and death"
      gloss: "pregnancy; the carrying of a child in the womb Usage: kerandon, having or holding, of nurizon, child, with ir nurkovra, in the womb; distinguishes pregnancy from caring for a born child."
      source: {"kind": "coined"}
      note: "kerandon, having or holding, of nurizon, child, with ir nurkovra, in the womb; distinguishes pregnancy from caring for a born child."
      concept: "pregnancy"
    - form: "nurizon ir nurkovra kerandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "pregnant; carrying a child in the womb Usage: nurizon, child, as object, with ir nurkovra, in the womb, before kerandar, having; distinguishes pregnancy from holding a born child in the arms."
      source: {"kind": "coined"}
      note: "nurizon, child, as object, with ir nurkovra, in the womb, before kerandar, having; distinguishes pregnancy from holding a born child in the arms."
      concept: "pregnant"
    - form: "nureza"
      class: "n f"
      field: "The body, life and death"
      gloss: "birth; the coming of a child from the womb"
      source: {"kind": "coined"}
      concept: "birth"
    - form: "nurezathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to give birth"
      source: {"kind": "coined"}
      concept: "give-birth"
    - form: "sulmenathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to nurse a child; to feed a child at the breast"
      source: {"kind": "coined"}
      concept: "nurse"
    - form: "nurethen"
      class: "v"
      field: "The body, life and death"
      gloss: "to grow; to increase in size or maturity"
      source: {"kind": "coined"}
      concept: "grow"
    - form: "ankelathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to age; to grow older"
      source: {"kind": "coined"}
      concept: "age-verb"
    - form: "kolvazos"
      class: "adj"
      field: "The body, life and death"
      gloss: "dead; no longer alive"
      source: {"kind": "coined"}
      concept: "dead"
    - form: "ar kelmeza kerandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "healthy; free of sickness Usage: ar kelmeza, no sickness, with kerandar, having."
      source: {"kind": "coined"}
      note: "ar kelmeza, no sickness, with kerandar, having."
      concept: "healthy"
    - form: "kelmeza kerandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "sick; having an illness Usage: kelmeza, sickness, object of kerandar, having."
      source: {"kind": "coined"}
      note: "kelmeza, sickness, object of kerandar, having."
      concept: "sick"
    - form: "rithezon kerandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "injured; wounded Usage: rithezon, wound, object of kerandar, having."
      source: {"kind": "coined"}
      note: "rithezon, wound, object of kerandar, having."
      concept: "injured"
    - form: "antharkos"
      class: "adj"
      field: "The body, life and death"
      gloss: "weak; lacking strength"
      source: {"kind": "coined"}
      concept: "weak"
    - form: "zetimai thumera avandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "exhausted; wholly in need of rest Usage: zetimai, wholly, regular adverb of zetimos, whole, with thumera avandar, needing rest."
      source: {"kind": "coined"}
      note: "zetimai, wholly, regular adverb of zetimos, whole, with thumera avandar, needing rest."
      concept: "exhausted"
    - form: "pazelos"
      class: "adj"
      field: "The body, life and death"
      gloss: "sated; satisfied after eating or drinking enough"
      source: {"kind": "coined"}
      note: "Related to paza, food; not a past participle meaning eaten."
      concept: "sated"
    - form: "nelvos"
      class: "adj"
      field: "The body, life and death"
      gloss: "cold; having a low temperature"
      source: {"kind": "coined"}
      concept: "cold"
    - form: "kelmeza ol karveza kerandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "feverish; having an illness marked by heat Usage: kelmeza, illness, of karveza, heat; object of kerandar, having."
      source: {"kind": "coined"}
      note: "kelmeza, illness, of karveza, heat; object of kerandar, having."
      concept: "feverish"
    - form: "rithena"
      class: "n f"
      field: "The body, life and death"
      gloss: "pain; bodily suffering"
      source: {"kind": "coined"}
      concept: "pain"
    - form: "rithenathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to hurt someone; to cause pain or injury"
      source: {"kind": "coined"}
      concept: "hurt-verb"
    - form: "rithena zarvethen"
      class: "v"
      field: "The body, life and death"
      gloss: "to ache; to hurt; to experience bodily pain Usage: rithena, pain, object of zarvethen, feel; the sufferer is subject, unlike rithenathen, injure."
      source: {"kind": "coined"}
      note: "rithena, pain, object of zarvethen, feel; the sufferer is subject, unlike rithenathen, injure."
      concept: ["ache", "hurt-pain"]
    - form: "rithena kerathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to suffer; to be in pain or distress Usage: rithena, pain, object of kerathen, have; may be qualified for bodily or emotional distress."
      source: {"kind": "coined"}
      note: "rithena, pain, object of kerathen, have; may be qualified for bodily or emotional distress."
      concept: "suffer"
    - form: "bruzamis linkathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to bleed; to lose blood Usage: bruzamis, blood, object of linkathen, let go."
      source: {"kind": "coined"}
      note: "bruzamis, blood, object of linkathen, let go."
      concept: "bleed"
    - form: "anrithezathen"
      class: "v"
      field: "The body, life and death"
      gloss: "to heal a wound or injury"
      source: {"kind": "coined"}
      note: "Lexical healing verb beside rithezon, wound, and an-, reversal."
      concept: "heal"
    - form: "ankelmethen"
      class: "v"
      field: "The body, life and death"
      gloss: "to recover; to become well again after sickness"
      source: {"kind": "coined"}
      note: "Related to kelmeza, sickness; not an extra tense form."
      concept: "recover"
    - form: "okethen ar dunandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "blind; having a bodily incapacity to see Usage: okethen, see, with ar dunandar, not able, participle of dunathen; lexical bodily impairment phrase, not merely failing to see in darkness or through an obstacle."
      source: {"kind": "coined"}
      note: "okethen, see, with ar dunandar, not able, participle of dunathen; lexical bodily impairment phrase, not merely failing to see in darkness or through an obstacle."
      concept: "blind"
    - form: "thavithen ar dunandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "deaf; having a bodily incapacity to hear Usage: thavithen, hear, with ar dunandar, not able; lexical bodily impairment phrase, not merely an inaudible sound."
      source: {"kind": "coined"}
      note: "thavithen, hear, with ar dunandar, not able; lexical bodily impairment phrase, not merely an inaudible sound."
      concept: "deaf"
    - form: "valmathen ar dunandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "lame; physically impaired in walking Usage: valmathen, walk, with ar dunandar, not able; lexical bodily impairment phrase, including difficulty rather than only complete inability to walk."
      source: {"kind": "coined"}
      note: "valmathen, walk, with ar dunandar, not able; lexical bodily impairment phrase, including difficulty rather than only complete inability to walk."
      concept: "lame"
    - form: "thernandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "alive; living"
      source: {"kind": "coined"}
      note: "Present participle of thernathen, live."
      concept: "alive"
    - form: "zarvandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "conscious; sensing one's surroundings"
      source: {"kind": "coined"}
      note: "Present participle of zarvethen, sense; lexical conscious use."
      concept: "conscious"
    - form: "ar zarvandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "unconscious; not sensing one's surroundings Usage: ar, not, before zarvandar, conscious."
      source: {"kind": "coined"}
      note: "ar, not, before zarvandar, conscious."
      concept: "unconscious"
    - form: "nurizos"
      class: "adj"
      field: "The body, life and death"
      gloss: "young; not yet mature"
      source: {"kind": "coined"}
      concept: "young"
    - form: "ankelandar"
      class: "adj"
      field: "The body, life and death"
      gloss: "aging; growing older"
      source: {"kind": "coined"}
      note: "Present participle of ankelathen, age."
      concept: "aging"
    - form: "holilmaros"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a grandparent"
      source: {"kind": "coined"}
      concept: "grandparent"
    - form: "nurethos ol semrothos"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a nephew; a brother's son Usage: nurethos, son, of semrothos, brother; substitute semrotha for a sister's son."
      source: {"kind": "coined"}
      note: "nurethos, son, of semrothos, brother; substitute semrotha for a sister's son."
      concept: "nephew"
    - form: "nuretha ol semrothos"
      class: "n f"
      field: "Ancestors, the house and the name"
      gloss: "a niece; a brother's daughter Usage: nuretha, daughter, of semrothos, brother; substitute semrotha for a sister's daughter."
      source: {"kind": "coined"}
      note: "nuretha, daughter, of semrothos, brother; substitute semrotha for a sister's daughter."
      concept: "niece"
    - form: "kambethos ves kambetha"
      class: "n"
      field: "Ancestors, the house and the name"
      gloss: "a spouse; a husband or wife Usage: Coordinated nouns with ves, or; either sex is included without calling a free adult neuter."
      source: {"kind": "coined"}
      note: "Coordinated nouns with ves, or; either sex is included without calling a free adult neuter."
      concept: "spouse"
    - form: "kambezathen"
      class: "v"
      field: "Ancestors, the house and the name"
      gloss: "to marry; to enter into marriage"
      source: {"kind": "coined"}
      concept: "marry"
    - form: "sorethis ol zorka"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a family; the kin of a household Usage: sorethis, kin, of zorka, household; excludes unrelated servants from the kin sense."
      source: {"kind": "coined"}
      note: "sorethis, kin, of zorka, household; excludes unrelated servants from the kin sense."
      concept: "family"
    - form: "elzkambethos"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a widower"
      source: {"kind": "coined"}
      concept: "widower"
    - form: "holvethos ol holvethon"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a friend; a companion in affection Usage: holvethos, companion, qualified by holvethon, friendship; distinguishes friendship from official companionship."
      source: {"kind": "coined"}
      note: "holvethos, companion, qualified by holvethon, friendship; distinguishes friendship from official companionship."
      concept: "friend"
    - form: "zirnos"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "an enemy; a person hostile to oneself"
      source: {"kind": "coined"}
      concept: "enemy"
    - form: "ankezdos"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a stranger; someone not known to oneself"
      source: {"kind": "coined"}
      concept: "stranger"
    - form: "dumvos"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a neighbor; someone who lives nearby"
      source: {"kind": "coined"}
      concept: "neighbor"
    - form: "solkandar"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a follower; one who follows"
      source: {"kind": "coined"}
      note: "Present participle of solkatora, follow, used as a noun; does not require client status."
      concept: "follower"
    - form: "karezandar"
      class: "n m"
      field: "Ancestors, the house and the name"
      gloss: "a servant; one who attends to another's affairs"
      source: {"kind": "coined"}
      note: "Present participle of karezathen, see to or manage, used as a noun; service need not imply slavery."
      concept: "servant"
    - form: "dumela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a room; an enclosed part of a house"
      source: {"kind": "coined"}
      concept: "room"
    - form: "kovra ol dumela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a ceiling; the overhead surface of a room Usage: kovra, roof, of dumela, room; distinguishes the interior ceiling from the outer roof."
      source: {"kind": "coined"}
      note: "kovra, roof, of dumela, room; distinguishes the interior ceiling from the outer roof."
      concept: "ceiling"
    - form: "tolkemon ol kerandon"
      class: "n n"
      field: "The city: stone, water and the street"
      gloss: "a jar; a pot for holding or storing things Usage: tolkemon, pot, of kerandon, holding or having; a storage vessel rather than a cooking pot."
      source: {"kind": "coined"}
      note: "tolkemon, pot, of kerandon, holding or having; a storage vessel rather than a cooking pot."
      concept: "jar"
    - form: "kolzolkemon"
      class: "n n"
      field: "The city: stone, water and the street"
      gloss: "a bottle; a vessel with a neck"
      source: {"kind": "coined"}
      note: "Independent lexical coinage beside kolzeros, neck, and tolkemon, pot; not a contraction rule."
      concept: "bottle"
    - form: "zundolkis"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a basket; a woven container for carrying"
      source: {"kind": "coined"}
      concept: "basket"
    - form: "loztholbon"
      class: "n n"
      field: "The city: stone, water and the street"
      gloss: "a bag; a carrying container made from cloth"
      source: {"kind": "coined"}
      note: "loz-, carry, before tholbon, cloth; lexical carrying-cloth compound."
      concept: "bag"
    - form: "funela soltera"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a rope; a thick cord Usage: funela, cord, with feminine soltera, large."
      source: {"kind": "coined"}
      note: "funela, cord, with feminine soltera, large."
      concept: "rope"
    - form: "tholkis"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a needle; a pointed tool for sewing"
      source: {"kind": "coined"}
      concept: "needle"
    - form: "karvila"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a flame; the visible tongue of a fire"
      source: {"kind": "coined"}
      concept: "flame"
    - form: "karvuma"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "smoke; airborne products of burning"
      source: {"kind": "coined"}
      concept: "smoke"
    - form: "karlon"
      class: "n n"
      field: "The city: stone, water and the street"
      gloss: "coal; black mineral fuel or charcoal"
      source: {"kind": "coined"}
      concept: "coal"
    - form: "karvothos"
      class: "n m"
      field: "The city: stone, water and the street"
      gloss: "a torch; a burning stick carried for light"
      source: {"kind": "coined"}
      concept: "torch"
    - form: "karvizon"
      class: "n n"
      field: "The city: stone, water and the street"
      gloss: "a candle; a wick set in wax or tallow"
      source: {"kind": "coined"}
      concept: "candle"
    - form: "vemra"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a garment; an article of clothing"
      source: {"kind": "coined"}
      note: "Singular corresponding to the existing plural vemrai, clothes."
      concept: "garment"
    - form: "tholvela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a shirt; a garment for the torso"
      source: {"kind": "coined"}
      concept: "shirt"
    - form: "zalpfunela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a belt; a fastening worn around the waist or hips"
      source: {"kind": "coined"}
      note: "zalp-, hip, before funela, cord; lexical clothing compound."
      concept: "belt"
    - form: "valmkovra"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a shoe; a covering for the foot"
      source: {"kind": "coined"}
      note: "valm-, foot, before kovra, roof; lexical footwear compound."
      concept: "shoe"
    - form: "valmkovra terema"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a boot; a long shoe extending up the leg Usage: valmkovra, shoe, with feminine terema, long."
      source: {"kind": "coined"}
      note: "valmkovra, shoe, with feminine terema, long."
      concept: "boot"
    - form: "tigzundela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "a barrier; something that prevents passage"
      source: {"kind": "coined"}
      note: "tig-, go, before zundela, lock; lexical obstruction compound."
      concept: "barrier"
    - form: "kaldera"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "wood; the material of trees"
      source: {"kind": "coined"}
      concept: "wood"
    - form: "talon"
      class: "n n"
      field: "The city: stone, water and the street"
      gloss: "stone; a rock; a piece of stone"
      source: {"kind": "coined"}
      note: "New ordinary material noun beside talothos, standing stone; not restricted to worked boundary stones."
      concept: ["stone", "rock"]
    - form: "zarela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "metal; any metallic material"
      source: {"kind": "coined"}
      note: "Related to zargon, iron; not limited to iron."
      concept: "metal"
    - form: "paltheza"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "clay; earth that can be shaped and fired"
      source: {"kind": "coined"}
      concept: "clay"
    - form: "lethrethos"
      class: "n n"
      field: "The city: stone, water and the street"
      gloss: "leather; hide cured for use"
      source: {"kind": "coined"}
      note: "Related to lethrima, skin or hide; not simply a stored skin."
      concept: "leather"
    - form: "kedrela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "wool; the fleece of a sheep"
      source: {"kind": "coined"}
      concept: "wool"
    - form: "funela nizela"
      class: "n f"
      field: "The city: stone, water and the street"
      gloss: "thread; a fine cord for sewing Usage: funela, cord, with feminine nizela, small."
      source: {"kind": "coined"}
      note: "funela, cord, with feminine nizela, small."
      concept: "thread"
    - form: "yoreza"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "earth; soil; the ground's loose surface material"
      source: {"kind": "coined"}
      concept: ["earth", "soil"]
    - form: "yoreza ol salkon"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "sand; the loose grains of a shore Usage: yoreza, soil, of salkon, shore; also used for sand away from a shore."
      source: {"kind": "coined"}
      note: "yoreza, soil, of salkon, shore; also used for sand away from a shore."
      concept: "sand"
    - form: "yoreza ul ulmera"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "mud; earth mixed with water Usage: Coordinated yoreza, soil, and ulmera, water; conventional material expression."
      source: {"kind": "coined"}
      note: "Coordinated yoreza, soil, and ulmera, water; conventional material expression."
      concept: "mud"
    - form: "yormela"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "dust; fine dry particles of earth or other material"
      source: {"kind": "coined"}
      concept: "dust"
    - form: "yormalis levra"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "a plain; flat open land Usage: yormalis, land, with feminine levra, smooth; geographical use, whether owned or not."
      source: {"kind": "coined"}
      note: "yormalis, land, with feminine levra, smooth; geographical use, whether owned or not."
      concept: "plain-landform"
    - form: "talondumela"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "a cave; a chamber within rock"
      source: {"kind": "coined"}
      note: "talon-, stone, before dumela, room; lexical compound."
      concept: "cave"
    - form: "siretha nizela"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "a stream; a small watercourse Usage: siretha, river, with feminine nizela, small."
      source: {"kind": "coined"}
      note: "siretha, river, with feminine nizela, small."
      concept: "stream"
    - form: "nelvon"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "ice; frozen water"
      source: {"kind": "coined"}
      concept: "ice"
    - form: "iltheralon"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "the sky; the expanse above the earth"
      source: {"kind": "coined"}
      note: "ilther-, star, with -alon, whole; lexical sky noun."
      concept: "sky"
    - form: "huradon"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "a cloud; a mass of water in the sky"
      source: {"kind": "coined"}
      concept: "cloud"
    - form: "brazkiramon"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "lightning; a flash in a storm"
      source: {"kind": "coined"}
      note: "braz-, storm, beside kiramos, bright; lexical compound."
      concept: "lightning"
    - form: "nurelon"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "a plant; a rooted growing thing"
      source: {"kind": "coined"}
      concept: "plant"
    - form: "kalderos"
      class: "n m"
      field: "Land, the vine and the river"
      gloss: "a tree; a woody plant"
      source: {"kind": "coined"}
      concept: "tree"
    - form: "kaldrima"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "a leaf"
      source: {"kind": "coined"}
      concept: "leaf"
    - form: "nurzela"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "a root; the part anchoring a plant and taking in water"
      source: {"kind": "coined"}
      concept: "root"
    - form: "lamothos ol kalderos"
      class: "n m"
      field: "Land, the vine and the river"
      gloss: "a branch; a limb of a tree Usage: lamothos, arm, of kalderos, tree; conventional botanical extension."
      source: {"kind": "coined"}
      note: "lamothos, arm, of kalderos, tree; conventional botanical extension."
      concept: "branch"
    - form: "nurpaza"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "fruit; a plant's fleshy seed-bearing produce"
      source: {"kind": "coined"}
      note: "nur-, grow, before paza, food; lexical plant noun."
      concept: "fruit"
    - form: "kelborizon"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "a seed; the small body from which a plant grows"
      source: {"kind": "coined"}
      concept: "seed"
    - form: "poltheza"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "grass; low plants with narrow blades"
      source: {"kind": "coined"}
      concept: "grass"
    - form: "thernon"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "an animal; a beast"
      source: {"kind": "coined"}
      concept: ["animal", "beast"]
    - form: "orven"
      class: "n m"
      field: "Land, the vine and the river"
      gloss: "a bird; a feathered animal"
      source: {"kind": "coined"}
      concept: "bird"
    - form: "zelkis"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "an insect; a small six-legged creature"
      source: {"kind": "coined"}
      concept: "insect"
    - form: "yormis"
      class: "n f"
      field: "Land, the vine and the river"
      gloss: "a worm; a long soft animal without legs"
      source: {"kind": "coined"}
      concept: "worm"
    - form: "ulmera kerandar"
      class: "adj"
      field: "Land, the vine and the river"
      gloss: "wet; having water on or in it Usage: ulmera, water, object of kerandar, having."
      source: {"kind": "coined"}
      note: "ulmera, water, object of kerandar, having."
      concept: "wet"
    - form: "ar ulmera kerandar"
      class: "adj"
      field: "Land, the vine and the river"
      gloss: "dry; having no water or moisture Usage: ar ulmera, no water, object of kerandar, having."
      source: {"kind": "coined"}
      note: "ar ulmera, no water, object of kerandar, having."
      concept: "dry"
    - form: "ar huradon kerandar"
      class: "adj"
      field: "Land, the vine and the river"
      gloss: "clear; having no clouds, said of weather Usage: ar huradon, no cloud, object of kerandar, having; weather predicate rather than material transparency."
      source: {"kind": "coined"}
      note: "ar huradon, no cloud, object of kerandar, having; weather predicate rather than material transparency."
      concept: "clear-weather"
    - form: "huradon kerandar"
      class: "adj"
      field: "Land, the vine and the river"
      gloss: "cloudy; having clouds Usage: huradon, cloud, object of kerandar, having."
      source: {"kind": "coined"}
      note: "huradon, cloud, object of kerandar, having."
      concept: "cloudy"
    - form: "aistron"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "the north; the northern direction"
      source: {"kind": "coined"}
      concept: "north"
    - form: "zeltron"
      class: "n n"
      field: "Land, the vine and the river"
      gloss: "the south; the direction opposite north"
      source: {"kind": "coined"}
      concept: "south"
    - form: "urzkorvathis"
      class: "n m"
      field: "Land, the vine and the river"
      gloss: "the east; the direction of the rising sun"
      source: {"kind": "coined"}
      note: "urz-, rise, before korvathis, sun; lexical direction compound."
      concept: "east"
    - form: "nembkorvathis"
      class: "n m"
      field: "Land, the vine and the river"
      gloss: "the west; the direction of the setting sun"
      source: {"kind": "coined"}
      note: "nemb-, fall, before korvathis, sun; lexical direction compound."
      concept: "west"
    - form: "arzon"
      class: "num"
      field: "Numbers and grammar words"
      gloss: "zero; no units in a count"
      source: {"kind": "coined"}
      concept: "zero"
    - form: "ranethoros"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "seventh; an ordinal made from ranethur"
      source: {"kind": "coined"}
      note: "ranethur, seven, with the documented ordinal -oros replacing its ending; the same construction supplies later ordinals."
      concept: "ordinal-construction"
    - form: "soltha ol soltha"
      class: "n f"
      field: "Numbers and grammar words"
      gloss: "a quarter; half of a half Usage: soltha, half, of soltha, half."
      source: {"kind": "coined"}
      note: "soltha, half, of soltha, half."
      concept: "quarter"
    - form: "ethris"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "some; an unspecified nonzero quantity or number"
      source: {"kind": "coined"}
      concept: "some"
    - form: "sathos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "enough; sufficient for the purpose"
      source: {"kind": "coined"}
      concept: "enough"
    - form: "zolmimmos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "most; the greatest number or amount"
      source: {"kind": "coined"}
      note: "zolmos, many or much, with the documented superlative -immos."
      concept: "most"
    - form: "ithrimmos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "least; the smallest number or amount"
      source: {"kind": "coined"}
      note: "ithros, few or little, with the documented superlative -immos."
      concept: "least"
    - form: "rozelos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "equal; having the same amount, measure or standing"
      source: {"kind": "coined"}
      concept: "equal"
    - form: "urzelos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "each; every one considered separately"
      source: {"kind": "coined"}
      concept: "each"
    - form: "tavemer zetimos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "both; all two Usage: tavemer, two, with zetimos, all; use agreement appropriate to the counted noun."
      source: {"kind": "coined"}
      note: "tavemer, two, with zetimos, all; use agreement appropriate to the counted noun."
      concept: "both"
    - form: "urkis ol tavemer"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "either one; one of two Usage: urkis, one, of tavemer, two; choice is open between the pair."
      source: {"kind": "coined"}
      note: "urkis, one, of tavemer, two; choice is open between the pair."
      concept: "either"
    - form: "ar urkis ol tavemer"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "neither one; not one of two Usage: ar, not, before urkis ol tavemer, one of two."
      source: {"kind": "coined"}
      note: "ar, not, before urkis ol tavemer, one of two."
      concept: "neither"
    - form: "rozethi"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "about; approximately in number or measure"
      source: {"kind": "coined"}
      note: "New counting adverb beside rozimathen, reckon."
      concept: "about"
    - form: "prenai"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "almost; just short of the relevant point or degree"
      source: {"kind": "coined"}
      note: "Related to pra, before."
      concept: "almost"
    - form: "zethai"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "exactly; with no difference or approximation"
      source: {"kind": "coined"}
      note: "Related to zetimos, whole."
      concept: "exactly"
    - form: "rozon"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "a number; a count of units"
      source: {"kind": "coined"}
      concept: "number"
    - form: "zolmon"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "an amount; a quantity"
      source: {"kind": "coined"}
      concept: "amount"
    - form: "thradinathen"
      class: "v"
      field: "Numbers and grammar words"
      gloss: "to measure; to determine an extent or quantity"
      source: {"kind": "coined"}
      concept: "measure-verb"
    - form: "ilthelos"
      class: "adj"
      field: "Qualities"
      gloss: "light in colour; pale"
      source: {"kind": "coined"}
      concept: ["light-colour", "pale"]
    - form: "silkros"
      class: "adj"
      field: "Qualities"
      gloss: "clear; transparent; allowing objects behind it to be seen"
      source: {"kind": "coined"}
      note: "Related to silkimos, eye; not clear weather."
      concept: ["clear-appearance", "transparent"]
    - form: "ansilkros"
      class: "adj"
      field: "Qualities"
      gloss: "opaque; not transparent"
      source: {"kind": "coined"}
      concept: "opaque"
    - form: "ankrelos"
      class: "adj"
      field: "Qualities"
      gloss: "shiny; reflecting light from its surface"
      source: {"kind": "coined"}
      concept: "shiny"
    - form: "anankrelos"
      class: "adj"
      field: "Qualities"
      gloss: "dull; not shiny"
      source: {"kind": "coined"}
      concept: "dull-appearance"
    - form: "ar thumisa kerandar"
      class: "adj"
      field: "Qualities"
      gloss: "plain; bearing no pattern or decorative marks Usage: ar thumisa, no mark, object of kerandar, having."
      source: {"kind": "coined"}
      note: "ar thumisa, no mark, object of kerandar, having."
      concept: "plain-pattern"
    - form: "thumiselos"
      class: "adj"
      field: "Qualities"
      gloss: "spotted; patterned with spots"
      source: {"kind": "coined"}
      concept: "spotted"
    - form: "funelen"
      class: "adj"
      field: "Qualities"
      gloss: "striped; patterned with long bands"
      source: {"kind": "coined"}
      note: "Related to funela, cord or line."
      concept: "striped"
    - form: "ol alathos yarethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to belong to someone; to be his Usage: ol alathos, of him, with yarethen, be; replace alathos with the possessor or the proper pointing form."
      source: {"kind": "coined"}
      note: "ol alathos, of him, with yarethen, be; replace alathos with the possessor or the proper pointing form."
      concept: "belong"
    - form: "pelzathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to become; to enter a state"
      source: {"kind": "coined"}
      concept: "become"
    - form: "dorathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to remain; to continue in a place or state"
      source: {"kind": "coined"}
      concept: ["remain", "continue"]
    - form: "fir sedon lokathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to arrive; to come to a destination Usage: fir, to, with sedon, place, before lokathen, come; replace sedon with the destination, as fir dumva lokathen, arrive at the house."
      source: {"kind": "coined"}
      note: "fir, to, with sedon, place, before lokathen, come; replace sedon with the destination, as fir dumva lokathen, arrive at the house."
      concept: "arrive"
    - form: "zel valmathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to crawl; to move low along the ground Usage: zel, below or low, with valmathen, walk; lexical movement phrase."
      source: {"kind": "coined"}
      note: "zel, below or low, with valmathen, walk; lexical movement phrase."
      concept: "crawl"
    - form: "urzvalmathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to climb; to move upward on a surface"
      source: {"kind": "coined"}
      note: "urz-, rise, before valmathen, walk; lexical compound verb."
      concept: "climb"
    - form: "urzralvathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to jump; to spring upward"
      source: {"kind": "coined"}
      note: "urz-, rise, before ralvathen, run; lexical compound verb."
      concept: "jump"
    - form: "ir tigathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to enter; to go in Usage: ir, in or into, with tigathen, go."
      source: {"kind": "coined"}
      note: "ir, in or into, with tigathen, go."
      concept: "enter"
    - form: "fos tigathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to exit; to go out Usage: fos, out, with tigathen, go."
      source: {"kind": "coined"}
      note: "fos, out, with tigathen, go."
      concept: "exit"
    - form: "antigathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to return; to go back"
      source: {"kind": "coined"}
      concept: "return"
    - form: "sedathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to move; to change place"
      source: {"kind": "coined"}
      concept: "move"
    - form: "prendathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to push; to exert force away from oneself"
      source: {"kind": "coined"}
      concept: "push"
    - form: "zundethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to pull; to draw toward oneself"
      source: {"kind": "coined"}
      concept: "pull"
    - form: "us lozethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to lift; to carry upward Usage: us, over or up, with lozethen, carry."
      source: {"kind": "coined"}
      note: "us, over or up, with lozethen, carry."
      concept: "lift"
    - form: "nembandon daimathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to drop; to cause a fall Usage: nembandon, a fall, from nembethen and -andon, object of daimathen, give."
      source: {"kind": "coined"}
      note: "nembandon, a fall, from nembethen and -andon, object of daimathen, give."
      concept: "drop"
    - form: "kurathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to catch; to seize a moving thing"
      source: {"kind": "coined"}
      concept: "catch"
    - form: "kermathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to break; to separate or damage a thing by force"
      source: {"kind": "coined"}
      concept: "break"
    - form: "zetimai kermathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to destroy; to break completely Usage: zetimai, wholly, regular -ai adverb of zetimos, whole, before kermathen, break."
      source: {"kind": "coined"}
      note: "zetimai, wholly, regular -ai adverb of zetimos, whole, before kermathen, break."
      concept: "destroy"
    - form: "ankermathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to repair; to undo damage or breakage"
      source: {"kind": "coined"}
      concept: "repair"
    - form: "pelzethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to change; to alter something"
      source: {"kind": "coined"}
      concept: "change-verb"
    - form: "pethrethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to answer; to respond to a question or request"
      source: {"kind": "coined"}
      concept: "answer"
    - form: "anklamai dokathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to whisper; to speak very quietly Usage: anklamai, quietly, regular -ai adverb of anklamos, quiet, with dokathen, speak."
      source: {"kind": "coined"}
      note: "anklamai, quietly, regular -ai adverb of anklamos, quiet, with dokathen, speak."
      concept: "whisper"
    - form: "lambizathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to explain; to make a meaning clear in words"
      source: {"kind": "coined"}
      concept: "explain"
    - form: "harlen daimathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to name; to give a name Usage: harlen, name, object of daimathen, give; an attested construction in the grammar."
      source: {"kind": "coined"}
      note: "harlen, name, object of daimathen, give; an attested construction in the grammar."
      concept: "name-verb"
    - form: "lambirethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to understand; to grasp a meaning or reason"
      source: {"kind": "coined"}
      note: "Related to lambizon, word; not factual knowledge alone."
      concept: "understand"
    - form: "marendathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to learn; to acquire knowledge or skill"
      source: {"kind": "coined"}
      concept: "learn"
    - form: "marendethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to teach; to impart knowledge or skill"
      source: {"kind": "coined"}
      note: "Related to marendos, teacher; distinct from learning."
      concept: "teach"
    - form: "nazdathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to decide; to settle what is to be done"
      source: {"kind": "coined"}
      concept: "decide"
    - form: "vethokethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to imagine; to form an image in one's mind"
      source: {"kind": "coined"}
      note: "veth-, self, beside okethen, see; lexical mental verb."
      concept: "imagine"
    - form: "yerpathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to need; to require something"
      source: {"kind": "coined"}
      concept: "need-verb"
    - form: "avrenathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to intend; to have an act or outcome deliberately in mind"
      source: {"kind": "coined"}
      concept: "intend"
    - form: "tavemkurethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to choose; to take one from alternatives"
      source: {"kind": "coined"}
      note: "tavem-, two, beside kurethen, take; lexical choice verb applicable to more than two options."
      concept: "choose"
    - form: "mazeron avethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to prefer; to want more than another option Usage: mazeron, more, with avethen, want; the preferred object precedes it, alternatives are named with ves, or."
      source: {"kind": "coined"}
      note: "mazeron, more, with avethen, want; the preferred object precedes it, alternatives are named with ves, or."
      concept: "prefer"
    - form: "tarvenathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to try; to attempt an action"
      source: {"kind": "coined"}
      note: "Related to beginning alone does not assert effort."
      concept: "try"
    - form: "sekerathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to search; to look for something"
      source: {"kind": "coined"}
      concept: "search"
    - form: "konathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to meet; to come together; to associate"
      source: {"kind": "coined"}
      concept: "meet"
    - form: "zumbrathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to help; to assist"
      source: {"kind": "coined"}
      concept: "help"
    - form: "solthathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to share; to divide something among people"
      source: {"kind": "coined"}
      concept: "share"
    - form: "kurelathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to buy; to acquire for a price"
      source: {"kind": "coined"}
      concept: "buy"
    - form: "daimelathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to sell; to give in exchange for a price"
      source: {"kind": "coined"}
      concept: "sell"
    - form: "zarlethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to promise; to undertake to do something"
      source: {"kind": "coined"}
      note: "Related to zarathen, swear; a promise need not invoke an oath."
      concept: "promise-verb"
    - form: "orfenon memrathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to thank; to acknowledge a favor Usage: orfenon, kindness or favor, object of memrathen, remember; lexical grateful acknowledgment."
      source: {"kind": "coined"}
      note: "orfenon, kindness or favor, object of memrathen, remember; lexical grateful acknowledgment."
      concept: "thank-verb"
    - form: "ar avethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to refuse; not to consent to a proposal Usage: ar, not, directly before avethen, want; the rejected proposal or action precedes it."
      source: {"kind": "coined"}
      note: "ar, not, directly before avethen, want; the rejected proposal or action precedes it."
      concept: "refuse-verb"
    - form: "kona alathos varelathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to agree; to share another's belief or judgment Usage: kona alathos, together with him, before varelathen, believe; replace the pointing word with the other party."
      source: {"kind": "coined"}
      note: "kona alathos, together with him, before varelathen, believe; replace the pointing word with the other party."
      concept: "agree-verb"
    - form: "malkethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to hit; to strike"
      source: {"kind": "coined"}
      concept: "hit"
    - form: "kolvathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to kill; to cause death"
      source: {"kind": "coined"}
      note: "Related to kolvazis, death; distinct from kalmethathen, die."
      concept: "kill"
    - form: "kordandon holimathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to attack; to begin a fight against someone Usage: kordandon, fighting, from kordathen and -andon, object of holimathen, begin."
      source: {"kind": "coined"}
      note: "kordandon, fighting, from kordathen and -andon, object of holimathen, begin."
      concept: "attack"
    - form: "fos sedon ol rithavon ralvathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to flee; to run away from danger Usage: fos sedon ol rithavon, out of the place of danger, before ralvathen, run; replace rithavon with a named danger source as appropriate."
      source: {"kind": "coined"}
      note: "fos sedon ol rithavon, out of the place of danger, before ralvathen, run; replace rithavon with a named danger source as appropriate."
      concept: "flee"
    - form: "rithavon vakathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to threaten; to show that harm may follow Usage: rithavon, danger, object of vakathen, show; lexical warning of harm."
      source: {"kind": "coined"}
      note: "rithavon, danger, object of vakathen, show; lexical warning of harm."
      concept: "threaten"
    - form: "sistethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to wait; to remain until an expected time or event"
      source: {"kind": "coined"}
      concept: "wait"
    - form: "tambirethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to happen; to occur"
      source: {"kind": "coined"}
      concept: "happen"
    - form: "zel klinethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to kneel; to bend down onto the knee Usage: zel, down, with klinethen, bend; lexical posture phrase."
      source: {"kind": "coined"}
      note: "zel, down, with klinethen, bend; lexical posture phrase."
      concept: "kneel"
    - form: "kovrathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to cover; to put a covering over something"
      source: {"kind": "coined"}
      concept: "cover-verb"
    - form: "ankovrathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to uncover; to remove a covering"
      source: {"kind": "coined"}
      concept: "uncover"
    - form: "keltherathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to hide; to conceal an object or person from view"
      source: {"kind": "coined"}
      concept: "hide"
    - form: "zundelathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to lock; to fasten with a lock"
      source: {"kind": "coined"}
      note: "Related to zundela, lock; tying alone does not establish locking."
      concept: "lock-verb"
    - form: "anzundelathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to unlock; to release a lock"
      source: {"kind": "coined"}
      concept: "unlock"
    - form: "ir denon sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "here; in this place Usage: ir, in; denon, this (neuter), agrees with sedon, place."
      source: {"kind": "coined"}
      note: "ir, in; denon, this (neuter), agrees with sedon, place."
      concept: "here"
    - form: "ir alathon sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "there; in that place over there Usage: ir, in; alathon, that (neuter), agrees with sedon, place."
      source: {"kind": "coined"}
      note: "ir, in; alathon, that (neuter), agrees with sedon, place."
      concept: "there"
    - form: "ir ethris sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "somewhere; in some place Usage: ir, in; one-form ethris, some; sedon, place."
      source: {"kind": "coined"}
      note: "ir, in; one-form ethris, some; sedon, place."
      concept: "somewhere"
    - form: "ir arurkis sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "nowhere; in no place Usage: ir, in; arurkis, not one; sedon, place."
      source: {"kind": "coined"}
      note: "ir, in; arurkis, not one; sedon, place."
      concept: "nowhere"
    - form: "ir zetimon sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "everywhere; in every place Usage: ir, in; zetimon, every (neuter), agrees with sedon, place."
      source: {"kind": "coined"}
      note: "ir, in; zetimon, every (neuter), agrees with sedon, place."
      concept: "everywhere"
    - form: "denar"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "near; close by"
      source: {"kind": "coined"}
      concept: "near"
    - form: "alathar"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "far; at a great distance"
      source: {"kind": "coined"}
      concept: "far"
    - form: "lan"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "beside; at the side of"
      source: {"kind": "coined"}
      concept: "beside"
    - form: "tavir"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "between; in the intervening space of two things"
      source: {"kind": "coined"}
      concept: "between"
    - form: "zolir"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "among; in the midst of several things or people"
      source: {"kind": "coined"}
      concept: "among"
    - form: "anpra"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "behind; at the back of"
      source: {"kind": "coined"}
      note: "an-, reverse, with pra, in front of; spatial sense."
      concept: "behind"
    - form: "zelvar"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "the left; the left-hand side or direction"
      source: {"kind": "coined"}
      concept: "left-direction"
    - form: "tharvar"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "the right; the right-hand side or direction"
      source: {"kind": "coined"}
      note: "Related to distinct from ethical right and lawful yestharos."
      concept: "right-direction"
    - form: "ziron"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "the center; the middle"
      source: {"kind": "coined"}
      concept: "center"
    - form: "fir sedon thelvaron"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "up; toward a higher place Usage: fir, toward; sedon, place; thelvaron, high, neuter agreement with sedon."
      source: {"kind": "coined"}
      note: "fir, toward; sedon, place; thelvaron, high, neuter agreement with sedon."
      concept: "up"
    - form: "fir sedon zelon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "down; toward a lower place Usage: fir, toward; sedon, place; zelon, low, neuter agreement with sedon."
      source: {"kind": "coined"}
      note: "fir, toward; sedon, place; zelon, low, neuter agreement with sedon."
      concept: "down"
    - form: "fir prasedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "forward; toward the front Usage: fir, toward, with prasedon, the place in front."
      source: {"kind": "coined"}
      note: "fir, toward, with prasedon, the place in front."
      concept: "forward"
    - form: "fir anprasedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "backward; toward the rear Usage: fir, toward, with anprasedon, the place behind."
      source: {"kind": "coined"}
      note: "fir, toward, with anprasedon, the place behind."
      concept: "backward"
    - form: "fir"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "to; toward a destination"
      source: {"kind": "coined"}
      note: "New directional particle; the destination follows it; distinct from fa, for a beneficiary."
      concept: ["toward", "to"]
    - form: "fos denon sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "away; out from this place Usage: fos, out, followed by denon sedon, this place."
      source: {"kind": "coined"}
      note: "fos, out, followed by denon sedon, this place."
      concept: "away"
    - form: "tir"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "through; along the interior of and out of"
      source: {"kind": "coined"}
      concept: "through"
    - form: "tavar"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "across; from one side to the other"
      source: {"kind": "coined"}
      concept: "across"
    - form: "un"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "on; in contact with the upper or supporting surface of"
      source: {"kind": "coined"}
      concept: "on"
    - form: "ir sedon ol dumva"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "at the house; at a named location Usage: ir, in; sedon, place; ol dumva, of the house. Replace dumva with the actual location to express at that place."
      source: {"kind": "coined"}
      note: "ir, in; sedon, place; ol dumva, of the house. Replace dumva with the actual location to express at that place."
      concept: "at"
    - form: "fos sedon ol dumva"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "from the house; from a named source location Usage: fos, out; sedon, place; ol dumva, of the house. Replace dumva with the actual source location."
      source: {"kind": "coined"}
      note: "fos, out; sedon, place; ol dumva, of the house. Replace dumva with the actual source location."
      concept: "from"
    - form: "sedon ol lathon"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "a position; the place occupied by a thing Usage: sedon, place, with ol lathon, of a thing; replace lathon with the positioned object."
      source: {"kind": "coined"}
      note: "sedon, place, with ol lathon, of a thing; replace lathon with the positioned object."
      concept: "position"
    - form: "tigen"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "a direction; a way in which something moves or faces"
      source: {"kind": "coined"}
      concept: "direction"
    - form: "teredon ol sedoi"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "distance; the extent between places Usage: teredon, length or extent, of sedoi, places, plural of sedon."
      source: {"kind": "coined"}
      note: "teredon, length or extent, of sedoi, places, plural of sedon."
      concept: "distance"
    - form: "kanel"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "time; the course or duration of events"
      source: {"kind": "coined"}
      concept: "time"
    - form: "kanizon"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "a moment; a very short span of time"
      source: {"kind": "coined"}
      concept: "moment"
    - form: "nardziron"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "noon; the middle of the day"
      source: {"kind": "coined"}
      note: "nard-, day, before ziron, middle."
      concept: "noon"
    - form: "zunziron"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "midnight; the middle of the night"
      source: {"kind": "coined"}
      note: "zun-, night, before ziron, middle."
      concept: "midnight"
    - form: "denkanai"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "now; at this time"
      source: {"kind": "coined"}
      note: "Related to denos, this, and kanai, then."
      concept: "now"
    - form: "denon nardelon"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "today; on this day Usage: denon, this (neuter), agrees with nardelon, day; temporal noun phrase used adverbially."
      source: {"kind": "coined"}
      note: "denon, this (neuter), agrees with nardelon, day; temporal noun phrase used adverbially."
      concept: "today"
    - form: "pra denon nardelon"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "yesterday; on the day before this one Usage: pra, before, with denon nardelon, this day; lexical calendar expression for the immediately preceding day."
      source: {"kind": "coined"}
      note: "pra, before, with denon nardelon, this day; lexical calendar expression for the immediately preceding day."
      concept: "yesterday"
    - form: "ethor nardelon"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "tomorrow; on the next day Usage: ethor, after, with nardelon, day; lexical calendar expression for the immediately following day."
      source: {"kind": "coined"}
      note: "ethor, after, with nardelon, day; lexical calendar expression for the immediately following day."
      concept: "tomorrow"
    - form: "denon kanel"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "the present; this time Usage: denon, this (neuter), with kanel, time."
      source: {"kind": "coined"}
      note: "denon, this (neuter), with kanel, time."
      concept: "present"
    - form: "pra kanel ol kolsama"
      class: "part"
      field: "Time, the calendar and the festivals"
      gloss: "before the harvest; before a named time or event Usage: pra, before; kanel, time; ol kolsama, of the harvest. Replace kolsama with the relevant event."
      source: {"kind": "coined"}
      note: "pra, before; kanel, time; ol kolsama, of the harvest. Replace kolsama with the relevant event."
      concept: "before-time"
    - form: "ethor"
      class: "part"
      field: "Time, the calendar and the festivals"
      gloss: "after; later than a time or event"
      source: {"kind": "coined"}
      concept: "after"
    - form: "ir kanel ol kolsama"
      class: "part"
      field: "Time, the calendar and the festivals"
      gloss: "during the harvest; within the time of a named event Usage: ir, in; kanel, time; ol kolsama, of the harvest. Replace kolsama with the relevant event."
      source: {"kind": "coined"}
      note: "ir, in; kanel, time; ol kolsama, of the harvest. Replace kolsama with the relevant event."
      concept: "during"
    - form: "fir kanel ol kolsama"
      class: "part"
      field: "Time, the calendar and the festivals"
      gloss: "until the harvest; up to the time of a named event Usage: fir, to; kanel, time; ol kolsama, of the harvest. Replace kolsama with the endpoint event."
      source: {"kind": "coined"}
      note: "fir, to; kanel, time; ol kolsama, of the harvest. Replace kolsama with the endpoint event."
      concept: "until"
    - form: "fos kanel ol kolsama"
      class: "part"
      field: "Time, the calendar and the festivals"
      gloss: "since the harvest; from the time of a named event onward Usage: fos, from; kanel, time; ol kolsama, of the harvest. Replace kolsama with the starting event."
      source: {"kind": "coined"}
      note: "fos, from; kanel, time; ol kolsama, of the harvest. Replace kolsama with the starting event."
      concept: "since-time"
    - form: "ir zetimon kanel"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "always; at every time Usage: ir, in; zetimon, every (neuter), with kanel, time."
      source: {"kind": "coined"}
      note: "ir, in; zetimon, every (neuter), with kanel, time."
      concept: "always"
    - form: "ir zolmoi kaneloi"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "often; on many occasions Usage: ir, in; zolmoi, many (plural), agrees with kaneloi, times."
      source: {"kind": "coined"}
      note: "ir, in; zolmoi, many (plural), agrees with kaneloi, times."
      concept: "often"
    - form: "ir ethris kanel"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "sometimes; at some times Usage: ir, in; ethris, some, with kanel, time."
      source: {"kind": "coined"}
      note: "ir, in; ethris, some, with kanel, time."
      concept: "sometimes"
    - form: "ir ithroi kaneloi"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "rarely; on few occasions Usage: ir, in; ithroi, few (plural), agrees with kaneloi, times."
      source: {"kind": "coined"}
      note: "ir, in; ithroi, few (plural), agrees with kaneloi, times."
      concept: "rarely"
    - form: "ir arurkis kanel"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "never; at no time Usage: ir, in; arurkis, none, with kanel, time."
      source: {"kind": "coined"}
      note: "ir, in; arurkis, none, with kanel, time."
      concept: "never"
    - form: "teremos ol kanel"
      class: "adj"
      field: "Time, the calendar and the festivals"
      gloss: "long in duration Usage: teremos, long, qualified by ol kanel, of time; distinguish length in space."
      source: {"kind": "coined"}
      note: "teremos, long, qualified by ol kanel, of time; distinguish length in space."
      concept: "long-duration"
    - form: "nizelos ol kanel"
      class: "adj"
      field: "Time, the calendar and the festivals"
      gloss: "short; brief in duration Usage: nizelos, small, qualified by ol kanel, of time."
      source: {"kind": "coined"}
      note: "nizelos, small, qualified by ol kanel, of time."
      concept: ["short-duration", "brief-duration"]
    - form: "antigai"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "again; on another occurrence"
      source: {"kind": "coined"}
      note: "New recurrence adverb beside antigathen, return; lexical temporal use."
      concept: ["again", "expression-again"]
    - form: "urkis kanel"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "once; on one occasion Usage: urkis, one, with kanel, occasion or time; no claim that narrated kanai means exactly once."
      source: {"kind": "coined"}
      note: "urkis, one, with kanel, occasion or time; no claim that narrated kanai means exactly once."
      concept: "once"
    - form: "tavemer kaneloi"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "twice; on two occasions Usage: tavemer, two, with plural kaneloi, times."
      source: {"kind": "coined"}
      note: "tavemer, two, with plural kaneloi, times."
      concept: "twice"
    - form: "zolmoi kaneloi"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "repeatedly; on many occasions Usage: zolmoi, many (plural), with kaneloi, times."
      source: {"kind": "coined"}
      note: "zolmoi, many (plural), with kaneloi, times."
      concept: "repeatedly"
    - form: "pra denkanai"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "already; before now Usage: pra, before, with denkanai, now; indicates an event accomplished by now."
      source: {"kind": "coined"}
      note: "pra, before, with denkanai, now; indicates an event accomplished by now."
      concept: "already"
    - form: "doranthi"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "still; enduringly; continuing as before"
      source: {"kind": "coined"}
      note: "Attested regular adverb of dorandar, enduring, by -andar to -anthi."
      concept: "still"
    - form: "fir denkanai"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "yet; up to now Usage: fir, to, with denkanai, now; used with ar for not yet."
      source: {"kind": "coined"}
      note: "fir, to, with denkanai, now; used with ar for not yet."
      concept: "yet"
    - form: "denar kanel"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "soon; at a near time Usage: denar, near (one form), with kanel, time."
      source: {"kind": "coined"}
      note: "denar, near (one form), with kanel, time."
      concept: "soon"
    - form: "ethorai"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "later; next in sequence"
      source: {"kind": "coined"}
      note: "Already attested in Time without tenses; cited as the temporal adverb of ethoros, second."
      concept: ["later", "next"]
    - form: "pra kanel"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "early; before the expected time Usage: pra, before, with kanel, time; the expected time is understood."
      source: {"kind": "coined"}
      note: "pra, before, with kanel, time; the expected time is understood."
      concept: "early"
    - form: "ethor kanel"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "late; after the expected time Usage: ethor, after, with kanel, time; the expected time is understood."
      source: {"kind": "coined"}
      note: "ethor, after, with kanel, time; the expected time is understood."
      concept: "late"
    - form: "holimai"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: ["first; before other events", "especially; first in importance"]
      source: {"kind": "coined"}
      note: "Already attested in the modal example; regular -ai adverb of holimos, first. Attested holimai, first, lexical emphasis sense alongside sequence-first use."
      concept: ["first-sequence", "especially"]
    - form: "orthemai"
      class: "adv"
      field: "Time, the calendar and the festivals"
      gloss: "finally; at the last step"
      source: {"kind": "coined"}
      note: "Regular -ai adverb of orthemos, last."
      concept: "finally"
    - form: "solthen ol tharnela"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "a season; a natural division of the year Usage: solthen, part, of tharnela, year; conventional calendar expression for spring, summer, autumn or winter."
      source: {"kind": "coined"}
      note: "solthen, part, of tharnela, year; conventional calendar expression for spring, summer, autumn or winter."
      concept: "season"
    - form: "urzandon ol korvathis"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "dawn; the rising of the sun Usage: urzandon, rising, of korvathis, sun; lexical dawn-time expression."
      source: {"kind": "coined"}
      note: "urzandon, rising, of korvathis, sun; lexical dawn-time expression."
      concept: "dawn"
    - form: "nembandon ol korvathis"
      class: "n n"
      field: "Time, the calendar and the festivals"
      gloss: "dusk; the falling of the sun Usage: nembandon, falling, of korvathis, sun; lexical time expression for sunset twilight."
      source: {"kind": "coined"}
      note: "nembandon, falling, of korvathis, sun; lexical time expression for sunset twilight."
      concept: "dusk"
    - form: "ol en"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "my; mine Usage: Attested ol, of, with en, I; follows the possessed noun, or stands as a predicate."
      source: {"kind": "coined"}
      note: "Attested ol, of, with en, I; follows the possessed noun, or stands as a predicate."
      concept: "my"
    - form: "ol ko"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "your; yours, of one person Usage: Attested possessive; use ol koroi for plural or formal address."
      source: {"kind": "coined"}
      note: "Attested possessive; use ol koroi for plural or formal address."
      concept: "your"
    - form: "dena"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "she; this woman referred to"
      source: {"kind": "coined"}
      concept: "she"
    - form: "denon"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "it; this thing referred to"
      source: {"kind": "coined"}
      note: "Neuter of denos, this one; do not use of a free adult."
      concept: "it"
    - form: "denoi"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "they; these ones nearby"
      source: {"kind": "coined"}
      note: "Plural masculine or neuter of denos; denai for feminine plural."
      concept: ["they", "these"]
    - form: "ol enoi"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "our; ours Usage: Attested possessive ol with enoi, we; follows the possessed noun."
      source: {"kind": "coined"}
      note: "Attested possessive ol with enoi, we; follows the possessed noun."
      concept: "our"
    - form: "alathoi"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "those ones over there"
      source: {"kind": "coined"}
      note: "Plural masculine or neuter of alathos; alathai for feminine plural."
      concept: "those"
    - form: "ethris verezos"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "someone; some person Usage: ethris, some, with verezos, person; one-form ethris does not inflect."
      source: {"kind": "coined"}
      note: "ethris, some, with verezos, person; one-form ethris does not inflect."
      concept: "someone"
    - form: "verethis"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "anyone; a person, whichever one"
      source: {"kind": "coined"}
      concept: "anyone"
    - form: "zetimoi verezoi"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "everyone; all people Usage: zetimoi, all (plural), agrees with verezoi, people."
      source: {"kind": "coined"}
      note: "zetimoi, all (plural), agrees with verezoi, people."
      concept: "everyone"
    - form: "arurkis verezos"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "no one; not one person Usage: arurkis, none, with verezos, person."
      source: {"kind": "coined"}
      note: "arurkis, none, with verezos, person."
      concept: "no-one"
    - form: "ethris lathon"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "something; an unspecified thing Usage: ethris, some, with lathon, thing."
      source: {"kind": "coined"}
      note: "ethris, some, with lathon, thing."
      concept: "something"
    - form: "lathethis"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "anything; a thing, whichever one"
      source: {"kind": "coined"}
      concept: "anything"
    - form: "zetimoi lathoi"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "everything; all things Usage: zetimoi, all (neuter plural), with lathoi, things."
      source: {"kind": "coined"}
      note: "zetimoi, all (neuter plural), with lathoi, things."
      concept: "everything"
    - form: "alethos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "other; different from the one in question"
      source: {"kind": "coined"}
      concept: ["other", "different"]
    - form: "alethos urkis"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "another; one other Usage: alethos, other, with urkis, one; nominative expression used as a pronoun, with no new case forms."
      source: {"kind": "coined"}
      note: "alethos, other, with urkis, one; nominative expression used as a pronoun, with no new case forms."
      concept: "another"
    - form: "rozelos urkis"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "the same; one and identical Usage: rozelos, equal, with urkis, one; lexical identity expression, not mere equality in value."
      source: {"kind": "coined"}
      note: "rozelos, equal, with urkis, one; lexical identity expression, not mere equality in value."
      concept: "same"
    - form: "eza kedis"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "who?; which person? Usage: eza opens the question; kedis, who, supplies the questioned person."
      source: {"kind": "coined"}
      note: "eza opens the question; kedis, who, supplies the questioned person."
      concept: "question-who"
    - form: "eza kethis"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "what?; which thing or action? Usage: eza opens the question; kethis is a new interrogative pronoun for things, beside kedis, who."
      source: {"kind": "coined"}
      note: "eza opens the question; kethis is a new interrogative pronoun for things, beside kedis, who."
      concept: ["question-what", "expression-what"]
    - form: "eza kethos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "which?; which one of a stated set? Usage: eza opens the question; kethos is a new interrogative adjective beside kedis, who; it agrees like an adjective in -os."
      source: {"kind": "coined"}
      note: "eza opens the question; kethos is a new interrogative adjective beside kedis, who; it agrees like an adjective in -os."
      concept: "question-which"
    - form: "eza ir kethon sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "where?; in which place? Usage: eza, question opener; ir, in; kethon, which, the neuter of kethos, agrees with sedon, place. The location sought can complete an ordinary question clause."
      source: {"kind": "coined"}
      note: "eza, question opener; ir, in; kethon, which, the neuter of kethos, agrees with sedon, place. The location sought can complete an ordinary question clause."
      concept: "question-where"
    - form: "eza kan"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "when?; at what time? Usage: eza, question opener, with kan, when."
      source: {"kind": "coined"}
      note: "eza, question opener, with kan, when."
      concept: "question-when"
    - form: "eza holethi kethis"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "why?; because of what? Usage: eza, question opener; holethi, because; kethis, what."
      source: {"kind": "coined"}
      note: "eza, question opener; holethi, because; kethis, what."
      concept: "question-why"
    - form: "eza sa kethis"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "how?; in what manner? Usage: eza, question opener; sa, as or like; kethis, what."
      source: {"kind": "coined"}
      note: "eza, question opener; sa, as or like; kethis, what."
      concept: "question-how"
    - form: "eza kethon rozon"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "how many?; what number? Usage: eza, question opener; kethon, which (neuter), agrees with rozon, number. Name the counted things with ol, as eza kethon rozon ol ulfoi, how many fish?"
      source: {"kind": "coined"}
      note: "eza, question opener; kethon, which (neuter), agrees with rozon, number. Name the counted things with ol, as eza kethon rozon ol ulfoi, how many fish?"
      concept: "question-how-many"
    - form: "eza kethon zolmon"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "how much?; what amount? Usage: eza, question opener; kethon, which (neuter), agrees with zolmon, amount. Name the measured substance with ol, as eza kethon zolmon ol ulmera, how much water?"
      source: {"kind": "coined"}
      note: "eza, question opener; kethon, which (neuter), agrees with zolmon, amount. Name the measured substance with ol, as eza kethon zolmon ol ulmera, how much water?"
      concept: "question-how-much"
    - form: "eza ol kedis"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "whose?; of whom? Usage: eza, question opener; ol, of; kedis, who."
      source: {"kind": "coined"}
      note: "eza, question opener; ol, of; kedis, who."
      concept: "question-whose"
    - form: "eza fir kedis"
      class: "pron"
      field: "Numbers and grammar words"
      gloss: "to whom? Usage: eza, question opener; fir, to; kedis, who; fa kedis is for whom."
      source: {"kind": "coined"}
      note: "eza, question opener; fir, to; kedis, who; fa kedis is for whom."
      concept: "question-to-whom"
    - form: "eza fos kethon sedon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "from where?; out of which place? Usage: eza, question opener; fos, out of; kethon, which (neuter), agrees with sedon, place."
      source: {"kind": "coined"}
      note: "eza, question opener; fos, out of; kethon, which (neuter), agrees with sedon, place."
      concept: "question-from-where"
    - form: "eza fa kethis"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "for what purpose?; for what end? Usage: eza, question opener; fa, for; kethis, what."
      source: {"kind": "coined"}
      note: "eza, question opener; fa, for; kethis, what."
      concept: "question-for-what-purpose"
    - form: "eza kethis dokazen"
      class: "call"
      field: "Numbers and grammar words"
      gloss: "what do you mean?; what are you saying? Usage: eza, question opener; kethis, what; dokazen, you say, regular singular present of dokathen."
      source: {"kind": "coined"}
      note: "eza, question opener; kethis, what; dokazen, you say, regular singular present of dokathen."
      concept: ["question-clarification", "expression-what-do-you-mean"]
    - form: "varelin yarezor"
      class: "call"
      field: "Numbers and grammar words"
      gloss: "yes; it is true Usage: Attested assertion with varelin, true, and yarezor, it is; used as an affirmative answer."
      source: {"kind": "coined"}
      note: "Attested assertion with varelin, true, and yarezor, it is; used as an affirmative answer."
      concept: "yes"
    - form: "ar yarezor"
      class: "call"
      field: "Numbers and grammar words"
      gloss: "no; it is not so Usage: ar, not, directly before yarezor, it is; negative answer."
      source: {"kind": "coined"}
      note: "ar, not, directly before yarezor, it is; negative answer."
      concept: "no"
    - form: "sethdokandon"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "a lie; a statement made with intent to deceive"
      source: {"kind": "coined"}
      note: "seth-, false, before dokandon, a saying; lexical deceptive-statement compound. Intentional deception is part of this word."
      concept: "lie-noun"
    - form: "varlai yarezor"
      class: "call"
      field: "Numbers and grammar words"
      gloss: "indeed; it truly is so Usage: varlai, truly, with yarezor, it is; a complete emphatic assertion, not a modifying adverb or a question."
      source: {"kind": "coined"}
      note: "varlai, truly, with yarezor, it is; a complete emphatic assertion, not a modifying adverb or a question."
      concept: "indeed"
    - form: "varelmai"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "certainly; with conviction"
      source: {"kind": "coined"}
      note: "Regular -ai adverb of varelmos, certain; conviction does not guarantee truth."
      concept: "certainly"
    - form: "zikarathi"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "probably; more likely than not"
      source: {"kind": "coined"}
      note: "Related to zikai, perhaps; degree of likelihood, not degree of confidence."
      concept: "probably"
    - form: "ar zikarathi"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "unlikely; probably not Usage: ar, not, before zikarathi, probably; negated likelihood claim."
      source: {"kind": "coined"}
      note: "ar, not, before zikarathi, probably; negated likelihood claim."
      concept: "unlikely"
    - form: "varelmos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "certain; convinced that something is so"
      source: {"kind": "coined"}
      note: "Related to varelon, belief; may be mistaken, unlike varelin, true."
      concept: "certain"
    - form: "anvarelmos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "uncertain; not convinced"
      source: {"kind": "coined"}
      concept: "uncertain"
    - form: "sa okandon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "apparently; as it appears Usage: sa, as, with okandon, appearance; does not assert that the appearance is true."
      source: {"kind": "coined"}
      note: "sa, as, with okandon, appearance; does not assert that the appearance is true."
      concept: "apparently"
    - form: "denon vethor varelin yarezor"
      class: "call"
      field: "Numbers and grammar words"
      gloss: "this is true, they say; supposedly this is true Usage: denon, this, is the first reported phrase; invariant vethor, says, follows it inside the report; varelin yarezor, is true, completes it. Name the reporter nearby; substitute the actual reported proposition while keeping vethor after its first word or phrase."
      source: {"kind": "coined"}
      note: "denon, this, is the first reported phrase; invariant vethor, says, follows it inside the report; varelin yarezor, is true, completes it. Name the reporter nearby; substitute the actual reported proposition while keeping vethor after its first word or phrase."
      concept: "supposedly"
    - form: "ir varelza"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "in fact; in truth Usage: ir, in, with varelza, truth; a factual corrective assertion."
      source: {"kind": "coined"}
      note: "ir, in, with varelza, truth; a factual corrective assertion."
      concept: "in-fact"
    - form: "tavemvarelathen"
      class: "v"
      field: "Numbers and grammar words"
      gloss: "to doubt; to be divided in belief"
      source: {"kind": "coined"}
      concept: "doubt-verb"
    - form: "zikai varelathen"
      class: "v"
      field: "Numbers and grammar words"
      gloss: "to suspect; to believe that something may be so Usage: zikai, perhaps, with varelathen, believe; tentative belief."
      source: {"kind": "coined"}
      note: "zikai, perhaps, with varelathen, believe; tentative belief."
      concept: "suspect"
    - form: "ar kezdandar dokathen"
      class: "v"
      field: "Numbers and grammar words"
      gloss: "to guess; to state something without knowing Usage: ar kezdandar, not knowing, participle of kezdathen, with dokathen, say; lexical tentative answer expression."
      source: {"kind": "coined"}
      note: "ar kezdandar, not knowing, participle of kezdathen, with dokathen, say; lexical tentative answer expression."
      concept: "guess-verb"
    - form: "varelon lendathen"
      class: "v"
      field: "Numbers and grammar words"
      gloss: "to assume; to set something down as a belief Usage: varelon, belief, object of lendathen, set; treated as a premise without a claim of proof."
      source: {"kind": "coined"}
      note: "varelon, belief, object of lendathen, set; treated as a premise without a claim of proof."
      concept: "assume-verb"
    - form: "nazdelos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "correct; conforming to the relevant truth or standard"
      source: {"kind": "coined"}
      note: "Related to nazdis, judgment; not ethical right."
      concept: "correct"
    - form: "annazdelos"
      class: "adj"
      field: "Numbers and grammar words"
      gloss: "incorrect; not conforming to the relevant truth or standard"
      source: {"kind": "coined"}
      concept: "incorrect"
    - form: "alethvarelathen"
      class: "v"
      field: "Numbers and grammar words"
      gloss: "to disagree; to hold a different judgment from someone"
      source: {"kind": "coined"}
      note: "Related to alethos, other, and varelathen, believe; the person disagreed with may be named with kona."
      concept: "disagree"
    - form: "sethdokemon"
      class: "n n"
      field: "Numbers and grammar words"
      gloss: "a falsehood; an untrue assertion, whether mistaken or deceptive"
      source: {"kind": "coined"}
      note: "seth-, false, before dokemon, speech; does not imply intent to deceive."
      concept: "falsehood"
    - form: "naren"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "but; introduces a contrast"
      source: {"kind": "coined"}
      concept: "but"
    - form: "ul ar"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "nor; and not Usage: ul, and, with ar, not; ar directly precedes the following negated predicate."
      source: {"kind": "coined"}
      note: "ul, and, with ar, not; ar directly precedes the following negated predicate."
      concept: "nor"
    - form: "fa denon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "therefore; for this reason Usage: fa, for, with denon, this (neuter pointing word); the previous proposition supplies the reason."
      source: {"kind": "coined"}
      note: "fa, for, with denon, this (neuter pointing word); the previous proposition supplies the reason."
      concept: "therefore"
    - form: "zai"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "if; introduces a condition"
      source: {"kind": "coined"}
      concept: "if"
    - form: "zai ar"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "unless; if not Usage: zai, if, with ar, not; ar directly precedes the conditional predicate."
      source: {"kind": "coined"}
      note: "zai, if, with ar, not; ar directly precedes the conditional predicate."
      concept: "unless"
    - form: "zai denon ar yarezor tha tigamen"
      class: "call"
      field: "Numbers and grammar words"
      gloss: "otherwise I go; if this is not so, then I go Usage: zai, if; denon, this; ar yarezor, is not; tha, then; tigamen, I go. The previous proposition supplies this; replace tigamen with the actual consequence."
      source: {"kind": "coined"}
      note: "zai, if; denon, this; ar yarezor, is not; tha, then; tigamen, I go. The previous proposition supplies this; replace tigamen with the actual consequence."
      concept: "otherwise"
    - form: "narthi"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "although; even given that"
      source: {"kind": "coined"}
      concept: "although"
    - form: "narthai"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "however; nevertheless; despite what was just said"
      source: {"kind": "coined"}
      note: "Related to narthi, although."
      concept: ["however", "nevertheless"]
    - form: "narthir"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "despite; in spite of"
      source: {"kind": "coined"}
      concept: "despite"
    - form: "alethai"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "instead; in place of the previously named alternative"
      source: {"kind": "coined"}
      note: "Regular -ai adverb of alethos, other; lexical alternative-selection use."
      concept: "instead"
    - form: "ar sa"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "unlike; not like Usage: ar, not, with sa, like, before the comparison object."
      source: {"kind": "coined"}
      note: "ar, not, with sa, like, before the comparison object."
      concept: "unlike"
    - form: "mazer"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "than; introduces a comparison standard"
      source: {"kind": "coined"}
      concept: "than"
    - form: "ves urkis ves alethos"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "either this or the other Usage: ves, or, before urkis, one, and before alethos, the other (adjective used as noun)."
      source: {"kind": "coined"}
      note: "ves, or, before urkis, one, and before alethos, the other (adjective used as noun)."
      concept: "either-alternative"
    - form: "ar urkis ul ar alethos"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "neither this nor the other Usage: ar, not, before urkis, one, and alethos, other, linked by ul, and."
      source: {"kind": "coined"}
      note: "ar, not, before urkis, one, and alethos, other, linked by ul, and."
      concept: "neither-alternative"
    - form: "ul urkis ul alethos"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "both this and the other Usage: ul, and, before urkis, one, and before alethos, other."
      source: {"kind": "coined"}
      note: "ul, and, before urkis, one, and before alethos, other."
      concept: "both-conjunction"
    - form: "zai lokazor ves ar lokazor"
      class: "conj"
      field: "Numbers and grammar words"
      gloss: "whether he comes or does not come Usage: zai, if; lokazor, he comes; ves, or; ar lokazor, he does not come. Both alternatives are stated. Example: ar kezdamen zai lokazor ves ar lokazor, I do not know whether he comes or not; replace the repeated predicate to ask another open alternative."
      source: {"kind": "coined"}
      note: "zai, if; lokazor, he comes; ves, or; ar lokazor, he does not come. Both alternatives are stated. Example: ar kezdamen zai lokazor ves ar lokazor, I do not know whether he comes or not; replace the repeated predicate to ask another open alternative."
      concept: "whether"
    - form: "denon yarezor"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "that is; this means Usage: denon, this, with yarezor, is; introduces an explanatory restatement."
      source: {"kind": "coined"}
      note: "denon, this, with yarezor, is; introduces an explanatory restatement."
      concept: "that-is"
    - form: "harlen dokathen"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "namely; to say its name Usage: harlen, name, object of dokathen, say; introduces an exact identification."
      source: {"kind": "coined"}
      note: "harlen, name, object of dokathen, say; introduces an exact identification."
      concept: "namely"
    - form: "sa denon"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "for example; as this instance Usage: sa, as, with denon, this; introduces an instance."
      source: {"kind": "coined"}
      note: "sa, as, with denon, this; introduces an instance."
      concept: "for-example"
    - form: "fos denon"
      class: "part"
      field: "Numbers and grammar words"
      gloss: "except this; with this left outside the set Usage: fos, outside, with denon, this; replace denon with the excluded member."
      source: {"kind": "coined"}
      note: "fos, outside, with denon, this; replace denon with the excluded member."
      concept: "except"
    - form: "urthai"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "only; solely; with all alternatives excluded"
      source: {"kind": "coined"}
      note: "Related to urkis, one."
      concept: "only"
    - form: "zethar"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "even; includes an unexpected or extreme instance"
      source: {"kind": "coined"}
      note: "New scalar focus particle used adverbially."
      concept: "even"
    - form: "kona denon"
      class: "adv"
      field: "Numbers and grammar words"
      gloss: "also; together with this Usage: kona, with, and denon, this; adds an item or proposition to the preceding one."
      source: {"kind": "coined"}
      note: "kona, with, and denon, this; adds an item or proposition to the preceding one."
      concept: "also"
    - form: "melvarathi nizelos"
      class: "adj"
      field: "Qualities"
      gloss: "tiny; very small in absolute size Usage: melvarathi, greatly, with nizelos, small; not merely smallest among a set of large objects."
      source: {"kind": "coined"}
      note: "melvarathi, greatly, with nizelos, small; not merely smallest among a set of large objects."
      concept: "tiny"
    - form: "melvarathi solteros"
      class: "adj"
      field: "Qualities"
      gloss: "huge; very large in absolute size Usage: melvarathi, greatly, with solteros, large; not merely largest in a small comparison set."
      source: {"kind": "coined"}
      note: "melvarathi, greatly, with solteros, large; not merely largest in a small comparison set."
      concept: "huge"
    - form: "nizaros"
      class: "adj"
      field: "Qualities"
      gloss: "short in length"
      source: {"kind": "coined"}
      note: "Related to nizelos, small; distinct from short duration."
      concept: "short"
    - form: "thalteros"
      class: "adj"
      field: "Qualities"
      gloss: "tall; of great height"
      source: {"kind": "coined"}
      concept: "tall"
    - form: "dalmos"
      class: "adj"
      field: "Qualities"
      gloss: "wide; broad from side to side"
      source: {"kind": "coined"}
      concept: "wide"
    - form: "andalmos"
      class: "adj"
      field: "Qualities"
      gloss: "narrow; of small width"
      source: {"kind": "coined"}
      concept: "narrow"
    - form: "ansolkimos"
      class: "adj"
      field: "Qualities"
      gloss: "light in weight"
      source: {"kind": "coined"}
      note: "an-, reverse, with solkimos, weighty; does not mean pale in colour."
      concept: "light-weight"
    - form: "ralvos"
      class: "adj"
      field: "Qualities"
      gloss: "fast; moving or happening quickly"
      source: {"kind": "coined"}
      concept: "fast"
    - form: "anralvos"
      class: "adj"
      field: "Qualities"
      gloss: "slow; moving or happening at a low speed"
      source: {"kind": "coined"}
      concept: "slow"
    - form: "dunelos"
      class: "adj"
      field: "Qualities"
      gloss: "easy; requiring little effort"
      source: {"kind": "coined"}
      note: "Related to dunathen, be able; not a claim of permission."
      concept: "easy"
    - form: "andunelos"
      class: "adj"
      field: "Qualities"
      gloss: "difficult; requiring much effort"
      source: {"kind": "coined"}
      note: "an-, reverse, with dunelos, easy; not hard texture."
      concept: "difficult"
    - form: "dayazos"
      class: "adj"
      field: "Qualities"
      gloss: "better; more good"
      source: {"kind": "coined"}
      note: "Documented comparative -azos of dayos, good."
      concept: "better"
    - form: "korethazos"
      class: "adj"
      field: "Qualities"
      gloss: "worse; more bad"
      source: {"kind": "coined"}
      note: "Documented comparative -azos of korethos, bad."
      concept: "worse"
    - form: "korethimmos"
      class: "adj"
      field: "Qualities"
      gloss: "worst; most bad"
      source: {"kind": "coined"}
      note: "Documented superlative -immos of korethos, bad."
      concept: "worst"
    - form: "solkimos ol yerpalon"
      class: "adj"
      field: "Qualities"
      gloss: "important; weighty in what is owed or at stake Usage: solkimos, weighty, qualified by ol yerpalon, of duty; lexical importance phrase."
      source: {"kind": "coined"}
      note: "solkimos, weighty, qualified by ol yerpalon, of duty; lexical importance phrase."
      concept: "important"
    - form: "nizelos ol yerpalon"
      class: "adj"
      field: "Qualities"
      gloss: "trivial; small in consequence or importance Usage: nizelos, small, qualified by ol yerpalon, of duty; lexical importance phrase."
      source: {"kind": "coined"}
      note: "nizelos, small, qualified by ol yerpalon, of duty; lexical importance phrase."
      concept: "trivial"
    - form: "yerpelos"
      class: "adj"
      field: "Qualities"
      gloss: "required; necessary; needed for an act or purpose"
      source: {"kind": "coined"}
      concept: ["necessary", "required"]
    - form: "verdakis soltera kerandar"
      class: "adj"
      field: "Qualities"
      gloss: "valuable; having a high price or worth Usage: verdakis, price or worth, with feminine soltera, large, object of kerandar, having."
      source: {"kind": "coined"}
      note: "verdakis, price or worth, with feminine soltera, large, object of kerandar, having."
      concept: "valuable"
    - form: "ar verdakis kerandar"
      class: "adj"
      field: "Qualities"
      gloss: "worthless; having no worth Usage: ar verdakis, no worth, object of kerandar, having."
      source: {"kind": "coined"}
      note: "ar verdakis, no worth, object of kerandar, having."
      concept: "worthless"
    - form: "zumbrandar"
      class: "adj"
      field: "Qualities"
      gloss: "useful; helping a purpose"
      source: {"kind": "coined"}
      note: "Present participle of zumbrathen, help."
      concept: "useful"
    - form: "ar zumbrandar"
      class: "adj"
      field: "Qualities"
      gloss: "useless; not helping a purpose Usage: ar, not, before zumbrandar, helping."
      source: {"kind": "coined"}
      note: "ar, not, before zumbrandar, helping."
      concept: "useless"
    - form: "kermthos"
      class: "adj"
      field: "Qualities"
      gloss: "broken; damaged by breaking"
      source: {"kind": "coined"}
      note: "Past participle of kermathen, break: kerm- plus -thos; agrees with its noun."
      concept: "broken"
    - form: "anzetimos"
      class: "adj"
      field: "Qualities"
      gloss: "incomplete; not whole"
      source: {"kind": "coined"}
      concept: "incomplete"
    - form: "varelthos"
      class: "adj"
      field: "Qualities"
      gloss: "honest; sincere and truthful in intention"
      source: {"kind": "coined"}
      note: "New ethical adjective beside varelza, truth; sincerity is distinct from never making a factual mistake."
      concept: "honest"
    - form: "anvarelthos"
      class: "adj"
      field: "Qualities"
      gloss: "dishonest; intentionally untruthful"
      source: {"kind": "coined"}
      concept: "dishonest"
    - form: "melvarathi"
      class: "adv"
      field: "Qualities"
      gloss: "very; greatly"
      source: {"kind": "coined"}
      note: "Already attested regular -athi adverb of melvar, great."
      concept: "very"
    - form: "melvarimmai"
      class: "adv"
      field: "Qualities"
      gloss: "extremely; to the greatest degree"
      source: {"kind": "coined"}
      note: "Documented superlative adverb -immai applied to melvar, great."
      concept: "extremely"
    - form: "ethris zolmon"
      class: "adv"
      field: "Qualities"
      gloss: "somewhat; to some extent Usage: ethris, some, with zolmon, amount; a degree phrase."
      source: {"kind": "coined"}
      note: "ethris, some, with zolmon, amount; a degree phrase."
      concept: "somewhat"
    - form: "nizelai"
      class: "adv"
      field: "Qualities"
      gloss: "slightly; to a small degree"
      source: {"kind": "coined"}
      note: "Regular -ai adverb of nizelos, small."
      concept: "slightly"
    - form: "sathai nizelai"
      class: "adv"
      field: "Qualities"
      gloss: "barely; sufficiently by only a small margin Usage: sathai, sufficiently, with nizelai, slightly; names a narrow margin of sufficiency."
      source: {"kind": "coined"}
      note: "sathai, sufficiently, with nizelai, slightly; names a narrow margin of sufficiency."
      concept: "barely"
    - form: "mazeron mazer sathos"
      class: "adv"
      field: "Qualities"
      gloss: "too much; more than enough Usage: mazeron, more; mazer, than; sathos, enough."
      source: {"kind": "coined"}
      note: "mazeron, more; mazer, than; sathos, enough."
      concept: "too-much"
    - form: "nizeron mazer sathos"
      class: "adv"
      field: "Qualities"
      gloss: "too little; less than enough Usage: nizeron, less; mazer, than; sathos, enough."
      source: {"kind": "coined"}
      note: "nizeron, less; mazer, than; sathos, enough."
      concept: "too-little"
    - form: "rozelos sa"
      class: "adj"
      field: "Qualities"
      gloss: "similar; equal in some respect to Usage: rozelos, equal, with sa, like; the compared thing follows sa and the relevant respect comes from context."
      source: {"kind": "coined"}
      note: "rozelos, equal, with sa, like; the compared thing follows sa and the relevant respect comes from context."
      concept: "similar"
    - form: "anrozelos"
      class: "adj"
      field: "Qualities"
      gloss: "opposite; reversed in position, direction or character"
      source: {"kind": "coined"}
      note: "an-, reversal, beside rozelos, equal; lexical adjective distinct from merely different."
      concept: "opposite"
    - form: "ar dunathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to be unable; cannot do an action Usage: ar directly precedes dunathen, be able; put the action's infinitive before this phrase. This denies ability, not permission."
      source: {"kind": "coined"}
      note: "ar directly precedes dunathen, be able; put the action's infinitive before this phrase. This denies ability, not permission."
      concept: "cannot"
    - form: "dunaros"
      class: "adj"
      field: "Doing, going and being"
      gloss: "possible; able to occur"
      source: {"kind": "coined"}
      note: "Related to dunathen, be able; distinct from effort adjective dunelos, easy."
      concept: "possible"
    - form: "andunaros"
      class: "adj"
      field: "Doing, going and being"
      gloss: "impossible; unable to occur"
      source: {"kind": "coined"}
      concept: "impossible"
    - form: "yestharon yarezor"
      class: "v"
      field: "Doing, going and being"
      gloss: "it is lawful; one may act; permission is granted Usage: Attested permission construction; add the permitted action's infinitive. The impersonal neuter yestharon does not assert ability."
      source: {"kind": "coined"}
      note: "Attested permission construction; add the permitted action's infinitive. The impersonal neuter yestharon does not assert ability."
      concept: "may-permission"
    - form: "zikai yarethen"
      class: "v"
      field: "Doing, going and being"
      gloss: "might be; may possibly occur Usage: zikai, perhaps, with yarethen, be; append the event or state in the ordinary predicate position. Does not grant permission."
      source: {"kind": "coined"}
      note: "zikai, perhaps, with yarethen, be; append the event or state in the ordinary predicate position. Does not grant permission."
      concept: "might-possibility"
    - form: "orfenathen ar tambathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "must not do an action; owe nonperformance Usage: Attested obligation construction: orfenathen, owe, with ar, not, directly before the action's infinitive; replace tambathen, do, with that action."
      source: {"kind": "coined"}
      note: "Attested obligation construction: orfenathen, owe, with ar, not, directly before the action's infinitive; replace tambathen, do, with that action."
      concept: "must-not"
    - form: "dayon yarezor tambathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "one ought to do it; doing it is good Usage: dayon, good (neuter), with yarezor, it is, and tambathen, do, naming the recommended act; replace the infinitive for the actual advice."
      source: {"kind": "coined"}
      note: "dayon, good (neuter), with yarezor, it is, and tambathen, do, naming the recommended act; replace the infinitive for the actual advice."
      concept: "ought"
    - form: "ar yerpelos"
      class: "adj"
      field: "Doing, going and being"
      gloss: "optional; not required Usage: ar, not, before yerpelos, required; does not imply forbidden."
      source: {"kind": "coined"}
      note: "ar, not, before yerpelos, required; does not imply forbidden."
      concept: "optional"
    - form: "ar yestharos"
      class: "adj"
      field: "Doing, going and being"
      gloss: "forbidden; not lawful or permitted Usage: ar, not, before yestharos, lawful; agrees with the described action or claim."
      source: {"kind": "coined"}
      note: "ar, not, before yestharos, lawful; agrees with the described action or claim."
      concept: "forbidden"
    - form: "yestharon dokathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to permit; to declare an action lawful Usage: yestharon, lawful (neuter), object of dokathen, say; name the permitted act before this formula."
      source: {"kind": "coined"}
      note: "yestharon, lawful (neuter), object of dokathen, say; name the permitted act before this formula."
      concept: "permit"
    - form: "ar yestharon dokathen"
      class: "v"
      field: "Doing, going and being"
      gloss: "to prohibit; to declare an action not lawful Usage: ar yestharon, not lawful, as the declared content of dokathen, say; the prohibition is directed at a named act."
      source: {"kind": "coined"}
      note: "ar yestharon, not lawful, as the declared content of dokathen, say; the prohibition is directed at a named act."
      concept: "prohibit"
    - form: "anrevothos"
      class: "adj"
      field: "Doing, going and being"
      gloss: "constrained; not free to act"
      source: {"kind": "coined"}
      concept: "constrained"
    - form: "avandar"
      class: "adj"
      field: "Doing, going and being"
      gloss: "willing; wanting to do the proposed act"
      source: {"kind": "coined"}
      note: "Present participle of avethen, want; an action infinitive may specify the act."
      concept: "willing"
    - form: "ar avandar"
      class: "adj"
      field: "Doing, going and being"
      gloss: "unwilling; not wanting to do the proposed act Usage: ar, not, before avandar, wanting."
      source: {"kind": "coined"}
      note: "ar, not, before avandar, wanting."
      concept: "unwilling"
    - form: "avrenos"
      class: "adj"
      field: "Doing, going and being"
      gloss: "intended; deliberately wanted as an outcome or act"
      source: {"kind": "coined"}
      note: "New intention adjective beside avethen, want; deliberateness is part of its lexical meaning."
      concept: "intended"
    - form: "anavrenos"
      class: "adj"
      field: "Doing, going and being"
      gloss: "accidental; unintentional; not deliberately brought about"
      source: {"kind": "coined"}
      note: "an-, reverse, with avrenos, intended; an intended but unwelcome event is not accidental."
      concept: "accidental"
    - form: "dayon nardelon"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "hello; good day Usage: dayon, good (neuter), agrees with nardelon, day; ordinary daytime greeting."
      source: {"kind": "coined"}
      note: "dayon, good (neuter), agrees with nardelon, day; ordinary daytime greeting."
      concept: "hello"
    - form: "voza aithar tigathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "goodbye; go well Usage: voza, command marker; aithar, well, the documented irregular adverb; tigathen, go."
      source: {"kind": "coined"}
      note: "voza, command marker; aithar, well, the documented irregular adverb; tigathen, go."
      concept: "goodbye"
    - form: "dayon lokandon"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "welcome; a good coming Usage: dayon, good (neuter), agrees with lokandon, coming, from lokathen and -andon."
      source: {"kind": "coined"}
      note: "dayon, good (neuter), agrees with lokandon, coming, from lokathen and -andon."
      concept: "expression-welcome"
    - form: "avemen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "please; I would like it"
      source: {"kind": "coined"}
      note: "Use avemen, regular I-form of avethen, want; followed by the requested action's infinitive, without an emphatic pronoun."
      concept: "expression-please"
    - form: "orfenon memramen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "thank you; I remember the kindness Usage: orfenon, favor, object of memramen, I remember, regular present of memrathen."
      source: {"kind": "coined"}
      note: "orfenon, favor, object of memramen, I remember, regular present of memrathen."
      concept: "expression-thank-you"
    - form: "ar nezora yarezor"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "you are welcome; there is no debt Usage: ar nezora, no debt, with yarezor, is; response to thanks."
      source: {"kind": "coined"}
      note: "ar nezora, no debt, with yarezor, is; response to thanks."
      concept: "expression-youre-welcome"
    - form: "voza linkathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "excuse me; please let me be or let me pass Usage: voza, command marker, with linkathen, let be or let go; a polite interruption or request for room."
      source: {"kind": "coined"}
      note: "voza, command marker, with linkathen, let be or let go; a polite interruption or request for room."
      concept: "expression-excuse-me"
    - form: "zelmira keramen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "I am sorry; I have sorrow for what happened Usage: zelmira, sorrow, object of keramen, I have; expresses regret, not physical pain."
      source: {"kind": "coined"}
      note: "zelmira, sorrow, object of keramen, I have; expresses regret, not physical pain."
      concept: "expression-sorry"
    - form: "voza anorfenathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "forgive me Usage: voza, command marker, with anorfenathen, forgive; the speaker is the understood recipient of forgiveness."
      source: {"kind": "coined"}
      note: "voza, command marker, with anorfenathen, forgive; the speaker is the understood recipient of forgiveness."
      concept: "expression-forgive-me"
    - form: "varelin yarezor varlai"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "of course; it is indeed so Usage: varelin, true; yarezor, it is; varlai, truly; emphatic confirmation."
      source: {"kind": "coined"}
      note: "varelin, true; yarezor, it is; varlai, truly; emphatic confirmation."
      concept: "of-course"
    - form: "voza thavrelathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "listen! Usage: voza, command marker, with thavrelathen, listen; the addressee is understood."
      source: {"kind": "coined"}
      note: "voza, command marker, with thavrelathen, listen; the addressee is understood."
      concept: "expression-listen"
    - form: "voza silkathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "look! Usage: voza, command marker, with silkathen, look."
      source: {"kind": "coined"}
      note: "voza, command marker, with silkathen, look."
      concept: "expression-look"
    - form: "voza sistethen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "wait! Usage: voza, command marker, with sistethen, wait."
      source: {"kind": "coined"}
      note: "voza, command marker, with sistethen, wait."
      concept: "expression-wait"
    - form: "voza ir denon sedon lokathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "come here! Usage: voza, command marker; ir denon sedon, here; lokathen, come; destination before verb."
      source: {"kind": "coined"}
      note: "voza, command marker; ir denon sedon, here; lokathen, come; destination before verb."
      concept: "expression-come-here"
    - form: "voza fos tigathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "go away! Usage: voza, command marker; fos, out; tigathen, go."
      source: {"kind": "coined"}
      note: "voza, command marker; fos, out; tigathen, go."
      concept: "expression-go-away"
    - form: "voza zumbrathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "help! Usage: voza, command marker, with zumbrathen, help."
      source: {"kind": "coined"}
      note: "voza, command marker, with zumbrathen, help."
      concept: "expression-help"
    - form: "voza sistathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "stop! Usage: voza, command marker, with sistathen, stop."
      source: {"kind": "coined"}
      note: "voza, command marker, with sistathen, stop."
      concept: "expression-stop"
    - form: "voza antigai dokathen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "pardon?; please say that again Usage: voza, command marker; antigai, again; dokathen, say."
      source: {"kind": "coined"}
      note: "voza, command marker; antigai, again; dokathen, say."
      concept: "expression-pardon"
    - form: "lambiremen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "I understand"
      source: {"kind": "coined"}
      note: "Regular first-person present of lambirethen, understand; no emphatic pronoun."
      concept: "expression-i-understand"
    - form: "ar lambiremen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "I do not understand Usage: ar, not, directly before lambiremen, I understand."
      source: {"kind": "coined"}
      note: "ar, not, directly before lambiremen, I understand."
      concept: "expression-i-do-not-understand"
    - form: "eza sa kethis dokazen"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "how do you say this?; in what manner do you say it? Usage: eza, question opener; sa kethis, like what; dokazen, you say. Name the desired expression before dokazen."
      source: {"kind": "coined"}
      note: "eza, question opener; sa kethis, like what; dokazen, you say. Name the desired expression before dokazen."
      concept: "expression-how-do-you-say"
    - form: "eza kethis harlen ol denon"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "what is this called?; what is the name of this? Usage: eza, question opener; kethis, what; harlen, name; ol denon, of this. Verbless question."
      source: {"kind": "coined"}
      note: "eza, question opener; kethis, what; harlen, name; ol denon, of this. Verbless question."
      concept: "expression-what-is-this-called"
    - form: "eza varlai"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "really?; requesting confirmation or expressing surprise Usage: Attested formal question with eza, question opener, and varlai, truly; preserves its ironic questioning use."
      source: {"kind": "coined"}
      note: "Attested formal question with eza, question opener, and varlai, truly; preserves its ironic questioning use."
      concept: "expression-really"
    - form: "ar urkis"
      class: "call"
      field: "Learning, speech and the letters"
      gloss: "not at all; not even one degree Usage: ar, not, before urkis, one; an emphatic negative response."
      source: {"kind": "coined"}
      note: "ar, not, before urkis, one; an emphatic negative response."
      concept: "expression-not-at-all"
    - form: "verezos"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "a person; a human being"
      source: {"kind": "coined"}
      note: "Related to verosa, citizen; does not require citizenship or freedom."
      concept: ["person", "human"]
    - form: "verezoi"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "people; human beings"
      source: {"kind": "coined"}
      note: "Regular plural of verezos, person; already plural, not a singular nation or ethnicity."
      concept: "people"
    - form: "orvenos"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "a man; an adult male person"
      source: {"kind": "coined"}
      note: "New ordinary person noun; not the bird noun orven."
      concept: "man"
    - form: "verezena"
      class: "n f"
      field: "Precedence, patronage and what is owed"
      gloss: "a woman; an adult female person"
      source: {"kind": "coined"}
      note: "Related to verezos, person; not a feminine variant of a different meaning."
      concept: "woman"
    - form: "nurethon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a boy; a male child"
      source: {"kind": "coined"}
      note: "Related to nurethos, son; age-and-sex sense rather than kin relationship."
      concept: "boy"
    - form: "nurezon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a girl; a female child"
      source: {"kind": "coined"}
      note: "Related to nuretha, daughter. Like nurizon and nurethon, it is grammatically neuter because the person is a child; sex does not change that childhood class."
      concept: "girl"
    - form: "ar nurizos"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "an adult; a mature person Usage: Negated nurizos, young, used as a noun; feminine ar nuriza for a woman."
      source: {"kind": "coined"}
      note: "Negated nurizos, young, used as a noun; feminine ar nuriza for a woman."
      concept: "adult"
    - form: "urkis verezos"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "an individual; one person considered separately Usage: urkis, one, with verezos, person."
      source: {"kind": "coined"}
      note: "urkis, one, with verezos, person."
      concept: "individual"
    - form: "konalon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a group; an associated body of people or things"
      source: {"kind": "coined"}
      concept: "group"
    - form: "verezalon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a crowd; a gathered mass of people"
      source: {"kind": "coined"}
      note: "verez-, person, with -alon, the whole body; does not imply an organized community."
      concept: "crowd"
    - form: "sorthalon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a clan; a kin group tracing common descent"
      source: {"kind": "coined"}
      concept: "clan"
    - form: "konalon ol sorthalar"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a tribe; an associated group of clans Usage: konalon, group, of sorthalar, clans, the regular plural of sorthalon."
      source: {"kind": "coined"}
      note: "konalon, group, of sorthalar, clans, the regular plural of sorthalon."
      concept: "tribe"
    - form: "sedkonalon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a community; people sharing a place or way of life"
      source: {"kind": "coined"}
      note: "sed-, place, before konalon, associated group; lexical community noun."
      concept: "community"
    - form: "orzandar"
      class: "n"
      field: "Precedence, patronage and what is owed"
      gloss: "a ruler; one who rules"
      source: {"kind": "coined"}
      note: "Present participle of orzathen, rule, used as a noun; includes rulers below the sovereign."
      concept: "ruler"
    - form: "tambandar"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "a worker; a person doing work"
      source: {"kind": "coined"}
      note: "Present participle of tambathen, do or make, used as a noun."
      concept: "worker"
    - form: "palmezos"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "an artisan; a person skilled in a craft"
      source: {"kind": "coined"}
      concept: "artisan"
    - form: "zirothharlen"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a title; a name of rank or office"
      source: {"kind": "coined"}
      note: "ziroth-, rank, before harlen, name."
      concept: "title"
    - form: "zesima ankela"
      class: "n f"
      field: "Precedence, patronage and what is owed"
      gloss: "a tradition; an old inherited custom Usage: zesima, custom, with feminine ankela, old."
      source: {"kind": "coined"}
      note: "zesima, custom, with feminine ankela, old."
      concept: "tradition"
    - form: "fenthos"
      class: "n m"
      field: "Precedence, patronage and what is owed"
      gloss: "a rule; a stated standard governing conduct"
      source: {"kind": "coined"}
      concept: "rule"
    - form: "orzandon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a command; an act of directing someone"
      source: {"kind": "coined"}
      concept: "command-noun"
    - form: "solkandon ol orzandon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "obedience; following a command Usage: solkandon, following, from solkatora with -andon, of orzandon, command."
      source: {"kind": "coined"}
      note: "solkandon, following, from solkatora with -andon, of orzandon, command."
      concept: "obedience"
    - form: "yesthvelda"
      class: "n f"
      field: "Precedence, patronage and what is owed"
      gloss: "justice; fair regard for each person's rights and due"
      source: {"kind": "coined"}
      note: "New ethical noun beside yestharos, within one's right, and velda, honor; not merely a court's judgment."
      concept: "justice"
    - form: "anyesthvelda"
      class: "n f"
      field: "Precedence, patronage and what is owed"
      gloss: "injustice; denial of a person's rights or due"
      source: {"kind": "coined"}
      concept: "injustice"
    - form: "dayos ol yerpalon"
      class: "adj"
      field: "Precedence, patronage and what is owed"
      gloss: "right; morally good or acceptable Usage: dayos, good, qualified by ol yerpalon, of duty; ethical sense distinct from correct or right-hand direction."
      source: {"kind": "coined"}
      note: "dayos, good, qualified by ol yerpalon, of duty; ethical sense distinct from correct or right-hand direction."
      concept: "right-ethical"
    - form: "korethos ol yerpalon"
      class: "adj"
      field: "Precedence, patronage and what is owed"
      gloss: "wrong; morally bad or unacceptable Usage: korethos, bad, qualified by ol yerpalon, of duty; does not merely mean unlawful."
      source: {"kind": "coined"}
      note: "korethos, bad, qualified by ol yerpalon, of duty; does not merely mean unlawful."
      concept: "wrong-ethical"
    - form: "revothon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "freedom; the condition of being free"
      source: {"kind": "coined"}
      concept: "freedom"
    - form: "anrevothon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "captivity; the condition of being held and not free to leave"
      source: {"kind": "coined"}
      note: "an-, reverse, beside revothon, freedom; lexical captivity sense, not every constraint."
      concept: "captivity"
    - form: "daimandon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a gift; something given"
      source: {"kind": "coined"}
      concept: "gift"
    - form: "delandon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "an exchange; a trading of one thing for another"
      source: {"kind": "coined"}
      concept: "exchange-noun"
    - form: "zolmon frenkon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "wealth; a great amount of property or means Usage: zolmon, much (neuter adjective), agrees with frenkon, property."
      source: {"kind": "coined"}
      note: "zolmon, much (neuter adjective), agrees with frenkon, property."
      concept: "wealth"
    - form: "ithron frenkon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "poverty; little property or means Usage: ithron, little (neuter adjective), agrees with frenkon, property."
      source: {"kind": "coined"}
      note: "ithron, little (neuter adjective), agrees with frenkon, property."
      concept: "poverty"
    - form: "kerandon ol frenkon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "ownership; the holding of property as one's own Usage: kerandon, holding or having, of frenkon, property; ownership rather than temporary physical possession."
      source: {"kind": "coined"}
      note: "kerandon, holding or having, of frenkon, property; ownership rather than temporary physical possession."
      concept: "ownership"
    - form: "lathon keltherthon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "a secret; a matter kept hidden Usage: lathon, thing or matter, with neuter keltherthon, hidden, from keltherathen, hide, plus -thos. General concealed information or affairs, not only the craft secret kelthon."
      source: {"kind": "coined"}
      note: "lathon, thing or matter, with neuter keltherthon, hidden, from keltherathen, hide, plus -thos. General concealed information or affairs, not only the craft secret kelthon."
      concept: "secret"
    - form: "kezdandon"
      class: "n n"
      field: "Precedence, patronage and what is owed"
      gloss: "knowledge; what is known"
      source: {"kind": "coined"}
      concept: "knowledge"
    - form: "lathon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a thing; an object or matter referred to"
      source: {"kind": "coined"}
      concept: "thing"
    - form: "yarelon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a being; an entity that exists"
      source: {"kind": "coined"}
      concept: "being"
    - form: "linthima ol lathon"
      class: "n f"
      field: "Learning, speech and the letters"
      gloss: "an origin; the source from which a thing comes Usage: linthima, spring or source, of lathon, thing; lexical origin use, with the thing named after ol."
      source: {"kind": "coined"}
      note: "linthima, spring or source, of lathon, thing; lexical origin use, with the thing named after ol."
      concept: "origin"
    - form: "holimandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a beginning; the start of an event or thing"
      source: {"kind": "coined"}
      concept: "beginning"
    - form: "orthemandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "an end; the stopping point of an event or thing"
      source: {"kind": "coined"}
      note: "From orthemathen, end, with -andon; not the verb itself."
      concept: "end-noun"
    - form: "zetimandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "completion; the state of an act being wholly done"
      source: {"kind": "coined"}
      note: "New abstract noun beside zetimos, whole; names the completed state, not only an object made."
      concept: "completion"
    - form: "pelzandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a change; an alteration of state or form"
      source: {"kind": "coined"}
      concept: "change-noun"
    - form: "pelzandon ol yenthamis"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a transformation; a change of form or appearance Usage: pelzandon, change, of yenthamis, face; lexical form-changing sense."
      source: {"kind": "coined"}
      note: "pelzandon, change, of yenthamis, face; lexical form-changing sense."
      concept: "transformation"
    - form: "solthen"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a part; one portion of a larger whole"
      source: {"kind": "coined"}
      note: "Related to soltha, half; not limited to an equal share."
      concept: "part"
    - form: "holethon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a cause; what brings about an event or state"
      source: {"kind": "coined"}
      concept: "cause"
    - form: "tambandon ol holethon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "an effect; what is brought about by a cause Usage: tambandon, a thing done or made, of holethon, cause; result expression."
      source: {"kind": "coined"}
      note: "tambandon, a thing done or made, of holethon, cause; result expression."
      concept: "effect"
    - form: "zenothon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a reason; an explanation or ground for a judgment"
      source: {"kind": "coined"}
      concept: "reason"
    - form: "tambavon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a purpose; the intended end of an action"
      source: {"kind": "coined"}
      concept: "purpose"
    - form: "lathen"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a kind; a class of things sharing a nature"
      source: {"kind": "coined"}
      concept: "kind"
    - form: "yarelos"
      class: "adj"
      field: "Learning, speech and the letters"
      gloss: "real; existing in fact"
      source: {"kind": "coined"}
      note: "Related to yarethen, be; not merely sincerely believed."
      concept: "real"
    - form: "anyarelos"
      class: "adj"
      field: "Learning, speech and the letters"
      gloss: "unreal; not existing in fact"
      source: {"kind": "coined"}
      concept: "unreal"
    - form: "nurelos"
      class: "adj"
      field: "Learning, speech and the letters"
      gloss: "natural; arising through the ordinary growth or workings of the world"
      source: {"kind": "coined"}
      note: "Related to nurethen, grow; not restricted to plants."
      concept: "natural"
    - form: "annurelos"
      class: "adj"
      field: "Learning, speech and the letters"
      gloss: "unnatural; contrary to the ordinary growth or workings of the world"
      source: {"kind": "coined"}
      concept: "unnatural"
    - form: "memrandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "remembering; a remembrance"
      source: {"kind": "coined"}
    - form: "dunandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "ability; the capacity to do something"
      source: {"kind": "coined"}
    - form: "anhalvandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a loss; the losing of something"
      source: {"kind": "coined"}
    - form: "thaurandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "keeping; guarding"
      source: {"kind": "coined"}
    - form: "kerandar"
      class: "adj"
      field: "Learning, speech and the letters"
      gloss: "holding; having"
      source: {"kind": "coined"}
      note: "Regular -andar participle of kerathen, hold or have."
    - form: "konandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "association; being together"
      source: {"kind": "coined"}
    - form: "kerandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "holding; having"
      source: {"kind": "coined"}
    - form: "nembandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a fall; falling"
      source: {"kind": "coined"}
    - form: "pethandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a question; an asking"
      source: {"kind": "coined"}
    - form: "kordandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "fighting; an engagement in combat"
      source: {"kind": "coined"}
    - form: "lokandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a coming; an arrival"
      source: {"kind": "coined"}
    - form: "solkandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "following; attendance"
      source: {"kind": "coined"}
      note: "solkatora, follow, with -andon, using the documented stem before -atora."
    - form: "urzandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a rising; an ascent"
      source: {"kind": "coined"}
    - form: "kethis"
      class: "pron"
      field: "Learning, speech and the letters"
      gloss: "what; an interrogative reference to a thing or action"
      source: {"kind": "coined"}
    - form: "kethos"
      class: "adj"
      field: "Learning, speech and the letters"
      gloss: "which; an interrogative selection from a set"
      source: {"kind": "coined"}
    - form: "sathai"
      class: "adv"
      field: "Learning, speech and the letters"
      gloss: "sufficiently; enough for the purpose"
      source: {"kind": "coined"}
      note: "Regular -ai adverb of sathos, enough."
    - form: "zetimai"
      class: "adv"
      field: "Learning, speech and the letters"
      gloss: "wholly; completely"
      source: {"kind": "coined"}
      note: "Regular -ai adverb of zetimos, whole."
    - form: "dokandon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "a saying; a statement"
      source: {"kind": "coined"}
    - form: "prasedon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "the front; the place in front of the speaker or named referent"
      source: {"kind": "coined"}
      note: "pra, in front of, before sedon, place; lexical location compound."
    - form: "anprasedon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "the rear; the place behind the speaker or named referent"
      source: {"kind": "coined"}
      note: "anpra, behind, before sedon, place; lexical location compound."
    - form: "teredon"
      class: "n n"
      field: "Learning, speech and the letters"
      gloss: "length; spatial extent"
      source: {"kind": "coined"}
    - form: zekra
      class: n f
      field: Doing, going and being
      gloss: "cock or rooster"
      source: {kind: coined}

    - form: pazartos
      class: n m
      field: Coin, trade and the counting-table
      gloss: "baker"
      source: {kind: coined}

    - form: zirkon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "stair or physical step"
      source: {kind: coined}

    - form: harkelon
      class: n n
      field: Doing, going and being
      gloss: "rumor"
      source: {kind: coined}

    - form: lamora
      class: n f
      field: "The city: stone, water and the street"
      gloss: "shelf"
      source: {kind: coined}

    - form: tholvena
      class: n f
      field: Precedence, patronage and what is owed
      gloss: "gown worn by a citizen or client"
      source: {kind: coined}

    - form: liskara
      class: n f
      field: Precedence, patronage and what is owed
      gloss: "residence waiver signed by a patron"
      source: {kind: coined}

    - form: kornathen
      class: v
      field: Doing, going and being
      gloss: "blow upon coals"
      source: {kind: coined}

    - form: kornethen
      class: v
      field: Doing, going and being
      gloss: "curse someone in speech"
      source: {kind: coined}

    - form: firnadon
      class: n n
      field: Doing, going and being
      gloss: "fountain"
      source: {kind: coined}

    - form: thilartos
      class: n m
      field: Doing, going and being
      gloss: "clerk"
      source: {kind: coined}

    - form: thaltar
      class: n n
      field: Doing, going and being
      gloss: "builder"
      source: {kind: coined}

    - form: palzathen
      class: v
      field: Doing, going and being
      gloss: "pay for work or goods"
      source: {kind: coined}

    - form: morathen
      class: v
      field: Doing, going and being
      gloss: "wait upon a patron's attendance"
      source: {kind: coined}

    - form: lamzathen
      class: v
      field: Doing, going and being
      gloss: "smile"
      source: {kind: coined}

    - form: kunera
      class: n f
      field: Doing, going and being
      gloss: "cupboard"
      source: {kind: coined}

    - form: talonartos
      class: n m
      field: Doing, going and being
      gloss: "sculptor"
      source: {kind: coined}

    - form: lavurathen
      class: v
      field: Doing, going and being
      gloss: "sculpt an ancestor mask"
      source: {kind: coined}

    - form: talondos
      class: n m
      field: Doing, going and being
      gloss: "statue"
      source: {kind: coined}

    - form: tharnos
      class: n m
      field: Doing, going and being
      gloss: "plinth"
      source: {kind: coined}

    - form: sethathen
      class: v
      field: Doing, going and being
      gloss: "forge or counterfeit an identity or seal"
      source: {kind: coined}

    - form: nalor
      class: n n
      field: Doing, going and being
      gloss: "quail"
      source: {kind: coined}

    - form: kalzandon
      class: n n
      field: Learning, speech and the letters
      gloss: "formal declaration of a name"
      source: {kind: coined}

    - form: zelkorma
      class: n f
      field: Doing, going and being
      gloss: "lean-to shelter"
      source: {kind: coined}

    - form: korbathen
      class: v
      field: Doing, going and being
      gloss: "fold a garment"
      source: {kind: coined}

    - form: nalvathen
      class: v
      field: Doing, going and being
      gloss: "dress a person in garments"
      source: {kind: coined}

    - form: pelthakonos
      class: n m
      field: Doing, going and being
      gloss: "colonnade"
      source: {kind: coined}

    - form: thorkon
      class: n n
      field: Doing, going and being
      gloss: "sack"
      source: {kind: coined}

    - form: zedkaros
      class: n m
      field: Doing, going and being
      gloss: "shepherd"
      source: {kind: coined}

    - form: kedros
      class: n m
      field: Doing, going and being
      gloss: "dog"
      source: {kind: coined}

    - form: kolsikon
      class: n n
      field: Doing, going and being
      gloss: "flock"
      source: {kind: coined}

    - form: samdon
      class: n n
      field: "The city: stone, water and the street"
      gloss: "height of a step or structure"
      source: {kind: coined}

    - form: thradinandon
      class: n n
      field: Doing, going and being
      gloss: "measurement or measuring"
      source: {kind: coined}

    - form: skaros
      class: n m
      field: The state and its offices
      gloss: "staff of office"
      source: {kind: coined}

    - form: letima
      class: n f
      field: Doing, going and being
      gloss: "list"
      source: {kind: coined}

    - form: larmisartos
      class: n m
      field: Doing, going and being
      gloss: "grammarian"
      source: {kind: coined}

    - form: medathen
      class: v
      field: Doing, going and being
      gloss: "mean or intend a meaning"
      source: {kind: coined}

    - form: lomathen
      class: v
      field: Doing, going and being
      gloss: "laugh"
      source: {kind: coined}

    - form: lanbeza
      class: n f
      field: Doing, going and being
      gloss: "sheet of paper"
      source: {kind: coined}

    - form: thradima
      class: n f
      field: The body, life and death
      gloss: "a measure of grain"
      source: {kind: coined}

    - form: luren
      class: n n
      field: "The city: stone, water and the street"
      gloss: "end of a couch or room"
      source: {kind: coined}

    - form: brulandon
      class: n n
      field: The state and its offices
      gloss: "ruin of a treasury"
      source: {kind: coined}

    - form: tevare
      class: n n
      field: Doing, going and being
      gloss: "yard of a workshop"
      source: {kind: coined}

    - form: mandros
      class: adj
      field: Qualities
      gloss: "empty or blank"
      source: {kind: coined}

    - form: hurpathen
      class: v
      field: Doing, going and being
      gloss: "fill a cupboard or vessel"
      source: {kind: coined}

    - form: barkis
      class: n m
      field: Doing, going and being
      gloss: "wax"
      source: {kind: coined}

    - form: karona
      class: n f
      field: Doing, going and being
      gloss: "cart"
      source: {kind: coined}

    - form: strathos
      class: n m
      field: The legions and the frontier
      gloss: "army"
      source: {kind: coined}

    - form: Kilron
      class: n n
      field: Doing, going and being
      gloss: "circle, including the Orzas's Circle"
      source: {kind: coined}

    - form: orzlokandon
      class: n n
      field: The state and its offices
      gloss: "accession to sovereign rule"
      source: {kind: coined}

    - form: anhalbathen
      class: v
      field: Doing, going and being
      gloss: "miss an appointed attendance"
      source: {kind: coined}

    - form: nizelathen
      class: v
      field: Doing, going and being
      gloss: "bite"
      source: {kind: coined}

    - form: ertathen
      class: v
      field: Doing, going and being
      gloss: "perform a term of military service"
      source: {kind: coined}

    - form: Katsur
      class: n n
      field: "The city: stone, water and the street"
      gloss: "the Warrens"
      source: {kind: coined}

    - form: Ormakir
      class: n n
      field: The state and its offices
      gloss: "the Clearance"
      source: {kind: coined}

    - form: Sirethalmalthos
      class: n n
      field: Land, the vine and the river
      gloss: "the River Hill"
      source: {kind: coined}
      built: [siretha, malthos]

    - form: Kurthemalon
      class: n n
      field: The state and its offices
      gloss: "the Republic"
      source: {kind: coined}
      built: [kurthema, malon]

    - form: "Anklame Tigandon"
      class: n n
      field: "The city: stone, water and the street"
      gloss: "the Silent Passage"
      source: {kind: coined}
      built: [anklamos, tigandon]

    - form: karvumrozima
      class: n f
      field: Precedence, patronage and what is owed
      gloss: "smoke tally kept by a frontier tower"
      source: {kind: coined}
      built: [karvuma, rozima]

    - form: zulmara
      class: n f
      field: Land, the vine and the river
      gloss: "marsh"
      source: {kind: coined}

    - form: sulkon
      class: n n
      field: Land, the vine and the river
      gloss: "reed"
      source: {kind: coined}

    - form: samirthos
      class: adj
      field: Qualities
      gloss: "careful in counting or observation"
      source: {kind: coined}

    - form: tharktholbon
      class: n n
      field: Craft, guild and the kept secret
      gloss: "blanket"
      source: {kind: coined}

    - form: talezon
      class: n n
      field: Craft, guild and the kept secret
      gloss: "letter sent to a person"
      source: {kind: coined}

    - form: thorgezos
      class: n m
      field: Precedence, patronage and what is owed
      gloss: "officer of a frontier watchtower"
      source: {kind: coined}

    - form: nethkalos
      class: n m
      field: Doing, going and being
      gloss: "war-band"
      source: {kind: coined}

    - form: salkar
      class: n n
      field: Doing, going and being
      gloss: "village"
      source: {kind: coined}

    - form: zulkinon
      class: n n
      field: Doing, going and being
      gloss: "waist"
      source: {kind: coined}

    - form: aralmathen
      class: v
      field: Doing, going and being
      gloss: "smooth wax to erase writing"
      source: {kind: coined}

    - form: kiramon
      class: n n
      field: Doing, going and being
      gloss: "light"
      source: {kind: coined}

    - form: karvathen
      class: v
      field: Doing, going and being
      gloss: "light a lamp"
      source: {kind: coined}

    - form: narathen
      class: v
      field: Doing, going and being
      gloss: "tell a person something"
      source: {kind: coined}

    - form: kolerathen
      class: v
      field: Doing, going and being
      gloss: "draw a line"
      source: {kind: coined}

    - form: kadrathos
      class: adj
      field: Qualities
      gloss: "square in shape, including handwriting"
      source: {kind: coined}

    - form: silethen
      class: v
      field: Doing, going and being
      gloss: "weep"
      source: {kind: coined}

    - form: Zoralos
      class: n m
      field: The state and its offices
      gloss: "watch officer of a century"
      source: {kind: coined}

    - form: Kamezos
      class: n m
      field: Precedence, patronage and what is owed
      gloss: "tower officer who lights its evening lamp"
      source: {kind: coined}

    - form: zunon
      class: n n
      field: The legions and the frontier
      gloss: "band or strip fixed to a legion's name"
      source: {kind: coined}

    - form: ronalos
      class: n m
      field: Land, the vine and the river
      gloss: "ridge"
      source: {kind: coined}

    - form: zelboron
      class: n n
      field: Doing, going and being
      gloss: "mail armor"
      source: {kind: coined}

    - form: ethluma
      class: n f
      field: Doing, going and being
      gloss: "gilt on a pole or object"
      source: {kind: coined}

    - form: pazkarlon
      class: n n
      field: Coin, trade and the counting-table
      gloss: "bread"
      source: {kind: coined}

    - form: "Zel orkaima thalentor uthrime"
      class: part
      field: Numbers and grammar words
      gloss: "beneath the eagle stand the borders"
      source: {kind: coined}

    - form: pleros
      class: adj
      field: Qualities
      gloss: "full, without specifying what fills a place"
      source: {kind: coined}

    - form: hurdis
      class: n m
      field: The body, life and death
      gloss: "rain"
      source: {kind: coined}
    - form: a'
      class: part
      field: Numbers and grammar words
      gloss: the; the worn-down Alessa article from alathos, retained in the morning-call refrain
      source: {kind: coined}
    - form: zelimmos
      class: adj
      field: Qualities
      gloss: lowest; the superlative of zelos, low
      source: {kind: coined}
    - form: samirthazos
      class: adj
      field: Qualities
      gloss: more careful in counting or observation; the comparative of samirthos
      source: {kind: coined}
    - form: thelvarazos
      class: adj
      field: Qualities
      gloss: higher or more noble; the comparative of thelvaros
      source: {kind: coined}
    - form: teremazos
      class: adj
      field: Qualities
      gloss: longer; the comparative of teremos
      source: {kind: coined}
    - form: zorimoros
      class: adj
      field: Numbers and grammar words
      gloss: eighth; the ordinal formed on zorimaks
      source: {kind: coined}
    - form: lukemoros
      class: adj
      field: Numbers and grammar words
      gloss: ninth; the ordinal formed on lukemar
      source: {kind: coined}
    - form: dorekoros
      class: adj
      field: Numbers and grammar words
      gloss: twelfth; the ordinal formed on dorekis
      source: {kind: coined}
    - form: klinandon
      class: n n
      field: Doing, going and being
      gloss: a bow or nod; a bending of the head
      source: {kind: coined}
    - form: marendandon
      class: n n
      field: Learning, speech and the letters
      gloss: a lesson or teaching; what has been learned
      source: {kind: coined}
    - form: Thramezusos
      class: n m
      field: The legions and the frontier
      gloss: a legion's commander, as named in the road-song and the account of the Second Reading
      source: {kind: coined}
    - form: Holtakezos
      class: n m
      field: The legions and the frontier
      gloss: the senior career centurion of a legion, as named in the road-song and the account of the Second Reading
      source: {kind: coined}
    - form: Ethorlusos
      class: n m
      field: The legions and the frontier
      gloss: a young noble officer, as named in the road-song
      source: {kind: coined}

  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {house}"
    given:
      female:
        - "Solkima"
        - "Thelvare"
        - "Kirama"
        - "Sirethis"
        - "Linthima"
        - "Lizelen"
        - "Nethore"
        - "Sirema"
        - "Sorimar"
        - "Marenda"
        - "Yalzema"
        - "Zunele"
        - "Pramiza"
        - "Hiltheris"
        - "Luvetha"
        - "Venthelen"
        - "Ilthere"
        - "Eltheza"
        - "Thalurar"
        - "Revotha"
        - "Varela"
        - "Zenothe"
        - "Holima"
        - "Orthemis"
        - "Nelama"
        - "Huraden"
        - "Kolsame"
        - "Gurima"
        - "Tholmarar"
        - "Kaldrema"
        - "Doranda"
        - "Pelere"
        - "Ankela"
        - "Teremis"
        - "Zetima"
        - "Nizelen"
        - "Kaure"
        - "Ornetha"
        - "Pirkelar"
        - "Tharoza"
        - "Volkema"
        - "Brazeme"
      male:
        - "Thelvaros"
        - "Tharkos"
        - "Solkimar"
        - "Doros"
        - "Melvaris"
        - "Revothos"
        - "Zenothen"
        - "Kiramos"
        - "Solteros"
        - "Holimar"
        - "Orthemos"
        - "Ankelos"
        - "Pelerar"
        - "Teremos"
        - "Zetimis"
        - "Varelos"
        - "Kauren"
        - "Thaluros"
        - "Iltheros"
        - "Elthezar"
        - "Korvathos"
        - "Satheros"
        - "Talothar"
        - "Ronethos"
        - "Ganothis"
        - "Zurmelos"
        - "Nebralen"
        - "Kaldremos"
        - "Tholmaros"
        - "Volkemar"
        - "Brazemos"
        - "Tharozos"
        - "Kalmethar"
        - "Pirkelos"
        - "Gurimis"
        - "Sirethos"
        - "Nethoren"
        - "Marendos"
        - "Linthimos"
    house:
      - "Kalmethis"
      - "Thelvaris"
      - "Tharkis"
      - "Dorandates"
      - "Revothandis"
      - "Zenothenos"
      - "Melvarandis"
      - "Solterates"
      - "Holimandis"
      - "Orthemandis"
      - "Korvathandis"
      - "Talothates"
      - "Ronethen"
      - "Ganothandis"
      - "Nebralandis"
      - "Tharozates"
      - "Venthelis"
      - "Gurimandis"
      - "Satheris"
      - "Zurmelates"
      - "Kaldremis"
      - "Tholmaris"
      - "Linthimis"
      - "Volkemates"
      - "Kolsamis"
      - "Pirkelis"
      - "Brazemen"
      - "Thalurates"
      - "Elthezis"
      - "Iltheris"
  sounds:
    edges:
      - {edge: openCluster, sounds: [st, pr, pl, tr, kr, kl, br, bl, dr, gr, gl, fr, fl, thr]}
      - {edge: closeConsonant, sounds: [s, n, r, l]}
    clusters: {max: 3}
    stress: {two: first, longer: penultimate, mark: acute}
    syllables: {vowelPairs: [ai, au, oi, aa, ii, uu]}
  cognates:
    - forms: {skill-vylarilng: ulthathen, skill-tarvenlng: ulthad}
      proto: ulthathen
      gloss: to hallow
    - forms: {skill-vylarilng: ulthandon, skill-provnzlng: ultande, skill-tarvenlng: ulthando}
      proto: ulthandon
      gloss: a consecration
    - forms: {skill-vylarilng: sarkenandos, skill-provnzlng: sarcheande, skill-tarvenlng: sarko}
      proto: sarkenandos
      gloss: a priest
    - forms:
        skill-vylarilng: sarkenanda
        skill-provnzlng: sarcheanda
        skill-tarvenlng: sarkenanda
      proto: sarkenanda
      gloss: a priestess
    - forms: {skill-vylarilng: kurzalis, skill-provnzlng: kurdalis, skill-tarvenlng: kur}
      proto: kurdhalis
      gloss: an altar
    - forms: {skill-vylarilng: nekaimon, skill-provnzlng: nechaime, skill-tarvenlng: nekai}
      proto: nekaimon
      gloss: a wayside shrine
    - forms: {skill-vylarilng: tholmeza, skill-provnzlng: tolmeza, skill-tarvenlng: tholza}
      proto: tholmeza
      gloss: a vow
    - {forms: {skill-vylarilng: kelmaron, skill-tarvenlng: kelmo}, proto: kelmaron, gloss: a curse}
    - forms:
        skill-vylarilng: kelmarthos
        skill-aelendlng: khelmarth
        skill-elvndrlng: helmarth
        skill-provnzlng: chelmarte
        skill-tarvenlng: keltho
      proto: kelmarthos
      gloss: accursed
    - forms:
        skill-vylarilng: ozethos
        skill-aelendlng: odhethand
        skill-elvndrlng: óudethand
        skill-provnzlng: odeve
      proto: odhethos
      gloss: a diviner
    - forms: {skill-vylarilng: yaltheza, skill-provnzlng: jalteza}
      proto: yaltheza
      gloss: a prayer
    - forms: {skill-vylarilng: karalzon, skill-provnzlng: karalze, skill-tarvenlng: karalzo}
      proto: k'aralzon
      gloss: the kept fire
    - forms: {skill-vylarilng: thelvaralon, skill-provnzlng: telvaral, skill-tarvenlng: thelvaralo}
      proto: thelwaralon
      gloss: a noble house
    - forms:
        skill-vylarilng: zorkos
        skill-aelendlng: sorkhand
        skill-elvndrlng: sorhand
        skill-provnzlng: zorche
        skill-tarvenlng: zork
      proto: zorkos
      gloss: the master of a household
    - forms: {skill-vylarilng: semrothos, skill-provnzlng: semrote, skill-tarvenlng: sembro}
      proto: semrothos
      gloss: a brother
    - forms: {skill-vylarilng: semrotha, skill-provnzlng: semrota, skill-tarvenlng: sembra}
      proto: semrotha
      gloss: a sister
    - {forms: {skill-vylarilng: nurizon, skill-tarvenlng: nur}, proto: nurizon, gloss: a child}
    - forms:
        skill-vylarilng: harlenis
        skill-aelendlng: arlendi
        skill-elvndrlng: árlende
        skill-provnzlng: arleis
        skill-tarvenlng: harla
      proto: harlenis
      gloss: the house name
    - forms:
        skill-vylarilng: kiramharlen
        skill-provnzlng: kiramarle
        skill-tarvenlng: kiramharlen
      proto: kiramharlen
      gloss: an earned name
    - forms:
        skill-vylarilng: sorethis
        skill-aelendlng: sorethendi
        skill-elvndrlng: sóurethende
        skill-provnzlng: soretis
        skill-tarvenlng: sora
      proto: sorethis
      gloss: kin
    - forms: {skill-vylarilng: zirothalon, skill-provnzlng: zirotal}
      proto: zirothalon
      gloss: precedence
    - forms: {skill-vylarilng: zirothathen, skill-provnzlng: zirotate}
      proto: zirothathen
      gloss: to place
    - forms: {skill-vylarilng: anzirothos, skill-provnzlng: anzirote, skill-tarvenlng: anziro}
      proto: anzirothos
      gloss: unplaced
    - forms: {skill-vylarilng: daimela, skill-provnzlng: daimela, skill-tarvenlng: daima}
      proto: daimela
      gloss: a patron
    - forms: {skill-vylarilng: daimelalon, skill-provnzlng: daimelal, skill-tarvenlng: daimelalo}
      proto: daimelalon
      gloss: patronage
    - forms: {skill-vylarilng: pramolza, skill-provnzlng: pramolza}
      proto: pramolza
      gloss: the morning call
    - {forms: {skill-vylarilng: orfenon, skill-tarvenlng: orhen}, proto: orfenon, gloss: a favor}
    - forms: {skill-vylarilng: orfenathen, skill-provnzlng: orfeate, skill-tarvenlng: orhenad}
      proto: orfenathen
      gloss: to owe
    - forms: {skill-vylarilng: dumvaralon, skill-provnzlng: dumvaral}
      proto: dumwaralon
      gloss: guest-right
    - forms: {skill-vylarilng: verosalon, skill-provnzlng: verosal, skill-tarvenlng: verosalo}
      proto: werosalon
      gloss: citizenship
    - forms: {skill-vylarilng: liskaima, skill-provnzlng: liskaima}
      proto: liskaima
      gloss: manumission
    - forms:
        skill-vylarilng: kurthos
        skill-aelendlng: kurthand
        skill-elvndrlng: kurthand
        skill-provnzlng: kurte
        skill-tarvenlng: kurth
      proto: kurthos
      gloss: a senator
    - forms: {skill-vylarilng: nazdis, skill-provnzlng: nasdis, skill-tarvenlng: nazda}
      proto: nazdis
      gloss: a judgment
    - forms: {skill-vylarilng: nazdalon, skill-provnzlng: nasdal}
      proto: nazdalon
      gloss: a court of law
    - forms: {skill-vylarilng: krezulathen, skill-provnzlng: krezulate}
      proto: krezulathen
      gloss: to sue
    - forms:
        skill-vylarilng: lozos
        skill-aelendlng: losand
        skill-elvndrlng: lousand
        skill-provnzlng: loze
        skill-tarvenlng: lozo
      proto: lozos
      gloss: an advocate
    - forms: {skill-vylarilng: semnalis, skill-provnzlng: semnalis, skill-tarvenlng: semna}
      proto: semnalis
      gloss: a contract
    - forms: {skill-vylarilng: thizaros, skill-provnzlng: tidare, skill-tarvenlng: thidro}
      proto: thidharos
      gloss: a keeper of seals
    - forms: {skill-vylarilng: zaktela, skill-provnzlng: daktela, skill-tarvenlng: dakta}
      proto: dhaktela
      gloss: a charter
    - forms: {skill-vylarilng: kuthreza, skill-provnzlng: kutreza, skill-tarvenlng: kuthra}
      proto: kuthreza
      gloss: a penalty
    - forms: {skill-vylarilng: zamolis, skill-provnzlng: damolis, skill-tarvenlng: damla}
      proto: dhamolis
      gloss: guilt
    - forms: {skill-vylarilng: frenkon, skill-provnzlng: frenche}
      proto: frenkon
      gloss: property
    - forms: {skill-vylarilng: venthodis, skill-provnzlng: ventodis, skill-tarvenlng: ventha}
      proto: wenthodis
      gloss: exile
    - forms: {skill-vylarilng: orzathen, skill-provnzlng: orzate, skill-tarvenlng: orzad}
      proto: orzathen
      gloss: to rule
    - forms: {skill-vylarilng: kurthema, skill-provnzlng: kurtema, skill-tarvenlng: kurtha}
      proto: kurthema
      gloss: the Senate
    - forms: {skill-vylarilng: zilmara, skill-provnzlng: dilmara, skill-tarvenlng: dil}
      proto: dhilmara
      gloss: a vote
    - forms: {skill-vylarilng: karezathen, skill-provnzlng: charezate}
      proto: karezathen
      gloss: to see to
    - forms: {skill-vylarilng: karezos, skill-provnzlng: chareze, skill-tarvenlng: karzo}
      proto: karezos
      gloss: a steward
    - forms: {skill-vylarilng: felzathen, skill-provnzlng: felzate}
      proto: felzathen
      gloss: to send
    - forms: {skill-vylarilng: thauros, skill-provnzlng: taure, skill-tarvenlng: thaur}
      proto: thauros
      gloss: a guardsman
    - forms: {skill-vylarilng: kordathen, skill-tarvenlng: kordad}
      proto: kordathen
      gloss: to fight
    - forms: {skill-vylarilng: thramezan, skill-tarvenlng: thramzo}
      proto: thramezan
      gloss: a legionary
    - forms:
        skill-vylarilng: takezos
        skill-aelendlng: takhesand
        skill-elvndrlng: táehesand
        skill-provnzlng: tacheze
        skill-tarvenlng: takzo
      proto: takezos
      gloss: a centurion
    - forms: {skill-vylarilng: zurgalis, skill-provnzlng: durvalis, skill-tarvenlng: durga}
      proto: dhurgalis
      gloss: a camp
    - forms: {skill-vylarilng: kadzimon, skill-provnzlng: chadzime, skill-tarvenlng: kadzo}
      proto: kadzimon
      gloss: a sword
    - forms: {skill-vylarilng: gretala, skill-provnzlng: gredala, skill-tarvenlng: gred}
      proto: ghretala
      gloss: a spear
    - forms: {skill-vylarilng: gulman, skill-provnzlng: gulme, skill-tarvenlng: gul}
      proto: ghulmandos
      gloss: a horseman
    - forms: {skill-vylarilng: thrumathen, skill-provnzlng: trumate, skill-tarvenlng: thrumad}
      proto: thrumathen
      gloss: to lead
    - forms: {skill-vylarilng: thrumar, skill-provnzlng: trumar, skill-tarvenlng: thrumar}
      proto: thrumar
      gloss: a general
    - forms: {skill-vylarilng: thurgezon, skill-provnzlng: turveze, skill-tarvenlng: thurgo}
      proto: thurgezon
      gloss: a siege
    - forms: {skill-vylarilng: grumeza, skill-provnzlng: grumeza, skill-tarvenlng: gruma}
      proto: grumeza
      gloss: war
    - forms: {skill-vylarilng: gulmeza, skill-provnzlng: gulmeza, skill-tarvenlng: gulma}
      proto: gulmeza
      gloss: a troop of horse
    - forms: {skill-vylarilng: gaimela, skill-provnzlng: gaimela, skill-tarvenlng: gaima}
      proto: gaimela
      gloss: a bow
    - forms: {skill-vylarilng: thrima, skill-provnzlng: tirutrima, skill-tarvenlng: thirúthrima}
      proto: thrima
      gloss: "the hallowed boundary of a city, inside which no legion marches"
    - forms: {skill-vylarilng: rembalis, skill-provnzlng: rembalis, skill-tarvenlng: emba}
      proto: rembalis
      gloss: a square
    - forms: {skill-vylarilng: dorkima, skill-provnzlng: dorvima, skill-tarvenlng: dorka}
      proto: dorkima
      gloss: a column
    - forms: {skill-vylarilng: ulmera, skill-provnzlng: ulmera, skill-tarvenlng: ulmer}
      proto: ulmera
      gloss: water
    - forms:
        skill-vylarilng: ulmerpozera
        skill-aelendlng: ulmedhera
        skill-elvndrlng: úlmedera
        skill-provnzlng: ulmervodera
        skill-tarvenlng: ulmerpodera
      proto: ulmerpodhera
      gloss: an aqueduct
    - forms:
        skill-vylarilng: zumbezon
        skill-aelendlng: dhumeson
        skill-elvndrlng: dyemeson
        skill-provnzlng: dumbeze
        skill-tarvenlng: dúmbezo
      proto: dhumbezon
      gloss: a cistern
    - forms: {skill-vylarilng: sozrakis, skill-provnzlng: sodravis, skill-tarvenlng: sodra}
      proto: sodhrakis
      gloss: a drain
    - forms: {skill-vylarilng: komrela, skill-provnzlng: komrela, skill-tarvenlng: kombra}
      proto: komrela
      gloss: a villa
    - forms: {skill-vylarilng: komrelalon, skill-provnzlng: komrelal, skill-tarvenlng: kombrelalo}
      proto: komrelalon
      gloss: an estate
    - forms: {skill-vylarilng: rathauna, skill-tarvenlng: arthauna}
      proto: rathauna
      gloss: a racecourse
    - forms: {skill-vylarilng: palthokis, skill-provnzlng: paltovis, skill-tarvenlng: paltho}
      proto: palthokis
      gloss: a brick
    - forms: {skill-vylarilng: kalmezar, skill-provnzlng: chalmezar, skill-tarvenlng: kálmezar}
      proto: kalmezar
      gloss: marble
    - forms: {skill-vylarilng: grumbalon, skill-provnzlng: grumbal, skill-tarvenlng: grumba}
      proto: grumbalon
      gloss: a quarry
    - forms: {skill-vylarilng: ithrola, skill-provnzlng: itrola, skill-tarvenlng: ithra}
      proto: ithrola
      gloss: a lamp
    - forms: {skill-vylarilng: selkora, skill-provnzlng: selchora, skill-tarvenlng: selka}
      proto: selkora
      gloss: a granary
    - forms: {skill-vylarilng: humelthathen, skill-provnzlng: umeltate}
      proto: humelthathen
      gloss: to rest
    - forms: {skill-vylarilng: kelthathen, skill-provnzlng: keltate}
      proto: kelthathen
      gloss: to keep a secret
    - forms: {skill-vylarilng: gartema, skill-provnzlng: gardema, skill-tarvenlng: garta}
      proto: ghartema
      gloss: a bench
    - {forms: {skill-vylarilng: gartos, skill-provnzlng: garde}, proto: ghartos, gloss: a master}
    - forms: {skill-vylarilng: thumbalis, skill-provnzlng: tumbalis, skill-tarvenlng: thumba}
      proto: thumbalis
      gloss: a forge
    - forms: {skill-vylarilng: thalbezon, skill-provnzlng: talveze, skill-tarvenlng: talbo}
      proto: thalbezon
      gloss: steel
    - forms: {skill-vylarilng: radzimon, skill-provnzlng: radzime, skill-tarvenlng: adzo}
      proto: radzimon
      gloss: copper
    - forms:
        skill-vylarilng: ethlon
        skill-aelendlng: éltheson
        skill-elvndrlng: éltheson
        skill-provnzlng: elteze
        skill-tarvenlng: els
      proto: ethlon
      gloss: gold
    - forms:
        skill-vylarilng: ankron
        skill-aelendlng: ánkhrason
        skill-elvndrlng: ánhrason
        skill-provnzlng: anchraze
        skill-tarvenlng: ankro
      proto: ankron
      gloss: silver
    - forms: {skill-vylarilng: thurdimon, skill-provnzlng: turdime, skill-tarvenlng: turdo}
      proto: thurdimon
      gloss: bronze
    - forms: {skill-vylarilng: malkeza, skill-provnzlng: malcheza, skill-tarvenlng: malka}
      proto: malkeza
      gloss: a hammer
    - forms: {skill-vylarilng: tambandon, skill-provnzlng: tamba, skill-tarvenlng: tambando}
      proto: tambandon
      gloss: a work
    - forms: {skill-vylarilng: verdakis, skill-provnzlng: verdavis, skill-tarvenlng: verdo}
      proto: werdakis
      gloss: a price
    - {forms: {skill-vylarilng: kezilon, skill-tarvenlng: kiézilo}, proto: kezilon, gloss: a wedge}
    - forms: {skill-vylarilng: solkimon, skill-tarvenlng: solko}
      proto: solkimon
      gloss: a weight
    - forms: {skill-vylarilng: thradina, skill-tarvenlng: thrada}
      proto: thradina
      gloss: a scale
    - forms: {skill-vylarilng: yenthizon, skill-provnzlng: jentize, skill-tarvenlng: entho}
      proto: yenthizon
      gloss: wine
    - forms: {skill-vylarilng: thremuzis, skill-provnzlng: tremuzis, skill-tarvenlng: thres}
      proto: thremuzis
      gloss: salt
    - forms: {skill-vylarilng: yormalis, skill-provnzlng: jormalis, skill-tarvenlng: orma}
      proto: yormalis
      gloss: land
    - forms: {skill-vylarilng: polthamis, skill-provnzlng: poltamis, skill-tarvenlng: poltha}
      proto: polthamis
      gloss: a field
    - forms: {skill-vylarilng: kolsama, skill-provnzlng: cholsama, skill-tarvenlng: kolsama}
      proto: kolsama
      gloss: a harvest
    - forms: {skill-vylarilng: kedrilis, skill-provnzlng: chedrilis, skill-tarvenlng: ked}
      proto: kedrilis
      gloss: a sheep
    - forms: {skill-vylarilng: vilaras, skill-provnzlng: vilare}
      proto: wilaras
      gloss: the great river
    - forms: {skill-vylarilng: tholmara, skill-provnzlng: tolmara, skill-tarvenlng: thol}
      proto: tholmara
      gloss: a lake
    - forms: {skill-vylarilng: nebralis, skill-provnzlng: nebralis, skill-tarvenlng: nebra}
      proto: nebralis
      gloss: a valley
    - forms: {skill-vylarilng: kaldrema, skill-provnzlng: kaldrema, skill-tarvenlng: kaldrema}
      proto: kaldrema
      gloss: a wood
    - forms: {skill-vylarilng: nelamis, skill-provnzlng: nelamis, skill-tarvenlng: nelmis}
      proto: nelamis
      gloss: snow
    - forms: {skill-vylarilng: korvathis, skill-provnzlng: korvatis, skill-tarvenlng: korvath}
      proto: korwathis
      gloss: the sun
    - forms: {skill-vylarilng: yalzemis, skill-provnzlng: jalzemis, skill-tarvenlng: als}
      proto: yalzemis
      gloss: the moon
    - forms: {skill-vylarilng: ilthera, skill-provnzlng: iltera, skill-tarvenlng: iltha}
      proto: ilthera
      gloss: a star
    - forms: {skill-vylarilng: thersolis, skill-provnzlng: tersolis, skill-tarvenlng: thersa}
      proto: thersolis
      gloss: an island
    - forms:
        skill-vylarilng: bruzamis
        skill-aelendlng: rudhamis
        skill-elvndrlng: ryedamis
        skill-provnzlng: brudamis
        skill-tarvenlng: brud
      proto: brudhamis
      gloss: blood
    - forms: {skill-vylarilng: kalmethathen, skill-provnzlng: kalmetate, skill-tarvenlng: kalmad}
      proto: kalmethathen
      gloss: to go to the ancestors
    - forms: {skill-vylarilng: rithezon, skill-provnzlng: riteze, skill-tarvenlng: irtho}
      proto: rithezon
      gloss: a wound
    - forms: {skill-vylarilng: rithezos, skill-provnzlng: ritezande, skill-tarvenlng: irthezo}
      proto: rithezos
      gloss: a physician
    - forms: {skill-vylarilng: zemrolon, skill-provnzlng: demrol, skill-tarvenlng: dembro}
      proto: dhemrolon
      gloss: a tomb
    - forms: {skill-vylarilng: zemrolara, skill-provnzlng: demrolara, skill-tarvenlng: dembrolara}
      proto: dhemrolara
      gloss: a city of the dead
    - forms: {skill-vylarilng: oltrema, skill-provnzlng: oltrema, skill-tarvenlng: oltra}
      proto: oltrema
      gloss: a month
    - forms: {skill-vylarilng: nelameza, skill-provnzlng: nelameza, skill-tarvenlng: nelza}
      proto: nelameza
      gloss: winter
    - forms: {skill-vylarilng: lordemon, skill-provnzlng: lordeme, skill-tarvenlng: lordo}
      proto: lordemon
      gloss: a festival
    - forms: {skill-vylarilng: zerthazis, skill-provnzlng: zertazis, skill-tarvenlng: zertha}
      proto: zerthazis
      gloss: the founding
    - forms: {skill-vylarilng: sorimathen, skill-provnzlng: sorimate, skill-tarvenlng: sormad}
      proto: sorimathen
      gloss: to sing
    - {forms: {skill-vylarilng: sorimos, skill-provnzlng: sorime}, proto: sorimos, gloss: a poet}
    - forms: {skill-vylarilng: dokathen, skill-tarvenlng: dokad}
      proto: dokathen
      gloss: to speak
    - forms: {skill-vylarilng: dokemon, skill-provnzlng: docheme, skill-tarvenlng: dokme}
      proto: dokemon
      gloss: an oration
    - forms: {skill-vylarilng: tharlema, skill-provnzlng: tarlema, skill-tarvenlng: tharlema}
      proto: tharlema
      gloss: a tongue
    - forms: {skill-vylarilng: lambizon, skill-provnzlng: lambize}
      proto: lambizon
      gloss: a word
    - forms: {skill-vylarilng: semarzon, skill-provnzlng: semarze, skill-tarvenlng: semzo}
      proto: semarzon
      gloss: a letter
    - forms: {skill-vylarilng: marendis, skill-provnzlng: marendis, skill-tarvenlng: marendis}
      proto: marendis
      gloss: wisdom
    - forms: {skill-vylarilng: marendalon, skill-provnzlng: marendal}
      proto: marendalon
      gloss: a school
    - forms: {skill-vylarilng: marendos, skill-provnzlng: marende}
      proto: marendos
      gloss: a master
    - forms: {skill-vylarilng: kezdathen, skill-provnzlng: chesdate, skill-tarvenlng: kezdad}
      proto: kezdathen
      gloss: to know
    - forms: {skill-vylarilng: lorezathen, skill-provnzlng: lorezate}
      proto: lorezathen
      gloss: to read aloud
    - forms: {skill-vylarilng: olzemon, skill-tarvenlng: oldemo}
      proto: oldhemon
      gloss: a history
    - forms: {skill-vylarilng: thordima, skill-provnzlng: tordima, skill-tarvenlng: thórdima}
      proto: thordima
      gloss: magic
    - forms: {skill-vylarilng: thordimos, skill-provnzlng: tordime, skill-tarvenlng: thordimo}
      proto: thordimos
      gloss: a mage
    - forms: {skill-vylarilng: dorandar, skill-provnzlng: dorandar, skill-tarvenlng: dorandar}
      proto: dorandar
      gloss: enduring
    - {forms: {skill-vylarilng: lokathen, skill-tarvenlng: lokad}, proto: lokathen, gloss: to come}
    - {forms: {skill-vylarilng: tigathen, skill-tarvenlng: tigad}, proto: tigathen, gloss: to go}
    - {forms: {skill-vylarilng: okethen, skill-tarvenlng: oked}, proto: okethen, gloss: to see}
    - forms: {skill-vylarilng: daimathen, skill-provnzlng: daimate, skill-tarvenlng: daimad}
      proto: daimathen
      gloss: to give
    - forms: {skill-vylarilng: lozethen, skill-provnzlng: lozete, skill-tarvenlng: lozed}
      proto: lozethen
      gloss: to carry
    - forms: {skill-vylarilng: nembethen, skill-provnzlng: nembete, skill-tarvenlng: nembed}
      proto: nembethen
      gloss: to fall
    - {forms: {skill-vylarilng: urzithen, skill-tarvenlng: urzid}, proto: urzithen, gloss: to rise}
    - forms: {skill-vylarilng: gaurathen, skill-provnzlng: gaurate, skill-tarvenlng: gaurad}
      proto: ghaurathen
      gloss: to build
    - forms: {skill-vylarilng: thaurathen, skill-provnzlng: taurate, skill-tarvenlng: thaurad}
      proto: thaurathen
      gloss: to keep
    - forms: {skill-vylarilng: thernathen, skill-provnzlng: ternate, skill-tarvenlng: thernad}
      proto: thernathen
      gloss: to live
    - forms: {skill-vylarilng: felzur, skill-provnzlng: felzur, skill-tarvenlng: helza}
      proto: felzur
      gloss: four
    - forms: {skill-vylarilng: yolemiks, skill-provnzlng: jolemis, skill-tarvenlng: olmi}
      proto: yolemiks
      gloss: five
    - forms: {skill-vylarilng: ranethur, skill-provnzlng: raetur, skill-tarvenlng: neth}
      proto: ranethur
      gloss: seven
    - forms: {skill-vylarilng: zorimaks, skill-provnzlng: zorimas, skill-tarvenlng: zorma}
      proto: zorimaks
      gloss: eight
    - forms: {skill-vylarilng: dorekis, skill-provnzlng: dorechis, skill-tarvenlng: dorke}
      proto: dorekis
      gloss: twelve
    - forms: {skill-vylarilng: thambezur, skill-provnzlng: tambezur, skill-tarvenlng: thamba}
      proto: thambezur
      gloss: a thousand
    - forms:
        skill-vylarilng: en
        skill-aelendlng: en
        skill-elvndrlng: en
        skill-provnzlng: jo
        skill-tarvenlng: en
      proto: en
      gloss: I
    - forms: {skill-vylarilng: ko, skill-aelendlng: kho, skill-provnzlng: cho, skill-tarvenlng: ko}
      proto: ko
      gloss: "you, one person"
    - forms: {skill-vylarilng: ul, skill-aelendlng: ul, skill-elvndrlng: ul, skill-provnzlng: ul}
      proto: ul
      gloss: and
    - forms: {skill-vylarilng: ar, skill-aelendlng: ar, skill-elvndrlng: ar, skill-provnzlng: ar}
      proto: ar
      gloss: not
    - forms: {skill-vylarilng: ir, skill-aelendlng: ir, skill-elvndrlng: ir, skill-provnzlng: ir}
      proto: ir
      gloss: "in, into"
    - forms: {skill-vylarilng: us, skill-aelendlng: us, skill-elvndrlng: us, skill-provnzlng: us}
      proto: us
      gloss: over
  tongues:
    - {tag: vylari, meaning: a Vylari name, language: skill-vylarilng}
    - {tag: kept, meaning: "a loanword kept in its source tongue's spelling, by ruling"}
    - {tag: translation, meaning: a name given in the language of these pages}
    - {tag: exonym:<tongue>, meaning: "a name another people gives, in the tongue named"}
    - tag: other:<tongue>
      meaning: "a name in another tongue of the setting, as its speakers give it"
    - {tag: other, meaning: a name in no tongue these pages name}
    - {tag: ancient, meaning: "a letter of ancient Vylari"}
  register:
    - {name: Varokh, tongue: vylari}
    - {name: Yalzeme, tongue: vylari}
    - {name: Yalzizon, tongue: vylari}
    - {name: Nizelar, tongue: vylari}
    - {name: Taruzelia, tongue: vylari}
    - {name: Vylari, tongue: vylari}
    - {name: Karzen Ethlos Urzelthos, tongue: vylari}
    - {name: Felzen Hiltheren, tongue: vylari}
    - {name: Kervaron, tongue: vylari}
    - {name: Thordimalon, tongue: vylari}
    - {name: Revothar Baremzator, tongue: vylari}
    - {name: The Order, tongue: translation}
    - {name: The Arcane Order, tongue: translation}
    - {name: Kosthemoi, tongue: vylari}
    - {name: Galethoi, tongue: vylari}
    - {name: Thermoi, tongue: vylari}
    - {name: Marendoi, tongue: vylari}
    - {name: Holmarendoi, tongue: vylari}
    - {name: Zetmarendos, tongue: vylari}
    - {name: Thiruthriman, tongue: vylari}
    - {name: Antelen, tongue: vylari}
    - {name: Epistémion, tongue: other:helonic}
    - {name: The Academy, tongue: translation}
    - {name: Academy of Knowledge, tongue: translation}
    - {name: Epistémion, tongue: other:helonic}
    - {name: Student, tongue: translation}
    - {name: Scholar, tongue: translation}
    - {name: Senior Scholar, tongue: translation}
    - {name: Pelthralon, tongue: vylari}
    - {name: Magistrates of the Wards, tongue: translation}
    - {name: Struck from the Roll, tongue: translation}
    - {name: Ward Clerk, tongue: translation}
    - {name: Inspector, tongue: translation}
    - {name: Peltros, tongue: vylari}
    - {name: Keeper of the Weights, tongue: translation}
    - {name: Clerk of the Roll, tongue: translation}
    - {name: The Tarmeks Orzan, tongue: vylari}
    - {name: The Imperial Treasury, tongue: translation}
    - {name: The Tarmeks, tongue: vylari}
    - {name: Dismissed, tongue: translation}
    - {name: Rozimos, tongue: vylari}
    - {name: Theronos, tongue: vylari}
    - {name: Therkalen, tongue: vylari}
    - {name: Orsan, tongue: vylari}
    - {name: Tarkelos, tongue: vylari}
    - {name: Holrozimos, tongue: vylari}
    - {name: Orsan of Treasury Operations, tongue: translation}
    - {name: Orsan of the Script, tongue: translation}
    - {name: Orsan of the Strongroom, tongue: translation}
    - {name: The Danvar, tongue: vylari}
    - {name: The Bankers' Guild, tongue: translation}
    - {name: The Moneylenders' Guild, tongue: translation}
    - {name: Expelled, tongue: translation}
    - {name: Individual Moneylender, tongue: translation}
    - {name: Lesser House, tongue: translation}
    - {name: Great House, tongue: translation}
    - {name: Danvor Maldor, tongue: vylari}
    - {name: Danvel, tongue: vylari}
    - {name: The Tolvan, tongue: vylari}
    - {name: The Fiscal Court, tongue: translation}
    - {name: The Imperial Tax Court, tongue: translation}
    - {name: Karvan, tongue: vylari}
    - {name: Kurthalos, tongue: vylari}
    - {name: Talkor, tongue: vylari}
    - {name: Holrozimos of the Tolvan, tongue: translation}
    - {name: Verdan Orzara, tongue: vylari}
    - {name: Orzara Courts, tongue: translation}
    - {name: Sentor, tongue: vylari}
    - {name: Veramus, tongue: vylari}
    - {name: Veramus of Law, tongue: translation}
    - {name: Veramus of Order, tongue: translation}
    - {name: Veramus of the Grain, tongue: translation}
    - {name: Veramus of Works and Waters, tongue: translation}
    - {name: Veramus of the Rolls, tongue: translation}
    - {name: Seldan, tongue: vylari}
    - {name: The Vylarian Senate, tongue: translation}
    - {name: The Senate, tongue: translation}
    - {name: Ankren, tongue: vylari}
    - {name: Ethlen, tongue: vylari}
    - {name: The Warrior's Circle of the Dunhara Tribes, tongue: translation}
    - {name: Tigh'Baharan, tongue: other:dunhari}
    - {name: The Circle of the Mighty, tongue: translation}
    - {name: The Quarterly Hall, tongue: translation}
    - {name: Dunhara Warrior's Circle, tongue: translation}
    - {name: The Warrior's Circle, tongue: translation}
    - {name: Cast Out, tongue: translation}
    - {name: Bahar, tongue: other:dunhari}
    - {name: Vast, tongue: other:dunhari}
    - {name: Voice of the Quarter, tongue: translation}
    - {name: The Tevran Maldor, tongue: vylari}
    - {name: Great College of Guilds, tongue: translation}
    - {name: Revoked, tongue: translation}
    - {name: Apprentice, tongue: translation}
    - {name: Guildmaster, tongue: translation}
    - {name: Kelros, tongue: vylari}
    - {name: Tevraks, tongue: vylari}
    - {name: Tarkelos of the Tevran, tongue: translation}
    - {name: The Sorvan, tongue: vylari}
    - {name: The Imperial Guard, tongue: translation}
    - {name: Lieutenant, tongue: translation}
    - {name: Captain, tongue: translation}
    - {name: The Vylarian Military, tongue: translation}
    - {name: The Imperial Army of Vylaria, tongue: translation}
    - {name: The Legions of the Orzas, tongue: translation}
    - {name: The Legions, tongue: translation}
    - {name: Yunar, tongue: vylari}
    - {name: Vandor, tongue: vylari}
    - {name: Antar, tongue: vylari}
    - {name: Kelor, tongue: vylari}
    - {name: Masar, tongue: vylari}
    - {name: Nokar, tongue: vylari}
    - {name: Sekor, tongue: vylari}
    - {name: Hundar, tongue: vylari}
    - {name: Hundar Kerval, tongue: vylari}
    - {name: Hundar Maldor, tongue: vylari}
    - {name: Kadel, tongue: vylari}
    - {name: Lusel, tongue: vylari}
    - {name: Lusar, tongue: vylari}
    - {name: Vallar, tongue: vylari}
    - {name: Lusar Maldor, tongue: vylari}
    - {name: Vandraks, tongue: vylari}
    - {name: Bandren, tongue: vylari}
    - {name: Kamdor, tongue: vylari}
    - {name: Dukran, tongue: vylari}
    - {name: Sodar Orzas, tongue: vylari}
    - {name: Parthan, tongue: vylari}
    - {name: Gelmalor, tongue: vylari}
    - {name: Cashiered, tongue: translation}
    - {name: Sorvar, tongue: vylari}
    - {name: Sergeant, tongue: translation}
    - {name: Officer of the Guard, tongue: translation}
    - {name: Watch-Captain, tongue: translation}
    - {name: Captain of the Palace Detail, tongue: translation}
    - {name: Ailema, tongue: vylari}
    - {name: Keramyes, tongue: vylari}
    - {name: Branakis, tongue: vylari}
    - {name: Kaseranis, tongue: vylari}
    - {name: Branalenis, tongue: vylari}
    - {name: Barkalas, tongue: vylari}
    - {name: Kassa, tongue: vylari}
    - {name: Verris, tongue: vylari}
    - {name: The Harbor Factor, tongue: translation}
    - {name: The Empire's Hand on the Southern Shore, tongue: translation}
    - {name: Kivella, tongue: vylari}
    - {name: Serenthis, tongue: vylari}
    - {name: Domrithas, tongue: vylari}
    - {name: Vishardas, tongue: vylari}
    - {name: Erithon, tongue: vylari}
    - {name: Uselindas, tongue: vylari}
    - {name: Goremadanis, tongue: vylari}
    - {name: Herendanis, tongue: vylari}
    - {name: Harkis, tongue: vylari}
    - {name: Baremides, tongue: vylari}
    - {name: Kalestratos, tongue: vylari}
    - {name: Zarkedis, tongue: vylari}
    - {name: Koremdanis, tongue: vylari}
    - {name: Barkratis, tongue: vylari}
    - {name: Aimilon, tongue: vylari}
    - {name: Visbari, tongue: vylari}
    - {name: Lukeros, tongue: vylari}
    - {name: Makithos, tongue: vylari}
    - {name: Vanardis, tongue: vylari}
    - {name: Mirene, tongue: vylari}
    - {name: Kalethos, tongue: vylari}
    - {name: The Mendicant Priestess of the Black Flame, tongue: translation}
    - {name: Filezos, tongue: vylari}
    - {name: Klethes, tongue: vylari}
    - {name: The Fire-Sworn Strategist, tongue: translation}
    - {name: Zadros, tongue: vylari}
    - {name: Damates, tongue: vylari}
    - {name: Zerofon, tongue: vylari}
    - {name: Kalmakanes, tongue: vylari}
    - {name: Arkalordas Kalmakanes, tongue: vylari}
    - {name: Arzanalas Baredas, tongue: vylari}
    - {name: Ashara Harordas, tongue: vylari}
    - {name: Azato Damzanis, tongue: vylari}
    - {name: Azendas Damator, tongue: vylari}
    - {name: Brakos Harlanis, tongue: vylari}
    - {name: Brazenlas Vanamyes, tongue: vylari}
    - {name: Kegan Zerazendis, tongue: vylari}
    - {name: Dekela Baremzates, tongue: vylari}
    - {name: Garlindris Korazenis, tongue: vylari}
    - {name: Gorazendis Bares, tongue: vylari}
    - {name: Goremdanis Sonyardis, tongue: vylari}
    - {name: Harekos Baremzator, tongue: vylari}
    - {name: Harperos Varkratis, tongue: vylari}
    - {name: Harfos Orkarenis, tongue: vylari}
    - {name: Imarakis Zerazendis, tongue: vylari}
    - {name: Kadmeros Harordis, tongue: vylari}
    - {name: Kalendris Korkalenis, tongue: vylari}
    - {name: Kesara Kaselmakis, tongue: vylari}
    - {name: Lagora Kerazendis, tongue: vylari}
    - {name: Lothona Harlanis, tongue: vylari}
    - {name: Mentra Keramyes, tongue: vylari}
    - {name: Mitharakis Gerazendis, tongue: vylari}
    - {name: Piranes Zeralmakor, tongue: vylari}
    - {name: Sifranos Varenlas, tongue: vylari}
    - {name: Vanadis Kaseranis, tongue: vylari}
    - {name: Zathron Kaseranis, tongue: vylari}
    - {name: Zenokos Bardas, tongue: vylari}
    - {name: Vylarian, tongue: translation}
    - {name: Elissara, tongue: vylari}
    - {name: Tevran of Elissara, tongue: translation}
    - {name: Tevran Member, tongue: translation}
    - {name: Alessa, tongue: vylari}
    - {name: Alessar, tongue: vylari}
    - {name: Belekos, tongue: vylari}
    - {name: Kalvaris, tongue: vylari}
    - {name: Korvenara, tongue: vylari}
    - {name: Lentora, tongue: vylari}
    - {name: Ostenna, tongue: vylari}
    - {name: Province of Alessa, tongue: translation}
    - {name: Proscribed, tongue: translation}
    - {name: Slave, tongue: translation}
    - {name: Freedman, tongue: translation}
    - {name: Palvethos, tongue: vylari}
    - {name: Citizen, tongue: translation}
    - {name: Gulmen, tongue: vylari}
    - {name: Kurthos, tongue: vylari}
    - {name: Tavalen, tongue: vylari}
    - {name: Governor, tongue: translation}
    - {name: Therkos, tongue: vylari}
    - {name: Felzos, tongue: vylari}
    - {name: Karezos, tongue: vylari}
    - {name: Zoralus, tongue: vylari}
    - {name: Pozerus, tongue: vylari}
    - {name: Tavemos, tongue: vylari}
    - {name: Zalvos, tongue: vylari}
    - {name: Delara, tongue: vylari, built: [del-, -ara]}
    - {name: Velisara, tongue: vylari}
    - {name: Vennara, tongue: vylari}
    - {name: The Vylarian Calendar, tongue: translation}
    - {name: Vylarian Reckoning, tongue: translation}
    - {name: Lizelandi, tongue: vylari, built: [lizel-, -andi]}
    - {name: Lusenar, tongue: vylari}
    - {name: Pozerandi, tongue: vylari, built: [pozer-, -andi]}
    - {name: Brazemandi, tongue: vylari, built: [brazem-, -andi]}
    - {name: Thumbandi, tongue: vylari, built: [thumb-, -andi]}
    - {name: Marendandi, tongue: vylari, built: [marend-, -andi]}
    - {name: Elthezandi, tongue: vylari, built: [elthez-, -andi]}
    - {name: Karnavar, tongue: vylari}
    - {name: Morvanandi, tongue: vylari}
    - {name: Kalmethandi, tongue: vylari, built: [kalmeth-, -andi]}
    - {name: Zunelandi, tongue: vylari, built: [zunel-, -andi]}
    - {name: Kalpezandi, tongue: vylari, built: [kalpez-, -andi]}
    - {name: Zunelas, tongue: vylari, built: [zunel-, -as]}
    - {name: Pozeras, tongue: vylari, built: [pozer-, -as]}
    - {name: Marendas, tongue: vylari, built: [marend-, -as]}
    - {name: Brazemas, tongue: vylari, built: [brazem-, -as]}
    - {name: Lizelas, tongue: vylari, built: [lizel-, -as]}
    - {name: Newday, tongue: translation}
    - {name: Tillday, tongue: translation}
    - {name: Growday, tongue: translation}
    - {name: Harvestday, tongue: translation}
    - {name: Reapday, tongue: translation}
    - {name: Slowday, tongue: translation}
    - {name: Setday, tongue: translation}
    - {name: Spring, tongue: translation}
    - {name: Summer, tongue: translation}
    - {name: Fall, tongue: translation}
    - {name: Winter, tongue: translation}
    - {name: New Years Day, tongue: translation}
    - {name: Before the Founding, tongue: translation}
    - {name: After the Founding, tongue: translation}
    - {name: Holy Kingdom of Nartun, tongue: translation}
    - {name: Outlaw, tongue: translation}
    - {name: Unfree, tongue: translation}
    - {name: Freeman, tongue: translation}
    - {name: Gentry, tongue: translation}
    - {name: Knight, tongue: translation}
    - {name: Lesser Nobility, tongue: translation}
    - {name: Greater Nobility, tongue: translation}
    - {name: Prince or Princess of the Blood, tongue: translation}
    - {name: Sovereign, tongue: translation}
    - {name: King, tongue: translation}
    - {name: Queen, tongue: translation}
    - {name: Queen Consort, tongue: translation}
    - {name: Prince Consort, tongue: translation}
    - {name: Prince, tongue: translation}
    - {name: Princess, tongue: translation}
    - {name: Chancellor, tongue: translation}
    - {name: Treasurer, tongue: translation}
    - {name: Steward, tongue: translation}
    - {name: Constable, tongue: translation}
    - {name: Marshal, tongue: translation}
    - {name: Chamberlain, tongue: translation}
    - {name: Justiciar, tongue: translation}
    - {name: Butler, tongue: translation}
    - {name: Admiral, tongue: translation}
    - {name: Sheriff, tongue: translation}
    - {name: Coroner, tongue: translation}
    - {name: Escheator, tongue: translation}
    - {name: Warden of the March, tongue: translation}
    - {name: Castellan, tongue: translation}
    - {name: Forester, tongue: translation}
    - {name: Purveyor, tongue: translation}
    - {name: Regent, tongue: translation}
    - {name: Privy Councilor, tongue: translation}
    - {name: King of Arms, tongue: translation}
    - {name: Herald, tongue: translation}
    - {name: Master of the Horse, tongue: translation}
    - {name: Master of the Hunt, tongue: translation}
    - {name: Falconer, tongue: translation}
    - {name: Banneret, tongue: translation}
    - {name: Serjeant, tongue: translation}
    - {name: Manorial Officer, tongue: translation}
    - {name: High Priest, tongue: translation}
    - {name: Royal Chaplain, tongue: translation}
    - {name: Inquisitor, tongue: translation}
    - {name: Aravantara, tongue: vylari}
    - {name: Ashenmere, tongue: other}
    - {name: Kervalara, tongue: vylari}
    - {name: Kelborara, tongue: vylari}
    - {name: Hilen, tongue: vylari}
    - {name: Messora, tongue: vylari}
    - {name: Olivenna, tongue: vylari}
    - {name: Province of Hilen, tongue: translation}
    - {name: Polthara, tongue: vylari, built: [polth-, -ara]}
    - {name: Vindara, tongue: vylari}
    - {name: Ombalon, tongue: vylari}
    - {name: Court of the Academy, tongue: translation}
    - {name: Thaurzurgalis, tongue: vylari, built: [thaur-, zurgalis]}
    - {name: The Guard Camp, tongue: translation}
    - {name: Rathauna Melvar, tongue: vylari}
    - {name: The Racecourse, tongue: translation}
    - {name: Orzara City, tongue: translation}
    - {name: Orzara, tongue: vylari, built: [orz-, -ara]}
    - {name: The Great City, tongue: translation}
    - {name: Grand Orrery, tongue: translation}
    - {name: Mechanical Court, tongue: translation}
    - {name: Palvar, tongue: vylari}
    - {name: The Grand Palace, tongue: translation}
    - {name: Six Hills, tongue: translation}
    - {name: Theatre District, tongue: translation}
    - {name: Arvel, tongue: vylari}
    - {name: Eagle Hill, tongue: translation}
    - {name: Selvin, tongue: vylari}
    - {name: the Laurel, tongue: translation}
    - {name: Antel, tongue: vylari}
    - {name: The Old Hill, tongue: translation}
    - {name: Necropolis of Orzara, tongue: translation}
    - {name: Sarkena Dorekis, tongue: vylari, built: [sarkena, dorekis]}
    - {name: Temple of the Twelve, tongue: translation}
    - {name: Arvon, tongue: vylari}
    - {name: Inner City, tongue: translation}
    - {name: Eagle City, tongue: translation}
    - {name: Dolvar, tongue: vylari}
    - {name: Zargonara, tongue: vylari}
    - {name: Korras, tongue: vylari}
    - {name: Moktur, tongue: vylari}
    - {name: Milanthos, tongue: vylari}
    - {name: Edrenburg, tongue: other}
    - {name: Pinnhald, tongue: other}
    - {name: Province of Moktur, tongue: translation}
    - {name: Ulthora, tongue: vylari}
    - {name: Stennvold, tongue: other}
    - {name: Tirellan, tongue: vylari}
    - {name: Nartun, tongue: vylari}
    - {name: Nartun Kingdom, tongue: translation}
    - {name: River Vylaris, tongue: translation}
    - {name: Soraks, tongue: vylari}
    - {name: Bralvik, tongue: other:nordmal}
    - {name: Ilthera Salken, tongue: vylari, built: [ilthera, salk-, -en]}
    - {name: Sorima Salken, tongue: vylari, built: [sorima, salk-, -en]}
    - {name: Holvethos Marendates, tongue: vylari, built: [holvethos, marend-, -ates]}
    - {name: Zenothas Varelis, tongue: vylari, built: [zenoth-, -as, varel-, -is]}
    - {name: The Winter of the Banked Fire, tongue: translation}
    - {name: The Burning of the Bay, tongue: translation}
    - {name: Hvirnmil's Door-Faring, tongue: translation}
    - {name: Kastamar, tongue: vylari}
    - {name: Tholkezora, tongue: vylari, built: [tholkez-, -ora]}
    - {name: Delalara, tongue: vylari}
    - {name: Volkemara, tongue: vylari, built: [volkem-, -ara]}
    - {name: Province of Salkalon, tongue: translation}
    - {name: Thremuzara, tongue: vylari, built: [thremuz-, -ara]}
    - {name: Kurzalora, tongue: vylari, built: [kurzal-, -ora]}
    - {name: Therkara, tongue: vylari}
    - {name: Salkalon, tongue: vylari, built: [salk-, -alon]}
    - {name: Nizelenna, tongue: vylari, built: [nizel-, -enna]}
    - {name: Satherenna, tongue: vylari, built: [sater-, -enna]}
    - {name: Zambelenna, tongue: vylari, built: [zambel-, -enna]}
    - {name: Thersolenna, tongue: vylari, built: [thersol-, -enna]}
    - {name: Tholmarenna, tongue: vylari, built: [tholmar-, -enna]}
    - {name: Talothenna, tongue: vylari, built: [taloth-, -enna]}
    - {name: Ornethenna, tongue: vylari, built: [orneth-, -enna]}
    - {name: Palgezenna, tongue: vylari, built: [palgez-, -enna]}
    - {name: Huradenna, tongue: vylari, built: [hurad-, -enna]}
    - {name: Kedrilenna, tongue: vylari, built: [kedril-, -enna]}
    - {name: Lenthizenna, tongue: vylari, built: [lenthiz-, -enna]}
    - {name: Iltherenna, tongue: vylari, built: [ilther-, -enna]}
    - {name: Vylaria Region, tongue: translation}
    - {name: Vylarian Empire, tongue: translation}
    - {name: Orzas, tongue: vylari}
    - {name: Consort of the Orzas, tongue: translation}
    - {name: Tavos, tongue: vylari}
    - {name: Vornos, tongue: vylari}
    - {name: Lusos, tongue: vylari}
    - {name: Thaurusos, tongue: vylari}
    - {name: Tavtherkos, tongue: vylari}
    - {name: Sarnaks Maldor, tongue: vylari}
    - {name: Vylari Language, tongue: translation}
    - {name: Vylari, tongue: translation}
    - {name: Semaron Script, tongue: translation}
    - {name: Semaron, tongue: vylari}
    - {name: Tharavarkon Script, tongue: translation}
    - {name: Tharavarkon, tongue: vylari}
    - {name: The Fenced Ground, tongue: translation}
    - {name: The Therona Ground, tongue: translation}
    - {name: The Bare Field, tongue: translation}
    - {name: Nartun Refuses the Empire, tongue: translation}
    - {name: The Anointing of Daronos, tongue: translation}
    - {name: The Break with the Orkaima, tongue: translation}
    - {name: The Archive Fire, tongue: translation}
    - {name: The Burning of the Rolls, tongue: translation}
    - {name: The Eastern Line, tongue: translation}
    - {name: The Hill Forts of Taruzel, tongue: translation}
    - {name: The Hunting Years, tongue: translation}
    - {name: The Enforcement of the Monopoly, tongue: translation}
    - {name: The Raising of the Eagle City, tongue: translation}
    - {name: The Walling of Arvel, tongue: translation}
    - {name: The Moving of the Senate, tongue: translation}
    - {name: The Veterans' Law, tongue: translation}
    - {name: The Law of Arkanamos, tongue: translation}
    - {name: The Soldier's Bargain, tongue: translation}
    - {name: The Western Wars, tongue: translation}
    - {name: The Three Centuries of Conquest, tongue: translation}
    - {name: The Vylarian Ages, tongue: translation}
    - {name: The Eight Ages of the Empire, tongue: translation}
    - {name: The Kings and the Republic, tongue: translation}
    - {name: The First Orzoi, tongue: translation}
    - {name: The Age of Conquest, tongue: translation}
    - {name: The Years of Three Eagles, tongue: translation}
    - {name: The Restoration, tongue: translation}
    - {name: The Drift, tongue: translation}
    - {name: The Core, tongue: translation}
    - {name: After the Shoals, tongue: translation}
    - {name: The Delta Expedition, tongue: translation}
    - {name: The Crossing to the Delta, tongue: translation}
    - {name: the Vylarian Conquest, tongue: translation}
    - {name: The Broken Succession, tongue: translation}
    - {name: The Three Orzoi, tongue: translation}
    - {name: The Battle of Olkassa, tongue: translation}
    - {name: Olkassa, tongue: vylari}
    - {name: The Field of Both Eagles, tongue: translation}
    - {name: The Blood-field of Olkassa, tongue: translation}
    - {name: The Great Burning, tongue: translation}
    - {name: The Six Days, tongue: translation}
    - {name: The Burning of the Old Hill, tongue: translation}
    - {name: The Accession of Makandas, tongue: translation}
    - {name: House Helarkales, tongue: translation}
    - {name: the felzos's year, tongue: translation}
    - {name: The Edicts of Arzanas, tongue: translation}
    - {name: The Great Refounding, tongue: translation}
    - {name: The Refounding of Arzanas, tongue: translation}
    - {name: the Refounding, tongue: translation}
    - {name: Adept, tongue: translation}
    - {name: Adherent, tongue: translation}
    - {name: Anathema, tongue: translation}
    - {name: Ardin, tongue: vylari}
    - {name: Iltheron, tongue: vylari}
    - {name: Varthas, tongue: vylari, built: [varth-, -as]}
    - {name: Dolveras, tongue: vylari, built: [dolver-, -as]}
    - {name: Tavemas, tongue: vylari, built: [tavem-, -as]}
    - {name: Dulmekas, tongue: vylari, built: [dulmek-, -as]}
    - {name: Kalpezas, tongue: vylari, built: [kalpez-, -as]}
    - {name: Vonthas, tongue: vylari, built: [vonth-, -as]}
    - {name: Thradinas, tongue: vylari, built: [thradin-, -as]}
    - {name: Prenkas, tongue: vylari, built: [prenk-, -as]}
    - {name: Ithrolas, tongue: vylari, built: [ithrol-, -as]}
    - {name: Grelthas, tongue: vylari, built: [grelth-, -as]}
    - {name: Sirethas, tongue: vylari, built: [sireth-, -as]}
    - {name: Ulfas, tongue: vylari, built: [ulf-, -as]}
    - {name: Solden, tongue: vylari}
    - {name: Bit, tongue: translation}
    - {name: Frenkos, tongue: vylari}
    - {name: Notran, tongue: vylari}
    - {name: Drum-Keeper, tongue: translation}
    - {name: Elder, tongue: translation}
    - {name: Elder Shaman, tongue: translation}
    - {name: Envoy, tongue: translation}
    - {name: First of the Tradition, tongue: translation}
    - {name: Guardian of the Sacred Site, tongue: translation}
    - {name: High Hand, tongue: translation}
    - {name: Zemor Hodhis, tongue: other:helonic}
    - {name: Initiate, tongue: translation}
    - {name: Initiator, tongue: translation}
    - {name: Keeper of the Grimoires, tongue: translation}
    - {name: Keeper of the Tally, tongue: translation}
    - {name: Keeper of the Tradition, tongue: translation}
    - {name: Keeper of the Ways, tongue: translation}
    - {name: Kentra, tongue: vylari}
    - {name: Marendos, tongue: vylari}
    - {name: Mask-Maker, tongue: translation}
    - {name: Master Scribe, tongue: translation}
    - {name: Master of the Art, tongue: translation}
    - {name: Ogdel, tongue: vylari}
    - {name: Lorezos, tongue: vylari}
    - {name: Probationer, tongue: translation}
    - {name: Sekeros, tongue: vylari}
    - {name: Revoked License, tongue: translation}
    - {name: Scribe, tongue: translation}
    - {name: Spirit-Speaker, tongue: translation}
    - {name: Spirit-shunned, tongue: translation}
    - {name: Supplicant, tongue: translation}
    - {name: The Centre, tongue: translation}
    - {name: The Centred, tongue: translation}
    - {name: The Guild of Imperial Letters, tongue: translation}
    - {name: The Imperial Scribal Guild, tongue: translation}
    - {name: The Thizaron, tongue: vylari}
    - {name: The Six Ways, tongue: translation}
    - {name: The Vylarian Scribal Guild, tongue: translation}
    - {name: Uninitiated, tongue: translation}
    - {name: Vessel, tongue: translation}
    - {name: Vylaria Adventurer's Guide, tongue: translation}
    - {name: Vylarian Coinage, tongue: translation}
    - {name: Vylarian Currency, tongue: translation}
    - {name: Warden of the Threshold, tongue: translation}
    - {name: Zemor Hodhis Incantations, tongue: translation}
    - {name: The Battle of the Black Marsh, tongue: translation}
    - {name: The Black Marsh, tongue: translation}
    - {name: The Blood-field of the Black Marsh, tongue: translation}
    - {name: The Settlement of the Crowns, tongue: translation}
    - {name: The Post-Imperial Settlement, tongue: translation}
    - {name: The Settlement of Azénales, tongue: translation}
    - {name: House Mardovanes, tongue: translation}
    - {name: The Loss of the Twelfth, tongue: translation}
    - {name: The Kervaron Campaign, tongue: translation}
    - {name: The Doran Hilvan's Last Winter, tongue: translation}
    - {name: The Twelfth's Last Camp, tongue: translation}
    - {name: The Kervaron Fort, tongue: translation}
    - {name: The Wintering Fort, tongue: translation}
    - {name: The Commission Compromise, tongue: translation}
    - {name: The Examination Reform, tongue: translation}
    - {name: Under Continuing Review, tongue: translation}
    - {name: the insult, tongue: translation}
    - {name: the winter the mountain kept, tongue: translation}
    - {name: the recovery of the eagle, tongue: translation}
    - {name: The Walking of the Line, tongue: translation}
    - {name: The Sixth Book of the Hallowed Boundary, tongue: translation}
    - {name: The Song of the Gold Band, tongue: translation}
    - {name: The Urzelthos's Road-Song, tongue: translation}
    - {name: The Praise of the Masks, tongue: translation}
    - {name: The Oration at Aravantara, tongue: translation}
    - {name: The Morning Call, tongue: translation}
    - {name: The Ninety Stairs, tongue: translation}
    - {name: The Words Kept from the Fire, tongue: translation}
    - {name: The Jurist's Rules, tongue: translation}
    - {name: The Second Reading, tongue: translation}
    - {name: The Ozethos of the Twelfth, tongue: translation}
    - {name: The Evening Songs, tongue: translation}
    - {name: The Songs from the Smoke Tower, tongue: translation}
    - {name: The Guardsmen, tongue: translation}
    - {name: Torvel, tongue: vylari}
    - {name: Mernel, tongue: vylari}
    - {name: Nerval, tongue: vylari}
    - {name: The Tevran, tongue: vylari}
    - {name: Banar, tongue: vylari}
    - {name: Devran, tongue: vylari}
    - {name: Sarnor, tongue: vylari}
    - {name: Sarnaks, tongue: vylari}
    - {name: Lerin, tongue: vylari}
    - {name: Dasken, tongue: vylari}
    - {name: Daskeral, tongue: vylari}
    - {name: Mentara, tongue: vylari}
    - {name: Notral Maldor, tongue: vylari}
    - {name: Lizena, tongue: vylari}
    - {name: Sirela, tongue: vylari}
    - {name: Valmena, tongue: vylari}
    - {name: Nirvena, tongue: vylari}
    - {name: Dunir, tongue: vylari}
    - {name: Ozel, tongue: vylari}
    - {name: Bravsarnor, tongue: vylari}
    - {name: Bravsar, tongue: vylari}
    - {name: Bravlir, tongue: vylari}
    - {name: Volsarnor, tongue: vylari}
    - {name: Volsar, tongue: vylari}
    - {name: Sentan, tongue: vylari}
    - {name: Sarnal, tongue: vylari}
    - {name: Volgel, tongue: vylari}
    - {name: Tramar, tongue: vylari}
    - {name: Tramor, tongue: vylari}
    - {name: Kolsarnor, tongue: vylari}
    - {name: Limor, tongue: vylari}
    - {name: Ankelos Satheris, tongue: vylari}
    - {name: Archimandrite Ankelos Satheris, tongue: translation}
    - {name: Doros Melvarandis, tongue: vylari}
    - {name: Lord Doros, tongue: translation}
    - {name: Eltheza Solterates, tongue: vylari}
    - {name: Captain Eltheza Solterates, tongue: translation}
    - {name: Ganothis Dorandates, tongue: vylari}
    - {name: Captain Ganothis Dorandates, tongue: translation}
    - {name: Captain Ganothis, tongue: translation}
    - {name: Tharkos Tharozates, tongue: vylari}
    - {name: Warden Tharkos, tongue: translation}
    - {name: Hiltheris Tholmaris, tongue: vylari}
    - {name: Marendos Hiltheris Tholmaris, tongue: translation}
    - {name: Ilthere Thalurates, tongue: vylari}
    - {name: Lady Ilthere, tongue: translation}
    - {name: Kaldrema Venthelis, tongue: vylari}
    - {name: High Priestess Kaldrema, tongue: translation}
    - {name: Kalmethar Tharkis, tongue: vylari}
    - {name: Baron Kalmethar, tongue: translation}
    - {name: Kauren Iltheris, tongue: vylari}
    - {name: Captain Kauren Iltheris, tongue: translation}
    - {name: Kolsame Linthimis, tongue: vylari}
    - {name: Commander Kolsame, tongue: translation}
    - {name: Kiramos Talothates, tongue: vylari}
    - {name: Prince Kiramos, tongue: translation}
    - {name: Merchant Prince Kiramos, tongue: translation}
    - {name: Korvathos Volkemates, tongue: vylari}
    - {name: Lord Korvathos, tongue: translation}
    - {name: Luvetha Holimandis, tongue: vylari}
    - {name: Melvaris Tharkis, tongue: vylari}
    - {name: Marendos Melvaris, tongue: translation}
    - {name: Nebralen Elthezis, tongue: vylari}
    - {name: Captain Nebralen Elthezis, tongue: translation}
    - {name: Nelama Pirkelis, tongue: vylari}
    - {name: Merchant-Lady Nelama Pirkelis, tongue: translation}
    - {name: Merchant-Lady Nelama, tongue: translation}
    - {name: Orthemis Korvathandis, tongue: vylari}
    - {name: Usos Orthemis Korvathandis, tongue: translation}
    - {name: Pelerar Satheris, tongue: vylari}
    - {name: Swordmaster Pelerar, tongue: translation}
    - {name: Pirkelar Revothandis, tongue: vylari}
    - {name: Village Elder Pirkelar, tongue: translation}
    - {name: Pramiza Thelvaris, tongue: vylari}
    - {name: Lady Pramiza Thelvaris, tongue: translation}
    - {name: Revotha Kalmethis, tongue: vylari}
    - {name: Magistrate Revotha Kalmethis the Strict, tongue: translation}
    - {name: Magistrate Revotha, tongue: translation}
    - {name: Ronethos Zurmelates, tongue: vylari}
    - {name: Field Investigator Ronethos Zurmelates, tongue: translation}
    - {name: Sirema Linthimis, tongue: vylari}
    - {name: Mother Sirema, tongue: translation}
    - {name: Solteros Brazemen, tongue: vylari}
    - {name: Captain Solteros Brazemen, tongue: translation}
    - {name: Sorimar Ronethen, tongue: vylari}
    - {name: Guild Master Sorimar Ronethen, tongue: translation}
    - {name: Talothar Zenothenos, tongue: vylari}
    - {name: Harbormaster Talothar, tongue: translation}
    - {name: Master Harbormaster Talothar, tongue: translation}
    - {name: Thaluros Solterates, tongue: vylari}
    - {name: Master Scriptorium Director Thaluros Solterates, tongue: translation}
    - {name: Master Thaluros, tongue: translation}
    - {name: Tharoza Talothates, tongue: vylari}
    - {name: Commander Tharoza, tongue: translation}
    - {name: Thelvaros Barkratis, tongue: vylari}
    - {name: Lord Thelvaros Barkratis, tongue: translation}
    - {name: Tholmarar Orthemandis, tongue: vylari}
    - {name: Marendos Tholmarar Orthemandis, tongue: translation}
    - {name: Varela Nebralandis, tongue: vylari}
    - {name: Bishop Varela, tongue: translation}
    - {name: Venthelen Kaldremis, tongue: vylari}
    - {name: Captain Kaldremis, tongue: translation}
    - {name: Volkemar Zurmelates, tongue: vylari}
    - {name: Merchant Prince Volkemar Zurmelates, tongue: translation}
    - {name: Zenothen Gurimandis, tongue: vylari}
    - {name: Brother Zenothen, tongue: translation}
    - {name: Zetima Kolsamis, tongue: vylari}
    - {name: Priestess Zetima, tongue: translation}
    - {name: Zurmelos Orthemandis, tongue: vylari}
    - {name: Captain Zurmelos, tongue: translation}
    - {name: Teremos Zenothenos, tongue: vylari}
    - {name: Marendos Teremos, tongue: translation}
    - {name: Pirkelos Holimandis, tongue: vylari}
    - {name: Elder Pirkelos of Milanthos, tongue: translation}
    - {name: Elder Pirkelos, tongue: translation}
    - {name: Sirethos Kolsamis, tongue: vylari}
    - {name: Blazewarden Sirethos, tongue: translation}
    - {name: Hamsarnor, tongue: vylari}
    - {name: Rozimoi, tongue: vylari}
    - {name: Thizarlambizon, tongue: vylari}
    - {name: Tavemyenthamis, tongue: vylari}
    - {name: Elztholmeza, tongue: vylari}
    - {name: Zargelza, tongue: vylari}
    - {name: Zulen Hidalis, tongue: vylari}
    - {name: Zulen Neumenos, tongue: vylari}
    - {name: Zulen Fisera, tongue: vylari}
    - {name: Zulen Pirethos, tongue: vylari}
    - {name: Zulen Sideris, tongue: vylari}
    - {name: Zulen Zefaris, tongue: vylari}
  retired:
    - {form: Murkas, instead: Pozerandi, why: a month named with an echo of an Earth god}
    - {form: Vulcar, instead: Thumbandi, why: a month named with an echo of an Earth god}
    - {form: Venuris, instead: Elthezandi, why: a month named with an echo of an Earth god}
    - {form: Thanaris, instead: Kalmethandi, why: a month named with an echo of an Earth god}
    - {form: Aetheris, instead: Zunelandi, why: a month named with an echo of an Earth god}
    - {form: Janar, instead: Kalpezandi, why: a month named with an echo of an Earth god}
    - {form: Pantheon Aurèldiānum, instead: Sarkena Dorekis, why: the name of an Earth temple}
    - {form: Magnápolis, instead: Orzara, why: a Greek-shaped name for a great city}
    - {form: Magnápolitan, instead: Orzaran, why: a Greek-shaped demonym}
    - {form: Magnápolitans, instead: Orzarans, why: a Greek-shaped demonym}
    - {form: Vald, instead: Salkalon, why: a Norse-shaped name for an imperial province}
    - {form: Valdian, why: a Norse-shaped demonym}
    - {form: Saltholm, instead: Thremuzara, why: a place of Earth}
    - {form: Solheim, instead: Kurzalora, why: a place of Earth}
    - {form: Korsvik, instead: Tholkezora, why: a Norse-shaped name for an imperial town}
    - {form: Ostvar, instead: Volkemara, why: a Norse-shaped name for an imperial town}
    - {form: Zârâ, instead: Eltheza, why: "an Earth personal name, in the name lists"}
    - {form: Nîkôlaos, instead: Kiramar, why: "an Earth personal name, in the name lists"}
    - form: Émmanîôs
      instead: Revothar
      why: "an Earth personal name, in the name lists and a character"
    - {form: Makârîos, instead: Holimar, why: "an Earth personal name, in the name lists"}
    - {form: Martýnos, instead: Melvaren, why: "an Earth personal name, in the name lists"}
    - {form: Patríkês, instead: Teremis, why: "an Earth personal name, in the name lists"}
    - {form: Nestôres, instead: Ankelis, why: "an Earth personal name, in the name lists"}
    - {form: Básilarôs, instead: Iltheros, why: "an Earth personal name, in the name lists"}
    - {form: Záchârês, instead: Zetimar, why: "an Earth personal name, in the name lists"}
    - {form: Pàrthênios, instead: Pelerar, why: "an Earth personal name, in the name lists"}
    - {form: Xántheiôs, instead: Elthezen, why: "an Earth personal name, in the name lists"}
    - {form: Élektòrís, instead: Doranden, why: "an Earth personal name, in the name lists"}
    - {form: Kaprôs, instead: Nizelar, why: "an Earth word, in the name lists"}
    - {form: Màrkîs, instead: Solteris, why: "an Earth personal name, in the name lists"}
    - {form: Armánês, instead: Orthemar, why: "an Earth personal name, in the name lists"}
    - {form: Fûria, instead: Kiramis, why: "an Earth word, in the name lists"}
    - {form: Lànâ, instead: Melvare, why: "an Earth personal name, in the name lists"}
    - {form: Nàdîma, instead: Soltera, why: "an Earth personal name, in the name lists"}
    - {form: Carâ, instead: Peleren, why: "an Earth personal name, in the name lists"}
    - {form: Chârâ, instead: Ankelen, why: "an Earth personal name, in the name lists"}
    - {form: Lôrâ, instead: Teremen, why: "an Earth personal name, in the name lists"}
    - {form: Shânâ, instead: Solkimen, why: "an Earth personal name, in the name lists"}
    - {form: Tôrâ, instead: Revothis, why: "an Earth personal name, in the name lists"}
    - {form: Vêdâ, instead: Holimis, why: "an Earth personal name, in the name lists"}
    - {form: Yânâ, instead: Orteme, why: "an Earth personal name, in the name lists"}
    - {form: Kôrâ, instead: Nizelis, why: "an Earth personal name, in the name lists"}
    - {form: Hârâ, instead: Zetimis, why: "an Earth personal name, in the name lists"}
    - {form: Haremâ, instead: Orthemis, why: "an Earth word, in the name lists"}
    - {form: Silvain, instead: Sóurimel, why: "an Earth word, an Élavendri village"}
    - {form: Ménérva, instead: Marendas, why: an Earth goddess}
    - {form: Ménérvan, instead: Marendasan, why: a demonym built on an Earth goddess}
    - {form: Táranon, instead: Brazemas, why: an Earth god}
    - {form: Táranonic, instead: Brazemasan, why: a demonym built on an Earth god}
    - {form: Flórania, instead: Lizelas, why: an Earth goddess}
    - {form: Flóranian, instead: Lizelasan, why: a demonym built on an Earth goddess}
    - {form: Floralis, instead: Lizelandi, why: a month named with an echo of an Earth goddess}
    - {form: Taranis, instead: Brazemandi, why: a month named with an echo of an Earth god}
    - {form: Menaris, instead: Marendandi, why: a month named with an echo of an Earth goddess}
    - {form: Tibur, instead: Delara, why: a place of Earth}
    - {form: Valdosta, instead: Polthara, why: a place of Earth}
    - {form: Circus Maximus, instead: Rathauna Melvar, why: a place of Earth}
    - {form: Castra Praetoria, instead: Thaurzurgalis, why: a place of Earth}
    - form: Castra
      instead: Thaurzurgalis
      why: "a word of an Earth language, used for the guard's fortress"
    - form: Praetar Augustarum
      instead: Sorvan
      why: "a phrase of an Earth tongue, for the imperial guard"
    - form: Praetorian Prefect
      instead: thaurusos
      why: "a phrase of an Earth tongue, for the guard's commander"
    - {form: Praetorians, instead: Sorvari, why: "a word of an Earth tongue, for the guardsmen"}
    - {form: Praetorian, instead: Sorvar, why: "a word of an Earth tongue, for a guardsman"}
    - {form: Urbs Aquilion, instead: Arvon, why: "a phrase of an Earth tongue, for the inner city"}
    - form: Palatium Magnum
      instead: Palvar
      why: "a phrase of an Earth tongue, for the great palace"
    - {form: Palatium, instead: Palvar, why: "a word of an Earth tongue, for the palace"}
    - {form: Mons Aquila, instead: Arvel, why: "a phrase of an Earth tongue, for the Eagle Hill"}
    - {form: Mons Lauríne, instead: Selvin, why: "a phrase of an Earth tongue, for the Laurel"}
    - {form: Mons Vétus, instead: Antel, why: "a phrase of an Earth tongue, for the Old Hill"}
    - {form: Mons Corónus, instead: Torvel, why: "a phrase of an Earth tongue, for the Coronal"}
    - form: Mons Sápiens
      instead: Mernel
      why: "a phrase of an Earth tongue, for the Scholars' Hill"
    - {form: Mons Rípae, instead: Nerval, why: "a phrase of an Earth tongue, for the River Hill"}
    - {form: Aquila, instead: orkaima, why: "a word of an Earth tongue, for the eagle standard"}
    - form: Pomerium
      instead: thrima
      why: "a word of an Earth tongue, for the city's hallowed boundary"
    - form: Regio Templum
      instead: Vanor
      why: "a phrase of an Earth tongue, for a district of the inner city"
    - form: Regio Palatium
      instead: Palor
      why: "a phrase of an Earth tongue, for a district of the inner city"
    - form: Aerarium Imperii
      instead: Tarmeks Orzan
      why: "a phrase of an Earth tongue, for the imperial treasury"
    - {form: Aerarium, instead: Tarmeks, why: "a word of an Earth tongue, for the treasury"}
    - {form: Aerarii, instead: Tarmeks, why: "a word of an Earth tongue, for the treasury"}
    - form: Collegium Argentariorum
      instead: Danvar
      why: "a phrase of an Earth tongue, for the moneylenders' guild"
    - form: Argentariorum
      instead: Danvar
      why: "a word of an Earth tongue, for the moneylenders' guild"
    - {form: Argentarii, instead: Danvori, why: "a word of an Earth tongue, for the moneylenders"}
    - {form: Argentarius, instead: Danvor, why: "a word of an Earth tongue, for a moneylender"}
    - form: Magnum Collegium
      instead: Tevran Maldor
      why: "a phrase of an Earth tongue, for the college of all guilds"
    - form: Collegium Scribarum Imperii
      instead: Notran
      why: "a phrase of an Earth tongue, for the scribes' guild"
    - form: Princeps Collegii
      instead: Tevraks
      why: "a phrase of an Earth tongue, for the chair of the college of guilds"
    - {form: Collegium, instead: Tevran, why: "a word of an Earth tongue, for a college of guilds"}
    - {form: Collegia, instead: Tevran, why: "a word of an Earth tongue, for colleges of guilds"}
    - {form: Collegii, instead: Tevran, why: "a word of an Earth tongue, for a college of guilds"}
    - form: Collegiorum
      instead: Tevran
      why: "a word of an Earth tongue, for colleges of guilds"
    - form: Curia Fiscalis
      instead: Tolvan
      why: "a phrase of an Earth tongue, for the tax administration"
    - form: Curia Urbis
      instead: Verdan Orzara
      why: "a phrase of an Earth tongue, for the city council"
    - {form: Curia Vylaria, instead: Seldan, why: "a phrase of an Earth tongue, for the Senate"}
    - {form: Curia, why: "a word of an Earth tongue, for a council or its house"}
    - form: Censor Maximus
      instead: holrozimos
      why: "a phrase of an Earth tongue, for the senior censor"
    - {form: Censores, instead: rozimoi, why: "a word of an Earth tongue, for censors"}
    - form: Exsecratus
      instead: Banar
      why: "a word of an Earth tongue, for one cast out of a faith"
    - {form: Fideles, instead: Devran, why: "a word of an Earth tongue, for the lay faithful"}
    - {form: Scholares, instead: Lerin, why: "a word of an Earth tongue, for students"}
    - form: Magistri Artes
      instead: Dasken
      why: "a phrase of an Earth tongue, for ordained teachers"
    - form: Magister Artis
      instead: Dasken
      why: "a phrase of an Earth tongue, for an ordained teacher"
    - form: Magistra Artis
      instead: Daskena
      why: "a phrase of an Earth tongue, for an ordained woman teacher"
    - form: Magistra Sapientiae
      instead: Mentara
      why: "a phrase of an Earth tongue, for the head of a priesthood of wisdom"
    - form: Magistra Florarum
      instead: Lizena
      why: "a phrase of an Earth tongue, for the head of a priesthood of flowers"
    - form: Magistra Vitae
      instead: Sirela
      why: "a phrase of an Earth tongue, for the head of a priesthood of life"
    - form: Magistra Mortis
      instead: Valmena
      why: "a phrase of an Earth tongue, for the head of a priesthood of death"
    - form: Collegium Doctorum
      instead: Daskeral
      why: "a phrase of an Earth tongue, for a college of senior scholars"
    - form: Collegium Sacerdotalis
      instead: Sarnal
      why: "a phrase of an Earth tongue, for a college of priests"
    - form: Bibliothecae Magnae
      instead: Notral Maldor
      why: "a phrase of an Earth tongue, for the great libraries"
    - form: Pontifex Maximus
      instead: Sarnaks Maldor
      why: "a phrase of an Earth tongue, for the sovereign's priestly office"
    - form: Pontifex Iuris
      instead: Volsarnor
      why: "a phrase of an Earth tongue, for the high priest of law"
    - form: Pontifex Mortis
      instead: Kolsarnor
      why: "a phrase of an Earth tongue, for the high priest of death"
    - form: Grand Pontifex
      instead: Hamsarnor
      why: "a phrase of an Earth tongue, for the high priest of the forge"
    - {form: Pontifex, instead: Sarnaks, why: "a word of an Earth tongue, for a high priest"}
    - form: Flamines Iuris
      instead: Volsar
      why: "a phrase of an Earth tongue, for the priests of law"
    - form: Flamen Tempestas
      instead: Bravsarnor
      why: "a phrase of an Earth tongue, for the high priest of storms"
    - form: Sacerdotes Tempestatis
      instead: Bravsar
      why: "a phrase of an Earth tongue, for the priests of storms"
    - {form: Sacerdotes, instead: Sarnor, why: "a word of an Earth tongue, for priests"}
    - {form: Sacerdote, instead: Sarnor, why: "a word of an Earth tongue, for a priest"}
    - {form: Sacerdos, instead: Sarnor, why: "a word of an Earth tongue, for a priest"}
    - form: Vestales Tempestatis
      instead: Bravlir
      why: "a phrase of an Earth tongue, for the acolytes of storms"
    - form: Custodes Viarum
      instead: Tramor
      why: "a phrase of an Earth tongue, for the keepers of roads"
    - form: Custodes Liminis
      instead: Limor
      why: "a phrase of an Earth tongue, for the keepers of the threshold"
    - form: Archivus Peregrinorum
      instead: Tramar
      why: "a phrase of an Earth tongue, for the master of wayfaring"
    - form: Praetores Templi
      instead: Sentan
      why: "a phrase of an Earth tongue, for the temple judges"
    - form: Ordo Equestris Iuris
      instead: Volgel
      why: "a phrase of an Earth tongue, for the knightly orders of law"
    - form: Somniatrix
      instead: Nirvena
      why: "a word of an Earth tongue, for the head of a priesthood of dreams"
    - {form: Oraculi, instead: Ozel, why: "a word of an Earth tongue, for oracles"}
    - form: Noctaries
      instead: Dunir
      why: "a word of an Earth tongue, for acolytes of the night"
    - form: Noctary
      instead: Dunir
      why: "a word of an Earth tongue, for an acolyte of the night"
    - {form: Augustars, instead: Orzoi, why: "a word of an Earth tongue, for the sovereigns"}
    - {form: Augustari, instead: Orzoi, why: "a word of an Earth tongue, for the sovereigns"}
    - {form: Augustar, instead: Orzas, why: "a word of an Earth tongue, for the sovereign"}
    - {form: Augusta, instead: Orzas, why: "a word of an Earth tongue, for the sovereign"}
    - form: Comar Augustari
      instead: Sodar Orzas
      why: "a phrase of an Earth tongue, for a companion of the sovereign"
    - form: Comares Augustari
      instead: Sodari Orzas
      why: "a phrase of an Earth tongue, for the sovereign's companions"
    - form: Comares
      instead: Holvethoi
      why: "a word of an Earth tongue, for companions of the sovereign"
    - form: Comar
      instead: Holvethos
      why: "a word of an Earth tongue, for a companion of the sovereign"
    - form: Dux Bellorum
      instead: Dukran
      why: "a phrase of an Earth tongue, for the chief war-minister"
    - {form: Tironar, instead: Yunar, why: "a word of an Earth tongue, for a recruit"}
    - {form: Legionar, instead: Vandor, why: "a word of an Earth tongue, for a legionary"}
    - {form: Veteranar, instead: Antar, why: "a word of an Earth tongue, for a veteran"}
    - form: Quaterar
      instead: Kelor
      why: "a word of an Earth tongue, for the leader of a fire team"
    - form: Decar
      instead: Masar
      why: "a word of an Earth tongue, for the leader of a squad of eight"
    - form: Tesserar
      instead: Nokar
      why: "a word of an Earth tongue, for a century's watch officer"
    - form: Optar
      instead: Sekor
      why: "a word of an Earth tongue, for a century's second in command"
    - {form: Centurius, instead: Hundar, why: "a word of an Earth tongue, for a centurion"}
    - form: Primar Sectaris
      instead: Hundar Kerval
      why: "a phrase of an Earth tongue, for the senior centurion of a cohort"
    - form: Primar
      instead: Hundar Maldor
      why: "a word of an Earth tongue, for the senior centurion of a legion"
    - {form: Cadetar, instead: Kadel, why: "a word of an Earth tongue, for a noble cadet"}
    - {form: Subtribunar, instead: Lusel, why: "a word of an Earth tongue, for a junior tribune"}
    - form: Tribunar Magnar
      instead: Lusar Maldor
      why: "a phrase of an Earth tongue, for a legion's senior tribune"
    - {form: Tribunar, instead: Lusar, why: "a word of an Earth tongue, for a tribune of a legion"}
    - form: Praefar Castorum
      instead: Vallar
      why: "a phrase of an Earth tongue, for a legion's camp prefect"
    - form: Praefar Alariae
      instead: Gelmalor
      why: "a phrase of an Earth tongue, for a legion's prefect of horse"
    - form: Praefar Vigilum
      instead: Nokaran
      why: "a phrase of an Earth tongue, for the prefect of the watch"
    - form: Praepar Alariae
      instead: Gelmaren
      why: "a phrase of an Earth tongue, for the commander of a wing of horse"
    - form: Praepar Squadrarii
      instead: Vormen
      why: "a phrase of an Earth tongue, for the commander of a squadron"
    - {form: Praefares, instead: Orsani, why: "a word of an Earth tongue, for prefects"}
    - {form: Praefar, instead: Orsan, why: "a word of an Earth tongue, for a prefect"}
    - form: Praepar
      instead: Parthan
      why: "a word of an Earth tongue, for the commander of a cohort"
    - form: Legar
      instead: Vandraks
      why: "a word of an Earth tongue, for the commander of a legion"
    - form: Magistar Vexilii
      instead: Bandren
      why: "a phrase of an Earth tongue, for the commander of a field army"
    - form: Magistar Classis
      instead: Vormeks
      why: "a phrase of an Earth tongue, for the commander of a fleet"
    - {form: Magnar, instead: Kamdor, why: "a word of an Earth tongue, for a theater commander"}
    - {form: Magnatum, instead: Kamdol, why: "a word of an Earth tongue, for a theater force"}
    - form: Praetar Navalis
      instead: Vormeks Maldor
      why: "a phrase of an Earth tongue, for the commander of the grand fleet"
    - form: Praetar
      instead: Talkor
      why: "a word of an Earth tongue, for the chair of the tax administration"
    - form: Classar Magnar
      instead: Vormal Maldor
      why: "a phrase of an Earth tongue, for the grand fleet"
    - {form: Classar, instead: Vormal, why: "a word of an Earth tongue, for a fleet"}
    - {form: Squadrarium, instead: Vormel, why: "a word of an Earth tongue, for a squadron"}
    - {form: Naverum, instead: Vormak, why: "a word of an Earth tongue, for a warship"}
    - {form: Naverar, instead: Vormor, why: "a word of an Earth tongue, for a ship's captain"}
    - {form: Nautar, instead: Vormar, why: "a word of an Earth tongue, for a sailor"}
    - {form: Marinar, instead: Vormvan, why: "a word of an Earth tongue, for a marine"}
    - {form: Legiones, instead: Vandani, why: "a word of an Earth tongue, for legions"}
    - {form: Legio, instead: Vandan, why: "a word of an Earth tongue, for a legion"}
    - {form: Sectarae, instead: Parthali, why: "a word of an Earth tongue, for cohorts"}
    - {form: Sectara, instead: Parthal, why: "a word of an Earth tongue, for a cohort"}
    - {form: Centariae, instead: Hundali, why: "a word of an Earth tongue, for centuries"}
    - {form: Centaria, instead: Hundal, why: "a word of an Earth tongue, for a century"}
    - {form: Decanum, instead: Masal, why: "a word of an Earth tongue, for a squad of eight"}
    - {form: Decana, instead: Masali, why: "a word of an Earth tongue, for squads of eight"}
    - {form: Quaterae, instead: Kelani, why: "a word of an Earth tongue, for fire teams"}
    - {form: Quatera, instead: Kelan, why: "a word of an Earth tongue, for a fire team"}
    - {form: Turma, instead: Gelma, why: "a word of an Earth tongue, for a cavalry squadron"}
    - form: Decurar
      instead: Gelmar
      why: "a word of an Earth tongue, for the leader of a cavalry squadron"
    - form: Alaria Magnar
      instead: Gelmal Maldor
      why: "a phrase of an Earth tongue, for a great wing of horse"
    - form: Vexilium
      instead: Bandel
      why: "a word of an Earth tongue, for a detachment under one banner"
    - {form: Cornar, instead: Hornan, why: "a word of an Earth tongue, for a horn-player"}
    - {form: Tubar, instead: Brasan, why: "a word of an Earth tongue, for a trumpeter"}
    - {form: Architar, instead: Makner, why: "a word of an Earth tongue, for a field engineer"}
    - {form: Fabricar, instead: Borgel, why: "a word of an Earth tongue, for an armorer"}
    - {form: Medicar, instead: Salvan, why: "a word of an Earth tongue, for a field surgeon"}
    - {form: Scribar, instead: Notrel, why: "a word of an Earth tongue, for a clerk"}
    - {form: Augurar, instead: Omelar, why: "a word of an Earth tongue, for a diviner"}
    - {form: Sigliar, instead: Bandor, why: "a word of an Earth tongue, for a standard-bearer"}
    - form: Imaginar
      instead: Valdor
      why: "a word of an Earth tongue, for the bearer of the sovereign's portrait-standard"
    - {form: Equar, instead: Gelmor, why: "a word of an Earth tongue, for a cavalry trooper"}
    - {form: Auxilarium, instead: Alvan, why: "a word of an Earth tongue, for an auxiliary unit"}
    - form: Sagittarium
      instead: Bogar
      why: "a word of an Earth tongue, for an archer auxiliary"
    - {form: Funditar, instead: Lorkel, why: "a word of an Earth tongue, for a slinger"}
    - {form: Velitar, instead: Tarvil, why: "a word of an Earth tongue, for a skirmisher"}
    - {form: Numar, instead: Orman, why: "a word of an Earth tongue, for an irregular formation"}
    - {form: Procurares, instead: Karvani, why: "a word of an Earth tongue, for procurators"}
    - {form: Procurar, instead: Karvan, why: "a word of an Earth tongue, for a procurator"}
    - {form: Publicarii, instead: Tolari, why: "a word of an Earth tongue, for tax-farmers"}
    - {form: Publicarius, instead: Tolar, why: "a word of an Earth tongue, for a tax-farmer"}
    - {form: Publicar, instead: Tolar, why: "a word of an Earth tongue, for a tax-farmer"}
    - {form: Iudices, instead: Sentori, why: "a word of an Earth tongue, for judges"}
    - {form: Iudex, instead: Sentor, why: "a word of an Earth tongue, for a judge"}
    - form: Iudicia
      instead: Civil Courts
      why: "a word of an Earth tongue, for the civil courts"
    - form: Officia Imperii
      instead: Imperial Offices
      why: "a phrase of an Earth tongue, for the imperial bureaux"
    - {form: Officia, instead: Offices, why: "a word of an Earth tongue, for the imperial bureaux"}
    - form: Quaestor Imperii
      instead: Imperial Tarkelos
      why: "a phrase of an Earth tongue, for the treasury's chief officer"
    - form: Magistri Stationum
      instead: therkalenoi
      why: "a phrase of an Earth tongue, for the treasury's station heads"
    - form: Magistar Stationum
      instead: therkalen
      why: "a phrase of an Earth tongue, for a treasury station head"
    - {form: Quaesitorium, instead: Sekran, why: "a word of an Earth tongue, for the inquisition"}
    - form: Concilium Magnum
      instead: Verdan Maldor
      why: "a phrase of an Earth tongue, for a great council"
    - {form: Concilium, instead: Verdan, why: "a word of an Earth tongue, for a council"}
    - {form: Argenti, instead: Ardini, why: "a word of an Earth tongue, for silver coins"}
    - {form: Argentus, instead: Ardin, why: "a word of an Earth tongue, for the silver coin"}
    - form: Argo
      instead: Ardin
      why: "a word of an Earth tongue, for the silver coin in daily speech"
    - {form: Octi, instead: Ogdeli, why: "a word of an Earth tongue, for silver wedges"}
    - {form: Octus, instead: Ogdel, why: "a word of an Earth tongue, for a silver wedge"}
    - {form: Aurions, instead: Soldeni, why: "a word of an Earth tongue, for gold coins"}
    - {form: Aurion, instead: Solden, why: "a word of an Earth tongue, for the gold coin"}
    - form: tributum agrorum
      instead: tolgar
      why: "a phrase of an Earth tongue, for the land tax"
    - form: tributum hereditatium
      instead: tolmen
      why: "a phrase of an Earth tongue, for the inheritance tax"
    - form: tributum metallorum
      instead: tolbor
      why: "a phrase of an Earth tongue, for the mine royalty"
    - form: centesima rerum venalium
      instead: tolvek
      why: "a phrase of an Earth tongue, for the sales tax"
    - {form: portoria, instead: tolsen, why: "a word of an Earth tongue, for customs duties"}
    - form: Via Triumphalis
      instead: Paldor
      why: "a phrase of an Earth tongue, for the road of triumphs"
    - {form: Forum, instead: Platan, why: "a word of an Earth tongue, for the public square"}
    - form: Bibliotheca Reservata
      instead: Notral Sevan
      why: "a phrase of an Earth tongue, for the warded library"
    - form: Lex Arcana
      instead: Kandrol
      why: "a phrase of an Earth tongue, for the law of magic"
    - form: Praefectura Arcana
      instead: Kandral
      why: "a phrase of an Earth tongue, for the prefecture of magic"
    - form: Praefectura
      instead: Kandral
      why: "a word of an Earth tongue, for the prefecture of magic"
    - {form: horrea, instead: barnali, why: "a word of an Earth tongue, for granaries"}
    - {form: horti, instead: vildori, why: "a word of an Earth tongue, for garden-villas"}
    - {form: insulae, instead: tengali, why: "a word of an Earth tongue, for tenements"}
    - form: Castrovar
      instead: Dolvar
      why: "a word of an Earth tongue, for a fort-town of Moktur"
    - form: Tertia Aurelia Coronata
      instead: Karsan Soldan Korvan
      why: "a phrase of an Earth tongue, for a legion's name"
    - form: Tertia Aurelia
      instead: Karsan Soldan
      why: "a phrase of an Earth tongue, for a legion's name"
    - {form: Coronata, instead: Korvan, why: "a word of an Earth tongue, for the crowned legion"}
    - {form: Vesperine, instead: Hilvan, why: "a word of an Earth tongue, for a legion's epithet"}
    - {form: Argentine, instead: Ankren, why: "a word of an Earth tongue, for a legion's epithet"}
    - {form: Kleftes, instead: Klethes, why: 'holds "f", a letter Vylari lacks'}
    - {form: Exarchides, instead: Zarkedis, why: 'holds "c", a letter Vylari lacks'}
    - {form: Myrine, instead: Mirene, why: 'opens on "myr", which no Vylari word opens on'}
    - form: Kalypsos
      instead: Kalethos
      why: 'stacks four consonants ("lyps"), which Vylari does not'
    - {form: Cassia, instead: Kassa, why: 'holds "c", a letter Vylari lacks'}
    - {form: Verric, instead: Verris, why: 'holds "c", a letter Vylari lacks'}
    - {form: Cibella, instead: Kivella, why: 'holds "c", a letter Vylari lacks'}
    - {form: Serentia, instead: Serenthis, why: 'sets "i" against "a", which Vylari does not join'}
    - {form: Lucerian, instead: Lukeros, why: 'holds "c", a letter Vylari lacks'}
    - {form: Aemilon, instead: Aimilon, why: 'sets "a" against "e", which Vylari does not join'}
    - {form: Érython, instead: Erithon, why: 'holds "é", a letter Vylari lacks'}
    - form: Aelissium
      instead: Elissara
      why: 'closes on "m", which no Vylari word closes on; sets "a" against "e", which Vylari does not join; sets "i" against "u", which Vylari does not join'
    - form: Alyssa
      instead: Alessa
      why: 'stacks four consonants ("lyss"), which Vylari does not'
    - form: Alyssar
      instead: Alessar
      why: 'stacks four consonants ("lyss"), which Vylari does not'
    - form: Aravantia
      instead: Aravantara
      why: 'sets "i" against "a", which Vylari does not join'
    - {form: Calvaris, instead: Kalvaris, why: 'holds "c", a letter Vylari lacks'}
    - {form: Castamar, instead: Kastamar, why: 'holds "c", a letter Vylari lacks'}
    - {form: Cervalia, instead: Kervalara, why: 'holds "c", a letter Vylari lacks'}
    - {form: Corvinus, instead: Korvenara, why: 'holds "c", a letter Vylari lacks'}
    - {form: Ferrovan, instead: Zargonara, why: 'holds "f", a letter Vylari lacks'}
    - {form: Granaria, instead: Kelborara, why: 'sets "i" against "a", which Vylari does not join'}
    - {form: Hylen, instead: Hilen, why: 'opens on "hyl", which no Vylari word opens on'}
    - {form: Mylânthos, instead: Milanthos, why: 'opens on "mil", which no Vylari word opens on'}
    - {form: Mercavia, instead: Delalara, why: 'holds "c", a letter Vylari lacks'}
    - {form: Sanctara, instead: Ulthora, why: 'holds "c", a letter Vylari lacks'}
    - {form: Terravia, instead: Therkara, why: 'sets "i" against "a", which Vylari does not join'}
    - {form: Tyrellan, instead: Tirellan, why: 'opens on "tyr", which no Vylari word opens on'}
    - {form: Nartûm, instead: Nartun, why: 'closes on "m", which no Vylari word closes on'}
    - {form: Korrast, instead: Korras, why: 'closes on "st", which no Vylari word closes on'}
    - form: Skoraz
      instead: Soraks
      why: 'opens on "sk", which no Vylari word opens on; closes on "z", which no Vylari word closes on'
    - {form: Olcassa, instead: Olkassa, why: 'holds "c", a letter Vylari lacks'}
    - {form: Sêmarion, instead: Semaron, why: 'sets "i" against "o", which Vylari does not join'}
    - {form: Bravsarn, instead: Bravsarnor, why: 'closes on "rn", which no Vylari word closes on'}
    - {form: Volsarn, instead: Volsarnor, why: 'closes on "rn", which no Vylari word closes on'}
    - {form: Kolsarn, instead: Kolsarnor, why: 'closes on "rn", which no Vylari word closes on'}
    - {form: Hamsarn, instead: Hamsarnor, why: 'closes on "rn", which no Vylari word closes on'}
    - {form: Ard, instead: Ardin, why: 'closes on "rd", which no Vylari word closes on'}
    - {form: Morveth, instead: Morvanandi, why: 'closes on "th", which no Vylari word closes on'}
    - {form: Dâemzânis, instead: Damzanis, why: 'sets "a" against "e", which Vylari does not join'}
    - {form: Dâemâtôr, instead: Damator, why: 'sets "a" against "e", which Vylari does not join'}
    - {form: Bárkrâtys, instead: Barkratis, why: 'holds "á", a letter Vylari lacks'}
    - form: Chéagan
      instead: Kegan
      why: 'holds "c", a letter Vylari lacks; holds "é", a letter Vylari lacks'
    - {form: Shônyàrdîs, instead: Sonyardis, why: 'holds "à", a letter Vylari lacks'}
    - {form: Vârkrâtys, instead: Varkratis, why: 'closes on "tys", which no Vylari word closes on'}
    - {form: Ôrchârenîs, instead: Orkarenis, why: 'holds "c", a letter Vylari lacks'}
    - {form: Kêrîamyês, instead: Keramyes, why: 'sets "î" against "a", which Vylari does not join'}
    - {form: Kyàsârâ, instead: Kesara, why: 'holds "à", a letter Vylari lacks'}
    - {form: Pyrânês, instead: Piranes, why: 'opens on "pyr", which no Vylari word opens on'}
    - {form: Syphrânôs, instead: Sifranos, why: 'opens on "syfr", which no Vylari word opens on'}
    - {form: Xâthrîon, instead: Zathron, why: 'sets "î" against "o", which Vylari does not join'}
    - {form: Dâemâtês, instead: Damates, why: 'sets "a" against "e", which Vylari does not join'}
    - form: Proconsul
      instead: tavtherkos
      why: "a word of an Earth tongue, for a consular governor"
    - form: Procurator
      instead: karezos
      why: "a word of an Earth tongue, for the sovereign's agent in a province"
    - {form: Aediles, instead: peltroi, why: "a word of an Earth tongue, for ward magistrates"}
    - form: Duumvir
      instead: tavemos
      why: "a word of an Earth tongue, for one of the two magistrates a chartered town elects"
    - form: Flamen
      instead: zalvos
      why: "a word of an Earth tongue, for a priest of the imperial cult"
    - form: Flamines
      instead: zalvoi
      why: "a word of an Earth tongue, for priests of the imperial cult"
    - form: Consuls
      instead: tavoi
      why: "a word of an Earth tongue, for the two who give the year its name"
    - form: Tribunes
      instead: lusoi
      why: "a word of an Earth tongue, for protectors of the common citizens"
    - form: Prefect of the Guard
      instead: thaurusos
      why: "a phrase of an Earth tongue, for the sovereign's guard commander"
    - form: Prefect of the Watch
      instead: zoralus
      why: "a phrase of an Earth tongue, for a watch commander"
    - form: Curator
      instead: veramus
      why: "a word of an Earth tongue, for one set over a part of the capital's government"
    - form: Curators
      instead: veramusoi
      why: "a word of an Earth tongue, for those set over the capital's government"
    - form: Master Magister
      instead: kelros
      why: "a phrase of an Earth tongue, for a guild's master on the council"
    - form: Peregrine
      instead: palvethos
      why: "a word of an Earth tongue, for a resident without the citizen's share"
    - form: Aurelian
      instead: ethlen
      why: "a word of an Earth tongue, for a noble of the highest estate"
    - form: Argentean
      instead: ankren
      why: "a word of an Earth tongue, for a noble of the second estate"
    - form: Argentei
      instead: ankrenoi
      why: "a word of an Earth tongue, for the nobles of the second estate"
    - form: Aerean
      instead: thurden
      why: "a word of an Earth tongue, for a noble of the third estate"
    - form: Aerei
      instead: thurdenoi
      why: "a word of an Earth tongue, for the nobles of the third estate"
    - form: Adlect
      instead: pelerenos
      why: "a word of an Earth tongue, for a noble of the estate of newly raised houses"
    - form: Adlecti
      instead: pelerenoi
      why: "a word of an Earth tongue, for the nobles of the estate of newly raised houses"
    - form: Ordo Arcanis
      instead: Thordimalon
      why: "a phrase of an Earth tongue, for the arcane order"
    - {form: Sigillum, instead: Thizaron, why: "a word of an Earth tongue, for a seal"}
    - {form: Quaesitores, instead: sekeroi, why: "a word of an Earth tongue, for the inquirers"}
    - form: Sekran Arcanum
      instead: Sekran
      why: "a phrase of an Earth tongue, for the inquisition"
    - {form: Arcanum, why: "a word of an Earth tongue, for the arcane"}
    - form: Initiati
      instead: kosthemoi
      why: "a word of an Earth tongue, for the initiates of an order"
    - form: Initiatus
      instead: kosthemos
      why: "a word of an Earth tongue, for an initiate of an order"
    - form: Discipuli
      instead: galethoi
      why: "a word of an Earth tongue, for the students of an order"
    - form: Discipulus
      instead: galethos
      why: "a word of an Earth tongue, for a student of an order"
    - form: Adepti
      instead: thermoi
      why: "a word of an Earth tongue, for the adepts of an order"
    - {form: Adeptus, instead: therman, why: "a word of an Earth tongue, for an adept of an order"}
    - form: Praelati
      instead: holmarendoi
      why: "a word of an Earth tongue, for the prelates of an order"
    - form: Praelatus
      instead: holmarendos
      why: "a word of an Earth tongue, for a prelate of an order"
    - form: Archmagister
      instead: zetmarendos
      why: "a word of an Earth tongue, for the master over every master"
    - form: Aula
      instead: Ombalon
      why: "a word of an Earth tongue, for the court of the academy"
    - form: Sodalitas
      instead: zulen
      why: "a word of an Earth tongue, for a fellowship of an order"
    - form: Sodalitates
      instead: zulethalar
      why: "a word of an Earth tongue, for the fellowships of an order"
    - form: Codex Arcanis
      instead: Thordimthilandon
      why: "a phrase of an Earth tongue, for the code of the arcane order"
    - {form: Scriba, instead: thilos, why: "a word of an Earth tongue, for a scribe of the guild"}
    - {form: Astrokýklos, instead: Iltheron, why: "a word of an Earth tongue, for the star circle"}
    - form: Vertigo Hodäi
      instead: selthkelmeza
      why: "a phrase of an Earth tongue, for the sickness of the Six"
    - form: Praetor
      instead: vornos
      why: "a word of an Earth tongue, for a magistrate of the courts"
    - form: Praetors
      instead: vornoi
      why: "a word of an Earth tongue, for the magistrates of the courts"
    - {form: Quaestor, instead: tarkelos, why: "a word of an Earth tongue, for a treasury officer"}
    - {form: Quaestors, instead: tarkeloi, why: "a word of an Earth tongue, for treasury officers"}
    - {form: Aedile, instead: peltros, why: "a word of an Earth tongue, for a ward magistrate"}
    - form: Legate
      instead: felzos
      why: "a word of an Earth tongue, for a man sent with the sovereign's authority"
    - form: Legates
      instead: felzoi
      why: "a word of an Earth tongue, for men sent with the sovereign's authority"
    - form: Tribune
      instead: lusos
      why: "a word of an Earth tongue, for a protector of the common citizens"
    - form: Equestrian
      instead: gulmen
      why: "a word of an Earth tongue, for a man of the horse order"
    - form: Equestrians
      instead: gulmenoi
      why: "a word of an Earth tongue, for the men of the horse order"
    - form: Consular
      instead: tavalen
      why: "a word of an Earth tongue, for a man who has held the year's highest office"
    - form: Decurion
      instead: kurthalos
      why: "a word of an Earth tongue, for a member of a town's council"
    - form: Decurions
      instead: kurthaloi
      why: "a word of an Earth tongue, for the members of a town's council"
    - form: Aurelii
      instead: Orthemaris
      why: "a name from Earth, for the house of a Talkor of the Tolvan"
    - form: Magister
      instead: marendos
      why: "a word of an Earth tongue, for a teacher licensed to teach"
    - form: Magisters
      instead: marendoi
      why: "a word of an Earth tongue, for teachers licensed to teach"
    - form: Magistri
      instead: marendoi
      why: "a word of an Earth tongue, for teachers licensed to teach"
    - form: Archmagisters
      instead: zetmarendoi
      why: "a word of an Earth tongue, for the masters over every master"
    - {form: Quaesitor, instead: sekeros, why: "a word of an Earth tongue, for an inquirer"}
    - {form: Ordo, why: "a word of an Earth tongue, for an order"}
    - form: Ordo Verbi Signati
      instead: Thizarlambizon
      why: "a phrase of an Earth tongue, for the Order of the Sealed Word"
    - form: Ordo Bifrons
      instead: Tavemyenthamis
      why: "a phrase of an Earth tongue, for the Twinblade Order"
    - {form: Bifrons, instead: Tavemyenthamis, why: "a word of an Earth tongue, for the two-faced"}
    - form: Ordo Voti Cinerei
      instead: Elztholmeza
      why: "a phrase of an Earth tongue, for the Order of the Ashen Vow"
    - {form: Cinereus, instead: elza, why: "a word of an Earth tongue, for ash-grey"}
    - form: Cinis Ferreus
      instead: Zargelza
      why: "a phrase of an Earth tongue, for the Iron Cinder"
    - {form: Cinis, instead: elza, why: "a word of an Earth tongue, for ash"}
    - {form: Cineris, instead: elza, why: "a word of an Earth tongue, for of ash"}
    - form: Frater
      instead: zaros
      why: "a word of an Earth tongue, for a sworn brother of an order"
    - form: Pactum Mercennariorum
      instead: zaralon
      why: "a phrase of an Earth tongue, for the compact of the sellsword companies"
    - {form: Custos, instead: Tramor, why: "a word of an Earth tongue, for a keeper of roads"}
    - {form: vigiles, why: "a word of an Earth tongue, for the watchmen of a city"}
    - {form: Provinciarum, why: "a word of an Earth tongue, for of the provinces"}
    - form: Arnos
      instead: Varthas
      why: "a name from Earth, for the Ram, a sign of the Iltheron"
    - form: Bourax
      instead: Dolveras
      why: "a name from Earth, for the Ox, a sign of the Iltheron"
    - form: Diplos
      instead: Tavemas
      why: "a name from Earth, for the Twins, a sign of the Iltheron"
    - form: Chelyx
      instead: Dulmekas
      why: "a name from Earth, for the Tortoise, a sign of the Iltheron"
    - form: Thyron
      instead: Kalpezas
      why: "a name from Earth, for the Gate, a sign of the Iltheron"
    - form: Korith
      instead: Vonthas
      why: "a name from Earth, for the Helm, a sign of the Iltheron"
    - form: Stathmos
      instead: Thradinas
      why: "a name from Earth, for the Balance, a sign of the Iltheron"
    - form: Kentros
      instead: Prenkas
      why: "a name from Earth, for the Goad, a sign of the Iltheron"
    - form: Belos
      instead: Ithrolas
      why: "a name from Earth, for the Lamp, a sign of the Iltheron"
    - form: Tragyx
      instead: Grelthas
      why: "a name from Earth, for the Stag, a sign of the Iltheron"
    - form: Nalos
      instead: Sirethas
      why: "a name from Earth, for the River, a sign of the Iltheron"
    - {form: Opsar, instead: Ulfas, why: "a name from Earth, for the Fish, a sign of the Iltheron"}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Pelwar}}

# terran_analog: Vylari reads the Roman tongue in its grammar and nowhere in its words. Ancient Vylari carries the Roman pattern its grammar brief sets (three demonstratives of person and attitude) plus a hallowed rank of its own that shows in names; imperial Vylari loosens it as the spoken Roman tongue loosened toward the Romance tongues. Every root here is coined to the tongue's rules and checked against the Roman tongue, ancient Greek, Occitan, Spanish and other word lists; none is the Roman, Greek or Romance word for its meaning. The patron and client, the morning call, the wax ancestor masks, the hallowed city boundary and the legion's eagle are Roman institutions the empire shares.
---

Vylari is a tongue of the [Pelwar Family]{.name data-type="lore"}. Fluency measures the sophistication of expression in Vylari, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

Vylari is the imperial tongue of the [[affiliation-vylarinmpr|Vylarian Empire]] and the most widely spoken of the [[lore-pelwarpepl|Pelwar People]] languages. It serves as the common tongue of trade, law and administration across much of [[place-midhalnrgn|Mídhalión]], spoken in the great cities of [[place-alyssa|Alessa]], [[place-hylen|Hilen]], [[place-moktur|Moktur]] and [[place-salkhalon|Salkalon]], and its oldest form is still the tongue of every rite in the [[affiliation-hlykngdmnrtm|Holy Kingdom of Nartun]]. The [[lore-vylarianclt|Vylarian]] people hold it to be the language of learning, government, the arcane and the university system, and [[affiliation-ordoarcanis|the Arcane Order]] and the schools of the [[affiliation-panepistmm|Epistémion]] work in it. In the empire and the lands that look to it the educated learn it, and a scholar of [[place-dunavarre|Dúnavarre]] writes to a magistrate of [[place-provenzrgn|Provenzia]] in Vylari, whatever each speaks at home. The [[lore-khelathiclt|Khelathi]] do not accept the claim. Vylarian learning began in [[place-helionis|Helionis]], where the [Vylarian Republic]{.name data-type="affiliation/polity"}'s scholars studied; after [[lore-helionscnq|the conquest]] of 335 to 312 BF the schools came under Vylarian structures, which changed the institutions though not their names.

## Overview

Vylari is a tongue of long, orderly sentences. Orators and poets set their words with great freedom and use it the way a builder uses an arch: a sentence can hold its verb to the end, or build clause upon clause toward a single closing word. The schools teach those figures as carefully as they teach spelling.

The language also carries the empire's order in its names. The **hallowed** endings belong to the gods, the sovereign and the founders of the great houses, and they survive on noble and divine names, which is why a Vylarian hears rank in a name before he hears anything else. The [[skill-vylarilng#lexicon|Vylari Lexicon]] gives the words, the endings and the rules for names; this page gives the grammar.

## How Vylari sounds

Vylari is crisp and clipped, the speech of law and the court. Most words have two or three syllables, and a word ends on a vowel or on _s_, _n_ or _r_.

**The vowels.** _a_, _e_ and _o_ carry most words, with _i_ after them. Vylari keeps its vowels single: _ei_ and _eu_ belong to [[skill-helonclng|Helonic]].

**The consonants.** _l_, _r_, _s_, _z_, _m_, _n_, _t_, _k_ and _v_ do most of the work. _th_ stands inside a word, as in _semrotha_. _z_ is the language's mark, and it stands where Helonic would put _s_.

**Clusters.** _lm_, _lt_, _rm_, _rth_, _nd_ and _st_ meet inside a word. A word opens on one consonant or on a stop followed by _l_ or _r_.

**Endings.** Nouns end in _-os_, _-is_, _-a_, _-en_ or _-on_. Titles end in _-andos_, _-enos_ or _-or_. Feminine names end in _-a_ or _-enna_.

**What Vylari leaves out.** It has no _kh_, _gh_ or _dh_, which are Helonic's, and no _ei_ or _eu_. Its apostrophe is the catch of the ancient forms, as in _k'aralzon_, and the worn-down article _a'_ of Alessa speech.

## Two Stages

**Ancient Vylari** is the scholars' name for the speech the Pelwar carried west in [[lore-pelwarmigr|the Migration]]: strict in its rules and rich in forms. It survives in the oldest [[skill-thrvrknscrpt|Tharavarkon]] inscriptions and in the tongues descended from it, and the ritual speech of Nartun is the nearest thing to it still spoken.

**Imperial Vylari** is the empire's speech today. In the street it has loosened: unstressed long vowels are said short, and prepositions creep into speech. **High Vylari**, the register of the [[affiliation-seldan|Seldan]] (Senate), the law courts, the temples, the arcane charters and formal oratory, keeps the ancient endings in use. A magistrate pronouncing sentence, a priest consecrating an altar and a _kurthos_ (senator) moving a vote all speak it, and an educated Vylarian can move between the two registers inside one sentence for effect.

|         | Ancient Vylari                             | Imperial Vylari                                                        |
| ------- | ------------------------------------------ | ---------------------------------------------------------------------- |
| Article | none; the three pointing words do the work | none in High Vylari; spoken Alessa wears the "yonder" word down to one |
| Stops   | plain, breathed and clicked                | plain and breathed                                                     |

## Phonology

**Consonants.** Imperial Vylari has the stops _p t k b d g_, the breathed stops _f_ and _th_, the hissed _s_ and buzzed _z_, _v_, _h_, _m n l r_, and _y_ before a vowel. The contrast between plain and breathed stops tells words apart, and a foreigner who says every _th_ as a plain _t_ is understood with an effort. Ancient Vylari had a third series of stops closed hard in the throat and released with a click (_t' k' d' g'_), voiced stops with a breath after them (_dh gh_), and _w_; imperial Vylari has none of these.

**Vowels.** Five vowels, _a e i o u_, each short or long. A long _a_, _i_ or _u_ is written double (_aa_, _ii_, _uu_); a long _e_ or _o_ is written single. Three diphthongs: _ai au oi_.

**Words.** A word opens on a vowel, one consonant, or a stop followed by _l_ or _r_; it closes on a vowel or on _s n r l_. No more than three consonants stand together.

**Stress.** Vylari stresses its words by the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: a word of two syllables on the first, a longer word on the second-to-last syllable, and an acute (_á_) marks any other stress. Vowel length does not move it, and each diphthong counts as one syllable. So every word of more than one syllable ends by falling from a stressed syllable to an unstressed one, and that is the measured, falling rhythm foreigners hear in a Vylari speech: _zaros_ is said ZA-ros, _sorima_ so-RI-ma, _ulthalon_ ul-THA-lon.

**Emphasis.** Vylari marks a stressed word with a word, never with a mark.

## Grammar

### Nouns

A noun is masculine, feminine or neuter. Gender is mostly formal: nouns in _-a_ are mostly feminine and nouns in _-os_ mostly masculine, but _daimela_ (a patron) ends in _-a_ and is masculine because of what a patron is, and the names of trees are feminine though they end in _-os_. The neuter takes things, beasts of burden, children not yet of age and slaves. A noun has no cases: one form serves as subject and as object, and the order and the sense of the sentence tell them apart. The gods, the sovereign, the founders of houses, the great river and the gold coin are hallowed: their names end in _-as_ and have no sex.

**The plural.** The plural ending is _-oi_. It takes the place of a final _-os_, _-on_, _-is_, _-as_ or vowel, and it is added after any other final consonant. So _talothos_ (a standing stone) becomes _talothoi_, _zemrolon_ (a tomb) _zemroloi_, _Orzas_ _Orzoi_ and _dekazu_ (a hand) _dekazoi_, while _harlen_ (a name) becomes _harlenoi_ and _kalmethar_ (an ancestor) _kalmetharoi_. Three kinds of noun take another plural:

- **A noun in _-alon_ takes _-alar_:** _thelvaralon_ (a noble house) becomes _thelvaralar_.
- **A noun in _-a_ takes _-ai_,** which keeps a woman's word apart from a man's: _kambetha_ (a wife) becomes _kambethai_ and _kambethos_ (a husband) _kambethoi_, and _orkaima_ (an eagle) becomes _orkaimai_.
- **Where a thing and a person share a stem, the thing takes _-ar_** and the person keeps the rule: _vornon_ (a law) becomes _vornar_ and _vornos_ (a magistrate of the courts) _vornoi_; _zaron_ (an oath) becomes _zarar_ and _zaros_ _zaroi_. The lexicon gives each such plural with its word.

A hallowed noun is one of its kind, and its plural is seldom said. Where one is, a hallowed noun that shares a stem with a person takes _-asoi_, so _kurthas_ (the Senator, hallowed) becomes _kurthasoi_ and stays apart from _kurthoi_, the senators. _aistroi_ (the summer northerlies) and _karalzis_ (the household gods) are plural already.

**The house name.** The ending _-is_ makes the old house names: _Kalmetharis_ is "those of Kalmethar", the descendants of a founder of that name. The hallowed _-as_ marks the given names of noble families, whether the bearer is a man or a woman.

### Adjectives and adverbs

An adjective takes the gender of its noun, which lets a poet separate the two by a whole line. Most adjectives are like _thelvaros_ (noble): masculine _thelvaros_, feminine _thelvara_, neuter _thelvaron_. A smaller group, such as _melvar_ (great), has one form for every gender. The present participle, in _-andar_, is one of them: _dorandar_ (enduring), _humelthandar_ (resting).

An adjective agrees in number as well: _-os_ becomes _-oi_, _-a_ becomes _-ai_ and _-on_ becomes _-oi_, so _zelai pelthrai_ are the low wards and _ankeloi thelvaralar_ the old noble houses. The one-form adjectives and the participles in _-andar_ do not change. Where the noun is hallowed, the adjective takes the hallowed _-as_: _holimas Orzas_, the first sovereign.

An adjective or a participle stands as a noun unchanged: _ankeloi_, the old; _thernandar_, the living; _kalmethandar_, the dying; _lozandar_, those carrying, the porters.

| Adverb                             | How it is made                                               | Example                                                                                         |
| ---------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| from an adjective like _thelvaros_ | stem + _-ai_                                                 | _thelvarai_, nobly                                                                              |
| from an adjective like _melvar_    | stem + _-athi_                                               | _melvarathi_, greatly                                                                           |
| from a participle                  | _-andar_ becomes _-anthi_                                    | _doranthi_, enduringly                                                                          |
| comparative                        | adjective _-azos_, _-aza_, _-azon_; the adverb is the neuter | _thelvarazos_, nobler; _thelvarazon_, more nobly                                                |
| superlative                        | adjective _-immos_, _-imma_, _-immon_; the adverb _-immai_   | _thelvarimmos_, noblest; _thelvarimmai_, most nobly                                             |
| irregular                          | the commonest adverbs                                        | _aithar_ well, _korimen_ badly, _mazeron_ more, _nizeron_ less, _zikai_ perhaps, _varlai_ truly |

**Ordinals.** _holimos_ is first and _ethoros_ second. From third on, the ordinal is the cardinal's stem with _-oros_ in place of its ending: _karzis_ (three) gives _karzoros_, _felzur_ (four) _felzoros_, _yolemiks_ (five) _yolemoros_ and _selthur_ (six) _selthoros_. An ordinal agrees like any adjective in _-os_.

### Pronouns and pointing words

A personal pronoun is emphatic. _En_ (I) said aloud is a raised voice, and a client who uses it to his patron has forgotten himself. The second person plural, _koroi_, is also the formal "you" to one person, and the choice between it and the singular _ko_ is never neutral: the plural is owed to a superior and to any stranger of standing, and the singular used to an equal who has not offered it is an insult.

|               | Singular | Plural  |
| ------------- | -------- | ------- |
| first person  | _en_     | _enoi_  |
| second person | _ko_     | _koroi_ |

The third person is a pointing word. There are three, and each carries an attitude as well as a place:

| Pointing word | Masculine | Feminine | Neuter    | Sense                                                                               |
| ------------- | --------- | -------- | --------- | ----------------------------------------------------------------------------------- |
| near me       | _denos_   | _dena_   | _denon_   | "this, here by me"                                                                  |
| near you      | _thesos_  | _thesa_  | _theson_  | "that of yours"; of a person, contemptuous                                          |
| yonder        | _alathos_ | _alatha_ | _alathon_ | "that, over there"; of a person, grand: _alathos Thelvaras_, "the famous Thelvaras" |

The reflexive _veth-_ points back to the subject of the main verb, so in reported speech it always means the speaker being reported and never the reporter. A Vylari historian keeps three people straight in one sentence that way.

The pointing words agree like adjectives, plural included: _denoi_ and _denai_, _alathoi_ and _alathai_. Said of a hallowed noun, a pointing word takes the hallowed _-as_: _alathas_ is the yonder one who is a god or a founder.

**The relative word.** _kedis_ (who) is also the relative word for whom, which and that, and it never changes. "Where" is _ir kedis_ (in which), "from which" _fos kedis_, and "to whom" _fa kedis_. The relative clause follows its noun and keeps its verb last: _thramezoi kedis Kurthas lozezoi_, the legions that carried the Senator.

### "Of" and the possessives

_ol_, "of", stands after the noun it belongs to, and the owner follows it: _zemrolon ol helthos_, the tomb of the father. The thing possessed comes first and the owner second, so a chain reads left to right: _helthos ol helthos_, the father's father. A compound says the same thing in one word, as _Kalpezthauras_, the Keeper of the Gates, says _thauras ol kalpezai_.

A possessive is _ol_ with a pronoun, set after the noun:

|                                          | Possessive                                                   |
| ---------------------------------------- | ------------------------------------------------------------ |
| my                                       | _ol en_                                                      |
| your, of one person                      | _ol ko_                                                      |
| our                                      | _ol enoi_                                                    |
| your, of many or formal                  | _ol koroi_                                                   |
| his, her, its, their own (the subject's) | _ol vethis_                                                  |
| his, her, its, their (someone else's)    | _ol alathos_, _ol alatha_, _ol alathon_; plural _ol alathoi_ |
| the Founder's, the god's                 | _ol alathas_                                                 |

The ending _-en_ keeps its own work, "of" or "from" a place or a people: _aistren_, of the north.

### Word order

Legal prose keeps the subject first and the verb last by long convention, and ordinary speech mostly does the same; High Vylari in verse and oratory sets its words as it likes. One figure is taught in every school: **the suspended sentence**, clause after clause stacked before a main verb held to the last word, so that an audience hears the whole of a plea before it learns what is being asked of it. Senate speeches are built this way, and a skilled orator can keep a chamber silent for a long minute waiting for his verb.

### Verbs

A verb is cited by its infinitive, in _-athen_, _-ethen_ or _-ithen_, and it has one present pattern. The infinitive's vowel carries into every form, and one of six endings takes the place of _-then_:

| Person      | Ending | _lokathen_ (to come) | _yarethen_ (to be) | _urzithen_ (to rise) |
| ----------- | ------ | -------------------- | ------------------ | -------------------- |
| I           | _-men_ | _lokamen_            | _yaremen_          | _urzimen_            |
| you         | _-zen_ | _lokazen_            | _yarezen_          | _urzizen_            |
| he, she, it | _-zor_ | _lokazor_            | _yarezor_          | _urzizor_            |
| we          | _-mar_ | _lokamar_            | _yaremar_          | _urzimar_            |
| you all     | _-zar_ | _lokazar_            | _yarezar_          | _urzizar_            |
| they        | _-zoi_ | _lokazoi_            | _yarezoi_          | _urzizoi_            |

A verb cited in _-atora_, as _zenothatora_ (to ponder) and _solkatora_ (to follow), takes the _-athen_ forms on the stem before _-atora_: _zenothazor_, he ponders; _solkazoi_, they follow. _vethor_ (says) has its one form. A verb takes the same forms whatever its subject, and a hallowed subject, _Orzas_ or a god, changes nothing in it.

_ar_ (not) stands directly before the verb it negates, an infinitive included: _harlen ar daimamen_, I give no name. In a clause with no verb, it stands before the word it negates: _ar ol en, ar urkis_, not mine, not one.

### Time without tenses

The verb has the present only, and time is said in words.

- **_kanai_, "then, once, at that time",** opens a narrated passage, and the verbs after it are read as past: _Kanai luvetha yarezor_, it was spring. It stands once at the head of a passage, and again only where the time shifts.
- **_lokanthi_, "in days to come",** opens a prophecy or a promise, and the verbs after it are read as future. It is _lokandar_ (coming) made an adverb, as _dorandar_ gives _doranthi_.
- **The perfect,** "I have done it", is _kerathen_ (to hold, to have) with the participle in _-thos_, which agrees with the thing done: _Veramis oktha keramen_, I have seen the city.
- **An earlier event inside a narrated passage** takes a time word, as _ethorai_ (later, next).

### Let, must, may and can

- **"Let"** is _voza_ with the infinitive and its subject named: _Voza veramis veramis dokathen_, let the city say the city; _Voza ulthoi okethen denon zaron_, may the gods see this oath. With no subject named, _voza_ is a command to the one addressed. For "let me", the speaker gives the command to himself: _Ul voza holimai dokathen_, and let me say first.
- **Must** is _orfenathen_ (to owe) with an infinitive: _Orfenazor ar volzathen_, he must not turn, or "he owes not turning".
- **May**, of what is allowed, is _yestharon yarezor_ (it is lawful) with an infinitive: _Yestharon ar yarezor lozethen_, it is not lawful to carry; nobody may carry it.
- **Can** is _dunathen_ (to be able) with an infinitive: _Thrima veramis tambathen dunazor_, a boundary can make a city.

### Asking, commanding, exclaiming

A word at the head of the sentence says what kind of sentence it is, and the rest is said as a plain statement:

| Word      | Opens                              | Example                                                       |
| --------- | ---------------------------------- | ------------------------------------------------------------- |
| _eza_     | a question                         | _Eza a' daimela falvazor._ "Is the patron out?"               |
| _areza_   | a question that expects yes        | _Areza a' thelmos lokazor._ "The client has come, hasn't he?" |
| _vez_     | a question that expects no         | _Vez humelthandar yarezor._ "It isn't resting, is it?"        |
| _voza_    | a command, with the infinitive     | _Voza lokathen._ "Come."                                      |
| _ar voza_ | a prohibition, with the infinitive | _Ar voza lokathen._ "Do not come."                            |
| _aia_     | an exclamation                     | _Aia, theson._ "That thing of yours!"                         |

_areza_ is _ar_, "not", joined to _eza_. Because the opening word carries the question, the command or the exclamation, written Vylari needs no question mark and no exclamation mark: a sentence of any kind ends with the plain sentence stop.

### Reported speech

Words spoken by someone are marked by _vethor_, "says", set after the first word or phrase of what they said: _Daimela, vethor, orfenamen._ "'Patron,' he says, 'I am in your debt.'" _vethor_ has no other form and serves for every person and time, so the speaker is named nearby or understood. Written Vylari has no quotation marks; _vethor_ shows where reported words begin, and the sentence stop where they end.

## Script & Literacy

Vylari employs the [[skill-semrnscrpt|Semaron]], an alphabetic script derived from the ancient imperial runes and refined over centuries into a flowing, efficient writing system. The script reads left-to-right and distinguishes capital and lowercase forms, and it marks vowel length only in schoolbooks and lawyers' copies, with a small curl over a long vowel (typed as a doubled vowel, _aa_, _ii_ or _uu_) where a misreading is possible. True literacy—the ability to read and compose continuous text—is confined to the clergy, professional scribes, and perhaps two in five of the nobility (imperial administration values educated lords, though many provincial nobles still leave reading to their clerks). Guildsmen in major cities may possess basic functional literacy (recognizing trade marks, numerals, and simple words), but even prosperous merchants rely on scribes and solicitors for contracts, correspondence, and record-keeping. In rural provinces, literacy is virtually nonexistent outside the local temple.

An older runic form, [[skill-thrvrknscrpt|Tharavarkon]], persists in ceremonial and architectural contexts. The ancient imperial inscriptions use a highly formalized variant with ligatures and special marks for religious names, and they write every sound of ancient Vylari.

## Historical Development

Vylari descends from ancient Vylari, the tongue of the western Pelwar who came down to the coast in the Migration; the eastern Pelwar, conquered in [[lore-varkhadcnq|the Varkhad Conquest]], gave rise to [[skill-nordmalng|Nordmal Language]] and [[skill-varokhlng|Varokhi Language]] instead. On the coast the tongue settled, built an empire and lightened its sounds, while the high register kept its grammar almost whole. Vylari is the most conservative of its family in grammar; [[skill-aelendlng|Áelendi]] is the most conservative in sound.

The empire took words from every people it ruled, chiefly terms of craft, trade and the sea, and the oldest religious words show the touch of the [[lore-aelendnppl|Áelendan highlanders]], with whom the coastal Vylari shared a speech long before either had a name for it.

## Regional Dialects

**High Vylari:** The formal register of law, liturgy, the Senate and literature, taught in the schools. It keeps the ancient endings and holds every long vowel at its full length.

**Alessa Dialect:** The quick, clipped speech of the greatest port. It shortens unstressed vowels, puts the verb wherever it likes, and wears the "yonder" word down to a bare _a'_ before a noun, so that _a' thelmos_ means simply "the client". High Vylari has no article, and a schoolmaster who hears _a'_ in his classroom corrects it.

**Hilen Lowland Dialect:** Says _th_ as _s_ and shortens long vowels everywhere, not only where they are unstressed. It keeps old forms the capital has lost.

**Nartun Ritual Dialect:** The speech of every rite in the Holy Kingdom of Nartun, deliberately kept by its priesthoods. It still says the breathed voiced stops that imperial Vylari lost. It is the nearest living thing to ancient Vylari.

## Sample Phrases

"Voza ulthoi okethen denon zaron, ul kalmetharoi."
: "May the gods see this oath, and the ancestors." (High Vylari: the opening of a sworn oath.)

"Daimela, orfenamen."
: "Patron, I am in your debt." (The client's greeting at the morning call; no pronoun, since saying "I" aloud would be forward.)

"A' thelmos lokazor. A' daimela falvazor."
: "The client's come; the patron's out." (Alessa street speech, with the worn-down article.)

"Humelthandar yarezor."
: "It is resting." (Said of a ruin, with a straight face.)

"Varelin yarezor."
: "It is true."

"Varlai."
: "Really?"

"Eza varlai."
: "Really?" (The formal question.)

"Aia, theson."
: "That thing of yours!" (A free person named in the neuter: the gravest insult the grammar allows.)

## Related Languages

Ancient Vylari is the mother of a family, and the scholars of [[place-orzara|Orzara]] call the family by the empire's name. [[skill-aelendlng|Áelendi]] split from it first, in the highlands, and keeps its old sounds; the Áelendan reject the name of the family outright. [[skill-elvndrlng|Élavendri]] is the lowland daughter of Áelendi. [[skill-provnzlng|Provenzal]] made articles of all three pointing words. [[skill-tarvenlng|Tarveni]] kept three genders, held up by an older mountain speech beneath it. [[skill-nordmalng|Nordmal]] and [[skill-varokhlng|Varokhi]] are cousins from the eastern Pelwar, outside the family. The [[skill-vylarilng#lexicon|Vylari Lexicon]] sets roots from all five daughters side by side.

## Naming Traditions

A Vylari name is a given name and a house name, the given name first, and a man of note adds an earned name after both, given by a city or an army after a deed or by a family after a death. A given name is a word with a gender ending; noble children take the hallowed _-as_ whether they are sons or daughters. A house name says whose descendants the bearer belongs to: the old houses add _-is_ to their founder's name, houses the sovereign has raised take _-ates_, and provincial families of standing often take their estate's name with _-en_.

A calling name is a child's name, the given name cut short with the neuter ending _-izon_, and it is used only by family and the closest friends of equal rank. The [[skill-vylarilng#lexicon|Vylari Lexicon]] gives the endings and the rules in full.

## Male Given Names

Thelvaros, Tharkos, Solkimar, Doros, Melvaris, Revothos, Zenothen, Kiramos, Solteros, Holimar, Orthemos, Ankelos, Pelerar, Teremos, Zetimis, Varelos, Kauren, Thaluros, Iltheros, Elthezar, Korvathos, Satheros, Talothar, Ronethos, Ganothis, Zurmelos, Nebralen, Kaldremos, Tholmaros, Volkemar, Brazemos, Tharozos, Kalmethar, Pirkelos, Gurimis, Sirethos, Nethoren, Marendos, Linthimos

## Female Given Names

Solkima, Thelvare, Kirama, Sirethis, Linthima, Lizelen, Nethore, Sirema, Sorimar, Marenda, Yalzema, Zunele, Pramiza, Hiltheris, Luvetha, Venthelen, Ilthere, Eltheza, Thalurar, Revotha, Varela, Zenothe, Holima, Orthemis, Nelama, Huraden, Kolsame, Gurima, Tholmarar, Kaldrema, Doranda, Pelere, Ankela, Teremis, Zetima, Nizelen, Kaure, Ornetha, Pirkelar, Tharoza, Volkema, Brazeme

## Clan Names

Kalmethis, Thelvaris, Tharkis, Dorandates, Revothandis, Zenothenos, Melvarandis, Solterates, Holimandis, Orthemandis, Korvathandis, Talothates, Ronethen, Ganothandis, Nebralandis, Tharozates, Venthelis, Gurimandis, Satheris, Zurmelates, Kaldremis, Tholmaris, Linthimis, Volkemates, Kolsamis, Pirkelis, Brazemen, Thalurates, Elthezis, Iltheris

## Vylari Lexicon {#lexicon}

A grammar master in [[place-orzara|Orzara]] begins every new class the same way. On the board he writes three words—_thrakon_, _verosa_ and _orzas_, a slave, a citizen and the sovereign—and the boys copy them. The slave is spoken of as a pot or a plow is, in the neuter. The citizen is spoken of as a man or a woman is. The sovereign is spoken of as a god is, in endings no other living person may take. By noon the class has learned the ranks of the old tongue, and the master has taught them the empire.

This is the word-hoard of Vylari in its two stages. **Ancient Vylari** is the formal tongue of the [[lore-pelwarpepl|Pelwar]] who settled the western coast in the [[lore-pelwarmigr|Migration]], reconstructed by the empire's scholars from the oldest inscriptions and from the tongues descended from it. Imperial Vylari is the empire's living speech, looser in its grammar and lighter in its sounds, and its high register keeps the ancient endings in law, liturgy and oratory. This page gives both forms of every word, the rules that turn the one into the other, the suffixes that make new words, and the way a Vylarian builds a name. A word made from these by those rules is a Vylari word.

The language page sets out the grammar. This page carries the words.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the imperial word as it is cited: a noun in its basic form, an adjective in its masculine, a verb in its infinitive. The ancient form stands beside it. A word made of smaller parts names the imperial words, stems and suffixes it is made of, joined by `+`, and the form is exactly what they give. A stem is written with a hyphen after it.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-vylarilng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

### Word edges

A word opens on a vowel, on one consonant, or on a stop followed by `l` or `r`, and the table names those pairs. A word closes on a vowel or on one of four consonants. A verb stem is bound and never closes a word, so it may end on any consonant. The edges are the same in both stages.

```sql
SELECT CASE edge WHEN 'openCluster' THEN 'Pairs that may open a word' WHEN 'closeConsonant' THEN 'Consonants that close a word' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-vylarilng' ORDER BY position
```

### Clusters

No more than three consonants stand together inside a word, and a pair of letters such as `th` counts as one. Two vowels never stand side by side except as one of the three diphthongs; where an ending would bring two vowels together, the stem's vowel gives way, as the suffix table shows.

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-vylarilng'
```

Two habits of speech are never written. In ordinary talk a long vowel in an unstressed syllable is said short, so the street clips the vowel; a speaker of High Vylari holds every length, and the difference marks his education as clearly as his clothes. In the [[place-hylen|Hilen]] lowlands `th` is said `s`, and a Hilen man's _sorimos_ (a poet) and his _thilos_ (a scribe) begin alike, with a hiss.

## Building words {#building-words}

### Suffixes

Most new words are a stem and a suffix. An office is a verb stem with _-os_ (a man who does it) or _-a_ (a woman), and the office itself takes _-alon_: from _usathen_ (to set over) come _usos_, a prefect, and _usalon_, a prefecture. A suffix that opens on a vowel replaces the stem's last vowel.

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-vylarilng'
ORDER BY position
```

A compound is the stem of one word set before a whole second word, the first describing the second: _ulmer-_ (water) and _pozera_ (a road) give _ulmerpozera_, the aqueduct.

## Making names {#making-names}

**A person** carries a given name and a house name, the given name first, and a man of note adds an earned name after both: a name given by a city or an army after a deed, or by a family after a death. The house name never changes with the bearer's sex.

### Given names

A given name is a root of the lexicon with a gender ending. Parents choose the root for what they wish on the child—a quality, a virtue, a god's favor—and the ending says whether the child is a son, a daughter or of a noble house.

| Ending              | Who                               |
| ------------------- | --------------------------------- |
| `-os`               | a man                             |
| `-ar`, `-is`, `-en` | a man or a woman                  |
| `-a`                | a woman                           |
| `-e`                | a woman                           |
| `-as`               | a man or a woman of a noble house |

A noble child's given name takes the hallowed _-as_ whatever its sex, so _Thelvaras_ may be the heir or his sister. The same root serves both: _Solkimos_ and _Solkima_ are a brother and a sister named for gravity, and their cousin in the senior line is _Solkimas_.

**Rank in speech.** A name ending in _-as_ claims a noble house, and a commoner who takes one claims what he does not have, for which a magistrate can fine him. The ending says nothing of sex, and a stranger learns whether _Thelvaras_ is a lord or a lady from the title before the name. To speak of a free person in the neuter, as _theson_ ("that thing of yours"), calls him a slave or a child; between citizens it is the gravest insult the language allows, and it has started duels. A sovereign is never "he" or "she" in formal speech, and a provincial who slips into the masculine marks himself at once. A family the Senate ennobles is raised by _ulthathen_ (to hallow): its founder's name takes the hallowed endings, and every member of the house carries them in the given name from then on. A house disgraced is unhallowed by _anulthathen_. The gravest act of all, _neharlon_, strikes a name from every roll, and it is not said.

### House names

A house name says whose descendants the bearer belongs to. The oldest houses name themselves from their founder with _-is_, "those of": a house founded by a man called _Kalmethar_ is the _Kalmetharis_. Houses the sovereign has raised in the last few generations take _-ates_, "of the line of", and a provincial family of standing is often named for its estate with _-en_.

| Ending  | Who                                                |
| ------- | -------------------------------------------------- |
| `-is`   | a house of the old nobility, named for its founder |
| `-ates` | a house raised by the sovereign                    |
| `-en`   | a provincial family named for its estate           |

### Calling names

A Vylari calling name is a child's name. It is the given name cut before its second vowel, with the neuter ending _-izon_ added: _Solkima_ is _Solkizon_ to her mother and her brothers, and _Thelvaras_ is _Thelvizon_ in his nursery. The neuter is the gender of a child not yet of age, so the calling name keeps something of the nursery about it for life.

| Ending  | Who                                       |
| ------- | ----------------------------------------- |
| `-izon` | anyone, by family and the closest friends |

A calling name is used only downward and inward: by parents, by brothers and sisters, by a husband or a wife, and by friends of long standing and equal rank. A client never uses his patron's, and a junior officer never uses his commander's. A Vylarian who hears his calling name from a stranger hears himself called a child, and answers accordingly. The pages give a person's full name, and his house name alone wherever a short form reads naturally, as a Vylarian of standing is addressed.

**A place** is a root with a place suffix: _-ara_ for a town, _-enna_ for a farm, an estate or the village around one, _-ora_ for a height or a stronghold. The ending _-ari_ serves as a place name too, "at the place of", and several old towns carry one.

**A month** is named with _-andi_, "in the keeping of", set on its god's name or on the god's gift: _Zunelandi_ is the month of [[lore-zunelasdty|Zunelas]], and _Thumbandi_ the month of the forge.

**An office or a body** takes _-os_ or _-alon_, as the suffix table shows. A law is named by _vornon_ (a law) followed by its subject.

## Words {#words}

### The hallowed and the gods

Every word in this table that names a god, and a handful that name other things, is hallowed, and the verb at its head is the one that puts them there. _Ulthathen_ (to hallow) is what a priest does to an altar and what the Senate does to a family it ennobles; _anulthathen_ undoes it, and the empire has used that verb on more great houses than it likes to remember. A god is _ulthas_, which is the same word made a noun: the hallowed one.

The vocabulary of the faith is the vocabulary of an institution. The imperial cult, _zalvon_, has a word to itself, distinct from a rite and from a prayer, because it is a department of state with revenues and a seat at public ceremonies. The Orzas is its Sarnaks Maldor in person, and the _holzathos_, a public officer named by the Senate, is his officer who administers the cult; an oath sworn before the _holzathos_ binds in the courts as well as before the gods. The oldest words in the table belong to the house: _karalzon_, the fire that is never let go out, and _karalzis_, the household gods who are "those of the kept fire".

### Ancestors, the house and the name

A Vylari house keeps its dead in the hall. Each ancestor who held office has a _lavura_, a wax mask of his face, in a cupboard beside the door, and on a funeral day the masks are worn by living men of the right build so that the whole line walks behind the bier. A line is an _dorthene_, and the word means the row of masks as much as the descent it records.

The household, _zorka_, is everyone under one roof and one master: wife, children, freedmen, slaves and the clients who come to the door each morning. Its master, the _zorkos_, answers for all of them at law and holds a power over his children that ends only at his death. So the words for kin are many and exact, and so is the vocabulary of inheritance: an heir is named in a will, a son may be adopted from another house when a line runs short, and _aipsena_ (adoption) is as honorable a way to get an heir as any other. The worst thing that can happen to a name has a word of its own: _neharlon_, the unnaming, which strikes a person from every roll and forbids anyone to say the name aloud.

### Precedence, patronage and what is owed

No table in this lexicon is longer for its subject, and that is the plainest thing the language says about its speakers. A Vylarian _places_ a stranger before anything else is said—_zirothathen_, to settle his step of rank—and the word for a person whose rank nobody knows, _anzirothos_, is an uneasy one, used of foreigners and of guests who will not give their patron's name.

The patron, _daimela_, ends in _-a_ but is masculine, and the grammarians explain the exception by the office: a patron is a lord, whatever his ending. The client, _thelmos_, attends him at the morning call, the _pramolza_, and every favor done in either direction leaves an _orfenon_, a debt that is real though no court enforces it. The order of what is owed has one word, _yerpalon_: the gods, the ancestors, the house, the patron, the city, the empire, in that order and no other.

The words for persons follow the genders. A citizen, _verosa_, is a feminine noun whether the citizen is a man or a woman, because the word is old and formal. A slave, _thrakon_, is neuter, as a tool is. A freedman, _liskothos_, has a gender because manumission gave him one, and _liskaima_ (manumission) is the act that does it.

### Law, the court and the written act

The Vylarian reflex in a quarrel is to sue, and the lexicon is built for it. There are words for the suit and the act of bringing it, for the advocate who carries another's case, the witness who saw, the judgment, the appeal that carries it upward, and the penalty laid at the end. A writing becomes an act when it carries a seal, _thizaron_, and the keeper of a house's seals is a trusted officer, since a document sealed in his absence is a forgery.

The words for searching out a matter—_sekera_ (an inquiry), the inquirer and the body that inquires—belong to law and to the arcane order alike. Exile, _venthodis_, is the gravest sentence a court gives a citizen; the unnaming is graver, and only the Senate gives it.

### The state and its offices

The sovereign is _Orzas_, a hallowed word like a god's, and it has no sex: an empress is _Orzas_ too. Most of the empire's offices are a stem with _-os_ after it, so the title says what the holder does. The _usos_ is set over a thing (_usathen_), and a compound names the thing: the _thaurusos_ commands the guard, the _zoralus_ a province's watch. The _lusos_ stands before the commons, the _karezos_ sees to the sovereign's property in a province, and the _felzos_ goes where the sovereign sends him. The office itself takes _-alon_: the charge of an _usos_ is an _usalon_, and the empire is _orzalon_, the whole of what is commanded.

A body that sits and votes is a _kurthema_, a senate, and each of its members is a _kurthos_; the empire's own is the _Seldan_. A lesser council is a _kurthalon_, and each of its members a _kurthalos_. Two _tavoi_ give the year its name, from the root of _tavemer_ (two), and a chartered town elects its own pair, the _tavemoi_. A man who has held the _tavalon_ is _tavalen_, and only such a man governs a province of the _kurthema_, as its _tavtherkos_; the sovereign's own provinces have a _therkos_. The _nazdos_ judges the civil courts, the _vornos_ declares the law for his year, the _theronos_ takes the count of persons and property, the _tarkelos_ keeps the public chest, and in the capital each ward answers to its _peltros_.

The nobility stands in four estates, each named with _-en_ for what marks its houses: the _ethlenoi_ of the gold, the _ankrenoi_ of the silver, the _thurdenoi_ of the bronze, and the _pelerenoi_, the new houses, which carry no metal. A noble is addressed by his estate before his house name, in the masculine for a man and the feminine for a woman: _Ethlen Kalmetharis_, _Ethlena Kalmetharis_.

### The legions and the frontier

The army's words are hard, short and numerous, and every one of them names a thing a soldier can point at. A legion is _thramezos_, and its soldiers are _thramezan_, the sworn: a recruit, _yunakos_, is not one until he has taken the soldier's oath, the _thramezon_, and the oath, not the pay, is what makes desertion a crime against the gods. The eagle, _orkaima_, is consecrated, and a legion that loses it is disbanded.

The frontier, _uthrima_, shares its root with _thrima_, the hallowed boundary of a city, and the two words are the empire's whole theory of itself: a line inside which the law runs, held by men sworn to hold it. Outside it lives the _altheros_, the outsider, a word that means "one who lives without the law" and is never quite polite.

### The city: stone, water and the street

A Vylari city is _veramis_, the walled place of citizens, and a citizen is _verosa_: the two words share a root, and the old grammar reads the one as the place of the other. Around the city runs the _thrima_, the hallowed boundary inside which no legion may march under arms.

The words for the city's works are proud and particular: the aqueduct is _ulmerpozera_, a road for water, and it is built like one. The words for its decay are courteous. A building nobody has repaired in two generations is _humelthandar_, resting, and a Vylarian walking a visitor past a roofless temple calls it resting with a straight face. The city has no plain word for a ruin inside its own walls, and a visitor who supplies one gives offense.

### Craft, guild and the kept secret

A guild is _tevran_, a body chartered for one craft, and the guilds of a city together are the _kelralon_. The word that explains them is _kelthon_: a kept secret, a technique held as property of the same order as land, inherited by an heir and sued over in court. The grades of a craft are three: the apprentice bound to a bench for seven years, the journeyman who works another's bench for a wage, and the master, _gartos_, who holds a bench of his own, which is to say a share in the secret. Steel, _thalbezon_, is the most famous secret of all, and its word is never used of the common iron a village smith beats out.

### Coin, trade and the counting-table

The empire's money has three names, each a step down. The gold coin is _Solden_, hallowed like a god and struck only at the capital with the sovereign's face on it; the silver coin, _ankra_, is the coin of account in which prices are reckoned; and the _kezilon_, the wedge, is one eighth of a silver coin, cut from it with a chisel when change is wanted. A gold coin's hallowed ending is the reason an ordinary Vylarian who handles one says its name with a little ceremony.

The moneylender, _fezumos_, lends at interest, _fezumalon_, and issues paper notes against the treasury's reserves. The merchant, _delamos_, is respectable and rich and is never quite a gentleman, since a man of standing lives from land.

### Land, the vine and the river

The great river is _[Vilaras]{.name data-type="place/feature"}_, and it is hallowed: the only river in the language named with a god's ending, because the empire was born beside it, and the land and the people take their name from it. A field is worked by a tenant farmer, _polthos_, for a share of what it bears, and the vine, the olive and the grain are the three crops whose words appear in the old oaths. The words for weather are few and plain, and the words for land, its boundaries and its standing stones are many, because land is what a family of standing lives on and what its suits are about.

### The sea and the sailing year

The [[place-vylarianse|Vylarian Sea]] has its year, and the year turns on the _aistroi_, the steady northerlies of late summer that carry the grain fleets home. The word is plural and never takes a singular; a sailor says the winds have come, never that one has. A ship is _threnema_, the fleet _threnemalon_, and a warship is a battle-ship, _korduthrenema_, built from the word for a battle.

### The body, life and death

Death has a word, _kolvazis_, and the language uses it as seldom as it can. A Vylarian who has died _goes to the ancestors_, _kalmethathen_, and takes his place among the masks in the hall. The tombs of a city stand along the roads outside its hallowed boundary, where the dead may lie, and the line of them is the _zemrolara_, the town of the tombs.

The hand, _dekazu_, is also the word for the power a master holds over a person, and to be "in the hand" of someone is to be his ward, his slave or his wife.

### Time, the calendar and the festivals

The Vylarian year is counted from the founding, _zerthazis_, the same root as the founder of a house, so that the city is in its own reckoning a house with a founder of its own. The morning, _pramiza_, shares its root with the morning call, because for most citizens of standing the day begins at a patron's door.

### Learning, speech and the letters

The words of learning were made for the Senate and the courts first and the schools second. An oration, _dokemon_, is a speech made in public to persuade, and the orator who makes one is the highest kind of educated man the language names. The school, _marendalon_, and the University, _zetmarendalon_ (the school of every learning), train him; the master licensed to teach is a _marendos_, and a lecturer is a reader, _lorezos_, because the lecture is a reading aloud from a book with a commentary.

The arcane order is the _thordimalon_, the body of the art, and it borrows the vocabulary of the guilds and the schools. Its grades read as a career: an initiate, _kosthemos_; an adept licensed to work alone, _therman_; a master, _marendos_; and a prelate with a seat on the order's council, _holmarendos_. The master over every master is the _zetmarendos_. Each of its six schools is a _zulen_, a fellowship, and its written code is the _[thordimthilandon]{.name data-type="lore/law"}_. Magic itself is _thordima_, the art, and a mage is one who practices it.

### Qualities

An adjective takes the gender of its noun, so a Vylari adjective has a form for each: _thelvaros_ for a nobleman, _thelvara_ for a noblewoman, _thelvaron_ for a noble thing, and with a hallowed ending _thelvaras_, which in imperial speech survives only on names. The table gives the masculine. The colors are few and the words for worth, weight and standing many: _solkimos_ (weighty, grave) is the highest praise one senator gives another.

### Doing, going and being

A verb is cited here by its infinitive, the form a grammar master writes on the board.

### Numbers and grammar words

The numbers count in tens, and twelve has a word of its own, _dorekis_, because it is the number of the gods. From third on, an ordinal is the cardinal's stem with _-oros_: _karzoros_, third. The pronouns are short and seldom said: _en_ (I) spoken aloud is a raised voice.

## Shared roots {#shared-roots}

Ancient Vylari is the mother of five tongues, and the scholars of [[place-orzara|Orzara]] named it for the one of them the empire speaks. The [[lore-aelendnppl|Áelendan]] reject the name; to them the old tongue is their own, and the empire's speech its worn-down coastal cousin.

- [[skill-aelendlng|Áelendi]] split first, carried over the eastern pass into the highlands, and kept the old sounds best of all: it still clicks its stops. It lost the lip sounds, took a great layer of words from [[skill-sinalelng|Sinale]], and kept its old oaths.
- [[skill-elvndrlng|Élavendri]] is the lowland daughter of Áelendi, softened and sung.
- Imperial Vylari stayed on the coast, kept the most grammar and lightened its sounds.
- [[skill-provnzlng|Provenzal]] made articles of all three pointing words, and turned its consonants soft between vowels.
- [[skill-tarvenlng|Tarveni]] kept three genders, held up by the older mountain speech it settled over.

[[skill-nordmalng|Nordmal]] and [[skill-varokhlng|Varokhi]] are Pelwar tongues too, from the eastern branch that never came west, and they stand outside this family. The table below sets side by side every root that three or more daughters kept, each in the form its own lexicon gives, and a dash marks a daughter that lost the word. Each daughter changes the root by its own rules, which its own lexicon sets out; Élavendri takes it through Áelendi.

### Daughters

```sql
SELECT '[[' || l.language || '|]]' AS "Daughter",
       coalesce(max('[[' || m.ancestor || '|]]'), '—') AS "Through"
FROM language_lineage l
LEFT JOIN language_lineage m ON m.language = l.language AND m.depth = 1 AND l.depth > 1
WHERE l.ancestor = 'thalorna-note-skill-vylarilng' AND l.depth > 0
GROUP BY l.language ORDER BY l.language
```

### Cognates

```sql
SELECT '`' || max(form) FILTER (WHERE form_language = 'thalorna-note-skill-vylarilng') || '`' AS "Imperial",
       '`*' || max(proto) || '`' AS "Ancient",
       '`' || max(form) FILTER (WHERE form_language = 'thalorna-note-skill-aelendlng') || '`' AS "Áelendi",
       coalesce('`' || max(form) FILTER (WHERE form_language = 'thalorna-note-skill-elvndrlng') || '`', '—') AS "Élavendri",
       coalesce('`' || max(form) FILTER (WHERE form_language = 'thalorna-note-skill-provnzlng') || '`', '—') AS "Provenzal",
       coalesce('`' || max(form) FILTER (WHERE form_language = 'thalorna-note-skill-tarvenlng') || '`', '—') AS "Tarveni", gloss AS "Gloss"
FROM cognates WHERE language = 'thalorna-note-skill-vylarilng'
GROUP BY position, gloss ORDER BY position
```

## Attested names {#attested-names}

Every name in the scope of the Vylari tongue—every person of the Vylarian culture, every place and body of the empire, the language and its scripts—with every note where it is met. A person or a place a page names in bold, with no note of its own, stands here with the pages that name it. A name in the reader's tongue is listed so that the register is complete, and it is not built. A Vylari name whose **Built from** cell shows `—` is one the lexicon does not yet make.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-vylarilng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-vylarilng' ORDER BY position
```

### Retired names

A retired name is one the setting does not write: a name from Earth, or a form the rules refuse. Each stands below with the name written in its place, and no page writes it, however accented. A literature note quotes its work in the work's own words and a poem keeps its own, so a retired name may stand in either, and a `terran_analog` comment names the Earth source on purpose.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-vylarilng' ORDER BY position
```
