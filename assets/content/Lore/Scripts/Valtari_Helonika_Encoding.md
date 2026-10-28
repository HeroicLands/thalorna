---
shortcode: valthelonikaenc
name: {full: Valtari Helonika Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: valt
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
    á: A_MIN
    Á: A_MAJ
    ä: A_MIN
    Ä: A_MAJ
    b: B_MIN
    B: B_MAJ
    d: D_MIN
    D: D_MAJ
    e: E_MIN
    E: E_MAJ
    é: E_MIN
    É: E_MAJ
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
    í: I_MIN
    Í: I_MAJ
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
    ó: O_MIN
    Ó: O_MAJ
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
    ú: U_MIN
    Ú: U_MAJ
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
    ei: LONG_E_MIN
    eí: LONG_E_MIN
    eI: LONG_E_MIN
    eÍ: LONG_E_MIN
    éi: LONG_E_MIN
    éí: LONG_E_MIN
    éI: LONG_E_MIN
    éÍ: LONG_E_MIN
    Ei: LONG_E_MAJ
    Eí: LONG_E_MAJ
    EI: LONG_E_MAJ
    EÍ: LONG_E_MAJ
    Éi: LONG_E_MAJ
    Éí: LONG_E_MAJ
    ÉI: LONG_E_MAJ
    ÉÍ: LONG_E_MAJ
    ou: LONG_O_MIN
    oú: LONG_O_MIN
    oU: LONG_O_MIN
    oÚ: LONG_O_MIN
    óu: LONG_O_MIN
    óú: LONG_O_MIN
    óU: LONG_O_MIN
    óÚ: LONG_O_MIN
    Ou: LONG_O_MAJ
    Oú: LONG_O_MAJ
    OU: LONG_O_MAJ
    OÚ: LONG_O_MAJ
    Óu: LONG_O_MAJ
    Óú: LONG_O_MAJ
    ÓU: LONG_O_MAJ
    ÓÚ: LONG_O_MAJ
    –: []
    "-": []
  rules: {normalization: NFC, matching: longest-first, roundTrip: canonical}
---

This encoding writes [[skill-valtarlng|Valtari]] in helonika-book. A passage selects it with `enc=valthelonikaenc`. The note supplies its language and font. Roman word spaces are retained. Decoding returns a conventional spelling where spellings share a sign.

## From the Spelling Guide to the Helónika

- **Each letter is its own.** A small letter is the minuscule and a capital the majuscule.
- **_th_ is one letter.** _Th_ and _TH_ are its majuscule.
- **_ei_ is the long _e_ and _ou_ the long _o_**, letters of their own. The first letter's case picks the minuscule or the majuscule.
- **The other aspirates are a stop and _h_.** _kh_ is written _k_, _h_; _gh_, _dh_ and _rh_ in the same way, and _sh_ and _zh_ as _s_, _h_ and _z_, _h_.
- **_ch_ is three letters.** The script has no _c_, so _ch_ is written _t_, _s_, _h_.
- **_ph_ is the letter _f_.**
- **_y_ is the letter _i_ and _w_ the letter _u_**, as glides and as vowels alike.
- **An acute vowel is the plain vowel.** Helonic writes no accent.
- **A diaeresis vowel is the plain vowel**, so it never joins the vowel before it into _ē_ or _ō_.
- **A doubled vowel is two letters.** Helonic writes no length.
- **_q_ is the letter _k_.** The script has no _q_.

- **The numerals** 0 to 9 are the Helónika digits.
- **Capitals are the author's.** A capital is written as the majuscule. Write a Helónika passage with a capital only on a name and on the paragraph's first word; the roman transcription beside it keeps the capitals of ordinary writing.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
