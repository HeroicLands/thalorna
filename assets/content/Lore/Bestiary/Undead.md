---
shortcode: undead
name: {full: Undead, en: [Helspawn]}
type: lore
subType: bestiary
description: "The undead—the dead made animate by necrotic spiritual force, found wherever a tradition holds the authority to call them back."
tags: []
data: {banner: creaturebnr}
---

The undead are the dead made to walk again. A body whose soul has already left it is bound back into motion, with that soul or a fragment of it dragged back from the spirit realm, and it gets up. Some are rotting corpses that shamble where they are driven; some are cultivated, courteous and very nearly alive, and pass for living across a room. All of them are out of place in the order of things, and every people that buries its dead knows them as an abomination.

A soul that has left its body does not come back of its own accord, so every undead was made by someone: a death god or a god's agent, a necromancer granted or taking that authority, a ritual, or another of the undead. No one can make himself undead; it always takes an agent outside the one who dies. The power to do it is not limited to any one pantheon, and the undead are found across the world wherever it is held. Every tradition that touches on death has its own account of why the dead sometimes walk, and every such tradition has those who can, or dare to, call them back.

What binds them is the same everywhere. Every undead is a body driven by necrotic force, and that force is [[lore-theshadow|the Shadow]] at work on the soul: chaos from outside creation, neither arcane, spiritual nor divine, which corrupts and perverts whatever soul it touches. The Shadow is the thread common to every undead, across every belief and culture, and it relates each one to every other. Each tradition's account of its own walking dead stands as that tradition tells it.

The undead are one of three classes of made creature, and the material and the maker tell them apart. A [[lore-dreadspawncrtr|dreadspawn]] is alive, with its life attributed to a celestial hand working from nothing that lived before, and cannot breed. A member of the [[lore-golemcrtr|Constructs]] class is matter with no life of its own, clay, stone, iron or dead flesh, moved by a mage's working. An undead is a body its own soul has already left, bound back into motion by necrotic force, and in religious accounts it belongs to the death gods and to the necromancers who hold that authority from them.

A ghost is not one of the undead. The soul of someone who has died sometimes stays bound to a place in the material world, near where it died, and it may be seen and heard there; but it is a spirit without a body, and it is counted among the [[doc-thlbestiary#spirit|spirit creatures]].

## The Learned Terms

Wherever the dead are studied—by scholars, priests, physicians and arcanists, on [[place-ankrscntnnt|Ankaris]] and on [[place-xerathia|Zerathia]] alike—the two kinds of undead are named in two [[lore-khelathiclt|Khelathi]] words, used unglossed and set against whatever the local folklore calls them. The words are Khelathi because the [[affiliation-empireakhlth|Empire of Au'Khelathu]] is the oldest of the cultures and its funerary texts are the oldest writing on the dead: every later scholarly tradition learned to classify the dead from copies of them, and took the classification's vocabulary along with it.

- **[[being-tereb|Tereb]]** ("TEH-reb"; plural _terebu_), from the root _t-r-b_, to wear, to cloak: _the cloaked one_. The sentient, self-directed and relatively powerful undead, which wears its former self as a garment and can pass for a living person for a short time and not too closely. The cloak frays under close eyes and long company, because nothing wears it from inside but the will. See [[being-tereb|Tereb]].
- **[[being-damut|Damut]]** ("dah-MOOT"; plural _damutu_), from the root _d-m-t_, to drive, to goad: _the driven one_. The mindless undead. Nothing in it moves itself; it goes as it is driven, by the one who raised it or by the last hunger left in the meat. No will, so no cloak, so it cannot pass for anything. See [[being-damut|Damut]].

The pairing is the lesson in two words: the one that _wears_, the one that is _driven_.

In Au'Khelathu itself the words keep their temple form, _terebu_ and _dumatu_; the temple form is the word as Khelathi speak and write it, and it is invariant in number—one _terebu_, many _terebu_. _Tereb_ and _damut_ are what the rest of the world made of it: the world's plural, _terebu_ and _damutu_, is the Khelathi word as foreign ears set it down, and the world's singular is a back-formation from that plural. At the table the vernacular plurals "terebs" and "damuts" are as correct as anyone needs them to be. The [[skill-khelathlng|Khelathi Language]] note carries both forms.

### Folk names

Every region has its own words for the dead that walk, and a scholar sets the learned term beside them rather than replacing them.

- **The [[place-nrdlndsrgn|Nordlands]]** and the [[affiliation-asguardian|Asguardian]] faiths: _Helspawn_ for the undead as a class, from the goddess [[lore-nahilddty|Nahild]]; _nightwight_ for the tereb and _helthrall_ for the damut. The [[affiliation-nahild|Faith of Nahild]]'s own liturgy calls its favored terebu [[lore-nagengir|nágengir]] and its damutu [[lore-haugverdir|hrúmverdir]], a word the folk also give to the dead said to keep their own mounds.
- [[place-kiichchik|Ki'ich'chik]]: the _Threshold-Held_, the terebu whose souls, in the teaching of [[affiliation-pikultzumaq|Pik'ul Ts'umaq]], are held at the boundary of [[place-chaltzumaq|Ch'al Ts'umaq]].

## The Undead Hierarchy

The undead exist on a spectrum defined by the completeness of the soul bound to the body. At one extreme are the terebu—intelligent, powerful, and semi-permanent, created through deliberate ritual from willing and powerful subjects whose souls, often already perverted, were violently transformed to produce powerful undead beings. At the other extreme are the damutu in their most degraded state—mindless, shambling, rotting corpses animated by the barest fragments of spiritual energy.

Between these poles lies the full range of undead existence. A soul ripped back from the afterlife and forced into its deceased body arrives damaged by the process, the more so if unwilling—incomplete, diminished by the passage. How much of the original person remains depends on how long the body had been dead, how violently the spirit was coerced back, and the skill of whomever performed the reanimation. In some cases the recently dead, especially if the death was not violent, pulled back quickly, might return confused but retaining speech, memory, and personality, although with significant confusion about their situation, and significant memory gaps. So long as the fact of their death can be hidden from them, they might be able to persist for a short time as if nothing had happened. But quickly the body begins to decay, the mind to degenerate, and often a great hunger for living flesh and blood blossoms. All undead below the tereb tier degrade over time—the soul fragments eroding, the body decaying, identity slipping away week by week until nothing remains but the mindless hunger.

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
