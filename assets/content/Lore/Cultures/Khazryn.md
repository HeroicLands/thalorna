---
shortcode: khazrynclt
name: {full: Tellumi, aliases: []}
type: lore
subType: culture
description: "The Tellumi—their beliefs, their mores, and what they hold a person owes."
tags: []
data:
  language: skill-khazrilng
  appearanceProfile:
    frame: {light: 3, medium: 5, heavy: 1}
    eye_color: {brown: 3, amber: 3, green: 2, dark_brown: 2}
    hair_color: {black: 6, dark_brown: 3, grey: 1}
    skin_color: {olive: 3, tawny: 3, golden: 2, light: 2, tanned: 2}
    complexion: {weathered: 3, smooth: 3, sun_kissed: 2, clear: 1}
    height: {female: {min: 5' 4", max: 6' 0"}, male: {min: 5' 6", max: 6' 3"}}
  events:
    - id: migration
      when: ~-2300
      kind: migration
      depth: region
      sources: [affiliation-khzrncnfdrtn, place-graznmntns, place-wstrndscnt, place-swoasisbelt]
      summary: >-
        The first Tellumi come down from the Grazian Mountains by the Western Descent, one lineage after another, and settle the great springs at the foot of the foothills. Each house roots its genealogy in a named peak above the Descent, and most of those peaks no living member of the house has seen.
      standing: single-source
      where:
        locus: [place-wstrndscnt]
        reach:
          - place: place-swoasisbelt
            how: >-
              the springs of the belt are settled one by one, and the seven cities are built on one another's foundations
            knowledge: named
          - place: place-oasishirvn
            how: >-
              Shirvan is founded first, at the great spring under the Vurinkarvem cliff
            knowledge: named
      who: [{ref: affiliation-khzrncnfdrtn, role: actor}]
      accounts:
        - by: affiliation-khzrncnfdrtn
          says: >-
            We came down from the mountains. It is the one fact about us that no conqueror has been able to revise.
          agrees: full
      unresolved:
        - what drove the first lineages down from the high country
        - which lineage settled which spring
    - id: conquest
      when: ~619
      until: ~630
      kind: conquest
      depth: region
      sources: [affiliation-khzrncnfdrtn, affiliation-tribestrzd, place-swoasisbelt]
      summary: >-
        The Ātárzád, taken in as refugees and settled on marginal land, turn on their hosts and in twelve years take four of the seven Tellumi cities: Zargandûr in the second year, Ashkarad in the fifth, Kethramír in the eighth and Shirvan in the eleventh. The Tellumi call it Turem, the Breaking, and the Ātárzád the War of the Twelve Years. Mehrnāgord and Ushtra-bēr stand, and Vahúrdash lies empty.
      standing: attested
      names:
        - name: Turem
          by: affiliation-khzrncnfdrtn
          gloss: the Breaking, recited at every festival and every princely funeral
        - name: the War of the Twelve Years
          by: affiliation-tribestrzd
          gloss: the Conquest, as the Flame-born tell it
      where:
        locus: [place-swoasisbelt]
        reach:
          - place: place-zargandur
            how: >-
              the war-house falls first, and its last riders die on the pasture north of the gate
            knowledge: named
          - place: place-ashkarad
            how: >-
              taken in the fifth year and held since
            knowledge: named
          - place: place-kethramir
            how: >-
              taken in the eighth year and held since
            knowledge: named
          - place: place-oasishirvn
            how: >-
              the holiest city falls in the eleventh year, its archive burns and a fire-temple is raised over the spring
            knowledge: named
      who:
        - {ref: affiliation-tribestrzd, role: actor}
        - {ref: affiliation-khzrncnfdrtn, role: victim}
      accounts:
        - by: affiliation-khzrncnfdrtn
          says: >-
            The Ātárzád arrived as guests, waited until they were strong enough and turned on their hosts. The Promise they cite is a legal fiction.
          agrees: partly
        - by: affiliation-tribestrzd
          says: >-
            The Flame promised the oases to the Flame-born, and the Promise was kept.
          agrees: partly
      unresolved:
        - how much of the seven-city confederation's fall was decline and how much was Ātárzád skill
        - why the Kingdom of Amradad did not intervene

# terran_analog: "The Canaanites of the post-Conquest period, and the Persianate oasis belt of Central Asia (Uzbek and Tajik analog): an old, literate, urban oasis people with princely houses, a learned priesthood and a devotion to an oasis-mother. Carries over: urban polytheist civilization dispossessed of its cities by a newcomer fire-cult, hereditary princes in exile, a subject diaspora, polytheist Āsháian observance with particular devotion to the oasis-mother and order-keeper, and an enduring blood-feud with the newcomer fire-cult that took the choicest land. Departs: the exile houses keep legal and genealogical records for recovering their cities."
---

The Tellumi will tell you early that they came down from the mountains, because it is the one fact about themselves that no conqueror has been able to revise. They are an old, literate, urban people of the oasis belt at the foot of the Grazian Mountains, and they lost. Ninety years ago the Ātárzád came into the belt as refugees, were taken in under the hospitality the desert extends to anyone in extremity, were settled on marginal land by princely patronage, and waited. Four of the seven Tellumi cities are held by someone else now. The Tellumi are an oasis people, and the steppe north of their uplands is to them a road, a market and a danger.

## Memory Is an Office

What followed the Tellumi call Turem, the Breaking, and they recite it at every festival, every formal court ceremonial, and every funeral of a senior member of a princely house. The recitation is not nostalgia and not grievance in the ordinary sense: it is a case being kept open, and the Tellumi insist on the distinction. A feud seeks revenge; the Tellumi seek return.

The exile princes of Shirvan, Ashkarad, Zargandûr and Kethramír would, given the chance, walk back into their cities, take the palaces of their forebears, rebuild the temples that were pulled down, and resume governing. They would tolerate the Ātárzád settlers, they say, as a subject population with somewhat more dignity than the Tellumi have been shown. Whether that restraint would survive an actual reconquest is a question the exiles do not enjoy being asked.

A Tellumi household keeps records the way other households keep silver: genealogies, deeds, temple registers, and the boundaries of fields nobody has farmed in three generations. The heir-in-exile of Shirvan has spent her life assembling the legal and historical case for recovery; it fills a small library and is updated continuously. Nobody expects to use it soon, and everybody expects it to be ready.

## What the Tablet Says Is Good

The Tellumi answer to what is good is the faith's own, given a Tellumi edge. Āsha, truth and order, is kept by good thoughts, good words and good deeds, and the Tellumi add the clay: **good is what has been done and written and can be read back; evil is the lie, and the name that is never read.** The Druj the faith warns against is falsehood and disorder, and a Tellumi finds it in the unrecorded debt, the water taken out of turn, the guest (_neyin_) sent away and the dead (_nilvur_) left unnamed. The Song of the Lost Town gives the clearest instance. A prince who counted gold and not water turned a stranger from his gate in a dry year, and the tellers hold that the springs failed because the city was judged.

Success is a house that can prove itself. The marks run in order: a name on a house's tablets and on a water-deed, a field or a craft the family has held for generations, a child admitted to the Shēkhulūkhem, and an exile court that recites every ancestor back to the founding of its line. Failure is lapse. A genealogy that is let go, a child who cannot name the city the family came out of, a house whose peak is lost and with it its claim, and a debt (_dushmen_) nobody pressed in clay are the things a Tellumi means by having lost. Poverty is not on the list. A quarter that keeps its tablets is a people still standing.

A Tellumi values the record, the exact word, the guest in need, the patient case and the water kept in turn. A Tellumi values least the gold counted above the water, the claim nobody can read back, and revenge for its own sake: the people insist that what they seek is return, and that a feud is a different thing.

## The Man Admired

**Berniray**, the champion of the house of the rim, is the Tellumi picture of a man who keeps his oath. His name is built on _bernir_, oath, and so was the thing he swore: _I am the gate of the house of the rim. I stand when the water flees. I go where the house sends me. I come when the house calls._ The prince sent him seven years to the salt and the Descent with the seal, to make the house's debts plain in silver, and he came back with his beard gray. A budaq settled on the lead camel three days from the rim and would not be driven, and he read the bird as he would a tablet: _leave the silver with the string_. He rode ahead with three men, reached a dying town and went from house to house until dawn with the words of the house, _wake and walk, or stay and be sand_. He served the house at Kethramír afterward and stood a gate for thirty years.

His cost is the song's reason for being. At the gate that night his own son, keeping the same oath on the prince's word, would not open to him. They fought in the dark with the same strokes, and the father killed the boy, and read the name on the shield-rim by touch. He never spoke of it, and the Dēlkoshekh who read his name at his death read the boy's too, from the household clay. What the song keeps of him is the ride back, the waking of the town and the thirty years at a gate, and not the stroke.

## The Woman Admired

**Minesha**, his wife, kept the household's clay: the names, the water-hours, the debts, the children born each spring, the tablets in their palm-fiber on the shelf beside the door and baked hard against the day that comes to every house. She named the child Return, so that every time she called him in she called her husband home. When the town was dying she came out of the court past the shield with the household clay in two baskets on a pole, and the keepers of the record stayed in their cellar and would not leave.

A Dēlkoshekh read Berniray's name at his death from the clay she saved, and the same reed pressed the names of the dead he owed. Hers is not a lesser form of his. He keeps the oath that holds a house together, and she keeps the record that makes it a house. The song's last turn is on her side of it: the keepers who would not leave are unread, because the tablets that hold their names are the tablets they kept.

The living Tellumi have a second woman of the same kind. **Yázdín of Kethramír**, a Dēlkoshekh and the head of the exile house of Kethramír, is the most rigorous of the exile theologians and the author of the formal refutation of the Ātárzád Promise, _On the Ungrantable Land_. It is required reading in Tellumi religious education, and a copy moves through Kethramír in every caravan from the west, hidden in a bale of cloth.

## Water, and the Mother of the Oasis

The Tellumi identify with the oasis so completely that their devotion runs through it. Zúráthrä, the Mother of the Oasis, receives the deepest popular love in Tellumi life: a shrine stands at the principal water-source of every oasis and every Tellumi quarter inside an Ātárzád city, every wedding involves her blessing, and every child is presented at her shrine within forty days of birth.

Their ordinary observance sits within the wider Āsháian practice: a household keeps the fire-ritual at sunrise and sunset, while a prayer to Zúráthrä follows the flame with water. Tellumi-specific duties include the weekly observance to Āhúrdáén, the water-source shrines, and the wedding and birth blessings.

Because the Tellumi keep the full pantheon, they share the Āsháian teaching about what follows death: the soul crosses a dividing passage, and its good thoughts, words and deeds make the way secure; the wicked fall into darkness. This gives conduct a daily weight. Tellumi households keep tablets of names, debts and water rights, and the community's insistence that words and obligations be recorded sits beside a faith in which a person's words and deeds shape the soul's fate.

Formal devotion belongs to Āhúrdáén, and on this the Tellumi are immovable: no other god, the Sacred Flame included, may receive the weekly observance owed to the Keeper of Harmony. That is the whole theological quarrel with the conquerors, who elevated the Flame to exclusive worship, and the Tellumi answer that doing so breaks the order Āhúrdáén himself established. They keep the full pantheon, all twelve at their seasons, in the form their own priesthood systematized over centuries, and regard the Ātárzád version as an amputation performed by people who did not understand the body.

The destruction of Zúráthrä's great shrine at Shirvan, and the sacrificial fires built over the holy spring, are the wounds a Tellumi names first when he stops being polite.

The five-day intercalary festival closes the old year before the spring equinox opens the next. In [[lore-comingdown|The Coming Down]], a Dēlkoshekh recites the roll of seven peaks and springs on its first day; [[lore-turemrecital|The Recitation of the Breaking]] is spoken at every festival. Together these observances keep the people's beginnings and loss in the year's passage, alongside the dates used in contracts.

### Water, rights, and upkeep

The shrine marks the source; daily life depends on the channels and the rights recorded for them. In [[place-oasishirvn|Shirvan]], a household's deed gives it particular hours in a named channel, and the right passes with the deed. In [[place-ashkarad|Ashkarad]], families maintain the deep shafts their ancestors opened, and craft councils pay one another when a workshop wastes water. In [[place-mehrnagord|Mehrnāgord]], every household takes a turn clearing channels before the spring melt, and the work is entered on tablets. At [[place-vahurdash|Vahúrdash]], families are known by the stretch of the single irrigation channel they keep; in a dry year, the harvest is reckoned by how many days it ran.

These arrangements make waterkeeping practical law. A well or channel is shared life, but its hours, upkeep and claims are particular and written. In [[lore-velkunsong|The Song of the Lost Town]], the teller says a fair prince counts water, while a bad one counts gold. The revived House of Vahúrdash hears the drought in the same song as a trial and the return as the answer.

## Where the Year Is Kept

The year closes on the five days that sit outside the twelve months, and each rite in it settles one thing. The spring equinox opens the new year, and the faith's Festival of New Order re-consecrates the temples and renews the fires. Zúráthrä's festivals fall at the seasons of greatest water stress, in the spring rains and at the height of the dry season, and every child is presented at her shrine within forty days of birth. Ázráván's Festival of the Departed lights an extra fire in every fire-temple, and families gather round it to speak their dead aloud. Mehrnāgord clears its buried channels before the spring melt by household turns.

Each is for something. The roll of the seven peaks keeps the origin, and the Recitation keeps the case open. The Festival of the Departed counts the dead among the received. The channel-clearing keeps the water in turn.

## The Dēlkoshekh

The Shēkhulūkhem is the institution that survived. A Dēlkoshekh studies fifteen to twenty years before ordination, and is expected to have mastered astronomy, mathematics, theology, law and at least three languages before serving as both priest and community judge.

Where there is no Tellumi court, which is to say in the four lost cities where most Tellumi actually live, the Dēlkoshekh registers marriages, adjudicates inheritance, arbitrates commercial disputes and keeps community records under the foreign magistracy. In the Shirvan quarter, Dēlkoshekhs hear cases in back rooms; their jurisdiction sits alongside the magistrate's rule and the city's controls over water and public worship.

The Shēkhulūkhem is funded by a tithe, not by a tax to a Tellumi state. It pays for temples, schools and the Confederation's legal machinery. In Shirvan, Tellumi teachers run a school in the old quarter; in Ashkarad, craft councils train children in a family trade through years of apprenticeship. These are distinct paths of learning and service, alongside the Dēlkoshekh's long course in astronomy, mathematics, theology, law and languages.

Even with these other paths available, a family sends its ablest child to the Shēkhulūkhem ahead of any trade.

## Where the Prince Ends and the Dēlkoshekh Begins

Authority is two things that cooperate and do not merge. The free oases are governed by their own heads, a prince (_relvan_) at Mehrnāgord and Ushtra-bēr and a head the settlers acclaimed at Vahúrdash, each with a small household guard, and the princes of the four held cities live in exile at Amradad and rule nothing but their courts. The Council of the Princes meets once a year at Amradad under the High Shēkhulsīghot of Āhúrdáén, who convenes it as a neutral party and does not rule. It coordinates a single position toward the Ātárzád, the codes of the subject communities and the funding of shrines and schools. It does not legislate for an oasis.

The Shēkhulūkhem is the other institution. It keeps the calendar, the law and the records, funds itself by a tithe the people pay by ancient compact, and supplies the judge, the registrar and the priest to every community. In the free oases the princes govern and the Shēkhulūkhem keeps the law beside them. At Ushtra-bēr a petitioner kneels at a marked place on the floor while the Keeper of the Tablets reads the petition aloud, and the decision is pressed in clay. In the held cities the magistrate collects the water-tax and the assessed taxes and nothing else, and the Dēlkoshekh hears the community's cases in back rooms.

When the answers conflict, the tablet decides. A dispute over a dead man's hours of water is settled by reading both families' tablets aloud, laying them side by side and sending for a third, older than either, from the quarter's archive; the ruling is pressed in fresh clay while everyone waits. An authority with no tablet in the matter has no standing in it, and that includes the magistrate, who is owed his tax and nothing the ledger does not show.

## Being a Subject People

Most Tellumi are not in the free oases at all. They are craftsmen, merchants and clerks inside cities their grandparents ruled, and the habits that come with that are what most mark them out to a stranger.

A Tellumi is courteous, exact and reserved. He keeps two sets of records and two calendars: the ancient Tellumi year of twelve thirty-day months with a five-day festival at the spring equinox, and whatever the magistrate uses. He does not discuss politics with an Ātárzád and discusses little else with another Tellumi. He pays what is assessed, on time, and keeps the receipt, because a subject population with imperfect paperwork can be robbed legally.

He is also quietly connected. The exile houses fund shrines and schools in Amradad and the Tarûzelian ports, and maintain a network of agents who keep the Council informed about conditions in the lost cities. A Tellumi merchant in Ashkarad may be nothing more than a merchant, or he may be the reason a prince in exile knows the grain price before the governor does.

The same people do not all answer to the same authority. In the occupied cities, Dēlkoshekhs hear community cases under the magistrate and Tellumi households pay the water-tax; in the free oases, princes govern, households maintain channels by turns, and the Council coordinates the houses without ruling them. A Tellumi's obligations depend on where the household lives and what standing it holds.

## The Tongue and the Tablet

Tellumi is written in a syllabary the first families brought down from the mountains, and the Tellumi wrote it on baked clay for two thousand years before the Breaking. Clay does not burn well, which is the only reason anything survived the fall of Shirvan at all; what the fleeing households carried out is now scattered across the exile courts.

Literacy is expected of anyone above a laborer, and a Tellumi's handwriting is a matter of some vanity. An educated Tellumi reads his own tongue and at least one trade tongue, and a Dēlkoshekh reads considerably more. Among the exile houses the ability to read the pre-Breaking hand is a quiet marker of seriousness, because the documents that matter are all written in it.

## What the Houses Keep

A Tellumi can point to a handful of things that hold a people together without a state. **The house tablets** are each household's genealogy, deeds, water-rights and temple registers, and they are the one thing the Breaking could not burn by force, because clay does not burn well. **The roll of the seven peaks**, a _tsemhat_ or recitation, names the peak each house roots its genealogy in. **The Recitation of the Breaking** is a case in the form of a case, each claim followed by the tablet that proves it. **The Council's codes** are the legal rules by which Tellumi communities inside the held cities govern their own affairs. **The water-deeds** give a household particular hours in a named channel, and the ledgers of them are the most valuable documents in Shirvan. **The Calendar** of twelve thirty-day months and a five-day festival is the Shēkhulūkhem's.

The heir-in-exile of Shirvan keeps a case of her own. **Mōrá-Shirván**, a scholar and theologian of about forty, has spent her life assembling the legal and historical record for the recovery of her city, and it fills a small library and is updated continuously. And there is **the shrine at every water**, the nearest thing the people have to a standard kept in a temple.

## Houses, and What a Name Carries

The seven princely houses are the spine of Tellumi identity, and every Tellumi knows which one his family stood to, not as a claim of descent from the prince but as a statement of which court his people's records were kept in. A man from Kethramír says so, and another Tellumi hears _priest-house, theologically serious, took the worst of the killing of the clergy_ without a further word being spoken.

Marriage is arranged between households and is, where it can be, within the tradition. Marriage to an Ātárzád is possible, rare, and understood by both families as a decision about children and not about affection: the children will be raised in one tradition or the other, and everyone knows which way the pressure runs in a conquered city.

Hospitality remains close to absolute, and the Tellumi are bitterly aware of the irony. A stranger in extremity is fed, housed and asked nothing. They took the Ātárzád in under exactly that rule and have not amended it, because amending it would mean the Ātárzád had changed what the Tellumi are, and that is the one loss they refuse.

## The Ladder of a Life

A Tellumi child is presented at the shrine of Zúráthrä within forty days of birth, and says the seven cities in order before it says its own name. At seven the faith's Ceremony of Acknowledgment stands the child before a death-fire to say, _I do not fear you_, so that the years between are lived without dread. The child learns its letters and the household's tablets, and then a craft or the Shēkhulūkhem. Marriage is arranged between households and, where it can be, within the tradition. An adult keeps the tablet, takes a turn at the channels and pays the tithe and the assessed taxes. The old are the reciters and the teachers. The dying are the Dēlkoshekh's, to be read.

The unit is the household, _ninesh_, and beyond it the house, which is the court that kept its records and the claim to be read there. A person belongs to a household by its tablets, to a house by the court that kept them, and to the Tellumi by the tablets held anywhere.

## Where the Names Are Read

The Tellumi add the reading to the Āsháian teaching about the Chinvat Bridge. A Tellumi dead is received by a Dēlkoshekh, who reads the name from the house's tablet while the household lights its lamps, and until the name is read the dead are not counted among the received. The ground where the names were never read is a _henhutpedin_, a blood-field, and a thin one is a _sirveshpedin_, a cursed field.

The Tellumi neither bury nor burn their dead. A body is carried to a Tower of Silence and exposed on its stone platform to the sky, as the [[affiliation-azravan|Faith of Ázráván]] prescribes; where no tower stands, it is laid out in the desert for the same exposure. The reading of the name accompanies either.

That belief shapes an ordinary day. A Tellumi household enters a birth, a marriage, a death and a debt on the tablet when it happens, because a name that is not on the clay cannot be read. It keeps the water-deed and the genealogy current, because an heir inherits the clay along with the field. It keeps its receipts, since a subject with imperfect paperwork can be robbed legally. It pays the tithe that keeps the Dēlkoshekh who will read the name. A Tellumi in a held city carries the belief at a cost: in Zargandûr the quarter keeps a lamp burning at every door until dawn, and the Ātárzád prohibition on the worship of Āhúrdáén makes the reading a crime.

The dread that corresponds to all of this is the field outside Zargandûr's north wall. The war-house died there, the Dēlkoshekhs were kept beyond the wall, the lamps were not lit and the names of the riders were not read. The Ātárzád dead were given to the flame that night.

## Reaching the Dead

The living reach the dead through the reading of the name (_yumesh_), and the reader's price is the tithe and, in Zargandûr, his life. The Festival of the Departed lights the Death-Flame in the fire-temples and the families speak their dead aloud. The Recitation of the Breaking names seven riders of the war-house as the house's tablet names them and leaves the princes to the tablet, because the recitation may not read a prince's name in a city where reading it is forbidden. A laying-out performed late for the dead of a field, with every name spoken to the winds, quiets a blood-ground for as long as the winds carry the names. The Tellumi reading is the same rite as the steppe's laying-out in a Dēlkoshekh's voice, and it needs the names; a field of strangers has none to give.

The dead reach the living through the record. They cannot petition and are not asked. The keepers of the record of Veshkun, who would not leave their cellar, are the Tellumi funeral formula: _as the keepers of the rim_. The people of the revived House of Vahúrdash walk over the cellars where the keepers lie unread, and the song's last turn is that the house that comes back reads the names first.

## What the Record Earns and What Lapse Costs

Reward is a standing in the record. A prince is the head of a house that recites its line back to the founding. A child admitted to the Shēkhulūkhem becomes the community's judge, registrar and priest, and a family sends its ablest child there ahead of any trade. A household with its tablets in order has its name read at the end.

The penalties climb the other way. A reciter who departs from the words of the Recitation is corrected from the floor. A craft council makes a workshop that wastes water pay its neighbors. A house whose peak is lost has lost its claim, and a family whose genealogy lapses has lost the case it was keeping open. In Kethramír a merchant who cheats finds that no guide will lead his caravan. The last penalty is the unread name, the dead not counted among the received, and no earthly authority imposes it: it is what follows when the household that should have kept the record did not. The Ātárzád add their own penalties, a beating and a fine for a blade after dark in Zargandûr and the water-tax on every Tellumi head of household, and the Tellumi count these as the conqueror's and not the community's.

## What a Person Owes

Ask a Tellumi what a person owes, and the answer comes in order: the household first, then the house his household stood to, then the Dēlkoshekh who keeps the community's law, then the shrine at the water. The magistrate is owed his tax and nothing else—not loyalty, not truth beyond what the ledger shows, and certainly not the location of anything that matters.

Above all of it he owes the record. A Tellumi who lets a genealogy lapse, or lets a child grow up unable to name the city his family came out of, has done the one thing the Breaking could not do by force.

In return the household owes its members the hearth, the tablet and a name that will be read. The house a household stood to owes it a court that kept its records and, in exile, an agent who tells it how the lost cities stand. The Dēlkoshekh owes the community its law, its marriages, its inheritance and its dead. The shrine at the water owes the child its presentation within forty days. The prince owes the oasis the water counted before the gold. The magistrate owes nothing and is owed the assessed tax.

## The Weak

Care is the household's first and the community's second. Hospitality is close to absolute: a stranger (_neyin_) in extremity is fed, housed and asked nothing, and the same rule that lets the weak eat lets a guest in. Families that have dealt with each other for generations give each other credit, so a family in a bad year borrows on its name and its tablet. The priesthood of Zúráthrä is made of midwives and healers who are expert in herbs, wounds, childbirth and the engineering of water, and they keep the shrine at every spring and tend the sick at it. The tithe the Shēkhulūkhem collects pays for temples, schools and the Confederation's legal machinery, and the school in the old quarter of Shirvan is run by Tellumi teachers. The fair prince of the song counts the water first: the bad one took what his town could not pay in land, in wells and in sons, and pressed a fresh tablet for each.

The limit is the tablet. A household with no water-hours, no deed and no house to stand to has nothing to be counted under. A borderland farm foreman, Kamîd Khâvandar, lost his farm to creditors in two dry seasons and has begged for thirteen years. The destitute Tellumi in a held city pays the water-tax first, as a head of household.

## Those Who Cannot Work

A water-right passes by deed, and the right stays with the household when one of its members cannot work the field or the craft. An injured or ailing person keeps the household's name on the tablet and the household's share of the channel, and the household carries him. The old speak the Recitation: the eldest of a house stands to recite it at a princely funeral, and elders teach, as the keeper of the water-shrine at Kethramír teaches. A dry year is met by reckoning the harvest in the days the channel ran, as at Vahúrdash, and by the hours the household is owed in the named channel. In a hard winter the hungry tribes come east over the Descent to Mehrnāgord in numbers its guard cannot turn.

## Shelter, Teaching and Defense

Shelter is the household's and the house's. The exile houses keep full courts of a few hundred souls each at Amradad, and in the held cities the Tellumi live in designated quarters, usually the older districts the settlers have not rebuilt. Teaching is the community's: a child learns letters at a school such as the one in the old quarter of Shirvan, learns a trade through years of apprenticeship under a craft council, or goes to the Shēkhulūkhem for fifteen to twenty years of astronomy, mathematics, theology, law and three languages. The Confederation keeps no army. Each free house keeps a small household guard, about a hundred men at Mehrnāgord, fifty at Ushtra-bēr and a token force at Vahúrdash. Real security rests on the Kingdom of Amradad's protection and on the cities' need of the Tellumi who keep their canals.

## What the Return Does Not Count

Every real culture has a blind spot its own thoughtful members argue about, and the Tellumi's is what the case for return leaves uncounted. The exile houses at Amradad keep the claim and the Council keeps the position, and the people who live in the held cities, the many who pay the water-tax and keep the canals running, are the claim's evidence and not its voice. They say they would tolerate the Ātárzád settlers as a subject population, with a little more dignity than the Tellumi have been shown, and the exiles do not enjoy being asked whether that restraint would hold. Thoughtful Tellumi argue over whether return restores the princes or the people who kept the water, and over what is owed to the Ātárzád born in the cities since the Breaking.

The sin the Tellumi tell against themselves is the lost town. A prince who counted gold and not water turned a veiled woman from his gate in a dry year, and the tellers say she was the Mother of the Oasis. The town died of it, and the prince's debt tablets said he was rich. The cloth-tellers sing it in the caravan yards of Kethramír, and the revived House of Vahúrdash hears it as an insult and answers that the drought was a trial and the return its answer. A second failing runs behind it: the Breaking took four of the seven cities in order, Zargandûr in the second year, Ashkarad in the fifth, Kethramír in the eighth and Shirvan in the eleventh, one princely house at a time, while Mehrnāgord and Ushtra-bēr stood and Vahúrdash lay empty, and the Council that stands for them today coordinates and does not rule.

## See Also

- [[affiliation-khzrncnfdrtn|Tellumi Confederation]]—the seven houses and the Council that speaks for them
- [[place-swoasisbelt|Tellumel]]—the oasis belt the people come from
- [[place-khzryndsrtrgn|Khazryn Desert Region]]—the waste north of the belt
- [[affiliation-tribestrzd|Tribes of Ātárzád]]—the conquerors, and the other half of the quarrel
- [[affiliation-ashanpnthn|Āsháian Pantheon]]—the twelve, as the Tellumi Dēlkoshekhs systematized them
- [[affiliation-zurathra|Faith of Zúráthrä]]—the Mother of the Oasis, and the shrine at every spring
- [[lore-turemrecital|The Recitation of the Breaking]]—the case as it is recited at every festival and princely funeral
- [[lore-comingdown|The Coming Down]]—the foundation legend, and the roll of the seven peaks
- [[lore-velkunsong|The Song of the Lost Town]]—the cloth-tellers' epic of old Vahúrdash
- [[affiliation-azravan|Faith of Ázráván]]—the Festival of the Departed and the Prayer of Passage
- [[affiliation-ahurdaen|Faith of Āhúrdáén]]—the weekly observance and the Dēlkoshekhs who keep the calendar
- [[place-henhulpedin|Henhutpedin]]—the field outside Zargandûr where the names were never read
- [[lore-roadnights|The Nights of the Road]]—a caravan-master's tales of the crossing to Tānvür

## Glossary {#glossary}

| Term                  | Meaning                                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Āsha                  | The cosmic order of truth that Āhúrdáén sustains and the faithful serve                                                     |
| Rōqeshekh             | An initiate studying for the priesthood of Āhúrdáén                                                                         |
| balem                 | Exile; a princely house that keeps its court abroad while it claims its city                                                |
| bernir                | Oath                                                                                                                        |
| Druj                  | The force of disorder and the lie that presses against Āsha                                                                 |
| dushmen               | Debt                                                                                                                        |
| gaben                 | Day; in _lirun gaben_, "a free day", a greeting                                                                             |
| henhutpedin           | A blood-field: ground where the names of the dead were never read                                                           |
| Dēlkoshekh            | Priest and judge, ordained after fifteen to twenty years' study, who keeps a fire-temple, a community's law and its records |
| High Shēkhulsīghot    | Senior priest of Āhúrdáén at the Great Fire-Temple in Amradad, convenor of the Council of the Princes                       |
| Keeper of the Tablets | The officer of the court of Ushtra-bēr who reads each petition aloud and records each decision in clay                      |
| lirun                 | Free; in _lirun gaben_, "a free day", a greeting                                                                            |
| Shēkhulsīghot         | The senior priest of a major fire-temple                                                                                    |
| Shēkhulūkhem          | The body of the priesthood, which keeps the faith, the calendar, the law and the records                                    |
| nartem                | Law and custom, as a community's Dēlkoshekh keeps them                                                                      |
| neyin                 | A guest, owed food and shelter without question in time of need                                                             |
| nilvur                | The dead                                                                                                                    |
| ninesh                | A household, which keeps its own tablets                                                                                    |
| relvan                | A prince, the hereditary head of one of the seven houses                                                                    |
| tsemhat               | Recitation                                                                                                                  |
| revun                 | The return: the recovery of the lost cities that the exile houses work for                                                  |
| sirveshpedin          | A cursed field: a thin blood-field                                                                                          |
| tenyut                | A clay tablet; a household's or a house's written record                                                                    |
| yumesh                | Name                                                                                                                        |

Ard is a loanword from [[lore-vylarianclt#glossary|Vylaria]], and gezan from [[lore-khelathiclt#glossary|Aû'Khelâthu]]. Dovaq is a loanword from [[lore-sowidesclt#glossary|the Sovidur]].
