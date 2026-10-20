---
shortcode: vylarilng
name: {full: Vylari Language, aliases: []}
type: skill
subType: language
description: "The imperial tongue of the Vylarian court and, as the Vylarians hold it, the language of learning, government, the arcane and the university system in the empire and the lands that look to it."
tags: []
data:
  abbreviation: Vyl.
  classModifiers: [m, f, "n"]
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
      examples: ["orz- > orzen"]
    - form: "-ara"
      gloss: "a town of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["zemrol- > zemrolara"]
    - form: "-enna"
      gloss: "a farm, an estate or a village of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["taloth- > talothenna"]
    - form: "-ora"
      gloss: "a height or a stronghold of it"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["tholkez- > tholkezora"]
    - form: "-is"
      gloss: "those of it: a house name"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["karalz- > karalzis"]
    - form: "-ates"
      gloss: "of the line of it: a house name"
      attaches: "replaces the final vowel"
      replaces: vowel
    - form: "-andi"
      gloss: "in the keeping of: the ending that names a month"
      attaches: "replaces the final vowel"
      replaces: vowel
      examples: ["zunel- > zunelandi"]
    - form: "-oros"
      gloss: "ordinal: the place in a count"
      attaches: "replaces the cardinal's ending"
      examples: ["karzis > karzoros", "selthur > selthoros"]
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
      gloss: "faith; trust; the holding of a thing true"
      source: {kind: coined}
    - form: ulthnethoron
      class: n n
      field: The hallowed and the gods
      gloss: "agape; selfless love, given to others or to the gods without asking a return"
      source: {kind: coined}
      built: ["ulth-", nethoron]
    - form: kalmethar
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "an ancestor; one of the dead a house still counts"
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
      field: "Ancestors, the house and the name"
      gloss: "a line; a lineage traced through the hall's masks"
      source: {kind: inherited}
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
      source: {kind: inherited}
    - form: mezara
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a mother"
      source: {kind: inherited, form: medhara}
    - form: nurethos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a son"
      source: {kind: inherited}
    - form: nuretha
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a daughter"
      source: {kind: inherited}
    - form: semrothos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a brother"
      source: {kind: inherited}
    - form: semrotha
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a sister"
      source: {kind: inherited}
    - form: nurizon
      class: n n
      field: "Ancestors, the house and the name"
      gloss: "a child; a person not yet of age, and in law not yet a person"
      source: {kind: inherited}
    - form: kambetha
      class: n f
      field: "Ancestors, the house and the name"
      gloss: "a wife; a woman married into a household"
      source: {kind: inherited}
    - form: kambethos
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "a husband"
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
      field: "Ancestors, the house and the name"
      gloss: "a name"
      source: {kind: inherited}
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
      field: "Ancestors, the house and the name"
      gloss: "a marriage; the handing of a woman from one household to another"
      source: {kind: inherited}
    - form: sorethis
      class: n m
      field: "Ancestors, the house and the name"
      gloss: "kin; those of one blood"
      source: {kind: inherited}
    - form: sorethon
      class: n n
      plural: sorethar
      field: "Ancestors, the house and the name"
      gloss: "storge; the love of family, of parent and child"
      source: {kind: coined}
    - form: zirothos
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a step of rank; one rung of the order"
      source: {kind: inherited}
    - form: zirothalon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "precedence; the order of a room worked out to the step"
      source: {kind: inherited}
      built: ["ziroth-", "-alon"]
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
      field: "Precedence, patronage and what is owed"
      gloss: "to owe; to stand under a favor"
      source: {kind: inherited}
    - form: velda
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "honor; a public thing, made of offices held and remembered"
      source: {kind: inherited, form: welda}
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
      field: "Precedence, patronage and what is owed"
      gloss: "a guest; one under a host's roof and his protection"
      source: {kind: inherited, form: dumwaros}
    - form: dumvaralon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "guest-right; what a host owes a guest and a guest a host"
      source: {kind: inherited, form: dumwaralon}
      built: ["dumvar-", "-alon"]
    - form: haldethos
      class: n m
      field: "Precedence, patronage and what is owed"
      gloss: "a host"
      source: {kind: inherited}
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
      field: "Precedence, patronage and what is owed"
      gloss: "to forgive; to release from what is owed"
      source: {kind: coined}
      built: ["an-", orfenathen]
    - form: vethvelda
      class: n f
      field: "Precedence, patronage and what is owed"
      gloss: "pride; honor a person claims for himself"
      source: {kind: coined}
      built: ["veth-", velda]
    - form: vethdokemon
      class: n n
      field: "Precedence, patronage and what is owed"
      gloss: "boasting; a boast; a speech made in one's own praise"
      source: {kind: coined}
      built: ["veth-", dokemon]
    - form: holvethon
      class: n n
      plural: holvethar
      field: "Precedence, patronage and what is owed"
      gloss: "philia; the affection of friends; the bond of companions"
      source: {kind: coined}
    - form: vornon
      class: n n
      plural: vornar
      field: "Law, the court and the written act"
      gloss: "a law; a statute the Senate has voted"
      source: {kind: inherited, form: wornon}
    - form: vornalon
      class: n n
      field: "Law, the court and the written act"
      gloss: "the law; the whole body of statute"
      source: {kind: inherited, form: wornalon}
      built: ["vorn-", "-alon"]
    - form: zesima
      class: n f
      field: "Law, the court and the written act"
      gloss: "a custom; what is done because it has always been done"
      source: {kind: inherited, form: dhesima}
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
      field: "Law, the court and the written act"
      gloss: "within one's right; lawful, of an act or a claim"
      source: {kind: inherited}
    - form: frenkon
      class: n n
      plural: frenkar
      field: "Law, the court and the written act"
      gloss: "property; a thing owned, land or slave or craft"
      source: {kind: inherited}
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
      gloss: "to protect; to stand before"
      source: {kind: inherited}
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
      gloss: "to send"
      source: {kind: inherited}
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
      gloss: "to fight; in the passive, there is fighting"
      source: {kind: inherited}
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
      gloss: "a gate"
      source: {kind: inherited}
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
      gloss: "to lead"
      source: {kind: inherited}
    - form: thrumar
      class: n m
      field: The legions and the frontier
      gloss: "a general; a war-leader"
      source: {kind: inherited}
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
      gloss: "peace; the quiet between neighbors"
      source: {kind: inherited, form: predha}
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
      gloss: "war"
      source: {kind: inherited}
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
      gloss: "a companion; one who rides beside a commander"
      source: {kind: inherited, form: holwethos}
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
      gloss: "a hill; one of the hills a city sits on"
      source: {kind: inherited}
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
      gloss: "a cord; the measuring line a boundary is walked with"
      source: {kind: coined}
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
      field: "Craft, guild and the kept secret"
      gloss: "a bench; a master's place in a workshop, and the right to hold one"
      source: {kind: inherited, form: ghartema}
    - form: gartos
      class: n m
      field: "Craft, guild and the kept secret"
      gloss: "a master; one who holds a bench and may take apprentices"
      source: {kind: inherited, form: ghartos}
      built: ["gart-", "-os"]
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
      field: "Craft, guild and the kept secret"
      gloss: "a hammer"
      source: {kind: inherited}
    - form: thumisa
      class: n f
      field: "Craft, guild and the kept secret"
      gloss: "a maker's mark; the sign struck on a finished piece"
      source: {kind: inherited}
    - form: tambathen
      class: v
      field: "Craft, guild and the kept secret"
      gloss: "to make; to do"
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
      field: "Coin, trade and the counting-table"
      gloss: "a merchant"
      source: {kind: inherited}
    - form: delathen
      class: v
      field: "Coin, trade and the counting-table"
      gloss: "to trade; to buy and sell"
      source: {kind: inherited}
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
      field: "Coin, trade and the counting-table"
      gloss: "a debt"
      source: {kind: inherited, form: nedhora}
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
      field: "Coin, trade and the counting-table"
      gloss: "to count; to reckon; to date by a reckoning"
      source: {kind: coined}
    - form: verdakeza
      class: n f
      field: "Coin, trade and the counting-table"
      gloss: "greed; the want of more than a thing is worth"
      source: {kind: coined}
    - form: yormalis
      class: n f
      field: "Land, the vine and the river"
      gloss: "land; the ground a house owns"
      source: {kind: inherited}
    - form: polthamis
      class: n f
      field: "Land, the vine and the river"
      gloss: "a field; farmland"
      source: {kind: inherited}
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
      field: "Land, the vine and the river"
      gloss: "a river; running water"
      source: {kind: inherited}
    - form: linthima
      class: n f
      field: "Land, the vine and the river"
      gloss: "a spring"
      source: {kind: inherited}
    - form: tholmara
      class: n f
      field: "Land, the vine and the river"
      gloss: "a lake"
      source: {kind: inherited}
    - form: nebralis
      class: n f
      field: "Land, the vine and the river"
      gloss: "a valley"
      source: {kind: inherited}
    - form: ronethos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a mountain"
      source: {kind: inherited}
    - form: ganothos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a pass; a gate through the hills"
      source: {kind: inherited}
    - form: lizela
      class: n f
      field: "Land, the vine and the river"
      gloss: "a flower"
      source: {kind: inherited}
    - form: kaldrema
      class: n f
      field: "Land, the vine and the river"
      gloss: "a wood; a forest"
      source: {kind: inherited}
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
      field: "Land, the vine and the river"
      gloss: "snow"
      source: {kind: inherited}
    - form: huradis
      class: n f
      field: "Land, the vine and the river"
      gloss: "rain"
      source: {kind: inherited}
    - form: korvathis
      class: n m
      field: "Land, the vine and the river"
      gloss: "the sun"
      source: {kind: inherited, form: korwathis}
    - form: yalzemis
      class: n f
      field: "Land, the vine and the river"
      gloss: "the moon"
      source: {kind: inherited}
    - form: ilthera
      class: n f
      field: "Land, the vine and the river"
      gloss: "a star"
      source: {kind: inherited}
    - form: iltheron
      class: n n
      field: "Land, the vine and the river"
      gloss: "a circle of stars; the whole of the stars"
      source: {kind: inherited}
      built: ["ilther-", "-alon"]
    - form: satheros
      class: n m
      field: "Land, the vine and the river"
      gloss: "a wind"
      source: {kind: inherited}
    - form: talothos
      class: n m
      field: "Land, the vine and the river"
      gloss: "a standing stone; a boundary stone"
      source: {kind: inherited}
    - form: elza
      class: n f
      field: "Land, the vine and the river"
      gloss: "ash; a cinder"
      source: {kind: inherited, form: eldha}
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
      field: "Land, the vine and the river"
      gloss: "a fish"
      source: {kind: inherited}
    - form: sedon
      class: n n
      field: "Land, the vine and the river"
      gloss: "a place; a spot; the ground a thing stands on"
      source: {kind: coined}
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
      gloss: "the sea"
      source: {kind: inherited}
    - form: salkon
      class: n n
      field: The sea and the sailing year
      gloss: "a shore"
      source: {kind: inherited}
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
      gloss: "a storm"
      source: {kind: inherited}
    - form: zurmela
      class: n f
      field: The sea and the sailing year
      gloss: "thunder"
      source: {kind: inherited, form: dhurmela}
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
      source: {kind: inherited}
    - form: yenthamis
      class: n f
      field: "The body, life and death"
      gloss: "a face"
      source: {kind: inherited}
    - form: dekazu
      class: n m
      field: "The body, life and death"
      gloss: "a hand; also the power a master holds over a person"
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
      source: {kind: inherited}
    - form: nethora
      class: n f
      field: "The body, life and death"
      gloss: "a heart"
      source: {kind: inherited}
    - form: bruzamis
      class: n f
      field: "The body, life and death"
      gloss: "blood"
      source: {kind: inherited, form: brudhamis}
    - form: sirema
      class: n f
      field: "The body, life and death"
      gloss: "life"
      source: {kind: inherited}
    - form: kolvazis
      class: n f
      field: "The body, life and death"
      gloss: "death; a word said as seldom as it can be"
      source: {kind: inherited, form: kholwazis}
    - form: kalmethathen
      class: v
      field: "The body, life and death"
      gloss: "to go to the ancestors; to die, as the courteous say it"
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
      field: "The body, life and death"
      gloss: "a cloak; the citizen's gown"
      source: {kind: inherited}
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
      source: {kind: coined}
    - form: okandon
      class: n n
      field: "The body, life and death"
      gloss: "a sight; a thing seen; the look of a thing (okandon ol ulfoi, the sight of fish)"
      source: {kind: coined}
      built: ["ok-", "-andon"]
    - form: thavandon
      class: n n
      field: "The body, life and death"
      gloss: "a sound; a thing heard"
      source: {kind: coined}
      built: ["thav-", "-andon"]
    - form: tirmis
      class: n f
      field: "The body, life and death"
      gloss: "a taste; a flavour (tirmis ol thremuzis, the taste of salt)"
      source: {kind: coined}
    - form: tolvis
      class: n f
      field: "The body, life and death"
      gloss: "a touch; the feel of a thing"
      source: {kind: coined}
    - form: kremeza
      class: n f
      field: "The body, life and death"
      gloss: "wrath; anger that burns"
      source: {kind: coined}
    - form: thesavon
      class: n n
      field: "The body, life and death"
      gloss: "envy; the want of what another has"
      source: {kind: coined}
    - form: orva
      class: n f
      field: "The body, life and death"
      gloss: "hope"
      source: {kind: coined}
    - form: anorva
      class: n f
      field: "The body, life and death"
      gloss: "despair; hope given up"
      source: {kind: coined}
      built: ["an-", orva]
    - form: nemborva
      class: n f
      field: "The body, life and death"
      gloss: "disappointment; a hope that has fallen"
      source: {kind: coined}
      built: ["nemb-", orva]
    - form: bruzeza
      class: n f
      field: "The body, life and death"
      gloss: "lust; the want of the body, the heat of the blood"
      source: {kind: coined}
    - form: nethoron
      class: n n
      field: "The body, life and death"
      gloss: "romantic love; the love between lovers"
      source: {kind: coined}
    - form: tharnela
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "a year"
      source: {kind: inherited}
    - form: oltrema
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "a month"
      source: {kind: inherited}
    - form: nardelon
      class: n n
      field: "Time, the calendar and the festivals"
      gloss: "a day"
      source: {kind: inherited}
    - form: zunela
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "night"
      source: {kind: inherited, form: dhunela}
    - form: thapelon
      class: n n
      field: "Time, the calendar and the festivals"
      gloss: "an hour"
      source: {kind: inherited}
    - form: pramiza
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "the morning; the hour of the morning call"
      source: {kind: inherited}
    - form: hilthera
      class: n f
      field: "Time, the calendar and the festivals"
      gloss: "the evening"
      source: {kind: inherited}
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
      field: "Learning, speech and the letters"
      gloss: "to speak; to say before others"
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
      field: "Learning, speech and the letters"
      gloss: "a tongue; a language"
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
      field: "Learning, speech and the letters"
      gloss: "a master; a teacher licensed to teach"
      source: {kind: inherited}
      built: ["marend-", "-os"]
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
      field: "Learning, speech and the letters"
      gloss: "a student"
      source: {kind: inherited, form: ghalethos}
    - form: kezdathen
      class: v
      field: "Learning, speech and the letters"
      gloss: "to know"
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
      gloss: "high; noble"
      source: {kind: inherited, form: thelwaros}
    - form: melvar
      class: adj
      field: Qualities
      gloss: "great"
      source: {kind: inherited, form: melwar}
    - {form: dorandar, class: adj, field: Qualities, gloss: "enduring", source: {kind: inherited}}
    - {form: dayos, class: adj, field: Qualities, gloss: "good", source: {kind: inherited}}
    - {form: korethos, class: adj, field: Qualities, gloss: "bad", source: {kind: inherited}}
    - {form: solteros, class: adj, field: Qualities, gloss: "large", source: {kind: inherited}}
    - {form: nizelos, class: adj, field: Qualities, gloss: "small", source: {kind: inherited}}
    - {form: peleros, class: adj, field: Qualities, gloss: "new", source: {kind: inherited}}
    - {form: ankelos, class: adj, field: Qualities, gloss: "old", source: {kind: inherited}}
    - {form: teremos, class: adj, field: Qualities, gloss: "long", source: {kind: inherited}}
    - form: zetimos
      class: adj
      field: Qualities
      gloss: "all; every; whole"
      source: {kind: inherited}
    - form: kiramos
      class: adj
      field: Qualities
      gloss: "bright; famous"
      source: {kind: inherited}
    - {form: tharkos, class: adj, field: Qualities, gloss: "strong", source: {kind: inherited}}
    - form: solkimos
      class: adj
      field: Qualities
      gloss: "weighty; grave"
      source: {kind: inherited}
    - form: revothos
      class: adj
      field: Qualities
      gloss: "free"
      source: {kind: inherited, form: rewothos}
    - form: varelin
      class: adj
      field: Qualities
      gloss: "true"
      source: {kind: inherited, form: warelin}
    - form: varelza
      class: n f
      field: Qualities
      gloss: "truth"
      source: {kind: coined}
      built: ["varel-", "-za"]
    - {form: sethros, class: adj, field: Qualities, gloss: "false", source: {kind: inherited}}
    - {form: zenothos, class: adj, field: Qualities, gloss: "wise", source: {kind: inherited}}
    - {form: holimos, class: adj, field: Qualities, gloss: "first", source: {kind: inherited}}
    - {form: orthemos, class: adj, field: Qualities, gloss: "last", source: {kind: inherited}}
    - {form: iltheros, class: adj, field: Qualities, gloss: "white", source: {kind: inherited}}
    - {form: kauros, class: adj, field: Qualities, gloss: "black; dark", source: {kind: inherited}}
    - {form: thaluros, class: adj, field: Qualities, gloss: "red", source: {kind: inherited}}
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
    - {form: mazeron, class: adv, field: Qualities, gloss: "more", source: {kind: inherited}}
    - {form: nizeron, class: adv, field: Qualities, gloss: "less", source: {kind: inherited}}
    - form: zikai
      class: adv
      field: Qualities
      gloss: "perhaps; the irregular adverb of zikon, fate"
      source: {kind: coined}
      built: ["zik-", "-ai"]
    - form: varlai
      class: adv
      field: Qualities
      gloss: "truly; standing alone, Really?"
      source: {kind: coined}
      built: ["varel-", "-ai"]
    - {form: zelos, class: adj, field: Qualities, gloss: "low", source: {kind: coined}}
    - {form: levros, class: adj, field: Qualities, gloss: "smooth", source: {kind: coined}}
    - form: yarethen
      class: v
      field: "Doing, going and being"
      gloss: "to be"
      source: {kind: inherited}
    - form: kerathen
      class: v
      field: "Doing, going and being"
      gloss: "to hold; to have"
      source: {kind: inherited}
    - form: lokathen
      class: v
      field: "Doing, going and being"
      gloss: "to come"
      source: {kind: inherited}
    - form: tigathen
      class: v
      field: "Doing, going and being"
      gloss: "to go"
      source: {kind: inherited}
    - form: okethen
      class: v
      field: "Doing, going and being"
      gloss: "to see"
      source: {kind: inherited}
    - form: thavithen
      class: v
      field: "Doing, going and being"
      gloss: "to hear"
      source: {kind: inherited, form: thawithen}
    - form: vakathen
      class: v
      field: "Doing, going and being"
      gloss: "to show"
      source: {kind: inherited, form: wakathen}
    - form: daimathen
      class: v
      field: "Doing, going and being"
      gloss: "to give; to grant as a patron grants"
      source: {kind: inherited}
    - form: kurethen
      class: v
      field: "Doing, going and being"
      gloss: "to take"
      source: {kind: inherited}
    - form: lozethen
      class: v
      field: "Doing, going and being"
      gloss: "to carry"
      source: {kind: inherited}
    - form: thalethen
      class: v
      field: "Doing, going and being"
      gloss: "to stand"
      source: {kind: inherited}
    - form: ombithen
      class: v
      field: "Doing, going and being"
      gloss: "to sit; to take one's seat in order"
      source: {kind: inherited}
    - form: nembethen
      class: v
      field: "Doing, going and being"
      gloss: "to fall"
      source: {kind: inherited}
    - form: urzithen
      class: v
      field: "Doing, going and being"
      gloss: "to rise"
      source: {kind: inherited}
    - form: gaurathen
      class: v
      field: "Doing, going and being"
      gloss: "to build"
      source: {kind: inherited, form: ghaurathen}
    - form: thaurathen
      class: v
      field: "Doing, going and being"
      gloss: "to keep; to guard"
      source: {kind: inherited}
    - form: thernathen
      class: v
      field: "Doing, going and being"
      gloss: "to live"
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
      source: {kind: inherited}
    - form: solkatora
      class: v
      field: "Doing, going and being"
      gloss: "to follow; to attend as a client attends"
      source: {kind: inherited}
    - form: valmathen
      class: v
      field: "Doing, going and being"
      gloss: "to walk; to pace out a line"
      source: {kind: coined}
    - form: lendathen
      class: v
      field: "Doing, going and being"
      gloss: "to set; to lay a thing in its place"
      source: {kind: coined}
    - form: olmathen
      class: v
      field: "Doing, going and being"
      gloss: "to open"
      source: {kind: coined}
    - form: volzathen
      class: v
      field: "Doing, going and being"
      gloss: "to turn"
      source: {kind: coined}
    - form: klinethen
      class: v
      field: "Doing, going and being"
      gloss: "to bend; to lean; to bow"
      source: {kind: coined}
    - form: pethathen
      class: v
      field: "Doing, going and being"
      gloss: "to ask"
      source: {kind: coined}
    - form: zundathen
      class: v
      field: "Doing, going and being"
      gloss: "to tie; to make fast; to knot"
      source: {kind: coined}
    - form: linkathen
      class: v
      field: "Doing, going and being"
      gloss: "to leave; to let be; to let go"
      source: {kind: coined}
    - form: kremethen
      class: v
      field: "Doing, going and being"
      gloss: "to burn"
      source: {kind: coined}
    - form: sistathen
      class: v
      field: "Doing, going and being"
      gloss: "to stop; to cease"
      source: {kind: coined}
    - form: avethen
      class: v
      field: "Doing, going and being"
      gloss: "to want; to desire"
      source: {kind: coined}
    - form: memrathen
      class: v
      field: "Doing, going and being"
      gloss: "to remember"
      source: {kind: coined}
    - form: klamethen
      class: v
      field: "Doing, going and being"
      gloss: "to call out; to shout"
      source: {kind: coined}
    - form: anolmathen
      class: v
      field: "Doing, going and being"
      gloss: "to close"
      source: {kind: coined}
      built: ["an-", olmathen]
    - form: anmemrathen
      class: v
      field: "Doing, going and being"
      gloss: "to forget"
      source: {kind: coined}
      built: ["an-", memrathen]
    - form: dunathen
      class: v
      field: "Doing, going and being"
      gloss: "to be able; can"
      source: {kind: coined}
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
      source: {kind: coined}
    - form: tirmathen
      class: v
      field: "Doing, going and being"
      gloss: "to taste"
      source: {kind: coined}
    - form: tolvathen
      class: v
      field: "Doing, going and being"
      gloss: "to feel; to touch"
      source: {kind: coined}
    - form: thesavethen
      class: v
      field: "Doing, going and being"
      gloss: "to envy"
      source: {kind: coined}
      built: ["thes-", avethen]
    - form: orvathen
      class: v
      field: "Doing, going and being"
      gloss: "to hope"
      source: {kind: coined}
    - form: vethdokathen
      class: v
      field: "Doing, going and being"
      gloss: "to boast"
      source: {kind: coined}
      built: ["veth-", dokathen]
    - form: varelathen
      class: v
      field: "Doing, going and being"
      gloss: "to trust; to believe"
      source: {kind: coined}
    - form: nethorathen
      class: v
      field: "Doing, going and being"
      gloss: "to love, as lovers love"
      source: {kind: coined}
    - form: urkis
      class: num
      field: Numbers and grammar words
      gloss: "one"
      source: {kind: inherited}
    - form: tavemer
      class: num
      field: Numbers and grammar words
      gloss: "two"
      source: {kind: inherited, form: tawemer}
    - form: karzis
      class: num
      field: Numbers and grammar words
      gloss: "three"
      source: {kind: inherited}
    - form: felzur
      class: num
      field: Numbers and grammar words
      gloss: "four"
      source: {kind: inherited}
    - form: yolemiks
      class: num
      field: Numbers and grammar words
      gloss: "five"
      source: {kind: inherited}
    - form: selthur
      class: num
      field: Numbers and grammar words
      gloss: "six"
      source: {kind: inherited}
    - form: ranethur
      class: num
      field: Numbers and grammar words
      gloss: "seven"
      source: {kind: inherited}
    - form: zorimaks
      class: num
      field: Numbers and grammar words
      gloss: "eight"
      source: {kind: inherited}
    - form: lukemar
      class: num
      field: Numbers and grammar words
      gloss: "nine"
      source: {kind: inherited}
    - form: umbaris
      class: num
      field: Numbers and grammar words
      gloss: "ten"
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
      source: {kind: inherited, form: kharwelon}
    - form: thambezur
      class: num
      field: Numbers and grammar words
      gloss: "a thousand"
      source: {kind: inherited}
    - form: en
      class: pron
      field: Numbers and grammar words
      gloss: "I; said aloud, a raised voice"
      source: {kind: inherited}
    - form: ko
      class: pron
      field: Numbers and grammar words
      gloss: "you, one person; emphatic"
      source: {kind: inherited}
    - form: enoi
      class: pron
      field: Numbers and grammar words
      gloss: "we"
      source: {kind: inherited}
    - form: koroi
      class: pron
      field: Numbers and grammar words
      gloss: "you, many; and to one person, the formal you"
      source: {kind: inherited}
    - form: vethis
      class: pron
      field: Numbers and grammar words
      gloss: "oneself; the reflexive"
      source: {kind: inherited, form: wethis}
    - form: denos
      class: pron
      field: Numbers and grammar words
      gloss: "this, here by me"
      source: {kind: inherited}
    - form: thesos
      class: pron
      field: Numbers and grammar words
      gloss: "that of yours; said of a person, contemptuous"
      source: {kind: inherited}
    - form: alathos
      class: pron
      field: Numbers and grammar words
      gloss: "that, yonder; said of a person, grand"
      source: {kind: inherited}
    - form: kedis
      class: pron
      field: Numbers and grammar words
      gloss: "who"
      source: {kind: inherited}
    - form: ul
      class: part
      field: Numbers and grammar words
      gloss: "and"
      source: {kind: inherited}
    - form: ar
      class: part
      field: Numbers and grammar words
      gloss: "not"
      source: {kind: inherited}
    - form: eza
      class: part
      field: Numbers and grammar words
      gloss: "opens a question"
      source: {kind: inherited}
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
      gloss: "because"
      source: {kind: inherited}
    - form: tha
      class: part
      field: Numbers and grammar words
      gloss: "that, so that"
      source: {kind: inherited}
    - form: ir
      class: part
      field: Numbers and grammar words
      gloss: "in, into"
      source: {kind: inherited}
    - form: us
      class: part
      field: Numbers and grammar words
      gloss: "over; set over"
      source: {kind: inherited}
    - form: fa
      class: part
      field: Numbers and grammar words
      gloss: "for, on behalf of"
      source: {kind: inherited}
    - form: zel
      class: part
      field: Numbers and grammar words
      gloss: "under, beneath"
      source: {kind: inherited, form: dhel}
    - form: pra
      class: part
      field: Numbers and grammar words
      gloss: "before; in front of"
      source: {kind: coined}
    - form: kona
      class: part
      field: Numbers and grammar words
      gloss: "with; together with"
      source: {kind: coined}
    - form: fos
      class: part
      field: Numbers and grammar words
      gloss: "out; outside; beyond"
      source: {kind: coined}
    - form: kir
      class: part
      field: Numbers and grammar words
      gloss: "around; round"
      source: {kind: coined}
    - form: sa
      class: part
      field: Numbers and grammar words
      gloss: "as; like; as when"
      source: {kind: coined}
    - form: kan
      class: part
      field: Numbers and grammar words
      gloss: "when"
      source: {kind: coined}
    - form: ves
      class: part
      field: Numbers and grammar words
      gloss: "or"
      source: {kind: coined}
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
    - form: lokanthi
      class: adv
      field: Numbers and grammar words
      gloss: "in days to come; hereafter: sets a prophecy or a promise in the future"
      source: {kind: coined}
      built: ["lok-", "-anthi"]
    - form: karzoros
      class: adj
      field: Numbers and grammar words
      gloss: "third"
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
      - {edge: openCluster, sounds: [pr, pl, tr, kr, kl, br, bl, dr, gr, gl, fr, fl, thr]}
      - {edge: closeConsonant, sounds: [s, n, r, l]}
    clusters: {max: 3}
  soundChanges:
    - name: From ancient to imperial
      steps:
        - {step: V1, change: "`t' d' k' g'` > `t d k g`", where: anywhere}
        - {step: V2, change: "`dh` > `z`; `gh` > `g`", where: anywhere}
        - {step: V3, change: "`w` > `v`", where: anywhere}
        - {step: V4, change: "`b` > `v`", where: between vowels}
  cognates:
    - forms:
        skill-vylarilng: ulthathen
        skill-aelendlng: últhathen
        skill-elvndrlng: últhathen
        skill-tarvenlng: ulthad
      proto: ulthathen
      gloss: to hallow
    - forms:
        skill-vylarilng: ulthandon
        skill-aelendlng: últhandon
        skill-elvndrlng: últhandon
        skill-provnzlng: ultande
        skill-tarvenlng: ulthando
      proto: ulthandon
      gloss: a consecration
    - forms:
        skill-vylarilng: sarkenandos
        skill-aelendlng: sarkhenand
        skill-elvndrlng: sárhenand
        skill-provnzlng: sarcheande
        skill-tarvenlng: sarko
      proto: sarkenandos
      gloss: a priest
    - forms:
        skill-vylarilng: sarkenanda
        skill-aelendlng: sarkhenanda
        skill-elvndrlng: sárhenanda
        skill-provnzlng: sarcheanda
        skill-tarvenlng: sarkenanda
      proto: sarkenanda
      gloss: a priestess
    - forms:
        skill-vylarilng: kurzalis
        skill-aelendlng: kurdhalis
        skill-elvndrlng: kúrdalis
        skill-provnzlng: kurdalis
        skill-tarvenlng: kur
      proto: kurdhalis
      gloss: an altar
    - forms:
        skill-vylarilng: nekaimon
        skill-aelendlng: nekhaimon
        skill-elvndrlng: néihaimon
        skill-provnzlng: nechaime
        skill-tarvenlng: nekai
      proto: nekaimon
      gloss: a wayside shrine
    - forms:
        skill-vylarilng: tholmeza
        skill-aelendlng: tholmesa
        skill-elvndrlng: thólmesa
        skill-provnzlng: tolmeza
        skill-tarvenlng: tholza
      proto: tholmeza
      gloss: a vow
    - forms:
        skill-vylarilng: kelmaron
        skill-aelendlng: khelmaron
        skill-elvndrlng: hélmaron
        skill-tarvenlng: kelmo
      proto: kelmaron
      gloss: a curse
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
    - forms:
        skill-vylarilng: yaltheza
        skill-aelendlng: álthesa
        skill-elvndrlng: álthesa
        skill-provnzlng: jalteza
      proto: yaltheza
      gloss: a prayer
    - forms:
        skill-vylarilng: karalzon
        skill-aelendlng: káralson
        skill-elvndrlng: káralson
        skill-provnzlng: karalze
        skill-tarvenlng: karalzo
      proto: k'aralzon
      gloss: the kept fire
    - forms:
        skill-vylarilng: thelvaralon
        skill-aelendlng: thelaralon
        skill-elvndrlng: théilaralon
        skill-provnzlng: telvaral
        skill-tarvenlng: thelvaralo
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
    - forms:
        skill-vylarilng: semrothos
        skill-aelendlng: semroth
        skill-elvndrlng: semroth
        skill-provnzlng: semrote
        skill-tarvenlng: sembro
      proto: semrothos
      gloss: a brother
    - forms:
        skill-vylarilng: semrotha
        skill-aelendlng: semrotha
        skill-elvndrlng: sémrotha
        skill-provnzlng: semrota
        skill-tarvenlng: sembra
      proto: semrotha
      gloss: a sister
    - forms:
        skill-vylarilng: nurizon
        skill-aelendlng: nurison
        skill-elvndrlng: nyerison
        skill-tarvenlng: nur
      proto: nurizon
      gloss: a child
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
        skill-aelendlng: kíramarlen
        skill-elvndrlng: kíramarlen
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
    - forms:
        skill-vylarilng: zirothalon
        skill-aelendlng: sirothalon
        skill-elvndrlng: shírothalon
        skill-provnzlng: zirotal
      proto: zirothalon
      gloss: precedence
    - forms:
        skill-vylarilng: zirothathen
        skill-aelendlng: sirothathen
        skill-elvndrlng: shírothathen
        skill-provnzlng: zirotate
      proto: zirothathen
      gloss: to place
    - forms:
        skill-vylarilng: anzirothos
        skill-aelendlng: ánsiroth
        skill-elvndrlng: ánsiroth
        skill-provnzlng: anzirote
        skill-tarvenlng: anziro
      proto: anzirothos
      gloss: unplaced
    - forms:
        skill-vylarilng: daimela
        skill-aelendlng: dáimela
        skill-elvndrlng: dáimela
        skill-provnzlng: daimela
        skill-tarvenlng: daima
      proto: daimela
      gloss: a patron
    - forms:
        skill-vylarilng: daimelalon
        skill-aelendlng: dáimelalon
        skill-elvndrlng: dáimelalon
        skill-provnzlng: daimelal
        skill-tarvenlng: daimelalo
      proto: daimelalon
      gloss: patronage
    - forms:
        skill-vylarilng: pramolza
        skill-aelendlng: ramolsa
        skill-elvndrlng: ráemolsa
        skill-provnzlng: pramolza
      proto: pramolza
      gloss: the morning call
    - forms:
        skill-vylarilng: orfenon
        skill-aelendlng: orenon
        skill-elvndrlng: óurenon
        skill-tarvenlng: orhen
      proto: orfenon
      gloss: a favor
    - forms:
        skill-vylarilng: orfenathen
        skill-aelendlng: orenathen
        skill-elvndrlng: óurenathen
        skill-provnzlng: orfeate
        skill-tarvenlng: orhenad
      proto: orfenathen
      gloss: to owe
    - forms:
        skill-vylarilng: dumvaralon
        skill-aelendlng: dumaralon
        skill-elvndrlng: dyemaralon
        skill-provnzlng: dumvaral
      proto: dumwaralon
      gloss: guest-right
    - forms:
        skill-vylarilng: verosalon
        skill-aelendlng: erosalon
        skill-elvndrlng: éirosalon
        skill-provnzlng: verosal
        skill-tarvenlng: verosalo
      proto: werosalon
      gloss: citizenship
    - forms:
        skill-vylarilng: liskaima
        skill-aelendlng: liskaima
        skill-elvndrlng: lískaima
        skill-provnzlng: liskaima
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
    - forms:
        skill-vylarilng: nazdis
        skill-aelendlng: nasdis
        skill-elvndrlng: nasdis
        skill-provnzlng: nasdis
        skill-tarvenlng: nazda
      proto: nazdis
      gloss: a judgment
    - forms:
        skill-vylarilng: nazdalon
        skill-aelendlng: nasdalon
        skill-elvndrlng: násdalon
        skill-provnzlng: nasdal
      proto: nazdalon
      gloss: a court of law
    - forms:
        skill-vylarilng: krezulathen
        skill-aelendlng: kresulathen
        skill-elvndrlng: kréisulathen
        skill-provnzlng: krezulate
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
    - forms:
        skill-vylarilng: semnalis
        skill-aelendlng: semnalis
        skill-elvndrlng: sémnalis
        skill-provnzlng: semnalis
        skill-tarvenlng: semna
      proto: semnalis
      gloss: a contract
    - forms:
        skill-vylarilng: thizaros
        skill-aelendlng: thidharand
        skill-elvndrlng: thíedarand
        skill-provnzlng: tidare
        skill-tarvenlng: thidro
      proto: thidharos
      gloss: a keeper of seals
    - forms:
        skill-vylarilng: zaktela
        skill-aelendlng: dhaktela
        skill-elvndrlng: dáktela
        skill-provnzlng: daktela
        skill-tarvenlng: dakta
      proto: dhaktela
      gloss: a charter
    - forms:
        skill-vylarilng: kuthreza
        skill-aelendlng: kuthresa
        skill-elvndrlng: chyethresa
        skill-provnzlng: kutreza
        skill-tarvenlng: kuthra
      proto: kuthreza
      gloss: a penalty
    - forms:
        skill-vylarilng: zamolis
        skill-aelendlng: dhámolis
        skill-elvndrlng: dámolis
        skill-provnzlng: damolis
        skill-tarvenlng: damla
      proto: dhamolis
      gloss: guilt
    - forms:
        skill-vylarilng: frenkon
        skill-aelendlng: renkhon
        skill-elvndrlng: renhon
        skill-provnzlng: frenche
      proto: frenkon
      gloss: property
    - forms:
        skill-vylarilng: venthodis
        skill-aelendlng: enthodis
        skill-elvndrlng: énthodis
        skill-provnzlng: ventodis
        skill-tarvenlng: ventha
      proto: wenthodis
      gloss: exile
    - forms:
        skill-vylarilng: orzathen
        skill-aelendlng: orsathen
        skill-elvndrlng: órsathen
        skill-provnzlng: orzate
        skill-tarvenlng: orzad
      proto: orzathen
      gloss: to rule
    - forms:
        skill-vylarilng: kurthema
        skill-aelendlng: kúrthema
        skill-elvndrlng: kúrthema
        skill-provnzlng: kurtema
        skill-tarvenlng: kurtha
      proto: kurthema
      gloss: the Senate
    - forms:
        skill-vylarilng: zilmara
        skill-aelendlng: dhílmara
        skill-elvndrlng: dílmara
        skill-provnzlng: dilmara
        skill-tarvenlng: dil
      proto: dhilmara
      gloss: a vote
    - forms:
        skill-vylarilng: karezathen
        skill-aelendlng: kháresathen
        skill-elvndrlng: háresathen
        skill-provnzlng: charezate
      proto: karezathen
      gloss: to see to
    - forms:
        skill-vylarilng: karezos
        skill-aelendlng: kháresand
        skill-elvndrlng: háresand
        skill-provnzlng: chareze
        skill-tarvenlng: karzo
      proto: karezos
      gloss: a steward
    - forms:
        skill-vylarilng: felzathen
        skill-aelendlng: elsathen
        skill-elvndrlng: élsathen
        skill-provnzlng: felzate
      proto: felzathen
      gloss: to send
    - forms:
        skill-vylarilng: thauros
        skill-aelendlng: thaurand
        skill-elvndrlng: thaurand
        skill-provnzlng: taure
        skill-tarvenlng: thaur
      proto: thauros
      gloss: a guardsman
    - forms:
        skill-vylarilng: kordathen
        skill-aelendlng: kordathen
        skill-elvndrlng: kórdathen
        skill-tarvenlng: kordad
      proto: kordathen
      gloss: to fight
    - forms:
        skill-vylarilng: thramezan
        skill-aelendlng: thramesand
        skill-elvndrlng: thráemesand
        skill-tarvenlng: thramzo
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
    - forms:
        skill-vylarilng: zurgalis
        skill-aelendlng: dhurgalis
        skill-elvndrlng: dúrgalis
        skill-provnzlng: durvalis
        skill-tarvenlng: durga
      proto: dhurgalis
      gloss: a camp
    - forms:
        skill-vylarilng: kadzimon
        skill-aelendlng: khadsimon
        skill-elvndrlng: hádsimon
        skill-provnzlng: chadzime
        skill-tarvenlng: kadzo
      proto: kadzimon
      gloss: a sword
    - forms:
        skill-vylarilng: gretala
        skill-aelendlng: ghretala
        skill-elvndrlng: gréidala
        skill-provnzlng: gredala
        skill-tarvenlng: gred
      proto: ghretala
      gloss: a spear
    - forms:
        skill-vylarilng: gulman
        skill-aelendlng: ghulmand
        skill-elvndrlng: gulmand
        skill-provnzlng: gulme
        skill-tarvenlng: gul
      proto: ghulmandos
      gloss: a horseman
    - forms:
        skill-vylarilng: thrumathen
        skill-aelendlng: thrumathen
        skill-elvndrlng: thryemathen
        skill-provnzlng: trumate
        skill-tarvenlng: thrumad
      proto: thrumathen
      gloss: to lead
    - forms:
        skill-vylarilng: thrumar
        skill-aelendlng: thrumar
        skill-elvndrlng: thryemar
        skill-provnzlng: trumar
        skill-tarvenlng: thrumar
      proto: thrumar
      gloss: a general
    - forms:
        skill-vylarilng: thurgezon
        skill-aelendlng: thurgeson
        skill-elvndrlng: thúrgeson
        skill-provnzlng: turveze
        skill-tarvenlng: thurgo
      proto: thurgezon
      gloss: a siege
    - forms:
        skill-vylarilng: grumeza
        skill-aelendlng: grumesa
        skill-elvndrlng: gryemesa
        skill-provnzlng: grumeza
        skill-tarvenlng: gruma
      proto: grumeza
      gloss: war
    - forms:
        skill-vylarilng: gulmeza
        skill-aelendlng: gulmesa
        skill-elvndrlng: gúlmesa
        skill-provnzlng: gulmeza
        skill-tarvenlng: gulma
      proto: gulmeza
      gloss: a troop of horse
    - forms:
        skill-vylarilng: gaimela
        skill-aelendlng: gáimela
        skill-elvndrlng: gáimela
        skill-provnzlng: gaimela
        skill-tarvenlng: gaima
      proto: gaimela
      gloss: a bow
    - forms:
        skill-vylarilng: thrima
        skill-aelendlng: thrima
        skill-elvndrlng: thíruthrima
        skill-provnzlng: tirutrima
        skill-tarvenlng: thirúthrima
      proto: thrima
      gloss: "the hallowed boundary of a city, inside which no legion marches"
    - forms:
        skill-vylarilng: rembalis
        skill-aelendlng: remalis
        skill-elvndrlng: réimalis
        skill-provnzlng: rembalis
        skill-tarvenlng: emba
      proto: rembalis
      gloss: a square
    - forms:
        skill-vylarilng: dorkima
        skill-aelendlng: dorkima
        skill-elvndrlng: dórkima
        skill-provnzlng: dorvima
        skill-tarvenlng: dorka
      proto: dorkima
      gloss: a column
    - forms:
        skill-vylarilng: ulmera
        skill-aelendlng: ulmera
        skill-elvndrlng: úlmera
        skill-provnzlng: ulmera
        skill-tarvenlng: ulmer
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
    - forms:
        skill-vylarilng: sozrakis
        skill-aelendlng: sodhrakis
        skill-elvndrlng: sóudragis
        skill-provnzlng: sodravis
        skill-tarvenlng: sodra
      proto: sodhrakis
      gloss: a drain
    - forms:
        skill-vylarilng: komrela
        skill-aelendlng: komrela
        skill-elvndrlng: kómrela
        skill-provnzlng: komrela
        skill-tarvenlng: kombra
      proto: komrela
      gloss: a villa
    - forms:
        skill-vylarilng: komrelalon
        skill-aelendlng: komrelalon
        skill-elvndrlng: kómrelalon
        skill-provnzlng: komrelal
        skill-tarvenlng: kombrelalo
      proto: komrelalon
      gloss: an estate
    - forms:
        skill-vylarilng: rathauna
        skill-aelendlng: rathauna
        skill-elvndrlng: ráethauna
        skill-tarvenlng: arthauna
      proto: rathauna
      gloss: a racecourse
    - forms:
        skill-vylarilng: palthokis
        skill-aelendlng: althokis
        skill-elvndrlng: álthogis
        skill-provnzlng: paltovis
        skill-tarvenlng: paltho
      proto: palthokis
      gloss: a brick
    - forms:
        skill-vylarilng: kalmezar
        skill-aelendlng: khalmesar
        skill-elvndrlng: hálmesar
        skill-provnzlng: chalmezar
        skill-tarvenlng: kálmezar
      proto: kalmezar
      gloss: marble
    - forms:
        skill-vylarilng: grumbalon
        skill-aelendlng: grumalon
        skill-elvndrlng: gryemalon
        skill-provnzlng: grumbal
        skill-tarvenlng: grumba
      proto: grumbalon
      gloss: a quarry
    - forms:
        skill-vylarilng: ithrola
        skill-aelendlng: íthrola
        skill-elvndrlng: íthrola
        skill-provnzlng: itrola
        skill-tarvenlng: ithra
      proto: ithrola
      gloss: a lamp
    - forms:
        skill-vylarilng: selkora
        skill-aelendlng: selkhora
        skill-elvndrlng: sélhora
        skill-provnzlng: selchora
        skill-tarvenlng: selka
      proto: selkora
      gloss: a granary
    - forms:
        skill-vylarilng: humelthathen
        skill-aelendlng: umelthathen
        skill-elvndrlng: yemelthathen
        skill-provnzlng: umeltate
      proto: humelthathen
      gloss: to rest
    - forms:
        skill-vylarilng: kelthathen
        skill-aelendlng: kelthathen
        skill-elvndrlng: kélthathen
        skill-provnzlng: keltate
      proto: kelthathen
      gloss: to keep a secret
    - forms:
        skill-vylarilng: gartema
        skill-aelendlng: ghartema
        skill-elvndrlng: gártema
        skill-provnzlng: gardema
        skill-tarvenlng: garta
      proto: ghartema
      gloss: a bench
    - forms:
        skill-vylarilng: gartos
        skill-aelendlng: ghartand
        skill-elvndrlng: gartand
        skill-provnzlng: garde
      proto: ghartos
      gloss: a master
    - forms:
        skill-vylarilng: thumbalis
        skill-aelendlng: thumalis
        skill-elvndrlng: thyemalis
        skill-provnzlng: tumbalis
        skill-tarvenlng: thumba
      proto: thumbalis
      gloss: a forge
    - forms:
        skill-vylarilng: thalbezon
        skill-aelendlng: tháleson
        skill-elvndrlng: tháleson
        skill-provnzlng: talveze
        skill-tarvenlng: talbo
      proto: thalbezon
      gloss: steel
    - forms:
        skill-vylarilng: radzimon
        skill-aelendlng: radsimon
        skill-elvndrlng: rádsimon
        skill-provnzlng: radzime
        skill-tarvenlng: adzo
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
    - forms:
        skill-vylarilng: thurdimon
        skill-aelendlng: thurdimon
        skill-elvndrlng: thúrdimon
        skill-provnzlng: turdime
        skill-tarvenlng: turdo
      proto: thurdimon
      gloss: bronze
    - forms:
        skill-vylarilng: malkeza
        skill-aelendlng: malkhesa
        skill-elvndrlng: málhesa
        skill-provnzlng: malcheza
        skill-tarvenlng: malka
      proto: malkeza
      gloss: a hammer
    - forms:
        skill-vylarilng: tambandon
        skill-aelendlng: tamandon
        skill-elvndrlng: táemandon
        skill-provnzlng: tamba
        skill-tarvenlng: tambando
      proto: tambandon
      gloss: a work
    - forms:
        skill-vylarilng: verdakis
        skill-aelendlng: erdakis
        skill-elvndrlng: érdagis
        skill-provnzlng: verdavis
        skill-tarvenlng: verdo
      proto: werdakis
      gloss: a price
    - forms:
        skill-vylarilng: kezilon
        skill-aelendlng: khésilon
        skill-elvndrlng: hésilon
        skill-tarvenlng: kiézilo
      proto: kezilon
      gloss: a wedge
    - forms:
        skill-vylarilng: solkimon
        skill-aelendlng: solkimon
        skill-elvndrlng: sólkimon
        skill-tarvenlng: solko
      proto: solkimon
      gloss: a weight
    - forms:
        skill-vylarilng: thradina
        skill-aelendlng: thradina
        skill-elvndrlng: thráedina
        skill-tarvenlng: thrada
      proto: thradina
      gloss: a scale
    - forms:
        skill-vylarilng: yenthizon
        skill-aelendlng: enthison
        skill-elvndrlng: énthison
        skill-provnzlng: jentize
        skill-tarvenlng: entho
      proto: yenthizon
      gloss: wine
    - forms:
        skill-vylarilng: thremuzis
        skill-aelendlng: thremusis
        skill-elvndrlng: thréimusis
        skill-provnzlng: tremuzis
        skill-tarvenlng: thres
      proto: thremuzis
      gloss: salt
    - forms:
        skill-vylarilng: yormalis
        skill-aelendlng: ormalis
        skill-elvndrlng: órmalis
        skill-provnzlng: jormalis
        skill-tarvenlng: orma
      proto: yormalis
      gloss: land
    - forms:
        skill-vylarilng: polthamis
        skill-aelendlng: olthamis
        skill-elvndrlng: ólthamis
        skill-provnzlng: poltamis
        skill-tarvenlng: poltha
      proto: polthamis
      gloss: a field
    - forms:
        skill-vylarilng: kolsama
        skill-aelendlng: kholsama
        skill-elvndrlng: hólsama
        skill-provnzlng: cholsama
        skill-tarvenlng: kolsama
      proto: kolsama
      gloss: a harvest
    - forms:
        skill-vylarilng: kedrilis
        skill-aelendlng: khedrilis
        skill-elvndrlng: héidrilis
        skill-provnzlng: chedrilis
        skill-tarvenlng: ked
      proto: kedrilis
      gloss: a sheep
    - forms:
        skill-vylarilng: vilaras
        skill-aelendlng: ilaras
        skill-elvndrlng: íelaras
        skill-provnzlng: vilare
      proto: wilaras
      gloss: the great river
    - forms:
        skill-vylarilng: tholmara
        skill-aelendlng: tholmara
        skill-elvndrlng: thólmara
        skill-provnzlng: tolmara
        skill-tarvenlng: thol
      proto: tholmara
      gloss: a lake
    - forms:
        skill-vylarilng: nebralis
        skill-aelendlng: neralis
        skill-elvndrlng: néiralis
        skill-provnzlng: nebralis
        skill-tarvenlng: nebra
      proto: nebralis
      gloss: a valley
    - forms:
        skill-vylarilng: kaldrema
        skill-aelendlng: kaldrema
        skill-elvndrlng: káldrema
        skill-provnzlng: kaldrema
        skill-tarvenlng: kaldrema
      proto: kaldrema
      gloss: a wood
    - forms:
        skill-vylarilng: nelamis
        skill-aelendlng: nélamis
        skill-elvndrlng: nélamis
        skill-provnzlng: nelamis
        skill-tarvenlng: nelmis
      proto: nelamis
      gloss: snow
    - forms:
        skill-vylarilng: korvathis
        skill-aelendlng: korathis
        skill-elvndrlng: kóurathis
        skill-provnzlng: korvatis
        skill-tarvenlng: korvath
      proto: korwathis
      gloss: the sun
    - forms:
        skill-vylarilng: yalzemis
        skill-aelendlng: alsemis
        skill-elvndrlng: álsemis
        skill-provnzlng: jalzemis
        skill-tarvenlng: als
      proto: yalzemis
      gloss: the moon
    - forms:
        skill-vylarilng: ilthera
        skill-aelendlng: ílthera
        skill-elvndrlng: ílthera
        skill-provnzlng: iltera
        skill-tarvenlng: iltha
      proto: ilthera
      gloss: a star
    - forms:
        skill-vylarilng: thersolis
        skill-aelendlng: thersolis
        skill-elvndrlng: thérsolis
        skill-provnzlng: tersolis
        skill-tarvenlng: thersa
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
    - forms:
        skill-vylarilng: kalmethathen
        skill-aelendlng: kálmethathen
        skill-elvndrlng: kálmethathen
        skill-provnzlng: kalmetate
        skill-tarvenlng: kalmad
      proto: kalmethathen
      gloss: to go to the ancestors
    - forms:
        skill-vylarilng: rithezon
        skill-aelendlng: ritheson
        skill-elvndrlng: ríetheson
        skill-provnzlng: riteze
        skill-tarvenlng: irtho
      proto: rithezon
      gloss: a wound
    - forms:
        skill-vylarilng: rithezos
        skill-aelendlng: rithesand
        skill-elvndrlng: ríethesand
        skill-provnzlng: ritezande
        skill-tarvenlng: irthezo
      proto: rithezos
      gloss: a physician
    - forms:
        skill-vylarilng: zemrolon
        skill-aelendlng: dhemrolon
        skill-elvndrlng: démrolon
        skill-provnzlng: demrol
        skill-tarvenlng: dembro
      proto: dhemrolon
      gloss: a tomb
    - forms:
        skill-vylarilng: zemrolara
        skill-aelendlng: dhemrolara
        skill-elvndrlng: démrolara
        skill-provnzlng: demrolara
        skill-tarvenlng: dembrolara
      proto: dhemrolara
      gloss: a city of the dead
    - forms:
        skill-vylarilng: oltrema
        skill-aelendlng: oltrema
        skill-elvndrlng: óltrema
        skill-provnzlng: oltrema
        skill-tarvenlng: oltra
      proto: oltrema
      gloss: a month
    - forms:
        skill-vylarilng: nelameza
        skill-aelendlng: nélamesa
        skill-elvndrlng: nélamesa
        skill-provnzlng: nelameza
        skill-tarvenlng: nelza
      proto: nelameza
      gloss: winter
    - forms:
        skill-vylarilng: lordemon
        skill-aelendlng: lordemon
        skill-elvndrlng: lórdemon
        skill-provnzlng: lordeme
        skill-tarvenlng: lordo
      proto: lordemon
      gloss: a festival
    - forms:
        skill-vylarilng: zerthazis
        skill-aelendlng: serthasis
        skill-elvndrlng: sérthasis
        skill-provnzlng: zertazis
        skill-tarvenlng: zertha
      proto: zerthazis
      gloss: the founding
    - forms:
        skill-vylarilng: sorimathen
        skill-aelendlng: sorimathen
        skill-elvndrlng: sóurimathen
        skill-provnzlng: sorimate
        skill-tarvenlng: sormad
      proto: sorimathen
      gloss: to sing
    - forms:
        skill-vylarilng: sorimos
        skill-aelendlng: sorimand
        skill-elvndrlng: sóurimand
        skill-provnzlng: sorime
      proto: sorimos
      gloss: a poet
    - forms:
        skill-vylarilng: dokathen
        skill-aelendlng: dokhathen
        skill-elvndrlng: dóuhathen
        skill-tarvenlng: dokad
      proto: dokathen
      gloss: to speak
    - forms:
        skill-vylarilng: dokemon
        skill-aelendlng: dokhemon
        skill-elvndrlng: dóuhemon
        skill-provnzlng: docheme
        skill-tarvenlng: dokme
      proto: dokemon
      gloss: an oration
    - forms:
        skill-vylarilng: tharlema
        skill-aelendlng: tharlema
        skill-elvndrlng: thárlema
        skill-provnzlng: tarlema
        skill-tarvenlng: tharlema
      proto: tharlema
      gloss: a tongue
    - forms:
        skill-vylarilng: lambizon
        skill-aelendlng: lamison
        skill-elvndrlng: láemison
        skill-provnzlng: lambize
      proto: lambizon
      gloss: a word
    - forms:
        skill-vylarilng: semarzon
        skill-aelendlng: semarson
        skill-elvndrlng: shéimarson
        skill-provnzlng: semarze
        skill-tarvenlng: semzo
      proto: semarzon
      gloss: a letter
    - forms:
        skill-vylarilng: marendis
        skill-aelendlng: marendis
        skill-elvndrlng: máerendis
        skill-provnzlng: marendis
        skill-tarvenlng: marendis
      proto: marendis
      gloss: wisdom
    - forms:
        skill-vylarilng: marendalon
        skill-aelendlng: marendalon
        skill-elvndrlng: máerendon
        skill-provnzlng: marendal
      proto: marendalon
      gloss: a school
    - forms:
        skill-vylarilng: marendos
        skill-aelendlng: marendand
        skill-elvndrlng: máerendand
        skill-provnzlng: marende
      proto: marendos
      gloss: a master
    - forms:
        skill-vylarilng: kezdathen
        skill-aelendlng: khésdathen
        skill-elvndrlng: hésdathen
        skill-provnzlng: chesdate
        skill-tarvenlng: kezdad
      proto: kezdathen
      gloss: to know
    - forms:
        skill-vylarilng: lorezathen
        skill-aelendlng: loresathen
        skill-elvndrlng: lóuresathen
        skill-provnzlng: lorezate
      proto: lorezathen
      gloss: to read aloud
    - forms:
        skill-vylarilng: olzemon
        skill-aelendlng: oldhemon
        skill-elvndrlng: óldemon
        skill-tarvenlng: oldemo
      proto: oldhemon
      gloss: a history
    - forms:
        skill-vylarilng: thordima
        skill-aelendlng: thordima
        skill-elvndrlng: thórdima
        skill-provnzlng: tordima
        skill-tarvenlng: thórdima
      proto: thordima
      gloss: magic
    - forms:
        skill-vylarilng: thordimos
        skill-aelendlng: thordimand
        skill-elvndrlng: thórdimand
        skill-provnzlng: tordime
        skill-tarvenlng: thordimo
      proto: thordimos
      gloss: a mage
    - forms:
        skill-vylarilng: dorandar
        skill-aelendlng: dorandar
        skill-elvndrlng: dóurandar
        skill-provnzlng: dorandar
        skill-tarvenlng: dorandar
      proto: dorandar
      gloss: enduring
    - forms:
        skill-vylarilng: lokathen
        skill-aelendlng: lokhathen
        skill-elvndrlng: lóuhathen
        skill-tarvenlng: lokad
      proto: lokathen
      gloss: to come
    - forms:
        skill-vylarilng: tigathen
        skill-aelendlng: tigathen
        skill-elvndrlng: tíegathen
        skill-tarvenlng: tigad
      proto: tigathen
      gloss: to go
    - forms:
        skill-vylarilng: okethen
        skill-aelendlng: okhethen
        skill-elvndrlng: óuhethen
        skill-tarvenlng: oked
      proto: okethen
      gloss: to see
    - forms:
        skill-vylarilng: daimathen
        skill-aelendlng: dáimathen
        skill-elvndrlng: dáimathen
        skill-provnzlng: daimate
        skill-tarvenlng: daimad
      proto: daimathen
      gloss: to give
    - forms:
        skill-vylarilng: lozethen
        skill-aelendlng: losethen
        skill-elvndrlng: lóusethen
        skill-provnzlng: lozete
        skill-tarvenlng: lozed
      proto: lozethen
      gloss: to carry
    - forms:
        skill-vylarilng: nembethen
        skill-aelendlng: nemethen
        skill-elvndrlng: néimethen
        skill-provnzlng: nembete
        skill-tarvenlng: nembed
      proto: nembethen
      gloss: to fall
    - forms:
        skill-vylarilng: urzithen
        skill-aelendlng: ursithen
        skill-elvndrlng: úrsithen
        skill-tarvenlng: urzid
      proto: urzithen
      gloss: to rise
    - forms:
        skill-vylarilng: gaurathen
        skill-aelendlng: gháurathen
        skill-elvndrlng: gáurathen
        skill-provnzlng: gaurate
        skill-tarvenlng: gaurad
      proto: ghaurathen
      gloss: to build
    - forms:
        skill-vylarilng: thaurathen
        skill-aelendlng: tháurathen
        skill-elvndrlng: tháurathen
        skill-provnzlng: taurate
        skill-tarvenlng: thaurad
      proto: thaurathen
      gloss: to keep
    - forms:
        skill-vylarilng: thernathen
        skill-aelendlng: thernathen
        skill-elvndrlng: thérnathen
        skill-provnzlng: ternate
        skill-tarvenlng: thernad
      proto: thernathen
      gloss: to live
    - forms:
        skill-vylarilng: felzur
        skill-aelendlng: elsur
        skill-elvndrlng: elsur
        skill-provnzlng: felzur
        skill-tarvenlng: helza
      proto: felzur
      gloss: four
    - forms:
        skill-vylarilng: yolemiks
        skill-aelendlng: olemiks
        skill-elvndrlng: óulemiks
        skill-provnzlng: jolemis
        skill-tarvenlng: olmi
      proto: yolemiks
      gloss: five
    - forms:
        skill-vylarilng: ranethur
        skill-aelendlng: ránethur
        skill-elvndrlng: ránethur
        skill-provnzlng: raetur
        skill-tarvenlng: neth
      proto: ranethur
      gloss: seven
    - forms:
        skill-vylarilng: zorimaks
        skill-aelendlng: sorimaks
        skill-elvndrlng: sóurimaks
        skill-provnzlng: zorimas
        skill-tarvenlng: zorma
      proto: zorimaks
      gloss: eight
    - forms:
        skill-vylarilng: dorekis
        skill-aelendlng: dorekhis
        skill-elvndrlng: dóurehis
        skill-provnzlng: dorechis
        skill-tarvenlng: dorke
      proto: dorekis
      gloss: twelve
    - forms:
        skill-vylarilng: thambezur
        skill-aelendlng: thamesur
        skill-elvndrlng: tháemesur
        skill-provnzlng: tambezur
        skill-tarvenlng: thamba
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
    - {tag: vylari, meaning: a Vylari name}
    - {tag: kept, meaning: "a loanword kept in its source tongue's spelling, by ruling"}
    - {tag: translation, meaning: a name given in the language of these pages}
    - {tag: exonym:<tongue>, meaning: "a name another people gives, in the tongue named"}
    - tag: other:<tongue>
      meaning: "a name in another tongue of the setting, as its speakers give it"
    - {tag: other, meaning: a name in no tongue these pages name}
    - {tag: ancient, meaning: "a letter of ancient Vylari, before the sound changes"}
  register:
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

