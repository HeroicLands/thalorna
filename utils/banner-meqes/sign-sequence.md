# Meqes VI memorial: the sign sequence

The Khelathu banner is a posthumous memorial of Meqes VI in ten registers of tightly packed quadrats, with figure scenes two registers tall. The balance of accounts frames it (the heading and the weighing); the reign fills the wall between. Every sign is a drawn sign of Khelathi Zethu Glyphs. `sign-sequence.json` holds the same sequence as data, and `render.py` draws the banner from it.

## The English text

`[square brackets]` mark text restored from the approved inscription; `{braces}` mark formulas added from the Stela of Kuz'Uqa, the Hymn of the Sun Lord and the culture notes (sources below). Each episode is one paragraph; its registers follow it.

1. **The heading** (register 1). Year 1 of the Gar-Au ⟨Meqes, the seventh of the name⟩, {living, enduring, strong}. Went to the West the Gar-Au ⟨Meqes, the sixth of the name⟩, [Lord of the River and of the Two Banks], beloved of Uqa'a, {fire of Uqa'a upon the mound, who stood, who was crowned, lord of the count, whose house is entered, whose seal is on the granary, whose grain the barges carry}, [given life like the sun forever], in his twenty-seventh year. His account is read.
2. **Birth and crowning** (register 2). Shaped him Uzn'era [in the womb], a child of the house of Zu'Meku. Stood he upon the mound [at Yath-Telgu]; {set the priesthood of Uqa'a the crown on him, and gave him his name, ⟨Meqes⟩; by this name every contract of the year is dated.} Qe'aret set truth in his mouth, and Reth'Sa'ar wrote his name [in the house of books]. The gods gave him life and dominion, like the sun.
3. **The war of the west** (registers 3, 4). Came down His Majesty, {the Gar-Au ⟨Meqes⟩, beloved of Uqa'a, Lord of the River and of the Two Banks, given life like the sun forever,} upon the hill-men of the western margins, and Chaq'ur raged before him like the storm. Smote he their chieftains, [took he their herds,] and brought back their princes bound [beneath his sandals]. {The margins were the Gar-Au's.}
4. **The war of the north and the tribute** (registers 5, 6). Sailed he, {the Gar-Au ⟨Meqes⟩, beloved of Uqa'a, given life like the sun forever,} against the raiders of the northern sea, and the fire of Uqa'a went out against their ships. The river was at peace, and the barges came up laden: gold, cedar, horses [and slaves]. {The river was the Gar-Au's.}
5. **The great hunt and the lean years** (registers 7, 8). Rode he out, {the Gar-Au ⟨Meqes⟩, beloved of Uqa'a, Lord of the River and of the Two Banks,} against the river-horses that ravaged the herds and the fields, and the beasts taken were counted. In the years of the low river he opened the god's granaries under his seal, which he had filled in the years of the flood, and none of his people hungered.
6. **His works, the god's answer, and the weighing** (registers 9, 10). {The Gar-Au ⟨Meqes⟩, beloved of Uqa'a,} built anew the house of Uqa'a, gave it altars of gold, and endowed it with fields and herds. [He raised his Way at the head of the death-road at Zu-Gezer.] [Words spoken by Uqa'a, {fire on the first ground, lord of the dry ink, who comes up the road}: “My beloved son, I give you every land, every foreign country bowed beneath your sandals; I give you the years of the sun upon the throne of the mound.”] Before the gods the tablets lay level on the beam: what he owed was closed, and nothing remained; what was owed to him stood open. He went down owed.

## Registers and episodes

Each register runs 31.3 quadrats edge to edge at the line height, counting the figure scenes beside it. The renderer draws a thick coloured band between episodes and a thin rule between the registers of one episode.

| Register | Episode | Quadrats | Signs | Text width | Scenes beside it | Slack |
| -------- | ------- | -------- | ----- | ---------- | ---------------- | ----- |
| 1        | 1       | 27       | 60    | 24.8       | 0.0              | 6.5   |
| 2        | 2       | 28       | 60    | 25.7       | 0.0              | 5.6   |
| 3        | 3       | 13       | 25    | 10.8       | 18.7             | 1.6   |
| 4        | 3       | 11       | 28    | 10.3       | 18.7             | 2.1   |
| 5        | 4       | 10       | 21    | 9.5        | 21.5             | 0.1   |
| 6        | 4       | 11       | 24    | 8.7        | 21.5             | 0.9   |
| 7        | 5       | 10       | 19    | 9.3        | 20.3             | 1.6   |
| 8        | 5       | 11       | 28    | 9.5        | 20.3             | 1.4   |
| 9        | 6       | 19       | 40    | 17.3       | 11.6             | 2.2   |
| 10       | 6       | 20       | 40    | 16.5       | 11.6             | 3.1   |
| Total    |         | 160      | 345   |            |                  |       |

Slack is the width a register lacks, in quadrats; the renderer spreads it across that register's quadrat gaps. The line width is set by the widest register (register 5, the tribute). By this packing's measure registers 3 to 10 lack between 0.1 and 3.1 quadrats of it, and registers 1 and 2 about six; the renderer's own measure decides the final spacing.

## Packing

- **Shape classes** come from each glyph's ink bounds in the font (UPM 1000, quadrat 770 units), not from the eye: `small` is no more than 0.55 of a quadrat each way; `low` is no taller than 0.7 and at least 1.3 times as wide as tall; everything else is `tall`. The JSON records `shape`, `w` and `h` on every sign.
- **The rules** are the design note's (two flat signs stack; a low sign stacks under a short one; two narrow tall signs stand side by side) with three more: a tall sign never stands on another tall sign, two broad low signs never sit side by side, and a stack is scaled to fit the quadrat no smaller than 0.6, or 0.62 when a tall sign is in it (the scale at which the samples' Gar-Au, the gate over the seat, fits).
- **The packer** chooses, along each run of signs in reading order, the grouping into quadrats of one to four signs that costs least, where cost is the quadrat's width plus its empty area plus a charge for every sign shrunk. That stacks every low sign it can and pairs every narrow one, and it leaves **no quadrat holding a lone small or low sign** anywhere on the wall. Each quadrat's scale `k` is in the JSON.
- **Cartouches** are packed inside the oval on the same rules, and never split across registers.

## Figure scenes

Each scene is two registers tall (scale 2.1 of the line height), standing on the floor of its episode's second register, at the start (right) or the end (left) of the episode. In the JSON each scene lists its signs with `vignette: true`, its `scale` and the two registers it `spans`.

- Registers 3–4, start: 01-057 the Gar-Au's soldier behind his shield; 01-057 a second soldier behind his shield; 01-056 an archer drawing his bow; 01-015 a runner; 01-057 a third soldier behind his shield; 01-057 a fourth soldier behind his shield.
- Registers 3–4, end: 01-010 a prince bound, arms behind; 01-039 a foreign prince bound; 01-010 a third prince bound; 01-039 a fourth prince bound; 01-038 a chieftain slain; 05-004 their herds taken; 01-069 a captive with the yoke-board on his neck; 01-010 a fifth prince bound; 01-074 a soldier leading a captive by the neck.
- Registers 5–6, start: 06-014 a heron in the marsh; 06-020 a goose; 06-022 a goose in flight.
- Registers 5–6, end: 01-028 a boatman poling the barge; 01-054 a bearer with the cargo slung from his pole; 01-008 a bearer with a vessel on his head; 01-054 a second bearer with his pole; 14-015 a sack of the cargo; 05-005 a horse of the tribute; 01-054 a third bearer with his pole; 01-008 a second bearer with a vessel on his head; 12-014 a second laden barge; 01-028 a second boatman poling; 01-075 three raiders roped together by the neck; 01-076 a raider kneeling, bound.
- Registers 7–8, start: 01-056 the hunter drawing his bow; 05-018 a river-horse in the water; 01-025 a herdsman; 05-004 the herds the hunt kept; 01-056 a second hunter; 01-015 a beater running; 01-056 a third hunter.
- Registers 7–8, end: 01-054 a bearer carrying grain; 14-015 a sack of grain; 11-004 the granary; 01-005 a man receiving bread, palms out; 01-005 a second man receiving bread; 01-008 a man carrying a jar away; 01-054 a second grain bearer.
- Registers 9–10, start: 01-052 a priest with a censer; 01-008 an offering bearer, vessel on his head; 01-008 a second offering bearer; 01-054 an offering bearer with his load slung from a pole.
- Registers 9–10, end: 01-020 a farmer hoeing; 01-021 a reaper cutting grain; 01-021 a second reaper; 01-020 a second farmer hoeing; 01-025 a herdsman with crook and bundle.

## Where each idea comes from

Line numbers are of the file on thalorna `origin/main`.

- **The dated heading, the chain of titles, the verb first.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:34, :44, :49–59, :61–71
- **_living, enduring, strong_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:59
- **_fire of Uqa'a upon the mound_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:50
- **_lord of the count_; _who stood, who was crowned_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:56, :57
- **_whose house is entered_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:58
- **_by this name every contract of the year is dated_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:108
- **_whose seal is on the granary, whose grain the barges carry_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:58
- **The crown set by the priesthood of Uqa'a, and the name given.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:104–107; the priest as _Lem'Nelgir_ from `samples.json` (scene 3.1)
- **_The margins / the river was the Gar-Au's_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:64–71 (_and the cisterns were his_, _and the canal was his_) and :114
- **The titles repeated before each deed.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:49–59, the chain of titles at the head of the deeds
- **_fire on the first ground, lord of the dry ink, who comes up the road_.** `assets/content/Lore/Cultures/Khelathi/The_Hymn_of_the_Sun_Lord.md`:48, :51, :53
- **The posthumous date: Year 1 of the successor.** `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/Gar_Auu.md`:63, :130–131; `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/The_Reading_at_the_Weighing.md`:28–29
- **_Went to the West … in his twenty-seventh year_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:96; `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/Gar_Auu.md`:44, :130
- **_His account is read_.** `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/The_Reading_at_the_Weighing.md`:21, :91
- **The gods' gifts acknowledged, not booked as a debt.** `assets/content/Lore/Cultures/Khelathi/The_Instruction_of_Khelayu.md`:102
- **The granaries opened under his seal; none hungered.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:58; `assets/content/Lore/Cultures/Khelathi.md`:173; `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/The_Reading_at_the_Weighing.md`:85
- **The tablets level on the beam.** `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/The_Reading_at_the_Weighing.md`:100; `assets/content/Lore/Cultures/Khelathi.md`:65, :147
- **Closed, nothing remained; open, what was owed to him.** `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/The_Reading_at_the_Weighing.md`:62–65, :87–88, :110; the fonts design note's empty pan and `sample-account-level`
- **_He went down owed_.** `assets/content/Lore/Cultures/Khelathi.md`:169–171; `assets/content/Lore/Cultures/Khelathi/The_Instruction_of_Khelayu.md`:247–248
- **No endowment bought at the beam.** `assets/content/Lore/Cultures/Khelathi.md`:151; `assets/content/Regions/Xerathia/Northern_Fertile_Region/Khelathu/The_Reading_at_the_Weighing.md`:101

## The date

The wall is dated as the stela is, by the reign in which it is cut: _Year 1 of the Gar-Au ⟨Meqes, the seventh of the name⟩_. The king-list counts a successor's first year from the year the old Gar-Au dies, so Year 1 of Meqes VII is the year Meqes VI went to the West. Meqes VII is a queen; the cartouche carries no gender. **Flagged:** the alternative is _Year 27 of Meqes VI_; no note shows a dead king's regnal year continuing past his death.

## Conventions

- **Direction.** Each register reads right to left, and every sign in the font faces right, toward the start of the line, so **no sign needs mirroring**; `mirror` is false throughout. The scenes face right too, toward the start of their registers.
- **MdC.** `-` separates quadrats, `:` stacks (upper first), `*` sets side by side (right first), `<`…`>` is the cord oval.
- **The linker.** 10-016 writes `ez`, `ezu` and `elu`, as every sample inscription does.
- **Gods.** Uqa'a is spelled in full wherever his name stands in the king's titles and in his own speech; Qe'aret, Reth'Sa'ar and Chaq'ur are spelled in full, closed by their signs, as the design note keeps the spelled form for the formal record. Uzn'era is her sign alone, for width.
- **Cartouches.** Meqes VI and Meqes VII are m-q-s with six and seven strokes; the bare ⟨Meqes⟩ in the deeds and the name given at the crowning carry no number.
- **Colour categories.** `figure`: red ochre (skin, bodies, beasts); `bird`: blue or green; `gold`: gold (sun disks, crown, the cord oval, precious things); `water`: blue; `plant`: green; `object`: yellow ochre; `land`: pink-brown ochre with red dots (hills, mounds, roads); `stroke`: blue-black (strokes, numerals, the catch); `god:uqaa`: Uqa'a's icon: orange-gold disk, red flame tongues; `god:uznera`: Uzn'era's icon: white lotus, green leaves, red serpent; `god:qearet`: Qe'aret's icon: white tablets on a gold beam and post; `god:rethsaar`: Reth'Sa'ar's icon: gold roll, turquoise quill, red cord; `god:chaqur`: Chaq'ur's icon: green serpent, gold bolt. The cord oval is gold.

## Register 1 (episode 1: The heading)

| #   | Quadrat | Sign   | Code point | Subject                                                                           | Writes                                                                                      | Role          | Shape | Colour   |
| --- | ------- | ------ | ---------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------- | ----- | -------- |
| 1   | 1       | 16-024 | U+1EC14    | the crown's two-headed serpent holding a ring of twelve nicks                     | Year (regnal)                                                                               | ideogram      | tall  | gold     |
| 2   | 1       | 16-004 | U+1EBDF    | single upright stroke                                                             | 1                                                                                           | numeral       | small | stroke   |
| 3   | 2       | 11-001 | U+1EB64    | sealed gate                                                                       | Gar- (house)                                                                                | phonetic      | tall  | object   |
| 4   | 2       | 11-002 | U+1EB65    | seat on a mound                                                                   | -Au (the seat on the mound)                                                                 | ideogram      | low   | object   |
| 5   | 3       | 13-002 | U+1EB8C    | weigh-beam on its post                                                            | Meqes: m (in the oval)                                                                      | phonetic      | tall  | object   |
| 6   | 3       | 13-003 | U+1EB8D    | surveyor's peg with its cord                                                      | Meqes: q (in the oval)                                                                      | phonetic      | tall  | object   |
| 7   | 4       | 12-005 | U+1EB81    | sail on its spar                                                                  | Meqes: s (in the oval)                                                                      | phonetic      | tall  | object   |
| 8   | 4       | 16-021 | U+1EC03    | seven strokes in two rows                                                         | the seventh (of the name) (in the oval) (flag: the sixth and the seventh of the name)       | numeral       | tall  | stroke   |
| 9   | 5       | 08-005 | U+1EB21    | grain sprout out of the silt                                                      | living (anlagh) {added}                                                                     | ideogram      | tall  | plant    |
| 10  | 5       | 10-002 | U+1EB49    | boundary stone                                                                    | enduring (gez) {added}                                                                      | ideogram      | tall  | object   |
| 11  | 6       | 01-014 | U+1EA4D    | standing man, both arms braced on a stave                                         | strong (k-z, kuz) {added} (flag: living, enduring, strong)                                  | ideogram      | tall  | figure   |
| 12  | 6       | 04-015 | U+1EAB8    | legs walking                                                                      | went (to the West)                                                                          | ideogram      | tall  | figure   |
| 13  | 6       | 10-014 | U+1EB55    | ridge with a notch, the west                                                      | the West                                                                                    | ideogram      | low   | land     |
| 14  | 7       | 11-001 | U+1EB64    | sealed gate                                                                       | Gar- (house)                                                                                | phonetic      | tall  | object   |
| 15  | 7       | 11-002 | U+1EB65    | seat on a mound                                                                   | -Au (the seat on the mound)                                                                 | ideogram      | low   | object   |
| 16  | 8       | 13-002 | U+1EB8C    | weigh-beam on its post                                                            | Meqes: m (in the oval)                                                                      | phonetic      | tall  | object   |
| 17  | 8       | 13-003 | U+1EB8D    | surveyor's peg with its cord                                                      | Meqes: q (in the oval)                                                                      | phonetic      | tall  | object   |
| 18  | 9       | 12-005 | U+1EB81    | sail on its spar                                                                  | Meqes: s (in the oval)                                                                      | phonetic      | tall  | object   |
| 19  | 9       | 16-027 | U+1EC17    | six strokes, three over three                                                     | the sixth (of the name) (in the oval) (flag: the sixth and the seventh of the name)         | numeral       | tall  | stroke   |
| 20  | 10      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au                        | the Gar-Au (det.)                                                                           | determinative | tall  | figure   |
| 21  | 10      | 01-013 | U+1EA4C    | standing man in a long garment                                                    | Lord (zab) [restored]                                                                       | ideogram      | tall  | figure   |
| 22  | 10      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of [restored]                                                                           | phonetic      | low   | plant    |
| 23  | 11      | 10-001 | U+1EB48    | current between two banks                                                         | the River (igelu) [restored]                                                                | ideogram      | tall  | water    |
| 24  | 12      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | and of [restored]                                                                           | phonetic      | low   | plant    |
| 25  | 12      | 10-028 | U+1EB63    | land and a sprout                                                                 | the land (bank) [restored] (flag: Two Banks)                                                | ideogram      | low   | land     |
| 26  | 13      | 16-005 | U+1EBE0    | two strokes                                                                       | two (the Two Banks) [restored] (flag: Two Banks)                                            | numeral       | small | stroke   |
| 27  | 13      | 02-017 | U+1EA8E    | man and woman, arms about each other                                              | beloved (amqel)                                                                             | ideogram      | tall  | figure   |
| 28  | 14      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of                                                                                      | phonetic      | low   | plant    |
| 29  | 14      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | Uqa'a: ' (initial U)                                                                        | phonetic      | small | stroke   |
| 30  | 14      | 13-003 | U+1EB8D    | surveyor's peg with its cord                                                      | Uqa'a: q                                                                                    | phonetic      | tall  | object   |
| 31  | 14      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | Uqa'a: ' (the pause)                                                                        | phonetic      | small | stroke   |
| 32  | 15      | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                                          | Uqa'a (his sign closes the name)                                                            | god           | tall  | god:uqaa |
| 33  | 15      | 09-015 | U+1EB3F    | smoke rising from a hearth                                                        | fire (the hearth's flame) {added} (flag: the fire of Uqa'a)                                 | ideogram      | tall  | god:uqaa |
| 34  | 15      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of {added}                                                                              | phonetic      | low   | plant    |
| 35  | 16      | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                                          | Uqa'a {added}                                                                               | god           | tall  | god:uqaa |
| 36  | 16      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | elu, upon {added}                                                                           | phonetic      | low   | plant    |
| 37  | 17      | 10-011 | U+1EB52    | mound on a flat                                                                   | the mound {added}                                                                           | ideogram      | low   | land     |
| 38  | 17      | 15-007 | U+1EBD1    | the crown of the Gar-Au: gold band with azure uprights and the two-headed serpent | who stood, who was crowned (the crown) {added} (flag: stood upon the mound)                 | ideogram      | low   | gold     |
| 39  | 18      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au                        | (the Gar-Au enthroned, det.) {added}                                                        | determinative | tall  | figure   |
| 40  | 18      | 01-013 | U+1EA4C    | standing man in a long garment                                                    | lord {added} (flag: lord of the count)                                                      | ideogram      | tall  | figure   |
| 41  | 18      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of {added}                                                                              | phonetic      | low   | plant    |
| 42  | 19      | 13-035 | U+1EBAD    | tally rod being cut                                                               | the count (the tally rod) {added} (flag: lord of the count)                                 | ideogram      | low   | object   |
| 43  | 19      | 11-003 | U+1EB66    | house, roof and door                                                              | whose house {added} (flag: whose house is entered)                                          | ideogram      | tall  | object   |
| 44  | 20      | 14-018 | U+1EBC5    | clay tablet                                                                       | is entered (the tablet) {added} (flag: whose house is entered)                              | ideogram      | tall  | object   |
| 45  | 20      | 13-032 | U+1EBAA    | stamp seal                                                                        | whose seal {added} (flag: whose seal is on the granary, whose grain the barges carry)       | ideogram      | tall  | object   |
| 46  | 20      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | elu, is on {added}                                                                          | phonetic      | low   | plant    |
| 47  | 21      | 11-004 | U+1EB67    | domed granary                                                                     | the granary {added} (flag: whose seal is on the granary, whose grain the barges carry)      | ideogram      | tall  | object   |
| 48  | 22      | 14-016 | U+1EBC3    | heap of grain                                                                     | whose grain {added} (flag: whose seal is on the granary, whose grain the barges carry)      | ideogram      | low   | object   |
| 49  | 22      | 12-014 | U+1EB8A    | barge laden with sacks                                                            | the barges carry {added} (flag: whose seal is on the granary, whose grain the barges carry) | ideogram      | low   | object   |
| 50  | 23      | 03-023 | U+1EAA7    | an open palm held above a bowed head                                              | given [restored] (flag: given / I give you)                                                 | ideogram      | tall  | figure   |
| 51  | 23      | 08-005 | U+1EB21    | grain sprout out of the silt                                                      | life (anlagh) [restored]                                                                    | ideogram      | tall  | plant    |
| 52  | 23      | 09-005 | U+1EB35    | disk at the top of the arch                                                       | like the sun (thelqen) [restored] (flag: like the sun)                                      | ideogram      | low   | gold     |
| 53  | 24      | 10-002 | U+1EB49    | boundary stone                                                                    | forever (gez, enduring) [restored]                                                          | ideogram      | tall  | object   |
| 54  | 25      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, in                                                                                     | phonetic      | low   | plant    |
| 55  | 25      | 16-024 | U+1EC14    | the crown's two-headed serpent holding a ring of twelve nicks                     | his year (regnal)                                                                           | ideogram      | tall  | gold     |
| 56  | 26      | 16-003 | U+1EBDE    | lens with an attestation line across it                                           | 10                                                                                          | numeral       | small | stroke   |
| 57  | 26      | 16-003 | U+1EBDE    | lens with an attestation line across it                                           | 10                                                                                          | numeral       | small | stroke   |
| 58  | 26      | 16-021 | U+1EC03    | seven strokes in two rows                                                         | 7 (twenty-seventh)                                                                          | numeral       | tall  | stroke   |
| 59  | 26      | 04-018 | U+1EABB    | heart bound with a cord and sealed with a knot                                    | his account (halzi) (flag: his account)                                                     | ideogram      | tall  | figure   |
| 60  | 27      | 03-005 | U+1EA95    | a curl of breath leaving a mouth                                                  | is read (breath leaving a mouth) (flag: is read)                                            | ideogram      | tall  | figure   |

```text
16-024:16-004-11-001:11-002-<13-002*13-003-12-005:16-021>-08-005*10-002-01-014*04-015:10-014-11-001:11-002-<13-002*13-003-12-005:16-027>-01-060*01-013:10-016-10-001-10-016:10-028-16-005*02-017-10-016:16-001*13-003*16-001-09-002*09-015:10-016-09-002:10-016-10-011:15-007-01-060*01-013:10-016-13-035:11-003-14-018*13-032:10-016-11-004-14-016:12-014-03-023*08-005:09-005-10-002-10-016:16-024-16-003*16-003:16-021*04-018-03-005
```

## Register 2 (episode 2: Birth and crowning)

| #   | Quadrat | Sign   | Code point | Subject                                                                           | Writes                                                                  | Role          | Shape | Colour       |
| --- | ------- | ------ | ---------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------- | ----- | ------------ |
| 1   | 1       | 03-009 | U+1EA99    | a lotus with a river-snake wound about the stem                                   | Uzn'era (her sign alone)                                                | god           | tall  | god:uznera   |
| 2   | 2       | 01-026 | U+1EA59    | man at the wheel                                                                  | shaped (the potter at the wheel) (flag: shaped him)                     | ideogram      | tall  | figure       |
| 3   | 3       | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, in [restored]                                                      | phonetic      | low   | plant        |
| 4   | 3       | 02-011 | U+1EA88    | seated lady in a long garment                                                     | the womb (the mother) [restored] (flag: in the womb)                    | ideogram      | tall  | figure       |
| 5   | 3       | 01-011 | U+1EA4A    | child seated, finger raised                                                       | a child                                                                 | ideogram      | tall  | figure       |
| 6   | 4       | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of                                                                  | phonetic      | low   | plant        |
| 7   | 4       | 11-003 | U+1EB66    | house, roof and door                                                              | the house                                                               | ideogram      | tall  | object       |
| 8   | 5       | 12-006 | U+1EB82    | furled sail with its tuck                                                         | Zu'Meku: z                                                              | phonetic      | tall  | object       |
| 9   | 6       | 16-001 | U+1EBDC    | slanted reed nick                                                                 | Zu'Meku: ' (the seam)                                                   | phonetic      | small | stroke       |
| 10  | 6       | 13-002 | U+1EB8C    | weigh-beam on its post                                                            | Zu'Meku: m                                                              | phonetic      | tall  | object       |
| 11  | 7       | 13-007 | U+1EB91    | sickle                                                                            | Zu'Meku: k                                                              | phonetic      | tall  | object       |
| 12  | 7       | 15-007 | U+1EBD1    | the crown of the Gar-Au: gold band with azure uprights and the two-headed serpent | stood (crowned) (flag: stood upon the mound)                            | ideogram      | low   | gold         |
| 13  | 8       | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au                        | the Gar-Au (det.)                                                       | determinative | tall  | figure       |
| 14  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | elu, upon                                                               | phonetic      | low   | plant        |
| 15  | 9       | 10-011 | U+1EB52    | mound on a flat                                                                   | the mound; Yath- (mound)                                                | ideogram      | low   | land         |
| 16  | 9       | 13-005 | U+1EB8F    | grain scoop                                                                       | Telgu: t [restored]                                                     | phonetic      | tall  | object       |
| 17  | 10      | 13-001 | U+1EB8B    | plumb-line with its bob                                                           | Telgu: l [restored]                                                     | phonetic      | tall  | object       |
| 18  | 10      | 13-008 | U+1EB92    | sickle with its sheaf                                                             | Telgu: g [restored]                                                     | phonetic      | tall  | object       |
| 19  | 10      | 10-012 | U+1EB53    | island in a river                                                                 | the island (det.) [restored]                                            | determinative | low   | water        |
| 20  | 11      | 01-002 | U+1EA41    | kneeling servant, palms up on the thighs                                          | the priesthood (lem, servant) {added} (flag: the priesthood of Uqa'a)   | ideogram      | tall  | figure       |
| 21  | 11      | 03-001 | U+1EA91    | seated god, hands on his knees                                                    | of the god (Lem'Nelgir, priest) {added} (flag: the priesthood of Uqa'a) | determinative | tall  | figure       |
| 22  | 11      | 16-006 | U+1EBE1    | three strokes                                                                     | (plural) {added} (flag: plural mark)                                    | determinative | small | stroke       |
| 23  | 11      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of {added}                                                          | phonetic      | low   | plant        |
| 24  | 12      | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                                          | Uqa'a {added}                                                           | god           | tall  | god:uqaa     |
| 25  | 12      | 15-007 | U+1EBD1    | the crown of the Gar-Au: gold band with azure uprights and the two-headed serpent | set the crown {added}                                                   | ideogram      | low   | gold         |
| 26  | 13      | 03-023 | U+1EAA7    | an open palm held above a bowed head                                              | gave him {added} (flag: given / I give you)                             | ideogram      | tall  | figure       |
| 27  | 13      | 13-042 | U+1EC05    | name-peg tag on a cord                                                            | his name (reth) {added}                                                 | ideogram      | tall  | object       |
| 28  | 14      | 13-002 | U+1EB8C    | weigh-beam on its post                                                            | Meqes: m (in the oval) {added}                                          | phonetic      | tall  | object       |
| 29  | 15      | 13-003 | U+1EB8D    | surveyor's peg with its cord                                                      | Meqes: q (in the oval) {added}                                          | phonetic      | tall  | object       |
| 30  | 15      | 12-005 | U+1EB81    | sail on its spar                                                                  | Meqes: s (in the oval) {added}                                          | phonetic      | tall  | object       |
| 31  | 16      | 13-042 | U+1EC05    | name-peg tag on a cord                                                            | by this name {added}                                                    | ideogram      | tall  | object       |
| 32  | 17      | 14-019 | U+1EBC6    | sealed roll tied with a cord                                                      | every contract (the sealed roll) {added} (flag: every contract)         | ideogram      | low   | object       |
| 33  | 17      | 16-006 | U+1EBE1    | three strokes                                                                     | (plural) {added} (flag: plural mark)                                    | determinative | small | stroke       |
| 34  | 17      | 16-024 | U+1EC14    | the crown's two-headed serpent holding a ring of twelve nicks                     | of the year, is dated (the regnal year) {added} (flag: is dated)        | ideogram      | tall  | gold         |
| 35  | 18      | 13-003 | U+1EB8D    | surveyor's peg with its cord                                                      | Qe'aret: q                                                              | phonetic      | tall  | object       |
| 36  | 18      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | Qe'aret: ' (the pause)                                                  | phonetic      | small | stroke       |
| 37  | 18      | 12-007 | U+1EB83    | punting pole with a forked foot                                                   | Qe'aret: r                                                              | phonetic      | tall  | object       |
| 38  | 19      | 13-005 | U+1EB8F    | grain scoop                                                                       | Qe'aret: t                                                              | phonetic      | tall  | object       |
| 39  | 20      | 03-006 | U+1EA96    | two account tablets level on a beam over a post                                   | Qe'aret (her sign)                                                      | god           | tall  | god:qearet   |
| 40  | 20      | 04-011 | U+1EAB4    | hand                                                                              | set (the hand) (flag: set truth in his mouth)                           | ideogram      | low   | figure       |
| 41  | 21      | 13-033 | U+1EBAB    | balance with two pans                                                             | truth (the level balance) (flag: truth)                                 | ideogram      | tall  | object       |
| 42  | 21      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, in                                                                 | phonetic      | low   | plant        |
| 43  | 22      | 04-006 | U+1EAAF    | mouth                                                                             | his mouth                                                               | ideogram      | low   | figure       |
| 44  | 22      | 12-007 | U+1EB83    | punting pole with a forked foot                                                   | Reth'Sa'ar: r                                                           | phonetic      | tall  | object       |
| 45  | 22      | 12-009 | U+1EB85    | mooring post with a rope turn                                                     | Reth'Sa'ar: th                                                          | phonetic      | tall  | object       |
| 46  | 23      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | ' (the pause)                                                           | phonetic      | small | stroke       |
| 47  | 23      | 12-005 | U+1EB81    | sail on its spar                                                                  | Reth'Sa'ar: s                                                           | phonetic      | tall  | object       |
| 48  | 24      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | ' (the pause)                                                           | phonetic      | small | stroke       |
| 49  | 24      | 12-007 | U+1EB83    | punting pole with a forked foot                                                   | Reth'Sa'ar: r                                                           | phonetic      | tall  | object       |
| 50  | 25      | 03-007 | U+1EA97    | a quill laid across a sealed roll                                                 | Reth'Sa'ar (his sign)                                                   | god           | low   | god:rethsaar |
| 51  | 25      | 01-041 | U+1EA68    | seated scribe with kit                                                            | wrote (the scribe)                                                      | ideogram      | tall  | figure       |
| 52  | 25      | 13-042 | U+1EC05    | name-peg tag on a cord                                                            | his name (reth)                                                         | ideogram      | tall  | object       |
| 53  | 26      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, in [restored]                                                      | phonetic      | low   | plant        |
| 54  | 26      | 11-013 | U+1EB70    | cabinet of rolls                                                                  | the house of books [restored]                                           | ideogram      | tall  | object       |
| 55  | 26      | 03-001 | U+1EA91    | seated god, hands on his knees                                                    | the gods (nelgir)                                                       | ideogram      | tall  | figure       |
| 56  | 27      | 16-006 | U+1EBE1    | three strokes                                                                     | (plural) (flag: plural mark)                                            | determinative | small | stroke       |
| 57  | 27      | 03-023 | U+1EAA7    | an open palm held above a bowed head                                              | gave (flag: given / I give you)                                         | ideogram      | tall  | figure       |
| 58  | 28      | 08-005 | U+1EB21    | grain sprout out of the silt                                                      | life (anlagh)                                                           | ideogram      | tall  | plant        |
| 59  | 28      | 03-029 | U+1EC0D    | a hand of power within a ring                                                     | dominion (flag: dominion)                                               | ideogram      | tall  | gold         |
| 60  | 28      | 09-005 | U+1EB35    | disk at the top of the arch                                                       | like the sun (thelqen) (flag: like the sun)                             | ideogram      | low   | gold         |

```text
03-009-01-026-10-016:02-011*01-011-10-016:11-003-12-006-16-001:13-002-13-007:15-007-01-060-10-016:10-011:13-005-13-001*13-008:10-012-01-002*03-001:16-006*10-016-09-002:15-007-03-023*13-042-<13-002-13-003*12-005>-13-042-14-019*16-006:16-024-13-003*16-001*12-007-13-005-03-006:04-011-13-033:10-016-04-006:12-007*12-009-16-001:12-005-16-001*12-007-03-007:01-041*13-042-10-016:11-013*03-001-16-006:03-023-08-005*03-029:09-005
```

## Register 3 (episode 3: The war of the west)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                              | Role     | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | --------------------------------------------------- | -------- | ----- | -------- |
| 1   | 1       | 04-015 | U+1EAB8    | legs walking                                               | came down                                           | ideogram | tall  | figure   |
| 2   | 2       | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | His Majesty                                         | ideogram | tall  | figure   |
| 3   | 3       | 11-001 | U+1EB64    | sealed gate                                                | Gar- (house) {added}                                | phonetic | tall  | object   |
| 4   | 3       | 11-002 | U+1EB65    | seat on a mound                                            | -Au (the seat on the mound) {added}                 | ideogram | low   | object   |
| 5   | 4       | 13-002 | U+1EB8C    | weigh-beam on its post                                     | Meqes: m (in the oval) {added}                      | phonetic | tall  | object   |
| 6   | 5       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Meqes: q (in the oval) {added}                      | phonetic | tall  | object   |
| 7   | 5       | 12-005 | U+1EB81    | sail on its spar                                           | Meqes: s (in the oval) {added}                      | phonetic | tall  | object   |
| 8   | 6       | 02-017 | U+1EA8E    | man and woman, arms about each other                       | beloved (amqel) {added}                             | ideogram | tall  | figure   |
| 9   | 7       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of {added}                                      | phonetic | low   | plant    |
| 10  | 7       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (initial U) {added}                        | phonetic | small | stroke   |
| 11  | 7       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Uqa'a: q {added}                                    | phonetic | tall  | object   |
| 12  | 7       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (the pause) {added}                        | phonetic | small | stroke   |
| 13  | 8       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                   | Uqa'a (his sign closes the name) {added}            | god      | tall  | god:uqaa |
| 14  | 8       | 01-013 | U+1EA4C    | standing man in a long garment                             | Lord (zab) {added}                                  | ideogram | tall  | figure   |
| 15  | 8       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of {added}                                      | phonetic | low   | plant    |
| 16  | 9       | 10-001 | U+1EB48    | current between two banks                                  | the River (igelu) {added}                           | ideogram | tall  | water    |
| 17  | 10      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | and of {added}                                      | phonetic | low   | plant    |
| 18  | 10      | 10-028 | U+1EB63    | land and a sprout                                          | the land (bank) {added} (flag: Two Banks)           | ideogram | low   | land     |
| 19  | 10      | 16-005 | U+1EBE0    | two strokes                                                | two (the Two Banks) {added} (flag: Two Banks)       | numeral  | small | stroke   |
| 20  | 11      | 03-023 | U+1EAA7    | an open palm held above a bowed head                       | given {added} (flag: given / I give you)            | ideogram | tall  | figure   |
| 21  | 11      | 08-005 | U+1EB21    | grain sprout out of the silt                               | life (anlagh) {added}                               | ideogram | tall  | plant    |
| 22  | 11      | 09-005 | U+1EB35    | disk at the top of the arch                                | like the sun (thelqen) {added} (flag: like the sun) | ideogram | low   | gold     |
| 23  | 12      | 10-002 | U+1EB49    | boundary stone                                             | forever (gez, enduring) {added}                     | ideogram | tall  | object   |
| 24  | 13      | 01-066 | U+1EBFF    | two lines of men advancing against each other              | upon (in battle) (flag: came down upon)             | ideogram | low   | figure   |
| 25  | 13      | 01-040 | U+1EA67    | bushy-bearded man                                          | the hill-men (foreigner)                            | ideogram | tall  | figure   |

```text
04-015-01-060-11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002*01-013:10-016-10-001-10-016:10-028:16-005-03-023*08-005:09-005-10-002-01-066:01-040
```

## Register 4 (episode 3: The war of the west)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                                             | Role          | Shape | Colour     |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | ------------------------------------------------------------------ | ------------- | ----- | ---------- |
| 1   | 1       | 10-013 | U+1EB54    | three hills over sand                                      | of the hills (foreign land, det.)                                  | determinative | low   | land       |
| 2   | 1       | 16-006 | U+1EBE1    | three strokes                                              | (plural) (flag: plural mark)                                       | determinative | small | stroke     |
| 3   | 1       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of                                                             | phonetic      | low   | plant      |
| 4   | 2       | 10-014 | U+1EB55    | ridge with a notch, the west                               | the west                                                           | ideogram      | low   | land       |
| 5   | 2       | 10-002 | U+1EB49    | boundary stone                                             | the margins (gez, the boundary)                                    | ideogram      | tall  | object     |
| 6   | 2       | 13-014 | U+1EB98    | scoop with the umbel's stem rising from it                 | Chaq'ur: ch                                                        | phonetic      | tall  | object     |
| 7   | 3       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Chaq'ur: q                                                         | phonetic      | tall  | object     |
| 8   | 3       | 16-001 | U+1EBDC    | slanted reed nick                                          | ' (the pause)                                                      | phonetic      | small | stroke     |
| 9   | 3       | 12-007 | U+1EB83    | punting pole with a forked foot                            | Chaq'ur: r                                                         | phonetic      | tall  | object     |
| 10  | 4       | 03-011 | U+1EA9B    | a serpent coiled round a split-footed bolt                 | Chaq'ur (his sign)                                                 | god           | tall  | god:chaqur |
| 11  | 4       | 01-015 | U+1EA4E    | running man                                                | raged (rushing) (flag: raged)                                      | ideogram      | tall  | figure     |
| 12  | 4       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, before                                                         | phonetic      | low   | plant      |
| 13  | 5       | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | him (His Majesty)                                                  | determinative | tall  | figure     |
| 14  | 6       | 13-026 | U+1EBA4    | long spear                                                 | smote (qezir, strike, spear)                                       | ideogram      | tall  | object     |
| 15  | 6       | 01-038 | U+1EA65    | man lying dead                                             | (slain, det.)                                                      | determinative | low   | figure     |
| 16  | 7       | 01-013 | U+1EA4C    | standing man in a long garment                             | their chieftains (lords) (flag: chieftains)                        | ideogram      | tall  | figure     |
| 17  | 7       | 01-040 | U+1EA67    | bushy-bearded man                                          | foreign (det.)                                                     | determinative | tall  | figure     |
| 18  | 7       | 16-006 | U+1EBE1    | three strokes                                              | (plural) (flag: plural mark)                                       | determinative | small | stroke     |
| 19  | 8       | 04-011 | U+1EAB4    | hand                                                       | took (the hand) [restored] (flag: took their herds)                | ideogram      | low   | figure     |
| 20  | 8       | 05-035 | U+1EAE2    | bull's head                                                | their herds [restored]                                             | ideogram      | tall  | figure     |
| 21  | 8       | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored] (flag: plural mark)                            | determinative | small | stroke     |
| 22  | 9       | 04-015 | U+1EAB8    | legs walking                                               | brought back                                                       | ideogram      | tall  | figure     |
| 23  | 9       | 01-039 | U+1EA66    | foreigner seated, arms bound                               | their princes, bound                                               | ideogram      | tall  | figure     |
| 24  | 9       | 16-006 | U+1EBE1    | three strokes                                              | (plural) (flag: plural mark)                                       | determinative | small | stroke     |
| 25  | 9       | 01-044 | U+1EA6B    | man prostrate, face to the ground                          | beneath (prostrate) [restored]                                     | ideogram      | low   | figure     |
| 26  | 10      | 04-015 | U+1EAB8    | legs walking                                               | his sandals (the feet) [restored] (flag: beneath his/your sandals) | ideogram      | tall  | figure     |
| 27  | 11      | 10-002 | U+1EB49    | boundary stone                                             | the margins (gez) {added}                                          | ideogram      | tall  | object     |
| 28  | 11      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | were the Gar-Au's {added} (flag: was the Gar-Au's)                 | ideogram      | tall  | figure     |

```text
10-013:16-006:10-016-10-014:10-002*13-014-13-003*16-001*12-007-03-011*01-015:10-016-01-060-13-026:01-038-01-013*01-040:16-006-04-011:05-035*16-006-04-015*01-039:16-006*01-044-04-015-10-002*01-060
```

## Register 5 (episode 4: The war of the north and the tribute)

| #   | Quadrat | Sign   | Code point | Subject                                  | Writes                                              | Role          | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------- | --------------------------------------------------- | ------------- | ----- | -------- |
| 1   | 1       | 12-005 | U+1EB81    | sail on its spar                         | sailed (the sail)                                   | ideogram      | tall  | object   |
| 2   | 2       | 11-001 | U+1EB64    | sealed gate                              | Gar- (house) {added}                                | phonetic      | tall  | object   |
| 3   | 2       | 11-002 | U+1EB65    | seat on a mound                          | -Au (the seat on the mound) {added}                 | ideogram      | low   | object   |
| 4   | 3       | 13-002 | U+1EB8C    | weigh-beam on its post                   | Meqes: m (in the oval) {added}                      | phonetic      | tall  | object   |
| 5   | 4       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Meqes: q (in the oval) {added}                      | phonetic      | tall  | object   |
| 6   | 4       | 12-005 | U+1EB81    | sail on its spar                         | Meqes: s (in the oval) {added}                      | phonetic      | tall  | object   |
| 7   | 5       | 02-017 | U+1EA8E    | man and woman, arms about each other     | beloved (amqel) {added}                             | ideogram      | tall  | figure   |
| 8   | 6       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of {added}                                      | phonetic      | low   | plant    |
| 9   | 6       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (initial U) {added}                        | phonetic      | small | stroke   |
| 10  | 6       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Uqa'a: q {added}                                    | phonetic      | tall  | object   |
| 11  | 6       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (the pause) {added}                        | phonetic      | small | stroke   |
| 12  | 7       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues | Uqa'a (his sign closes the name) {added}            | god           | tall  | god:uqaa |
| 13  | 8       | 03-023 | U+1EAA7    | an open palm held above a bowed head     | given {added} (flag: given / I give you)            | ideogram      | tall  | figure   |
| 14  | 8       | 08-005 | U+1EB21    | grain sprout out of the silt             | life (anlagh) {added}                               | ideogram      | tall  | plant    |
| 15  | 8       | 09-005 | U+1EB35    | disk at the top of the arch              | like the sun (thelqen) {added} (flag: like the sun) | ideogram      | low   | gold     |
| 16  | 9       | 10-002 | U+1EB49    | boundary stone                           | forever (gez, enduring) {added}                     | ideogram      | tall  | object   |
| 17  | 9       | 01-040 | U+1EA67    | bushy-bearded man                        | the raiders (foreigner)                             | ideogram      | tall  | figure   |
| 18  | 9       | 16-006 | U+1EBE1    | three strokes                            | (plural) (flag: plural mark)                        | determinative | small | stroke   |
| 19  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of                                              | phonetic      | low   | plant    |
| 20  | 10      | 10-022 | U+1EB5D    | water over broken rocks                  | the sea (flag: the northern sea)                    | ideogram      | low   | water    |
| 21  | 10      | 10-009 | U+1EB50    | pool with trees round it                 | north (Miglet): m-g (flag: north)                   | phonetic      | low   | water    |

```text
12-005-11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002-03-023*08-005:09-005-10-002*01-040:16-006*10-016-10-022:10-009
```

## Register 6 (episode 4: The war of the north and the tribute)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                                  | Role          | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | ------------------------------------------------------- | ------------- | ----- | -------- |
| 1   | 1       | 13-001 | U+1EB8B    | plumb-line with its bob                                    | Miglet: l                                               | phonetic      | tall  | object   |
| 2   | 2       | 13-005 | U+1EB8F    | grain scoop                                                | Miglet: t                                               | phonetic      | tall  | object   |
| 3   | 2       | 09-015 | U+1EB3F    | smoke rising from a hearth                                 | the fire (the hearth's flame) (flag: the fire of Uqa'a) | ideogram      | tall  | god:uqaa |
| 4   | 2       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of                                                  | phonetic      | low   | plant    |
| 5   | 3       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (initial U)                                    | phonetic      | small | stroke   |
| 6   | 3       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Uqa'a: q                                                | phonetic      | tall  | object   |
| 7   | 4       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (the pause)                                    | phonetic      | small | stroke   |
| 8   | 4       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                   | Uqa'a (his sign closes the name)                        | god           | tall  | god:uqaa |
| 9   | 5       | 04-015 | U+1EAB8    | legs walking                                               | went out                                                | ideogram      | tall  | figure   |
| 10  | 5       | 12-002 | U+1EB7E    | reed boat, upturned ends                                   | against their ships                                     | ideogram      | low   | object   |
| 11  | 6       | 16-006 | U+1EBE1    | three strokes                                              | (plural) (flag: plural mark)                            | determinative | small | stroke   |
| 12  | 6       | 10-001 | U+1EB48    | current between two banks                                  | the river                                               | ideogram      | tall  | water    |
| 13  | 7       | 12-016 | U+1EC06    | two oars shipped across a boat                             | at peace (legez: oars shipped)                          | ideogram      | low   | object   |
| 14  | 7       | 12-014 | U+1EB8A    | barge laden with sacks                                     | the barges, laden                                       | ideogram      | low   | object   |
| 15  | 8       | 04-015 | U+1EAB8    | legs walking                                               | came up                                                 | ideogram      | tall  | figure   |
| 16  | 8       | 13-038 | U+1EBB0    | gold nugget                                                | gold (qenuwa)                                           | ideogram      | low   | gold     |
| 17  | 9       | 13-037 | U+1EBAF    | log                                                        | cedar (timber, lagun) (flag: cedar)                     | ideogram      | low   | object   |
| 18  | 9       | 16-006 | U+1EBE1    | three strokes                                              | (plural) (flag: plural mark)                            | determinative | small | stroke   |
| 19  | 9       | 05-005 | U+1EAC4    | horse, standing                                            | horses                                                  | ideogram      | tall  | figure   |
| 20  | 9       | 16-006 | U+1EBE1    | three strokes                                              | (plural) (flag: plural mark)                            | determinative | small | stroke   |
| 21  | 10      | 01-069 | U+1EC09    | kneeling man, yoke-board on his neck                       | slaves (lemzu, bondsman) [restored]                     | ideogram      | tall  | figure   |
| 22  | 11      | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored] (flag: plural mark)                 | determinative | small | stroke   |
| 23  | 11      | 10-001 | U+1EB48    | current between two banks                                  | the river {added}                                       | ideogram      | tall  | water    |
| 24  | 11      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | was the Gar-Au's {added} (flag: was the Gar-Au's)       | ideogram      | tall  | figure   |

