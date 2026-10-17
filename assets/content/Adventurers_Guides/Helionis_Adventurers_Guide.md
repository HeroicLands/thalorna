---
shortcode: helionisadvguide
name: {full: Helionis Adventurer's Guide, aliases: []}
type: doc
subType: settingguide
description: A player and GM introduction to the seven city-states of Helionis—their assemblies, academies, games and gods, and the ways a campaign begins there.
tags: []
data: {packFolder: adventurersguides, culture: helioniteclt}
---

> The galley rounds the headland at first light, and the oars come in together on a shout from the stern. The bay opens all at once: a great natural harbor between two arms of gray rock, its water so clear in the early sun that you can count the stones on the bottom beside the hull. Masts crowd the waterfront—war-galleys drawn up in their sheds, fat merchantmen, fishing boats nosing in with the night's catch. Above them [[place-pelagora2|Pelagora]] climbs its hill in white walls and red tile, terrace over terrace, with the olive-gray hills behind it and a colonnade along the crest catching the light like a row of teeth. The air is already warm. It smells of pitch, fish, wet rope and woodsmoke from the shipyards, where the adzes have started.
>
> On the quay, a herald in a bleached wool cloak reads a decree of the assembly to whoever will stop, and a knot of men argue with him about its third clause before he has finished it. A metic factor in a dyed Taruzelian robe counts amphorae of oil onto a lighter; two shipwrights with tarred forearms carry a mast-spar past him without breaking stride; a gray-haired woman in a saffron mantle steps around the whole business, followed by a slave with her writing-case. The oarsman who sat two benches in front of you all the way from the islands vaults onto the stones, rope-burned palms still black with tar, turns, and offers you his hand. "_Rhéthasin, dhidakhir!_" he says: speak, teach! "Of Pelagora. [Bákion Chaddaris]{.name data-type="being/npc"}, citizen, stroke oar. Which city is yours?" You name a country. He laughs, loud enough that the men at the herald's elbow look round, and asks what your people think justice is. Before you have finished the first sentence, two of them have come over to listen, and one is already shaking his head. Bákion waves him quiet and lets you finish; then he takes your bag off your shoulder, slings it on his own, and starts up the quay toward the customs shed, where a magistrate's clerk is chalking a seal across half your ship's cargo.

[[place-helionis|Helionis]] is seven cities in the hills east of the [[place-vylariargn|Vylaria Region]], three million people who share a tongue, a pantheon, a calendar of festivals and games, and an unshakable confidence in their own civilization, and who agree about almost nothing else. The country reaches the [[place-vylarianse|Vylarian Sea]] only along one short coast at its south-western corner, facing the islands of the [[place-taruzelrgn|Taruzel Region]] across the water; everything else is olive terraces, narrow valleys and abrupt ranges, with a road over each pass that joins two cities and divides them as often. The [Vylarian Republic]{.name data-type="affiliation/polity"} conquered these cities and then spent centuries sending its children to be educated by them. Their academies taught the west to argue, and the [[affiliation-ordoarcanis|Thordimalon]] was born in one of them.

This guide is what the [College of Ethics]{.name data-type="affiliation"} of the [[affiliation-panepistmm|Epistémion]] at [[place-thyrenae2|Thirenae]] gives its foreign students in their first week. They arrive from every corner of the [[place-midhalnrgn|Mídhalión Region]], most of them by sea at Pelagora, and the College would rather they made their first mistakes on paper.

**The one thing to understand before anything else: in Helionis, you are what you can defend in public.** A Helionite reputation cannot be inherited and cannot be bought. It is performed—in the agorin, in the assembly, at the games, in the theater and in court—before people competent to judge it, and it has to be performed again. A rich man's son who cannot argue is told so to his face and then invited to dinner anyway. A foreigner who will not be examined is taken for modest or for a fraud, and pressed until his hosts know which. Come prepared to say something and stand behind it, and every door in the seven cities opens to the argument.

## Seven Cities, Seven Constitutions

Each city is sovereign, with its own government, laws and customs, and each believes its constitution is the right one. Three lead the seven. Choose the one whose quarrel you want.

Choose Pelagora if you want the sea. Its harbor is one of the finest anchorages on the central sea, its shipwrights build the fastest galleys on it, and its fleet is the largest in the region and controls the sea lanes of the eastern Vylarian Sea. [[affiliation-pelagora|Pelagora]] is a democracy: free citizens vote on war, trade and law, and each of them serves in the fleet or the militia, so every vote is cast by someone who will row or fight for it. Its assembly is the loudest place in the country.

Choose Thirenae if you want the academies. It is the oldest and most prestigious of the seven, the first home of the Epistémion (the Academy of Knowledge), and its credential settles the question of where a scholar was taught. White marble colonnades, shaded courts and terraced gardens are built for contemplation and debate, and the [Library of Thirenae]{.name data-type="place/structure"} is said to hold more manuscripts than any collection outside the [[affiliation-empireakhlth|Empire of Au'Khelathu]]. [[affiliation-thyrenae|Thirenae]] is governed by a philosophical council of senior scholars and the heads of its oldest families, so power there follows a reputation for learning before it follows money. Thirenae needs Pelagora's fleet, and Pelagora needs Thirenae's diplomats; the two are rivals and partners at once.

Choose [[place-kalydria2|Kalidria]] if you want the theater. Where Thirenae pursues truth and Pelagora pursues power, Kalidria pursues beauty. Arrive in the weeks of a festival and the inns are full, a crowd waits outside every playhouse an hour before the performance, and the talk in the street is about which family paid for which play. [[affiliation-kalydria|Kalidria]]'s patron families compete by spending, and a Kalidrian prize is the highest honor a dramatist can win. The [Academy of the Silver Veil]{.name data-type="affiliation"} trains its hetairin there.

The other four have their own reasons to visit. In [[place-theradon2|Theradon]], students argue with their teachers in marble colonnades that climb terraced hillsides, and the libraries hold some of the oldest written texts in the western part of the [[place-ankrscntnnt|Ankaris Continent]]; its oligarchs call everyone beyond the last olive terrace a barbarian, kindly. In [[place-korinthea2|Korinthea]], a quarrel between a merchant and a noble is likelier to end at the Temple of [[lore-ardavondty|Árdavon]] than before a magistrate, and the temple's honor-trials are famous. [[place-athenikos2|Athenikos]] names every year for its arsir and keeps its auditors busy. Small [[affiliation-kostaros2|Kostaros]] holds a strip of the coast and the fishing town of [[place-myrtillos|Mirtelos]], and has nothing to do with the Bizarian port of the same name.

```sql
SELECT address.slug AS _ref,
       name.full AS "Settlement",
       data.population AS "People"
FROM notes
WHERE type = 'place'
  AND subType = 'settlement'
  AND file.folder = 'Regions/Ankaris/Hellad/Helionis'
  AND data.population >= 4000
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

The roads between the cities run up valleys and over passes, and the sea runs along one coast; a party moving between them crosses another city's land at nearly every step. Summers are hot and dry, winters mild and rainy, and the light has a clarity that Helionite painters have celebrated for as long as anyone has painted.

## Who Holds Power

A foreign envoy who asks to be taken to the government of Helionis has asked for something that does not exist. The [[affiliation-ctysttshlns|City-States of Helionis]] combine for common defense and the shared festivals, and compete in everything else: trade, athletics, intellectual prestige and, now and then, open war.

Whatever a city calls its constitution, the same forms run inside it. The citizens meet in the assembly, which stays sovereign. A council chosen by lot prepares the assembly's business for one year, and nobody sits on it twice. Magistrates are elected or allotted to the city's markets, walls, treasury and courts, and at the end of the year an auditor examines every magistrate's accounts; until the auditor clears them, the magistrate may not leave the city. The strátimor commands the city's forces by land and sea and is the one officer elected without a term limit. The arsir presides for a year, gives the year his name and hands the office back.

A stranger meets smaller offices first. The agóranir is warden of the market—its weights, coin, quality and disputes—so a foreigner who buys or sells answers to him before anyone else. The herald speaks for the assembly and the city abroad, and the ghimarir keeps the gymnasium from his own purse, which is what makes the office an honor.

> In Thirenae, you go to the agorin for oil and find a crowd in the shade of the colonnade, packed around a trestle table. The marble underfoot is cool and gritty with the morning's sweepings; someone is selling figs from a basket, and the smell of them mixes with lamp oil and sweat. At the table a thin man in a plain brown cloak turns the pages of a ledger with one wet finger, slowly. Across from him stands a magistrate in a white mantle with a purple border, his traveling chest at his feet and a porter waiting beside it. "When the books balance," the auditor says, without looking up, "and not an hour before." He turns another page. The crowd settles in to watch, and a boy runs off to tell the porter's master that the ship will sail without its passenger.

Standing runs in a short ladder. The citizen, by descent, votes and serves in the militia. Below him are the metic, a resident foreigner who pays tax and stands the levy with no vote and no right to own land; the freedman, who works and trades but is barred from the assembly for life; and the slave. Below them all is the _átimor_, stripped of civic honor by the courts and barred from the assembly, the agorin and the temples while still living among those who barred him. A foreign student who stays is a metic, and can earn the most prestigious education in the west in Thirenae without ever voting there.

```sql
SELECT address.slug AS _ref,
       name.full AS "City-state",
       data.governance.model AS "Government",
       data.population AS "People"
FROM notes
WHERE type = 'affiliation'
  AND subType = 'polity'
  AND file.folder = 'Regions/Ankaris/Hellad/Helionis'
ORDER BY data.population DESC, name.full COLLATE NOCASE
```

The [[affiliation-vylarinmpr|Vylarian Empire]] is the other power in the room. The Republic conquered the cities between 335 and 312 BF ([[lore-helionscnq|The Conquest of Helionis]]), and Helionis still keeps its formal ties to the empire: the cities spend [[lore-vylrncrncy|Vylarian Currency]], Helionite mints strike Ardin and Bit under imperial standards, and [[affiliation-tolvan|The Tolvan]] still claims their taxes on paper, which the cities do not pay. As the empire declines, the cities have taken back their practical independence. The College describes the relationship as that of a grown child to an aging parent: respectful, complicated and occasionally resentful.

## The Agorin and the Dinner Table

Daily life happens in public. The agorin of every city is its political, commercial and intellectual center, and citizens argue there about everything from grain prices to the nature of the gods. The gymnasium is where a young citizen's body and mind are trained together, and the academies are where the city reproduces itself. Heralds and criers read public inscriptions aloud, because most people cannot read them.

A Helionite owes the city first, plainly and ahead of family, because the city is what makes a person capable of anything worth doing. Then he owes his household, then the friends bound to him, which in Helionis is a formal and serious category. Above all of it, he owes the truth an argument: letting a false thing stand unchallenged in public is a failure of the basic civic duty. Dinner with three Helionites takes six hours.

Women's standing changes at every city gate. Some cities confine women to the household; others let them into intellectual and even political life. The hetairin have a position with no equivalent anywhere else: educated companions trained in music, philosophy, rhetoric and the social arts, and the most socially mobile women in Helionite society. Graduates of the Academy of the Silver Veil serve as companions, advisors and political agents in courts across Mídhalión, and they keep in touch with one another. Call a hetairin a courtesan and the conversation is over.

Honor is paid in the open. A Helionite takes risks for a reputation that a foreigner would call unnecessary, and settles a feud in court, occasionally by violence and always with an audience. What he will not tolerate is a wrong done quietly and left unanswered, because the concealment is as much the injury as the act.

## Gods, Games and Mysteries

The [[affiliation-arldnpnthn|Aureldian Pantheon]] runs through every part of Helionite life, and Helionis regards itself as these faiths' spiritual heartland; the interpretations the western kingdoms treat as authoritative were written by Helionite scholars. Three gods stand highest here. [[lore-marendasdty|Marendas]], keeper of wisdom, is Thirenae's patron. [[lore-zunelasdty|Zunelas]], the Veiled Dreamer, belongs to artists and mystics and to Kalidria. Árdavon, god of order and justice, presides over law and civic life and is patron of Pelagora and Korinthea.

Temples are civic property, and priesthoods are civic offices often held by men who also hold magistracies. A Helionite addresses the gods as directly as he addresses his neighbors: he petitions them, bargains with them, and reproaches them when they fail to deliver. In Korinthea the priest-judges of Árdavon sit as the city's court. "The council writes the rules," one of them tells petitioners, "and the temple says what they mean when two men disagree about them."

The shared festivals are the nearest thing Helionis has to a national institution. At the sacred sites the cities send runners, wrestlers and chariot teams against one another, and taking part is a duty owed to the gods; a season later the same cities may be at war. Solemn ritual, theater and public feasting share the festival days, and pilgrims come from across the Vylarian Sea.

The mystery cults are a distinctly Helionite institution: secretive societies that promise their initiates deeper knowledge through revelation in stages. Some are purely spiritual. Several have real political influence, and a party that needs to know who in a city answers to whom may have to ask which of its magistrates have been initiated.

## The Academies and the Order

Every city of note has its academies, gymnasia and theaters, and the great academies draw students from across Ankaris. Mathematics, natural philosophy, rhetoric, medicine, ethics, law and the theory of magic are all taught and argued over in public. Around 400 BF the schools of the city-states joined in the Epistémion—the Epistémion, the place of all knowledge—a federation in which every domain of inquiry stood level with every other. Its College of Arcane Philosophy was one college among many.

When the Republic conquered the cities, the Senate took that college out of the federation in 312 BF and, in 73 BF, chartered it as the Thordimalon (the Arcane Order). The other colleges stayed, diminished but intact, and they are strongest here. Helionites regard the Order as their intellectual offspring: they are proud of the parentage and uneasy about the child.

That unease has a working rule. Several city-states have arrangements that let a Helionite philosopher study arcane theory and debate magical philosophy without joining the Order, so long as he does not practice. "Read what you like and argue what you like," an Order clerk tells students. "Our interest begins the day you do it." The line between theory and practice is blurred, and both sides use the blur. Unlicensed practitioners are more common in Helionis than the Order would like, and its inquisitors of the [Sekran]{.name data-type="affiliation"} tread more carefully here than anywhere else.

:::secret
**For the GM:** The College's account leaves out what Helionites are quieter about. In the war of 335–312 BF the cities' mages became mage-warlords their own cities could not control, and their sorceries poisoned the land and killed on a scale no army could match; Helionite mages made the Order necessary. The Republic broke them with the [Dragon Riders]{.name data-type="affiliation"}, and how it secured the dragons is told in [[lore-dragondead|The Dragon Dead at Theradon]] and [[lore-thebargain|The Bargain]]. Old battlefields and the ruins of the mage-warlords' seats still lie in the hills.
:::

## What Gets a Newcomer into Trouble

**Declining to be examined.** A stranger who will not defend a claim in public is taken for a fraud until proved modest. Say less, or be ready to argue it.

**Doing a wrong quietly.** A grievance aired before witnesses can be answered in court; one concealed is a second offense.

**Confusing the hetairin with courtesans.** The Academy of the Silver Veil has graduates in rooms where armies do not reach, and they remember what was said at dinner, and by whom.

**Treating a metic's rights as a citizen's.** A foreigner cannot own land, cannot vote, and is liable to the levy if the city goes to war while he lives there.

**Practicing what you may only study.** Arcane theory is free in Helionis. Casting is the Order's business, and a philosopher who crosses the line answers to the Order.

**Touching a herald.** His person is inviolable, even between cities at war.

## People to Meet

The oarsman who asks your city, the auditor who holds a magistrate's ship, the temple judge with a sword and a bench: these Helionites have their own reasons to want a party's help.

```sql
SELECT address.slug AS _ref,
       name.full AS "Person",
       data.occupation AS "Occupation"
FROM notes
WHERE type = 'being'
  AND data.culture = 'thalorna-note-lore-helioniteclt'
  AND subType IN ('npc', 'character')
  AND state = 'full'
ORDER BY name.full COLLATE NOCASE
```

## Ways In

A party can arrive by sea at Pelagora, overland from Vylaria with students bound for the academies, down from the [[place-velanthrgn|Velanthia Region]], or across the eastern hills from the [[place-byzariargn|Bizaria Region]], the cousin country that took the caravan road where Helionis took philosophy. A Helionite character belongs to a city before anything else, then to a household, an academy, a temple office, a patron family, a ship's crew or a cult. A foreign character is most easily a student, a metic trader, a sailor, a mercenary hired for a war between cities, or a scholar come to consult a library.

At the first agorin, ask three questions: **Which city's law are you standing under? Who will speak for you in its assembly? What can you defend in public?** The answers give a party its patron, its standing and its first argument.

Campaigns start well from a contest. A city needs a team for the games and its best wrestler has broken his arm. A playwright's patron family wants the rival family's production to fail on the night. A magistrate cannot leave the city until his accounts balance, and someone has made sure they never will. An ambassador must reach a city its own city is at war with, and needs escorts who are not citizens of either. A student of the College of Ethics has found a manuscript that proves an Order theorem was argued first in a different college, by someone who also argued about justice.

:::secret
**For the GM:** The sharpest tool Helionis offers is that every decision is public and every city is sovereign. A party that wins an argument in one agorin has made an enemy who will be in the next one, and a decree that binds one city means nothing over the pass. The shared festivals bring rival cities to one sacred site, where taking part is a duty to the gods, and that duty is the one thing the party can count on both sides to honor.
:::

## Where to Read Next

- [[place-helionis|Helionis]] for the country, its gods, its magic and its history
- [[affiliation-ctysttshlns|City-States of Helionis]] for the constitutions, the offices and the ladder of standing
- [[lore-helioniteclt|Helionite]] for what a Helionite holds a person owes
- [[affiliation-thyrenae|Thirenae]], [[affiliation-pelagora|Pelagora]] and [[affiliation-kalydria|Kalidria]] for the three leading cities, and [[affiliation-theradon|Theradon]], [[affiliation-athenikos|Athenikos]], [[affiliation-korinthea|Korinthea]] and [[affiliation-kostaros2|Kostaros]] for the other four
- [[affiliation-panepistmm|The Epistémion]], [[lore-panepistfnd|its founding]] and [[affiliation-ordoarcanis|the Thordimalon]] for the academies and the order that grew out of them
- [[lore-helionscnq|The Conquest of Helionis]] for the war that ended the cities' freedom and began the Order
- [[affiliation-arldnpnthn|The Aureldian Pantheon]] for the gods the cities share
- [[skill-helonclng|Helonic]] for the tongue of the theater and its naming traditions
- [[place-heladrgn|Hellád]] for the wider country, and [[place-byzariargn|Bizaria]] for the cousins to the east

## Glossary

Ardin, Solden and Bit are loanwords from [[lore-vylarianclt#glossary|Vylaria]].
