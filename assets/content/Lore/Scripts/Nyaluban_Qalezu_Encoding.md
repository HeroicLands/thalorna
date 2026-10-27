---
shortcode: nyalqalezuenc
name: {full: Nyáluban Qalezu Encoding, aliases: []}
type: doc
subType: reference
data:
  packFolder: languages
  language: nyal
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

This encoding writes [[skill-nyalbnlng|Nyáluban]] in Qalezu Hand. A passage selects it with `enc=nyalqalezuenc`. Its lowercase Roman spelling follows the Qalezu letter and word-boundary conventions. A vowel is not written, and neither is the acute that marks its stress in the roman, except at the start of a word, where it is the catch.