**Consonants.** Imperial Vylari has the stops _p t k b d g_, the breathed stops _f_ and _th_, the hissed _s_ and buzzed _z_, _v_, _h_, _m n l r_, and _y_ before a vowel. The contrast between plain and breathed stops tells words apart, and a foreigner who says every _th_ as a plain _t_ is understood with an effort. Ancient Vylari had a third series of stops closed hard in the throat and released with a click (_t' k' d' g'_), voiced stops with a breath after them (_dh gh_), and _w_; four sound changes turned it into the imperial system, and the [[skill-vylarilng#lexicon|Vylari Lexicon]] sets them out.

**Vowels.** Five vowels, _a e i o u_, each short or long. A long _a_, _i_ or _u_ is written double (_aa_, _ii_, _uu_); a long _e_ or _o_ is written single. Three diphthongs: _ai au oi_.

**Words.** A word opens on a vowel, one consonant, or a stop followed by _l_ or _r_; it closes on a vowel or on _s n r l_. No more than three consonants stand together.

**Stress.** Vylari stresses its words by the rule of [[doc-prnncthlrn|Pronouncing Thalorna]]: a word of two syllables on the first, a longer word on the second-to-last syllable, and an acute (_á_) marks any other stress. Vowel length does not move it, and each diphthong counts as one syllable. So every word of more than one syllable ends by falling from a stressed syllable to an unstressed one, and that is the measured, falling rhythm foreigners hear in a Vylari speech: _zaros_ is said ZA-ros, _sorima_ so-RI-ma, _ulthalon_ ul-THA-lon.

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

An older runic form, [[skill-thrvrknscrpt|Tharavarkon]], persists in ceremonial and architectural contexts. The ancient imperial inscriptions use a highly formalized variant with ligatures and special marks for religious names, and they write every sound of ancient Vylari, the clicked stops among them.

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

An entry gives the imperial word as it is cited: a noun in its basic form, an adjective in its masculine, a verb in its infinitive. The ancient form stands beside it, and the imperial form is exactly what the sound changes below make of it. A word made of smaller parts names the imperial words, stems and suffixes it is made of, joined by `+`, and the form is exactly what they give. A stem is written with a hyphen after it.

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

## From ancient to imperial {#from-ancient-to-imperial}

Four changes, in this order, turn every ancient word into its imperial form, and the lexicon's Form column is what they give. The clicked stops lost their click; the breathed voiced stops became `z` and `g`; `w` became `v`; and `b` softened to `v` between two vowels. So _dharon_ (an oath) became _zaron_, _k'aralzon_ (the kept fire) became _karalzon_, and _labura_ (an ancestor's mask) became _lavura_.

### Sound changes

```sql
SELECT step AS "Step", change AS "Change", coalesce("where", '—') AS "Where"
FROM sound_changes
WHERE language = 'thalorna-note-skill-vylarilng' AND name = 'From ancient to imperial'
ORDER BY step_position
```

Two more changes belong to speech and are never written. In ordinary talk a long vowel in an unstressed syllable is said short, so the street clips the vowel; a speaker of High Vylari holds every length, and the difference marks his education as clearly as his clothes. In the [[place-hylen|Hilen]] lowlands `th` is said `s`, and a Hilen man's _sorimos_ (a poet) and his _thilos_ (a scribe) begin alike, with a hiss.

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
