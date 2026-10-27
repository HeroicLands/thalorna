---
shortcode: vedyvedyaksharaenc
name: {full: Vedyari Vedyakshara Encoding, aliases: []}
type: doc
subType: reference
data:
  packFolder: languages
  language: vedy
  font: vedyakshara-classical
  vowels: aeiouáéíóú
  mappings:
    "0": DIGIT_ZERO
    "1": DIGIT_ONE
    "2": DIGIT_TWO
    "3": DIGIT_THREE
    "4": DIGIT_FOUR
    "5": DIGIT_FIVE
    "6": DIGIT_SIX
    "7": DIGIT_SEVEN
    "8": DIGIT_EIGHT
    "9": DIGIT_NINE
    k: [KA, CUT]
    kh: [KHA, CUT]
    g: [GA, CUT]
    gh: [GHA, CUT]
    ng: [NGA, CUT]
    ch: [CHA, CUT]
    j: [JA, CUT]
    ny: [NYA, CUT]
    t: [TA, CUT]
    d: [DA, CUT]
    n: [NA, CUT]
    p: [PA, CUT]
    b: [BA, CUT]
    bh: [BHA, CUT]
    m: [MA, CUT]
    y: [YA, CUT]
    r: [RA, CUT]
    l: [LA, CUT]
    v: [VA, CUT]
    sh: [SHA, CUT]
    s: [SA, CUT]
    h: [HA, CUT]
    f: [PA, SOFT_DOT, CUT]
    a: []
    i: SIGN_I
    u: SIGN_U
    e: SIGN_E
    o: SIGN_O
    ai: SIGN_AI
    au: SIGN_AU
    á: []
    é: SIGN_E
    í: SIGN_I
    ó: SIGN_O
    ú: SIGN_U
    ui: [SIGN_U, I]
    uí: [SIGN_U, I]
    ii: [SIGN_I, I]
    ií: [SIGN_I, I]
    ei: [SIGN_E, I]
    eí: [SIGN_E, I]
    oi: [SIGN_O, I]
    oí: [SIGN_O, I]
    aui: [SIGN_AU, I]
    auí: [SIGN_AU, I]
    aii: [SIGN_AI, I]
    aií: [SIGN_AI, I]
    "-": []
    "'": CUT
    ’: CUT
  rules:
    normalization: NFC
    matching: longest-first
    roundTrip: canonical
    contextual-mappings:
      - {match: k, before: vowel, emit: KA}
      - {match: kh, before: vowel, emit: KHA}
      - {match: g, before: vowel, emit: GA}
      - {match: gh, before: vowel, emit: GHA}
      - {match: ng, before: vowel, emit: NGA}
      - {match: ch, before: vowel, emit: CHA}
      - {match: j, before: vowel, emit: JA}
      - {match: ny, before: vowel, emit: NYA}
      - {match: t, before: vowel, emit: TA}
      - {match: d, before: vowel, emit: DA}
      - {match: n, before: vowel, emit: NA}
      - {match: p, before: vowel, emit: PA}
      - {match: b, before: vowel, emit: BA}
      - {match: bh, before: vowel, emit: BHA}
      - {match: m, before: vowel, emit: MA}
      - {match: y, before: vowel, emit: YA}
      - {match: r, before: vowel, emit: RA}
      - {match: l, before: vowel, emit: LA}
      - {match: v, before: vowel, emit: VA}
      - {match: sh, before: vowel, emit: SHA}
      - {match: s, before: vowel, emit: SA}
      - {match: h, before: vowel, emit: HA}
      - {match: f, before: vowel, emit: [PA, SOFT_DOT]}
      - {match: a, at: start, emit: A}
      - {match: i, at: start, emit: I}
      - {match: u, at: start, emit: U}
      - {match: e, at: start, emit: E}
      - {match: o, at: start, emit: O}
      - {match: ai, at: start, emit: AI}
      - {match: au, at: start, emit: AU}
      - {match: á, at: start, emit: A}
      - {match: é, at: start, emit: E}
      - {match: í, at: start, emit: I}
      - {match: ó, at: start, emit: O}
      - {match: ú, at: start, emit: U}
      - {match: ui, at: start, emit: [U, I]}
      - {match: uí, at: start, emit: [U, I]}
      - {match: ii, at: start, emit: [I, I]}
      - {match: ií, at: start, emit: [I, I]}
      - {match: ei, at: start, emit: [E, I]}
      - {match: eí, at: start, emit: [E, I]}
      - {match: oi, at: start, emit: [O, I]}
      - {match: oí, at: start, emit: [O, I]}
      - {match: aui, at: start, emit: [AU, I]}
      - {match: auí, at: start, emit: [AU, I]}
      - {match: aii, at: start, emit: [AI, I]}
      - {match: aií, at: start, emit: [AI, I]}
---

This encoding writes [[skill-vedyarlng|Vedyari]] in vedyakshara-classical. A passage selects it with `enc=vedyvedyaksharaenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## From the Spelling Guide to the Vedyakshara

The Vedyakshara writes syllables. Each consonant sign carries the vowel _a_, and every other vowel is a sign set on the consonant it follows.

- **Each consonant is its sign**, and its Roman spelling is lowercase. _kh_, _gh_, _ng_, _ch_, _ny_, _bh_ and _sh_ are one sign each.
- **A consonant before a vowel is its sign alone.** _a_ after a consonant writes nothing, since the sign already carries it.
- **_i_, _e_, _ai_, _u_, _o_ and _au_ after a consonant are vowel signs**: a flag above the headline for _i_, _e_ and _ai_, a hook below the sign for _u_, _o_ and _au_.
- **A vowel at the start of a word is its own sign**, independently of a preceding consonant.
- **An _i_ after another vowel is its own sign**, since a consonant carries only one vowel sign: _ritrui_ writes _ri_, _tru_ and an independent _i_.
- **An acute marks stress in the roman** and is not written: _á_ is written as _a_, _í_ as _i_, and so on.
- **A consonant with no vowel after it takes the cut.** Before another consonant the face draws it as its half form, joined to the next sign, or, for the commonest pairs, as one fused sign; before _r_ it draws the _r_ as a foot under the sign; at the end of a word it draws the final form, the headline turned down.
- **An apostrophe (`'` or `’`) is the cut** wherever it stands, so the cut can be written by hand.
- **_f_ is _pa_ with the soft dot.**
- **A hyphen writes nothing**, so a compound is written solid, and questions and commands use the shared Roman punctuation.

- **The numerals** 0 to 9 are the Vedyakshara digits.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
