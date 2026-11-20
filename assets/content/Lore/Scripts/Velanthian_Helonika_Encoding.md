---
shortcode: velthelonikaenc
name: {full: Velanthian Helonika Encoding}
type: doc
subType: reference
data:
  packFolder: languages
  language: velt
  font: helonika-book
  vowels: aeiouáéíóúAEIOUÁÉÍÓÚ
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
    b: B_MIN
    B: B_MAJ
    d: D_MIN
    D: D_MAJ
    e: E_MIN
    E: E_MAJ
    g: G_MIN
    G: G_MAJ
    h: H_MIN
    H: H_MAJ
    i: I_MIN
    I: I_MAJ
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
    v: V_MIN
    V: V_MAJ
    z: Z_MIN
    Z: Z_MAJ
    y: I_MIN
    Y: I_MAJ
    sh: [S_MIN, H_MIN]
    sH: [S_MIN, H_MIN]
    Sh: [S_MAJ, H_MIN]
    SH: [S_MAJ, H_MIN]
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
    zh: ZH_MIN
    zH: ZH_MIN
    Zh: ZH_MAJ
    ZH: ZH_MAJ
  rules: {normalization: NFC, matching: longest-first, roundTrip: none}
---

This encoding writes the [[skill-velanthlng|Velanthian Language]] in helonika-book. A passage selects it with `enc=velthelonikaenc`. The note supplies its language and font. Roman word spaces are retained. Where several spellings share a sign, decoding returns every one of them in brackets, separated by `|`.

## From the Spelling Guide to the Helónika

- **_kh_ and _zh_ are one letter each**, the eastern _kh_ and the buzzing _zh_. A small letter is the minuscule and a capital the majuscule.
- **_sh_ and _ch_ are written with the letters of their parts.** _sh_ is the letter for _s_ and the letter for _h_, and _ch_ is the letters for _t_, _s_ and _h_. A capital on either keeps the capital on its first letter.
- **_y_ is the letter for _i_.** The [[skill-helnkscrpt|Helónika Script]] has no letter for the consonant _y_, so _y_ and _i_ share a sign, and decoding offers both.
- **An acute vowel is the vowel followed by the accent**, which Velanthian writes for a stress the guide's rule would not choose.
- **The other letters, the raised dot and the numerals are those of the Helónika Spelling**, as are its capitals: a capital is written only on a name and on the paragraph's first word.

Characters outside the declared Roman inventory are refused.

Punctuation, quotation marks, verse boundaries and name marks follow the shared Roman standard. Literal glyph codes between `⟦` and `⟧` select the font’s signs directly.
