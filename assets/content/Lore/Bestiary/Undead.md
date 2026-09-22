---
tags: []
name:
  full: Undead
  aliases:
    - The Undead
    - Helspawn
description: "The undead — the dead made animate by necrotic spiritual force, found wherever a tradition holds the authority to call them back."
shortcode: helspawncrtr
type: lore
subType: bestiary
data:
  banner: creaturebnr
---

A creeping dread fills the air as the undead emerge from the shadows — a host of ghastly figures summoned from the underworld by dark priests. Their appearances vary from grotesque and decayed to eerily beautiful, a testament to the fell energy that binds them. Some retain a semblance of their former selves but with a chill touch of death, while others are twisted and malformed, their bodies marred by necrotic energy. Each exudes an unsettling aura, a tangible sense of the unnatural that makes one's skin crawl and breath catch in the throat.

When they move, it is with a graceless, relentless determination for some, and a terrifying, fluid elegance for others. Their hollow eyes, whether ablaze with malevolent intelligence or empty and vacant, speak of an unholy existence bound to serve their necromantic masters. The mere presence of the undead can dampen light, casting an oppressive gloom that chills the soul and foretells doom.

The undead are the dead made animate through the power of gods, celestial agents, or mortals who have been granted necromantic authority. They are found across all the world, wherever the right kind of necromantic power holds sway, and the phenomenon is not limited to any single pantheon. Every major religious tradition that touches on death or chaos has its own theological explanation for why the dead sometimes walk, and every such tradition has those who can — or who dare to — call them back.

Every undead is, at root, a vessel imbued with necrotic spiritual force. Details are unclear, but it seems clear that this necrotic force is associated with the destruction or perversion of the living spirit, or soul, that previously inhabited the body. This conversion of the spirit seems to always involve coercion or arrangement: once spirits leave their deceased bodies they do not naturally return. Something — a necromancer, a ritual, a creator among the undead, a divine agent — must act as a catalyst to the binding.

One important distinction is between the undead and Spirits. The spirits of dead beings may from time to time remain connected to places in the material realm; ghosts and similar beings. But those creatures are not undead; those are immaterial spirits from the spirit realm that persist usually near where they died.

## The Learned Terms

Wherever the dead are studied — by scholars, priests, physicians and arcanists, on [[place-ankrscntnnt|Ankaris]] and on [[place-xerathia|Xerathia]] alike — the two kinds of undead are named in two Kheperi words, used unglossed and set against whatever the local folklore calls them. The words are Kheperi because [[affiliation-empirtkhpr|Ta'Kheperu]] is the oldest of the cultures and its funerary texts are the oldest writing on the dead: every later scholarly tradition learned to classify the dead from copies of them, and took the classification's vocabulary along with it.

- **Tereb** ("TEH-reb"; plural _terebu_), from the root _t-r-b_, to wear, to cloak: _the cloaked one_. The sentient, self-directed and relatively powerful undead, which wears its former self as a garment and can pass for a living person for a short time and not too closely. The cloak frays under close eyes and long company, because nothing wears it from inside but the will. See [[being-nghtwght|Tereb]].
- **Damut** ("dah-MOOT"; plural _damutu_), from the root _d-m-t_, to drive, to goad: _the driven one_. The mindless undead. Nothing in it moves itself; it goes as it is driven, by the one who raised it or by the last hunger left in the meat. No will, so no cloak, so it cannot pass for anything. See [[being-hlthrls|Damut]].

The pairing is the lesson in two words: the one that _wears_, the one that is _driven_.

In Ta'Kheperu itself the words keep their temple spelling, _ṭerebu_ and _ḍumaṭu_, with the emphatic consonants the rest of the world dropped; the temple form is the word as Kheperi speak and write it, and it is invariant in number — one _ṭerebu_, many _ṭerebu_. _Tereb_ and _damut_ are what the rest of the world made of it: the world's plural, _terebu_ and _damutu_, is the Kheperi word heard without its emphatics, and the world's singular is a back-formation from that plural. At the table the vernacular plurals "terebs" and "damuts" are as correct as anyone needs them to be. The [[skill-kheperlng|Kheperi language]] note carries both forms.

### Folk names

Every region has its own words for the dead that walk, and a scholar sets the learned term beside them rather than replacing them.

- **The [[place-nrdlndsrgn|Nordlands]]** and the [[affiliation-asguardian|Asguardian]] faiths: _Helspawn_ for the undead as a class, from the goddess [[affiliation-hel|Hél]]; _nightwight_ for the tereb and _helthraal_ for the damut. The Faith of Hél's own liturgy calls its favored terebu _draugar_ and its damutu _haugbúar_.
- **[[place-kchchkcntnnt|K'ich'chik]]**: the _Threshold-Held_, the terebu whose souls [[affiliation-pikultzumaq|Pik'ul Tz'umaq]] holds at the boundary of Xibalba.

## The Undead Hierarchy

The undead exist on a spectrum defined by the completeness of the soul bound to the body. At one extreme are the [[being-nghtwght|terebu]] — intelligent, powerful, and semi-permanent, created through deliberate ritual from willing and powerful subjects whose souls, often already perverted, were violently transformed to produce powerful undead beings. At the other extreme are the [[being-hlthrls|damutu]] in their most degraded state — mindless, shambling, rotting corpses animated by the barest fragments of spiritual energy.

Between these poles lies the full range of undead existence. A soul ripped back from the afterlife and forced into its deceased body arrives damaged by the process, the more so if unwilling — incomplete, diminished by the passage. How much of the original person remains depends on how long the body had been dead, how violently the spirit was coerced back, and the skill of whomever performed the reanimation. In some cases the recently dead, especially if the death was not violent, pulled back quickly, might return confused but retaining speech, memory, and personality, although with significant confusion about their situation, and significant memory gaps. So long as the fact of their death can be hidden from them, they might be able to persist for a short time as if nothing had happened. But quickly the body begins to decay, the mind to degenerate, and often a great hunger for living flesh and blood blossoms. All undead below the tereb tier degrade over time — the soul fragments eroding, the body decaying, identity slipping away week by week until nothing remains but the mindless hunger.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'helspawn'
```
