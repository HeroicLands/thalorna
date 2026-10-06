---
shortcode: dreadspawncrtr
name: {full: Dreadspawn, aliases: []}
type: lore
subType: bestiary
description: "Creatures made, not born—the work of any god of invention or creation, or of a mortal who dares it; none of them can breed, and some are favored templates recreated over and over."
tags: []
data: {banner: creaturebnr}
---

Dreadspawn are creatures that were made, not born, and most often they are the work of celestial beings—experiments, or creations undertaken for purposes the makers have never explained to anybody. They are not the creation of any single god. Every pantheon holds one or more gods of invention or creation, and nothing stops any god from the work but a lack of interest in it. The Asguardian [[affiliation-motefnir|Mótefnir]] is the one whose output is best documented in the north, and nobody holds him to be the only hand at it.

Two things connect every dreadspawn, whatever made it and whatever it is made of. It carries the spark of life and an intelligence of some kind, and it cannot reproduce—universally, without exception, a mule. A dreadspawn has no young. For reasons known only to their makers, some of them are nonetheless favored templates, recreated over and over again, so that a shape first made long ago can be met in many places and many ages.

The class is as wide as that leaves it. A dreadspawn can look and act like virtually anything, and most are unique or nearly so, crafted into unusual forms and then let loose for reasons nobody has established. A thing met once and never again, with no population behind it and no young in front of it, is the ordinary case.

What a dreadspawn is for is as varied as what it looks like. Some are guardians, set over a place, an artifact or a sacred site and often outlasting whatever they were set to watch. Some are hunters, made to find and destroy a particular threat and then left to their own devices once the task is done, or abandoned partway through it. Some are experiments that test what a living thing can be made to do, and the purpose of many has never been worked out at all. The trolls, the drakes and the aberrant beasts that fit no natural kind are all of the class, and they range from cunning predators to lumbering monstrosities, some of a terrible beauty and some that look assembled from mismatched parts. What they share beyond their making is that they are dangerous.

## The Three Made Things

Three classes of creature are made rather than born, and what tells them apart is what the maker began with and whose hand did it.

- **Dreadspawn** are alive. A celestial being made them so, from nothing that was alive before, and gave each the spark and the wits it carries. They cannot breed.
- [[lore-golemcrtr|Constructs]] are not alive. A mage works a semblance of life into material that has none—clay, stone, iron, or flesh that is already dead—and what moves afterward has no will of its own and does as it is directed.
- [[lore-undead|Undead]] are the dead walking, bound by necrotic force to bodies they have already left. They are the province of death gods and of the necromancers who learn the authority from them.

A made man stitched together out of the dead is therefore a construct and not a dreadspawn, however it was intended: the material was dead flesh and the hand was a mage's.

## In the Empire of Tānvür

The [[affiliation-tanvurempr|Empire of Tānvür]] sorts dreadspawn the way the [[lore-celestlrdr|Celestial Order]] sorts everything else. The Great Sorting placed every living thing in the cosmic taxonomy, and the **Zāt Sëi** (Bureau of Creation) governs life and birth. Naturally breeding kinds are **Zhëk Zōk** ("Life-Groups"); dreadspawn are **Zāt Vōr Zhëk** ("Sacred-Creation Life"), creatures of deliberate divine manufacture, inside the sorted order and not outside it. The [[lore-tanthei|Tānthëi]] catalog each one as it is met, with its own entry for elemental affinities, observed capabilities, territorial range and threat, and they read the class as proof that the Zāt Sëi, and its counterparts in other pantheons, is a working office and not an archive. Different celestial officials pursue different projects, so the dreadspawn differ.

The army finds them harder than the scholars do, because what worked against the last one may be useless against the next: a guardian may be immobile and nearly indestructible, a hunter fast and clever enough to track its prey across a province. The [[lore-venduk|Vëndük]]'s bureaucratic magic works on dreadspawn as on any classified creature, but a Vëndük has to assess each one's affinities and classification before a petition will bite, and a creature trying to kill him does not wait for the assessment. The [[lore-vushok|Vüshōk]] treat every encounter as a specialized operation that calls for heavy force, Vëndük support and, where they can get it, reconnaissance first. Several dreadspawn have appeared inside the empire's borders in a short span, more than anyone can account for, and the soldiers are stretched thin. Whether the Zāt Sëi has grown unusually active or the creatures are coming from elsewhere is argued by the scholars; the [[lore-thatlung|Thātlüng]], pack-hunters unearthed by the northwestern earthquake, are another threat the same soldiers face.

```sql
SELECT address.slug                   AS _ref,
       name.full                      AS "Name",
       shortcode                      AS "Shortcode",
       sohl.system.body.weight.base   AS "Weight",
       sohl.system.body.bodyScaleBase AS "BodyScale",
       description                    AS "Description"
FROM notes
WHERE type = 'being'
  AND sohl.kbcat = 'dreadspawn'
```
