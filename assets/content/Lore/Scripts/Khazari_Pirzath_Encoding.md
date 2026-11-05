---
shortcode: khazpirzathenc
name: {full: Khazari Pirzath Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: khaz
  font: pirzath-hand
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
    á: A
    é: E
    í: I
    ó: O
    ú: U
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
    aa: [A, LONG]
    áa: [A, LONG]
    ii: [I, LONG]
    íi: [I, LONG]
    uu: [U, LONG]
    úu: [U, LONG]
    aá: [A, A]
    ií: [I, I]
    uú: [U, U]
    aí: [A, I]
    aú: [A, U]
    eí: [E, I]
    oí: [O, I]
    oú: [O, U]
    ai: AI
    ái: AI
    au: AU
    áu: AU
    ei: EI
    ëi: EI
    éi: EI
    oi: OI
    ói: OI
    ou: OU
    óu: OU
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
      - {match: áy, before: consonant, emit: AI}
      - {match: áy, at: end, emit: AI}
      - {match: ey, before: consonant, emit: EI}
      - {match: ëy, before: consonant, emit: EI}
      - {match: ey, at: end, emit: EI}
      - {match: ëy, at: end, emit: EI}
      - {match: éy, before: consonant, emit: EI}
      - {match: éy, at: end, emit: EI}
      - {match: oy, before: consonant, emit: OI}
      - {match: oy, at: end, emit: OI}
      - {match: óy, before: consonant, emit: OI}
      - {match: óy, at: end, emit: OI}
      - {match: y, before: vowel, emit: YA}
---

This encoding writes [[skill-khazarlng|Khazari]] in pirzath-hand. A passage selects it with `enc=khazpirzathenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## From the Spelling Guide to Pirzath

- **The script has one case.** Its Roman spelling is lowercase.
- **The digraphs are letters:** _th_, _dh_, _kh_, _gh_, _sh_, _zh_, _ch_, _ts_, _ng_, _ny_ and _hl_. _ngh_ is _n_ and _gh_.
- **A digraph with its first letter doubled** (_tth_, _ssh_, _nng_) is the digraph twice, which the faces draw as the doubled form.
- **A consonant written twice** is two letters, which the faces draw as the doubled form.
- **An acute vowel is the plain vowel.** The acute marks stress, which Pirzath does not write.
- **A doubled _aa_, _ii_ or _uu_ is the held vowel**, the vowel and the length mark.
- **The vowel pairs are letters:** _ai_, _au_, _ei_, _oi_ and _ou_. An acute on a pair's first letter is the plain pair; on its second letter it starts a syllable there, as [[doc-prnncthlrn|Pronouncing Thalorna]] reads it, so _aí_ is _a_ and then _i_. _ay_, _ey_ and _oy_ are the pairs _ai_, _ei_ and _oi_, except before a vowel.
- **_y_ before a vowel is the glide _y_**, and anywhere else the vowel _i_.
- **_ë_ is the vowel _e_.**
- **The catch** is `'` or `’`.
- **The numerals count in sixteens:** 0 to 9, then `@`, `#`, `$`, `%`, `^` and `&` for ten to fifteen.

- **Quotation marks:** `«` and `»` enclose an outer quotation; `‹` and `›` enclose a quotation inside it. These marks follow the shared Roman standard.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
