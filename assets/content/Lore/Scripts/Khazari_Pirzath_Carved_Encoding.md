---
shortcode: khazpirzathcarvedenc
name: {full: Khazari Pirzath Carved Encoding, aliases: []}
type: doc
subType: reference
data:
  packFolder: languages
  language: khaz
  font: pirzath-carved
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
    o: O
    u: U
    p: PARGH
    b: BALG
    f: FARZ
    v: VAZAL
    m: MARP
    t: TAMB
    d: DALK
    n: NAZAF
    k: KAMV
    g: GAMTH
    s: SAKAR
    z: ZALD
    h: HALB
    l: LADHAV
    r: RAGHAV
    j: JA
    q: QA
    w: WA
    á: [A, LONG]
    é: [E, LONG]
    í: [I, LONG]
    ó: [O, LONG]
    ú: [U, LONG]
    "'": CATCH
    ’: CATCH
    th: THARZ
    dh: DHALZ
    kh: KHABAR
    gh: GHARM
    sh: SHA
    zh: ZHA
    ch: CHA
    ts: TSA
    ng: NGA
    ny: NYA
    hl: HLA
    ngh: [NAZAF, GHARM]
    tth: [THARZ, THARZ]
    ddh: [DHALZ, DHALZ]
    kkh: [KHABAR, KHABAR]
    ggh: [GHARM, GHARM]
    ssh: [SHA, SHA]
    zzh: [ZHA, ZHA]
    cch: [CHA, CHA]
    tts: [TSA, TSA]
    nng: [NGA, NGA]
    nny: [NYA, NYA]
    hhl: [HLA, HLA]
    nngh: [NAZAF, NAZAF, GHARM]
    ai: AI
    aí: [AI, LONG]
    ái: [AI, LONG]
    áí: [AI, LONG, LONG]
    au: AU
    aú: [AU, LONG]
    áu: [AU, LONG]
    áú: [AU, LONG, LONG]
    ei: EI
    ëi: EI
    eí: [EI, LONG]
    ëí: [EI, LONG]
    éi: [EI, LONG]
    éí: [EI, LONG, LONG]
    oi: OI
    oí: [OI, LONG]
    ói: [OI, LONG]
    óí: [OI, LONG, LONG]
    ou: OU
    oú: [OU, LONG]
    óu: [OU, LONG]
    óú: [OU, LONG, LONG]
    y: I
    "@": DIGIT_TEN
    "#": DIGIT_ELEVEN
    $: DIGIT_TWELVE
    "%": DIGIT_THIRTEEN
    "&": DIGIT_FIFTEEN
    "-": NAME_DASH
    ^: DIGIT_FOURTEEN
  rules:
    normalization: NFC
    matching: longest-first
    roundTrip: canonical
    contextual-mappings:
      - {match: ay, before: consonant, emit: AI}
      - {match: ay, at: end, emit: AI}
      - {match: áy, before: consonant, emit: [AI, LONG]}
      - {match: áy, at: end, emit: [AI, LONG]}
      - {match: ey, before: consonant, emit: EI}
      - {match: ëy, before: consonant, emit: EI}
      - {match: ey, at: end, emit: EI}
      - {match: ëy, at: end, emit: EI}
      - {match: éy, before: consonant, emit: [EI, LONG]}
      - {match: éy, at: end, emit: [EI, LONG]}
      - {match: oy, before: consonant, emit: OI}
      - {match: oy, at: end, emit: OI}
      - {match: óy, before: consonant, emit: [OI, LONG]}
      - {match: óy, at: end, emit: [OI, LONG]}
      - {match: y, before: vowel, emit: YA}
---

This encoding writes [[skill-khazarlng|Khazari]] in pirzath-carved. A passage selects it with `enc=khazpirzathcarvedenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## From the Spelling Guide to Pirzath

- **The script has one case.** Its Roman spelling is lowercase.
- **The digraphs are letters:** _th_, _dh_, _kh_, _gh_, _sh_, _zh_, _ch_, _ts_, _ng_, _ny_ and _hl_. _ngh_ is _n_ and _gh_.
- **A digraph with its first letter doubled** (_tth_, _ssh_, _nng_) is the digraph twice, which the faces draw as the doubled form.
- **A consonant written twice** is two letters, which the faces draw as the doubled form.
- **An acute vowel is the vowel and the length mark.**
- **The vowel pairs are letters:** _ai_, _au_, _ei_, _oi_ and _ou_, carrying the length mark of either vowel. _ay_, _ey_ and _oy_ are the pairs _ai_, _ei_ and _oi_, except before a vowel.
- **_y_ before a vowel is the glide _y_**, and anywhere else the vowel _i_.
- **_ë_ is the vowel _e_.**
- **The catch** is `'` or `’`.
- **The numerals count in sixteens:** 0 to 9, then `@`, `#`, `$`, `%`, `^` and `&` for ten to fifteen.

- **Quotation marks:** `«` and `»` enclose an outer quotation; `‹` and `›` enclose a quotation inside it. These marks follow the shared Roman standard.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
