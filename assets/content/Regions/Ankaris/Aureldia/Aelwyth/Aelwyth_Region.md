---
description: "Great island off Élavendre's western coast — deeply legendary. The Peshtar Wilderness occupies the west, the kingdom-belt the east, joined at the misty north."
type: place
subType: region
data:
  demonym: null
  lore: []
  parents:
    - aureldirgn
  population: 710000
name:
  full: Aelwyth
  aliases:
    - The Misty Isle
shortcode: aelwyth
terran_analog: "The British Isles, but with Ireland and Britain joined into a single landmass shaped like an inverted V. The western arm is trackless deep forest (the Peshtar Wilderness); the eastern arm is the Scottish-and-English-analog kingdom belt (Stormveld in northeastern Scotland, the southern Aelwythan kingdoms in England-analog territory). The two arms meet at the misty northern apex."
packFolder: aelwyth
---

Off the western coast of [[place-ankrscntnnt|Ankaris Continent]], some hundred miles out across the cold sea from the [[place-elavendre|Élavendri]] coast, Aelwyth is a mist-shrouded island known for its great central bay, diverse kingdoms, and thin veil between the mortal and supernatural worlds. Often called "the Misty Isle," Aelwyth is a land of mystery where ancient ruins, lost temples, and forgotten cities stand as remnants of civilizations that have long since passed into legend.

## Geography

Aelwyth is a large island of markedly unequal country, and its shape governs its politics.

**The east** is mountain. The **[[place-ironfells|Ironfells]]** rise along the southern edge of
[[affiliation-jrldmstrmvld|Stormveld]], run eastward to the sea, then turn **south down the coast**,
descending by degrees into foothills and at last into the lowlands of
[[affiliation-kingdmdnvr|Dúnavarre]] in the south-east. Only **two passes** cross them, both through deep
wilderness, and in their eastern heights is **[[place-vorgald|Vorgald]]**, a hold of the
[[lore-flkkhazar|Khazári]].

**The north-east** is [[affiliation-jrldmstrmvld|Stormveld]]: a great central plain, the
[[place-stormplain|Stormplain]], walled by the [[place-nordfells|Nordfells]] to the north — perhaps half
the Jarldom's ground — and the [[place-sunderfells|Sunderfells]] to the south.

**The north-west and much of the northern coast** is the forest of the
[[place-pshtrwldrns|Peshtar Wilderness]], which runs east until it meets the Nordfells.

**The centre-east**, west of the Ironfells, is [[affiliation-kngdmldrth|Aldorath]] — the lush and fertile
country that is the **breadbasket of Aelwyth**, whose grain feeds the island and whose wool and wine are
known as far as the mainland.

**The west** is open: the [[place-cntrlhghlnds|Central Highlands]] at the island's middle, falling to the
western coastal country of [[affiliation-repblctrvn|Tarvenne]], and reaching north to the Peshtar forests.

**The south**, below Aldorath and west of Dúnavarre, is the **[[place-hallowwood|Hallowwood]]** — deep
fae forest where the [[lore-flksinale|Sinalë]] of Aelwyth live, and which does not welcome visitors.

## Climate

Cool, wet and windy: an island in a cold sea, and comparable to no part of the Aurèldían mainland.

The **western coast** has the worst of it. Wind comes off the ocean unbroken, fog is the ordinary
condition of a great many days, and chill is the year-round expectation rather than the winter one. The
northern coast is little better and the mountains are worse.

The exceptions are two and both are sheltered. The **[[place-cntrlhghlnds|Central Highlands]]** stand
above the coastal fog, which is a low thing, and are clearer and warmer than anywhere else — relative to
Aelwyth, which is to say a Provenzian would still want his cloak. And the slopes of
**[[place-sunnerslade|Sunnerslade]]**, in the Ironfells' rain-shadow, are dry and warm enough to ripen
vines, which is the single most improbable fact about the island's agriculture.

## Polities

```sql
SELECT p.address.slug AS _ref,
       p.name.full    AS "Polity",
       p.description  AS "Overview"
FROM notes p
WHERE p.type = 'affiliation'
  AND p.subType = 'polity'
  AND EXISTS (
    SELECT 1
    FROM notes l
    WHERE l.type = 'place'
      AND list_contains(p.data.domains, l.shortcode)
      AND (l.shortcode = 'aelwyth' OR list_contains(l.data.parents, 'aelwyth'))
  )
ORDER BY p.name.full COLLATE NOCASE
```

