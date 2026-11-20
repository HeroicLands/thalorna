---
shortcode: nyalubaadvguide
name: {full: Nyáluba Adventurer's Guide}
type: doc
subType: settingguide
description: A short player and GM introduction to the Nyáluba—five clan-nations of the Southern Savannahs bound by the Long Pact, the drums, the griots and the spirits.
tags: [draft]
data: {packFolder: adventurersguides, culture: nyalubaclt}
---

> The baobab comes into sight long before the village does: a gray trunk as wide as a house, its bare branches spread against a white dry-season sky like roots turned upward. By the time you reach its shade the heat has pressed the color out of everything but the red dust on your legs. Round the tree spreads a market. A tall [[affiliation-ruwozi|Ruwozi]] herder with a single lion's tooth on a thong at his throat leans on his staff beside a knot of cattle, debating the price of a heifer in long, unhurried sentences. A woman whose hair is braided close in a pattern of lines and knots sets out baskets of sorghum. [[affiliation-kolembozi|Kolembozi]] fishermen from the eastern wetlands have spread papyrus mats with smoked fish and gray cakes of salt; a [[affiliation-sengala|Sengala]] trader in a cloth of northern blue lays out iron hoe-blades and glass beads, and a quiet [[affiliation-ngonzi|Ngonzi]] smith keeps his small gold ornaments wrapped until a buyer asks. From somewhere beyond the grass comes the sound of a drum, rising and falling in phrases like speech, and from nearer a second drum answers it.
>
> Under the baobab sits a young woman in an ochre wrap, an old man asleep beside her with his chin on his chest. She rises when she sees you, puts her right hand flat to her breastbone, and says, "_Nyalu mi-bóo_," the Nyáluban greeting: the Nyáluba greet you. Then, slowly, so that you can follow, "I am [Zenda]{.name data-type="being/npc"}, of the [Ndánga-Sólembe]{.name data-type="affiliation/lineage"}, of the [[affiliation-lobwezi|Lobwezi]], under the Pact." She asks your name, and your father's, and where you slept last night. She repeats all three back to you exactly, twice, her lips moving a third time after she has finished.

The [[affiliation-nylbtrblntn|Nyáluba Tribal Nation]] brings together more than one people. They are five clan-nations of [[place-sthrnsvnhs|the Southern Savannahs]] of [[place-xerathia|Zerathia]]—Ruwozi cattle-herders of the central plains, Kolembozi river-people of the eastern wetlands, Ngonzi highlanders and goldsmiths, Sengala traders of the northern margin, and Lobwezi cultivators around their ancient trees—who differ in dress, dialect, ritual and marriage custom. Nine generations ago, under a baobab in Ruwozi country, their ancestors swore the [Long Pact]{.name data-type="lore/law"}: no arms raised between the five, a spear against one a spear against all, the pastures, rivers and rains shared, and the Pact renewed in person every fourth dry season. There is no king, no capital, no army and no priesthood. There is the Pact, and the people who keep it remembered.

**The one thing to understand first: what you say in front of a griot is entered in the record.** The Nyáluba write nothing down. Griots carry the genealogies, the boundaries, the terms of the Pact and who owes whom what, and a griot's whole standing rests on remembering exactly. Zenda repeated your name because she was entering it. A careless boast or a promise made in her hearing will be recited back to you, word for word, years later.

## Councils, Drums and Spirits

Each clan governs itself under its paramount and its elders, and every fourth dry season the [[affiliation-greatlubemo|Great Lubemo]] meets at [[place-hetolubemo|Heto Lubemo]] to settle what touches all five. Councils do not vote. They talk until the objections stop, in an order fixed by custom, with the senior speaker last; the slowness is the method, and a decision reached that way holds. Between Lubemos the paramounts consult by drum: drum-speakers relay messages in a tonal register of the language across all five territories in about two days.

Faith runs through totems and spirit guides. Each clan is kin to its totem—lion, crocodile, eagle, leopard or baobab—and does not hunt or eat it, and totem law shapes marriage, diet and the greeting of strangers. Every spirit is venerated, appeased or warded against according to its nature, and spirit-speakers negotiate with them on a clan's behalf. Nyáluba teaching places [[lore-shorinyadty|Shorinya Ndafo]] above all of them, the Great Brightness, which receives no offering.

## The Song and the Telling

Two works show what the griots keep and how they keep it. [[lore-swearbaobab|The Swearing Under the Baobab]] is the memory-song of the Long Pact's swearing, sung by a griot and answered by everyone present; it counts the five terms on one hand, and its call and answer are lines every Nyáluban child knows. [[lore-stonetongue|The Stone Tongue]] gives one account twice, as the griots recite the record and as it is told at the fire, and it is the plainest lesson in why a griot never adds to what he was given.

## Places and Dangers

- [[place-hetolubemo|Heto Lubemo]], an ancient stone enclosure in the southeastern highlands, holds the Great Lubemo for six weeks every fourth dry season.
- The [[place-oldhetos|Old Hetos]] of the highlands—curving walls of fitted stone and raised platforms left by a people who built before the Nyáluba—belong to the Ngonzi, and their guardians admit no one else.
- The Kolembozi wetlands are a maze of papyrus channels and crocodile pools whose river-spirits are numerous and unforgiving.
- [[place-fenjaravlg|Fénjara Village]], under the gallery forest, is home to trail-readers who follow tracks across the spirit world.
- The Sengala, on the Nyáluba's northern margin at the rainforest's southern edge, are the only door most outsiders ever use, through the rainforest peoples to the north.

## People to Meet

A Lubemo is coming, and the paramounts who will sit at it are people a party can reach before it opens. [[being-nzoburwz|Nzobu Ruwozi]], Paramount of the Ruwozi, must convene a council that is to hear a war in which her own clan is a party. [[being-nyabesnklm|Nyabesa nu Kolembozi]], Paramount of the Kolembozi, answers for the river's flow and asks the other clans to choose between her people and the Convener. [[being-ndamesongnz|Ndameso nu Ngonzi]] keeps the enclosure where the Lubemo sits and must see both parties housed without an incident, [[being-nkesheyasngl|Nkesheya nu Sengala]] has told no one which way the leopard-clan will go, and [[being-mbudelolbwz|Mbudelo nu Lobwezi]] keeps the order of precedence and the Lubemo's record.

[[being-bonzimbelbwz|Bonzimbe of the Lobwezi]], the blind senior griot, carries the Pact's terms and rules nothing, and every clan asks him. [[being-ndowelaeknd|Ndowela nu Ékunda]] holds the spring every clan waters at in a bad year and keeps it neutral, and [[being-mbadekofnjr|Mbadeko nu Fénjara]] keeps the trail-readers useful to every clan and dependent on none. The rest of the Nyáluba a party is likely to meet:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-nyalubaclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

## Ways In

Most outsiders arrive with Sengala traders, and a party that carries goods south may find itself asked to carry word north. Nkesheya wants to know what the other clans say before she says anything herself, and a trader's guest hears a great deal. The Ruwozi and the Kolembozi are at war, the first between clans since the Pact, and each paramount needs someone who is not of the five: a witness to a herd crossing, a ferryman's account of a ford, a spear for the road to the enclosure at [[place-hetolubemo|Heto Lubemo]]. Ndameso wants the guest-houses watched so that the Convener and the Kolembozi paramount never meet on a path.

A Fénjara trail-reader may need hired spears for a hunt whose quarry does not leave footprints; the trail-readers of [[place-fenjaravlg|Fénjara Village]], Mbadeko's people, have seen the herds and a turned channel. A party drawn to the spring of the [[affiliation-ekunda|Ékunda Tribe]] may be asked to stand guard over it so that no clan can say it was watered unfairly. A spirit pact broken in one village wants a spirit-speaker, a witness and someone willing to go where the spirit lives.

And the griots have entered in the record that a Kolembozi spirit-speaker walked into an Old Heto at her initiation and came out speaking [The Stone Tongue]{.name data-type="skill/language"}, which no living person understands. What the tongue is for, nobody will say, and the fireside telling in [[lore-stonetongue|The Stone Tongue]] is careful on the point: "Mind, I don't say nobody knows. I say nobody will say."

## Where to Read Next

[[lore-nyalubaclt|The Nyáluba]]
: the Pact, the five nations, memory and the drums

[[affiliation-nylbtrblntn|The Nyáluba Tribal Nation]]
: the clans, the Great Lubemo and famous figures

[[affiliation-nyalbpnthn|The Nyáluba Way]]
: totems, guides and the specialists who serve them

[[lore-nyalbsprts|Nyáluba Spirits]]
: the guides themselves and how each is handled

[[lore-stonetongue|The Stone Tongue]]
: the record and a fireside telling

[[skill-nyalbnlng|Nyáluban]]
: the language, its tones and sample phrases
