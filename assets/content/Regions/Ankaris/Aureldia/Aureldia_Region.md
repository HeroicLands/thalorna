---
shortcode: aureldirgn
name: {full: Aureldia Region, aliases: []}
type: place
subType: region
description: The western heartland of the Aureldian faith—a mosaic of kingdoms, city-states, and island realms bound by the Twelve rather than by crown.
tags: [region, aureldia]
data:
  culture: aureldianclt
  demonym: Aureldian
  lore: [humanflk, grukarfolk, flksinale, flkkhazar]
  parents: [ankrscntnnt]
  borders: [{to: nrdlndsrgn, bearing: N}, {to: vrystwald, bearing: N}]
  population: 11000000
  packFolder: aureldia

# terran_analog: Medieval Western Europe (Western Christendom)
---

The Aureldia Region is bound by faith. It is the western heartland of the [[affiliation-arldnpnthn|Aureldian Pantheon]]—the Twelve—worshipped across a mosaic of sovereign kingdoms, merchant city-states, and island realms that together form the western third of the [[place-ankrscntnnt|Ankaris Continent]]. From the mist-shrouded shores of [[place-aelwyth|Aelwyth]] in the far northwest to the sunlit vineyards of the [[place-provenzrgn|Provenzia Region]] on the Vylarian coast, Aureldia binds together peoples as different as the Aelwythan islanders of the Misty Isle, the mystically attuned [[lore-pelwarpepl|Pelwar People]] of [[place-elavendre|Élavendre]], the peninsular kingdoms of the [[place-tarvenirgn|Tarvénia Region]], the merchant oligarchs of [[affiliation-calypsa|Kalipsa]], and the cultured Provenzian coast. What they share is not language, not lineage, and not a common crown—but the Twelve, and centuries of pilgrimage, intermarriage, trade, rivalry, and quiet mutual recognition.

## Geography

Aureldia occupies western Ankaris, from the pine forests along the [[place-nrdlndsrgn|Nordlands Region]] and [[place-vrystwald|Vristwald]] borders in the north down to the [[place-vylarianse|Vylarian Sea]]. Élavendre lies north of Provenzia and west of Tarvénia, which meets the [[place-vylariargn|Vylaria Region]] on its eastern side. The western coast faces the open ocean; the great island of Aelwyth—the Misty Isle—lies offshore, with the smaller port-island of [[place-calypsacity|Kalipsa]] closer to the mainland.

The terrain is remarkably varied. Élavendre's rolling plains and silver-birch forests give way inland to [[place-drenavrspn|The Drenavar Spine]], a natural divide between the Aureldian core and the interior regions. [[place-silvrfrsts|The Silver Forests]] are famous for a near-supernatural luminance at dawn and dusk—a landscape so distinctive that Aureldian painting, tapestry, and song return to it again and again. Farther south, Provenzia's coastal plains, hills, and river valleys produce some of the finest wine, glass, and illuminated work in all of [[place-worldthlrn|The World of Thalorna]]. Tarvénia's mountain kingdoms lie east of Provenzia and reach the sea along their southern edge.

Climate varies correspondingly: cool and rain-washed in the north and west, temperate through the central heartlands, and warm and dry along the southern coast. The region's many rivers—flowing both westward to the open ocean and southward to the Vylarian Sea—have long served as the arteries of Aureldian trade.

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
      AND l.data.government IN (p.address.canonical, p.documentation)
      AND (l.shortcode = 'aureldirgn' OR list_contains(l.data.parents, 'thalorna-note-place-aureldirgn'))
  )