### Elder Race Enclaves

The southern forests shelter ancient communities of [[lore-flksinale|Sinalë]] (elves), who maintain a distant but real relationship with the crown of [[affiliation-kngdmldrth|Aldorath]]. The mountains northeast of Aldorath — the range separating the central lowlands from the [[affiliation-jrldmstrmvld|Stormveld]] coast — contain hidden holds of the [[lore-flkkhazar|Khazári]] (dwarves), among the most reclusive of their kind anywhere in [[place-ankrscntnnt|Ankaris Continent]].

### Minor Polities

Scattered between the major realms are smaller kingdoms, free cities, and independent lordships. The free city of Veldareth, on the southern coast between Dúnavarre and Tarvenne, is a neutral center of learning whose [[affiliation-panepistmm|Panepistemium]] chapterhouse is among the most respected on the island.

## Religion

The [[affiliation-arldnpnthn|Aurèldían Pantheon]] is dominant in the southern and eastern kingdoms, with [[affiliation-arldnpnthn|Aethería]], [[affiliation-arldnpnthn|Lúsinía]], and [[affiliation-arldnpnthn|Karnavos]] being particularly prominent. [[affiliation-arldnpnthn|Jánus]] holds special importance in Dúnavarre. The Nordmen of the Stormveld worship the [[affiliation-asguardian|Asguardian Pantheon]] gods. Local folk traditions — spirits of the lake, guardians of crossroads, ancestral ghosts — layer additional beliefs atop the formal pantheons.

The **[[affiliation-repblctrvn|Republic of Tarvenne]]** in the west is the exception on the island and something of an exception in the Aurèldían world. The [[affiliation-blackflame|Black Flame]] — suppressed nearly everywhere else — carries enormous influence there, for the straightforward reason that suppression requires magistrates and Tarvenne's magistracies are for sale. So does [[affiliation-thanatos|Thánatos]], the Silent Judge, for the opposite reason: in a republic whose courts work for whoever pays them, a god who cannot be bought is the only judge most Tarvennese will ever meet on equal terms with their betters.

## Magic

Aelwyth is one of the most magically active regions in the known world. The great central bay is believed to be a nexus of mystical energy, and the veil between the mortal world and other realms is thinner here than anywhere outside of Élavendre.

The [[affiliation-panepistmm|the Epistemium]] maintains chapterhouses in each of Aelwyth's five great cities, functioning as they do everywhere — as houses of knowledge and learning, teaching all subjects and hosting sages of every philosophical discipline. As on the mainland, the [[affiliation-ordoarcanis|Ordo Arcanis]] operates through these chapterhouses, using them to extend its influence over arcane practice. In [[affiliation-kingdmdnvr|Dúnavarre]], this influence has reached its logical extreme: the Ordo governs the kingdom outright through a Synod of mages, the only polity anywhere in [[place-ankrscntnnt|Ankaris Continent]] where the Ordo holds direct political power.

Elsewhere on the island, the relationship between the local rulers and their Panepistemium chapterhouses varies — [[affiliation-kngdmldrth|Aldorath's]] feudal lords defer to their own seers on matters of prophecy, [[affiliation-repblctrvn|Tarvenne's]] senate insists on civic oversight, and the Nordmen of [[affiliation-jrldmstrmvld|Stormveld]] are culturally indifferent to scholarly institutions. But even where the Epistemium is viewed with suspicion, the chapterhouses are respected and their presence tolerated. The Epistemium's power is not military but intellectual: its scholars educate the gentry's children, its sages provide expertise no local tradition can match, and its libraries hold knowledge available nowhere else. A polity that earns the Epistemium's sanction — losing access to its teachers, its specialists, and its accumulated wisdom — finds life considerably harder for its ruling class. This quiet leverage ensures that chapterhouse doors remain open across the island, whatever the local rulers may think of the Ordo lurking behind them.

## Relations

