---
shortcode: taruzelilng
name: {full: Taruzeli Language, aliases: []}
type: skill
subType: language
description: "The tongue of Taruzel's merchant guilds and sea-lanes, freighted with words for ledgers, tides, and every knot a sailor can tie."
tags: []
data:
  roman: "abdeghijklmnpqrstuvyzABDEGHIJKLMNPQRSTUVYZáéíóúëÁÉÍÓÚË0123456789()–-fFoO"
  core: true
  abbreviation: Taruz.
  fields:
    - name: The bargain and the word
      holds: "The price, the refusal, the clasp of hands and the tea between: how two people become a contract."
    - name: "Reckoning, credit and debt"
      holds: "The ledger, the tally, the loan and the surety: how a Taruzelian measures what a thing is worth and who owes it."
    - name: "Hull, tide and knot"
      holds: "The ship and its gear, the harbor and the water: what a seafaring people has a word for."
    - name: "The house, the firm and the family"
      holds: "A family and a firm are one body here; these are its parts and its honor."
    - name: "Law, oath and the Confederation"
      holds: "The oath, the seal, the judge and the toll: how a confederation of trading cities keeps order."
    - name: Doing and being
      holds: "The plain verbs of the quay and the adjectives a trader reaches for."
    - name: Grammar words
      holds: "The article, the particles, the pointing words and the numbers."
    - name: Everyday speech
      holds: "The body, daily needs, perception, thought, relationships and ordinary conversation."
  affixes:
    - form: "-um"
      gloss: "the person who does or holds it"
      attaches: "added"
      examples: ["telm- > telmum, a notary"]
    - form: "-ush"
      gloss: "the act as it settles, and the thing it leaves behind"
      attaches: "added"
      examples: ["telm- > telmush, a contract"]
    - form: "-u"
      gloss: "the worth or the standing of it"
      attaches: "added"
      examples: ["mard- > mardu, credit"]
    - form: "-am"
      gloss: "the plain act, done as a matter of course"
      attaches: "added"
      examples: ["ashur- > ashuram, measures"]
    - form: "-an"
      gloss: "bearing it, full of it: the adjective"
      attaches: "added"
      examples: ["zarut- > zarutan, profitable"]
    - form: "-i"
      gloss: "belonging to it, of its line: a family name"
      attaches: "added"
      examples: ["taruz- > taruzi, the houses of a line"]
    - form: "-uni"
      gloss: "the whole company belonging to it: a family name for a house and its people"
      attaches: "added"
      examples: ["taruz- > taruzuni, the whole house"]
    - form: "-um"
      gloss: "the standing of it, said with weight: a family name"
      attaches: "added"
      examples: ["kalur- > Kalurum"]
    - form: "-a"
      gloss: "a woman's name"
      attaches: "replaces a closing vowel"
      replaces: vowel
      examples: ["belgin- > Belgina"]
    - form: "-uya"
      gloss: "a woman's name, the soft form"
      attaches: "added"
      examples: ["hushad- > Hushaduya"]
    - form: "-un"
      gloss: "a place, where the act is done"
      attaches: "added"
      examples: ["sazum- > Sazumun"]
    - form: "-ar"
      gloss: "a place, where the thing is kept"
      attaches: "added"
      examples: ["besik- > Besikar"]
    - form: "-el"
      gloss: "a place, the ground of it"
      attaches: "added"
      examples: ["yamuz- > Yamuzel"]
  words:
    - form: "mard-"
      class: stem
      field: The bargain and the word
      gloss: "standing: a name good for credit"
    - form: mardum
      class: "n"
      field: The bargain and the word
      gloss: "a merchant, one whose name is his stock"
      concept: ["merchant"]
    - form: mardu
      class: "n"
      field: The bargain and the word
      gloss: "credit, the worth of a man's name in the market"
      built: ["mard-", "-u"]
    - {form: "qat-", class: stem, field: The bargain and the word, gloss: "to hold fast"}
    - form: qatush
      class: v
      field: The bargain and the word
      gloss: "holds fast; a bargain struck and held"
      built: ["qat-", "-ush"]
    - {form: "telm-", class: stem, field: The bargain and the word, gloss: "to bind in writing"}
    - form: telmush
      class: "n"
      field: The bargain and the word
      gloss: "a contract"
      built: ["telm-", "-ush"]
    - form: telmum
      class: "n"
      field: The bargain and the word
      gloss: "a notary, who writes the bond"
      built: ["telm-", "-um"]
    - {form: "bashim-", class: stem, field: The bargain and the word, gloss: "to open a price"}
    - form: bashimum
      class: "n"
      field: The bargain and the word
      gloss: "a seller who opens the bidding"
      built: ["bashim-", "-um"]
    - form: bashimush
      class: "n"
      field: The bargain and the word
      gloss: "an opening price, which nobody expects to stand"
      built: ["bashim-", "-ush"]
    - {form: "nibur-", class: stem, field: The bargain and the word, gloss: "to push back"}
    - form: niburush
      class: "n"
      field: The bargain and the word
      gloss: "a refusal, the true beginning of a bargain"
      built: ["nibur-", "-ush"]
    - form: niburam
      class: v
      field: The bargain and the word
      gloss: "pushes back"
      built: ["nibur-", "-am"]
      concept: ["push"]
    - form: "pushut-"
      class: stem
      field: The bargain and the word
      gloss: "to clasp hands on it"
    - form: pushutush
      class: "n"
      field: The bargain and the word
      gloss: "the clasp that seals a bargain"
      built: ["pushut-", "-ush"]
    - form: pushutum
      class: "n"
      field: The bargain and the word
      gloss: "the witness who touches the clasped hands"
      built: ["pushut-", "-um"]
    - {form: "pazir-", class: stem, field: The bargain and the word, gloss: "to sit over tea"}
    - form: paziru
      class: "n"
      field: The bargain and the word
      gloss: "the long talk and its hospitality"
      built: ["pazir-", "-u"]
    - form: pazirum
      class: "n"
      field: The bargain and the word
      gloss: "a go-between, who keeps the tea and the peace"
      built: ["pazir-", "-um"]
      concept: ["host"]
    - form: "pashin-"
      class: stem
      field: The bargain and the word
      gloss: "to name a fair price"
    - form: pashinu
      class: "n"
      field: The bargain and the word
      gloss: "a fair price, one both sides leave content with"
      built: ["pashin-", "-u"]
    - form: pashinum
      class: "n"
      field: The bargain and the word
      gloss: "an arbiter of prices"
      built: ["pashin-", "-um"]
    - form: "kadum-"
      class: stem
      field: "Reckoning, credit and debt"
      gloss: "worth that weighs"
    - form: kadumu
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "gold"
      built: ["kadum-", "-u"]
    - {form: "numar-", class: stem, field: "Reckoning, credit and debt", gloss: "to value"}
    - form: numaru
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "value, what a thing is worth to someone"
      built: ["numar-", "-u"]
    - {form: "ashur-", class: stem, field: "Reckoning, credit and debt", gloss: "to measure"}
    - form: ashuram
      class: v
      field: "Reckoning, credit and debt"
      gloss: "measures"
      built: ["ashur-", "-am"]
      concept: ["measure-verb"]
    - form: ashurum
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a measurer of cargo and coin"
      built: ["ashur-", "-um"]
    - {form: "zarut-", class: stem, field: "Reckoning, credit and debt", gloss: "profit"}
    - form: zarutan
      class: adj
      field: "Reckoning, credit and debt"
      gloss: "profit-bearing, profitable"
      built: ["zarut-", "-an"]
    - form: "damm-"
      class: stem
      field: "Reckoning, credit and debt"
      gloss: "to give and take back"
    - form: dammush
      class: v
      field: "Reckoning, credit and debt"
      gloss: "gives and takes back, as a tide does"
      built: ["damm-", "-ush"]
    - form: kurrim
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "the return of what is owed: justice, as a merchant means it"
      concept: ["justice"]
    - form: "meraz-"
      class: stem
      field: "Reckoning, credit and debt"
      gloss: "to enter in a book"
    - form: merazush
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a ledger entry"
      built: ["meraz-", "-ush"]
    - form: merazum
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a clerk, who keeps the ledger"
      built: ["meraz-", "-um"]
    - form: merazan
      class: adj
      field: "Reckoning, credit and debt"
      gloss: "of the ledger, entered; the ledger-hand, the script"
      built: ["meraz-", "-an"]
    - {form: "rasun-", class: stem, field: "Reckoning, credit and debt", gloss: "to count off"}
    - form: rasunan
      class: adj
      field: "Reckoning, credit and debt"
      gloss: "counted, tallied"
      built: ["rasun-", "-an"]
    - form: rasunush
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a tally, the count both sides agree"
      built: ["rasun-", "-ush"]
      concept: ["number"]
    - {form: "fusan-", class: stem, field: "Reckoning, credit and debt", gloss: "to owe"}
    - form: fusanush
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a debt"
      built: ["fusan-", "-ush"]
      concept: ["debt"]
    - form: fusanum
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a debtor"
      built: ["fusan-", "-um"]
    - form: fusanam
      class: v
      field: "Reckoning, credit and debt"
      gloss: "owes"
      built: ["fusan-", "-am"]
    - form: "rumuk-"
      class: stem
      field: "Reckoning, credit and debt"
      gloss: "to stand for another"
    - form: rumukum
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a surety"
      built: ["rumuk-", "-um"]
    - form: rumuku
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "the standing of a surety"
      built: ["rumuk-", "-u"]
    - form: "bunit-"
      class: stem
      field: "Reckoning, credit and debt"
      gloss: "to grow, of money"
    - form: bunitush
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "interest, the growth of a loan"
      built: ["bunit-", "-ush"]
    - form: bunitam
      class: v
      field: "Reckoning, credit and debt"
      gloss: "grows"
      built: ["bunit-", "-am"]
      concept: ["grow"]
    - {form: "yushud-", class: stem, field: "Reckoning, credit and debt", gloss: "to lend"}
    - form: yushudush
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a loan"
      built: ["yushud-", "-ush"]
    - form: yushudum
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a creditor"
      built: ["yushud-", "-um"]
    - form: "funat-"
      class: stem
      field: "Reckoning, credit and debt"
      gloss: "to lose"
      concept: lose
    - form: funatush
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a loss"
      built: ["funat-", "-ush"]
    - form: funatam
      class: v
      field: "Reckoning, credit and debt"
      gloss: "is lost"
      built: ["funat-", "-am"]
    - {form: "hushad-", class: stem, field: "Reckoning, credit and debt", gloss: "to strike money"}
    - form: hushadu
      class: "n"
      field: "Reckoning, credit and debt"
      gloss: "a coin"
      built: ["hushad-", "-u"]
    - form: hushadan
      class: adj
      field: "Reckoning, credit and debt"
      gloss: "minted, struck"
      built: ["hushad-", "-an"]
    - {form: mani, class: "n", field: "Hull, tide and knot", gloss: "the sea", concept: ["sea"]}
    - {form: "shamul-", class: stem, field: "Hull, tide and knot", gloss: "to blow fair"}
    - form: shamulu
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a fair wind"
      built: ["shamul-", "-u"]
    - {form: "belgin-", class: stem, field: "Hull, tide and knot", gloss: "to put out from shore"}
    - form: belginu
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a voyage"
      built: ["belgin-", "-u"]
    - {form: "jakud-", class: stem, field: "Hull, tide and knot", gloss: "the hull"}
    - form: jakudu
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a ship"
      built: ["jakud-", "-u"]
    - form: jakudum
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a shipmaster, who owns his hull"
      built: ["jakud-", "-um"]
    - {form: "sinn-", class: stem, field: "Hull, tide and knot", gloss: "to hold a course"}
    - form: sinnush
      class: "n"
      field: "Hull, tide and knot"
      gloss: "the keel"
      built: ["sinn-", "-ush"]
    - form: "bazun-"
      class: stem
      field: "Hull, tide and knot"
      gloss: "to spread cloth to the wind"
    - form: bazunu
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a sail"
      built: ["bazun-", "-u"]
    - form: bazunam
      class: v
      field: "Hull, tide and knot"
      gloss: "sets sail"
      built: ["bazun-", "-am"]
    - {form: "rusak-", class: stem, field: "Hull, tide and knot", gloss: "to rig"}
    - form: rusakush
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a rope"
      built: ["rusak-", "-ush"]
      concept: ["rope"]
    - form: rusakum
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a rigger"
      built: ["rusak-", "-um"]
    - {form: "zatt-", class: stem, field: "Hull, tide and knot", gloss: "to tie"}
    - form: zattu
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a knot"
      built: ["zatt-", "-u"]
    - form: zattam
      class: v
      field: "Hull, tide and knot"
      gloss: "ties"
      built: ["zatt-", "-am"]
      concept: ["lock-verb"]
    - form: "tanad-"
      class: stem
      field: "Hull, tide and knot"
      gloss: "to hold fast to the bottom"
    - form: tanadush
      class: "n"
      field: "Hull, tide and knot"
      gloss: "an anchor"
      built: ["tanad-", "-ush"]
    - form: tanadam
      class: v
      field: "Hull, tide and knot"
      gloss: "drops anchor"
      built: ["tanad-", "-am"]
    - form: "besik-"
      class: stem
      field: "Hull, tide and knot"
      gloss: "to shelter from the swell"
    - form: besiku
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a harbor"
      built: ["besik-", "-u"]
    - form: besikum
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a harbor-master"
      built: ["besik-", "-um"]
    - {form: "visiz-", class: stem, field: "Hull, tide and knot", gloss: "to rise and fall"}
    - form: visizush
      class: "n"
      field: "Hull, tide and knot"
      gloss: "the tide"
      built: ["visiz-", "-ush"]
    - form: visizan
      class: adj
      field: "Hull, tide and knot"
      gloss: "tidal, running with the tide"
      built: ["visiz-", "-an"]
    - form: "hitus-"
      class: stem
      field: "Hull, tide and knot"
      gloss: "to lie hidden under water"
    - form: hitusu
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a shoal or reef"
      built: ["hitus-", "-u"]
    - {form: "zupum-", class: stem, field: "Hull, tide and knot", gloss: "to run", concept: run}
    - form: zupumush
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a current, a set of the water"
      built: ["zupum-", "-ush"]
    - form: "sharim-"
      class: stem
      field: "Hull, tide and knot"
      gloss: "to burn through the night"
    - form: sharimu
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a beacon"
      built: ["sharim-", "-u"]
    - form: sharimum
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a beacon-keeper"
      built: ["sharim-", "-um"]
    - {form: "zazur-", class: stem, field: "Hull, tide and knot", gloss: "to stow"}
    - form: zazurush
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a cargo"
      built: ["zazur-", "-ush"]
    - form: zazurum
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a shipper"
      built: ["zazur-", "-um"]
    - {form: "sharr-", class: stem, field: "Hull, tide and knot", gloss: "to pull"}
    - form: sharru
      class: "n"
      field: "Hull, tide and knot"
      gloss: "an oar"
      built: ["sharr-", "-u"]
    - form: sharrum
      class: "n"
      field: "Hull, tide and knot"
      gloss: "a rower"
      built: ["sharr-", "-um"]
    - form: "taruz-"
      class: stem
      field: "The house, the firm and the family"
      gloss: "the house as a firm"
    - form: taruzi
      class: "n"
      field: "The house, the firm and the family"
      gloss: "the houses of a line; a family's firms"
      built: ["taruz-", "-i"]
      concept: ["family"]
    - form: taruzum
      class: "n"
      field: "The house, the firm and the family"
      gloss: "the head of a house"
      built: ["taruz-", "-um"]
    - form: taruzuni
      class: "n"
      field: "The house, the firm and the family"
      gloss: "the whole company of a house, kin and clerks together"
      built: ["taruz-", "-uni"]
    - form: "ilamm-"
      class: stem
      field: "The house, the firm and the family"
      gloss: "a family's honor"
    - form: ilammu
      class: "n"
      field: "The house, the firm and the family"
      gloss: "family honor, the worth of a house to be spent"
      built: ["ilamm-", "-u"]
      concept: ["honor"]
    - form: "qizik-"
      class: stem
      field: "The house, the firm and the family"
      gloss: "to inherit"
    - form: qizikum
      class: "n"
      field: "The house, the firm and the family"
      gloss: "an heir"
      built: ["qizik-", "-um"]
      concept: ["descendant"]
    - form: qiziku
      class: "n"
      field: "The house, the firm and the family"
      gloss: "an inheritance"
      built: ["qizik-", "-u"]
    - form: "biss-"
      class: stem
      field: "The house, the firm and the family"
      gloss: "to learn at another's bench"
    - form: bissum
      class: "n"
      field: "The house, the firm and the family"
      gloss: "an apprentice"
      built: ["biss-", "-um"]
      concept: ["student"]
    - form: bissush
      class: "n"
      field: "The house, the firm and the family"
      gloss: "an apprenticeship"
      built: ["biss-", "-ush"]
    - form: "balin-"
      class: stem
      field: "The house, the firm and the family"
      gloss: "to share a venture"
    - form: balinum
      class: "n"
      field: "The house, the firm and the family"
      gloss: "a partner"
      built: ["balin-", "-um"]
      concept: ["friend"]
    - form: balinu
      class: "n"
      field: "The house, the firm and the family"
      gloss: "a partnership"
      built: ["balin-", "-u"]
    - form: "kalur-"
      class: stem
      field: "The house, the firm and the family"
      gloss: "to stand in a house's counsels"
    - form: kalurum
      class: "n"
      field: "The house, the firm and the family"
      gloss: "an elder"
      built: ["kalur-", "-um"]
      concept: ["elder"]
    - form: kaluru
      class: "n"
      field: "The house, the firm and the family"
      gloss: "age and the standing it brings"
      built: ["kalur-", "-u"]
    - form: "teshud-"
      class: stem
      field: "The house, the firm and the family"
      gloss: "to join two houses"
    - form: teshudush
      class: "n"
      field: "The house, the firm and the family"
      gloss: "a marriage, which is a merger"
      built: ["teshud-", "-ush"]
      concept: ["marriage"]
    - form: teshudam
      class: v
      field: "The house, the firm and the family"
      gloss: "weds"
      built: ["teshud-", "-am"]
      concept: ["marry"]
    - form: kumuni
      class: v
      field: "Law, oath and the Confederation"
      gloss: "binds, holds a party to what was said"
    - form: "mugil-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to set down as custom"
    - form: mugilu
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "law, the custom set down"
      built: ["mugil-", "-u"]
      concept: ["law"]
    - form: mugilum
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a lawspeaker"
      built: ["mugil-", "-um"]
    - form: "dapum-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to swear before witnesses"
    - form: dapumush
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "an oath"
      built: ["dapum-", "-ush"]
    - form: dapumam
      class: v
      field: "Law, oath and the Confederation"
      gloss: "swears"
      built: ["dapum-", "-am"]
      concept: ["promise-verb"]
    - form: "khurut-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to weigh a dispute"
    - form: khurutum
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a judge"
      built: ["khurut-", "-um"]
    - form: khurutush
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a judgment"
      built: ["khurut-", "-ush"]
    - form: "helar-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to press a mark"
    - form: helaru
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a seal"
      built: ["helar-", "-u"]
    - form: helaram
      class: v
      field: "Law, oath and the Confederation"
      gloss: "seals"
      built: ["helar-", "-am"]
    - form: "gatit-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to sit in council"
    - form: gatitush
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a sitting of the council; the Vezakuni's standing council"
      built: ["gatit-", "-ush"]
    - form: gatitum
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a councillor"
      built: ["gatit-", "-um"]
    - form: "sazum-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to levy at the gate"
    - form: sazumush
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a toll"
      built: ["sazum-", "-ush"]
    - form: sazumum
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a toll-keeper"
      built: ["sazum-", "-um"]
    - form: "yamuz-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to sail in company"
    - form: yamuzu
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a fleet"
      built: ["yamuz-", "-u"]
    - form: yamuzan
      class: adj
      field: "Law, oath and the Confederation"
      gloss: "naval, of the fleet"
      built: ["yamuz-", "-an"]
    - form: "zabuz-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to go unbound"
    - form: zabuzu
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "freedom"
      built: ["zabuz-", "-u"]
      concept: ["freedom"]
    - form: "khamis-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to close the sea to others"
    - form: khamisush
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a blockade"
      built: ["khamis-", "-ush"]
    - form: khamisam
      class: v
      field: "Law, oath and the Confederation"
      gloss: "blockades"
      built: ["khamis-", "-am"]
    - form: "vezak-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to hold a trade to its rule"
    - form: vezakum
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a guild-warden"
      built: ["vezak-", "-um"]
    - form: "dirab-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to preside, to speak last in council"
    - form: dirabum
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "one who presides: the head of a council"
      built: ["dirab-", "-um"]
      concept: ["leader", "ruler"]
    - form: "zuvar-"
      class: stem
      field: "Law, oath and the Confederation"
      gloss: "to keep a city's business for another"
    - form: zuvarum
      class: "n"
      field: "Law, oath and the Confederation"
      gloss: "a city deputy"
      built: ["zuvar-", "-um"]
    - {form: "genir-", class: stem, field: Doing and being, gloss: "to take", concept: take}
    - form: geniram
      class: v
      field: Doing and being
      gloss: "takes"
      built: ["genir-", "-am"]
      concept: ["take"]
    - form: genirush
      class: "n"
      field: Doing and being
      gloss: "a taking, a seizure"
      built: ["genir-", "-ush"]
    - {form: "kubas-", class: stem, field: Doing and being, gloss: "to count"}
    - form: kubasam
      class: v
      field: Doing and being
      gloss: "counts"
      built: ["kubas-", "-am"]
      concept: ["count-verb"]
    - form: kubasum
      class: "n"
      field: Doing and being
      gloss: "a counter; the Vezakuni's treasurer"
      built: ["kubas-", "-um"]
    - {form: "kusad-", class: stem, field: Doing and being, gloss: "to carry"}
    - form: kusadam
      class: v
      field: Doing and being
      gloss: "carries"
      built: ["kusad-", "-am"]
      concept: ["carry"]
    - form: kusadum
      class: "n"
      field: Doing and being
      gloss: "a carrier"
      built: ["kusad-", "-um"]
    - {form: "yutal-", class: stem, field: Doing and being, gloss: "to pay"}
    - {form: yutalam, class: v, field: Doing and being, gloss: "pays", built: ["yutal-", "-am"]}
    - form: yutalush
      class: "n"
      field: Doing and being
      gloss: "a payment"
      built: ["yutal-", "-ush"]
    - {form: "kudum-", class: stem, field: Doing and being, gloss: "to come", concept: come}
    - form: kudumam
      class: v
      field: Doing and being
      gloss: "comes"
      built: ["kudum-", "-am"]
      concept: ["come", "arrive"]
    - form: kudumush
      class: "n"
      field: Doing and being
      gloss: "an arrival"
      built: ["kudum-", "-ush"]
    - {form: "jiram-", class: stem, field: Doing and being, gloss: "to speak", concept: speak}
    - form: jiramam
      class: v
      field: Doing and being
      gloss: "speaks"
      built: ["jiram-", "-am"]
      concept: ["say", "speak"]
    - form: jiramush
      class: "n"
      field: Doing and being
      gloss: "a saying"
      built: ["jiram-", "-ush"]
    - {form: "pazas-", class: stem, field: Doing and being, gloss: "to look out"}
    - form: pazasam
      class: v
      field: Doing and being
      gloss: "looks out"
      built: ["pazas-", "-am"]
      concept: ["look", "expression-look"]
    - form: pazasum
      class: "n"
      field: Doing and being
      gloss: "a lookout; an overseer of the Vezakuni"
      built: ["pazas-", "-um"]
    - {form: "latar-", class: stem, field: Doing and being, gloss: "to be honest"}
    - form: lataran
      class: adj
      field: Doing and being
      gloss: "fair, honest in dealing"
      built: ["latar-", "-an"]
      concept: ["honest"]
    - {form: "lart-", class: stem, field: Doing and being, gloss: "to cost much"}
    - form: lartan
      class: adj
      field: Doing and being
      gloss: "dear, costly"
      built: ["lart-", "-an"]
    - {form: "temad-", class: stem, field: Doing and being, gloss: "to be whole"}
    - form: temadan
      class: adj
      field: Doing and being
      gloss: "sound, whole, undamaged"
      built: ["temad-", "-an"]
      concept: ["healthy", "whole", "complete"]
    - {form: "bibud-", class: stem, field: Doing and being, gloss: "to be large"}
    - form: bibudan
      class: adj
      field: Doing and being
      gloss: "great, large"
      built: ["bibud-", "-an"]
      concept: ["big"]
    - {form: "khidiz-", class: stem, field: Doing and being, gloss: "to be little"}
    - form: khidizan
      class: adj
      field: Doing and being
      gloss: "small"
      built: ["khidiz-", "-an"]
      concept: ["small"]
    - {form: tu, class: art, field: Grammar words, gloss: "the"}
    - {form: ki, class: part, field: Grammar words, gloss: "and", concept: ["and"]}
    - {form: zu, class: part, field: Grammar words, gloss: "not", concept: ["not"]}
    - {form: be, class: part, field: Grammar words, gloss: "in, at", concept: ["in", "at"]}
    - {form: so, class: part, field: Grammar words, gloss: "for, to", concept: ["toward", "to"]}
    - {form: mi, class: part, field: Grammar words, gloss: "from, of", concept: ["from"]}
    - {form: ju, class: pron, field: Grammar words, gloss: "this", concept: ["this"]}
    - {form: ji, class: pron, field: Grammar words, gloss: "that", concept: ["that"]}
    - {form: yez, class: num, field: Grammar words, gloss: "one", concept: ["one"]}
    - {form: lel, class: num, field: Grammar words, gloss: "two", concept: ["two"]}
    - {form: zem, class: num, field: Grammar words, gloss: "three", concept: ["three"]}
    - {form: vub, class: num, field: Grammar words, gloss: "four", concept: ["four"]}
    - {form: fom, class: num, field: Grammar words, gloss: "five", concept: ["five"]}
    - {form: yet, class: num, field: Grammar words, gloss: "ten", concept: ["ten"]}
    - "form": "nesh-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "see; perceive with the eyes"
    - "form": "nesham"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to see"
      "built": ["nesh-", "-am"]
      "concept": "see-verb"
    - "form": "neshush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a sight; the visible thing or scene seen, as the result of looking"
      "built": ["nesh-", "-ush"]
      "concept": "see-noun"
    - "form": "mazir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "hear; perceive sounds"
    - "form": "maziram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hear"
      "built": ["mazir-", "-am"]
      "concept": "hear-verb"
    - "form": "mazirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a sound; an audible thing heard"
      "built": ["mazir-", "-ush"]
      "concept": "hear-noun"
    - "form": "sufir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "smell; perceive odours"
    - "form": "sufiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to smell"
      "built": ["sufir-", "-am"]
      "concept": "smell-verb"
    - "form": "sufirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "an odour; a smell perceived by the nose"
      "built": ["sufir-", "-ush"]
      "concept": "smell-noun"
    - "form": "palut-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "taste; perceive flavours"
    - "form": "palutam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to taste"
      "built": ["palut-", "-am"]
      "concept": "taste-verb"
    - "form": "palutush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a flavour; the taste perceived in the mouth"
      "built": ["palut-", "-ush"]
      "concept": "taste-noun"
    - "form": "kamur-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "touch; make bodily contact"
    - "form": "kamuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to touch; to feel with the hand"
      "built": ["kamur-", "-am"]
      "concept": "touch-verb"
    - "form": "kamurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a touch; a physical contact felt"
      "built": ["kamur-", "-ush"]
      "concept": "touch-noun"
    - "form": "paziruk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "to watch; to observe attentively"
    - "form": "pazirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to watch; to observe attentively"
      "built": ["paziruk-", "-am"]
      "concept": "watch"
    - "form": "nashu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "appearance; the way any person, thing or place looks"
      "concept": "appearance"
    - {"form": "neshik-", "class": "stem", "field": "Everyday speech", "gloss": "visible"}
    - "form": "neshikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "visible"
      "built": ["neshik-", "-an"]
      "concept": "visible"
    - "form": "zu neshikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "invisible"
      "concept": "invisible"
      "built": ["zu", "neshikan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "mazur-", "class": "stem", "field": "Everyday speech", "gloss": "to listen"}
    - "form": "mazuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to listen"
      "built": ["mazur-", "-am"]
      "concept": "listen"
    - "form": "maziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "noise"
      "concept": "noise"
    - "form": "maziru mi birum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "voice"
      "concept": "voice"
      "built": ["maziru", "mi", "birum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu maziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "silence"
      "concept": "silence"
      "built": ["zu", "maziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "ramuz-", "class": "stem", "field": "Everyday speech", "gloss": "loud"}
    - "form": "ramuzan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "loud"
      "built": ["ramuz-", "-an"]
      "concept": "loud"
    - {"form": "sulim-", "class": "stem", "field": "Everyday speech", "gloss": "quiet"}
    - "form": "suliman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "quiet"
      "built": ["sulim-", "-an"]
      "concept": "quiet"
    - {"form": "sufil-", "class": "stem", "field": "Everyday speech", "gloss": "fragrant"}
    - "form": "sufilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "fragrant"
      "built": ["sufil-", "-an"]
      "concept": "fragrant"
    - "form": "sufuk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "foul-smelling; having an unpleasant smell"
    - "form": "sufukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "foul-smelling; having an unpleasant smell"
      "built": ["sufuk-", "-an"]
      "concept": "foul"
    - {"form": "milaz-", "class": "stem", "field": "Everyday speech", "gloss": "sweet"}
    - "form": "milazan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "sweet"
      "built": ["milaz-", "-an"]
      "concept": "sweet"
    - {"form": "suzil-", "class": "stem", "field": "Everyday speech", "gloss": "sour"}
    - "form": "suzilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "sour"
      "built": ["suzil-", "-an"]
      "concept": "sour"
    - {"form": "bazur-", "class": "stem", "field": "Everyday speech", "gloss": "bitter"}
    - "form": "bazuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "bitter"
      "built": ["bazur-", "-an"]
      "concept": "bitter"
    - {"form": "tasir-", "class": "stem", "field": "Everyday speech", "gloss": "salty"}
    - "form": "tasiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "salty"
      "built": ["tasir-", "-an"]
      "concept": "salty"
    - "form": "kamir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "to feel a sensation"
    - "form": "kamiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to feel a sensation"
      "built": ["kamir-", "-am"]
      "concept": "feel-verb"
    - "form": "kamirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sensation"
      "built": ["kamir-", "-ush"]
      "concept": "sensation"
    - {"form": "lulum-", "class": "stem", "field": "Everyday speech", "gloss": "smooth"}
    - "form": "luluman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "smooth"
      "built": ["lulum-", "-an"]
      "concept": "smooth"
    - {"form": "qadil-", "class": "stem", "field": "Everyday speech", "gloss": "rough"}
    - "form": "qadilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "rough"
      "built": ["qadil-", "-an"]
      "concept": "rough"
    - {"form": "lumiz-", "class": "stem", "field": "Everyday speech", "gloss": "soft"}
    - "form": "lumizan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "soft"
      "built": ["lumiz-", "-an"]
      "concept": "soft"
    - "form": "qatt-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "hard to the touch; firm rather than soft"
    - "form": "qattan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "hard to the touch; firm rather than soft"
      "built": ["qatt-", "-an"]
      "concept": "hard-texture"
    - {"form": "nishak-", "class": "stem", "field": "Everyday speech", "gloss": "to notice"}
    - "form": "nishakam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to notice"
      "built": ["nishak-", "-am"]
      "concept": "notice"
    - {"form": "nishum-", "class": "stem", "field": "Everyday speech", "gloss": "perceive"}
    - "form": "nishumam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "perceive"
      "built": ["nishum-", "-am"]
      "concept": "perceive"
    - {"form": "neshir-", "class": "stem", "field": "Everyday speech", "gloss": "recognize"}
    - "form": "neshiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "recognize"
      "built": ["neshir-", "-am"]
      "concept": "recognize"
    - "form": "nashur-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "seem; present an appearance"
    - "form": "nashuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "seem"
      "built": ["nashur-", "-am"]
      "concept": "seem"
    - "form": "bariz-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "wrath; intense anger"
    - "form": "barizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wrath; intense anger"
      "built": ["bariz-", "-ush"]
      "concept": "wrath"
    - {"form": "guzir-", "class": "stem", "field": "Everyday speech", "gloss": "envy"}
    - "form": "guzirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "envy"
      "built": ["guzir-", "-ush"]
      "concept": "envy"
    - {"form": "yazur-", "class": "stem", "field": "Everyday speech", "gloss": "hope for an event"}
    - "form": "yazurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hope"
      "built": ["yazur-", "-ush"]
      "concept": "hope"
    - {"form": "garriz-", "class": "stem", "field": "Everyday speech", "gloss": "greed"}
    - "form": "garrizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "greed"
      "built": ["garriz-", "-ush"]
      "concept": "greed"
    - {"form": "zabim-", "class": "stem", "field": "Everyday speech", "gloss": "boasting"}
    - "form": "zabimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "boasting"
      "built": ["zabim-", "-ush"]
      "concept": "boasting"
    - {"form": "lamir-", "class": "stem", "field": "Everyday speech", "gloss": "pride"}
    - "form": "lamirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pride"
      "built": ["lamir-", "-ush"]
      "concept": "pride"
    - "form": "shazuk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "lust; sexual appetite, distinct from the four kinds of love"
    - "form": "shazukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lust; sexual appetite, distinct from the four kinds of love"
      "built": ["shazuk-", "-ush"]
      "concept": "lust"
    - "form": "zu yazurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "despair"
      "concept": "despair"
      "built": ["zu", "yazurush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "yazuk-", "class": "stem", "field": "Everyday speech", "gloss": "disappointment"}
    - "form": "yazukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "disappointment"
      "built": ["yazuk-", "-ush"]
      "concept": "disappointment"
    - {"form": "zamil-", "class": "stem", "field": "Everyday speech", "gloss": "faith"}
    - "form": "zamilush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "faith"
      "built": ["zamil-", "-ush"]
      "concept": "faith"
    - {"form": "lumir-", "class": "stem", "field": "Everyday speech", "gloss": "feel joy"}
    - "form": "lumirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "joy"
      "built": ["lumir-", "-ush"]
      "concept": "joy"
    - {"form": "lumaz-", "class": "stem", "field": "Everyday speech", "gloss": "happiness"}
    - "form": "lumazush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "happiness"
      "built": ["lumaz-", "-ush"]
      "concept": "happiness"
    - {"form": "mulir-", "class": "stem", "field": "Everyday speech", "gloss": "pleasure"}
    - "form": "mulirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pleasure"
      "built": ["mulir-", "-ush"]
      "concept": "pleasure"
    - {"form": "lamuz-", "class": "stem", "field": "Everyday speech", "gloss": "contentment"}
    - "form": "lamuzush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "contentment"
      "built": ["lamuz-", "-ush"]
      "concept": "contentment"
    - "form": "tazim-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "feel gratitude; thank"
    - "form": "tazimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "gratitude"
      "built": ["tazim-", "-ush"]
      "concept": "gratitude"
    - {"form": "rishal-", "class": "stem", "field": "Everyday speech", "gloss": "admiration"}
    - "form": "rishalush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "admiration"
      "built": ["rishal-", "-ush"]
      "concept": "admiration"
    - "form": "qazim-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "trust; rely on another"
    - "form": "qazimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "trust; reliance on a person’s reliability and care"
      "built": ["qazim-", "-ush"]
      "concept": "trust"
    - {"form": "burak-", "class": "stem", "field": "Everyday speech", "gloss": "courage"}
    - "form": "burakush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "courage"
      "built": ["burak-", "-ush"]
      "concept": "courage"
    - {"form": "barim-", "class": "stem", "field": "Everyday speech", "gloss": "anger"}
    - "form": "barimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "anger"
      "built": ["barim-", "-ush"]
      "concept": "anger"
    - {"form": "gashir-", "class": "stem", "field": "Everyday speech", "gloss": "hatred"}
    - "form": "gashirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hatred"
      "built": ["gashir-", "-ush"]
      "concept": "hatred"
    - {"form": "guzim-", "class": "stem", "field": "Everyday speech", "gloss": "jealousy"}
    - "form": "guzimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "jealousy"
      "built": ["guzim-", "-ush"]
      "concept": "jealousy"
    - {"form": "tazur-", "class": "stem", "field": "Everyday speech", "gloss": "fear"}
    - "form": "tazurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fear"
      "built": ["tazur-", "-ush"]
      "concept": "fear"
    - "form": "tazurush bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "terror"
      "concept": "terror"
      "built": ["tazurush", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "samiz-", "class": "stem", "field": "Everyday speech", "gloss": "sadness"}
    - "form": "samizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sadness"
      "built": ["samiz-", "-ush"]
      "concept": "sadness"
    - {"form": "samar-", "class": "stem", "field": "Everyday speech", "gloss": "grief"}
    - "form": "samarush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grief"
      "built": ["samar-", "-ush"]
      "concept": "grief"
    - {"form": "nuzim-", "class": "stem", "field": "Everyday speech", "gloss": "shame"}
    - "form": "nuzimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shame"
      "built": ["nuzim-", "-ush"]
      "concept": "shame"
    - {"form": "gazim-", "class": "stem", "field": "Everyday speech", "gloss": "guilt"}
    - "form": "gazimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "guilt"
      "built": ["gazim-", "-ush"]
      "concept": "guilt"
    - {"form": "gazur-", "class": "stem", "field": "Everyday speech", "gloss": "regret"}
    - "form": "gazurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "regret"
      "built": ["gazur-", "-ush"]
      "concept": "regret"
    - {"form": "lamish-", "class": "stem", "field": "Everyday speech", "gloss": "humility"}
    - "form": "lamishush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "humility"
      "built": ["lamish-", "-ush"]
      "concept": "humility"
    - "form": "qarim-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "have confidence in ability or success"
    - "form": "qarimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "confidence in one’s capacity or expectation of success"
      "built": ["qarim-", "-ush"]
      "concept": "confidence"
    - {"form": "nazim-", "class": "stem", "field": "Everyday speech", "gloss": "embarrassment"}
    - "form": "nazimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "embarrassment"
      "built": ["nazim-", "-ush"]
      "concept": "embarrassment"
    - "form": "rashil-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "feel compassion; help"
    - "form": "rashilush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "compassion"
      "built": ["rashil-", "-ush"]
      "concept": "compassion"
    - {"form": "rashum-", "class": "stem", "field": "Everyday speech", "gloss": "pity"}
    - "form": "rashumush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pity"
      "built": ["rashum-", "-ush"]
      "concept": "pity"
    - {"form": "rashiz-", "class": "stem", "field": "Everyday speech", "gloss": "sympathy"}
    - "form": "rashizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sympathy"
      "built": ["rashiz-", "-ush"]
      "concept": "sympathy"
    - {"form": "gazul-", "class": "stem", "field": "Everyday speech", "gloss": "resentment"}
    - "form": "gazulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "resentment"
      "built": ["gazul-", "-ush"]
      "concept": "resentment"
    - {"form": "gazal-", "class": "stem", "field": "Everyday speech", "gloss": "contempt"}
    - "form": "gazalush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "contempt"
      "built": ["gazal-", "-ush"]
      "concept": "contempt"
    - {"form": "mushir-", "class": "stem", "field": "Everyday speech", "gloss": "forgiveness"}
    - "form": "mushirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "forgiveness"
      "built": ["mushir-", "-ush"]
      "concept": "forgiveness"
    - {"form": "yazim-", "class": "stem", "field": "Everyday speech", "gloss": "want; be willing"}
    - "form": "yazimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "desire"
      "built": ["yazim-", "-ush"]
      "concept": "desire"
    - {"form": "yazil-", "class": "stem", "field": "Everyday speech", "gloss": "longing"}
    - "form": "yazilush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "longing"
      "built": ["yazil-", "-ush"]
      "concept": "longing"
    - "form": "lamuk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "satisfaction (desire fulfilled)"
    - "form": "lamukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "satisfaction (desire fulfilled)"
      "built": ["lamuk-", "-ush"]
      "concept": "satisfaction"
    - {"form": "qazul-", "class": "stem", "field": "Everyday speech", "gloss": "frustration"}
    - "form": "qazulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "frustration"
      "built": ["qazul-", "-ush"]
      "concept": "frustration"
    - {"form": "nizur-", "class": "stem", "field": "Everyday speech", "gloss": "curiosity"}
    - "form": "nizurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "curiosity"
      "built": ["nizur-", "-ush"]
      "concept": "curiosity"
    - {"form": "nuzur-", "class": "stem", "field": "Everyday speech", "gloss": "confusion"}
    - "form": "nuzurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "confusion"
      "built": ["nuzur-", "-ush"]
      "concept": "confusion"
    - {"form": "nuzil-", "class": "stem", "field": "Everyday speech", "gloss": "doubt"}
    - "form": "nuzilush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "doubt"
      "built": ["nuzil-", "-ush"]
      "concept": "doubt"
    - "form": "qazir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "be certain of a claim"
    - "form": "qazirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "certainty; being sure of a claim, whether the claim is true or false"
      "built": ["qazir-", "-ush"]
      "concept": "certainty"
    - {"form": "nashir-", "class": "stem", "field": "Everyday speech", "gloss": "be surprised"}
    - "form": "nashirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "surprise"
      "built": ["nashir-", "-ush"]
      "concept": "surprise"
    - {"form": "samul-", "class": "stem", "field": "Everyday speech", "gloss": "boredom"}
    - "form": "samulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "boredom"
      "built": ["samul-", "-ush"]
      "concept": "boredom"
    - "form": "yazul-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "intend; anticipate an event"
    - "form": "yazulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["anticipation", "purpose"]
      "built": ["yazul-", "-ush"]
      "concept": ["anticipation", "purpose"]
    - {"form": "zamir-", "class": "stem", "field": "Everyday speech", "gloss": "belief"}
    - "form": "zamirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "belief"
      "built": ["zamir-", "-ush"]
      "concept": "belief"
    - {"form": "rashan-", "class": "stem", "field": "Everyday speech", "gloss": "reverence"}
    - "form": "rashanush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "reverence"
      "built": ["rashan-", "-ush"]
      "concept": "reverence"
    - "form": "rashanush bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "awe"
      "concept": "awe"
      "built": ["rashanush", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lishar-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "romantic love; the love of desired partners"
    - "form": "lisharush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "romantic love; the love of desired partners"
      "built": ["lishar-", "-ush"]
      "concept": "love-eros"
    - "form": "balish-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "friendship love; affectionate regard between friends"
    - "form": "balishush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "friendship love; affectionate regard between friends"
      "built": ["balish-", "-ush"]
      "concept": "love-philia"
    - "form": "tarish-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "familial love; the attachment of kin"
    - "form": "tarishush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "familial love; the attachment of kin"
      "built": ["tarish-", "-ush"]
      "concept": "love-storge"
    - "form": "rashuk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "selfless love extended to any person without requiring kinship, friendship or desire"
    - "form": "rashukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "selfless love extended to any person without requiring kinship, friendship or desire"
      "built": ["rashuk-", "-ush"]
      "concept": "love-agape"
    - {"form": "lishum-", "class": "stem", "field": "Everyday speech", "gloss": "affection"}
    - "form": "lishumush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "affection"
      "built": ["lishum-", "-ush"]
      "concept": "affection"
    - {"form": "lishiz-", "class": "stem", "field": "Everyday speech", "gloss": "attraction"}
    - "form": "lishizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "attraction"
      "built": ["lishiz-", "-ush"]
      "concept": "attraction"
    - {"form": "lishul-", "class": "stem", "field": "Everyday speech", "gloss": "intimacy"}
    - "form": "lishulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "intimacy"
      "built": ["lishul-", "-ush"]
      "concept": "intimacy"
    - "form": "qatir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "follow faithfully; devote oneself"
    - "form": "qatirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["devotion", "obedience"]
      "built": ["qatir-", "-ush"]
      "concept": ["devotion", "obedience"]
    - "form": "qatil-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "keep allegiance to a person or commitment"
    - "form": "qatilush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "loyalty; steadfast allegiance to a person or commitment"
      "built": ["qatil-", "-ush"]
      "concept": "loyalty"
    - "form": "balinush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "companionship; being together with a companion"
      "built": ["balin-", "-ush"]
      "concept": "companionship"
    - {"form": "gashur-", "class": "stem", "field": "Everyday speech", "gloss": "enmity"}
    - "form": "gashurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "enmity"
      "built": ["gashur-", "-ush"]
      "concept": "enmity"
    - "form": "qashu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the head"
      "concept": "head"
    - "form": "qashir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the hair"
      "concept": "hair"
    - "form": "nishu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the face"
      "concept": "face"
    - "form": "neshilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the eye"
      "concept": "eye"
    - "form": "mazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the ear"
      "concept": "ear"
    - "form": "sufilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the nose"
      "concept": "nose"
    - "form": "paliru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the mouth"
      "concept": "mouth"
    - "form": "palir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the lip"
      "concept": "lip"
    - "form": "taniru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the tooth"
      "concept": "tooth"
    - "form": "palutu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the tongue"
      "concept": "tongue"
    - "form": "qadilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the neck"
      "concept": "neck"
    - "form": "kamiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the shoulder"
      "concept": "shoulder"
    - "form": "qumir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the arm"
      "concept": "arm"
    - "form": "qumilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the elbow"
      "concept": "elbow"
    - "form": "kamulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the hand"
      "concept": "hand"
    - "form": "kamulir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the finger"
      "concept": "finger"
    - "form": "kamulan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the fingernail"
      "concept": "nail"
    - "form": "ramilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the chest"
      "concept": "chest"
    - "form": "ramilu lumiz"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the breast"
      "concept": "breast"
      "built": ["ramilu", "lumiz"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the heart"
      "concept": "heart"
    - "form": "badiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the belly"
      "concept": "belly"
    - "form": "dazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the back"
      "concept": "back"
    - "form": "bazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the hip"
      "concept": "hip"
    - "form": "tazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the leg"
      "concept": "leg"
    - "form": "tazilir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the knee"
      "concept": "knee"
    - "form": "tazilu kamulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the foot"
      "concept": "foot"
      "built": ["tazilu", "kamulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazilu kamulir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the toe"
      "concept": "toe"
      "built": ["tazilu", "kamulir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shimuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the skin"
      "concept": "skin"
    - "form": "baniru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "the bone"
      "concept": "bone"
    - "form": "banilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "blood"
      "concept": "blood"
    - "form": "zamilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "flesh"
      "concept": "flesh"
    - "form": "qashu palir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "forehead"
      "concept": "forehead"
      "built": ["qashu", "palir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nishu taniru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "jaw"
      "concept": "jaw"
      "built": ["nishu", "taniru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nishu dalu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "chin"
      "concept": "chin"
      "built": ["nishu", "dalu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nishu lulum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cheek"
      "concept": "cheek"
      "built": ["nishu", "lulum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "paliru qadilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "throat"
      "concept": "throat"
      "built": ["paliru", "qadilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "badilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "stomach"
      "concept": "stomach"
    - "form": "bazilu qatt"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "waist"
      "concept": "waist"
      "built": ["bazilu", "qatt"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baniru dazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "spine"
      "concept": "spine"
      "built": ["baniru", "dazilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dazilu lumiz"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "buttock"
      "concept": "buttock"
      "built": ["dazilu", "lumiz"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qumir kamulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wrist"
      "concept": "wrist"
      "built": ["qumir", "kamulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kamulu lulum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "palm"
      "concept": "palm"
      "built": ["kamulu", "lulum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kamulir bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thumb"
      "concept": "thumb"
      "built": ["kamulir", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazilu bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thigh"
      "concept": "thigh"
      "built": ["tazilu", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazilu qadilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ankle"
      "concept": "ankle"
      "built": ["tazilu", "qadilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazilu dazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "heel"
      "concept": "heel"
      "built": ["tazilu", "dazilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazilu lulum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sole"
      "concept": "sole"
      "built": ["tazilu", "lulum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kamulan mi tazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "toenail"
      "concept": "toenail"
      "built": ["kamulan", "mi", "tazilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "buniru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "muscle"
      "concept": "muscle"
    - "form": "bunilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fat"
      "concept": "fat"
    - "form": "sumiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sweat (noun)"
      "concept": "sweat"
    - "form": "neshilu sumiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "tears"
      "concept": "tears"
      "built": ["neshilu", "sumiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "paliru saliru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "saliva"
      "concept": "saliva"
      "built": ["paliru", "saliru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qashu zamiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "brain"
      "concept": "brain"
      "built": ["qashu", "zamiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "barilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lung"
      "concept": "lung"
    - "form": "gazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "liver"
      "concept": "liver"
    - "form": "bashiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "kidney"
      "concept": "kidney"
    - "form": "badiru rusakush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "intestine"
      "concept": "intestine"
      "built": ["badiru", "rusakush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shaziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "genitals"
      "concept": "genitals"
    - "form": "taliru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "womb"
      "concept": "womb"
    - "form": "shazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "penis"
      "concept": "penis"
    - "form": "shazim"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "vagina"
      "concept": "vagina"
    - "form": "shazul"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "testicle"
      "concept": "testicle"
    - "form": "paluru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "food"
      "concept": "food"
    - {"form": "palur-", "class": "stem", "field": "Everyday speech", "gloss": "eat; take food"}
    - "form": "paluram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to eat"
      "built": ["palur-", "-am"]
      "concept": "eat"
    - "form": "saluru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a drink"
      "concept": "drink-noun"
    - "form": "salur-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "drink; take liquid"
    - "form": "saluram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to drink"
      "built": ["salur-", "-am"]
      "concept": "drink-verb"
    - "form": "saliru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "water"
      "concept": "water"
    - "form": "gashu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["air", "wind"]
      "concept": ["air", "wind"]
    - "form": "gashir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "breath"
      "concept": "breath"
    - {"form": "gashiluk-", "class": "stem", "field": "Everyday speech", "gloss": "to breathe"}
    - "form": "gashilukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to breathe"
      "built": ["gashiluk-", "-am"]
      "concept": "breathe"
    - "form": "namul-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "sleep; lie down to sleep"
    - "form": "namulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sleep"
      "built": ["namul-", "-ush"]
      "concept": "sleep-noun"
    - "form": "namulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sleep"
      "built": ["namul-", "-am"]
      "concept": "sleep-verb"
    - "form": "sashiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "urine"
      "concept": "urine"
    - {"form": "sashir-", "class": "stem", "field": "Everyday speech", "gloss": "to urinate"}
    - "form": "sashiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to urinate"
      "built": ["sashir-", "-am"]
      "concept": "urinate"
    - "form": "dashiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "dung"
      "concept": "dung"
    - {"form": "dashir-", "class": "stem", "field": "Everyday speech", "gloss": "to defecate"}
    - "form": "dashiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to defecate"
      "built": ["dashir-", "-am"]
      "concept": "defecate"
    - {"form": "hamir-", "class": "stem", "field": "Everyday speech", "gloss": "warmth"}
    - "form": "hamirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "warmth"
      "built": ["hamir-", "-ush"]
      "concept": "warmth"
    - "form": "bashuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["shelter", "an abode; a house; a home"]
      "concept": ["shelter", "abode"]
    - {"form": "palum-", "class": "stem", "field": "Everyday speech", "gloss": "hunger"}
    - "form": "palumush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hunger"
      "built": ["palum-", "-ush"]
      "concept": "hunger"
    - "form": "paluman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "hungry"
      "built": ["palum-", "-an"]
      "concept": "hungry"
    - {"form": "salum-", "class": "stem", "field": "Everyday speech", "gloss": "thirst"}
    - "form": "salumush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thirst"
      "built": ["salum-", "-ush"]
      "concept": "thirst"
    - "form": "saluman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "thirsty"
      "built": ["salum-", "-an"]
      "concept": "thirsty"
    - {"form": "gashil-", "class": "stem", "field": "Everyday speech", "gloss": "inhale"}
    - "form": "gashilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "inhale"
      "built": ["gashil-", "-am"]
      "concept": "inhale"
    - {"form": "gashuk-", "class": "stem", "field": "Everyday speech", "gloss": "exhale"}
    - "form": "gashukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "exhale"
      "built": ["gashuk-", "-am"]
      "concept": "exhale"
    - {"form": "gashut-", "class": "stem", "field": "Everyday speech", "gloss": "suffocate"}
    - "form": "gashutam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "suffocate"
      "built": ["gashut-", "-am"]
      "concept": "suffocate"
    - {"form": "namir-", "class": "stem", "field": "Everyday speech", "gloss": "wake from sleep"}
    - "form": "namiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "wake"
      "built": ["namir-", "-am"]
      "concept": "wake"
    - "form": "namiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "awake"
      "built": ["namir-", "-an"]
      "concept": "awake"
    - {"form": "namiz-", "class": "stem", "field": "Everyday speech", "gloss": "a dream"}
    - "form": "namizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a dream"
      "built": ["namiz-", "-ush"]
      "concept": "dream"
    - {"form": "namur-", "class": "stem", "field": "Everyday speech", "gloss": "rest"}
    - "form": "namuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "rest (noun)"
      "built": ["namur-", "-am"]
      "concept": "rest"
    - "form": "namuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "tired"
      "built": ["namur-", "-an"]
      "concept": "tired"
    - {"form": "sumir-", "class": "stem", "field": "Everyday speech", "gloss": "to sweat"}
    - "form": "sumiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sweat"
      "built": ["sumir-", "-am"]
      "concept": "sweat-verb"
    - {"form": "hamuz-", "class": "stem", "field": "Everyday speech", "gloss": "heat"}
    - "form": "hamuzush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "heat"
      "built": ["hamuz-", "-ush"]
      "concept": "heat"
    - "form": "sazir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "cold as a bodily need or temperature condition"
    - "form": "sazirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cold as a bodily need or temperature condition"
      "built": ["sazir-", "-ush"]
      "concept": "cold-noun"
    - "form": "hamuzan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "hot"
      "built": ["hamuz-", "-an"]
      "concept": "hot"
    - "form": "hamiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "warm"
      "built": ["hamir-", "-an"]
      "concept": "warm"
    - {"form": "sazil-", "class": "stem", "field": "Everyday speech", "gloss": "cool"}
    - "form": "sazilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "cool"
      "built": ["sazil-", "-an"]
      "concept": "cool"
    - {"form": "sazur-", "class": "stem", "field": "Everyday speech", "gloss": "freeze"}
    - "form": "sazuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "freeze"
      "built": ["sazur-", "-am"]
      "concept": "freeze"
    - {"form": "hamul-", "class": "stem", "field": "Everyday speech", "gloss": "burn"}
    - "form": "hamulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "burn"
      "built": ["hamul-", "-am"]
      "concept": "burn"
    - {"form": "bashir-", "class": "stem", "field": "Everyday speech", "gloss": "safety"}
    - "form": "bashirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "safety"
      "built": ["bashir-", "-ush"]
      "concept": "safety"
    - {"form": "qazuk-", "class": "stem", "field": "Everyday speech", "gloss": "danger"}
    - "form": "qazukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "danger"
      "built": ["qazuk-", "-ush"]
      "concept": "danger"
    - {"form": "bashur-", "class": "stem", "field": "Everyday speech", "gloss": "protection"}
    - "form": "bashurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "protection"
      "built": ["bashur-", "-ush"]
      "concept": "protection"
    - {"form": "shazim-", "class": "stem", "field": "Everyday speech", "gloss": "sex"}
    - "form": "shazimush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sex"
      "built": ["shazim-", "-ush"]
      "concept": "sex"
    - {"form": "talir-", "class": "stem", "field": "Everyday speech", "gloss": "conceive a child"}
    - "form": "taliram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "conceive"
      "built": ["talir-", "-am"]
      "concept": "conceive"
    - {"form": "taliz-", "class": "stem", "field": "Everyday speech", "gloss": "pregnancy"}
    - "form": "talizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "pregnancy"
      "built": ["taliz-", "-ush"]
      "concept": "pregnancy"
    - "form": "talizan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "pregnant"
      "built": ["taliz-", "-an"]
      "concept": "pregnant"
    - "form": "talul-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "give birth; a birth"
    - "form": "talulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "birth"
      "built": ["talul-", "-ush"]
      "concept": "birth"
    - "form": "talulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "give birth"
      "built": ["talul-", "-am"]
      "concept": "give-birth"
    - "form": "ramil-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "nurse at the breast"
    - "form": "ramilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to nurse a child; to feed a child at the breast"
      "built": ["ramil-", "-am"]
      "concept": "nurse"
    - "form": "kaluram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to age; to grow older"
      "built": ["kalur-", "-am"]
      "concept": "age-verb"
    - {"form": "nabir-", "class": "stem", "field": "Everyday speech", "gloss": "die; be dead"}
    - "form": "nabirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "death"
      "built": ["nabir-", "-ush"]
      "concept": "death"
    - "form": "nabiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dead"
      "built": ["nabir-", "-an"]
      "concept": "dead"
    - {"form": "bazil-", "class": "stem", "field": "Everyday speech", "gloss": "sick; ill"}
    - "form": "bazilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "sick; ill"
      "built": ["bazil-", "-an"]
      "concept": "sick"
    - {"form": "shamir-", "class": "stem", "field": "Everyday speech", "gloss": "be injured"}
    - "form": "shamiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "injured; wounded"
      "built": ["shamir-", "-an"]
      "concept": "injured"
    - "form": "qadir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "be physically strong"
    - "form": "qadiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Strong"
      "built": ["qadir-", "-an"]
      "concept": "strong"
    - "form": "zu qadiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "weak"
      "concept": "weak"
      "built": ["zu", "qadiran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qazulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "exhausted"
      "built": ["qazul-", "-an"]
      "concept": "exhausted"
    - "form": "paluz-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "full; satisfied after eating or drinking"
    - "form": "paluzan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "full; satisfied after eating or drinking"
      "built": ["paluz-", "-an"]
      "concept": "sated"
    - "form": "saziran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "cold in temperature"
      "built": ["sazir-", "-an"]
      "concept": "cold"
    - {"form": "hamuk-", "class": "stem", "field": "Everyday speech", "gloss": "feverish"}
    - "form": "hamukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "feverish"
      "built": ["hamuk-", "-an"]
      "concept": "feverish"
    - "form": "shamulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["Pain", "to hurt; to experience bodily pain"]
      "built": ["shamul-", "-ush"]
      "concept": ["pain", "hurt-pain"]
    - "form": "shamulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hurt; to cause pain or injury to someone"
      "built": ["shamul-", "-am"]
      "concept": "hurt-verb"
    - {"form": "shamiruk-", "class": "stem", "field": "Everyday speech", "gloss": "ache"}
    - "form": "shamirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "ache"
      "built": ["shamiruk-", "-am"]
      "concept": "ache"
    - {"form": "shamil-", "class": "stem", "field": "Everyday speech", "gloss": "suffer"}
    - "form": "shamilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "suffer"
      "built": ["shamil-", "-am"]
      "concept": "suffer"
    - {"form": "banil-", "class": "stem", "field": "Everyday speech", "gloss": "Bleed"}
    - "form": "banilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "Bleed"
      "built": ["banil-", "-am"]
      "concept": "bleed"
    - {"form": "tamir-", "class": "stem", "field": "Everyday speech", "gloss": "heal"}
    - "form": "tamiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "heal"
      "built": ["tamir-", "-am"]
      "concept": "heal"
    - {"form": "tamur-", "class": "stem", "field": "Everyday speech", "gloss": "recover"}
    - "form": "tamuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "recover"
      "built": ["tamur-", "-am"]
      "concept": "recover"
    - {"form": "neshum-", "class": "stem", "field": "Everyday speech", "gloss": "be able to see"}
    - "form": "neshuman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "blind; unable to see"
      "built": ["neshum-", "-an"]
    - "form": "zu neshuman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "blind; unable to see"
      "concept": "blind"
      "built": ["zu", "neshuman"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "mazik-", "class": "stem", "field": "Everyday speech", "gloss": "be able to hear"}
    - "form": "mazikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "deaf"
      "built": ["mazik-", "-an"]
    - "form": "zu mazikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "deaf"
      "concept": "deaf"
      "built": ["zu", "mazikan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "tazuk-", "class": "stem", "field": "Everyday speech", "gloss": "lame"}
    - "form": "tazukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "lame"
      "built": ["tazuk-", "-an"]
      "concept": "lame"
    - {"form": "nabik-", "class": "stem", "field": "Everyday speech", "gloss": "live; be alive"}
    - "form": "nabikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Alive"
      "built": ["nabik-", "-an"]
      "concept": "alive"
    - {"form": "nuzik-", "class": "stem", "field": "Everyday speech", "gloss": "conscious"}
    - "form": "nuzikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "conscious"
      "built": ["nuzik-", "-an"]
      "concept": "conscious"
    - "form": "zu nuzikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unconscious"
      "concept": "unconscious"
      "built": ["zu", "nuzikan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "qizur-", "class": "stem", "field": "Everyday speech", "gloss": "Young"}
    - "form": "qizuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Young"
      "built": ["qizur-", "-an"]
      "concept": "young"
    - "form": "kaluran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "old in age (a living being)"
      "built": ["kalur-", "-an"]
      "concept": "old"
    - "form": "kalurik-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "aging; growing older"
    - "form": "kalurikan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "aging; growing older"
      "built": ["kalurik-", "-an"]
      "concept": "aging"
    - "form": "lamiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "mother"
      "concept": "mother"
    - "form": "lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "father"
      "concept": "father"
    - "form": "lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "parent"
      "concept": "parent"
      "built": ["lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "child"
      "concept": "child"
    - "form": "qiziru naru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["son", "boy"]
      "concept": ["son", "boy"]
      "built": ["qiziru", "naru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiziru niru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["daughter", "girl"]
      "concept": ["daughter", "girl"]
      "built": ["qiziru", "niru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zamulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "brother"
      "concept": "brother"
    - "form": "zamiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sister"
      "concept": "sister"
    - "form": "lamiru mi lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grandmother"
      "concept": "grandmother"
      "built": ["lamiru", "mi", "lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lamuru mi lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grandfather"
      "concept": "grandfather"
      "built": ["lamuru", "mi", "lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiziru mi qiziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["grandchild", "lineage"]
      "concept": ["grandchild", "lineage"]
      "built": ["qiziru", "mi", "qiziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zamulu mi lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "uncle"
      "concept": "uncle"
      "built": ["zamulu", "mi", "lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zamiru mi lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "aunt"
      "concept": "aunt"
      "built": ["zamiru", "mi", "lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiziru mi zamulu ki zamiru mi lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cousin; a parent’s sibling’s child"
      "concept": "cousin"
      "built": ["qiziru", "mi", "zamulu", "ki", "zamiru", "mi", "lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "taziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "husband"
      "concept": "husband"
    - "form": "tazuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wife"
      "concept": "wife"
    - "form": "lamurim"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ancestor"
      "concept": "ancestor"
    - "form": "qiziru zu lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "orphan"
      "concept": "orphan"
      "built": ["qiziru", "zu", "lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazuru mi nabiran taziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "widow; a wife whose husband has died"
      "concept": "widow"
      "built": ["tazuru", "mi", "nabiran", "taziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lamiru ki lamuru mi lamiru ki lamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grandparent; a parent of a parent"
      "concept": "grandparent"
      "built": ["lamiru", "ki", "lamuru", "mi", "lamiru", "ki", "lamuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiziru naru mi zamulu ki zamiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "nephew"
      "concept": "nephew"
      "built": ["qiziru", "naru", "mi", "zamulu", "ki", "zamiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiziru niru mi zamulu ki zamiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "niece"
      "concept": "niece"
      "built": ["qiziru", "niru", "mi", "zamulu", "ki", "zamiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "taziru ki tazuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "spouse"
      "concept": "spouse"
      "built": ["taziru", "ki", "tazuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qizirum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "kin"
      "concept": "kin"
    - "form": "taziru mi nabiran tazuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "widower; a husband whose wife has died"
      "concept": "widower"
      "built": ["taziru", "mi", "nabiran", "tazuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "gashurum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "enemy"
      "concept": "enemy"
    - "form": "nirum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "stranger"
      "concept": "stranger"
    - "form": "birum be bashuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "neighbor"
      "concept": "neighbor"
      "built": ["birum", "be", "bashuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "balinum be birum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "companion"
      "concept": "companion"
      "built": ["balinum", "be", "birum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "paziruk"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "guest"
      "concept": "guest"
    - "form": "qatirum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "follower"
      "concept": "follower"
    - "form": "gatum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "servant"
      "concept": "servant"
    - "form": "gatirum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "master"
      "concept": "master"
    - "form": "bissirum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "teacher"
      "concept": "teacher"
    - "form": "sadilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["a chair", "seat"]
      "concept": ["chair", "seat"]
    - "form": "tamiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a table"
      "concept": "table"
    - "form": "namulun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a bed"
      "concept": "bed"
    - "form": "bashuru dalu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a floor"
      "concept": "floor"
      "built": ["bashuru", "dalu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bashuru qamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a wall"
      "concept": "wall"
      "built": ["bashuru", "qamu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bashuru tulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a roof"
      "concept": "roof"
      "built": ["bashuru", "tulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fire"
      "concept": "fire"
    - "form": "hamuru be bashuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a hearth"
      "concept": "hearth"
      "built": ["hamuru", "be", "bashuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hadiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a door"
      "concept": "door"
    - "form": "hadiru zattu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a lock"
      "concept": "lock"
      "built": ["hadiru", "zattu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hadiru zattir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a key"
      "concept": "key"
      "built": ["hadiru", "zattir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "neshu be bashuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a window"
      "concept": "window"
      "built": ["neshu", "be", "bashuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "neshu qatt"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shutters"
      "concept": "shutters"
      "built": ["neshu", "qatt"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "salilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a cup"
      "concept": "cup"
    - "form": "palilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a bowl"
      "concept": "bowl"
    - "form": "qipiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a knife"
      "concept": "knife"
    - "form": "palil"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a spoon"
      "concept": "spoon"
    - "form": "paluru qamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a pot"
      "concept": "pot"
      "built": ["paluru", "qamu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru salilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a lamp"
      "concept": "lamp"
      "built": ["hamuru", "salilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["cloth", "garment"]
      "concept": ["cloth", "garment"]
    - "form": "baziru be birum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "clothes"
      "concept": "clothes"
      "built": ["baziru", "be", "birum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bashuru selu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "room"
      "concept": "room"
      "built": ["bashuru", "selu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bashuru tulu selu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ceiling"
      "concept": "ceiling"
      "built": ["bashuru", "tulu", "selu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "sadilu bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bench"
      "concept": "bench"
      "built": ["sadilu", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "salilum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "jar"
      "concept": "jar"
    - "form": "salil"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bottle"
      "concept": "bottle"
    - "form": "qaduru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "basket"
      "concept": "basket"
    - "form": "qaduru lumiz"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bag"
      "concept": "bag"
      "built": ["qaduru", "lumiz"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qadul"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hammer"
      "concept": "hammer"
    - "form": "rusakush khidizan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cord"
      "concept": "cord"
      "built": ["rusakush", "khidizan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qazilu qipiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "needle"
      "concept": "needle"
      "built": ["qazilu", "qipiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru neshu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "flame"
      "concept": "flame"
      "built": ["hamuru", "neshu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru maziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "smoke"
      "concept": "smoke"
      "built": ["hamuru", "maziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru dashiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ash"
      "concept": "ash"
      "built": ["hamuru", "dashiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru baniru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "coal"
      "concept": "coal"
      "built": ["hamuru", "baniru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru rusakush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "torch"
      "concept": "torch"
      "built": ["hamuru", "rusakush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamuru baziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "candle"
      "concept": "candle"
      "built": ["hamuru", "baziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziru ramilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shirt"
      "concept": "shirt"
      "built": ["baziru", "ramilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziru dazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cloak"
      "concept": "cloak"
      "built": ["baziru", "dazilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziru bazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "belt"
      "concept": "belt"
      "built": ["baziru", "bazilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziru mi tazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shoe"
      "concept": "shoe"
      "built": ["baziru", "mi", "tazilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziru mi tazilu bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "boot"
      "concept": "boot"
      "built": ["baziru", "mi", "tazilu", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hadiru bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "gate"
      "concept": "gate"
      "built": ["hadiru", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "barrier"
      "concept": "barrier"
    - "form": "gabilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wood"
      "concept": "wood"
    - "form": "qadiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["stone", "rock"]
      "concept": ["stone", "rock"]
    - "form": "zabiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "metal"
      "concept": "metal"
    - "form": "dashuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "clay"
      "concept": "clay"
    - "form": "shimuru mi nabiran"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "leather"
      "concept": "leather"
      "built": ["shimuru", "mi", "nabiran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziru mi qashir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wool"
      "concept": "wool"
      "built": ["baziru", "mi", "qashir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bazir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thread"
      "concept": "thread"
    - "form": "dabiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "earth"
      "concept": "earth"
    - "form": "dabil"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "soil"
      "concept": "soil"
    - "form": "qadiru khidizan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sand"
      "concept": "sand"
      "built": ["qadiru", "khidizan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dabiru saliran"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "mud"
      "concept": "mud"
      "built": ["dabiru", "saliran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dabiru khidizan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "dust"
      "concept": "dust"
      "built": ["dabiru", "khidizan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dabiru bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "land"
      "concept": "land"
      "built": ["dabiru", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dabaru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "mountain"
      "concept": "mountain"
    - "form": "dabaru khidizan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "hill"
      "concept": "hill"
      "built": ["dabaru", "khidizan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "daziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "valley"
      "concept": "valley"
    - "form": "dabiru lulum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a plain; flat open land"
      "concept": "plain-landform"
      "built": ["dabiru", "lulum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yashiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "forest"
      "concept": "forest"
    - "form": "yashiru baziran"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "field"
      "concept": "field"
      "built": ["yashiru", "baziran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dabiru bashuru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cave"
      "concept": "cave"
      "built": ["dabiru", "bashuru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lamizu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "river"
      "concept": "river"
    - "form": "lamizu khidizan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "stream"
      "concept": "stream"
      "built": ["lamizu", "khidizan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "saliru be dabiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lake"
      "concept": "lake"
      "built": ["saliru", "be", "dabiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mani bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ocean"
      "concept": "ocean"
      "built": ["mani", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mani qamu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "shore"
      "concept": "shore"
      "built": ["mani", "qamu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "raniz-", "class": "stem", "field": "Everyday speech", "gloss": "rain"}
    - "form": "ranizush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "rain"
      "built": ["raniz-", "-ush"]
      "concept": "rain"
    - {"form": "sazul-", "class": "stem", "field": "Everyday speech", "gloss": "snow"}
    - "form": "sazulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "snow"
      "built": ["sazul-", "-ush"]
      "concept": "snow"
    - "form": "sazulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ice"
      "concept": "ice"
    - "form": "tashiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sky"
      "concept": "sky"
    - "form": "hamilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "sun"
      "concept": "sun"
    - "form": "namiru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "moon"
      "concept": "moon"
    - "form": "tashil"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "star"
      "concept": "star"
    - "form": "tashum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "cloud"
      "concept": "cloud"
    - {"form": "gashuruk-", "class": "stem", "field": "Everyday speech", "gloss": "storm"}
    - "form": "gashurukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "storm"
      "built": ["gashuruk-", "-ush"]
      "concept": "storm"
    - {"form": "ranuz-", "class": "stem", "field": "Everyday speech", "gloss": "thunder"}
    - "form": "ranuzush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "thunder"
      "built": ["ranuz-", "-ush"]
      "concept": "thunder"
    - {"form": "ranul-", "class": "stem", "field": "Everyday speech", "gloss": "lightning"}
    - "form": "ranulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "lightning"
      "built": ["ranul-", "-ush"]
      "concept": "lightning"
    - "form": "yashilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "plant"
      "concept": "plant"
    - "form": "yashilu bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "tree"
      "concept": "tree"
      "built": ["yashilu", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yashilu baziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "leaf"
      "concept": "leaf"
      "built": ["yashilu", "baziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yashilu tazilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "root"
      "concept": "root"
      "built": ["yashilu", "tazilu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yashilu qumir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "branch"
      "concept": "branch"
      "built": ["yashilu", "qumir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yashilu milaz"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "flower"
      "concept": "flower"
      "built": ["yashilu", "milaz"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yashilu paluru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fruit"
      "concept": "fruit"
      "built": ["yashilu", "paluru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yashilu qiziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "seed"
      "concept": "seed"
      "built": ["yashilu", "qiziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dabiru qashir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "grass"
      "concept": "grass"
      "built": ["dabiru", "qashir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baliru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "animal"
      "concept": "animal"
    - "form": "baliru bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "beast"
      "concept": "beast"
      "built": ["baliru", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bashilu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "bird"
      "concept": "bird"
    - "form": "bashil"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "fish"
      "concept": "fish"
    - "form": "bashim"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "insect"
      "concept": "insect"
    - "form": "dashil"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "worm"
      "concept": "worm"
    - {"form": "salir-", "class": "stem", "field": "Everyday speech", "gloss": "wet"}
    - "form": "saliran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "wet"
      "built": ["salir-", "-an"]
      "concept": "wet"
    - "form": "zu saliran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dry"
      "concept": "dry"
      "built": ["zu", "saliran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "nishur-", "class": "stem", "field": "Everyday speech", "gloss": "be bright; shine"}
    - "form": "nishuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "bright"
      "built": ["nishur-", "-an"]
      "concept": "bright"
    - "form": "gashum-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "be dark; be black"
    - "form": "gashuman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["dark", "black"]
      "built": ["gashum-", "-an"]
      "concept": ["dark", "black"]
    - "form": "tashil-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "clear weather; without clouds"
    - "form": "tashilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "clear weather; without clouds"
      "built": ["tashil-", "-an"]
      "concept": "clear-weather"
    - {"form": "tashum-", "class": "stem", "field": "Everyday speech", "gloss": "cloudy"}
    - "form": "tashuman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "cloudy"
      "built": ["tashum-", "-an"]
      "concept": "cloudy"
    - "form": "nashur"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "north"
      "concept": "north"
    - "form": "sashur"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "south"
      "concept": "south"
    - "form": "hamilu namiram"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["east", "dawn"]
      "concept": ["east", "dawn"]
      "built": ["hamilu", "namiram"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamilu namulam"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["west", "dusk"]
      "concept": ["west", "dusk"]
      "built": ["hamilu", "namulam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "niz", "class": "num", "field": "Everyday speech", "gloss": "six", "concept": "six"}
    - "form": "nuz"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "seven"
      "concept": "seven"
    - "form": "vaz"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "eight"
      "concept": "eight"
    - "form": "vuz"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "nine"
      "concept": "nine"
    - "form": "yet lel"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "twenty"
      "concept": "twenty"
      "built": ["yet", "lel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yatar"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "a hundred"
      "concept": "hundred"
    - "form": "yatum"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "a thousand"
      "concept": "thousand"
    - "form": "yez sir"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "first in ordinal position"
      "concept": "first"
      "built": ["yez", "sir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lel sir"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "second"
      "concept": "second"
      "built": ["lel", "sir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zem sir"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "third"
      "concept": "third"
      "built": ["zem", "sir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lel paz"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "half"
      "concept": "half"
      "built": ["lel", "paz"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bamar"
      "class": "num"
      "field": "Everyday speech"
      "gloss": ["many", "much"]
      "concept": ["many", "much"]
    - "form": "qimar"
      "class": "num"
      "field": "Everyday speech"
      "gloss": ["few", "little"]
      "concept": ["few", "little-quantity"]
    - "form": "zu yez"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "none; nothing"
      "concept": "none"
      "built": ["zu", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zesh"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "zero"
      "concept": "zero"
    - "form": "yet sir"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "tenth; any cardinal followed by sir gives its ordinal position"
      "concept": "ordinal-construction"
      "built": ["yet", "sir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "vub paz"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "quarter"
      "concept": "quarter"
      "built": ["vub", "paz"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bash"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "all"
      "concept": "all"
    - "form": "besh"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "some"
      "concept": "some"
    - "form": "qadar"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "enough"
      "concept": "enough"
    - "form": "bamar vish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "more"
      "concept": "more"
      "built": ["bamar", "vish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qimar vish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "less"
      "concept": "less"
      "built": ["qimar", "vish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bamar bash"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "most"
      "concept": "most"
      "built": ["bamar", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qimar bash"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "least"
      "concept": "least"
      "built": ["qimar", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qel"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "equal; the same in amount or the stated quality"
      "concept": "equal"
    - "form": "yez bash"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "each"
      "concept": "each"
      "built": ["yez", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bash yez"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "every"
      "concept": "every"
      "built": ["bash", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lel bash"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "both"
      "concept": "both"
      "built": ["lel", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yez ur lel"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "either"
      "concept": "either"
      "built": ["yez", "ur", "lel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu yez ur lel"
      "class": "num"
      "field": "Everyday speech"
      "gloss": "neither"
      "concept": "neither"
      "built": ["zu", "yez", "ur", "lel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qel sish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["about", "similar"]
      "concept": ["about", "similar"]
      "built": ["qel", "sish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qadar sish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "almost"
      "concept": "almost"
      "built": ["qadar", "sish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qel temadan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "exactly"
      "concept": "exactly"
      "built": ["qel", "temadan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ashurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "amount"
      "concept": "amount"
    - "form": "salim-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "be white; approach white"
    - "form": "saliman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "white"
      "built": ["salim-", "-an"]
      "concept": "white"
    - {"form": "barul-", "class": "stem", "field": "Everyday speech", "gloss": "red"}
    - "form": "barulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "red"
      "built": ["barul-", "-an"]
      "concept": "red"
    - {"form": "yashil-", "class": "stem", "field": "Everyday speech", "gloss": "green"}
    - "form": "yashilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "green"
      "built": ["yashil-", "-an"]
      "concept": "green"
    - {"form": "hamil-", "class": "stem", "field": "Everyday speech", "gloss": "yellow"}
    - "form": "hamilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "yellow"
      "built": ["hamil-", "-an"]
      "concept": "yellow"
    - {"form": "lamiz-", "class": "stem", "field": "Everyday speech", "gloss": "blue"}
    - "form": "lamizan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "blue"
      "built": ["lamiz-", "-an"]
      "concept": "blue"
    - "form": "gashilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "grey"
      "built": ["gashil-", "-an"]
      "concept": "grey"
    - {"form": "dabil-", "class": "stem", "field": "Everyday speech", "gloss": "brown"}
    - "form": "dabilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "brown"
      "built": ["dabil-", "-an"]
      "concept": "brown"
    - "form": "saliman sish"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "light in colour"
      "concept": "light-colour"
      "built": ["saliman", "sish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "salil-", "class": "stem", "field": "Everyday speech", "gloss": "pale"}
    - "form": "salilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "pale"
      "built": ["salil-", "-an"]
      "concept": "pale"
    - "form": "neshil-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "clear in appearance"
    - "form": "neshilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "clear in appearance"
      "built": ["neshil-", "-an"]
      "concept": "clear-appearance"
    - "form": "neshiruk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "opaque; not permitting sight through it"
    - "form": "neshirukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["opaque; not permitting sight through it", "transparent"]
      "built": ["neshiruk-", "-an"]
      "concept": "transparent"
    - "form": "zu neshirukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "opaque; not permitting sight through it"
      "concept": "opaque"
      "built": ["zu", "neshirukan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "nishul-", "class": "stem", "field": "Everyday speech", "gloss": "shiny"}
    - "form": "nishulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "shiny"
      "built": ["nishul-", "-an"]
      "concept": "shiny"
    - "form": "zu nishulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dull"
      "concept": "dull-appearance"
      "built": ["zu", "nishulan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bazir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "cover with cloth; clothe"
    - "form": "baziran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "plain; without a pattern"
      "built": ["bazir-", "-an"]
      "concept": "plain-pattern"
    - {"form": "qadiluk-", "class": "stem", "field": "Everyday speech", "gloss": "spotted"}
    - "form": "qadilukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "spotted"
      "built": ["qadiluk-", "-an"]
      "concept": "spotted"
    - "form": "rusakan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "striped"
      "built": ["rusak-", "-an"]
      "concept": "striped"
    - {"form": "bur-", "class": "stem", "field": "Everyday speech", "gloss": "to be"}
    - "form": "buram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": ["to be", "to exist"]
      "built": ["bur-", "-am"]
      "concept": ["be", "exist"]
    - {"form": "kadul-", "class": "stem", "field": "Everyday speech", "gloss": "to have"}
    - "form": "kadulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to have"
      "built": ["kadul-", "-am"]
      "concept": "have"
    - {"form": "nazul-", "class": "stem", "field": "Everyday speech", "gloss": "to go"}
    - "form": "nazulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to go"
      "built": ["nazul-", "-am"]
      "concept": "go"
    - {"form": "hizir-", "class": "stem", "field": "Everyday speech", "gloss": "to give"}
    - "form": "hiziram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to give"
      "built": ["hizir-", "-am"]
      "concept": "give"
    - {"form": "kamal-", "class": "stem", "field": "Everyday speech", "gloss": "to make"}
    - "form": "kamalam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to make"
      "built": ["kamal-", "-am"]
      "concept": "make"
    - {"form": "dagir-", "class": "stem", "field": "Everyday speech", "gloss": "to do"}
    - "form": "dagiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to do"
      "built": ["dagir-", "-am"]
      "concept": "do"
    - {"form": "qaziruk-", "class": "stem", "field": "Everyday speech", "gloss": "to know"}
    - "form": "qazirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to know"
      "built": ["qaziruk-", "-am"]
      "concept": "know"
    - {"form": "nadir-", "class": "stem", "field": "Everyday speech", "gloss": "to think"}
    - "form": "nadiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to think"
      "built": ["nadir-", "-am"]
      "concept": "think"
    - "form": "yazimam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to want"
      "built": ["yazim-", "-am"]
      "concept": "want"
    - "form": "nabikam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to live"
      "built": ["nabik-", "-am"]
      "concept": "live"
    - "form": "nabiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to die"
      "built": ["nabir-", "-am"]
      "concept": "die"
    - {"form": "tazil-", "class": "stem", "field": "Everyday speech", "gloss": "to walk"}
    - "form": "tazilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to walk"
      "built": ["tazil-", "-am"]
      "concept": "walk"
    - "form": "zupumam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to run"
      "built": ["zupum-", "-am"]
      "concept": "run"
    - {"form": "sadil-", "class": "stem", "field": "Everyday speech", "gloss": "to sit"}
    - "form": "sadilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sit"
      "built": ["sadil-", "-am"]
      "concept": "sit"
    - "form": "qadur-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "stand upright; take a standing position"
    - "form": "qaduram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to stand"
      "built": ["qadur-", "-am"]
      "concept": "stand"
    - {"form": "namal-", "class": "stem", "field": "Everyday speech", "gloss": "to lie down"}
    - "form": "namalam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lie down"
      "built": ["namal-", "-am"]
      "concept": "lie-down"
    - "form": "qatam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hold"
      "built": ["qat-", "-am"]
      "concept": "hold"
    - {"form": "kudul-", "class": "stem", "field": "Everyday speech", "gloss": "to bring"}
    - "form": "kudulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to bring"
      "built": ["kudul-", "-am"]
      "concept": "bring"
    - {"form": "padir-", "class": "stem", "field": "Everyday speech", "gloss": "to put"}
    - "form": "padiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to put"
      "built": ["padir-", "-am"]
      "concept": "put"
    - "form": "nashum-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "find what was sought"
    - "form": "nashumam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to find"
      "built": ["nashum-", "-am"]
      "concept": "find"
    - "form": "munar-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "lose; misplace something or cease to have it"
    - "form": "munaram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "lose; misplace something or cease to have it"
      "built": ["munar-", "-am"]
      "concept": "lose"
    - "form": "hadir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "open; enter through an opening"
    - "form": "hadiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to open"
      "built": ["hadir-", "-am"]
      "concept": "open"
    - {"form": "hadur-", "class": "stem", "field": "Everyday speech", "gloss": "close an opening"}
    - "form": "haduram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to close"
      "built": ["hadur-", "-am"]
      "concept": "close"
    - {"form": "kabar-", "class": "stem", "field": "Everyday speech", "gloss": "to begin"}
    - "form": "kabaram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to begin"
      "built": ["kabar-", "-am"]
      "concept": "begin"
    - {"form": "badur-", "class": "stem", "field": "Everyday speech", "gloss": "to end"}
    - "form": "baduram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to end"
      "built": ["badur-", "-am"]
      "concept": "end"
    - "form": "kadulam mi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to belong"
      "concept": "belong"
      "built": ["kadulam", "mi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "badir-", "class": "stem", "field": "Everyday speech", "gloss": "become"}
    - "form": "badiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to become"
      "built": ["badir-", "-am"]
      "concept": "become"
    - "form": "qatam be"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to remain"
      "concept": "remain"
      "built": ["qatam", "be"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nazulam mi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": ["to leave", "to exit"]
      "concept": ["leave", "exit"]
      "built": ["nazulam", "mi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "tazal-", "class": "stem", "field": "Everyday speech", "gloss": "to crawl"}
    - "form": "tazalam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to crawl"
      "built": ["tazal-", "-am"]
      "concept": "crawl"
    - {"form": "taziruk-", "class": "stem", "field": "Everyday speech", "gloss": "to climb"}
    - "form": "tazirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to climb"
      "built": ["taziruk-", "-am"]
      "concept": "climb"
    - {"form": "tazul-", "class": "stem", "field": "Everyday speech", "gloss": "to jump"}
    - "form": "tazulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to jump"
      "built": ["tazul-", "-am"]
      "concept": "jump"
    - {"form": "tazuruk-", "class": "stem", "field": "Everyday speech", "gloss": "to fall"}
    - "form": "tazurukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to fall"
      "built": ["tazuruk-", "-am"]
      "concept": "fall"
    - "form": "qaduram tulu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to rise"
      "concept": "rise"
      "built": ["qaduram", "tulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hadiram be"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to enter"
      "concept": "enter"
      "built": ["hadiram", "be"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kudumam ral"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to return"
      "concept": "return"
      "built": ["kudumam", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qatiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to follow"
      "built": ["qatir-", "-am"]
      "concept": "follow"
    - "form": "dirabam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lead"
      "built": ["dirab-", "-am"]
      "concept": "lead"
    - {"form": "badal-", "class": "stem", "field": "Everyday speech", "gloss": "to move"}
    - "form": "badalam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to move"
      "built": ["badal-", "-am"]
      "concept": "move"
    - "form": "sharram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to pull"
      "built": ["sharr-", "-am"]
      "concept": "pull"
    - {"form": "qadal-", "class": "stem", "field": "Everyday speech", "gloss": "to lift"}
    - "form": "qadalam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lift"
      "built": ["qadal-", "-am"]
      "concept": "lift"
    - {"form": "padur-", "class": "stem", "field": "Everyday speech", "gloss": "to drop"}
    - "form": "paduram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to drop"
      "built": ["padur-", "-am"]
      "concept": "drop"
    - {"form": "tadir-", "class": "stem", "field": "Everyday speech", "gloss": "to throw"}
    - "form": "tadiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to throw"
      "built": ["tadir-", "-am"]
      "concept": "throw"
    - {"form": "tadul-", "class": "stem", "field": "Everyday speech", "gloss": "to catch"}
    - "form": "tadulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to catch"
      "built": ["tadul-", "-am"]
      "concept": "catch"
    - {"form": "bashar-", "class": "stem", "field": "Everyday speech", "gloss": "to build"}
    - "form": "basharam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to build"
      "built": ["bashar-", "-am"]
      "concept": "build"
    - "form": "kamalam naban"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to create"
      "concept": "create"
      "built": ["kamalam", "naban"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "qattir-", "class": "stem", "field": "Everyday speech", "gloss": "to break"}
    - "form": "qattiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to break"
      "built": ["qattir-", "-am"]
      "concept": "break"
    - {"form": "qattur-", "class": "stem", "field": "Everyday speech", "gloss": "to destroy"}
    - "form": "qatturam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to destroy"
      "built": ["qattur-", "-am"]
      "concept": "destroy"
    - "form": "temadam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to repair"
      "built": ["temad-", "-am"]
      "concept": "repair"
    - "form": "badiruk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "change; transform"
    - "form": "badirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to change"
      "built": ["badiruk-", "-am"]
      "concept": "change-verb"
    - "form": "jiramam so"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to tell"
      "concept": "tell"
      "built": ["jiramam", "so"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "nazir-", "class": "stem", "field": "Everyday speech", "gloss": "to ask"}
    - "form": "naziram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to ask"
      "built": ["nazir-", "-am"]
      "concept": "ask"
    - {"form": "jazir-", "class": "stem", "field": "Everyday speech", "gloss": "to answer"}
    - "form": "jaziram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to answer"
      "built": ["jazir-", "-am"]
      "concept": "answer"
    - {"form": "qalam-", "class": "stem", "field": "Everyday speech", "gloss": "to call"}
    - "form": "qalamam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to call"
      "built": ["qalam-", "-am"]
      "concept": "call"
    - "form": "ramuzam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to shout"
      "built": ["ramuz-", "-am"]
      "concept": "shout"
    - "form": "sulimam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to whisper"
      "built": ["sulim-", "-am"]
      "concept": "whisper"
    - {"form": "nashil-", "class": "stem", "field": "Everyday speech", "gloss": "to explain"}
    - "form": "nashilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to explain"
      "built": ["nashil-", "-am"]
      "concept": "explain"
    - {"form": "nukal-", "class": "stem", "field": "Everyday speech", "gloss": "to name"}
    - "form": "nukalam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to name"
      "built": ["nukal-", "-am"]
      "concept": "name-verb"
    - "form": "zamilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to believe"
      "built": ["zamil-", "-am"]
      "concept": "believe"
    - {"form": "nashim-", "class": "stem", "field": "Everyday speech", "gloss": "to understand"}
    - "form": "nashimam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to understand"
      "built": ["nashim-", "-am"]
      "concept": "understand"
    - {"form": "qazish-", "class": "stem", "field": "Everyday speech", "gloss": "to remember"}
    - "form": "qazisham"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to remember"
      "built": ["qazish-", "-am"]
      "concept": "remember"
    - {"form": "nadiruk-", "class": "stem", "field": "Everyday speech", "gloss": "to forget"}
    - "form": "nadirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to forget"
      "built": ["nadiruk-", "-am"]
      "concept": "forget"
    - "form": "bissam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to learn"
      "built": ["biss-", "-am"]
      "concept": "learn"
    - {"form": "bissir-", "class": "stem", "field": "Everyday speech", "gloss": "to teach"}
    - "form": "bissiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to teach"
      "built": ["bissir-", "-am"]
      "concept": "teach"
    - {"form": "qadiruk-", "class": "stem", "field": "Everyday speech", "gloss": "to decide"}
    - "form": "qadirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to decide"
      "built": ["qadiruk-", "-am"]
      "concept": "decide"
    - "form": "namizam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to imagine"
      "built": ["namiz-", "-am"]
      "concept": "imagine"
    - {"form": "yazuruk-", "class": "stem", "field": "Everyday speech", "gloss": "need something"}
    - "form": "yazurukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to need"
      "built": ["yazuruk-", "-am"]
      "concept": "need-verb"
    - "form": "yazilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to wish"
      "built": ["yazil-", "-am"]
      "concept": "wish-verb"
    - "form": "yazuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hope"
      "built": ["yazur-", "-am"]
      "concept": "hope-verb"
    - "form": "yazulam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to intend"
      "built": ["yazul-", "-am"]
      "concept": "intend"
    - "form": "qizir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "choose; be optional"
    - "form": "qiziram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to choose"
      "built": ["qizir-", "-am"]
      "concept": "choose"
    - "form": "yazimam vish"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to prefer"
      "concept": "prefer"
      "built": ["yazimam", "vish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "qamur-", "class": "stem", "field": "Everyday speech", "gloss": "to try"}
    - "form": "qamuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to try"
      "built": ["qamur-", "-am"]
      "concept": "try"
    - {"form": "nashuruk-", "class": "stem", "field": "Everyday speech", "gloss": "to search"}
    - "form": "nashurukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to search"
      "built": ["nashuruk-", "-am"]
      "concept": "search"
    - {"form": "baliruk-", "class": "stem", "field": "Everyday speech", "gloss": "to meet"}
    - "form": "balirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to meet"
      "built": ["baliruk-", "-am"]
      "concept": "meet"
    - "form": "rashilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to help"
      "built": ["rashil-", "-am"]
      "concept": "help"
    - "form": "balinam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to share"
      "built": ["balin-", "-am"]
      "concept": "share"
    - "form": "mardam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to trade"
      "built": ["mard-", "-am"]
      "concept": "trade"
    - "form": "mardam geniram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to buy"
      "concept": "buy"
      "built": ["mardam", "geniram"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mardam hiziram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to sell"
      "concept": "sell"
      "built": ["mardam", "hiziram"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazimam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to thank"
      "built": ["tazim-", "-am"]
      "concept": "thank-verb"
    - "form": "mushiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to forgive"
      "built": ["mushir-", "-am"]
      "concept": "forgive-verb"
    - {"form": "niburuk-", "class": "stem", "field": "Everyday speech", "gloss": "to refuse"}
    - "form": "niburukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to refuse"
      "built": ["niburuk-", "-am"]
      "concept": "refuse-verb"
    - "form": "qel-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "be equal; match a standard"
    - "form": "qelam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to agree"
      "built": ["qel-", "-am"]
      "concept": "agree-verb"
    - {"form": "gadir-", "class": "stem", "field": "Everyday speech", "gloss": "to fight"}
    - "form": "gadiram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to fight"
      "built": ["gadir-", "-am"]
      "concept": "fight"
    - {"form": "gatt-", "class": "stem", "field": "Everyday speech", "gloss": "to hit"}
    - "form": "gattam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hit"
      "built": ["gatt-", "-am"]
      "concept": "hit"
    - {"form": "nabur-", "class": "stem", "field": "Everyday speech", "gloss": "to kill"}
    - "form": "naburam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to kill"
      "built": ["nabur-", "-am"]
      "concept": "kill"
    - "form": "bashuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to defend"
      "built": ["bashur-", "-am"]
      "concept": "defend"
    - "form": "gashuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to attack"
      "built": ["gashur-", "-am"]
      "concept": "attack"
    - {"form": "nazuk-", "class": "stem", "field": "Everyday speech", "gloss": "to flee"}
    - "form": "nazukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to flee"
      "built": ["nazuk-", "-am"]
      "concept": "flee"
    - "form": "tazukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to threaten"
      "built": ["tazuk-", "-am"]
      "concept": "threaten"
    - {"form": "qatur-", "class": "stem", "field": "Everyday speech", "gloss": "to stop"}
    - "form": "qaturam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to stop"
      "built": ["qatur-", "-am"]
      "concept": "stop"
    - {"form": "qatiruk-", "class": "stem", "field": "Everyday speech", "gloss": "to continue"}
    - "form": "qatirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to continue"
      "built": ["qatiruk-", "-am"]
      "concept": "continue"
    - {"form": "sadiruk-", "class": "stem", "field": "Everyday speech", "gloss": "to wait"}
    - "form": "sadirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to wait"
      "built": ["sadiruk-", "-am"]
      "concept": "wait"
    - {"form": "dabar-", "class": "stem", "field": "Everyday speech", "gloss": "to happen"}
    - "form": "dabaram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to happen"
      "built": ["dabar-", "-am"]
      "concept": "happen"
    - "form": "tazilam dalu"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to kneel"
      "concept": "kneel"
      "built": ["tazilam", "dalu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "badil-", "class": "stem", "field": "Everyday speech", "gloss": "to bend"}
    - "form": "badilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to bend"
      "built": ["badil-", "-am"]
      "concept": "bend"
    - "form": "badalam so"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to lean"
      "concept": "lean"
      "built": ["badalam", "so"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baziram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to cover"
      "built": ["bazir-", "-am"]
      "concept": "cover-verb"
    - "form": "bazuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to uncover"
      "built": ["bazur-", "-am"]
      "concept": "uncover"
    - "form": "hitusam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to hide"
      "built": ["hitus-", "-am"]
      "concept": "hide"
    - "form": "nashiruk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "reveal something hidden"
    - "form": "nashirukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to reveal"
      "built": ["nashiruk-", "-am"]
      "concept": "reveal"
    - "form": "zattur-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "release a fastening"
    - "form": "zatturam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "to unlock"
      "built": ["zattur-", "-am"]
      "concept": "unlock"
    - "form": "shiu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Here"
      "concept": "here"
    - "form": "shia"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "there"
      "concept": "there"
    - "form": "be besh"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["somewhere", "somewhat"]
      "concept": ["somewhere", "somewhat"]
      "built": ["be", "besh"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu shiu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "nowhere"
      "concept": "nowhere"
      "built": ["zu", "shiu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be bash"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "everywhere"
      "concept": "everywhere"
      "built": ["be", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qamir"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Near"
      "concept": "near"
    - "form": "qamar"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "far"
      "concept": "far"
    - "form": "be qamu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "beside"
      "concept": "beside"
      "built": ["be", "qamu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be lel"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "between"
      "concept": "between"
      "built": ["be", "lel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be selu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "among"
      "concept": "among"
      "built": ["be", "selu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tulu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Above"
      "concept": "above"
    - "form": "dalu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "below"
      "concept": "below"
    - "form": "be dalu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "under"
      "concept": "under"
      "built": ["be", "dalu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be tulu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["over", "on"]
      "concept": ["over", "on"]
      "built": ["be", "tulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "selu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Inside"
      "concept": "inside"
    - "form": "salu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "outside"
      "concept": "outside"
    - "form": "salu qamu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "beyond"
      "concept": "beyond"
      "built": ["salu", "qamu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "taru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "before; in front of (spatial)"
      "concept": "before-spatial"
    - "form": "daru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "behind"
      "concept": "behind"
    - "form": "lamul"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "left (direction)"
      "concept": "left-direction"
    - "form": "ramul"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "right (direction)"
      "concept": "right-direction"
    - "form": "qamil"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "center"
      "concept": "center"
    - "form": "so tulu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "Up"
      "concept": "up"
      "built": ["so", "tulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so dalu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "down"
      "concept": "down"
      "built": ["so", "dalu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so taru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "forward"
      "concept": "forward"
      "built": ["so", "taru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so daru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "backward"
      "concept": "backward"
      "built": ["so", "daru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi salu"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "away"
      "concept": "away"
      "built": ["mi", "salu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be selu so"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "through"
      "concept": "through"
      "built": ["be", "selu", "so"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi qamu so"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "across"
      "concept": "across"
      "built": ["mi", "qamu", "so"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be qamu ral"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "around"
      "concept": "around"
      "built": ["be", "qamu", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bashirun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a place; a location"
      "concept": "place-noun"
    - "form": "bashirul"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "position"
      "concept": "position"
    - "form": "nazulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "direction"
      "concept": "direction"
    - "form": "ashurush mi nazulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "distance"
      "concept": "distance"
      "built": ["ashurush", "mi", "nazulush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "time"
      "concept": "time"
    - "form": "lazir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "moment"
      "concept": "moment"
    - "form": "hamulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "day"
      "concept": "day"
    - "form": "namulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "night"
      "concept": "night"
    - "form": "hamulu taru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "morning"
      "concept": "morning"
      "built": ["hamulu", "taru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamulu tulu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "noon"
      "concept": "noon"
      "built": ["hamulu", "tulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamulu daru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "evening"
      "concept": "evening"
      "built": ["hamulu", "daru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "namulu selu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "midnight"
      "concept": "midnight"
      "built": ["namulu", "selu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lazi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "now"
      "concept": "now"
    - "form": "laza"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "then"
      "concept": "then"
    - "form": "hamulu lazi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "today"
      "concept": "today"
      "built": ["hamulu", "lazi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamulu ral"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "yesterday"
      "concept": "yesterday"
      "built": ["hamulu", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hamulu rad"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "tomorrow"
      "concept": "tomorrow"
      "built": ["hamulu", "rad"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru ral"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "past"
      "concept": "past"
      "built": ["laziru", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru lazi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "present"
      "concept": "present"
      "built": ["laziru", "lazi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru rad"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "future"
      "concept": "future"
      "built": ["laziru", "rad"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ral"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": ["before (temporal)", "again"]
      "concept": ["before-time", "again"]
    - "form": "rad"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "after"
      "concept": "after"
    - "form": "be laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "during"
      "concept": "during"
      "built": ["be", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qel laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "while"
      "concept": "while"
      "built": ["qel", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "until"
      "concept": "until"
      "built": ["so", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "since a time"
      "concept": "since-time"
      "built": ["mi", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be bash laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "always"
      "concept": "always"
      "built": ["be", "bash", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bamar laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "often"
      "concept": "often"
      "built": ["bamar", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "besh laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "sometimes"
      "concept": "sometimes"
      "built": ["besh", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qimar laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "rarely"
      "concept": "rarely"
      "built": ["qimar", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu laziru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "never"
      "concept": "never"
      "built": ["zu", "laziru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru bibudan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "lasting a long time"
      "concept": "long-duration"
      "built": ["laziru", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru khidizan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "lasting a short time"
      "concept": "short-duration"
      "built": ["laziru", "khidizan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru khidizan sish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "brief in duration"
      "concept": "brief-duration"
      "built": ["laziru", "khidizan", "sish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru qatan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "lasting; continuing for a sustained time"
      "concept": "lasting-duration"
      "built": ["laziru", "qatan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ral yez"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "once"
      "concept": "once"
      "built": ["ral", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ral lel"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "twice"
      "concept": "twice"
      "built": ["ral", "lel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ral bamar"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "repeatedly"
      "concept": "repeatedly"
      "built": ["ral", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "radum"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "already"
      "concept": "already"
    - "form": "qatan lazi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "still"
      "concept": "still"
      "built": ["qatan", "lazi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so lazi"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "yet"
      "concept": "yet"
      "built": ["so", "lazi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru qamir"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "soon"
      "concept": "soon"
      "built": ["laziru", "qamir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru daru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "later"
      "concept": "later"
      "built": ["laziru", "daru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru taru"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "early"
      "concept": "early"
      "built": ["laziru", "taru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru daru bamar"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "late"
      "concept": "late"
      "built": ["laziru", "daru", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru yez"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "first; before the other events in a sequence"
      "concept": "first-sequence"
      "built": ["laziru", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru lel"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "next"
      "concept": "next"
      "built": ["laziru", "lel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "baduran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "last"
      "built": ["badur-", "-an"]
    - "form": "laziru baduran"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "last"
      "concept": "last"
      "built": ["laziru", "baduran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "laziru temadan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "finally"
      "concept": "finally"
      "built": ["laziru", "temadan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "raniru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "season"
      "concept": "season"
    - "form": "raniru bash"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "year"
      "concept": "year"
      "built": ["raniru", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "namiru ral"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "month"
      "concept": "month"
      "built": ["namiru", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizum"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "I; me (the speaker)"
      "concept": "i"
    - "form": "mi nizum"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "my; mine (possession by the speaker)"
      "concept": "my"
      "built": ["mi", "nizum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizim"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "you (person addressed; number as the language permits)"
      "concept": "you-reference"
    - "form": "mi nizim"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "your; yours (possession by the addressee)"
      "concept": "your"
      "built": ["mi", "nizim"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizir"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "He"
      "concept": "he"
    - "form": "nizir niru"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "she"
      "concept": "she"
      "built": ["nizir", "niru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "nizu", "class": "pron", "field": "Everyday speech", "gloss": "it", "concept": "it"}
    - "form": "nizir bash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "they"
      "concept": "they"
      "built": ["nizir", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizum bash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "we; us (the speaker and others)"
      "concept": "we"
      "built": ["nizum", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi nizum bash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "our; ours (possession by the speaker and others)"
      "concept": "our"
      "built": ["mi", "nizum", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ju bash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "these"
      "concept": "these"
      "built": ["ju", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ji bash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "those"
      "concept": "those"
      "built": ["ji", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "birum besh"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "Someone"
      "concept": "someone"
      "built": ["birum", "besh"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "birum ur"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "anyone"
      "concept": "anyone"
      "built": ["birum", "ur"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "birum bash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": ["everyone", "people"]
      "concept": ["everyone", "people"]
      "built": ["birum", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu birum"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "no one"
      "concept": "no-one"
      "built": ["zu", "birum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "balu besh"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "Something"
      "concept": "something"
      "built": ["balu", "besh"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "balu ur"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "anything"
      "concept": "anything"
      "built": ["balu", "ur"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "balu bash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "everything"
      "concept": "everything"
      "built": ["balu", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizash"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "self; oneself (reflexive reference)"
      "concept": "self"
    - "form": "bar"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "other"
      "concept": "other"
    - "form": "bar yez"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "another"
      "concept": "another"
      "built": ["bar", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizu qel"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "Same"
      "concept": "same"
      "built": ["nizu", "qel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu qel"
      "class": "pron"
      "field": "Everyday speech"
      "gloss": "different"
      "concept": "different"
      "built": ["zu", "qel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shirum"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Who (question)"
      "concept": "question-who"
    - "form": "shiru"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "What (question)"
      "concept": "question-what"
    - "form": "shiqel"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Which (question)"
      "concept": "question-which"
    - "form": "shibe"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Where (question)"
      "concept": "question-where"
    - "form": "shilaz"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "When (question)"
      "concept": "question-when"
    - "form": "shizam"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Why (question)"
      "concept": "question-why"
    - "form": "shikam"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "How (question)"
      "concept": "question-how"
    - "form": "shiraz"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "How many (question)"
      "concept": "question-how-many"
    - "form": "shiash"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "How much (question)"
      "concept": "question-how-much"
    - "form": "mi shirum"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Whose (question)"
      "concept": "question-whose"
      "built": ["mi", "shirum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so shirum"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "To whom (question)"
      "concept": "question-to-whom"
      "built": ["so", "shirum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi shibe"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "From where (question)"
      "concept": "question-from-where"
      "built": ["mi", "shibe"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so shizam"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "For what purpose (question)"
      "concept": "question-for-what-purpose"
      "built": ["so", "shizam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shi"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "a final particle requesting a yes/no answer"
      "concept": "question-polar"
    - "form": "shi ral"
      "class": "call"
      "field": "Everyday speech"
      "gloss": ["Pardon?; repeat or clarify that, literally a question again", "Pardon"]
      "concept": ["question-clarification", "expression-pardon"]
      "built": ["shi", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hiz"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Yes"
      "concept": "yes"
    - {"form": "zuz", "class": "part", "field": "Everyday speech", "gloss": "no", "concept": "no"}
    - "form": "qazil-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "be true; correspond to reality"
    - "form": "qazilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "True"
      "built": ["qazil-", "-an"]
      "concept": "true"
    - "form": "zu qazilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "false"
      "concept": "false"
      "built": ["zu", "qazilan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qazilush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "truth; agreement with what is real"
      "built": ["qazil-", "-ush"]
      "concept": "truth"
    - "form": "gashiruk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "be bad; intentionally deceive in a statement"
    - "form": "gashirukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": ["a lie; an intentionally deceptive statement", "bad"]
      "built": ["gashiruk-", "-an"]
      "concept": "bad"
    - "form": "jiramush gashirukan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a lie; an intentionally deceptive statement"
      "concept": "lie-noun"
      "built": ["jiramush", "gashirukan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qazilush temadan"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "really; truly; genuinely; de veras (asserting sincerity or reality)"
      "concept": "sincerity"
      "built": ["qazilush", "temadan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hiz bamar"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Indeed"
      "concept": "indeed"
      "built": ["hiz", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qazirush temadan"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "certainly"
      "concept": "certainly"
      "built": ["qazirush", "temadan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiz"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Perhaps"
      "concept": "perhaps"
    - "form": "qiz bamar"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Probably"
      "concept": "probably"
      "built": ["qiz", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qiz qimar"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "unlikely"
      "concept": "unlikely"
      "built": ["qiz", "qimar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qaziran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Sure"
      "built": ["qazir-", "-an"]
      "concept": "certain"
    - "form": "zu qaziran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "uncertain"
      "concept": "uncertain"
      "built": ["zu", "qaziran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi neshush"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Apparently"
      "concept": "apparently"
      "built": ["mi", "neshush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi birum"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "supposedly"
      "concept": "supposedly"
      "built": ["mi", "birum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be qazilush"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Actually"
      "concept": "in-fact"
      "built": ["be", "qazilush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nuzilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "doubt"
      "built": ["nuzil-", "-am"]
      "concept": "doubt-verb"
    - "form": "nuzuram"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "suspect"
      "built": ["nuzur-", "-am"]
      "concept": "suspect"
    - {"form": "nadil-", "class": "stem", "field": "Everyday speech", "gloss": "guess"}
    - "form": "nadilam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "guess"
      "built": ["nadil-", "-am"]
      "concept": "guess-verb"
    - "form": "nadiram mi"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "assume"
      "concept": "assume-verb"
      "built": ["nadiram", "mi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qelan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Correct"
      "built": ["qel-", "-an"]
      "concept": "correct"
    - "form": "zu qelan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "incorrect"
      "concept": "incorrect"
      "built": ["zu", "qelan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu qelam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "disagree"
      "concept": "disagree"
      "built": ["zu", "qelam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "jiramush zu qazilan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a false claim, whether intentionally deceptive or mistaken"
      "concept": "falsehood"
      "built": ["jiramush", "zu", "qazilan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "ur", "class": "conj", "field": "Everyday speech", "gloss": "or", "concept": "or"}
    - "form": "kir"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "but"
      "concept": "but"
    - "form": "zu ur"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "nor"
      "concept": "nor"
      "built": ["zu", "ur"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zam"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Because"
      "concept": "because"
    - "form": "zim"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "therefore"
      "concept": "therefore"
    - {"form": "zir", "class": "conj", "field": "Everyday speech", "gloss": "If", "concept": "if"}
    - "form": "zar"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "then, in a condition and its consequence"
      "concept": "then-conditional"
    - "form": "zu zir"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "unless"
      "concept": "unless"
      "built": ["zu", "zir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu zar"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "otherwise"
      "concept": "otherwise"
      "built": ["zu", "zar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kir zir"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Although"
      "concept": "although"
      "built": ["kir", "zir"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kir jiramush"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "however"
      "concept": "however"
      "built": ["kir", "jiramush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kir qatan"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "nevertheless"
      "concept": "nevertheless"
      "built": ["kir", "qatan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kir mi"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "despite"
      "concept": "despite"
      "built": ["kir", "mi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bar be"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "instead"
      "concept": "instead"
      "built": ["bar", "be"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "so zam"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "for; in order to; so that (purpose)"
      "concept": "for-purpose"
      "built": ["so", "zam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qel neshush"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Like"
      "concept": "like"
      "built": ["qel", "neshush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu qel neshush"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "unlike"
      "concept": "unlike"
      "built": ["zu", "qel", "neshush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qel dagiram"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "as"
      "concept": "as"
      "built": ["qel", "dagiram"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi vish"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "than"
      "concept": "than"
      "built": ["mi", "vish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ur yez"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Either"
      "concept": "either-alternative"
      "built": ["ur", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu ur yez"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "neither"
      "concept": "neither-alternative"
      "built": ["zu", "ur", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ki lel"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "both"
      "concept": "both-conjunction"
      "built": ["ki", "lel"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shi ur"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "whether"
      "concept": "whether"
      "built": ["shi", "ur"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ju buram"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "That is"
      "concept": "that-is"
      "built": ["ju", "buram"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "jiramush nukalu"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "namely"
      "concept": "namely"
      "built": ["jiramush", "nukalu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "neshush yez"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "for example"
      "concept": "for-example"
      "built": ["neshush", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mi bash bar"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "Except"
      "concept": "except"
      "built": ["mi", "bash", "bar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yez qatan"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "only"
      "concept": "only"
      "built": ["yez", "qatan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bamar qatan"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "even"
      "concept": "even"
      "built": ["bamar", "qatan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ki qatan"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "also"
      "concept": "also"
      "built": ["ki", "qatan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bamar mi"
      "class": "conj"
      "field": "Everyday speech"
      "gloss": "especially"
      "concept": "especially"
      "built": ["bamar", "mi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "khidizan sish"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "tiny"
      "concept": "tiny"
      "built": ["khidizan", "sish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bibudan bamar"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "huge"
      "concept": "huge"
      "built": ["bibudan", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qalir-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "long in spatial length"
    - "form": "qaliran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "long in spatial length"
      "built": ["qalir-", "-an"]
      "concept": "long"
    - "form": "qalur-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "short in spatial length"
    - "form": "qaluran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "short in spatial length"
      "built": ["qalur-", "-an"]
      "concept": "short"
    - {"form": "tulur-", "class": "stem", "field": "Everyday speech", "gloss": "high"}
    - "form": "tuluran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "high"
      "built": ["tulur-", "-an"]
      "concept": "high"
    - {"form": "dalur-", "class": "stem", "field": "Everyday speech", "gloss": "low"}
    - "form": "daluran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "low"
      "built": ["dalur-", "-an"]
      "concept": "low"
    - "form": "qaliran tulu"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "tall"
      "concept": "tall"
      "built": ["qaliran", "tulu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "qamul-", "class": "stem", "field": "Everyday speech", "gloss": "wide"}
    - "form": "qamulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "wide"
      "built": ["qamul-", "-an"]
      "concept": "wide"
    - {"form": "qamil-", "class": "stem", "field": "Everyday speech", "gloss": "narrow"}
    - "form": "qamilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "narrow"
      "built": ["qamil-", "-an"]
      "concept": "narrow"
    - "form": "kaduman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "heavy"
      "built": ["kadum-", "-an"]
      "concept": "heavy"
    - "form": "zu kaduman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "light in weight"
      "concept": "light-weight"
      "built": ["zu", "kaduman"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "naban-", "class": "stem", "field": "Everyday speech", "gloss": "be newly made"}
    - "form": "nabanan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "new"
      "built": ["naban-", "-an"]
      "concept": "new"
    - {"form": "ralum-", "class": "stem", "field": "Everyday speech", "gloss": "old; not new"}
    - "form": "raluman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "old; not new"
      "built": ["ralum-", "-an"]
      "concept": "old-object"
    - {"form": "zupul-", "class": "stem", "field": "Everyday speech", "gloss": "fast"}
    - "form": "zupulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "fast"
      "built": ["zupul-", "-an"]
      "concept": "fast"
    - {"form": "namuruk-", "class": "stem", "field": "Everyday speech", "gloss": "slow"}
    - "form": "namurukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "slow"
      "built": ["namuruk-", "-an"]
      "concept": "slow"
    - {"form": "lumur-", "class": "stem", "field": "Everyday speech", "gloss": "easy"}
    - "form": "lumuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "easy"
      "built": ["lumur-", "-an"]
      "concept": "easy"
    - {"form": "qazur-", "class": "stem", "field": "Everyday speech", "gloss": "difficult"}
    - "form": "qazuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "difficult"
      "built": ["qazur-", "-an"]
      "concept": "difficult"
    - {"form": "lamur-", "class": "stem", "field": "Everyday speech", "gloss": "good"}
    - "form": "lamuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "good"
      "built": ["lamur-", "-an"]
      "concept": "good"
    - "form": "lamuran vish"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "better"
      "concept": "better"
      "built": ["lamuran", "vish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "gashirukan vish"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "worse"
      "concept": "worse"
      "built": ["gashirukan", "vish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lamuran vish bash"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "best"
      "concept": "best"
      "built": ["lamuran", "vish", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "gashirukan vish bash"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "worst"
      "concept": "worst"
      "built": ["gashirukan", "vish", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "qazal-", "class": "stem", "field": "Everyday speech", "gloss": "important"}
    - "form": "qazalan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "important"
      "built": ["qazal-", "-an"]
      "concept": "important"
    - "form": "zu qazalan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "trivial"
      "concept": "trivial"
      "built": ["zu", "qazalan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "dazur-", "class": "stem", "field": "Everyday speech", "gloss": "be necessary"}
    - "form": "dazuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "necessary"
      "built": ["dazur-", "-an"]
      "concept": "necessary"
    - "form": "numaran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "valuable"
      "built": ["numar-", "-an"]
      "concept": "valuable"
    - "form": "zu numaran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "worthless"
      "concept": "worthless"
      "built": ["zu", "numaran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "rashilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "useful"
      "built": ["rashil-", "-an"]
      "concept": "useful"
    - "form": "zu rashilan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "useless"
      "concept": "useless"
      "built": ["zu", "rashilan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qattiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "broken"
      "built": ["qattir-", "-an"]
      "concept": "broken"
    - "form": "zu temadan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "incomplete"
      "concept": "incomplete"
      "built": ["zu", "temadan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu lataran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "dishonest"
      "concept": "dishonest"
      "built": ["zu", "lataran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "be bamar"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "very"
      "concept": "very"
      "built": ["be", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bamar bamar"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "extremely"
      "concept": "extremely"
      "built": ["bamar", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "sish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "slightly"
      "concept": "slightly"
    - "form": "qimar sish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "barely"
      "concept": "barely"
      "built": ["qimar", "sish"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "bamar gashirukan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "too much"
      "concept": "too-much"
      "built": ["bamar", "gashirukan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qimar gashirukan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "too little"
      "concept": "too-little"
      "built": ["qimar", "gashirukan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu qel temadan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "opposite"
      "concept": "opposite"
      "built": ["zu", "qel", "temadan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qad"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "can; able to do something (ability)"
      "concept": "can"
    - "form": "zu qad"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "cannot; unable to do something (lack of ability)"
      "concept": "cannot"
      "built": ["zu", "qad"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "badum-", "class": "stem", "field": "Everyday speech", "gloss": "Possible"}
    - "form": "baduman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Possible"
      "built": ["badum-", "-an"]
      "concept": "possible"
    - "form": "zu baduman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "impossible"
      "concept": "impossible"
      "built": ["zu", "baduman"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kal"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "may; have permission to act"
      "concept": "may-permission"
    - "form": "qiz baduman"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "might; an event is possible"
      "concept": "might-possibility"
      "built": ["qiz", "baduman"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kum"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Must"
      "concept": "must"
    - "form": "zukum"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "must not"
      "concept": "must-not"
    - "form": "lamuran dagiram"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "Should"
      "concept": "ought"
      "built": ["lamuran", "dagiram"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "kumur-", "class": "stem", "field": "Everyday speech", "gloss": "be required"}
    - "form": "kumuran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Required"
      "built": ["kumur-", "-an"]
      "concept": "required"
    - "form": "qiziran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "optional"
      "built": ["qizir-", "-an"]
      "concept": "optional"
    - "form": "kaluruk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "permit; be allowed"
    - "form": "kalurukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Allowed"
      "built": ["kaluruk-", "-an"]
      "concept": "allowed"
    - "form": "zukum-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "forbid; be forbidden"
    - "form": "zukuman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "forbidden"
      "built": ["zukum-", "-an"]
      "concept": "forbidden"
    - "form": "kalurukam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "Permit"
      "built": ["kaluruk-", "-am"]
      "concept": "permit"
    - "form": "zukumam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "prohibit"
      "built": ["zukum-", "-am"]
      "concept": "prohibit"
    - "form": "zabuzan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "free to act; unconstrained"
      "built": ["zabuz-", "-an"]
      "concept": "free"
    - "form": "qatuk-"
      "class": "stem"
      "field": "Everyday speech"
      "gloss": "constrained in action; not free to act"
    - "form": "qatukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "constrained in action; not free to act"
      "built": ["qatuk-", "-an"]
      "concept": "constrained"
    - "form": "yaziman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Willing"
      "built": ["yazim-", "-an"]
      "concept": "willing"
    - "form": "zu yaziman"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unwilling"
      "concept": "unwilling"
      "built": ["zu", "yaziman"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "yazulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Intended"
      "built": ["yazul-", "-an"]
      "concept": "intended"
    - "form": "zu yazulan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "accidental"
      "concept": "accidental"
      "built": ["zu", "yazulan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lumiru"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Hello"
      "concept": "hello"
    - "form": "lumiru so nazulam"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Goodbye"
      "concept": "goodbye"
      "built": ["lumiru", "so", "nazulam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lumiru so kudumam"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Welcome"
      "concept": "expression-welcome"
      "built": ["lumiru", "so", "kudumam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazimush so"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Please"
      "concept": "expression-please"
      "built": ["tazimush", "so"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "tazimush shi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Thank you"
      "concept": "expression-thank-you"
      "built": ["tazimush", "shi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "lumiru ral"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "You’re welcome"
      "concept": "expression-youre-welcome"
      "built": ["lumiru", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizum so neshush"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Excuse me"
      "concept": "expression-excuse-me"
      "built": ["nizum", "so", "neshush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizum gazurush"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Sorry"
      "concept": "expression-sorry"
      "built": ["nizum", "gazurush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mushiram so nizum"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Forgive me"
      "concept": "expression-forgive-me"
      "built": ["mushiram", "so", "nizum"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hiz qatan"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Of course"
      "concept": "of-course"
      "built": ["hiz", "qatan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mazuram shi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Listen"
      "concept": "expression-listen"
      "built": ["mazuram", "shi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "sadirukam shi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Wait"
      "concept": "expression-wait"
      "built": ["sadirukam", "shi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kudumam shiu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Come here"
      "concept": "expression-come-here"
      "built": ["kudumam", "shiu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nazulam salu"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Go away"
      "concept": "expression-go-away"
      "built": ["nazulam", "salu"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "rashilam shi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Help!"
      "concept": "expression-help"
      "built": ["rashilam", "shi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qaturam shi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Stop!"
      "concept": "expression-stop"
      "built": ["qaturam", "shi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shiru shi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "What"
      "concept": "expression-what"
      "built": ["shiru", "shi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "ral shi"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Again"
      "concept": "expression-again"
      "built": ["ral", "shi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizum nashimam"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "I understand"
      "concept": "expression-i-understand"
      "built": ["nizum", "nashimam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizum zu nashimam"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "I do not understand"
      "concept": "expression-i-do-not-understand"
      "built": ["nizum", "zu", "nashimam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nizim jiramam shiru"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "What do you mean"
      "concept": "expression-what-do-you-mean"
      "built": ["nizim", "jiramam", "shiru"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shikam jiramam"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "How do you say…"
      "concept": "expression-how-do-you-say"
      "built": ["shikam", "jiramam"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shiru nukalush mi ju"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "What is this called"
      "concept": "expression-what-is-this-called"
      "built": ["shiru", "nukalush", "mi", "ju"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "shi qazilan"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "Really? (conversational surprise or request for confirmation)"
      "concept": "expression-really"
      "built": ["shi", "qazilan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zuz bash"
      "class": "call"
      "field": "Everyday speech"
      "gloss": "not at all (conversational response)"
      "concept": "expression-not-at-all"
      "built": ["zuz", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "birum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": ["Person", "human"]
      "concept": ["person", "human"]
    - {"form": "naru", "class": "n", "field": "Everyday speech", "gloss": "Man", "concept": "man"}
    - "form": "niru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "woman"
      "concept": "woman"
    - "form": "birum nabikan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Adult"
      "concept": "adult"
      "built": ["birum", "nabikan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "birum yez"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Individual"
      "concept": "individual"
      "built": ["birum", "yez"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "barum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "group"
      "concept": "group"
    - "form": "birum bamar"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "crowd"
      "concept": "crowd"
      "built": ["birum", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "taruzi bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "clan"
      "concept": "clan"
      "built": ["taruzi", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "taruzi bash"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "tribe"
      "concept": "tribe"
      "built": ["taruzi", "bash"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "birum be bashirun"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "community"
      "concept": "community"
      "built": ["birum", "be", "bashirun"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "dagirum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Worker"
      "concept": "worker"
    - "form": "kamalum"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "artisan"
      "concept": "artisan"
    - "form": "nukalush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Name"
      "concept": "name-noun"
    - "form": "nukalush qazalan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "title"
      "concept": "title"
      "built": ["nukalush", "qazalan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qadurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "rank"
      "concept": "rank"
    - "form": "mugilush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Custom"
      "concept": "custom"
    - "form": "mugilush ral"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "tradition"
      "concept": "tradition"
      "built": ["mugilush", "ral"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "mugilu khidizan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "rule"
      "concept": "rule"
      "built": ["mugilu", "khidizan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "qalamush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Order"
      "concept": "order-noun"
    - "form": "qalamush bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "command"
      "concept": "command-noun"
      "built": ["qalamush", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu kurrim"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "injustice"
      "concept": "injustice"
      "built": ["zu", "kurrim"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kurrim lataran"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "right; morally acceptable"
      "concept": "right-ethical"
      "built": ["kurrim", "lataran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu kurrim lataran"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "wrong; morally unacceptable"
      "concept": "wrong-ethical"
      "built": ["zu", "kurrim", "lataran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "zu gadirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Peace"
      "concept": "peace"
      "built": ["zu", "gadirush"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "gadirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "war"
      "concept": "war"
    - "form": "qatukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "captivity"
      "concept": "captivity"
    - "form": "hizirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Gift"
      "concept": "gift"
    - "form": "mardush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "exchange"
      "concept": "exchange-noun"
    - "form": "kadulush bamar"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Wealth"
      "concept": "wealth"
      "built": ["kadulush", "bamar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kadulush qimar"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "poverty"
      "concept": "poverty"
      "built": ["kadulush", "qimar"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kadulush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Property"
      "concept": "property"
    - "form": "kadulush qatan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "ownership"
      "concept": "ownership"
      "built": ["kadulush", "qatan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "hitusush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Secret"
      "concept": "secret"
    - "form": "qazirukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "knowledge"
      "concept": "knowledge"
    - "form": "balu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Thing"
      "concept": "thing"
    - "form": "balu buram"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "being"
      "concept": "being"
      "built": ["balu", "buram"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "nabikush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Life"
      "concept": "life"
    - "form": "kabarush mi"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "origin"
      "concept": "origin"
      "built": ["kabarush", "mi"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "kabarush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "beginning"
      "concept": "beginning"
    - "form": "badurush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "End"
      "concept": "end-noun"
    - "form": "temadush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "completion"
      "concept": "completion"
    - "form": "badirukush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Change"
      "concept": "change-noun"
    - "form": "badirukush bibudan"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "transformation"
      "concept": "transformation"
      "built": ["badirukush", "bibudan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - "form": "paluzu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Part"
      "concept": "part"
    - "form": "zamiruq"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Cause"
      "concept": "cause"
    - "form": "zimaruq"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "effect"
      "concept": "effect"
    - "form": "zamaruq"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Reason"
      "concept": "reason"
    - "form": "qelaru"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "Kind"
      "concept": "kind"
    - {"form": "qaziluk-", "class": "stem", "field": "Everyday speech", "gloss": "Real"}
    - "form": "qazilukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Real"
      "built": ["qaziluk-", "-an"]
      "concept": "real"
    - "form": "zu qazilukan"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unreal"
      "concept": "unreal"
      "built": ["zu", "qazilukan"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "yashir-", "class": "stem", "field": "Everyday speech", "gloss": "Natural"}
    - "form": "yashiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "Natural"
      "built": ["yashir-", "-an"]
      "concept": "natural"
    - "form": "zu yashiran"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "unnatural"
      "concept": "unnatural"
      "built": ["zu", "yashiran"]
      "note": "Separately spoken ordinary words, using the constructions and conventional meanings explained in Everyday speech."
    - {"form": "lumiz", "class": "adj", "field": "Everyday speech", "gloss": "soft to the touch"}
    - {"form": "lulum", "class": "adj", "field": "Everyday speech", "gloss": "smooth"}
    - {"form": "qatt", "class": "adj", "field": "Everyday speech", "gloss": "hard to the touch"}
    - "form": "zattir"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a key; tool releasing a fastening"
    - "form": "neshu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "an opening for looking; a window opening"
    - "form": "milaz"
      "class": "adj"
      "field": "Everyday speech"
      "gloss": "sweet; the quality of flowers in a conventional plant expression"
    - "form": "sir"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "ordered position; follows any cardinal to make its ordinal"
    - "form": "paz"
      "class": "part"
      "field": "Everyday speech"
      "gloss": "equal division; follows a denominator to name a fraction"
    - "form": "vish"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "more in comparison; follows a quality"
    - "form": "naban"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "newly; newly brought into being"
    - "form": "qatan"
      "class": "adv"
      "field": "Everyday speech"
      "gloss": "steadily; continuing; fully in force"
    - "form": "nukalu"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "a name or designation"
    - "form": "dagirush"
      "class": "n"
      "field": "Everyday speech"
      "gloss": "an act; an action taken or performed"
      "built": ["dagir-", "-ush"]
    - "form": "ranizam"
      "class": "v"
      "field": "Everyday speech"
      "gloss": "rain; fall as rain"
      "built": ["raniz-", "-am"]
  icon: icon-speaking
  templatePriority: null
  packFolder: language
  names:
    pattern: "{given} {family}"
    given:
      female:
        - "Tulina"
        - "Azara"
        - "Belgina"
        - "Tirmana"
        - "Muluya"
        - "Shamaya"
        - "Pelitum"
        - "Libanu"
        - "Salumu"
        - "Anasha"
        - "Lamuna"
        - "Kadumuya"
        - "Zattuya"
        - "Ellamuna"
        - "Katira"
        - "Shezuya"
        - "Zarmuta"
        - "Eziyana"
        - "Mukamu"
        - "Pallitu"
        - "Ninuri"
        - "Pashtum"
        - "Termuza"
        - "Simruya"
        - "Saduya"
        - "Razzina"
        - "Bashimuya"
        - "Gashmuna"
        - "Alamia"
        - "Beshura"
        - "Shammaya"
        - "Tushina"
        - "Nimratu"
        - "Teshuda"
        - "Zubura"
        - "Lashira"
        - "Nazzuna"
        - "Shalimu"
        - "Naguya"
        - "Pakuya"
        - "Damina"
        - "Parza"
        - "Girratu"
        - "Sallimu"
        - "Durim"
        - "Kashmuna"
        - "Ludina"
        - "Shimuna"
        - "Elzina"
        - "Niraya"
        - "Ammashi"
        - "Silmuna"
        - "Naduya"
        - "Urumi"
        - "Lamazi"
        - "Ashtari"
        - "Pasira"
        - "Kutunu"
        - "Dalura"
        - "Mirmura"
      male:
        - "Rumukush"
        - "Pazasan"
        - "Zabanu"
        - "Tanadan"
        - "Tarruk"
        - "Bibudan"
        - "Mugilush"
        - "Mesaku"
        - "Lushar"
        - "Shabaru"
        - "Dapuman"
        - "Danashu"
        - "Almarum"
        - "Nirabu"
        - "Rimash"
        - "Bilgun"
        - "Laziru"
        - "Shatum"
        - "Matun"
        - "Niburan"
        - "Zarutan"
        - "Ulamar"
        - "Nabazir"
        - "Ekuran"
        - "Numaru"
        - "Jiraman"
        - "Samran"
        - "Kusadan"
        - "Sharrush"
        - "Abarash"
        - "Kubasan"
        - "Shamut"
        - "Lartush"
        - "Adunan"
        - "Gabbaru"
        - "Edrum"
        - "Ashku"
        - "Berinu"
        - "Lamashar"
        - "Bissush"
        - "Tukuram"
        - "Ashuraz"
        - "Maranu"
        - "Bammul"
        - "Zilmar"
        - "Kadishar"
        - "Ushmun"
        - "Delzuru"
        - "Lurum"
        - "Arzam"
        - "Petum"
        - "Pushutan"
        - "Rudam"
        - "Attunu"
        - "Namzu"
        - "Dammush"
        - "Sharuk"
        - "Tumran"
        - "Kitum"
        - "Zadunu"
    family:
      - "Jakuduni"
      - "Tanaduni"
      - "Zadduni"
      - "Shamurin"
      - "Tazirish"
      - "Pilmuni"
      - "Hitusuni"
      - "Yushudum"
      - "Kumuni"
      - "Rusakuni"
      - "Funatum"
      - "Kassuru"
      - "Paltiram"
      - "Nimkushi"
      - "Shamiru"
      - "Kadira"
      - "Balinuni"
      - "Telmush"
      - "Lartuni"
      - "Eshkarum"
      - "Ilammu"
      - "Shilmuni"
      - "Padduni"
      - "Shaduni"
      - "Tumani"
      - "Iltashi"
      - "Kerruni"
      - "Parushi"
      - "Ezzinu"
      - "Kubasuni"
      - "Tarmumi"
      - "Badushi"
      - "Gimruni"
      - "Zukuni"
      - "Gatituni"
      - "Sudram"
      - "Urdinu"
      - "Giruni"
      - "Ilzishi"
      - "Qizikuni"
      - "Belginum"
      - "Barumi"
      - "Tamziru"
      - "Shaduni"
      - "Dupari"
      - "Pasharu"
      - "Lamziru"
      - "Mimumi"
      - "Narumi"
      - "Bammulam"
      - "Pulamu"
      - "Laddush"
      - "Urganu"
      - "Gazzuni"
      - "Teraku"
      - "Temadum"
      - "Elduni"
      - "Daruzi"
      - "Kassumi"
      - "Parimu"
  sounds:
    edges: [{edge: closeConsonant, sounds: [n, r, m, l, sh, k, z, t, b]}]
    clusters: {max: 3}
    stress: {two: first, longer: penultimate, mark: acute}
  scope:
    folders: [taruzel, midhaliontaruzel]
    cultures: [taruzelianclt]
    lore: [taruzelianclt]
    parents: [taruzelrgn]
    addresses: [lore-taruzelianclt, skill-taruzelilng, skill-merazanscrpt]
  tongues:
    - {tag: taruzeli, meaning: a Taruzeli name, language: skill-taruzelilng}
    - {tag: translation, meaning: a name given in the language of these pages}
  register:
    - {name: Alz River, tongue: translation}
    - {name: Auric Compact, tongue: translation}
    - {name: Bashimuya Telmuni, tongue: taruzeli, built: [bashim-, -uya, telm-, -uni]}
    - {name: Bazunel, tongue: taruzeli, built: [bazun-, -el]}
    - {name: Belgina, tongue: taruzeli, built: [belgin-, -a]}
    - {name: Besikar, tongue: taruzeli, built: [besik-, -ar]}
    - {name: Bibudan Belginum, tongue: taruzeli, built: [bibud-, -an, belgin-, -um]}
    - {name: Bissush Tanaduni, tongue: taruzeli, built: [biss-, -ush, tanad-, -uni]}
    - {name: Bu, tongue: taruzeli}
    - {name: Confederation of Taruzelian States, tongue: translation}
    - {name: Corsair League, tongue: translation}
    - {name: The Council of the Guild-Wardens, tongue: translation}
    - {name: Dapuman Jakuduni, tongue: taruzeli, built: [dapum-, -an, jakud-, -uni]}
    - {name: Genira Bibudi, tongue: taruzeli, built: [genir-, -a, bibud-, -i]}
    - {name: Hitusel, tongue: taruzeli, built: [hitus-, -el]}
    - {name: Council of Hitusel, tongue: translation}
    - {name: Hushaduya Kusaduni, tongue: taruzeli, built: [hushad-, -uya, kusad-, -uni]}
    - {name: Jakuduni, tongue: taruzeli, built: [jakud-, -uni]}
    - {name: Jiraman Ashuruni, tongue: taruzeli, built: [jiram-, -an, ashur-, -uni]}
    - {name: Kadumuya Kubasuni, tongue: taruzeli, built: [kadum-, -uya, kubas-, -uni]}
    - {name: Khurutush Kalurum, tongue: taruzeli, built: [khurut-, -ush, kalur-, -um]}
    - {name: Lartush Genirum, tongue: taruzeli, built: [lart-, -ush, genir-, -um]}
    - {name: Lataruya Qizikuni, tongue: taruzeli, built: [latar-, -uya, qizik-, -uni]}
    - {name: Merazan, tongue: taruzeli, built: [meraz-, -an]}
    - {name: Merazan Script, tongue: translation}
    - {name: Merchantry of the Veil, tongue: translation}
    - {name: Mugilush Hitusuni, tongue: taruzeli, built: [mugil-, -ush, hitus-, -uni]}
    - {name: Niburan Fusanuni, tongue: taruzeli, built: [nibur-, -an, fusan-, -uni]}
    - {name: Pashinar, tongue: taruzeli, built: [pashin-, -ar]}
    - {name: Guild Board of Pashinar, tongue: translation}
    - {name: Pazasan Khidizum, tongue: taruzeli, built: [pazas-, -an, khidiz-, -um]}
    - {name: Pazirush Ilammuni, tongue: taruzeli, built: [pazir-, -ush, ilamm-, -uni]}
    - {name: Pushutan Qizikuni, tongue: taruzeli, built: [pushut-, -an, qizik-, -uni]}
    - {name: Kubasan Lartuni, tongue: taruzeli, built: [kubas-, -an, lart-, -uni]}
    - {name: Kudumel, tongue: taruzeli, built: [kudum-, -el]}
    - {name: Kusadan Yushudum, tongue: taruzeli, built: [kusad-, -an, yushud-, -um]}
    - {name: Rasunum Gatituni, tongue: taruzeli, built: [rasun-, -um, gatit-, -uni]}
    - {name: Rumukush Temadum, tongue: taruzeli, built: [rumuk-, -ush, temad-, -um]}
    - {name: Rusakuni, tongue: taruzeli, built: [rusak-, -uni]}
    - {name: Sazumun, tongue: taruzeli, built: [sazum-, -un]}
    - {name: Shamular, tongue: taruzeli, built: [shamul-, -ar]}
    - {name: Guild Board of Shamular, tongue: translation}
    - {name: Sharimun, tongue: taruzeli, built: [sharim-, -un]}
    - {name: Guild Board of Sharimun, tongue: translation}
    - {name: Sharrush Khamisuni, tongue: taruzeli, built: [sharr-, -ush, khamis-, -uni]}
    - {name: Tamzir Shoals, tongue: translation}
    - {name: Tanadan Helaruni, tongue: taruzeli, built: [tanad-, -an, helar-, -uni]}
    - {name: Taruzel, tongue: taruzeli, built: [taruz-, -el]}
    - {name: Taruzel Region, tongue: translation}
    - {name: Taruzeli, tongue: translation}
    - {name: Taruzeli Language, tongue: translation}
    - {name: Taruzeli Lexicon, tongue: translation}
    - {name: Taruzelian, tongue: translation}
    - {name: Taruzelian Confederation, tongue: translation}
    - {name: Teshuda Funatum, tongue: taruzeli, built: [teshud-, -a, funat-, -um]}
    - {name: The Alz, tongue: translation}
    - {name: Vezakar, tongue: taruzeli, built: [vezak-, -ar]}
    - {name: Vezakuni, tongue: taruzeli, built: [vezak-, -uni]}
    - {name: Visiza Zupumi, tongue: taruzeli, built: [visiz-, -a, zupum-, -i]}
    - {name: Yamuzel, tongue: taruzeli, built: [yamuz-, -el]}
    - {name: Yutalush Pushutum, tongue: taruzeli, built: [yutal-, -ush, pushut-, -um]}
    - {name: Zabuzum, tongue: taruzeli, built: [zabuz-, -um]}
    - {name: Zattuya Balinuni, tongue: taruzeli, built: [zatt-, -uya, balin-, -uni]}
    - {name: Zazuran Kusaduni, tongue: taruzeli, built: [zazur-, -an, kusad-, -uni]}
    - {name: Merazuni, tongue: taruzeli}
    - {name: Taruzel Adventurer's Guide, tongue: translation}
    - {name: Taruzelian Currency, tongue: translation}
    - {name: Taruzelian Currency System, tongue: translation}
    - {name: The Crimson Ledger, tongue: translation}
    - {name: The Tamzir, tongue: taruzeli}
    - {name: Ashuraz Hitusuni, tongue: taruzeli}
    - {name: Prince Ashuraz Hitusuni, tongue: translation}
    - {name: Merchant Prince Ashuraz Hitusuni, tongue: translation}
    - {name: Merchant Prince Ashuraz, tongue: translation}
    - {name: Beshura Tarmumi, tongue: taruzeli}
    - {name: Captain Beshura Tarmumi, tongue: translation}
    - {name: Captain Beshura, tongue: translation}
    - {name: Ninuri Shamiru, tongue: taruzeli}
    - {name: Merchant-Mother Ninuri Shamiru, tongue: translation}
    - {name: Tarruk Eshkarum, tongue: taruzeli}
    - {name: Magistrate Tarruk Eshkarum, tongue: translation}
    - {name: Magistrate Eshkarum, tongue: translation}
  retired:
    - {form: Tamavar, instead: Besikar, why: one letter from an Earth word}
    - {form: Kethara, instead: Yamuzel, why: an Earth word}
    - {form: Haradan, instead: Bashiman, why: built on the retired land name}
    - {form: Ashkabel, instead: Bazunel, why: a name no Taruzeli root builds}
    - {form: Varoshan, instead: Kudumel, why: built on an Earth morpheme}
    - {form: Azhûn, instead: Sazumun, why: one letter from an Earth word}
    - {form: Kashmuret, instead: Pashinar, why: a name no Taruzeli root builds}
    - {form: Míravel, instead: Shamular, why: a name no Taruzeli root builds}
    - {form: Qadhirun, instead: Sharimun, why: built on an Earth morpheme}
    - {form: Sulûn, instead: Hitusel, why: an Earth word}
    - {form: Alîmû, instead: Rasunum, why: an Earth word}
    - {form: Lâmarû, instead: Gatituni, why: one letter from an Earth word}
    - {form: Arûzan, instead: Rumukush, why: a name no Taruzeli root builds}
    - {form: Kamûmû, instead: Temadum, why: one letter from an Earth word}
    - {form: Belshar, instead: Tanadan, why: a name no Taruzeli root builds}
    - {form: Gûlamû, instead: Helaruni, why: an Earth word}
    - {form: Dalzûru, instead: Jiraman, why: a name no Taruzeli root builds}
    - {form: Tûbashî, instead: Ashuruni, why: one letter from an Earth word}
    - {form: Kasûra, instead: Belgina, why: an Earth word}
    - {form: Damzarû, instead: Rusakuni, why: one letter from an Earth word}
    - {form: Dânâzi, instead: Genira, why: a name no Taruzeli root builds}
    - {form: Ashûdam, instead: Bibudi, why: a name no Taruzeli root builds}
    - {form: Ellimû, instead: Zazuran, why: an Earth word}
    - {form: Ashîmâ, instead: Kusaduni, why: one letter from an Earth word}
    - {form: Kûrûya, instead: Hushaduya, why: one letter from an Earth word}
    - form: Eshârum
      instead: Zabuzum
      why: a name no Taruzeli root builds; Eshârum Ellûram is Pazirush Ilammuni
    - {form: Ellûram, instead: Ilammuni, why: a name no Taruzeli root builds}
    - {form: Qirûsh, instead: Dapuman, why: one letter from an Earth word}
    - {form: Gamrûn, instead: Khurutush, why: one letter from an Earth word}
    - {form: Narûsham, instead: Kalurum, why: a name no Taruzeli root builds}
    - {form: Girdanû, instead: Niburan, why: a name no Taruzeli root builds}
    - {form: Rashîmû, instead: Fusanuni, why: one letter from an Earth word}
    - {form: Girmûn, instead: Mugilush, why: a name no Taruzeli root builds}
    - {form: Takkûnûm, instead: Hitusuni, why: one letter from an Earth word}
    - form: Kashnûra
      instead: Bashimuya
      why: a name no Taruzeli root builds; the treasurer Kashnûra Bel-Taruzi is Yushuduya Jakuduni
    - {form: Arshûmû, instead: Telmuni, why: a name no Taruzeli root builds}
    - {form: Lamûshar, instead: Pushutan, why: built on an Earth morpheme}
    - {form: Damrûnî, instead: Qizikuni, why: one letter from an Earth word}
    - {form: Rimtûra, instead: Lataruya, why: a name no Taruzeli root builds}
    - {form: Lâmzû, instead: Kubasan, why: one letter from an Earth word}
    - {form: Damîkî, instead: Lartuni, why: one letter from an Earth word}
    - {form: Marzûna, instead: Visiza, why: one letter from an Earth word}
    - {form: Namrûsh, instead: Pazasan, why: a name no Taruzeli root builds}
    - {form: Gazrûm, instead: Khidizum, why: a name no Taruzeli root builds}
    - {form: Nûlazî, instead: Zattuya, why: one letter from an Earth word}
    - {form: Zarrâshî, instead: Balinuni, why: built on an Earth morpheme}
    - {form: Pârshar, instead: Sharrush, why: one letter from an Earth word}
    - {form: Pâtûri, instead: Teshuda, why: one letter from an Earth word}
    - {form: Lamûshî, instead: Funatum, why: a name no Taruzeli root builds}
    - {form: Pitûrû, instead: Bibudan, why: one letter from an Earth word}
    - {form: Tûbanî, instead: Belginum, why: one letter from an Earth word}
    - {form: Rimmârû, instead: Kadumuya, why: one letter from an Earth word}
    - {form: Ushûrî, instead: Kubasuni, why: an Earth word}
    - {form: Zabîsh, instead: Pushutum, why: a name no Taruzeli root builds}
    - {form: Shârûsh, instead: Bissush, why: a name no Taruzeli root builds}
    - {form: Teshûran, instead: Lartush, why: a name no Taruzeli root builds}
    - {form: Bûrnashî, instead: Genirum, why: one letter from an Earth word}
    - {form: Tirrûsh, instead: Kusadan, why: one letter from an Earth word}
    - {form: Namrûzî, instead: Yushudum, why: one letter from an Earth word}
    - {form: Ashkabelian, instead: Bazunelian, why: the demonym of a retired name}
    - {form: Ashkabeli, instead: Bazuneli, why: the demonym of a retired name}
    - {form: Tamavarian, instead: Besikarian, why: the demonym of a retired name}
    - {form: Varoshanian, instead: Kudumelian, why: the demonym of a retired name}
    - {form: Bayt al-Khazînah, instead: Merazuni, why: an Earth phrase}
    - {form: Bayt, instead: Merazuni, why: an Earth word}
    - {form: Naqîrîn al-Khazînah, instead: Treasurers' Guild, why: an Earth phrase}
    - {form: Bel-Tarûzî, instead: Jakuduni, why: an Earth word and a retired name}
    - {form: Layla, instead: Pazasuya, why: an Earth name}
    - {form: Riyad, instead: Qizikush, why: an Earth name}
    - {form: al-Massoud, instead: Mugiluni, why: an Earth name}
    - {form: Harad, instead: Taruzel, why: an Earth word}
    - {form: Haradi, instead: Taruzeli, why: the tongue of a retired name}
    - {form: Haradian, instead: Taruzelian, why: the demonym of a retired name}
    - {form: Haradians, instead: Taruzelians, why: the demonym of a retired name}
    - {form: Haradic, instead: Taruzelik, why: built on a retired name}
    - {form: Hazâri, instead: Merazan, why: built on an Earth morpheme}
    - {form: Sôd-Naqîrîn, instead: Vezakuni, why: an Earth phrase}
    - {form: Sôd, instead: Vezakuni, why: an Earth word}
    - {form: Naqîrîn, instead: Vezakuni, why: an Earth word}
    - {form: Bêt-Naqîrîn, instead: Vezakar, why: an Earth phrase}
    - {form: Rab-Naqîr, instead: Dirabum, why: an Earth phrase}
    - {form: naqîr, instead: vezakum, why: an Earth word}
    - {form: Sôd-Rabbânîn, instead: Gatitush, why: an Earth phrase}
    - {form: Pāqîdîn, instead: Pazasuni, why: an Earth word}
    - {form: Pāqîd, instead: pazasum, why: an Earth word}
    - {form: pāqîd, instead: pazasum, why: an Earth word}
    - {form: Rab-Pāqîd, instead: Chief Overseer, why: an Earth phrase}
    - {form: Gizbar, instead: Kubasum, why: an Earth word}
    - {form: Adônîm al-Mudunîn, instead: zuvarum, why: an Earth phrase}
    - {form: Adôn, instead: zuvarum, why: an Earth word}
    - {form: Tariq, instead: Zazurush, why: an Earth name}
    - {form: Sindros, instead: Bunituni, why: a name no Taruzeli root builds}
    - {form: Hallak, instead: Ashurush, why: a name no Taruzeli root builds}
    - {form: al-Sarif, instead: Hitusum, why: an Earth name}
    - {form: Malik, instead: Zabuzush, why: an Earth name}
sohl:
  system:
    skillBaseFormula: "@elo, @rea"
    masteryLevelBase: 0
    improveFlag: false
    combatCategory: none
    parentSkillCode: lang
    initSkillMult: 0
  flags: {"thalorna": {lang_family: Taruzelik}}

# terran_analog: Taruzeli reads an Akkadian-and-Phoenician register of a Semitic maritime trade tongue. The roots coined here are made to the rules and are not the Akkadian, Phoenician, Arabic or Hebrew word for their meaning, and every name in the register is built from them.
---

Taruzeli is a tongue of the [Taruzelik Family]{.name data-type="lore"}. Fluency measures the sophistication of expression in Taruzeli, from the halting phrases of a traveler to the nuanced and learned discourse of a native speaker. As with all specific languages, this skill inherits its mechanics from the general [[sohl-none-docskill-lang|Language]] skill.

The roman repertoire retains `f` and `o`, with their capitals, in the existing inherited vocabulary, including fusanush and so. The flavour palette governs new coinages and does not respell this established stock.

## Overview

Taruzeli is the tongue of the [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]], a maritime and mercantile language shaped by centuries of trade, commerce, and seafaring. Spoken across the [[place-taruzelrgn|Taruzelian islands]], in the harbors of the [[place-vylarianse|Vylarian Sea]] and in the port cities of [[place-klhrcntnnt|Kalihara]], Taruzeli dominates the merchant guilds and shipping routes. The language carries extensive vocabulary for navigation, commerce, and maritime activities, reflecting its speakers' deep connection to the sea and to trade networks spanning the known world.

Taruzeli is characterized by rhythmic, sonorous tones. Its long vowels give names and words a flowing, measured quality suited to contract negotiations and formal agreements.

## How Taruzeli sounds

Taruzeli is the ledger-speech of the sea-lanes. It has three vowels and leans on doubled consonants.

**The vowels.** _a_, _u_ and _i_, with _e_ rarer.

**The consonants.** _sh_, _z_, _m_, _q_, _b_, _d_, _g_, _k_, _r_ and _n_.

**Clusters.** Doubled consonants (_mm_, _rr_, _zz_) stand between vowels. A word opens on one consonant.

**Endings.** Taruzeli words end in _-um_, _-ush_, _-uni_, _-am_ or _-u_.

**What Taruzeli leaves out.** It has no _o_, no _f_ and no _th_.

## Phonology

### Consonant System

Taruzeli features a rich consonant inventory with several distinctive sound clusters:

Stops
: /p/, /b/, /t/, /d/, /k/, /q/ (uvular)

Fricatives
: /f/, /z/, /sh/ (voiceless sh-sound), /kh/ (velar fricative), /gh/ (voiced velar)

Nasals
: /m/, /n/

Liquids
: /r/, /l/

Affricates
: /dz/, /ts/

Characteristic clusters appear in given names: _Sharrush, Nadumar, Iddinash, Tarruk, Bissush_. Double consonants (_mm_, _rr_, _dd_, _tt_, _kk_, _ss_, _zz_) are phonologically significant, often marking emphasis or etymological depth.

The velar _kh_ and uvular _q_ give Taruzeli a guttural quality that distinguishes it from neighboring Ankarian languages.

### Vowel System

Taruzeli employs five primary vowel qualities, each with both short and long forms:

a
: front open vowel (short or long)

e
: front mid vowel (short or long)

i
: front close vowel (short or long)

o
: back mid vowel (short or long)

u
: back close vowel (short or long)

Long vowels carry heavy semantic weight. Compare _Shamut_ (short) vs. _Shamulu_ (long vowel emphasis). The interplay of long and short vowels creates a distinctive rhythmic pattern in speech.

Diphthongs are rare; vowel length and stress are preferred for emphasis.

### Stress and Prosody

Taruzeli exhibits stress patterns that tend toward the penultimate syllable in multi-syllable words, with secondary stress on earlier syllables in longer forms. This creates a measured, rolling cadence suited to oral recitation of contracts and maritime commands.

Examples from given names:

- _na-DU-mar_ (stress on the second-to-last syllable)
- _sha-MU-lu_ (stress on the second-to-last syllable)
- _TAR-ruk_ (stress on first)

The language is generally non-tonal but employs pitch accents for emphasis in formal contexts.

## Grammar Notes

### Word Order and Structure

Taruzeli follows a Subject-Verb-Object pattern in declarative sentences. Nouns and verbs are typically root-based with rich affixation systems.

### Nominal System

Taruzeli nouns carry grammatical gender (masculine/feminine) and number (singular/plural).

Family names characteristically employ suffixes:

- **-i** (masculine lineage marker)—_Bibudi, Shamurin, Girmali_
- **-uni** (feminine/collective lineage)—_Pasharuni, Beshuni, Pilmuni_
- **-um** (emphatic lineage)—_Bilulum, Kalurum, Eshkarum, Ilammu_

These suffixes denote family affiliation and are fundamental to Taruzeli identity.

## Everyday speech

The ordinary vocabulary recorded below supplements the speech of contracts and ships. Its examples use the plain port register, with full words for a learner to follow. Legal maxims and blessings above retain their traditional wording. A family name does not act as a pronoun, a place ending does not provide a general locative case and a bound stem never serves as a free word in a sentence. Every expression here uses the stated dictionary forms.

### Pronunciation and the shape of a word

Read the common transcription with sounded vowels and no silent final letters. _A_ is the vowel of father, _i_ of machine and _u_ of rule; the less frequent _e_ is the vowel of bet. These new ordinary words favour those vowels. The existing vocabulary also contains the other sounds described above; no existing word is respelled. A doubled consonant is held briefly across the syllable boundary: _qat-tan_. Start a word with one consonant, never a cluster. _Sh_ is the sound in ship and _kh_ the sound in loch; the pronunciation guide allows a plain _k_ for the latter. A plain _k_ is also an accessible reading of _q_. In longer words stress the next-to-last syllable: _NE-sham_ for the two-syllable _nesham_; _ma-ZI-ram_ has three syllables and stresses _zi_. Stress the first syllable of any two-syllable word. The ordinary words here require no pitch marks. The traditional description of marked formal writing does not add marks to this common transcription.

A hyphen at the end of a cited stem belongs to the dictionary explanation. Join the stem to its suffix and remove the hyphen in speech: _nesh-_ plus _-am_ is _nesham_, to see. _Mazir-_ plus _-am_ is _maziram_, to hear. The suffix _-am_ presents an ordinary act; _-ush_ presents its settled occurrence or result; _-an_ describes something bearing the quality. Record the particular sense a result has: _neshush_ is a sight, the visible scene or thing seen, and _mazirush_ an audible sound. These nouns name perceived things. _Sufirush_ is an odour and _palutush_ a flavour. When the act itself must be named without that result sense, say _dagirush mi nesham_, “the act of seeing,” using the ordinary action noun _dagirush_ and the full verb. Thus seeing and a sight can be distinguished without treating a bound root as a noun.

### Clauses, participants and descriptions

A new plain statement follows subject–verb–object. _Nizum saluram saliru_ means “I drink water”: speaker, drink, water. _Tu mardum geniram tu salilu_ means “The merchant takes the cup.” The article _tu_ precedes a noun referring to the known thing and stays unchanged. It can be left out for a general or newly introduced thing. The receiver follows _so_: _Nizum hiziram saliru so nizim_, “I give water to you.” A source follows _mi_: _Nizum geniram saliru mi nizim_, “I take water from you.” Keep each such phrase together. A bare verb addresses the listener: _Pazasam_, “Look”; _Mazuram_, “Listen.” A polite request can begin with _tazimush so_, literally thanks toward the listener.

The examples use full citation verbs for every participant; _-am_ does not itself identify he, she, I or you. Repeat the subject when changing participants. A second verb in a short action group keeps the same subject: _mardam geniram_ means buy, trade and take; _mardam hiziram_ means sell, trade and give. Place the object after the whole group: _Nizum mardam geniram tu salilu_, “I buy the cup.” The dictionary states the conventional meaning of such a group. Another verb is not silently supplied by a bare stem.

_Buram_ means “be” or “exist” and introduces an identity, state or location after the subject: _Tu jakudu buram bibudan_, “The ship is large”; _tu mardum buram be bashuru_, “The merchant is in the dwelling.” An adjective follows the noun it qualifies: _jakudu bibudan_, a large ship. A following noun phrase with _mi_ identifies relationship or possession: _tu salilu mi nizum_, “my cup”; _tu salilu mi nizim_, “your cup”; _mi nizum bash_, “ours.” A possession group can answer alone when the thing is already named: _Mi nizum_, “Mine.” The possessed thing comes first, as it does in _ramilu mi birum_, “a person's chest.” _Nashu mi mani_ is “the sea's appearance”; _nashu_ can describe a person, an object or a landscape without restricting appearance to people.

The nominal description above recognises gender and number, while this ordinary register uses explicit words to avoid requiring an unrecorded inflection. _Birum lel_ is two people, _birum bash_ all the people; _qiziru naru_ is a male child and _qiziru niru_ a female child. The examples keep a noun's recorded citation form with a quantity. Family _-i_, _-uni_ and _-um_ retain their established lineage and standing meanings. They are not appended to every noun to make a conversational plural.

### Kin and reference

_Lamiru_ is mother and _lamuru_ father. In the paired category _lamiru ki lamuru_, either kind of parent is meant when the whole group names the relationship, as opposed to a statement about two named people. Possession or descent follows _mi_. _Lamiru mi lamiru ki lamuru_ is a grandmother: a mother of a parent. _Qiziru mi qiziru_ is a grandchild. A cousin is _qiziru mi zamulu ki zamiru mi lamiru ki lamuru_, a parent's sibling's child. Read outward from the child, through the sibling, to the parent. A nephew or niece instead specifies the sibling's male or female child without the extra parental link. State the reference person with another _mi_ group whenever the relationship could be ambiguous. _Teshudush_ remains marriage as the joining of houses; _taruzi_ continues to include both the line's family and its firms.

_Nizum_ is the speaker, _nizim_ the addressee and _nizir_ a third person. _Nizir niru_ explicitly identifies she; _nizu_ refers to a nonpersonal thing. _Nizum bash_ means we and _nizir bash_ they. _Nizash_ refers back to the clause's subject: _Nizum nesham nizash_, “I see myself.” _Ju_ and _ji_ point to this and that, with _bash_ giving these and those. _Birum besh_ is someone, _birum ur_ anyone in an open alternative, _birum bash_ everyone and _zu birum_ no one. A general negative noun group uses _zu_ immediately before the absent participant. This differs from denying an act, where _zu_ immediately precedes the verb.

### Asking and denying

A question word occupies the position of the requested information. _Shirum saluram saliru_, “Who drinks water?” asks for the subject. _Nizim nesham shiru_, “What do you see?” asks for the object. _Nizim nazulam shibe_, “Where do you go?” asks for location. _Mi shirum_ means whose and _so shirum_ to whom. _Nizim buram mi shirum_ asks whose group or possession the addressee belongs to, while _tu salilu mi shirum_ asks whose cup it is. Keep the possession or direction particle with its question word.

A final _shi_ asks whether a full statement holds: _Nizim saluram saliru shi_, “Do you drink water?” Answer _hiz_, yes, or _zuz_, no. _Shi ral_ asks for repetition or clarification. A writer using the common transcription may use the reader's familiar punctuation around these utterances; the question is carried by the word _shi_. These examples require no script mapping or new scribal mark.

Put _zu_ before the verb it denies: _Nizum zu saluram saliru_, “I do not drink water.” It precedes a whole serial group when both acts are denied. A negative adjective group has _zu_ directly before the adjective, as in _zu qazilan_, false. Such a group can be a description after _buram_. _Tu jiramush buram zu qazilan_, “The saying is false.” Blindness is _zu neshuman_, unable to see, while invisibility is _zu neshikan_, unable to be seen. An object can therefore be invisible to a person who is able to see.

### Truth, uncertainty and the four loves

_Qazilush_ is truth, a claim's agreement with what is real. _Qazirush_ is certainty, a speaker's being sure; _qarimush_ is confidence in ability or an expected success; _qazimush_ is trust in another's reliability. _Mardu_ keeps its narrower commercial meaning of credit. Certainty and credit are useful without replacing the everyday words for truth or personal trust. _Jiramush gashirukan_ is a deliberate lie, a statement intended to deceive; _jiramush zu qazilan_ is a false claim that can also be an honest mistake.

Qualification can frame a whole clause. _Qiz nizir kudumam_ means “Perhaps he comes.” _Mi neshush nizir kudumam_ says that appearances support the report; _mi birum nizir kudumam_ reports what people say. Neither asserts that it has been established as true. _Qazirush temadan_ expresses the speaker's certainty. These groups keep their dictionary senses when used before a sentence rather than being required endings on a verb.

_Lisharush_ is romantic love, _balishush_ the affection of friends, _tarishush_ familial love and _rashukush_ selfless love offered without requiring a prior relationship. _Shazukush_, lust, names sexual appetite. _Balinush_ is companionship, the being together of companions; its ordinary sense grows from the already recorded shared venture, but does not require a business partnership. _Qatilush_ is loyalty to a person or commitment. _Qalamush_ is an order or command, the result of a call to act; the different roots distinguish allegiance from the instruction itself.

### Time, quantity, location and comparison

A time expression before the subject frames the entire clause. _Hamulu ral nizum saluram saliru_, “Yesterday I drank water”; _hamulu rad nizum nazulam_, “Tomorrow I go.” The verb does not need a tense ending for those examples. _Ral_ orders an event before another in time and _rad_ after it. _Taru_ is in front in space and _daru_ behind. _Laziru bibudan_ lasts a long time, whereas _qaliran_ is long in physical length. _Qatan lazi_ means still, continuing now; _radum_ says already. _Ral_ can mean again when it repeats an event rather than locating it before a stated time. State the relevant day or starting point when the intended time is unclear.

Numbers follow their noun. The existing _yez, lel, zem, vub, fom_ and _yet_ retain one through five and ten. The further bare numerals are _niz, nuz, vaz, vuz_ for six through nine. A scale precedes its multiplier: _yet lel_ is twenty; add units with _ki_, so _yet lel ki zem_ is twenty-three. _Yatar_ is hundred and _yatum_ thousand: _yatar zem_ is three hundred. An ordinal puts _sir_ after the entire cardinal group: _yez sir_, first; _yet sir_, tenth; _yet lel ki zem sir_, twenty-third. This works for later positions without borrowing a personal-name ending. A denominator with _paz_ names an equal division: _lel paz_, half; _vub paz_, quarter; _zem vub paz_, three quarters.

_Bamar_ gives many or much and can intensify a quality; _qimar_ few or little. _Qadar_ is enough for the purpose at hand. _Lamuran vish_ means better and _lamuran vish bash_ best in the relevant group. The standard of comparison follows _mi_: _Tu jakudu buram bibudan vish mi ji_, “The ship is bigger than that.” _Qel_ gives equality in the stated respect. _Kaduman_ means heavy; _zu kaduman_ light in weight; _saliman sish_ light in colour. The phrases do not equate an object's colour and its weight.

_Be_ locates something in or at a place, _so_ gives a destination and _mi_ a source. _Tulu_ and _dalu_ identify the upper and lower sides, _selu_ the interior and _salu_ the exterior. _Be lel_ means between two stated things and _be selu_ among a surrounding group in that spatial use. Give the actual objects after these relational groups: _tu salilu buram be lel tu salilum ki tu palilu_, “The cup is between the jar and the bowl.” _Hamilu namiram_, the sun waking, conventionally means east or dawn by the context; _hamilu namulam_, the sun sleeping, west or dusk. The dictionary records each use explicitly rather than requiring a new compass system.

### Connections, permission and conversation

_Ki_ joins participants or complete clauses; _ur_ offers alternatives and _kir_ introduces a contrast. _Zam_ introduces a reason: _Nizum buram be bashuru zam ranizam_, “I am in shelter because it rains.” A condition uses _zir_ before its clause and _zar_ before its consequence: _Zir ranizam, zar nizum buram be bashuru_, “If it rains, then I am in shelter.” Repeat the participant when the actor changes between clauses. _So zam_ introduces a purpose, followed by the intended act: _Nizum nazulam so zam nizum saluram saliru_, “I go in order to drink water.” A quoted or reported claim can follow _jiramam_ as a whole clause; its SVO order remains intact.

Modals precede the full verb group. _Nizum qad saluram saliru_ means “I can drink water,” an ability; _nizum kal nazulam_, “I may go,” permission. _Nizum qiz baduman nazulam_ means “I might go,” an event's possibility. _Kum_ requires the act and _zukum_ prohibits it: _nizum kum nazulam_, “I must go”; _nizum zukum nazulam_, “I must not go.” _Zu kum_ denies the obligation and does not itself prohibit the act. _Lamuran dagiram_ recommends a following act as something one should do. Use _zu qad_ for inability and _zu baduman_ for impossibility; the inability of a person and the impossibility of an event remain distinct.

_Lumiru_ greets a person, _lumiru so kudumam_ welcomes an arrival and _lumiru so nazulam_ takes leave. _Tazimush_ gives thanks; _lumiru ral_ accepts them as a returned good meeting. _Nizum gazurush_ expresses regret, while _mushiram so nizum_ asks the listener to forgive the speaker. _Nizum so neshush_ politely attracts attention, literally “me toward your sight.” _Sadirukam_ asks someone to wait, _kudumam shiu_ to come here, _nazulam salu_ to go away and _rashilam_ for help. _Nizum nashimam_ says “I understand”; _nizum zu nashimam_ “I do not understand.” _Shiru nukalush mi ju_ asks the name of this thing. The dictionary's conversational groups are actual short utterances; a speaker can use them as given and then add a full SVO clause to state the need.

## Script and Literacy

Taruzeli employs the [[skill-merazanscrpt|Merazan script]], a consonantal alphabet derived from ancient proto-Ankarian writing systems. The script consists of 24 letters representing consonantal phonemes; vowels are optionally marked through diacritical marks (circumflex, macron, acute accent). In formal mercantile documents, vowels are always marked to avoid ambiguity in contracts and agreements.

True Taruzeli literacy is confined to the nobility, the clergy, and the professional scribe class. Merchant guildsmen often possess functional literacy—enough to recognize trade marks, numerals, and common abbreviations—but rely on hired scribes for contracts, ledgers, and legal documents. The language is written left-to-right.

## Historical Development

Taruzeli evolved from proto-Ankarian maritime pidgin languages that developed in the trading ports of the southern coast over the past eight centuries. As merchant guilds consolidated power, Taruzeli became codified and standardized. The language preserves influences from older Ankarian substrate languages, particularly in its consonantal system and maritime vocabulary.

The characteristic long-vowel marking system was systematized during the Merchant Guilds' formalization period (approximately 400 years ago), when written contracts—prepared and read aloud by professional scribes—became binding legal documents. The need for precise, unambiguous scribal reading led to the adoption of the vowel-marking diacritical system still in use today.

## Regional Dialects

### Standard Taruzeli (Confederation Dialect)

The prestige dialect, spoken in the major trading cities of the Confederation. Features full vowel marking and adherence to classical grammar. Used in formal diplomatic contexts and major contracts.

### Port Taruzeli (Kaliharan Dialect)

Spoken in the mixed port cities of Kalihara, this dialect exhibits simplified vowel distinctions and loanwords from neighboring languages. Less formal than Standard Taruzeli but mutually intelligible.

### Merchant Guild Register

A specialized register employed in high-level commercial negotiations, featuring archaic grammatical forms, technical vocabulary for maritime law, and heavily marked vowels for contractual precision.

## Sample Phrases

Mardum qatush ilammu
: "A merchant's word is his bond" (lit. "Merchant-name holds-firm family-honor")

Tu mani dammush kurrim
: "The sea gives and takes away" (lit. "The-sea gives-takes, justice-returns")

Shamulu zarutan belginu
: "Fair winds and profitable voyages" (traditional merchant blessing)

Kadumu ashuram numaru
: "Gold measures all value" (commercial maxim)

Telmush kumuni taruzi
: "A contract binds families for generations" (legal principle)

## Related Languages

Taruzeli stands as the primary member of the **Taruzelik language family**, which is an isolate within western Ankarian linguistic classification. Earlier contact with now-extinct Ankarian substrate languages shaped its consonantal system, but no modern languages are closely related to Taruzeli.

Distant connections exist to the [Dunhari language family]{.name data-type="lore"} through ancient shared maritime trade pidgin ancestors, but the languages diverged significantly over the past millennium.

## Naming Traditions

### Structure

Taruzeli names follow a clear pattern: **Given Name + Family Name**. Given names are personal identifiers, while family names carry lineage and ancestry markers.

Male given names tend toward:

- Consonant-heavy structures with emphatic double consonants
- Long vowels in the final syllable (Khurutush, Damashu, Iddinash)
- Root patterns emphasizing strength, commerce, or sea-related concepts

Female given names tend toward:

- Final vowel sequences, particularly **-a**, **-u**, **-i**, **-uya**
- More flowing consonant patterns with fewer double consonants
- Root patterns emphasizing prosperity, water, and protection

### Family Names

Family names are prestigious markers and carry explicit gender/collective suffixes:

- **-i** endings mark patrilineal descent (masculine focus)
- **-uni** endings mark broader family collectives or matrilineal branches
- **-um** endings emphasize family honor and strength

Examples: _Jakuduni_ (the company of the hull), _Pasharuni_ (Pashar's collective), _Eshkarum_ (Eshkar's honored house)

### Merchant Diaspora

Taruzeli merchants in Kalihara and other port cities maintain given names and family names even when adopting local customs, as these names carry commercial trust and guild affiliation.

## Name Lists

### Male Given Names

Rumukush, Pazasan, Iddinash, Zabanu, Tanadan, Nadumar, Tarruk, Samarum, Bibudan, Mugilush, Taziru, Mesaku, Damashu, Lushar, Shabaru, Rukhum, Dapuman, Danashu, Pazira, Almarum, Setushar, Nirabu, Rimash, Hamurim, Bilgun, Jatumu, Laziru, Shatum, Idanu, Matun, Zabuzum, Niburan, Zarutan, Kadush, Ulamar, Nabazir, Tumari, Ekuran, Yutalush, Numaru, Jiraman, Mardum, Samran, Qatush, Kusadan, Sharrush, Belginu, Abarash, Ittarum, Kubasan, Shamut, Kaduzu, Lartush, Adunan, Kaltun, Gabbaru, Udarim, Edrum, Ashku, Gadarun, Berinu, Piltumu, Lamashar, Bissush, Zakun, Tukuram, Ashuraz, Amarru, Maranu, Shattu, Bammul, Zilmar, Parush, Kadishar, Azunum, Ushmun, Delzuru, Gadun, Lurum, Baqkur, Arzam, Petum, Durzanu, Pushutan, Rudam, Shattar, Attunu, Eldum, Namzu, Dammush, Khurutush, Sharuk, Akatu, Tumran, Kitum, Zazuran, Zadunu, Rasunum

### Female Given Names

Tulina, Azara, Nimzaya, Belgina, Tirmana, Genira, Muluya, Ishtaruna, Shamaya, Pelitum, Rushana, Libanu, Nadiya, Salumu, Anasha, Tishmiya, Lamuna, Kadumuya, Asuya, Zattuya, Visiza, Ellamuna, Katira, Dimruni, Shezuya, Taluna, Zarmuta, Eziyana, Shidura, Mukamu, Amarra, Pallitu, Ninuri, Urduya, Pashtum, Termuza, Zaburi, Simruya, Irkuna, Saduya, Razzina, Pimuya, Bashimuya, Illura, Gashmuna, Alamia, Karuya, Beshura, Zuramu, Shammaya, Tushina, Eluza, Nimratu, Teshuda, Eshaya, Zubura, Tamuya, Lashira, Nazzuna, Kharruna, Shalimu, Iltuna, Naguya, Pakuya, Tershuna, Damina, Parza, Ushmuya, Girratu, Hushaduya, Sallimu, Durim, Tirimu, Kashmuna, Betum, Ludina, Shimuna, Zammara, Elzina, Tubiya, Niraya, Ammashi, Darzura, Silmuna, Naduya, Pashmu, Urumi, Attuna, Lamazi, Ashtari, Lataruya, Pasira, Shamuni, Kutunu, Asuya, Dalura, Lizina, Mirmura, Nabuya

### Family Names

Jakuduni, Tanaduni, Pasharuni, Zadduni, Bilulum, Shamurin, Tazirish, Girmali, Pilmuni, Arshumi, Hitusuni, Yushudum, Ashudi, Kumuni, Beshuni, Rusakuni, Funatum, Gazirani, Kassuru, Elkamuni, Paltiram, Nimkushi, Edduni, Shamiru, Urrani, Kadira, Balinuni, Marruni, Telmush, Genirum, Lartuni, Eshkarum, Gashumi, Ilammu, Punami, Shilmuni, Padduni, Rakumu, Shaduni, Libarum, Tumani, Iltashi, Bibudi, Kerruni, Pushutum, Parushi, Ezzinu, Fusanuni, Kubasuni, Kalurum, Tarmumi, Badushi, Pirsuni, Gimruni, Kusaduni, Zukuni, Gatituni, Khazumi, Sudram, Ashamu, Urdinu, Giruni, Kazuram, Ilzishi, Qurashi, Qizikuni, Belginum, Shulami, Barumi, Ilammuni, Tamziru, Shaduni, Garimuni, Dupari, Shemulan, Pasharu, Lamziru, Zupumi, Mimumi, Khamisuni, Narumi, Bammulam, Ashmuri, Pulamu, Tarshuni, Laddush, Urganu, Elmirum, Gazzuni, Telmuni, Teraku, Temadum, Ashuruni, Elduni, Helaruni, Daruzi, Kassumi, Dumani, Parimu, Illuram

## Taruzeli Lexicon {#lexicon}

A harbor notary at [[affiliation-yamuzel|Yamuzel]] greets every new clerk with the same exercise: she reads a contract aloud and asks which word in it is the price. None of them is. In Taruzeli the price is a _pashinu_, a fair price, and that is only what two people agree to leave the table with; the contract rests on _mardu_, the credit of the names that sign it, and on the _qatush_, the holding-fast that each of them swears to. Everything a newcomer needs to know about the language of the [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]] is in that exercise: Taruzeli is a tongue of bargains, and its words are built to say who holds what.

A Taruzeli root names an act, and an ending says who stands in it. _Telm-_ is to bind in writing; _telmum_ is the notary who writes the bond, and _telmush_ is the contract itself. The same five endings are laid on every root, which is why a clerk who has met a word once can read its relatives, and why a stranger who learns the endings reads half a harbor sign on the first day. This page is the word-hoard of those roots: the stems the quay uses, what each ending makes of them, the rules a new word is built by, and the register of every name the setting gives in the Taruzelian lands.

The sound of Taruzeli is rolling and full-voiced. Vowels come short or long, and a consonant doubled inside a word is held and pressed: _Sharrush_, _Zattuya_, _Ilammuni_. Stress falls on the second-last syllable, and a word never opens on two consonants.

## How to read the dictionary {#how-to-read-the-dictionary}

An entry gives the word as it is cited: a noun in its plain form, a verb in its _-am_ or _-ush_ form. A form that closes on a hyphen is a bound stem, which never stands alone. A word made of smaller parts names the stem and ending the form is made of, joined by `+`, and the form is exactly what the suffix table makes of them.

### Fields

```sql
SELECT name AS "Field", holds AS "What it holds"
FROM fields
WHERE language = 'thalorna-note-skill-taruzelilng'
ORDER BY position
```

## Sounds and spelling {#sounds-and-spelling}

Its words are written in the setting's one guide; see [[doc-prnncthlrn|Pronouncing Thalorna]].

Two vowels standing together are both said, one after the other.

### Word edges

A word opens on a vowel or a single consonant, and closes on a vowel or on one of the consonants below. A bound stem, written with a closing hyphen, closes on anything.

```sql
SELECT CASE edge WHEN 'closeConsonant' THEN 'Consonants that close a word' END AS "Edge", coalesce(nullif(array_to_string(list_transform(sounds, x -> '`' || x || '`'), ', '), ''), '—') AS "Sounds"
FROM edges WHERE language = 'thalorna-note-skill-taruzelilng' ORDER BY position
```

### Clusters

```sql
SELECT 'Most consonants together inside a word' AS "Rule", max AS "Count"
FROM clusters WHERE language = 'thalorna-note-skill-taruzelilng'
```

## Building words {#building-words}

Two moves make every built word on this page. **An ending on a stem:** the stem is bound, and each ending says what part the stem's act plays. **A name-ending on a root:** a person's name is a root with an ending the tongue keeps for names, and the family name is a root with a lineage ending; the endings stand under Making names.

### Suffixes

```sql
SELECT '`' || form || '`' AS "Suffix", attaches AS "Stem", gloss AS "Makes", coalesce(nullif(array_to_string(list_transform(examples, e -> regexp_replace(e, '^(\S+) > ([^\s,;]+)', '_\1_ > _\2_')), ', '), ''), '—') AS "Example"
FROM affixes
WHERE language = 'thalorna-note-skill-taruzelilng'
ORDER BY position
```

## Words {#words}

### The bargain and the word

A Taruzelian price is the end of a conversation, and the words show it. The seller opens with a _bashimush_ that nobody expects to stand; the buyer answers with a _niburush_, a refusal that opens the real talk; and a price is settled only when both sides leave the table with a _pashinu_, a fair one. What holds the result is a name: _mardu_, the credit of the person who gave his word. A hired notary writes the _telmush_, but the bond a Taruzeli trusts is the _qatush_, the thing a person holds fast to, and a guarantor is a _rumukum_ who stands for someone else.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-taruzelilng' AND field = 'The bargain and the word' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Reckoning, credit and debt

A Taruzeli cannot speak of money without saying who stands behind it. A debt is a _fusanush_ and the debtor a _fusanum_, but the third person in every loan is the _rumukum_, the surety, because a Taruzelian house lends against a name more readily than against a pledge. The words for profit and for justice come from the same stem family as the tide: _dammush_ is the sea giving and taking back, and _kurrim_ is the merchant's word for justice, the return of what is owed. A cheat is not a villain here but a person whose accounts have not come round.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-taruzelilng' AND field = 'Reckoning, credit and debt' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Hull, tide and knot

Taruzeli has a noun for every part of a ship that a captain must pay for, and a verb for every motion of the water that a captain must survive. The tide is a _visizush_ and a ship that works with it is _visizan_; a harbor, _besiku_, is named for what it does to the swell. A captain who owns his hull is a _jakudum_, the characteristic figure of the coast, and the word has no more to say of his debts than that he is a person with a hull. The sea itself is _mani_, one word and no endings, because it is the one thing that does not belong to anyone.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-taruzelilng' AND field = 'Hull, tide and knot' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### The house, the firm and the family

A Taruzelian does not separate the family from the firm, and the vocabulary never did. The word _taruzi_ means the houses of a line and the firms they keep, with no word to tell the two apart; _taruzuni_ is the whole company, kin and clerks and hired captains together. A marriage is a _teshudush_, a joining of two houses that is also a merger, and an heir is a _qizikum_ in the same breath as he is an apprentice and a hostage to the alliance. _Ilammu_, the honor of a house, is spoken of like a balance in the strongroom: something that can be spent, and that a careful house does not spend.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-taruzelilng' AND field = 'The house, the firm and the family' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Law, oath and the Confederation

Taruzeli law is the custom of the quay set down in writing, and the vocabulary for it comes from the quay. A _dapumush_ is an oath sworn before witnesses who have touched the clasped hands; a _khurutum_ is a judge, which in most harbors means a retired captain who has settled enough disputes to be believed; a _sazumush_ is a toll, and the person who keeps the gate is the nearest thing the coast has to a tax collector. _Zabuzu_, freedom, is the word the veterans of the war of independence use, and the root means to go unbound, which a Taruzelian understands as having no debts to the wrong creditor.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-taruzelilng' AND field = 'Law, oath and the Confederation' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Doing and being

Almost every Taruzeli verb has two faces. The root with _-am_ is the plain act, done as a matter of course: _kubasam_, he counts. The same root with _-ush_ is the act as it settles, or the thing it leaves behind: _yutalush_, a payment. An adjective is the root with _-an_, so a bargain is judged _lataran_ when it is honest, _lartan_ when it is dear and _temadan_ when the goods are sound; those three words do most of a trader's judging.

```sql
SELECT form AS "Form", class AS "Class", gloss AS "Gloss", built_text AS "Built from", coalesce(array_to_string(list_transform(attested, a -> '[[' || a || '|]]'), ', '), '—') AS "Attested"
FROM words
WHERE language = 'thalorna-note-skill-taruzelilng' AND field = 'Doing and being' AND split_part(class, ' ', 1) IN ('name', 'stem', 'pref')
ORDER BY position
```

### Grammar words

The particles are short because a Taruzeli sentence carries its weight in the roots and their endings. The article _tu_ stands before a noun and never changes; a negative goes before the verb it denies; the numbers are bare roots, which is how a clerk's tally reads.

## Making names {#making-names}

**A Taruzeli person** carries a given name and a family name, the given name first: [[being-zbzmjkdn|Zabuzum Jakuduni]] is Zabuzum of the house of the hull. A given name is a root with a personal ending. A man's closes on _-um_, _-ush_, _-an_ or _-u_, and the ending carries what the parents hope of him: _Khurutush_ is a dispute weighed and settled, _Tanadan_ is full of holding fast. A woman's closes on _-a_ or _-uya_, which run softer and carry fewer doubled consonants: _Belgina_, _Hushaduya_. A family name is a root with _-i_, _-uni_ or _-um_, and says whose firm a person belongs to; the root names the trade or the standing the house was founded on, so _Jakuduni_ is the company of the hull and _Qizikuni_ the company of the inheritance, houses that outlast any man in them. The name is also a credit line: a person's _mardu_ is the worth of the whole name said aloud, and a Taruzelian who changes either part of it has changed what a creditor can read.

Among friends a given name is cut to its stressed syllable with the vowel held long: _Zabuzum_ is _Bu_. A short name is used of a person already named in full, never in a contract.

**A place** is a root with _-un_, _-ar_, _-el_ or _-an_: _Sazumun_ is where the toll is levied, _Besikar_ where the harbor is kept, _Yamuzel_ the ground of the fleet, _Kudumel_ the ground of arrival. The land itself is _Taruzel_, the ground of the houses, built as `taruz-` + `-el`; its people and its tongue take the reader's endings, Taruzelian and Taruzeli.

**A house or a body** is named for its founder or its work, with the lineage ending: the _[Merazuni]{.name data-type="affiliation/governmental"}_, the Confederation's treasury, is the whole company of the ledger, built as `meraz-` + `-uni`. The _[[affiliation-vezakuni|Vezakuni]]_, the Council of the Guild-Wardens, is the whole company of the warding, `vezak-` + `-uni`, and its seat, the _[Vezakar]{.name data-type="place/site"}_, is where the warding is kept; its overseers are the _[Pazasuni]{.name data-type="affiliation"}_, the company of the lookouts. The [[affiliation-auricompct|Auric Compact]] is a banking cartel named in the reader's tongue for the gold it holds.

## Scope {#scope}

The register below holds every name of every note in the Taruzelian lands. A note is in the register when one of these values names it:

```sql
SELECT CASE kind WHEN 'folders' THEN 'folder' WHEN 'cultures' THEN 'culture' WHEN 'lore' THEN 'lore' WHEN 'parents' THEN 'parent' WHEN 'addresses' THEN 'address' END AS "Kind",
       string_agg('`' || CASE WHEN kind IN ('addresses', 'skip') THEN regexp_replace(value, '^thalorna-note-', '') WHEN kind IN ('paths', 'types') THEN value ELSE regexp_replace(value, '^thalorna-(?:note-[a-z]+-|none-folder-)', '') END || '`', ' ') AS "Value"
FROM scope WHERE language = 'thalorna-note-skill-taruzelilng'
GROUP BY kind ORDER BY CASE kind WHEN 'folders' THEN 0 WHEN 'cultures' THEN 1 WHEN 'lore' THEN 2 WHEN 'parents' THEN 3 WHEN 'addresses' THEN 4 END
```

## Attested names {#attested-names}

Every name the setting gives a person, place, polity or thing of the Taruzelian lands, with the note where it is met. A name built from this page shows how; a name the tongue uses that is not yet built from it shows `—`, and a name in the reader's tongue is listed so that the register is complete.

### Tongues

```sql
SELECT '`' || tag || '`' AS "Tongue", meaning || coalesce(CASE tag WHEN 'taruzeli' THEN ', [[' || tongue_language || '|Taruzeli Language]]' END, '') AS "Meaning"
FROM tongues WHERE language = 'thalorna-note-skill-taruzelilng' ORDER BY position
```

### Names

```sql
SELECT '**' || name || '**' AS "Name",
       coalesce(array_to_string(list_transform(notes, n -> '[[' || n || '|' || name || ']]'), ', '), '—') AS "Notes",
       '`' || tongue || '`' AS "Tongue",
       coalesce(array_to_string(list_transform(built, x -> '`' || x || '`'), ' + '), '—') AS "Built from"
FROM register WHERE language = 'thalorna-note-skill-taruzelilng' ORDER BY position
```

## Retired names {#retired-names}

A retired name is one the setting does not write: a name from Earth, or a name no Taruzeli root builds. Each stands below with the name written in its place, and no page writes it, however accented. A `terran_analog` comment names the Earth source on purpose.

```sql
SELECT '`' || form || '`' AS "Retired",
       coalesce(array_to_string(list_transform(instead, x -> '`' || x || '`'), ', '), '—') AS "Written instead",
       why AS "Why"
FROM retired WHERE language = 'thalorna-note-skill-taruzelilng' ORDER BY position
```
