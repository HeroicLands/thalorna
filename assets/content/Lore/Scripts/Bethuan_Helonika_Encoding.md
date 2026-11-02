---
shortcode: bethhelonikaenc
name: {full: Bethuan Helonika Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: beth
  font: helonika-book
  vowels: aeiouäëïöüáéíóúAEIOUÄËÏÖÜÁÉÍÓÚ
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
    a: A_MIN
    A: A_MAJ
    ä: A_MIN
    Ä: A_MAJ
    b: B_MIN
    B: B_MAJ
    d: D_MIN
    D: D_MAJ
    e: E_MIN
    E: E_MAJ
    ë: E_MIN
    Ë: E_MAJ
    f: F_MIN
    F: F_MAJ
    g: G_MIN
    G: G_MAJ
    h: H_MIN
    H: H_MAJ
    i: I_MIN
    I: I_MAJ
    ï: I_MIN
    Ï: I_MAJ
    j: J_MIN
    J: J_MAJ
    k: K_MIN
    K: K_MAJ
    l: L_MIN
    L: L_MAJ
    m: M_MIN
    M: M_MAJ
    n: N_MIN
    N: N_MAJ
    o: O_MIN
    O: O_MAJ
    ö: O_MIN
    Ö: O_MAJ
    p: P_MIN
    P: P_MAJ
    r: R_MIN
    R: R_MAJ
    s: S_MIN
    S: S_MAJ
    t: T_MIN
    T: T_MAJ
    u: U_MIN
    U: U_MAJ
    ü: U_MIN
    Ü: U_MAJ
    v: V_MIN
    V: V_MAJ
    z: Z_MIN
    Z: Z_MAJ
    q: K_MIN
    Q: K_MAJ
    y: I_MIN
    Y: I_MAJ
    w: U_MIN
    W: U_MAJ
    th: TH_MIN
    tH: TH_MIN
    Th: TH_MAJ
    TH: TH_MAJ
    ph: F_MIN
    pH: F_MIN
    Ph: F_MAJ
    PH: F_MAJ
    ch: [T_MIN, S_MIN, H_MIN]
    cH: [T_MIN, S_MIN, H_MIN]
    Ch: [T_MAJ, S_MIN, H_MIN]
    CH: [T_MAJ, S_MIN, H_MIN]
    –: []
    "-": []
    á: [A_MIN, ACCENT]
    é: [E_MIN, ACCENT]
    í: [I_MIN, ACCENT]
    ó: [O_MIN, ACCENT]
    ú: [U_MIN, ACCENT]
    Á: [A_MAJ, ACCENT]
    É: [E_MAJ, ACCENT]
    Í: [I_MAJ, ACCENT]
    Ó: [O_MAJ, ACCENT]
    Ú: [U_MAJ, ACCENT]
    kh: KH_MIN
    kH: KH_MIN
    Kh: KH_MAJ
    KH: KH_MAJ
    aa: LONG_A_MIN
    aA: LONG_A_MIN
    Aa: LONG_A_MAJ
    AA: LONG_A_MAJ
    ii: LONG_I_MIN
    iI: LONG_I_MIN
    Ii: LONG_I_MAJ
    II: LONG_I_MAJ
    uu: LONG_U_MIN
    uU: LONG_U_MIN
    Uu: LONG_U_MAJ
    UU: LONG_U_MAJ
    ei: LONG_E_MIN
    eI: LONG_E_MIN
    Ei: LONG_E_MAJ
    EI: LONG_E_MAJ
    eí: [LONG_E_MIN, ACCENT]
    eÍ: [LONG_E_MIN, ACCENT]
    Eí: [LONG_E_MAJ, ACCENT]
    EÍ: [LONG_E_MAJ, ACCENT]
    éi: [LONG_E_MIN, ACCENT]
    éI: [LONG_E_MIN, ACCENT]
    Éi: [LONG_E_MAJ, ACCENT]
    ÉI: [LONG_E_MAJ, ACCENT]
    éí: [LONG_E_MIN, ACCENT]
    éÍ: [LONG_E_MIN, ACCENT]
    Éí: [LONG_E_MAJ, ACCENT]
    ÉÍ: [LONG_E_MAJ, ACCENT]
    ou: LONG_O_MIN
    oU: LONG_O_MIN
    Ou: LONG_O_MAJ
    OU: LONG_O_MAJ
    oú: [LONG_O_MIN, ACCENT]
    oÚ: [LONG_O_MIN, ACCENT]
    Oú: [LONG_O_MAJ, ACCENT]
    OÚ: [LONG_O_MAJ, ACCENT]
    óu: [LONG_O_MIN, ACCENT]
    óU: [LONG_O_MIN, ACCENT]
    Óu: [LONG_O_MAJ, ACCENT]
    ÓU: [LONG_O_MAJ, ACCENT]
    óú: [LONG_O_MIN, ACCENT]
    óÚ: [LONG_O_MIN, ACCENT]
    Óú: [LONG_O_MAJ, ACCENT]
    ÓÚ: [LONG_O_MAJ, ACCENT]
    §: REGISTER
  rules: {normalization: NFC, matching: longest-first, roundTrip: canonical}
---

This encoding writes [[skill-bethunlng|Bethuan]] in helonika-book. A passage selects it with `enc=bethhelonikaenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## From the Spelling Guide to the Helónika

- **_kh_ is one letter**, the aspirate letter that Bethuan writes where Helonic writes _k_ and _h_. _Zh_ is _z_ and _h_.
- **_ei_ is the long _e_ and _ou_ the long _o_**, letters of their own.
- **A doubled _aa_, _ii_ or _uu_ is the barred vowel**, one letter with a bar over it.
- **An acute vowel is the vowel followed by the accent**, which Bethuan writes for pitch. An accented _ei_ or _ou_ is the long vowel followed by the accent.
- **A diaeresis vowel is the plain vowel**, so it never joins the vowel before it into _ē_ or _ō_.
- **`§` is the register-mark**, the sign of a turn between the masculine and feminine registers.
- **The other letters, the raised dot and the numerals are those of the Helónika Spelling**, as are its capitals: a capital is written only on a name and on the paragraph's first word.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
