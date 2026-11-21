---
shortcode: jenchaiadvguide
name: {full: Jenchai Adventurer's Guide}
type: doc
subType: settingguide
description: A player and GM introduction to Jenchai, the Nine Mountains east of Tantsou, where eight great lords hold the mountains, a young Emperor holds the court, and the vacant office of Teng Ja is the contest of the year.
tags: [draft]
data: {packFolder: adventurersguides, culture: jenchaiclt}
---

> The ship comes into the bay of [[place-yujai|Yujai]] on the turn of the tide, and the whole shore is a stage. Quays run the length of the northern side, and the water between them is thick with hulls: coasters riding low with salt, a lacquer-laden junk from the strait, a foreign ship at anchor with its flag run down. The air smells of tar, wet rope and drying fish. Carters shout at the foot of the customs hall. Porters trot up the planks with bales on their backs and trot down empty. Above it all a spur of the mountain carries a long hall with a roof the color of old pewter, and every window in it looks at the water.
>
> A man in plain dark silk stands at the head of the quay with a house blade at his belt and a knotted tally-cord turning in his left hand. A clerk at his elbow reads out a berth and a toll, and the man repeats each figure under his breath and nods. When the plank touches the stone he looks at you instead of the roll. He greets you with _«rayo nou!»_, good coming, the welcome a house gives a guest it has decided to receive. "[[being-wojaidoja|Wojai Doja]], of Yujai, at the mooring roll. House first, as you see." He waits. "Whose hull is this, and whose letter do you carry?" Behind him a captain who has been standing very still on the next berth turns away and begins, carefully, to count his own bales.

The [[place-jenchairgn|Jenchai Region]] is nine volcanic mountains on two islands: eight on one great island and one on a lesser island at the mouth of the strait that divides them from the mainland, with about 500,000 people between them. The islanders call it Teyan Jenjai, the Nine Mountains Above the Clouds of Heaven, and they mean the name as a ranking. Each mountain is a domain held by a house, each house is led by a great lord called a _Dauzhwo_, and each lord has his own army, his own justice, his own taxes and often his own fleet. Above them stands one Emperor, who commands a household guard and nothing else.

**The one thing to understand first: faith kept is the whole of virtue.** A Jenchai stands where his lord's word puts him, and his worth is the faith he keeps with that lord. Evil is faith broken, and the person the Jenchai fear most is the one who belongs to no lord at all. Doja's question at the mooring roll, whose letter you carry, asks whom you serve. The retainer who does as he is told, argues once in the humble form and serves one name for fifty years is the admired man of the islands. The lord's wife who holds the keys of the hall until the heir is of age and then gives them up is the admired woman. Everything below runs on that bond, and so does every quarrel in this guide.

## Eight Houses and a Court

The [[affiliation-jenchaiempr|Jenchai Empire]] is a realm in which the title is greater than the power. The Emperor lives on [[place-zojai|Zojai]], the Dragon's Mountain, which no lord holds, and the imperial person may not set foot beyond it. So the realm comes to him: every envoy, every petition and every bale of rice, and yours with them. If you carry an ambassador's errand, you are received at [[place-lengwou|Lengwou]], the Dawn Court on Zojai's lowest slope, and you go no farther.

The eight domains are the great lords' own. Their castle towns are the only towns you will find besides the capital:

```sql
WITH RECURSIVE jenchai(place) AS (
  SELECT 'thalorna-note-place-jenchairgn'
  UNION
  SELECT n.address.canonical
  FROM notes n, jenchai r
  WHERE list_contains(n.data.parents, r.place)
)
SELECT address.slug AS _ref,
       name.full AS "Town",
       data.population.apparent AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND address.canonical IN (SELECT place FROM jenchai)
  AND data.population.apparent >= 1000
  AND state = 'full'
ORDER BY data.population.apparent DESC, name.full COLLATE NOCASE
```

You will hear wealth counted in bales, rice enough to feed one adult for a year. Each village is assessed in bales once and pays in kind: rice, salt, fish, charcoal, whatever its shore or forest yields. The holder of a village, whether the lord's granary, a retainer's fief, the court or a summit shrine, takes four parts in ten; the village keeps six and owes thirty days of labor on top. Its headman answers for the whole assessment, so a village that falls short owes the debt together. The houses you meet differ in what they have:

```sql
SELECT address.slug AS _ref,
       name.full AS "House",
       data.population.apparent AS "People"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND data.culture = 'thalorna-note-lore-jenchaiclt'
  AND list_contains(data.parents, 'thalorna-note-affiliation-jenchaiempr')
ORDER BY data.population.apparent DESC, name.full COLLATE NOCASE
```

The [[affiliation-shuiwojaidmn|Shuiwojai Domain]] on the strait coast has the largest army and the largest fleet. [[affiliation-wojaidmn|Wojai Domain]] has the best harbor in the realm and the largest of the castle towns. [[affiliation-hojujaidmn|Hojujai Domain]] holds the burning mountain, and [[affiliation-muwojaidmn|Muwojai Domain]] holds the cedar mountain beside Zojai and with it every road to the Emperor. [[affiliation-zenjaidmn|Zenjai Domain]] is the cold north, [[affiliation-tsuijaidmn|Tsuijai Domain]] the iron and the swordsmiths, [[affiliation-wejaidmn|Wejai Domain]] the typhoon coast, and [[affiliation-rinjaidmn|Rinjai Domain]] the raiders' island. Each mountain's summit shrine is kept by the domain's [[lore-tanchei|Tanchei]], and an eruption is read as heaven's attention. If the ground shakes under you in a disputed year, the people around you hear a verdict on the house beneath it.

## The Poor Throne

> You are put up for the night in an inn below the palace, and the innkeeper counts out your rice by the handful. "The court is short this year," she says, with the flat politeness of a woman who has said it to every guest since the autumn. She does not say that the envoys of every house have been in her rooms for months, bargaining for a place in line.

You will meet the Emperor, if you meet him at all, as [[being-weilengjnch|Weileng]], nineteen, enthroned at eleven when his father abdicated as the price of the peace that ended [[lore-empseatwar|The War of the Empty Seat]]. He is of age now, and the eight lords are testing whether he rules or is ruled. His court receives less than half what it spends, and what it receives depends on what each lord chooses to forward from the one village in his domain that is the court's own. The silver of one house has covered the gap for three years.

What the Emperor can give costs him nothing, and the lords prize it above gold. He issues the patent of each mountain on every succession. He grants court dignities that carry precedence and no function. He sets the seating at the [Dawn Rite]{.name data-type="lore/custom"}, the New Year rite on Zojai's summit, where the order in which the lords' envoys stand is the year's political map. And he alone can confer the office of Teng Ja, Heaven's Blade, the Emperor's sword-arm: the lord who holds it speaks for the throne to the other lords and keeps the peace between them by force. You will hear the name of the last holder, [[being-henwohojujai|Hojujai Henwo]], who held it for sixteen years until he died in 709 AF. It has stood vacant since.

The Emperor's father, [[being-fuzoretired|Fuzo]], took vows and keeps a household in Lengwou below the palace. He advises and holds no authority, and the lords resent the cost of his table.

## The Contest for Heaven's Blade

This is the year the Nine are waiting on one act, and you have arrived in the middle of the wait. The Emperor has not conferred the office, and every house you meet has a view on whom it should go to. [[being-henzoshuiwo|Shuiwojai Henzo]] has the silver that kept the court fed, a fleet and an army, and a petition before the throne, and the Emperor has answered the petition with a sealed letter that only he and the hands that sealed it have read. The houses that fear an office bought with money are the houses Henzo needs. You will hear of three blocs:

- **[The Strait]{.name data-type="affiliation"}** is Shuiwojai with [[being-hojarinjai|Rinjai Hoja]] sworn to Henzo. They want Henzo named Teng Ja.
- **The loyalists** are Hojujai, held for a boy of fourteen by his mother [[being-reweihojujai|Hojujai Rewei]], and Muwojai. They want the office for the Hojujai heir when he comes of age, or for nobody.
- **[The Independents]{.name data-type="affiliation"}** are Wojai, Zenjai, Wejai and Tsuijai. Each has its own price. If Zenjai or Wojai joins either bloc, the balance of the Nine ends, so both blocs are bidding for them now, and each bid names a price.

If you carry a letter, a count of rice or an answer between these houses, you carry part of the realm. The campaign frame [[scenario-vcntbld|The Vacant Blade]] runs the whole of it.

:::secret {title="What the Sealed Letter asks"}
The letter withholds the office and asks Henzo for more silver toward the court's budget, and it names no price at which the office would follow. It is Weileng's way of deferring: while the office stays unconferred, both blocs need him.
:::

## The Strait and the Mainland

[[place-easternstrt|The Eastern Strait]] is narrow enough to cross in a day or two and treacherous enough that it has wrecked every invasion fleet the [[affiliation-tantsouempr|Empire of Tantsou]] has sent against the islands. The Jenchai call it the moat of the Nine Mountains. You will hear them call the empire decadent and scheming, and the mainland calls them crude and violent. Each finds the other's manners unbearable and needs the other's goods: the islands send blades, salt, dried fish, lacquer and silk, and take jade, tea, bronze and silver in return. The strait is busy and it is watched. [[place-rinjai|Rinjai]]'s raiders lie in the coves at its mouth and Shuiwojai's fleet keeps the water in front of [[place-rojai|Rojai]], and your hull crosses on the sufferance of whichever house holds that stretch.

The raids cross it too. The lords of the Nine count the mainland's southern coast as their ancestral right, and if you sail from the mainland you will hear its coastal magistrates demand that the raids stop. Rinjai holds a Tantsou prefect whom the court wants returned and Henzo wants ransomed.

## Honor and the Blade

Honor is the organizing principle of the islands. A lord's word is sacred, and you will hear of broken oaths remembered for generations. An insult demands satisfaction, and the challenge and the duel follow fixed forms. The islanders use the mainland's word [Rwising]{.name data-type="lore/custom"} for every ritual death, ordered or chosen, and on the islands it can express protest, preserve a secret or prove loyalty to a fallen lord. A lord who orders one wields the power carefully, because it reflects on his own judgment.

Favor is visible, and you learn to read it. A retainer is rewarded with a granted name, a stipend raised by so many bales, a village held as a fief or a seat nearer his lord. A lord is rewarded by the throne with a dignity or a place nearer the front at the Dawn Rite. Penalty runs from the lowered seat to the burned writ, which strips a man of his name, to outcasting among the [[lore-noutsou|Nwitsou]], who may hold no name the law recognizes.

## People to Meet

The man at the mooring roll, the innkeeper below the palace and the captain counting his bales all have lives beyond your errand. Some of the Nine's people hold the realm's offices and its quarrels in their hands:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-jenchaiclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

Behind the lords stand their retainers and their lineages: the [Weiju]{.name data-type="affiliation/lineage"} who keep the court's strongroom at [Tsaimu]{.name data-type="place/settlement"}, the [Jaju]{.name data-type="affiliation/lineage"} smiths of Tsuijai, the [Woju]{.name data-type="affiliation/lineage"} who enter every berth at [[place-yuwu|Yuwu]], the [Maiju]{.name data-type="affiliation/lineage"} who mount the northern levy. You meet the lords through these hands first.

## What Gets a Newcomer into Trouble

- **Do not speak first in an audience.** The one who speaks first has asked for something, and Weileng lets a silence stand until you fill it.
- **Give your name at the ferry.** The toll-keepers at [[place-zujufrry|The Zuju Ferry]] enter every party that crosses, with its size and its errand when it states one. A name you do not give is remembered.
- **Do not take a seat that is not yours.** In a hall, a seat shows standing. At the Dawn Rite, an envoy's place is a verdict on his house, and if you move one you have made politics.
- **Never refuse a lord to his face.** Jurthati refusals are statements of difficulty, and if you take one literally you have misunderstood. The furthest you may press a lord is to ask whether he answers.
- **Keep an oath, or do not give it.** A lord's word holds for generations, and so does your breach.
- **Say where you sailed from.** The Jenchai despise the mainland and trade with it, and if you sail a hull from the Tantsou coast it is watched from the first headland to the last.

## Ways In

You arrive most naturally by sea, at one of the strait's two busy harbors or at the bay of Yujai, or by the ferry road to the capital, and you most likely arrive with someone else's errand. A lord's envoy needs an escort from you for the long stay at Lengwou. A merchant house of Yuwu wants you to carry a bell to Zojai. A Tantsou envoy has asked at the Dawn Court for a prefect, and if you are a captain without a berth you find hire on either shore. If you come from the islands, you might be a retainer's younger child waiting for a granted name, a Tanchei's apprentice who has been asked to read the mountain honestly, a headman's heir who answers for the village's assessment or a ferryman's clerk who sees every name.

Three adventures begin in the contest and can be run alone or in any order:

- [[scenario-ltrforhawu|A Letter for Hawu]]: a sealed letter from the throne must cross Muwojai's ferry and reach the lord who petitioned for the office, and two houses have asked for a hand in how it travels.
- [[scenario-rcbfrsnw|Rice Before the Snow]]: the cold north will put its spears behind whichever bloc feeds it, and both blocs are bidding in rice they do not have.
- [[scenario-prfctrdhll|The Prefect in the Red Hall]]: a Tantsou prefect is a guest of Rinjai's raiders, and the court, the Strait and the mainland each want him.

A campaign among all of it runs on The Vacant Blade, the winter from the first frost to the Dawn Rite on Zojai at the New Year. The sites the contest touches have their own hooks: The Zuju Ferry, [[place-tsaimustrng|The Court Strongroom at Tsaimu]], [[place-zijaiobsrvt|The Observatory of Zijai]], [[place-weworeefs|The Wewo Reefs]], [[place-tsaigenfrg|The Forge of Tsaigen]] and [[place-zojaishrn|The Summit Shrine of Zojai]], with [[miscgear-dwnrtbll|The Bell of the Dawn Rite]] pawned in Yuwu.

## Where to Read Next

[[lore-jenchaiclt|Jenchai]]
: faith kept, the hall, the granted name and what a person owes

[[affiliation-jenchaiempr|Jenchai Empire]]
: the court, the eight houses, the bale, the Teng Ja and the three blocs

[[lore-hstryjenchai|The History of Jenchai]] and [[lore-empseatwar|The War of the Empty Seat]]
: the secession, Henwo's sixteen years and the war over his office

[[place-easternstrt|The Eastern Strait]]
: the watched water between the Nine Mountains and the mainland

[[affiliation-tantsouempr|Empire of Tantsou]]
: the mainland empire the islands broke away from

[[skill-jurthatlng|Jurthati Language]]
: honorifics, granted names and how a house name is built
