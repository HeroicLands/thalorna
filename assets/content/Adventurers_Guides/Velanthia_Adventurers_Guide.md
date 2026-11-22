---
shortcode: velanthiaadvguide
name: {full: Velanthia Adventurer's Guide}
type: doc
subType: settingguide
description: A player and GM introduction to Velanthia, the grain-and-river land between the Nordlands forests and the steppe, where three river-princes, three Hosts and a network of granary monasteries live on one another's deliveries, and to Grukarholm, the marsh country where the Grukar nests lie and the paid forts watch.
tags: [draft]
data: {packFolder: adventurersguides, culture: velanthclt}
---

> You come down the central river on a grain barge in the last week of harvest, and the port announces itself an hour before you see it. Smoke from the smokehouses lies flat over the water, and the sound of cranes and shouting carries across the current. Then the quays open ahead: a mile of piled planks and ladders, barges tied three deep at the posts, and the warehouses of the merchant houses standing behind them in rows. A fur boat from the northern forest bumps against the pilings with its bales lashed under tarred hide. A horse-trader in felt boots leans on a rail above a string of crossbred horses, and a harper under an awning is already playing for the bargemen who have been paid.
>
> A clerk with a ledger under his arm steps aboard before the lines are made fast and writes down your cargo, your master and your owner without looking up. On the quay a neat man of middle years, round-faced, with a close black mustache and a plain coat, watches the clerk's pen and waits until it stops. He holds his own ledger open on his forearm and lays his free hand flat on his chest. "Dobrogesh," he says, and he waits until you have said it back with a hand on your own chest. "[[being-trvkmvrnch|Torvik Mevranich]], port-warden of [[place-brlvsh|Brelavesh]]. Every boat is written before a sack is carried." He writes your name as you say it. "Whose river did you come down, and whose grain is this?" You answer, and he writes that too, and only then does he glance at the sword at your belt. "The gate asks you to leave that with the guard. The prince's toll is named at the end of the quay, and it is a sum, not a share of the load." Behind him a merchant's factor, who has been standing very still beside a pile of sacks, turns to check a seal that does not need checking.

[[place-velanthrgn|Velanthia Region]] is a landlocked belt of forest, black-earth grain country and open grass, about a thousand miles from the forests of the [[place-nrdlndsrgn|Nordlands Region]] and [[place-vrystwald|Vristwald]] in the west to the steppe of the [[place-khzryndsrtrgn|Khazrin Desert Region]] in the east, with about 4,000,000 people between them. No sovereign rules it and no capital stands in it. Its rivers are its roads and its wealth: the wheat, rye and flax of the lowlands, the furs of the northern forest and the horses of the grass all move on water or along the river roads, and the people who hold a landing, a mill, a ferry or a barn hold a share of everything that passes. To the south a mountain line closes the grain belt against [[place-helionis|Helionis]] and the [[place-byzariargn|Bizaria Region]], and to the northwest the forest and marsh of the [[lore-grukarfolk|Grukar Folk]] begin.

**The one thing to understand first: every power here holds one thing and lacks another, and each knows what the others owe.** Torvik's question, whose river you came down, asks what you owe and who will feed you in a bad year. The prince of the lowlands has the grain and no silver in his hand. The prince of the port has the silver and the fewest soldiers. The prince of the frontier has the forts and no field worth plowing. The Hosts hold the grass and the passes for whoever pays them on time, and the monasteries hold a reserve that nobody may count. Deliveries come late and everyone remembers the date. The rivalry never ends and never breaks, because a prince who ruins his neighbor starves his own barns, and everything below runs on that arithmetic.

## Three Rivers

A river-prince, a zhuvar, holds a river with its landings, its mills, its ferries and its grain, and he holds them by descent. He keeps a dvorad, the riders and household sworn to his hall, and a pravad, a judge who rules by the one body of customary law that every princely house recognizes, so that a dispute between two rivers is argued from the same custom on both banks. The land has perhaps a dozen substantial princely states, plus several smaller ones, and, except for Brelavesh, their capitals are towns. Three princes are told in full, and between them they hold about 1,500,000 of the 4,000,000 people.

The lowland river belongs to the [[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]], the most populous of the three, where [[being-zhtvddbrvdch|Zhitovod Dobrovodich]] takes his tithe in kind and his wealth is the sacks in his granary. At [[place-zhtvsh|Zhitavesh]], a walled town of about eight thousand, you arrive by a road lined with mill-races and stubble, and the town shows first as a roofline of barns. The market square is the town's whole public life. The prince's hall faces the monastery's gate across it, each with its granary behind it, and every wagon is stopped at the gate and counted into a ledger by a clerk. A stranger with no grain is waved through, and one with any is asked whose it is.

The port river belongs to the [[affiliation-prncdmbrlvsh|Princedom of Brelavesh]], and its prince, [[being-mlgryrgrch|Milogor Yarogorich]], lives on tolls and his mint. Brelavesh is the one city in Velanthia, about twenty thousand people on a mile of quays, and it is where the grain barges, the fur boats of the forest and the horse-traders of the Khazrin meet. The fur boats prefer the palisaded landing town of [[place-rdvsh|Radavesh]], where the tolls are lower, and the boatwomen of Vristwald who bring the pelts are its most valued guests.

The frontier river belongs to the [[affiliation-prncdmbrvvsh|Princedom of Brevavesh]], whose prince, [[being-krdgrbrvgrch|Krodogor Brevogorich]], lives in the upper hall of the stone fort at [[place-brvvsh|Brevavesh]], a fortress town of about three thousand where the forest begins at a bowshot. He is the poorest of the three in grain and spends more on soldiers than the other two together, since his forts face the Grukar country. His captain of the forts, [[being-vrklrvgrch|Ovrik Lervogorich]], keeps the garrison rolls, and the ransom brokers of the town ride between the fort and a ford town down the river, [Yaravesh]{.name data-type="place/settlement"}, where ransoms are counted out and captives handed back.

Each prince is short of what another holds. Zhitavesh sends grain up to the forts of Brevavesh, Brelavesh sends the silver that pays their wardens, and neither delivery arrives on time. The port prince buys mills upriver to carry more grain in his own barges, which the lowland prince reads as a threat, and the lowland prince cannot sell upriver at the passes without the port noticing.

```sql
SELECT address.slug AS _ref,
       name.full AS "Settlement",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND list_contains(data.parents, 'thalorna-note-place-velanthrgn')
  AND data.population >= 2000
  AND state = 'full'
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

```sql
SELECT address.slug AS _ref,
       name.full AS "Polity",
       data.territorial_population AS "People"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND data.culture = 'thalorna-note-lore-velanthclt'
ORDER BY data.territorial_population DESC, name.full COLLATE NOCASE
```

Each Host lies inside its prince's territory, so the rows overlap: about 300,000 of the people counted above live in the country of the three Hosts.

The towns and the polities are only the larger holdings. A village is a row in its polity's settlement table: a mill-and-granary village that supplies the seat's barns, a flax-growing village, a ferry village below the port, a hamlet of rope-makers and net-menders. [[place-dbrvsh|Dobravesh]], the lowland's second grain market, shows how the land fits together: a monastic barn and the prince's granary stand face to face across its market square, each with its own keeper and its own ledger.

## The Grain and the Count

> At the great granary at Zhitavesh, a bratar in a patched gray habit takes your pack and shows you a bench in the guest barn. There is straw, bread and a bowl of porridge. He asks you to work an hour in the yard before dark, and you spend it splitting kindling in sight of a barn you are not allowed to enter.

The granary monasteries are houses of the [[affiliation-lizelas|Faith of Lizelas]], and the Velanthians use one word, zhitnad, for a granary and for the monastery that keeps it. A bratar, a monk, works the land and keeps the hours, a zhitnar holds the keys to a barn and answers for every sack, and the starbrat who heads a house is chosen by the monks from among themselves. Each house stands alone. The [[affiliation-grnrymnstrs|Granary Monasteries of Lizelas]] share no superior, and the heads meet when the princes and the Hosts need a mediator both sides will trust. The house at Zhitavesh under [[being-rdrbskvnch|Radora Boskvanich]] is the one princes and Hosts send to first. The houses also keep the land's letters: they copy the customary law, teach the sons of the lowland halls to read, and write the ledgers a prince has no clerk for. When the rains failed in 641 AF they fed the villages from barns the princes could not count ([[lore-leanyear|The Year of the Barns]]), and the princes have wanted that count since.

This year the rain came late to the eastern fields, and the question is urgent. [[being-dvkrdvdch|Duvek Radovodich]], who keeps the lowland prince's granary, has twice been refused a barn, because the monks hold that a barn opened to a prince is a barn priced. The [[place-frrygrnry|Ferry Granary]], a house on the river crossing of the grain road a day's ride below the pass market, shows the problem at small scale: the keeper wants a count of its barn, and [[being-svdnvlktch|Sovidan Volketich]] of the Sevret Host wants grain advanced against his riders' pay, and its starbrat will give neither on a bare word.

The merchant houses live on the same delay. A torgad is a merchant house, the firm with its ledgers and its household, and a _torgel_ is a merchant. The [[affiliation-mrchnthsrvr|Merchant Houses of the Rivers]] buy the harvest before it is cut, ship it on their own boats and lend against the next crop, so a prince in a lean year owes them more than any rider's pay. [[being-tshdrslvnch|Teshodar Sulvanich]] presides over their assembly at Brelavesh, and the port houses and the grain-town houses are quarreling over the price of the coming harvest, the port houses wanting to cut the credit they extend and the grain towns calling the cut a way to buy their crop cheap. The princes each depend on one side and cannot end it.

:::secret {title="What the barns hold"}
The Ferry Granary's barn is nearly empty. The house lent most of its reserve to the merchant houses against the next harvest, so the grain it is owed stands in the merchants' warehouses, and it advanced grain to the Sevret Host on the same terms. A count would show the heads and the Host that the reserve is gone. The great house at Zhitavesh holds more than it admits, enough for two bad years, and Radora Boskvanich keeps that figure from the prince and from the heads' meeting. Zhitovod Dobrovodich has pledged a third of the autumn tithe to a grain-town house against the silver for the Hosts' pay, and a short harvest leaves him owing grain he does not hold.
:::

## The Hosts and the Grass

> You wait with a wagon train at the gate of the [[affiliation-hsttrvl|Tarvál Host]], and the toll-keeper, a rider with a tally-board across his saddle bow, counts the caravan ahead of you by the animals: horses of the steppe breed, salt in sacks, a pack-string under felt. A man in a good coat rides out from the muster yard, reads the board over the toll-keeper's shoulder and rides back in without a word. The carter beside you watches him go and decides not to ask.

East and southeast of the river-princes' heartland the land opens into grass, and the people there are the Hosts: horse-keeping farmer-warriors who sow enough grain to feed their riders and have taken from the steppe as much of its way of life as suits them. Each Host takes its name from its founding ataman or its river, and its polvod, the ataman, holds the office in the founding line. A Host keeps its own law, its own muster and a portable battle-shrine, and it wants three things: to be left alone, to be paid and to be free to take what the frontier offers. It serves a prince for silver and grain, and it can walk away. The princes know it, and it is the fear they live with, because a Host that changes sides takes the riders who hold the frontier and the toll roads that feed the princes' mints.

Three Hosts are told in full. The [[affiliation-hsttrvl|Tarvál Host]], at the muster town of [[place-vlkvsh|Volkavesh]], holds the eastern caravan roads and takes a toll of its own on every caravan. It rode for the prince of Zhitavesh until 697 AF, when it took the port's pay instead ([[lore-tarvalturn|The Tarvál Host Changes Sides]]), and the princes have feared a change of sides since. [[being-vlkrkdgrch|Volkar Kodogorich]] is its ataman, and he has been offered more by the steppe tribes who share his roads and lets the prince hear of it. The [[affiliation-hstsvrt|Sevret Host]], at [[place-tvsknv|Tveskanov]] close under the southern range, holds the pass roads for the prince of Zhitavesh and rides escort for the drovers who winter beyond them. If its pay is late, its riders collect their own tolls at the pass. The [[affiliation-hstkhrd|Khorad Host]], at [[place-krdshv|Krodashov]] on the open steppe margin, is nearest the tribes of the Khazrin and the one the prince of Zhitavesh uses to speak to them. It breeds the crossbred horses the steppe prizes and the western cavalry buys.

The three gather each year at [[place-bnnrfld|Banner Field]], a ring of stones and a low turf rampart with a battle-shrine of oak posts and iron at the center. No prince holds the ground, and the Hosts keep its peace by oath. Each ataman sits in a ring with the heads of his clans behind him and speaks his own Host's price, while the princes' envoys wait outside the rampart with the pay. A stranger is a guest under the Hosts' oath, and the oath does not make him welcome inside the ring. This year the gathering has to settle whether the Hosts answer the steppe tribes together or each alone, because [[being-blknkldv|Belukan Kelodov]] of the Khorad Host has told the river communities to stop paying the [[affiliation-sqrtrtrb|Soqritur]] and the Soqritur have answered with riders of their own.

The communities on that inland edge are neither wholly Velanthian nor wholly of the steppe. At [[place-smkrv|Semukarov]], a village of fishers and barley farmers whom the Soqritur hold under a second law, the tribe's river-warden sits beside the headman, and the village answers to whichever side has had the better year. The speech of the frontier carries its vocabulary: koser, the safe-conduct and the toll paid for it, lushik, the ransom the kin of a captive pay to the riders who took him, yadak, a raid across the frontier, and semuk, a guest under a tribe's protection. If you pay a toll here, ask what it buys.

## The Range and the Pass Market

The southern rim of the land is a mountain line, [[place-krvgr|Karvogora]], the Stone Height, closing the grain belt against Helionis and the [[place-northrnmrch|Northern March]] of Bizaria. Its passes carry the harvest south from late summer until the snow shuts them, and they carry ore and iron north. Velanthian drovers winter their herds on the March side by long custom, and the Sevret Host patrols the approaches and rides escort. Marauders come down from the mining country beyond, and [[affiliation-blackflame|The Black Flame]] is strong there, but it holds nothing inside Velanthia: the danger belongs to the passes, and the patrols meet it there. A rockfall can close a pass in the week the grain is due.

At the foot of the range stands [[place-tvskvsh|Tveskavesh]], a walled market town of about three and a half thousand that lives by the change of teams. A wagon that comes up from the lowlands with a pair of horses cannot take the pass with them, so the stables rent heavy horses and oxen by the trip. The custom of the market is plain: a bargain struck in the square binds until the wagon has crossed the south gate. The prince of Zhitavesh wants to sell grain here that the port does not see, the port houses keep agents in the square who count the wagons that go south, and the monasteries' grain goes south too, with nobody at the market willing to say whose it is. A pass that closes, or a patrol that collects its own tolls, would stop the whole trade in a week.

## Faith, Law and Letters

The formal faiths are those of the [[affiliation-arldnpnthn|Aureldian Pantheon]], with a heavy local emphasis on the harvest goddess [[lore-lizelasdty|Lizelas]] and on the storm-and-protection aspects of the warrior gods. The older marks remain beneath the images. The [[place-hrsoks|Horse Oaks]], a stand of oaks on a river bluff a day's ride upstream of Brelavesh, are carved with sun-wheels and long-necked river-horses that are older than any shrine of the pantheon in the country, and the villages cut the first sheaf of the harvest and lay it at the roots of the largest tree. The priesthood has long since stopped trying to remove the marks. This year the port wants the grove's oak for its mills, the villages of the bluff will sell windfall and nothing standing, and the late rain has made the first sheaf harder to cut.

The Hosts keep a more austere faith, with portable battle-shrines and traveling priests in place of fixed temples, and an emphasis on sky and storm, oaths sworn under the open sky and the great gatherings where several Hosts meet. Letters belong to the monks. They copy the liturgies and the court's letters in the [[skill-helnkscrpt|Helónika Script]], in which the courtly [[skill-velanthlng|Velanthian Language]] is written, and a village scribe is almost always a monk's pupil. A prince who wants a charter written sends to the nearest house.

Law is custom. No office joins the rivers: when the whole country must act, in a great steppe incursion, a Nordmal push in the west, a famine year or a dispute between great houses, the princes call a council. It has no standing and no executive power. It advises, bargains and coordinates, and it ends when the danger does. What outlasts a council is the shared custom it argued from. Good, to a Velanthian, is the granary full before the snow, the word given at the ford and kept at the ford, and the hall that feeds the people who sit at it; evil is grain held back from a neighbor's famine, a river closed to a neighbor's boats and a retinue turned against the man who fed it.

## Grukarholm: The Country the Forts Face

> From the hill beside [[place-trvgrfrt|Torvogor Fort]] you can see where the river leaves the forest. The bell hangs on a frame at the crest with the signal fire laid beneath it, and below the stone walls the village keeps its evening quiet: smoke, a cart, a man walking out toward the water. A healer is sorting rags on a bench. "The landing is hours from here," she says, nodding at the bend. "When the canoes come down at dusk, the man on the watch must see them and reach the hill before anything is lit." She wrings out a cloth. "Salt and iron come up on the river-trader's boat. Wounds come up on my cart."

[[place-grkrhlmrgn|Grukarholm Region]] is the frontier country no neighbor tries to settle. It is a region and not a state: it is laid over the easternmost part of Vristwald and the westernmost part of Velanthia, and every fort, village and landing in it belongs to one of those two lands. It lies south of [[place-norgaad|Norgaad]], southeast of [[place-nordheim|Nordheim]] and southwest of [[place-malagna|Malagna]], and no line is drawn around it. It is a country of dense forest, slow brown rivers and a vast marsh in which perhaps fifty thousand [[lore-grukarfolk|Grukar Folk]] live in many separate tribes. Each tribe centers on its own fertile [[being-grkrahk|Grukar-ahk]], and the tribes have no structure and no cooperation outside their own nests. The area is infested by them, and the humans gave it a name. Nothing there is agriculturally worth the plow, so nobody else wanted it.

**The Grukar live in their nests, and nowhere else.** No Grukar lives in a fort or a village. A Grukar cannot communicate with a human, with one exception: only a [[being-grkrsh|Grukar-Sha]] can take in a stranger's words, and what it learns goes to its own spawner. A Grukar never cooperates with humans. At most a nest pretends to, on the direction of a Sha, and hearing a Sha speak is neither a parley nor a promise of safe passage. No trade, envoy or ransom passes between a nest and a neighbor, and a person the Grukar take is eaten. The frontier gives nothing back: no captive is sold, no market repays the labor of the watch, and a path through the nests has no protected place to stop.

Humans go in at the margins as hunters for furs, who buy a night's passage from a tired warden and come out with what they can carry. The paid wardens are the river-princes' men, and their stone forts are raised at the prince of Brevavesh's expense. Each is a tverad, a paid fort, with a hall for the garrison, a village beneath its walls and a bell and signal fire on the hill. Each village gives a man to the watch in turn. The wardens are paid, tired and corruptible, and a late payment shows first in who is let through at night. A hunter who goes in past the last fort is on his own.

The region's sites are its nests. A hunter of the margin, a Skathwald villager or a warden can name the nests known now, and many more are known to nobody. Nests appear and die, so no list of them is complete or current: a nest a party is told of may be gone, and a new one may stand where none was. Finding a nest nobody knows, clearing a known one, and recovering what a dead one left behind are each work for a party.

These are the places to know.

- [[place-skathengrund|Skathengrund]], the marsh the Varokh call the harm's bottom land and the Nordmal call the Drowned Country, is passable on foot only on the winter ice or in a few dry weeks of summer. The nests inside it are reached by canoe, by cause-walks of sunken logs, or by paths no outsider can see. A [[being-ncrtcmr|Necrotic Mire]] moves through it, and the nests keep away from its track.
- [[place-grimhreth|Grimhreth]], the fierce ford, is a cause-walk that one nest lays from the forest edge of [[place-skathwald|Skathwald]] into the marsh, laying the logs again as they sink; that nest lies at its far end. Raiding parties come out along it, and fur hunters who find it use it to reach the margin before the thaw closes it.
- [[place-zvekbregad|Zvek Bregad]], the bell landing, is the Velanthian bank where the slow rivers open toward the grain country and where raiding canoes come ashore in summer from the nests upstream. The Grukar come to it as a raiding party and for nothing else.
- [[place-grimak|Grimak]], the fierce thicket, is the blood-field of Skathwald's marsh, a ring of burned stumps around a black hollow where the Skathwald villages burned a Grukar nest in 536 AF ([[lore-grimakburning|The Burning at Grimak]]). A voice comes out of the thorn by a Varokh name and asks the listener to come and help. Every Shaman in Skathwald forbids answering it.
- [[place-trvgrfrt|Torvogor Fort]] is a Velanthian stone fort on a rise over a river that comes out of the marsh, and it watches the stretch of bank at Zvek Bregad, a landing some hours' travel away.
- [[place-sdrvdfrt|Sedrovod Fort]], the other Velanthian fort, stands alone on the forest road with its village and no town around it, facing the Grukar country from the southeast, where Varokh war-bands cross the forest edge in autumn.

The people of the margin are humans with their own reasons. [[being-krvgrlrvkv|Karvogor Lervikov]] is the warden of Torvogor Fort, who keeps the bell and the roll for the landing. [[being-brvnbrvkv|Brevana Brevekov]] sets the village's wounds and goes down to the landing with a cart after a raid. [[being-brlndvshv|Brelana Duvashov]] poles a flat boat up the slow rivers with salt, iron and needles, asking at each landing where the marsh has moved, and [[being-skgrdbrshv|Sokogor Dobrashov]] is a Tarvál Host rider lent to Sedrovod Fort as a tracker. From the Skathwald villages, [[being-skthrkrvndvth|Skathrik ira Vandvith wur Mahnreth]] is a Varokh fur hunter who works the margins of the Drowned Country, and [[being-wlfrnrfrdrnd|Wulfrún ira Frodrúnd wur Hildholt]] is a young woman of [[place-hildholt|Hildholt]] who walked out of a village that a raiding party took.

:::secret {title="The forts' rolls"}
The captain of the forts keeps two sets of rolls: the one he shows the prince each quarter, and the one that says who is actually in the barracks. A third of the wardens the prince pays are not there. Ovrik Lervogorich pays their wages to the bell-ringers, cooks and village watches beneath the forts, because the silver comes late and the grain later, and the prince would call it theft. On most dusks the one man the village sends to the landing at Torvogor is a boy of twelve, whom the warden writes on the roll as a man.
:::

Raids come as small parties along the rivers and the cause-walks, and the villages beneath the forts ring their bells and burn their fires as each party passes. The tribes' own fighting keeps their numbers below what the land could feed, and none has combined with another.

## People to Meet

The harper in the bargemen's inn, the factor at the pass market's south gate and the miller who weighs a sack before and after all have lives beyond your errand. Some of Velanthia's people hold its barns, its tolls and its quarrels in their hands:

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-velanthclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

Behind the three princes stand the officers who do the work. [[being-trvkmvrnch|Torvik Mevranich]] keeps the quays of Brelavesh by ledger, and the keeper of the lowland prince's granary tallies the barns of Zhitavesh. [[being-yrnbrlvdch|Yarana Brelovodich]] plays her harp in four of the quay inns and carries news from landing to landing in her songs. A Velanthian carries a given name and a house name, and the house name tells whose line it is: Brelovodich is the line of a founder called Brelovod, and Duvavesh is the house of the oak seat. A name such as Kodogor or Sovidena places its bearer on the frontier as plainly as an accent would.

## What Gets a Newcomer into Trouble

- **Answer the greeting.** The one who holds a place says _dobrogesh_, good guest, with a hand flat on the chest, and expects the word and the hand back; a monk greets every arriver with a bow, and a rider coming to a Host's muster shows an open palm before he is within hearing. A stranger who gives nothing back has not accepted the greeting, and a rider who comes in without the open palm, or with a hand on his sword, is met as a raider.
- **Give your name and your cargo at the quay.** A tally-clerk of the port-warden meets every boat at Brelavesh and writes its cargo, its master and its owner before a sack is carried.
- **Leave your sword at the gate of Brelavesh.** The port is the richest place in the land and has the fewest soldiers of the three princes, and it asks a stranger with a sword to leave it with the guard.
- **Do not ask a starbrat to open the barn.** A house that opens its barn to a prince has shown its price. The monks give a traveler a bowl of porridge and ask for an hour in the yard, and they do not discuss what the barn holds.
- **Do not treat an ataman's word as his prince's.** A Host serves for pay, and an ataman who is paid late or paid less than a tribe offers is free to listen. At Banner Field a stranger is a guest under the Hosts' oath and is not welcome inside the ring.
- **Pay a toll knowing what it buys.** On the eastern edge a koser is a safe-conduct and the toll for it, and the ataman of the Khorad Host wants for himself the toll that the river communities pay the tribe.
- **Bargain in the square and cross the gate.** At Tveskavesh a bargain struck in the square binds until the wagon has crossed the south gate.
- **Do not cut a standing oak at the Horse Oaks.** The villages of the bluff sell windfall and nothing standing, and a mill-wright who cuts without leave finds them at his back.
- **Never bargain with a nest.** No Velanthian does, and no prince can make an agreement that binds a nest or the tribes behind it. A Grukar that appears to cooperate does so at a Sha's direction, and it is a pretense.

## Ways In

Most parties arrive by river with someone else's errand. A merchant house wants a witness to the port-warden's audit, since the prince has raised the toll in a thin year. The quarter's silver for the wardens of the frontier forts waits at the mint for an escort up the river road. A lowland wagon master loading for the passes needs a go-between with the March's customs officers and the Sevret riders. A fur boat from Vristwald brings a boatwoman who needs a buyer who grades honestly. If you come from Velanthia, you might be a barge-hand who knows every toll-house, a rider of a Host whose pay is late, a monk's pupil who copies the customary law, a factor's clerk who counts wagons at a gate, a ransom runner between a fort and the ford, or a younger child of a lowland hall sent to a monastery to learn to read.

The land supplies its own claims on a party:

- The keeper of the lowland prince's granary wants an outsider to count the monastery's barn, and no one the monks know may enter it.
- A family has the price of a captive's ransom and needs someone to carry it to the ford at Yaravesh. The ransom brokers take a fee that both sides know and neither likes.
- The pay for the Khorad Host and the harvest pay for the Sevret Host need an escort across the grass to Banner Field, and the community the Soqritur hold wants someone to carry its protest to the gathering.
- The villages of the bluff want the mill-wrights kept away from the Horse Oaks until the first sheaf is laid.
- A river-prince's heir wants the half-burned fort at [Theodburg]{.name data-type="place/structure"} back with Varokh war-bands in it, and has begun to ask which village would send them.

Three adventures begin in the season of the late rain and can be run alone or in any order:

- [[scenario-cnfrfrd|Coin for the Ford]]: a village under a paid fort has raised the ransom for the man a war-band took from its watch, and the broker who carries it to the ford at Yaravesh is asked a price the village did not expect.
- [[scenario-gthsthdbrg|The Gatehouse at Theodburg]]: the heir of Brevavesh wants the shared fort held again by his men and a forest war-band together, and asks at Thornhaven, whose Other Chief no prince's agent has asked to witness a bargain in a century.
- [[scenario-lsttrnkrvgr|The Last Train over Karvogora]]: the last wagon trains of a short harvest load for the passes, and the riders who patrol them are owed their harvest pay.

A campaign among all of it runs on [[scenario-hrvstpy|The Harvest Pay]], the season from the late rain to the snow on the passes, when every prince must find his Hosts' pay and every Host weighs what its prince's promise is worth.

On the Grukarholm side a party is hired by the margin, never by the nests. A fur hunter must be across the cause-walk before the thaw closes it and has no village to stop in. A Varokh war-band offers its service for the season, and a warden has no silver to pay it. A river-trader asks at a landing where the Necrotic Mire was last seen, and the answer decides whether the boat goes in. At Zvek Bregad the canoes lie on the bank at dusk and the one man on the watch is hours from the hill.

Two adventures begin on the margin:

- [[scenario-lstcgrmhrth|The Last Ice at Grimhreth]]: at the end of winter a Varokh fur hunter needs carriers to bring a season's furs out across the cause-walk before the thaw closes it, and the night watcher at Hildholt has heard a step on the logs.
- [[scenario-rlftrvgr|The Relief of Torvogor]]: the quarter's silver comes up late to Torvogor Fort in the season of the raiding canoes, and a Host scout has found a track that stops at a bank with no crossing.

## Where to Read Next

[[place-velanthrgn|Velanthia Region]]
: the land, its belts, its trade and its neighbors

[[place-grkrhlmrgn|Grukarholm Region]]
: the country the Grukar nests hold and the forts that face it

[[lore-velanthclt|Velanthian]]
: the river and the prince, the hall and the retinue, the Hosts, the monasteries and the merchant houses

[[skill-velanthlng|Velanthian Language]]
: the courtly tongue, its names and the loans of the eastern reach

[[affiliation-prncdmzhtvsh|Princedom of Zhitavesh]], [[affiliation-prncdmbrlvsh|Princedom of Brelavesh]] and [[affiliation-prncdmbrvvsh|Princedom of Brevavesh]]
: the three river-princes told in full

[[affiliation-hsttrvl|Tarvál Host]], [[affiliation-hstsvrt|Sevret Host]] and [[affiliation-hstkhrd|Khorad Host]]
: the three Hosts and their atamans

[[lore-hostsforpay|The Hosts Take Pay]], [[lore-northernwar|The Border War with the Jarls]] and [[lore-leanyear|The Year of the Barns]]
: the history of the Hosts, the frontier and the granaries

[[lore-grukarfolk|Grukar Folk]]
: the castes, the inheritance rite and the appetite

[[place-vrystwald|Vristwald]]
: the forest country west of Velanthia, where Skathwald lies

## Glossary

Koser, lushik, semuk and yadak are loanwords from [[lore-sowidesclt#glossary|Sovidur]].

Dobrogesh, "good guest", is the Velanthian greeting, said do-BRO-gesh. The [[lore-velanthclt#greetings|Velanthian culture note]] gives the gestures that go with it.