Aelwyth's closest ties are with [[place-elavendre|Élavendre]] on the nearby mainland. Dúnavarre's southeastern harbors maintain trading relationships across the [[place-vylarianse|Vylarian Sea]]. The Nordmen of Stormveld maintain connections to [[affiliation-kngdmnrdhm|Kingdom of Nordheim]]. Tarvenne has cultivated diplomatic channels with the [[affiliation-vylarinmpr|Vylarian Empire]].

## The Elder Kingdom

Before there were kingdoms on Aelwyth there was one, and both elder races held it.

After [[lore-khazarturn|Khazártúrn]] fell in 2427 BF the [[lore-flksinale|Sinalë]] and
[[lore-flkkhazar|Khazári]] ceased dealing with one another everywhere in the world — except on this
island, where instead they attempted to repair it. They united Aelwyth under a **single crown** held by a
Sinalë king and governed it together for **six centuries**: the only reconciliation either race has ever
tried.

It was ended by refugees. The **Pelwar**, driven off the mainland by the [[place-vrystwald|Varokh]],
reached Aelwyth around **1200 BF** with nowhere else to go, and an island has a fixed amount of good
land. Two centuries of arrival and pressure and reprisal became the **Great War**, and in **984 BF** the
king was killed at the [[place-threesisters|Three Sisters]] in what is now the
[[place-cntrlhghlnds|Central Highlands]]. The Sinalë withdrew into the [[place-hallowwood|Hallowwood]];
the Khazári finished the war alone and have not spoken to them since.

Every human on Aelwyth today — every realm, every tribe — descends from those refugees. None of them
know it, and neither elder race has ever seen a reason to tell them.

## The Island and the World

Two things are true about Aelwyth at once, and neither of the people concerned believes the other.

**Aelwythans think of themselves as the world.** Seven hundred thousand people on one island conduct
their affairs with the entire seriousness of continental powers: the rivalry between
[[affiliation-kngdmldrth|Aldorath]] and [[affiliation-kingdmdnvr|Dúnavarre]] is followed as great
politics, the standing of the realms is weighed and argued, and a good Aelwythan family knows its
position in an order it has never occurred to them is local. A single Vylarian province holds ten times
as many people as the whole island. Most Aelwythans have no functional idea of this, and those who are
told it tend to treat the figure as a traveller's exaggeration.

This is not a quirk of one realm. **Aelwyth is insular and parochial through and through**, and for a
plain reason: almost nobody leaves. The mainland is a long and dangerous sail; what news arrives is
second-hand, years old, and carried by people with an interest in telling their patrons what pleases
them. There is, on the whole island, almost nobody in a position to say _that is not how it is done
elsewhere_ — and there has not been for generations.

So every Aelwythan institution is conducted with total seriousness and no external measure. Aldorath's
lords hold court as though their precedence mattered beyond the next valley; Dúnavarre's Synod deliberates
as a great power; Stormveld's jarls reckon themselves conquerors of consequence. The most florid case is
[[affiliation-repblctrvn|Tarvenne]], which has built an entire imitation Vylarian republic — Senate,
senators, mantles, portico — out of hearsay, and cannot tell how it looks, because no one there has seen
the original.

### The One Exception

There is exactly one body on Aelwyth that knows precisely how the island compares with the mainland, and
that is the **Synod** of [[affiliation-ordoarcanis|Ordo Arcanis]] mages who govern
[[affiliation-kingdmdnvr|Dúnavarre]].

They are not parochial and never have been. They are members of a continental institution, they read its
correspondence, some of them trained in the Empire, and they know to the nearest order of magnitude how
small Aelwyth is and how little the mainland thinks of it. They know what a Vylarian would make of
[[affiliation-repblctrvn|Tarvenne]]'s Senate.

They have never said so. Not once, to anybody.

**The rest of western Thalorna thinks of Aelwyth as somewhere to avoid.** Its reputation abroad is
uniformly bad and uniformly lurid: a wilderness of barbarians, fell creatures and mystical powers, where
the forests are not safe, the tribes take heads, and the ruling class of one kingdom are mages who
answer to nobody. Mainland factors quote higher for the crossing. Mainland mothers use it in
warnings.

Most inhabitants of Aelwyth would be astonished to hear any of it. Their lives are boring and normal in
the way lives generally are — market days, tithes, weather, the harvest, the neighbours — and the most
alarming thing the great majority will ever meet is a bad winter.

## What the Reputation Gets Right

