---
shortcode: dunhqalezuenc
name: {full: Dunhari Qalezu Encoding, aliases: []}
type: doc
subType: reference
data:
  packFolder: languages
  language: dunh
  font: qalezu-hand
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
    l: LAGUN
    r: RETHU
    t: TULAZ
    d: DURAS
    z: ZAGUL
    s: SELQUR
    g: GITHAR
    k: KA
    n: NELGIR
    m: MELNU
    q: QENUWA
    h: HALZI
    p: PA
    b: BA
    f: FA
    v: FA
    w: WALIR
    y: YA
    th: THELQEN
    sh: SHENULET
    kh: KHA
    gh: GHA
    ch: TJA
    j: TJA
    tj: TJA
    ll: LAGUN_DBL
    rr: RETHU_DBL
    tt: TULAZ_DBL
    dd: DURAS_DBL
    zz: ZAGUL_DBL
    ss: SELQUR_DBL
    gg: GITHAR_DBL
    kk: KA_DBL
    nn: NELGIR_DBL
    mm: MELNU_DBL
    qq: QENUWA_DBL
    hh: HALZI_DBL
    pp: PA_DBL
    bb: BA_DBL
    ff: FA_DBL
    fv: FA_DBL
    vf: FA_DBL
    vv: FA_DBL
    ww: WALIR_DBL
    yy: YA_DBL
    tth: THELQEN_DBL
    ssh: SHENULET_DBL
    kkh: KHA_DBL
    ggh: GHA_DBL
    cch: TJA_DBL
    jj: TJA_DBL
    ttj: TJA_DBL
    thth: THELQEN_DBL
    shsh: SHENULET_DBL
    khkh: KHA_DBL
    ghgh: GHA_DBL
    chch: TJA_DBL
    jch: TJA_DBL
    chj: TJA_DBL
    chtj: TJA_DBL
    jtj: TJA_DBL
    tjch: TJA_DBL
    tjj: TJA_DBL
    tjtj: TJA_DBL
    ttth: [TULAZ, THELQEN_DBL]
    sssh: [SELQUR, SHENULET_DBL]
    kkkh: [KA, KHA_DBL]
    gggh: [GITHAR, GHA_DBL]
    tttj: [TULAZ, TJA_DBL]
    a: []
    e: []
    ë: []
    i: []
    o: []
    u: []
    á: []
    é: []
    í: []
    ó: []
    ú: []
    "'": CATCH
    "'a": CATCH
    "'e": CATCH
    "'ë": CATCH
    "'i": CATCH
    "'o": CATCH
    "'u": CATCH
    "'á": CATCH
    "'é": CATCH
    "'í": CATCH
    "'ó": CATCH
    "'ú": CATCH
    ’: CATCH
    ’a: CATCH
    ’e: CATCH
    ’ë: CATCH
    ’i: CATCH
    ’o: CATCH
    ’u: CATCH
    ’á: CATCH
    ’é: CATCH
    ’í: CATCH
    ’ó: CATCH
    ’ú: CATCH
    ·: VERSE
  rules:
    normalization: NFC
    matching: longest-first
    roundTrip: canonical
    contextual-mappings:
      - {match: a, at: start, emit: CATCH}
      - {match: e, at: start, emit: CATCH}
      - {match: ë, at: start, emit: CATCH}
      - {match: i, at: start, emit: CATCH}
      - {match: o, at: start, emit: CATCH}
      - {match: u, at: start, emit: CATCH}
      - {match: á, at: start, emit: CATCH}
      - {match: é, at: start, emit: CATCH}
      - {match: í, at: start, emit: CATCH}
      - {match: ó, at: start, emit: CATCH}
      - {match: ú, at: start, emit: CATCH}
      - {match: "-", at: end, emit: []}
    word-separators: ["-"]
---

This encoding writes [[skill-dunharlng|Dunhari]] in qalezu-hand. A passage selects it with `enc=dunhqalezuenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## From the Spelling Guide to Qalezu

Qalezu writes consonants. A reader supplies the vowels from the word.

- **Each consonant is its sign**, and its Roman spelling is lowercase.
- **The digraphs are one sign each:** _th_, _sh_, _kh_ and _gh_, and _ch_ and _tj_, which are the same sign. _j_ is that sign too.
- **_v_ is the sign of _f_**, and **_ë_ is the vowel _e_**.
- **A consonant written twice** with no vowel between is that sign's doubled form, and so is a letter doubled before a digraph that begins with it (_tth_).
- **A vowel is not written**, and neither is the acute that marks its stress in the roman, except at the start of a word, where it is the catch.
- **The catch** is `'` or `’`.
- **A catch before a sign** is that sign's catch-before form, three reed dabs in a triangle over the sign. This holds with one unwritten vowel between them as well, before a single sign or a digraph, as in _Qe'aret_. Any other catch stands alone.
- **A hyphen is a word space**, and at the end of a word it writes nothing, as in the prefix _Gar-_.
- **The numerals** 0 to 9, the full stop, comma and middle dot are signs of their own. The middle dot marks the end of a verse unit, distinct from the ordinary full stop and comma.

Qalezu Hand draws each doubled form as a character of its own, so the rows write it. The rows write a catch as the catch and a sign as itself, and the face draws a catch and the sign after it as the catch-before form.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
