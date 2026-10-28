---
shortcode: nordthuravarkenc
name: {full: Nordmal Thuravark Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: nord
  font: thuravark-carved
  vowels: aeiouëáéíóú
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
    a: A
    e: E
    ë: E
    i: I
    o: ODEL
    u: U
    b: BRELD
    d: DRESK
    f: FOSK
    g: GELDRA
    h: HVELM
    j: JA
    k: KNERV
    q: KNERV
    l: LA
    m: MERV
    n: NELTH
    p: PA
    r: RELTH
    s: SVELD
    t: TING
    v: VULD
    w: WA
    z: ZA
    á: [A, ACUTE]
    é: [E, ACUTE]
    í: [I, ACUTE]
    ó: [ODEL, ACUTE]
    ú: [U, ACUTE]
    th: THRESK
    dh: DHA
    kh: KHA
    gh: GHA
    ng: NGA
    hl: HLA
    ngh: [NELTH, GHA]
    tth: [THRESK, THRESK]
    ddh: [DHA, DHA]
    kkh: [KHA, KHA]
    ggh: [GHA, GHA]
    nng: [NGA, NGA]
    hhl: [HLA, HLA]
    nngh: [NELTH, NELTH, GHA]
    y: I
    "-": []
  rules:
    normalization: NFC
    matching: longest-first
    roundTrip: canonical
    contextual-mappings: [{match: y, before: vowel, emit: JA}]
---

This encoding writes [[skill-nordmalng|Nordmal]] in thuravark-carved. A passage selects it with `enc=nordthuravarkenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## From the Spelling Guide to Thuravark

- **The script has one case.** Its Roman spelling is lowercase.
- **The digraphs are staves:** _th_, _dh_, _kh_, _gh_, _ng_ and _hl_. _ngh_ is _n_ and _gh_.
- **A digraph with its first letter doubled** (_tth_, _nng_) is the digraph stave twice. A doubled consonant or vowel is its stave twice.
- **An acute vowel is the vowel and the acute mark**, which the face draws as the stave twice.
- **_y_ before a vowel is the glide _j_**, and anywhere else the vowel _i_.

- **_q_ is the stave _k_**, and **_ë_ is the vowel _e_.** The script has no _q_ or _ë_.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