The reputation is wrong about the people and **right about the land** — and, within living memory, right
about something else as well.

There are **[[lore-grukaraelwyth|Grukar on Aelwyth]]**, and there have been for the better part of
**seven hundred years** — established in the empty third of the island, endemic, and impossible to
eradicate. The mainland's talk of fell creatures in the Aelwythan woods is very old, and so are they.
It is entirely possible the reputation was always about them.

There genuinely are places on Aelwyth where the fae are strong — sites of real and unpredictable power,
concentrated in the deep forest of the interior and in the wilder north, in country that the settled
realms have never brought under the plough and do not pretend to govern. These are not folklore. The
tribes of those regions organise their lives around them, the realms' borders bend to avoid them, and
the [[affiliation-ordoarcanis|Ordo]] presence in [[affiliation-kingdmdnvr|Dúnavarre]] is not
unconnected with the fact.

So the mainland is not simply wrong; it has heard true things about a third of the island and applied
them to all of it — and has been correct for centuries about a third thing it has never troubled to
understand. And the Aelwythan farmer who has never in his life seen anything stranger than a
heron is also not wrong, because he has never had cause to go where such things are.

## The Synod's Backyard

Why the Ordo Arcanis governs one Aelwythan kingdom outright — the only place in the world where it does —
is a question usually answered in terms of Dúnavarren history. The more useful answer is on the rest of
the island.

**Aelwyth is where the Ordo can study the fae without constraint.** In
[[place-elavendre|Élavendre]], which is the richest fae country in the known world, the Ordo is permitted
and limited: it holds the University at Béravel and it does not go past the tree line, because the
[[affiliation-alndnwrdns|Áelendan Wardens]] enforce a boundary the Élavendren crown declines to move.
Aelwyth has real fae sites and **no equivalent institution**. The country they lie in belongs to
scattered tribes with no common council, no wardens, no treaty with anyone and no means of compelling
the lowland realms to care.

So the Synod does there what it cannot do anywhere else, and has done for generations.

It also **protects** Aelwyth, and the word is used sincerely by everyone including the Synod. Dúnavarren
mages have warned off, turned back and occasionally destroyed things that would otherwise have reached
the island's people. The other realms are aware of it and grateful in a resentful sort of way.

But protection and possession are difficult to tell apart from outside, and the Synod's interests run all
one way. An Aelwyth that stays isolated, disregarded and slightly frightening is an Aelwyth nobody else
comes to. The island's parochialism keeps its people incurious; its dreadful reputation keeps the
mainland away; and the tribes' disunity keeps the fae country open. Every one of those conditions
benefits the Synod, and the Synod has never lifted a finger to change any of them.

It has done one thing deliberately. **Every ship crossing between Aelwyth and the mainland must call
first at [[place-ravenmoor|Ravenmoor]]** to be inspected — inbound before it may go on to any other
port, outbound before it may leave. Prohibited goods are the stated purpose; magic and relics are the
real interest, and are recorded and frequently detained. The other realms dislike it and acquiesce, for two reasons that reinforce each other. They are **afraid of Dúnavarre**, and the fear is specific. The Synod is the Ordo's central chantry for
the island, and every court on Aelwyth keeps Ordo advisors it would be crippled without. A realm that
goes around the Synod finds those advisors taking a courteous leave and no replacement obtainable from
anywhere — shunned by the very men its neighbours still have. If that does not suffice, harvests fail
and sicknesses arrive that no physician knows, and nothing is ever claimed or connected. It is also
reversible: acknowledge the fault, pay restitution, petition the Synod at whatever length it requires,
and the advisors come back and the misfortunes stop. And they do not, in the end, care very
much: an insular people with no interest in the mainland loses little by letting somebody else manage
the mainland, and what an Aelwythan realm cares about is what happens **on Aelwyth**. Dúnavarre wants
the tedious business of foreigners; it is welcome to it.

**Except Stormveld**, which is the exception here as it is everywhere else. The effect is that the Synod sees the
island's entire commerce, meets every mainland visitor first, and decides a great deal of what Aelwyth
learns of the world.

Whether it has done more than not lift a finger — whether the reputation abroad is merely convenient or
has been quietly encouraged — is a question nobody on Aelwyth is equipped to ask. The Synod has never
denied a story about the island in its life.

## Population