```text
13-001-13-005*09-015:10-016-16-001*13-003-16-001:09-002-04-015:12-002-16-006:10-001-12-016:12-014-04-015:13-038-13-037*16-006:05-005*16-006-01-069-16-006:10-001*01-060
```

## Register 7 (episode 5: The great hunt and the lean years)

| #   | Quadrat | Sign   | Code point | Subject                                  | Writes                                        | Role     | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------- | --------------------------------------------- | -------- | ----- | -------- |
| 1   | 1       | 05-005 | U+1EAC4    | horse, standing                          | rode out (the horse) (flag: rode out)         | ideogram | tall  | figure   |
| 2   | 2       | 11-001 | U+1EB64    | sealed gate                              | Gar- (house) {added}                          | phonetic | tall  | object   |
| 3   | 2       | 11-002 | U+1EB65    | seat on a mound                          | -Au (the seat on the mound) {added}           | ideogram | low   | object   |
| 4   | 3       | 13-002 | U+1EB8C    | weigh-beam on its post                   | Meqes: m (in the oval) {added}                | phonetic | tall  | object   |
| 5   | 4       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Meqes: q (in the oval) {added}                | phonetic | tall  | object   |
| 6   | 4       | 12-005 | U+1EB81    | sail on its spar                         | Meqes: s (in the oval) {added}                | phonetic | tall  | object   |
| 7   | 5       | 02-017 | U+1EA8E    | man and woman, arms about each other     | beloved (amqel) {added}                       | ideogram | tall  | figure   |
| 8   | 6       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of {added}                                | phonetic | low   | plant    |
| 9   | 6       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (initial U) {added}                  | phonetic | small | stroke   |
| 10  | 6       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Uqa'a: q {added}                              | phonetic | tall  | object   |
| 11  | 6       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (the pause) {added}                  | phonetic | small | stroke   |
| 12  | 7       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues | Uqa'a (his sign closes the name) {added}      | god      | tall  | god:uqaa |
| 13  | 7       | 01-013 | U+1EA4C    | standing man in a long garment           | Lord (zab) {added}                            | ideogram | tall  | figure   |
| 14  | 7       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of {added}                                | phonetic | low   | plant    |
| 15  | 8       | 10-001 | U+1EB48    | current between two banks                | the River (igelu) {added}                     | ideogram | tall  | water    |
| 16  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing     | and of {added}                                | phonetic | low   | plant    |
| 17  | 9       | 10-028 | U+1EB63    | land and a sprout                        | the land (bank) {added} (flag: Two Banks)     | ideogram | low   | land     |
| 18  | 10      | 16-005 | U+1EBE0    | two strokes                              | two (the Two Banks) {added} (flag: Two Banks) | numeral  | small | stroke   |
| 19  | 10      | 13-025 | U+1EBA3    | bow and arrow                            | against, slaying (bow and arrow)              | ideogram | tall  | object   |

