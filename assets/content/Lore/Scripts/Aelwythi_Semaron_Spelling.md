---
shortcode: aelwsemaronenc
name:
  full: Aelwythi Semaron Encoding
  aliases: []
type: doc
subType: reference
data:
  packFolder: languages
  language: aelw
  font: semaron-kuriale
  accepts:
    - a-w
    - y-z
    - A-W
    - Y-Z
    - 0-9
    - á
    - é
    - í
    - ó
    - ú
    - Á
    - É
    - Í
    - Ó
    - Ú
  vowels: aeiouAEIOUáéíóúÁÉÍÓÚ
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
    a: ANKRON_MIN
    A: ANKRON_MAJ
    e: ELZA_MIN
    E: ELZA_MAJ
    i: ILTHERA_MIN
    I: ILTHERA_MAJ
    o: ORNETHE_MIN
    O: ORNETHE_MAJ
    u: ULMERA_MIN
    U: ULMERA_MAJ
    b: BRUTHEKA_MIN
    B: BRUTHEKA_MAJ
    d: DEKAZU_MIN
    D: DEKAZU_MAJ
    f: FUNELA_MIN
    F: FUNELA_MAJ
    g: GULMOS_MIN
    G: GULMOS_MAJ
    h: HARLEN_MIN
    H: HARLEN_MAJ
    j: JA_MIN
    J: JA_MAJ
    k: KALPEZA_MIN
    K: KALPEZA_MAJ
    l: LIZELA_MIN
    L: LIZELA_MAJ
    m: MEZARA_MIN
    M: MEZARA_MAJ
    n: NELAMIS_MIN
    N: NELAMIS_MAJ
    p: POZERA_MIN
    P: POZERA_MAJ
    q: QORETHA_MIN
    Q: QORETHA_MAJ
    r: RONETHOS_MIN
    R: RONETHOS_MAJ
    s: SIRETHA_MIN
    S: SIRETHA_MAJ
    t: TALOTHOS_MIN
    T: TALOTHOS_MAJ
    v: VARTHOS_MIN
    V: VARTHOS_MAJ
    w: WA_MIN
    W: WA_MAJ
    y: YALZEMIS_MIN
    Y: YALZEMIS_MAJ
    z: ZARGON_MIN
    Z: ZARGON_MAJ
    ch: CHEROLA_MIN
    Ch: CHEROLA_MAJ
    sh: SHELMORA_MIN
    Sh: SHELMORA_MAJ
    th: THOLERA_MIN
    Th: THOLERA_MAJ
    dh: DHANETHE_MIN
    Dh: DHANETHE_MAJ
    kh: KHORVENA_MIN
    Kh: KHORVENA_MAJ
    gh: GHORMAS_MIN
    Gh: GHORMAS_MAJ
    zh: ZHAREVA_MIN
    Zh: ZHAREVA_MAJ
    ts: TSALEMA_MIN
    Ts: TSALEMA_MAJ
    ng: ENGARIS_MIN
    Ng: ENGARIS_MAJ
    .: POINT
    á:
      - ANKRON_MIN
      - STRESS
    é:
      - ELZA_MIN
      - STRESS
    í:
      - ILTHERA_MIN
      - STRESS
    ó:
      - ORNETHE_MIN
      - STRESS
    ú:
      - ULMERA_MIN
      - STRESS
    Á:
      - ANKRON_MAJ
      - STRESS
    É:
      - ELZA_MAJ
      - STRESS
    Í:
      - ILTHERA_MAJ
      - STRESS
    Ó:
      - ORNETHE_MAJ
      - STRESS
    Ú:
      - ULMERA_MAJ
      - STRESS
  rules:
    normalization: NFC
    matching: longest-first
    case:
      single-letter: preserve
      consonant-group: lowercase-or-initial-uppercase
      other-group-cases: forbidden
    stress:
      modifier: STRESS
      position: after-stressed-vowel
      printing: false
      effect: stress-only
      changes-sound: false
      changes-length: false
      vowel-group-position: first-vowel
    vowel-groups:
      reading: established
      allow-splitting: false
      unrecognized-adjacent-vowels: separate
      groups:
        - ai
        - au
        - ei
        - oi
        - ou
        - ae
        - ie
        - uo
        - aa
        - ii
        - uu
    diaeresis:
      allowed: false
    contextual-mappings:
      - match: ny
        before: vowel
        emit: NYELIS_MIN
      - match: Ny
        before: vowel
        emit: NYELIS_MAJ
    y:
      kind: consonant
      sound: y in yes
      vowel-reading: false
    grave-accent:
      allowed: false
---

Aelwythi is written in [[skill-semrnscrpt|Semaron]], in the Kuriale hand.
This encoding writes [[skill-aelwthlng|Aelwythi]] Roman spelling. The [[skill-aelwthlng#pronunciation|language note]] defines its pronunciation,
grammar and words.

## Letters and groups

Single letters retain their case. A consonant group is lowercase, as in ch,
or initial-uppercase, as in Ch. CH and cH are illegal. Consonant groups take
their own signs: ch CHEROLA, sh SHELMORA, th THOLERA, dh DHANETHE,
kh KHORVENA, gh GHORMAS, zh ZHAREVA, ts TSALEMA and ng ENGARIS.
The letter q takes QORETHA; qu remains q followed by u. The vowel i takes
ILTHERA and k takes KALPEZA, in both their majuscule and minuscule forms.
A doubled vowel remains two letters.

The letter y is always a consonant, YALZEMIS, with the sound in yes.
Before a vowel, ny takes NYELIS, the sound in canyon. Elsewhere n and y
retain their individual signs. Write i for the vowel in machine.

Aelwythi has no x, and c occurs only in ch. Its English-derived words use
the respellings specified in the language note. Word lookup ignores case;
encoding preserves the spelling's case. No word-specific native writing is
stored or inferred by this encoding.

## Stress and vowels

An acute marks stress only. Each acute vowel writes its base vowel followed
by the font's non-printing STRESS modifier. It changes neither sound nor
length. In a recognized vowel group, the acute belongs on its first vowel.
The listed groups retain their established readings; other adjacent vowels
are sounded separately. Neither diaeresis nor grave accents are used.

## Word spelling

Possessives are written with -es and no apostrophe, as kinges. Other elisions
omit the apostrophe, as oer. Compounds are either joined, as kandlelight, or
separate words, as sweet smelling. There are no apostrophe or hyphen mappings.

## Punctuation and literal characters

The shared Roman punctuation standard applies. Period writes POINT; the
imperative is ‼ and the exclamative is !. Verse line, stanza and canto
boundaries are structural controls. Their written forms and effects follow
the shared standard.

A literal native character uses a glyph code between ⟦ and ⟧, such as
⟦CHEROLA_MIN⟧, or a Unicode code point such as ⟦U+F028C⟧. Codes belong to
the selected font. Their authoritative table is the Semaron Kuriale entry in
the fonts package's fonts.json; this note refers to that table through its
font field and does not copy it. CATCH is the font's catch at
`\U000F0270`; it is separate from ordinary Roman punctuation.

The frontmatter mappings name font glyph codes. A sequence, as for an acute
vowel, emits its codes in order. The rules apply NFC, longest matching,
consonant-group case, contextual ny, stress and the listed vowel groups.