ORDER BY p.name.full COLLATE NOCASE
```

## Peoples and Culture

Aureldia's people are overwhelmingly human, but they are far from homogeneous. Each heartland preserves a distinct cultural character.

The **[[lore-aelwythanclt|Aelwythan]]** of the Misty Isle are marked in their culture by deep legend, druidic survival, and the thin veil between the mortal world and the numinous. The **[[lore-elavendrnppl|Élavendren People]]** and **[[lore-aelendnppl|Áelendan People]]** of Élavendre share a common Pelwar ancestry—the Élavendri cultivated and courtly, the Áelendan tribal and forest-dwelling—and both are unusually magically attuned. The **[[lore-tarvenanclt|Tarvenan]]** peoples of the southern peninsula live in a patchwork of feudal kingdoms—the [[affiliation-kingdmtrvn|Kingdom of Tarvénia]], the [[affiliation-kingdmlnrk|Kingdom of Lienrik]], the [[affiliation-kngdmglvrn|Kingdom of Galvaren]], and the [[affiliation-kngdmstrth|Kingdom of Asturath]]—with the [[affiliation-frctyvlthr|Free City of Valthari]] and the [[affiliation-frtrtryskrth|Free Territory of Eskarath]] as independent merchant enclaves between them. The **Provenzians** of the southern coast are artists, poets, vintners, and philosophers, their city-culture more southern-coastal than ocean-facing. And the **Kalipsi** of Kalipsa are merchant-oligarchs whose seafaring houses carry Aureldian goods across most of Thalorna's known waters.

Minority peoples include isolated [[lore-grukarfolk|Grukar]] nests in the highlands, with no trade or parley between those nests and their neighbors, and—vanishingly rare, but not entirely absent—the elder races: members of the [[lore-flksinale|Sinale Folk]] who sometimes walk through Élavendre's oldest forests, and the [[lore-flkkhazar|Khazár Folk]], whose scattered halls endure in the high faces of the remotest ranges.

Despite the diversity, Aureldian high culture shares certain hallmarks: chivalric and courtly ideals; a tradition of bardic and scholastic learning epitomized by [[affiliation-bardicolgs|The Bardic Colleges]] of Élavendre; reverence for the land as a living participant in human affairs; and a deep preference for sovereignty at the polity level. No emperor has ever ruled all of Aureldia, and the parts that paid him took their crowns back. No Aureldian expects one to.

## The Aureldian Faith

Aureldia takes its name from the Aureldian Pantheon. Every Aureldian polity builds temples to the Twelve, whose distinct faiths honor [[lore-zunelasdty|Zunelas]] of dreams, [[lore-selmorosdty|Sélmoros]] of death, [[lore-brazemasdty|Brazemas]] of storms, [[lore-ardavondty|Árdavon]] of order, [[lore-marendasdty|Marendas]] of knowledge, [[lore-olveniadty|Ólvenia]] of prosperity, [[lore-lusiniadty|Lusinia]] of creation, [[lore-karnavosdty|Karnavos]] of chaos, [[lore-pozerasdty|Pozeras]] of voyages, [[lore-morvanadty|Morvana]] of decay, [[lore-lizelasdty|Lizelas]] of fertility, and [[lore-ustarondty|Ústaron]] of fire in one of his two contested aspects.

The faiths extend well beyond Aureldian borders—the Twelve are worshipped in the [[affiliation-vylarinmpr|Vylarian Empire]], the [[affiliation-cnfdrtntrzlnstts|Confederation of Taruzelian States]], [[place-helionis|Helionis]], the [[affiliation-byzarianlg|Bizarian League]], and elsewhere across the [[place-midhalnrgn|Mídhalión Region]]'s basin—but Aureldia is the cradle and the heartland. The great pilgrim-routes, the oldest shrines, the most influential scholars of the Twelve, and the highest concentration of clergy all lie in Aureldian lands. A priest educated in Élavendre or a scholar trained in Provenzia carries authority anywhere the Twelve are honored.

[[lore-ustaranschsm|The Ústaran Schism]] is the great fracture in Ústaran worship. Five centuries ago the clergy of Ústaron divided over whether the Forge-Lord's true nature was creative or destructive. [[affiliation-sacredforge|The Sacred Forge]]—Ústaron as craftsman, protector, and illuminator—became the mainstream Ústaran faith. [[affiliation-blackflame|The Black Flame]]—Ústaron as purifier-through-destruction, fire as weapon and instrument of domination—was suppressed across most kingdoms but survives in hidden orders and secretive shrines. The enmity between the two has shaped Aureldian politics for generations, and accusations of Black Flame sympathies remain a potent political weapon.

Aelwyth is the great partial exception to the Aureldian religious pattern. Centuries of Nordmen settlement have woven the gods of the [[affiliation-asguardian|Asguardian Pantheon]] into the island's religious life, and many Aelwythans revere both pantheons—an uneasy syncretism that the mainland Aureldian clergy view with curiosity, tolerance, or alarm depending on the decade.

## Politics and Power

Aureldia has no emperor, no paramount king, no unified church-state. What it has is an intricate web of sovereign polities bound by shared faith, dynastic intermarriage, common legal traditions descended loosely from old Vylarian law, and the constant low-level friction of competing ambitions. A Tarvenan knight, a Provenzian merchant, and an Aelwythan bard know one another at sight for fellow Aureldians—and may still go to war the following season.

The major powers of the region are:

- [[place-aelwyth|Aelwyth]]—The Misty Isle, a patchwork of kingdoms (the [[affiliation-kngdmldrth|Kingdom of Aldorath]], the [[affiliation-kingdmdnvr|Kingdom of Dúnavarre]]) and a republican enclave (the [[affiliation-repblcndrth|Republic of Ondareth]]), knit together by shared culture more than by government.
- [[place-elavendre|Élavendre]]—The Pelwar coastal kingdom, culturally preeminent but politically divided between the [[affiliation-kngdmlvndr|Kingdom of Élavendre]] and the neighboring [[place-alndntrblnds|Áelendan Tribal Lands]].
- [[affiliation-calypsa|Kalipsa]]—The merchant city-state, whose oligarchic trading houses make it influential far out of proportion to its size.
- [[place-tarvenirgn|Tarvénia Region]]—The peninsular patchwork of four kingdoms and two free territories.
- [[place-provenzrgn|Provenzia Region]]—The [[affiliation-kngdmprvnz|Kingdom of Provenzia]] and its constellation of cultured cities ([[place-kalveza|Kalveza]], [[place-palvothe|Palvote]], [[place-pirnebris|Pirnebris]], [[place-aureliane|Aurelane]], [[place-durvalis|Durvalis]], [[place-lizela|Lizela]], [[place-jalnazdal|Jalnasdal]]).

[[affiliation-ordoarcanis|Thordimalon]] maintains chapters across most Aureldian polities, asserting its claim to oversee all arcane practice—a claim honored in breach as often as in observance. Élavendre's independent magical traditions ([[lore-faecourts|The Fae Courts]], the Bardic Colleges, the Silver Forests mysteries) chafe constantly against Arcane Order authority, and the Aelwythan druidic survivals have never truly accepted Arcane Order oversight at all. The result is a magical culture that is broadly licensed under Arcane Order rules on paper and riddled with regional exceptions in practice.

## Trade

Aureldia sits at the western terminus of two great trade systems. The overland routes from Mídhalión and the eastern continents converge in Provenzia and Tarvénia, then feed north through Élavendre and west to the port cities of Kalipsa and Aelwyth. The maritime routes of the western ocean—still only partially charted—radiate outward from those same ports.

The region exports wine, tapestries, illuminated manuscripts, Élavendri silverwork, Tarvenan steel and horses, Aelwythan wool and curiosities, and the famed Provenzan glass. It imports spices, silks, and exotic goods from the east through Vylarian and Mídhalión trade, and raw metals, amber, and furs from the Nordlands. Kalipsa's merchant houses and Valthari's free city both function as neutral meeting grounds where Aureldian traders and their Mídhalión counterparts negotiate under guarantees of safe conduct—guarantees whose inviolability is one of the few things every Aureldian polity agrees upon.

## Relations with Neighboring Regions

To the **north**, the [[place-nrdlndsrgn|Nordlands]] press against Aureldia across a long, forested frontier. Contact is simultaneously commercial (Nordmen amber and furs for Aureldian wine and steel), religious (uneasy coexistence of the Twelve and the Asguardian gods), and martial (periodic Nordmen raids along the coast, especially into northern Aelwyth and Élavendre). The Aelwythan religious syncretism is the clearest expression of the long relationship.

To the **southeast**, [[place-midhalnrgn|Mídhalión]] is at once Aureldia's great trading partner and its great cultural rival. The two regions share the Aureldian faiths but diverge sharply on everything else—governance, aesthetics, law, and the nature of empire. [[place-provenzrgn|Provenzia Region]] and [[place-tarvenirgn|Tarvénia Region]] straddle the boundary between the two regions culturally and, in Provenzia's case, formally: Provenzia belongs to both Aureldia and Mídhalión, the living seam between them.

To the **east**, beyond the [[place-drenavrspn|Drenavar Spine]], lie the interior regions of Ankaris. Contact is thinner and filtered through mountain passes, and the interior peoples view Aureldia as distant and slightly unreal—a land of cathedrals and bards on the far side of the mountains.

## History

Aureldia's history is several histories that touch at a handful of points: the Pelwar coming west over the mountains and the water, the legions coming west after them, and the Empire's going. Dates are in [[lore-commoncal|The Vylarian Calendar]]. The ages in brief:

- **The Elder Ground (before ~1400 BF).** The Sinale held the western woods, and the Khazari cut [[place-vorgald|Vorgald]] into [[place-ironfells|The Ironfells]] and brought across the forebears of [[lore-vardain|The Vardain]] beneath it ([[lore-vorgaldcut|The Cutting of Vorgald]]). The Convoy of Six sailed from Élavendre in 1919 BF and was never seen again ([[lore-thecrossing|The Crossing]]), and about 1585 BF the two elder races of Aelwyth raised one crown over the island ([[lore-jointcrown|The Joint Crown of Aelwyth]]). The stone circles, passage graves and trackstones of the mainland belong to peoples nobody now names.
- **The Coming Over (~1400–984 BF).** [[lore-pelwarmigr|The Pelwar Migration]] reached the west. A band led by the herdsman [Dhargan]{.name data-type="being/npc"} crossed [[place-nelgan|Nelgan]] into the Silver Wood about 1380 BF, learned to keep the wood at [[place-longstair|The Long Stair]], lost the Sinale's regard in the Black Snow and won it back, and held the pass against raiders from the forest east of the mountains, after which the Sinale gave the wood to the Áelendan to keep ([[lore-nelgancross|The Crossing of Nelgan]], [[lore-lowestpoolpct|The Pact at the Lowest Pool]], [[lore-blacksnow|The Black Snow]], [[lore-firesnelgan|The Fires on Nelgan]]). On Aelwyth the refugees of about 1200 BF brought on the [Great War]{.name data-type="lore/history"}, which ended when the Sinale king died at [[place-threesisters|The Three Sisters]] in 984 BF ([[lore-threesistrs|The Battle of the Three Sisters]]).
- **The Old Crowns (984 BF – ~140 AF).** The Khazari finished the island's war and kept only the north-east for the Vardain ([[lore-endgreatwar|The Ending of the Great War]]). The lowland houses of [[place-beravriver|The Berav]] crowned Élavendre's first king about 560 BF, and he swore the Tree-Line oath at [[place-eshalshldg|Ésalosa Lodge]] ([[lore-firstcrown|The First Crowning of Élavendre]]). The Vylarian Republic planted Aurelane among the Tanevar kings about 110 BF ([[lore-aurelianefound|The Founding of Aurelane]]), the Grukar crossed to Aelwyth about 20 BF ([[lore-grukarcomes|The Grukar Come to Aelwyth]]), and Aldorath's barons crowned one of their own at [[place-kingsholow|Kingshollow]] about 120 AF ([[lore-kingshlwcrwn|The Crowning at Kingshollow]]).
- **The Eagles in the West (~140–418 AF).** The legions took Tarvénia's lowlands and held [[place-leonrik|Lienrik]] as a march ([[lore-lowlandstaken|The Lowlands Taken]]), lost a legion in the gorge below [[place-lezkora|Lezkora]] about 143 ([[lore-horngorgebtl|The Battle of the Horn Gorge]]), broke the Tanevar kings at [[place-tiravellake|Lake Tiravel]] about 152 and made Provenzia a province ([[lore-tiravlenbattle|Tiravlen]]), and brought Élavendre to a tribute treaty at [[place-valdun|Valdun]] about 171 ([[lore-elvtribute|The Tribute of Élavendre]]). The [[lore-ustaranschsm|Ústaran Schism]] of about 220 split the Forge-Lord's faith, and its worst battle was fought east of [[place-caerceravel|Torvila Keravel]] about 248 ([[lore-bloodhillsbtl|The Battle of the Blood Hills]]). About 320 the [[affiliation-alndnwrdns|Áelendan Wardens]] closed a king's workings in [[place-sorvanda|Sórvanda]], and every noble house of Élavendre set the Bardic Colleges to prove its descent ([[lore-sorvandaclose|The Sórvanda Closing]]). The age ended with [[lore-arzanasedict|The Edicts of Arzanas]]; the Vylarian side of it is [[lore-westernwars|The Western Wars]].
- **The Tribute Peace (~418–512 AF).** The west paid and was left alone. [[affiliation-ordrsldwrd|The Order of the Sealed Word]] was founded at [[place-olvestria|Ólvestra]] about 421 ([[lore-sealedwordfnd|The Founding of the Sealed Word]]), the captains of Ondareth threw down their last king about 440 and built a Senate from travelers' tales ([[lore-ondarethfall|The Fall of the Last King of Ondareth]]), and the Arcane Order's advisors took Dúnavarre's crown office by office until it was set aside about 490 ([[lore-dunavarresynod|The Mages Take Dúnavarre]]). Kalipsa, after the civil war that gave it a Harbourmaster of a single term, kept out of the Nordmen's quarrels.
- **The Falling-Away (512 – ~619 AF).** [[lore-threewinters|The Three Winters]] drew the legions north, and from 519 to 530 the Nordheim fleets struck Provenzia and Élavendre's north shore ([[lore-southrnfleets|The Southern Fleets]]). Tarvénia stopped paying and elected its first High King ([[lore-tarvfallsawy|Tarvénia Falls Away]]), a Tarvénian host broke the provincial levy at Malnebris about 556 and began the frontier war ([[lore-malnebris|Malnebris]]), and the province of Provenzia fought nine years for a charter ([[lore-charterwar|The War of the Charter]]). About 619 the Empire recognized the charter and freed the crowns from its _therkoi_ (governors) and its tax ([[lore-crownssettle|The Settlement of the Crowns]]).
- **The Charter Century (~619 AF to now).** Provenzia fought over a succession from 653 to 655 ([[lore-warprinces|The War of the Princes]]). The Nordmen took [[place-stormveld|Stormveld]] in 660 ([[lore-stormveldtkn|The Taking of Stormveld]]), the Áelendan let the [Doran Hilvan]{.name data-type="affiliation"} climb into the Kervaron about 680 ([[lore-twelfthloss|The Loss of the Twelfth]]), and the [[affiliation-dunavarsynod|Dúnavarre Synod]] hunted the [[affiliation-saelvri|Saelvri]] out of Aelwyth's south-east between about 694 and 703 ([[lore-saelvricrusade|The Saelvri Crusade]]).

Aureldia's [[lore-bloodfield|blood-fields]] lie mostly in Provenzia, which has more than anywhere else ([[lore-bloodfields|The Blood-fields of Provenzia]]); outside it there are two, [[place-horngorge|the Horn Gorge]] in Asturath and [[place-hushwood|the Hushwood]] on Aelwyth.

## Reckoning

Aureldia uses the **Vylarian Calendar**—the AF/BF system established by the [[affiliation-vylarinmpr|Vylarian Empire]] after its founding, now universally adopted across the region. See [[affiliation-vylarinmpr#the-vylarian-calendar|the Vylarian Empire's calendar]] for the full reckoning.

## See Also

- [[affiliation-arldnpnthn|Aureldian Pantheon]]—The Twelve; the region's defining faith
- [[place-aelwyth|Aelwyth]]—The Misty Isle
- [[place-elavendre|Élavendre]]—Pelwar coastal kingdom and cultural heartland
- [[affiliation-calypsa|Kalipsa]]—Merchant city-state
- [[place-tarvenirgn|Tarvénia Region]]—The peninsular kingdoms
- [[place-provenzrgn|Provenzia Region]]—The cultured southern coast (also part of [[place-midhalnrgn|Mídhalión]])
- [[affiliation-sacredforge|The Sacred Forge]], [[affiliation-blackflame|The Black Flame]]—The rival Ústaran faiths
- [[affiliation-ordoarcanis|Thordimalon]]—Cross-border arcane institution
- [[place-nrdlndsrgn|Nordlands Region]]—Northern neighbor
- [[place-midhalnrgn|Mídhalión]]—Southeastern neighbor and trading partner
- [[place-ankrscntnnt|Ankaris Continent]]—Parent continent