```text
05-005-11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002*01-013:10-016-10-001-10-016:10-028-16-005*13-025
```

## Register 8 (episode 5: The great hunt and the lean years)

| #   | Quadrat | Sign   | Code point | Subject                                     | Writes                                                        | Role          | Shape | Colour |
| --- | ------- | ------ | ---------- | ------------------------------------------- | ------------------------------------------------------------- | ------------- | ----- | ------ |
| 1   | 1       | 05-018 | U+1EAD1    | river-horse half under the waterline        | the river-horses (igelzut) (flag: the wild beasts)            | ideogram      | low   | figure |
| 2   | 1       | 16-006 | U+1EBE1    | three strokes                               | (plural) (flag: plural mark)                                  | determinative | small | stroke |
| 3   | 1       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of (that ravaged)                                         | phonetic      | low   | plant  |
| 4   | 2       | 05-035 | U+1EAE2    | bull's head                                 | the herds (flag: that ravaged the herds and the fields)       | ideogram      | tall  | figure |
| 5   | 2       | 16-006 | U+1EBE1    | three strokes                               | (plural) (flag: plural mark)                                  | determinative | small | stroke |
| 6   | 3       | 10-008 | U+1EB4F    | plot with furrow lines                      | the fields                                                    | ideogram      | low   | plant  |
| 7   | 3       | 16-006 | U+1EBE1    | three strokes                               | (plural) (flag: plural mark)                                  | determinative | small | stroke |
| 8   | 3       | 13-035 | U+1EBAD    | tally rod being cut                         | counted (the tally rod) (flag: the beasts taken were counted) | ideogram      | low   | object |
| 9   | 4       | 09-019 | U+1EB43    | ring of thirty-six nicks                    | the years                                                     | ideogram      | tall  | gold   |
| 10  | 4       | 16-006 | U+1EBE1    | three strokes                               | (plural) (flag: plural mark)                                  | determinative | small | stroke |
| 11  | 5       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of                                                        | phonetic      | low   | plant  |
| 12  | 5       | 09-018 | U+1EB42    | low river between bare banks                | the low river (Shelu)                                         | ideogram      | low   | water  |
| 13  | 5       | 04-011 | U+1EAB4    | hand                                        | opened (the hand) (flag: opened the granaries)                | ideogram      | low   | figure |
| 14  | 6       | 13-032 | U+1EBAA    | stamp seal                                  | his seal (flag: under his seal)                               | ideogram      | tall  | object |
| 15  | 6       | 11-004 | U+1EB67    | domed granary                               | the granaries (habtun)                                        | ideogram      | tall  | object |
| 16  | 6       | 16-006 | U+1EBE1    | three strokes                               | (plural) (flag: plural mark)                                  | determinative | small | stroke |
| 17  | 6       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of                                                        | phonetic      | low   | plant  |
| 18  | 7       | 03-001 | U+1EA91    | seated god, hands on his knees              | the god (nelgir)                                              | ideogram      | tall  | figure |
| 19  | 8       | 14-016 | U+1EBC3    | heap of grain                               | filled (heaped grain) (flag: filled its storehouses)          | ideogram      | low   | object |
| 20  | 8       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ezu, in                                                       | phonetic      | low   | plant  |
| 21  | 8       | 09-019 | U+1EB43    | ring of thirty-six nicks                    | the years                                                     | ideogram      | tall  | gold   |
| 22  | 9       | 16-006 | U+1EBE1    | three strokes                               | (plural) (flag: plural mark)                                  | determinative | small | stroke |
| 23  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of                                                        | phonetic      | low   | plant  |
| 24  | 9       | 09-016 | U+1EB40    | flooded field under a wave                  | the flood (Azlet)                                             | ideogram      | low   | water  |
| 25  | 10      | 01-068 | U+1EC08    | standing man, empty hands open at his sides | his people (zelar, the commoner) (flag: his people)           | ideogram      | tall  | figure |
| 26  | 10      | 16-006 | U+1EBE1    | three strokes                               | (plural) (flag: plural mark)                                  | determinative | small | stroke |
| 27  | 10      | 14-007 | U+1EBBA    | loaf                                        | did not hunger: bread (flag: none of his people hungered)     | ideogram      | low   | object |
| 28  | 11      | 08-005 | U+1EB21    | grain sprout out of the silt                | and life (flag: none of his people hungered)                  | ideogram      | tall  | plant  |