Aelwyth holds about **710,000** people, which is few for an island of its size, and the reason is that
most of Aelwyth is empty: **a third of it is dense forest** — old, deep and effectively unsettled — and
beyond that lie further large tracts of upland, moor and bog that support nobody at all.

They fall into three groups, and the smallest of the three is not a tribe and should not be counted as
one.

| Group                         | People   |
| ----------------------------- | -------- |
| The four settled realms       | ~575,000 |
| The tribal peoples            | ~125,000 |
| The [[lore-vardain\|Vardain]] | ~10,000  |

The **tribal peoples** — about a sixth of the island — live outside every realm, in the
[[place-pshtrwldrns|Peshtar Wilderness]] across the north-west and much of the northern coast, and in
isolated wooded communities through the interior and the eastern and southern forest. The lowland realms
call all of them barbarians, which is convenient and uninformative; the forest peoples are markedly more
warlike than the northern tribes, and the settled realms treat the forest margins as frontier rather
than border.

The **Vardain** are something else entirely, and lumping them with the tribes is the commonest error
outsiders make about Aelwyth. They are the free remnant of **Vardanreach**, the nation that held the
whole north-east until the Nordmen took it sixty years ago — a settled, literate, farming people whose
kin make up the hundred and twenty thousand thralls of [[affiliation-jrldmstrmvld|Stormveld]]. Ten
thousand of them live in the [[place-vardainvalleys|high valleys]] of the
[[place-ironfells|Ironfells]] under the protection of the [[lore-flkkhazar|Khazári]], which is why they
belong to no realm and why they are not barbarians in any sense whatever.

The remaining **575,000** are divided between four settled realms, each holding a different part of the
coast:

| Realm                                              | People   | Where            |
| -------------------------------------------------- | -------- | ---------------- |
| [[affiliation-kngdmldrth\|Kingdom of Aldorath]]    | ~200,000 | eastern interior |
| [[affiliation-jrldmstrmvld\|Jarldom of Stormveld]] | ~150,000 | north-east       |
| [[affiliation-repblctrvn\|Republic of Tarvenne]]   | ~150,000 | western coast    |
| [[affiliation-kingdmdnvr\|Kingdom of Dúnavarre]]   | ~75,000  | south-east       |

Three things about that table matter more than the numbers.

**Stormveld is not an Aelwythan realm.** Nordmen took the north-east some sixty years ago and enslaved
the population; of its 150,000, around 30,000 are Nordmen and around 120,000 are native thralls. A
Nordmen holding a third of the island's settled people sits a hundred and twenty sea-miles from
[[place-elavendre|Élavendre]], which explains a good deal of Élavendren foreign policy.

**Aldorath is the largest**, with Stormveld and Tarvenne close behind, and the most conventionally feudal: four in five of its people are
serfs or peasants on manorial estates.

**Dúnavarre is the smallest and the most powerful**, and this is the single most informative fact about
Aelwyth. [[affiliation-kngdmldrth|Aldorath]] has nearly three times as many subjects and
[[affiliation-repblctrvn|Tarvenne]] twice as many, and both mind very much what the little kingdom on
the south-east coast thinks of them.

The reason is not the harbours, or the trade, or even the Order of the Just Blade. It is that the
**Synod is the Ordo's central chantry for the island**, and every court on Aelwyth keeps Ordo advisors
it would be crippled without. Dúnavarre does not need an army to discipline a neighbour three times its
size. It needs only to let the Ordo in that neighbour's realm know its services are no longer
appropriate — and to decline, from every chantry the petitioner can reach, to send anyone else.

A king of two hundred thousand who has lost his mages and cannot obtain another from anywhere is weaker
than a king of seventy-five thousand who has all of his. Every ruler on the island has done that sum.

## See Also

- [[place-elavendre|Élavendre]] — Nearest mainland region
- [[affiliation-kngdmnrdhm|Kingdom of Nordheim]] — Source of northern settlers
- [[affiliation-arldnpnthn|Aurèldían]] — Dominant pantheon
- [[affiliation-asguardian|Asguardian Pantheon]] — Northern pantheon influence
- [[lore-flksinale|Sinalë]] — Elder race with southern forest enclaves
- [[lore-flkkhazar|Khazári]] — Elder race with northeastern mountain holds