```text
05-018:16-006:10-016-05-035:16-006-10-008*16-006:13-035-09-019:16-006-10-016:09-018:04-011-13-032*11-004:16-006*10-016-03-001-14-016:10-016:09-019-16-006:10-016:09-016-01-068*16-006:14-007-08-005
```

## Register 9 (episode 6: His works, the god's answer, and the weighing)

| #   | Quadrat | Sign   | Code point | Subject                                  | Writes                                                                 | Role          | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------- | ---------------------------------------------------------------------- | ------------- | ----- | -------- |
| 1   | 1       | 11-001 | U+1EB64    | sealed gate                              | Gar- (house) {added}                                                   | phonetic      | tall  | object   |
| 2   | 1       | 11-002 | U+1EB65    | seat on a mound                          | -Au (the seat on the mound) {added}                                    | ideogram      | low   | object   |
| 3   | 2       | 13-002 | U+1EB8C    | weigh-beam on its post                   | Meqes: m (in the oval) {added}                                         | phonetic      | tall  | object   |
| 4   | 3       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Meqes: q (in the oval) {added}                                         | phonetic      | tall  | object   |
| 5   | 3       | 12-005 | U+1EB81    | sail on its spar                         | Meqes: s (in the oval) {added}                                         | phonetic      | tall  | object   |
| 6   | 4       | 02-017 | U+1EA8E    | man and woman, arms about each other     | beloved (amqel) {added}                                                | ideogram      | tall  | figure   |
| 7   | 5       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of {added}                                                         | phonetic      | low   | plant    |
| 8   | 5       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (initial U) {added}                                           | phonetic      | small | stroke   |
| 9   | 5       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Uqa'a: q {added}                                                       | phonetic      | tall  | object   |
| 10  | 5       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (the pause) {added}                                           | phonetic      | small | stroke   |
| 11  | 6       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues | Uqa'a (his sign closes the name) {added}                               | god           | tall  | god:uqaa |
| 12  | 7       | 11-025 | U+1EB7C    | scaffold against a wall                  | built anew (the scaffold)                                              | ideogram      | tall  | object   |
| 13  | 8       | 11-001 | U+1EB64    | sealed gate                              | the house (gar)                                                        | ideogram      | tall  | object   |
| 14  | 8       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of                                                                 | phonetic      | low   | plant    |
| 15  | 9       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (initial U)                                                   | phonetic      | small | stroke   |
| 16  | 9       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Uqa'a: q                                                               | phonetic      | tall  | object   |
| 17  | 10      | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (the pause)                                                   | phonetic      | small | stroke   |
| 18  | 10      | 09-002 | U+1EB32    | disk on the horizon, three flame tongues | Uqa'a (his sign closes the name)                                       | god           | tall  | god:uqaa |
| 19  | 11      | 14-009 | U+1EBBC    | offering table with loaves               | altars (the offering table) (flag: gave it altars)                     | ideogram      | tall  | object   |
| 20  | 11      | 16-006 | U+1EBE1    | three strokes                            | (plural) (flag: plural mark)                                           | determinative | small | stroke   |
| 21  | 11      | 13-038 | U+1EBB0    | gold nugget                              | of gold (lapis: no sign) (flag: lapis)                                 | ideogram      | low   | gold     |
| 22  | 12      | 13-032 | U+1EBAA    | stamp seal                               | endowed (the seal and its warrant) (flag: endowed it)                  | ideogram      | tall  | object   |
| 23  | 13      | 10-008 | U+1EB4F    | plot with furrow lines                   | fields                                                                 | ideogram      | low   | plant    |
| 24  | 13      | 16-006 | U+1EBE1    | three strokes                            | (plural) (flag: plural mark)                                           | determinative | small | stroke   |
| 25  | 13      | 05-004 | U+1EAC3    | two oxen under a yoke                    | herds                                                                  | ideogram      | tall  | figure   |
| 26  | 13      | 01-061 | U+1EA7C    | man setting a block with a plumb-cord    | raised (the builder) [restored]                                        | ideogram      | tall  | figure   |
| 27  | 14      | 10-020 | U+1EB5B    | path between two stones                  | his Way (wal, the road) [restored]                                     | ideogram      | low   | land     |
| 28  | 14      | 11-017 | U+1EB74    | low tomb with sloping sides              | (tomb, det.) [restored]                                                | determinative | low   | object   |
| 29  | 15      | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, at (the head of) [restored]                                        | phonetic      | low   | plant    |
| 30  | 15      | 10-020 | U+1EB5B    | path between two stones                  | the death-road (road) [restored] (flag: at the head of the death-road) | ideogram      | low   | land     |
| 31  | 15      | 10-014 | U+1EB55    | ridge with a notch, the west             | of the dead (the west) [restored]                                      | determinative | low   | land     |
| 32  | 16      | 10-016 | U+1EB57    | field with furrows, one edge showing     | ezu, at [restored]                                                     | phonetic      | low   | plant    |
| 33  | 16      | 12-006 | U+1EB82    | furled sail with its tuck                | Zu-Gezer: z [restored]                                                 | phonetic      | tall  | object   |
| 34  | 17      | 10-002 | U+1EB49    | boundary stone                           | Gezer: g-z [restored]                                                  | phonetic      | tall  | object   |
| 35  | 17      | 12-007 | U+1EB83    | punting pole with a forked foot          | Gezer: r [restored]                                                    | phonetic      | tall  | object   |
| 36  | 18      | 10-027 | U+1EB62    | cluster of houses on a rise              | (town, det.) [restored]                                                | determinative | low   | land     |
| 37  | 18      | 03-005 | U+1EA95    | a curl of breath leaving a mouth         | words spoken (breath leaving a mouth) [restored]                       | ideogram      | tall  | figure   |
| 38  | 19      | 04-006 | U+1EAAF    | mouth                                    | (speech, det.) [restored]                                              | determinative | low   | figure   |
| 39  | 19      | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, by [restored]                                                      | phonetic      | low   | plant    |
| 40  | 19      | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (initial U) [restored]                                        | phonetic      | small | stroke   |

```text
11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002-11-025-11-001:10-016-16-001*13-003-16-001:09-002-14-009:16-006*13-038-13-032-10-008*16-006:05-004*01-061-10-020:11-017-10-016:10-020:10-014-10-016:12-006-10-002*12-007-10-027:03-005-04-006:10-016:16-001
```

## Register 10 (episode 6: His works, the god's answer, and the weighing)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                                                      | Role          | Shape | Colour     |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | --------------------------------------------------------------------------- | ------------- | ----- | ---------- |
| 1   | 1       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Uqa'a: q [restored]                                                         | phonetic      | tall  | object     |
| 2   | 1       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (the pause) [restored]                                             | phonetic      | small | stroke     |
| 3   | 2       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                   | Uqa'a (his sign closes the name) [restored]                                 | god           | tall  | god:uqaa   |
| 4   | 2       | 09-015 | U+1EB3F    | smoke rising from a hearth                                 | fire {added} (flag: the fire of Uqa'a)                                      | ideogram      | tall  | god:uqaa   |
| 5   | 2       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | elu, on {added}                                                             | phonetic      | low   | plant      |
| 6   | 2       | 10-011 | U+1EB52    | mound on a flat                                            | the first ground (the mound) {added} (flag: fire on the first ground)       | ideogram      | low   | land       |
| 7   | 3       | 01-013 | U+1EA4C    | standing man in a long garment                             | lord {added}                                                                | ideogram      | tall  | figure     |
| 8   | 4       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of {added}                                                              | phonetic      | low   | plant      |
| 9   | 4       | 14-020 | U+1EBC7    | ink cake and reed                                          | the dry ink (ink cake and reed) {added}                                     | ideogram      | low   | object     |
| 10  | 5       | 04-015 | U+1EAB8    | legs walking                                               | who comes up {added}                                                        | ideogram      | tall  | figure     |
| 11  | 5       | 10-020 | U+1EB5B    | path between two stones                                    | the road {added}                                                            | ideogram      | low   | land       |
| 12  | 6       | 01-067 | U+1EC07    | tall standing figure beside a small one                    | my son (the parent with the child) [restored] (flag: my son)                | ideogram      | tall  | figure     |
| 13  | 6       | 02-017 | U+1EA8E    | man and woman, arms about each other                       | beloved (amqel) [restored]                                                  | ideogram      | tall  | figure     |
| 14  | 7       | 03-023 | U+1EAA7    | an open palm held above a bowed head                       | I give you [restored] (flag: given / I give you)                            | ideogram      | tall  | figure     |
| 15  | 7       | 10-028 | U+1EB63    | land and a sprout                                          | every land [restored] (flag: every land, every foreign country)             | ideogram      | low   | land       |
| 16  | 8       | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored] (flag: plural mark)                                     | determinative | small | stroke     |
| 17  | 8       | 10-013 | U+1EB54    | three hills over sand                                      | every foreign country [restored] (flag: every land, every foreign country)  | ideogram      | low   | land       |
| 18  | 8       | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored] (flag: plural mark)                                     | determinative | small | stroke     |
| 19  | 9       | 01-043 | U+1EA6A    | man bowing low                                             | bowed (man bowing low) [restored]                                           | ideogram      | tall  | figure     |
| 20  | 10      | 01-044 | U+1EA6B    | man prostrate, face to the ground                          | (prostrate, det.) [restored]                                                | determinative | low   | figure     |
| 21  | 10      | 04-015 | U+1EAB8    | legs walking                                               | beneath your sandals (the feet) [restored] (flag: beneath his/your sandals) | ideogram      | tall  | figure     |
| 22  | 11      | 03-023 | U+1EAA7    | an open palm held above a bowed head                       | I give you [restored] (flag: given / I give you)                            | ideogram      | tall  | figure     |
| 23  | 12      | 09-019 | U+1EB43    | ring of thirty-six nicks                                   | the years (selqur) [restored]                                               | ideogram      | tall  | gold       |
| 24  | 12      | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored] (flag: plural mark)                                     | determinative | small | stroke     |
| 25  | 13      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of [restored]                                                           | phonetic      | low   | plant      |
| 26  | 13      | 09-005 | U+1EB35    | disk at the top of the arch                                | the sun (thelqen) [restored]                                                | ideogram      | low   | gold       |
| 27  | 13      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | elu, upon [restored]                                                        | phonetic      | low   | plant      |
| 28  | 14      | 11-002 | U+1EB65    | seat on a mound                                            | the throne of the mound [restored]                                          | ideogram      | low   | object     |
| 29  | 14      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | (the Gar-Au, det.) [restored]                                               | determinative | tall  | figure     |
| 30  | 15      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, before                                                                  | phonetic      | low   | plant      |
| 31  | 15      | 03-001 | U+1EA91    | seated god, hands on his knees                             | the gods                                                                    | ideogram      | tall  | figure     |
| 32  | 16      | 16-006 | U+1EBE1    | three strokes                                              | (plural) (flag: plural mark)                                                | determinative | small | stroke     |
| 33  | 16      | 03-006 | U+1EA96    | two account tablets level on a beam over a post            | the tablets level on the beam (flag: the tablets level on the beam)         | ideogram      | tall  | god:qearet |
| 34  | 17      | 13-033 | U+1EBAB    | balance with two pans                                      | (the scale, det.)                                                           | determinative | tall  | object     |
| 35  | 17      | 16-014 | U+1EBE9    | closing bar under a row                                    | closed (what he owed) (flag: closed)                                        | ideogram      | low   | stroke     |
| 36  | 18      | 16-030 | U+1EC1A    | a lone balance pan, empty, hung on its cords               | nothing remained (the empty pan)                                            | ideogram      | tall  | gold       |
| 37  | 18      | 16-015 | U+1EBEA    | gap in a bar                                               | open (what was owed to him) (flag: open)                                    | ideogram      | low   | stroke     |
| 38  | 19      | 04-015 | U+1EAB8    | legs walking                                               | he went down (to the West)                                                  | ideogram      | tall  | figure     |
| 39  | 19      | 10-014 | U+1EB55    | ridge with a notch, the west                               | the West                                                                    | ideogram      | low   | land       |
| 40  | 20      | 04-018 | U+1EABB    | heart bound with a cord and sealed with a knot             | owed (his account) (flag: he went down owed)                                | ideogram      | tall  | figure     |

```text
13-003*16-001-09-002*09-015:10-016:10-011-01-013-10-016:14-020-04-015:10-020-01-067*02-017-03-023:10-028-16-006:10-013:16-006-01-043-01-044:04-015-03-023-09-019:16-006-10-016:09-005:10-016-11-002:01-060-10-016:03-001-16-006:03-006-13-033:16-014-16-030:16-015-04-015:10-014-04-018
```

## Stretches flagged for the owner

- **the sixth and the seventh of the name** (register 1). No sign writes an ordinal, and neither the design note nor the thalorna notes say how a regnal number is written in Zethu. The wall sets the strokes inside the oval after the name, six (16-027) for Meqes VI and seven (16-021) for Meqes VII, since the king-list numbers a throne name's bearers and the number belongs to the name.
- **living, enduring, strong** (register 1). From the stela's closing epithet. _Strong_ is 01-014, the standing man braced on a stave, whose consonants k-z are _kuz_, strong (the throne-name element in the Khelathi note).
- **Two Banks** (register 1, 3, 7). No sign means a river bank. Written _the land, two_: 10-028 (land and a sprout) with the two strokes after it, as a count follows its noun in Zethu. 10-001 (current between two banks) already draws both banks, so an alternative is to drop the phrase into _Lord of the River_ alone.
- **the fire of Uqa'a** (register 1, 6, 10). The fire is 09-015, smoke rising from a hearth (h). It is a hearth, not a weapon, and the sign carries no god of its own. Uqa'a's gloss is _fire_, so his sign alone could stand here instead.
- **stood upon the mound** (register 1, 2). The standing is written as the crowning it was: the crown of the Gar-Au (15-007) and the enthroned figure (01-060), then _upon the mound_. No sign shows a man standing on a mound.
- **lord of the count** (register 1). The stela's _lord of the count_ is written _lord, of, the tally rod_ (01-013, 10-016, 13-035).
- **whose house is entered** (register 1). Written _house, tablet_ (11-003, 14-018): the clay tablet stands for the entry, as in _his account is read_.
- **whose seal is on the granary, whose grain the barges carry** (register 1). Written _seal, upon, granary; grain, barge_ (13-032, 10-016, 11-004; 14-016, 12-014). The relative _whose_ is unwritten.
- **given / I give you** (register 1, 2, 3, 5, 10). No sign means _give_. 03-023, an open palm held above a bowed head, is the gesture of a superior conferring on a bowed recipient, and carries no god. It is the nearest honest sign; the plain hand (04-011) is the fallback.
- **like the sun** (register 1, 2, 3, 5). No sign means _like_, so the comparison is unwritten: _life, dominion, the sun_. 09-005 (the disk at the top of the arch) is used for the sun so that Uqa'a's own sign, 09-002, keeps its god's sense.
- **his account** (register 1). 04-018, the heart bound with a cord and sealed (h-l-z), is _halzi_: the heart and the account it answers for. It writes _his account_ here and _owed_ at the end of register 6.
- **is read** (register 1). No sign means _read aloud_. 03-005, a curl of breath leaving a mouth, writes speaking.
- **shaped him** (register 2). No sign means _shape_. 01-026, the man at the wheel (g-th-r, _gethar_, potter), shows a potter forming a vessel. It is an image of making, not a word for it.
- **in the womb** (register 2). No sign for the womb. Written _in the mother_ with 02-011, the seated lady in a long garment.
- **the priesthood of Uqa'a** (register 2). Written as the sample inscription writes a priest, _Lem'Nelgir_: the kneeling servant (01-002, l-m, _lem_) and the seated god (03-001), with the plural strokes, then _of Uqa'a_.
- **plural mark** (register 2, 4, 5, 6, 8, 9, 10). The three strokes (16-006) are the numeral three. Using them after a noun as the plural mark is the Egyptian convention, and no Zethu note states it. The fallback is to write a plural by repeating the sign.
- **every contract** (register 2). No sign means a contract. 14-019, the sealed roll tied with a cord, is the nearest: a document closed under seal. The stela names contracts, tax rolls and leases; only the contract is written.
- **is dated** (register 2). No sign means _to date_. The regnal-year sign (16-024) after _contract_ writes _of the year_, and the dating is read from it.
- **set truth in his mouth** (register 2). No verb sign for _set_ or _place_. The plain hand (04-011) stands for the act.
- **truth** (register 2). No sign means truth. 13-033, the balance with two pans, is the level account that Qe'aret's own sign (03-006) also draws. It reads as _order_ at least as readily as _truth_.
- **dominion** (register 2). 03-029, a hand of power within a ring, carries no stated word. Read as power held, it stands for dominion.
- **came down upon** (register 3). 01-066, two lines of men advancing against each other (q-z-t, _qezat_, battle), writes the war. At banner size its figures are small and thin; it is the least legible sign on the wall.
- **raged** (register 4). No sign for rage. 01-015, the running man, writes the onrush.
- **chieftains** (register 4). No sign for a chief. Written as _lord_ (01-013, the noble) with the foreigner (01-040) as determinative and the plural strokes.
- **took their herds** (register 4). No sign for _take_. The plain hand (04-011) stands for seizing.
- **beneath his/your sandals** (register 4, 10). The sandal (15-009) is in the inventory but not drawn, so it prints nothing. Written with the walking legs (04-015) and, in register 3, the prostrate man (01-044). The sandal is the right sign once drawn.
- **was the Gar-Au's** (register 4, 6). The stela's refrain _and the canal was his_ is written with the enthroned Gar-Au (01-060) after the thing taken: _the margins, the Gar-Au_.
- **the northern sea** (register 5). No sign for the sea. 10-022, water over broken rocks, reads as surf on a coast.
- **north** (register 5). No sign for north. Spelled from the affix _-Miglet_: 10-009 (m-g), 13-001 (l), 13-005 (t). Its m-g value is from the sign's consonants; the spelling has no other source.
- **cedar** (register 6). No sign for cedar. 13-037, the log (l-g-n, _lagun_), means timber of any kind.
- **rode out** (register 7). No chariot or rider is drawn. The horse (05-005) stands for riding out.
- **the wild beasts** (register 8). No lion and no wild bull is drawn: the bull survives only as a head (05-035), which already writes the herds. The beasts are the river-horse (05-018, _igelzut_), drawn half under the waterline; a river-horse in the fields is a beast that ravages crops. The river cat (05-040) is the only other wild beast drawn that belongs to no god; the jackal is Hezmu'iri's and the crocodile Chelsur's.
- **that ravaged the herds and the fields** (register 8). No sign for ravaging. The line reads _the beasts of the herds and the fields_, and the vignette carries the hunt.
- **the beasts taken were counted** (register 8). Written with the tally rod (13-035). No number is given in the approved text, so none is written. A count in strokes and tens (16-003) can follow the tally if the owner names one.
- **opened the granaries** (register 8). No sign for opening. The plain hand (04-011) stands for the act.
- **under his seal** (register 8). 13-032, the stamp seal (_qathur_), after the stela's _whose seal is on the granary_.
- **filled its storehouses** (register 8). Written with 14-016, the heap of grain, before the granary. No sign means _fill_.
- **his people** (register 8). No sign for a people. 01-068, the standing man with empty hands (z-l-r, _zelar_, the commoner), with the plural strokes, writes the common folk.
- **none of his people hungered** (register 8). No sign for hunger or its absence. Written _his people: bread and life_, with the loaf (14-007) and the sprout of life (08-005).
- **gave it altars** (register 9). No sign means _give_ to a god here; the offering table (14-009) with the plural strokes writes _altars_, and the giving is left unwritten.
- **lapis** (register 9). No sign for lapis or any blue stone, and none is coined. The register reads _altars of gold_; the render can paint the altar sign lapis blue to carry the rest.
- **endowed it** (register 9). Written with 13-032, the stamp seal (q-th-r, _qathur_, the seal and the warrant it closes): fields and herds given by sealed warrant.
- **at the head of the death-road** (register 9). No sign for the head of a road. Written _at the road of the dead_: 10-020 (path between two stones) with 10-014 (the west, the realm of the dead) as determinative.
- **fire on the first ground** (register 10). The hymn's _first ground_ is the primeval mound; 10-011 (mound on a flat) writes it.
- **my son** (register 10). No sign means son. 01-067, a tall standing figure beside a small one (th-z), shows a parent with a child. The seated child (01-011) is the alternative.
- **every land, every foreign country** (register 10). No sign for _every_. Written as plurals: lands, foreign countries.
- **the tablets level on the beam** (register 10). 03-006 draws the Reading's _tablets level on the beam_ exactly, and it is also Qe'aret's sign. On a wall of the weighing both readings stand: the level account, and the goddess of the scale who holds it.
- **closed** (register 10). 16-014, a closing bar under a row, writes the reader's _Closed_. No note states this use; the subject supports it.
- **open** (register 10). 16-015, a gap in a bar, writes the reader's _Open_: the credit side left open. No note states this use; it is the broken bar beside the closing one.
- **he went down owed** (register 10). No sign means _owed_. Written _went down, his account_ after _open_: the walking legs (04-015) and the bound heart (04-018). The reading rests on the open bar before it.
- **The scenes repeat figures** (five bound princes, four soldiers, three bearers with poles, two barges and two boatmen, two hunters, two men receiving bread, two grain bearers, two reapers and two hoers), as a procession on a temple wall does. Every scene sign is a drawn sign; 05-004, two oxen under a yoke, stands for herds in the scenes as in the text.
- **A captive led on a rope** is not drawn. 01-069, the kneeling man with the yoke-board on his neck, is the nearest bound captive and stands in its place.
- **Registers 1 and 2 run shorter than the scene registers** by this packing's measure (see the table). If the renderer's measure differs, its numbers govern; the gap is filled by spacing in the preview.

## Preview

`preview-wall.png` is the whole wall in monochrome at a 60 px quadrat, packed as the JSON packs it, with the scenes, the rules and the bands; `preview-1.png` to `preview-6.png` are its six episode blocks. They show the composition, not the render.
