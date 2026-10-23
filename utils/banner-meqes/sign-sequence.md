# Meqes VI memorial: the sign sequence

The Khelathu banner is a posthumous memorial of Meqes VI in ten registers of tightly packed quadrats, with figure scenes two registers tall. The balance of accounts frames it (the heading and the weighing); the reign fills the wall between. Every sign is a drawn sign of Khelathi Zethu Glyphs. `sign-sequence.json` holds the same sequence as data, and `render.py` draws the banner from it.

## The translated text

`[square brackets]` mark text restored from the approved inscription; `{braces}` mark formulas added from the Stela of Kuz'Uqa, the Hymn of the Sun Lord and the culture notes (sources below). Each episode is one paragraph; its registers follow it.

1. **The heading** (register 1). Year 1 of the Gar-Au ⟨Meqes, the seventh of the name⟩, {living, enduring, strong}. Went to the West the Gar-Au ⟨Meqes, the sixth of the name⟩, [Lord of the River and of the Two Banks], beloved of Uqa'a, {fire of Uqa'a upon the mound, who stood, who was crowned, lord of the count, whose seal is on the granary, whose grain the barges carry}, [given life like the sun forever], in his twenty-seventh year. His account is read.
2. **Birth and crowning** (register 2). Shaped him Uzn'era [in the womb], a child of the house of Zu'Meku. Stood he upon the mound [at Yath-Telgu]; {set the priesthood of Uqa'a the crown on him, and gave him his name, ⟨Meqes⟩; by this name every contract of the year is dated.} Qe'aret set truth in his mouth, and Reth'Sa'ar wrote his name [in the house of books]. The gods gave him life and dominion, like the sun.
3. **The war of the west** (registers 3, 4). Came down His Majesty, {the Gar-Au ⟨Meqes⟩, beloved of Uqa'a, Lord of the River and of the Two Banks, given life like the sun forever,} upon the hill-men of the western margins, and Chaq'ur raged before him like the storm. Smote he their chieftains, [took he their herds,] and brought back their princes bound [beneath his sandals]. {The margins were the Gar-Au's.}
4. **The war of the north and the tribute** (registers 5, 6). Sailed he, {the Gar-Au ⟨Meqes⟩, beloved of Uqa'a, given life like the sun forever,} against the raiders of the northern sea, and the fire of Uqa'a went out against their ships. The river was at peace, and the barges came up laden: gold, cedar, horses [and slaves]. {The river was the Gar-Au's.}
5. **The great hunt and the lean years** (registers 7, 8). Rode he out, {the Gar-Au ⟨Meqes⟩, beloved of Uqa'a, Lord of the River and of the Two Banks,} against the lions and the river-horses that ravaged the herds and the fields, and the beasts taken were counted. In the years of the low river he opened the god's granaries under his seal, which he had filled in the years of the flood, and none of his people hungered.
6. **His works, the god's answer, and the weighing** (registers 9, 10). {The Gar-Au ⟨Meqes⟩, beloved of Uqa'a,} built anew the house of Uqa'a, gave it altars of gold, and endowed it with fields and herds. [He raised his Way at the head of the death-road at Zu-Gezer.] [Words spoken by Uqa'a, {fire on the first ground, lord of the dry ink, who comes up the road}: “My beloved son, I give you every land, every foreign country bowed beneath your sandals; I give you the years of the sun upon the throne of the mound.”] Before the gods the tablets lay level on the beam: what he owed was closed, and nothing remained; what was owed to him stood open. He went down owed.

## Registers and episodes

The renderer draws a thick coloured band between episodes and a thin rule between the registers of one episode. Text and room are its measure, in quadrats at full line height: text is the width of a register's quadrats shoulder to shoulder, and room is the line left beside the scenes. Open is how much of the line is left bare at the left end.

| Register | Episode | Quadrats | Signs | Text | Room | Open |
| -------- | ------- | -------- | ----- | ---- | ---- | ---- |
| 1        | 1       | 26       | 58    | 24.2 | 24.2 | 0 px |
| 2        | 2       | 26       | 60    | 24.3 | 24.3 | 0 px |
| 3        | 3       | 12       | 24    | 10.6 | 11.2 | 0 px |
| 4        | 3       | 12       | 28    | 11.2 | 11.2 | 0 px |
| 5        | 4       | 9        | 20    | 8.7  | 9.5  | 5 px |
| 6        | 4       | 11       | 24    | 8.8  | 9.5  | 5 px |
| 7        | 5       | 10       | 19    | 9.7  | 9.8  | 5 px |
| 8        | 5       | 11       | 30    | 9.3  | 9.8  | 5 px |
| 9        | 6       | 20       | 42    | 18.4 | 17.6 | 0 px |
| 10       | 6       | 19       | 40    | 17.5 | 17.6 | 0 px |
| Total    |         | 156      | 345   |      |      |      |

Registers 1 and 2 have no scene, and each takes more of the wall's height until its line runs edge to edge. Beside the scenes, a line shorter than its room widens its width-bound quadrats and lets the scenes grow; a line longer than its room, such as register 9, is set a little smaller. The sentence runs on across the thin rule: register 3 ends with the hill-men and register 4 opens with them, and register 5 ends at _of_ and register 6 opens with the northern sea.

## Packing

- **Shape classes** come from each glyph's ink bounds in the font (UPM 1000, quadrat 770 units), not from the eye: `small` is no more than 0.55 of a quadrat each way; `low` is no taller than 0.7 and at least 1.3 times as wide as tall; everything else is `tall`. The JSON records `shape`, `w` and `h` on every sign.
- **The rules** are the design note's (two flat signs stack; a low sign stacks under a short one; two narrow tall signs stand side by side) with two more: a tall sign never stands on another tall sign, and two broad low signs never sit side by side. Two groupings bend them. _Given life like the sun_ is one quadrat, the forearm and the sprout over _like_ and the sun, so 13-043 and 09-005 sit side by side; and _took their herds_ stacks the forearm with the rope over the bull. Both keep a formula that recurs on the wall to one quadrat.
- **Grouping.** Signs are grouped into quadrats of one to four along each run in reading order, stacking every low sign that can stack and pairing narrow ones, and **no quadrat holds a lone small or low sign** anywhere on the wall.
- **Cartouches** are packed inside the oval on the same rules, and never split across registers.

## Figure scenes

Each scene is two registers tall (scale 2.1 of the line height), standing on the floor of its episode's second register, at the start (right) or the end (left) of the episode. In the JSON each scene lists its signs with `vignette: true`, its `scale` and the two registers it `spans`.

- Registers 3–4, start: 01-057 the Gar-Au's soldier behind his shield; 01-057 a second soldier behind his shield; 01-056 an archer drawing his bow; 01-015 a runner; 01-057 a third soldier behind his shield; 01-057 a fourth soldier behind his shield.
- Registers 3–4, end: 01-010 a prince bound, arms behind; 01-039 a foreign prince bound; 01-010 a third prince bound; 01-039 a fourth prince bound; 01-038 a chieftain slain; 05-001 their herds taken; 01-069 a captive with the yoke-board on his neck; 01-010 a fifth prince bound; 01-074 a soldier leading a captive by the neck.
- Registers 5–6, start: 06-014 a heron in the marsh; 06-020 a goose; 06-022 a goose in flight.
- Registers 5–6, end: 01-028 a boatman poling the barge; 01-054 a bearer with the cargo slung from his pole; 01-008 a bearer with a vessel on his head; 01-054 a second bearer with his pole; 14-015 a sack of the cargo; 05-005 a horse of the tribute; 01-054 a third bearer with his pole; 01-008 a second bearer with a vessel on his head; 12-014 a second laden barge; 01-028 a second boatman poling; 01-075 three raiders roped together by the neck; 01-076 a raider kneeling, bound.
- Registers 7–8, start: 01-056 the hunter drawing his bow; 05-018 a river-horse in the water; 05-015 a lion at bay; 01-025 a herdsman; 05-001 the herds the hunt kept; 01-056 a second hunter; 01-015 a beater running; 01-056 a third hunter.
- Registers 7–8, end: 01-054 a bearer carrying grain; 14-015 a sack of grain; 11-004 the granary; 01-005 a man receiving bread, palms out; 01-005 a second man receiving bread; 01-008 a man carrying a jar away; 01-054 a second grain bearer.
- Registers 9–10, start: 01-078 a priest pouring a libation; 01-008 an offering bearer, vessel on his head; 01-008 a second offering bearer; 01-054 an offering bearer with his load slung from a pole.
- Registers 9–10, end: 01-020 a farmer hoeing; 01-021 a reaper cutting grain; 01-021 a second reaper; 01-020 a second farmer hoeing; 01-025 a herdsman with crook and bundle; 05-001 a bull of the herds given to the house.

## Where each idea comes from

Line numbers are of the file on thalorna `origin/main`.

- **The dated heading, the chain of titles, the verb first.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:34, :44, :49–59, :61–71
- **_living, enduring, strong_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:59
- **_fire of Uqa'a upon the mound_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:50
- **_lord of the count_; _who stood, who was crowned_.** `assets/content/Lore/Cultures/Khelathi/The_Stela_of_Quz_Uqa.md`:56, :57
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

The wall is dated as the stela is, by the reign in which it is cut: _Year 1 of the Gar-Au ⟨Meqes, the seventh of the name⟩_. The king-list counts a successor's first year from the year the old Gar-Au dies, so Year 1 of Meqes VII is the year Meqes VI went to the West. Meqes VII is a queen; the cartouche carries no gender. After the regnal-year sign the numeral names which year, not how many, as the font's design note writes a date.

## Conventions

- **Direction.** Each register reads right to left, and every sign in the font faces right, toward the start of the line, so **no sign needs mirroring**; `mirror` is false throughout. The scenes face right too, toward the start of their registers.
- **MdC.** `-` separates quadrats, `:` stacks (upper first), `*` sets side by side (right first), `<`…`>` is the cord oval.
- **The linker.** 10-016 writes `ez`, `ezu` and `elu`, as every sample inscription does.
- **Gods.** Uqa'a is spelled in full wherever his name stands in the king's titles and in his own speech; Qe'aret, Reth'Sa'ar and Chaq'ur are spelled in full, closed by their signs, as the design note keeps the spelled form for the formal record. Uzn'era is her sign alone, for width.
- **Cartouches.** Meqes VI and Meqes VII are m-q-s with six and seven strokes inside the cord after the name, the design note's regnal number, with no ordinal marker; the bare ⟨Meqes⟩ in the deeds and the name given at the crowning carry no number.
- **Plural and count.** Three strokes (16-006) after a noun make it plural; two strokes after the bank (10-025) are a count, the Two Banks.
- **The quarters.** The west (10-014) also writes death and the dead: _went to the West_, _he went down_ and the road of the dead. The east (09-003) writes the sunrise. The north is the delta (10-032), after the sea (10-034).
- **Speech.** _Words spoken by_ opens the speech of Uqa'a, and nothing marks its end.
- **Colour categories.** `figure`: red ochre (skin, bodies, beasts); `bird`: blue or green; `gold`: gold (sun disks, crown, the cord oval, precious things); `water`: blue; `plant`: green; `object`: yellow ochre; `land`: pink-brown ochre with red dots (hills, mounds, roads); `stroke`: blue-black (strokes, numerals, the catch); `god:uqaa`: Uqa'a's icon: orange-gold disk, red flame tongues; `god:uznera`: Uzn'era's icon: white lotus, green leaves, red serpent; `god:qearet`: Qe'aret's icon: white tablets on a gold beam and post; `god:rethsaar`: Reth'Sa'ar's icon: gold roll, turquoise quill, red cord; `god:chaqur`: Chaq'ur's icon: green serpent, gold bolt. The cord oval is gold.

## Register 1 (episode 1: The heading)

| #   | Quadrat | Sign   | Code point | Subject                                                       | Writes                                                                                               | Role          | Shape | Colour   |
| --- | ------- | ------ | ---------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------- | ----- | -------- |
| 1   | 1       | 16-024 | U+1EC14    | the crown's two-headed serpent holding a ring of twelve nicks | Year (regnal)                                                                                        | ideogram      | tall  | gold     |
| 2   | 1       | 16-004 | U+1EBDF    | single upright stroke                                         | 1                                                                                                    | numeral       | small | stroke   |
| 3   | 2       | 11-001 | U+1EB64    | sealed gate                                                   | Gar- (house)                                                                                         | phonetic      | tall  | object   |
| 4   | 2       | 11-002 | U+1EB65    | seat on a mound                                               | -Au (the seat on the mound)                                                                          | ideogram      | low   | object   |
| 5   | 3       | 13-002 | U+1EB8C    | weigh-beam on its post                                        | Meqes: m (in the oval)                                                                               | phonetic      | tall  | object   |
| 6   | 3       | 13-003 | U+1EB8D    | surveyor's peg with its cord                                  | Meqes: q (in the oval)                                                                               | phonetic      | tall  | object   |
| 7   | 4       | 12-005 | U+1EB81    | sail on its spar                                              | Meqes: s (in the oval)                                                                               | phonetic      | tall  | object   |
| 8   | 4       | 16-021 | U+1EC03    | seven strokes in two rows                                     | the seventh (of the name) (in the oval)                                                              | numeral       | tall  | stroke   |
| 9   | 5       | 08-005 | U+1EB21    | grain sprout out of the silt                                  | living (anlagh) {added}                                                                              | ideogram      | tall  | plant    |
| 10  | 5       | 10-002 | U+1EB49    | boundary stone                                                | enduring (gez) {added}                                                                               | ideogram      | tall  | object   |
| 11  | 6       | 01-014 | U+1EA4D    | standing man, both arms braced on a stave                     | strong (k-z, kuz) {added} (flag: living, enduring, strong)                                           | ideogram      | tall  | figure   |
| 12  | 6       | 04-028 | U+1EC2C    | legs striding down a slope                                    | went (to the West)                                                                                   | ideogram      | tall  | figure   |
| 13  | 6       | 10-014 | U+1EB55    | ridge with a notch, the west                                  | the West                                                                                             | ideogram      | low   | land     |
| 14  | 7       | 11-001 | U+1EB64    | sealed gate                                                   | Gar- (house)                                                                                         | phonetic      | tall  | object   |
| 15  | 7       | 11-002 | U+1EB65    | seat on a mound                                               | -Au (the seat on the mound)                                                                          | ideogram      | low   | object   |
| 16  | 8       | 13-002 | U+1EB8C    | weigh-beam on its post                                        | Meqes: m (in the oval)                                                                               | phonetic      | tall  | object   |
| 17  | 8       | 13-003 | U+1EB8D    | surveyor's peg with its cord                                  | Meqes: q (in the oval)                                                                               | phonetic      | tall  | object   |
| 18  | 9       | 12-005 | U+1EB81    | sail on its spar                                              | Meqes: s (in the oval)                                                                               | phonetic      | tall  | object   |
| 19  | 9       | 16-027 | U+1EC17    | six strokes, three over three                                 | the sixth (of the name) (in the oval)                                                                | numeral       | tall  | stroke   |
| 20  | 10      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au    | the Gar-Au (det.)                                                                                    | determinative | tall  | figure   |
| 21  | 10      | 01-013 | U+1EA4C    | standing man in a long garment                                | Lord (zab) [restored]                                                                                | ideogram      | tall  | figure   |
| 22  | 10      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | ez, of [restored]                                                                                    | phonetic      | low   | plant    |
| 23  | 11      | 10-001 | U+1EB48    | current between two banks                                     | the River (igelu) [restored]                                                                         | ideogram      | tall  | water    |
| 24  | 12      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | and of [restored]                                                                                    | phonetic      | low   | plant    |
| 25  | 12      | 10-025 | U+1EB60    | river bank                                                    | the bank [restored]                                                                                  | ideogram      | low   | land     |
| 26  | 13      | 16-005 | U+1EBE0    | two strokes                                                   | two (the Two Banks) [restored]                                                                       | numeral       | small | stroke   |
| 27  | 13      | 02-017 | U+1EA8E    | man and woman, arms about each other                          | beloved (amqel)                                                                                      | ideogram      | tall  | figure   |
| 28  | 14      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | ez, of                                                                                               | phonetic      | low   | plant    |
| 29  | 14      | 16-001 | U+1EBDC    | slanted reed nick                                             | Uqa'a: ' (initial U)                                                                                 | phonetic      | small | stroke   |
| 30  | 14      | 13-003 | U+1EB8D    | surveyor's peg with its cord                                  | Uqa'a: q                                                                                             | phonetic      | tall  | object   |
| 31  | 14      | 16-001 | U+1EBDC    | slanted reed nick                                             | Uqa'a: ' (the pause)                                                                                 | phonetic      | small | stroke   |
| 32  | 15      | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                      | Uqa'a (his sign closes the name)                                                                     | god           | tall  | god:uqaa |
| 33  | 15      | 09-014 | U+1EB3E    | flame on a brazier                                            | fire (the fire of Uqa'a) {added}                                                                     | ideogram      | tall  | god:uqaa |
| 34  | 15      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | ez, of {added}                                                                                       | phonetic      | low   | plant    |
| 35  | 16      | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                      | Uqa'a {added}                                                                                        | god           | tall  | god:uqaa |
| 36  | 16      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | elu, upon {added}                                                                                    | phonetic      | low   | plant    |
| 37  | 16      | 10-011 | U+1EB52    | mound on a flat                                               | the mound {added}                                                                                    | ideogram      | low   | land     |
| 38  | 17      | 01-081 | U+1EC32    | the Gar-Au standing upon the mound, crowned                   | who stood, who was crowned (stood upon the mound) {added}                                            | ideogram      | tall  | figure   |
| 39  | 18      | 01-013 | U+1EA4C    | standing man in a long garment                                | lord {added} (flag: lord of the count)                                                               | ideogram      | tall  | figure   |
| 40  | 18      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | ez, of {added}                                                                                       | phonetic      | low   | plant    |
| 41  | 19      | 13-035 | U+1EBAD    | tally rod being cut                                           | the count (the tally rod) {added} (flag: lord of the count)                                          | ideogram      | low   | object   |
| 42  | 19      | 15-010 | U+1EBD4    | signet ring                                                   | whose seal (his own seal) {added} (flag: whose seal is on the granary, whose grain the barges carry) | ideogram      | small | gold     |
| 43  | 20      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | elu, is on {added}                                                                                   | phonetic      | low   | plant    |
| 44  | 20      | 11-004 | U+1EB67    | domed granary                                                 | the granary {added} (flag: whose seal is on the granary, whose grain the barges carry)               | ideogram      | tall  | object   |
| 45  | 21      | 14-016 | U+1EBC3    | heap of grain                                                 | whose grain {added} (flag: whose seal is on the granary, whose grain the barges carry)               | ideogram      | low   | object   |
| 46  | 21      | 12-014 | U+1EB8A    | barge laden with sacks                                        | the barges carry {added} (flag: whose seal is on the granary, whose grain the barges carry)          | ideogram      | low   | object   |
| 47  | 22      | 04-009 | U+1EAB2    | forearm, palm up                                              | given [restored]                                                                                     | ideogram      | low   | figure   |
| 48  | 22      | 08-005 | U+1EB21    | grain sprout out of the silt                                  | life (anlagh) [restored]                                                                             | ideogram      | tall  | plant    |
| 49  | 22      | 13-043 | U+1EC27    | two weight-pieces of one size side by side                    | like [restored]                                                                                      | ideogram      | low   | object   |
| 50  | 22      | 09-005 | U+1EB35    | disk at the top of the arch                                   | the sun (thelqen) [restored]                                                                         | ideogram      | low   | gold     |
| 51  | 23      | 10-002 | U+1EB49    | boundary stone                                                | forever (gez, enduring) [restored]                                                                   | ideogram      | tall  | object   |
| 52  | 24      | 10-016 | U+1EB57    | field with furrows, one edge showing                          | ezu, in                                                                                              | phonetic      | low   | plant    |
| 53  | 24      | 16-024 | U+1EC14    | the crown's two-headed serpent holding a ring of twelve nicks | his year (regnal)                                                                                    | ideogram      | tall  | gold     |
| 54  | 25      | 16-003 | U+1EBDE    | lens with an attestation line across it                       | 10                                                                                                   | numeral       | small | stroke   |
| 55  | 25      | 16-003 | U+1EBDE    | lens with an attestation line across it                       | 10                                                                                                   | numeral       | small | stroke   |
| 56  | 25      | 16-021 | U+1EC03    | seven strokes in two rows                                     | 7 (twenty-seventh)                                                                                   | numeral       | tall  | stroke   |
| 57  | 25      | 04-018 | U+1EABB    | heart bound with a cord and sealed with a knot                | his account (halzi) (flag: his account)                                                              | ideogram      | tall  | figure   |
| 58  | 26      | 14-026 | U+1EBFA    | open mouth beside a roll                                      | is read (the mouth beside the roll)                                                                  | ideogram      | tall  | figure   |

```text
16-024:16-004-11-001:11-002-<13-002*13-003-12-005:16-021>-08-005*10-002-01-014*04-028:10-014-11-001:11-002-<13-002*13-003-12-005:16-027>-01-060*01-013:10-016-10-001-10-016:10-025-16-005*02-017-10-016:16-001*13-003*16-001-09-002*09-014:10-016-09-002:10-016:10-011-01-081-01-013:10-016-13-035:15-010-10-016:11-004-14-016:12-014-04-009*08-005:13-043*09-005-10-002-10-016:16-024-16-003*16-003:16-021*04-018-14-026
```

## Register 2 (episode 2: Birth and crowning)

| #   | Quadrat | Sign   | Code point | Subject                                                                           | Writes                                                           | Role          | Shape | Colour       |
| --- | ------- | ------ | ---------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------- | ----- | ------------ |
| 1   | 1       | 03-009 | U+1EA99    | a lotus with a river-snake wound about the stem                                   | Uzn'era (her sign alone)                                         | god           | tall  | god:uznera   |
| 2   | 1       | 04-026 | U+1EC28    | two hands shaping a lump of clay                                                  | shaped (the hands shaping clay)                                  | ideogram      | low   | figure       |
| 3   | 2       | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, in [restored]                                               | phonetic      | low   | plant        |
| 4   | 2       | 02-003 | U+1EA80    | seated pregnant woman                                                             | the womb (the pregnant woman) [restored]                         | ideogram      | tall  | figure       |
| 5   | 2       | 01-011 | U+1EA4A    | child seated, finger raised                                                       | a child                                                          | ideogram      | tall  | figure       |
| 6   | 3       | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of                                                           | phonetic      | low   | plant        |
| 7   | 3       | 11-003 | U+1EB66    | house, roof and door                                                              | the house                                                        | ideogram      | tall  | object       |
| 8   | 4       | 12-006 | U+1EB82    | furled sail with its tuck                                                         | Zu'Meku: z                                                       | phonetic      | tall  | object       |
| 9   | 5       | 16-001 | U+1EBDC    | slanted reed nick                                                                 | Zu'Meku: ' (the seam)                                            | phonetic      | small | stroke       |
| 10  | 5       | 13-002 | U+1EB8C    | weigh-beam on its post                                                            | Zu'Meku: m                                                       | phonetic      | tall  | object       |
| 11  | 6       | 13-007 | U+1EB91    | sickle                                                                            | Zu'Meku: k                                                       | phonetic      | tall  | object       |
| 12  | 6       | 01-081 | U+1EC32    | the Gar-Au standing upon the mound, crowned                                       | stood he upon the mound                                          | ideogram      | tall  | figure       |
| 13  | 7       | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, at                                                          | phonetic      | low   | plant        |
| 14  | 7       | 10-011 | U+1EB52    | mound on a flat                                                                   | Yath- (mound)                                                    | ideogram      | low   | land         |
| 15  | 7       | 13-005 | U+1EB8F    | grain scoop                                                                       | Telgu: t [restored]                                              | phonetic      | tall  | object       |
| 16  | 8       | 13-001 | U+1EB8B    | plumb-line with its bob                                                           | Telgu: l [restored]                                              | phonetic      | tall  | object       |
| 17  | 8       | 13-008 | U+1EB92    | sickle with its sheaf                                                             | Telgu: g [restored]                                              | phonetic      | tall  | object       |
| 18  | 8       | 10-012 | U+1EB53    | island in a river                                                                 | the island (det.) [restored]                                     | determinative | low   | water        |
| 19  | 9       | 01-078 | U+1EC2A    | standing man in a linen kilt pouring a libation                                   | the priesthood (the priest) {added}                              | ideogram      | tall  | figure       |
| 20  | 9       | 16-006 | U+1EBE1    | three strokes                                                                     | (plural) {added}                                                 | determinative | small | stroke       |
| 21  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ez, of {added}                                                   | phonetic      | low   | plant        |
| 22  | 10      | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                                          | Uqa'a {added}                                                    | god           | tall  | god:uqaa     |
| 23  | 10      | 15-007 | U+1EBD1    | the crown of the Gar-Au: gold band with azure uprights and the two-headed serpent | set the crown {added} (flag: set the crown on him)               | ideogram      | low   | gold         |
| 24  | 11      | 04-009 | U+1EAB2    | forearm, palm up                                                                  | gave him {added}                                                 | ideogram      | low   | figure       |
| 25  | 11      | 13-042 | U+1EC05    | name-peg tag on a cord                                                            | his name (reth) {added}                                          | ideogram      | tall  | object       |
| 26  | 12      | 13-002 | U+1EB8C    | weigh-beam on its post                                                            | Meqes: m (in the oval) {added}                                   | phonetic      | tall  | object       |
| 27  | 13      | 13-003 | U+1EB8D    | surveyor's peg with its cord                                                      | Meqes: q (in the oval) {added}                                   | phonetic      | tall  | object       |
| 28  | 13      | 12-005 | U+1EB81    | sail on its spar                                                                  | Meqes: s (in the oval) {added}                                   | phonetic      | tall  | object       |
| 29  | 14      | 13-042 | U+1EC05    | name-peg tag on a cord                                                            | by this name {added}                                             | ideogram      | tall  | object       |
| 30  | 15      | 14-019 | U+1EBC6    | sealed roll tied with a cord                                                      | every contract (the sealed roll) {added} (flag: every contract)  | ideogram      | low   | object       |
| 31  | 15      | 16-006 | U+1EBE1    | three strokes                                                                     | (plural) {added}                                                 | determinative | small | stroke       |
| 32  | 15      | 16-024 | U+1EC14    | the crown's two-headed serpent holding a ring of twelve nicks                     | of the year, is dated (the regnal year) {added} (flag: is dated) | ideogram      | tall  | gold         |
| 33  | 16      | 13-003 | U+1EB8D    | surveyor's peg with its cord                                                      | Qe'aret: q                                                       | phonetic      | tall  | object       |
| 34  | 16      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | Qe'aret: ' (the pause)                                           | phonetic      | small | stroke       |
| 35  | 16      | 12-007 | U+1EB83    | punting pole with a forked foot                                                   | Qe'aret: r                                                       | phonetic      | tall  | object       |
| 36  | 17      | 13-005 | U+1EB8F    | grain scoop                                                                       | Qe'aret: t                                                       | phonetic      | tall  | object       |
| 37  | 18      | 03-006 | U+1EA96    | two account tablets level on a beam over a post                                   | Qe'aret (her sign)                                               | god           | tall  | god:qearet   |
| 38  | 18      | 04-011 | U+1EAB4    | hand                                                                              | set (the hand)                                                   | ideogram      | low   | figure       |
| 39  | 18      | 03-025 | U+1EAA9    | a low stand with a flat top                                                       | (over the stand: set, place)                                     | ideogram      | low   | object       |
| 40  | 19      | 13-033 | U+1EBAB    | balance with two pans                                                             | truth (the level balance) (flag: truth)                          | ideogram      | tall  | object       |
| 41  | 19      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, in                                                          | phonetic      | low   | plant        |
| 42  | 20      | 04-006 | U+1EAAF    | mouth                                                                             | his mouth                                                        | ideogram      | low   | figure       |
| 43  | 20      | 12-007 | U+1EB83    | punting pole with a forked foot                                                   | Reth'Sa'ar: r                                                    | phonetic      | tall  | object       |
| 44  | 20      | 12-009 | U+1EB85    | mooring post with a rope turn                                                     | Reth'Sa'ar: th                                                   | phonetic      | tall  | object       |
| 45  | 21      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | ' (the pause)                                                    | phonetic      | small | stroke       |
| 46  | 21      | 12-005 | U+1EB81    | sail on its spar                                                                  | Reth'Sa'ar: s                                                    | phonetic      | tall  | object       |
| 47  | 22      | 16-001 | U+1EBDC    | slanted reed nick                                                                 | ' (the pause)                                                    | phonetic      | small | stroke       |
| 48  | 22      | 12-007 | U+1EB83    | punting pole with a forked foot                                                   | Reth'Sa'ar: r                                                    | phonetic      | tall  | object       |
| 49  | 23      | 03-007 | U+1EA97    | a quill laid across a sealed roll                                                 | Reth'Sa'ar (his sign)                                            | god           | low   | god:rethsaar |
| 50  | 23      | 01-041 | U+1EA68    | seated scribe with kit                                                            | wrote (the scribe)                                               | ideogram      | tall  | figure       |
| 51  | 23      | 13-042 | U+1EC05    | name-peg tag on a cord                                                            | his name (reth)                                                  | ideogram      | tall  | object       |
| 52  | 24      | 10-016 | U+1EB57    | field with furrows, one edge showing                                              | ezu, in [restored]                                               | phonetic      | low   | plant        |
| 53  | 24      | 11-013 | U+1EB70    | cabinet of rolls                                                                  | the house of books [restored]                                    | ideogram      | tall  | object       |
| 54  | 24      | 03-001 | U+1EA91    | seated god, hands on his knees                                                    | the gods (nelgir)                                                | ideogram      | tall  | figure       |
| 55  | 25      | 16-006 | U+1EBE1    | three strokes                                                                     | (plural)                                                         | determinative | small | stroke       |
| 56  | 25      | 04-009 | U+1EAB2    | forearm, palm up                                                                  | gave                                                             | ideogram      | low   | figure       |
| 57  | 26      | 08-005 | U+1EB21    | grain sprout out of the silt                                                      | life (anlagh)                                                    | ideogram      | tall  | plant        |
| 58  | 26      | 03-029 | U+1EC0D    | a hand of power within a ring                                                     | dominion (flag: dominion)                                        | ideogram      | tall  | gold         |
| 59  | 26      | 13-043 | U+1EC27    | two weight-pieces of one size side by side                                        | like                                                             | ideogram      | low   | object       |
| 60  | 26      | 09-005 | U+1EB35    | disk at the top of the arch                                                       | the sun (thelqen)                                                | ideogram      | low   | gold         |

```text
03-009:04-026-10-016:02-003*01-011-10-016:11-003-12-006-16-001:13-002-13-007*01-081-10-016:10-011:13-005-13-001*13-008:10-012-01-078*16-006:10-016-09-002:15-007-04-009:13-042-<13-002-13-003*12-005>-13-042-14-019*16-006:16-024-13-003*16-001*12-007-13-005-03-006:04-011:03-025-13-033:10-016-04-006:12-007*12-009-16-001:12-005-16-001*12-007-03-007:01-041*13-042-10-016:11-013*03-001-16-006:04-009-08-005*03-029:13-043*09-005
```

## Register 3 (episode 3: The war of the west)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                   | Role     | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | ---------------------------------------- | -------- | ----- | -------- |
| 1   | 1       | 04-028 | U+1EC2C    | legs striding down a slope                                 | came down                                | ideogram | tall  | figure   |
| 2   | 2       | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | His Majesty                              | ideogram | tall  | figure   |
| 3   | 3       | 11-001 | U+1EB64    | sealed gate                                                | Gar- (house) {added}                     | phonetic | tall  | object   |
| 4   | 3       | 11-002 | U+1EB65    | seat on a mound                                            | -Au (the seat on the mound) {added}      | ideogram | low   | object   |
| 5   | 4       | 13-002 | U+1EB8C    | weigh-beam on its post                                     | Meqes: m (in the oval) {added}           | phonetic | tall  | object   |
| 6   | 5       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Meqes: q (in the oval) {added}           | phonetic | tall  | object   |
| 7   | 5       | 12-005 | U+1EB81    | sail on its spar                                           | Meqes: s (in the oval) {added}           | phonetic | tall  | object   |
| 8   | 6       | 02-017 | U+1EA8E    | man and woman, arms about each other                       | beloved (amqel) {added}                  | ideogram | tall  | figure   |
| 9   | 7       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of {added}                           | phonetic | low   | plant    |
| 10  | 7       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (initial U) {added}             | phonetic | small | stroke   |
| 11  | 7       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Uqa'a: q {added}                         | phonetic | tall  | object   |
| 12  | 7       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (the pause) {added}             | phonetic | small | stroke   |
| 13  | 8       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                   | Uqa'a (his sign closes the name) {added} | god      | tall  | god:uqaa |
| 14  | 8       | 01-013 | U+1EA4C    | standing man in a long garment                             | Lord (zab) {added}                       | ideogram | tall  | figure   |
| 15  | 8       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of {added}                           | phonetic | low   | plant    |
| 16  | 9       | 10-001 | U+1EB48    | current between two banks                                  | the River (igelu) {added}                | ideogram | tall  | water    |
| 17  | 10      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | and of {added}                           | phonetic | low   | plant    |
| 18  | 10      | 10-025 | U+1EB60    | river bank                                                 | the bank {added}                         | ideogram | low   | land     |
| 19  | 10      | 16-005 | U+1EBE0    | two strokes                                                | two (the Two Banks) {added}              | numeral  | small | stroke   |
| 20  | 11      | 04-009 | U+1EAB2    | forearm, palm up                                           | given {added}                            | ideogram | low   | figure   |
| 21  | 11      | 08-005 | U+1EB21    | grain sprout out of the silt                               | life (anlagh) {added}                    | ideogram | tall  | plant    |
| 22  | 11      | 13-043 | U+1EC27    | two weight-pieces of one size side by side                 | like {added}                             | ideogram | low   | object   |
| 23  | 11      | 09-005 | U+1EB35    | disk at the top of the arch                                | the sun (thelqen) {added}                | ideogram | low   | gold     |
| 24  | 12      | 10-002 | U+1EB49    | boundary stone                                             | forever (gez, enduring) {added}          | ideogram | tall  | object   |

```text
04-028-01-060-11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002*01-013:10-016-10-001-10-016:10-025:16-005-04-009*08-005:13-043*09-005-10-002
```

## Register 4 (episode 3: The war of the west)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                             | Role          | Shape | Colour     |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | -------------------------------------------------- | ------------- | ----- | ---------- |
| 1   | 1       | 01-040 | U+1EA67    | bushy-bearded man                                          | the hill-men (foreigner)                           | ideogram      | tall  | figure     |
| 2   | 2       | 10-013 | U+1EB54    | three hills over sand                                      | of the hills (foreign land, det.)                  | determinative | low   | land       |
| 3   | 2       | 16-006 | U+1EBE1    | three strokes                                              | (plural)                                           | determinative | small | stroke     |
| 4   | 2       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of                                             | phonetic      | low   | plant      |
| 5   | 3       | 10-014 | U+1EB55    | ridge with a notch, the west                               | the west                                           | ideogram      | low   | land       |
| 6   | 3       | 10-002 | U+1EB49    | boundary stone                                             | the margins (gez, the boundary)                    | ideogram      | tall  | object     |
| 7   | 3       | 13-014 | U+1EB98    | scoop with the umbel's stem rising from it                 | Chaq'ur: ch                                        | phonetic      | tall  | object     |
| 8   | 4       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Chaq'ur: q                                         | phonetic      | tall  | object     |
| 9   | 4       | 16-001 | U+1EBDC    | slanted reed nick                                          | ' (the pause)                                      | phonetic      | small | stroke     |
| 10  | 4       | 12-007 | U+1EB83    | punting pole with a forked foot                            | Chaq'ur: r                                         | phonetic      | tall  | object     |
| 11  | 5       | 03-011 | U+1EA9B    | a serpent coiled round a split-footed bolt                 | Chaq'ur (his sign)                                 | god           | tall  | god:chaqur |
| 12  | 5       | 09-011 | U+1EB3B    | storm cloud                                                | raged (the storm)                                  | ideogram      | tall  | figure     |
| 13  | 5       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, before                                         | phonetic      | low   | plant      |
| 14  | 6       | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | him (His Majesty)                                  | determinative | tall  | figure     |
| 15  | 7       | 13-026 | U+1EBA4    | long spear                                                 | smote (qezir, strike, spear)                       | ideogram      | tall  | object     |
| 16  | 7       | 01-038 | U+1EA65    | man lying dead                                             | (slain, det.)                                      | determinative | low   | figure     |
| 17  | 8       | 01-079 | U+1EC2B    | bearded foreigner standing with a long staff               | their chieftains (the foreign chief)               | ideogram      | tall  | figure     |
| 18  | 8       | 16-006 | U+1EBE1    | three strokes                                              | (plural)                                           | determinative | small | stroke     |
| 19  | 9       | 04-027 | U+1EC29    | forearm, hand closed on a rope's end                       | took [restored]                                    | ideogram      | tall  | figure     |
| 20  | 9       | 05-001 | U+1EAC0    | bull, standing                                             | their herds (the herd beast) [restored]            | ideogram      | tall  | figure     |
| 21  | 9       | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored]                                | determinative | small | stroke     |
| 22  | 10      | 04-015 | U+1EAB8    | legs walking                                               | brought back                                       | ideogram      | tall  | figure     |
| 23  | 10      | 01-039 | U+1EA66    | foreigner seated, arms bound                               | their princes, bound                               | ideogram      | tall  | figure     |
| 24  | 10      | 16-006 | U+1EBE1    | three strokes                                              | (plural)                                           | determinative | small | stroke     |
| 25  | 11      | 15-009 | U+1EBD3    | sandal                                                     | beneath his sandals (the sandal) [restored]        | ideogram      | low   | object     |
| 26  | 11      | 01-044 | U+1EA6B    | man prostrate, face to the ground                          | (the prostrate man, under the sandal) [restored]   | ideogram      | low   | figure     |
| 27  | 12      | 10-002 | U+1EB49    | boundary stone                                             | the margins (gez) {added}                          | ideogram      | tall  | object     |
| 28  | 12      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | were the Gar-Au's {added} (flag: was the Gar-Au's) | ideogram      | tall  | figure     |

```text
01-040-10-013:16-006:10-016-10-014:10-002*13-014-13-003*16-001*12-007-03-011*09-011:10-016-01-060-13-026:01-038-01-079*16-006-04-027:05-001*16-006-04-015*01-039:16-006-15-009:01-044-10-002*01-060
```

## Register 5 (episode 4: The war of the north and the tribute)

| #   | Quadrat | Sign   | Code point | Subject                                    | Writes                                   | Role          | Shape | Colour   |
| --- | ------- | ------ | ---------- | ------------------------------------------ | ---------------------------------------- | ------------- | ----- | -------- |
| 1   | 1       | 12-005 | U+1EB81    | sail on its spar                           | sailed (the sail)                        | ideogram      | tall  | object   |
| 2   | 2       | 11-001 | U+1EB64    | sealed gate                                | Gar- (house) {added}                     | phonetic      | tall  | object   |
| 3   | 2       | 11-002 | U+1EB65    | seat on a mound                            | -Au (the seat on the mound) {added}      | ideogram      | low   | object   |
| 4   | 3       | 13-002 | U+1EB8C    | weigh-beam on its post                     | Meqes: m (in the oval) {added}           | phonetic      | tall  | object   |
| 5   | 4       | 13-003 | U+1EB8D    | surveyor's peg with its cord               | Meqes: q (in the oval) {added}           | phonetic      | tall  | object   |
| 6   | 4       | 12-005 | U+1EB81    | sail on its spar                           | Meqes: s (in the oval) {added}           | phonetic      | tall  | object   |
| 7   | 5       | 02-017 | U+1EA8E    | man and woman, arms about each other       | beloved (amqel) {added}                  | ideogram      | tall  | figure   |
| 8   | 6       | 10-016 | U+1EB57    | field with furrows, one edge showing       | ez, of {added}                           | phonetic      | low   | plant    |
| 9   | 6       | 16-001 | U+1EBDC    | slanted reed nick                          | Uqa'a: ' (initial U) {added}             | phonetic      | small | stroke   |
| 10  | 6       | 13-003 | U+1EB8D    | surveyor's peg with its cord               | Uqa'a: q {added}                         | phonetic      | tall  | object   |
| 11  | 6       | 16-001 | U+1EBDC    | slanted reed nick                          | Uqa'a: ' (the pause) {added}             | phonetic      | small | stroke   |
| 12  | 7       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues   | Uqa'a (his sign closes the name) {added} | god           | tall  | god:uqaa |
| 13  | 8       | 04-009 | U+1EAB2    | forearm, palm up                           | given {added}                            | ideogram      | low   | figure   |
| 14  | 8       | 08-005 | U+1EB21    | grain sprout out of the silt               | life (anlagh) {added}                    | ideogram      | tall  | plant    |
| 15  | 8       | 13-043 | U+1EC27    | two weight-pieces of one size side by side | like {added}                             | ideogram      | low   | object   |
| 16  | 8       | 09-005 | U+1EB35    | disk at the top of the arch                | the sun (thelqen) {added}                | ideogram      | low   | gold     |
| 17  | 9       | 10-002 | U+1EB49    | boundary stone                             | forever (gez, enduring) {added}          | ideogram      | tall  | object   |
| 18  | 9       | 01-040 | U+1EA67    | bushy-bearded man                          | the raiders (foreigner)                  | ideogram      | tall  | figure   |
| 19  | 9       | 16-006 | U+1EBE1    | three strokes                              | (plural)                                 | determinative | small | stroke   |
| 20  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing       | ez, of                                   | phonetic      | low   | plant    |

```text
12-005-11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002-04-009*08-005:13-043*09-005-10-002*01-040:16-006*10-016
```

## Register 6 (episode 4: The war of the north and the tribute)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                            | Role          | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | ------------------------------------------------- | ------------- | ----- | -------- |
| 1   | 1       | 10-034 | U+1EC2E    | rows of wave crests with no bank                           | the sea                                           | ideogram      | low   | water    |
| 2   | 1       | 10-032 | U+1EC2D    | a channel parting into three mouths at a wave line         | northern (the north, the delta)                   | ideogram      | tall  | water    |
| 3   | 2       | 09-014 | U+1EB3E    | flame on a brazier                                         | the fire (the fire of Uqa'a)                      | ideogram      | tall  | god:uqaa |
| 4   | 2       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of                                            | phonetic      | low   | plant    |
| 5   | 3       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (initial U)                              | phonetic      | small | stroke   |
| 6   | 3       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Uqa'a: q                                          | phonetic      | tall  | object   |
| 7   | 4       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (the pause)                              | phonetic      | small | stroke   |
| 8   | 4       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                   | Uqa'a (his sign closes the name)                  | god           | tall  | god:uqaa |
| 9   | 5       | 04-015 | U+1EAB8    | legs walking                                               | went out                                          | ideogram      | tall  | figure   |
| 10  | 5       | 12-002 | U+1EB7E    | reed boat, upturned ends                                   | against their ships                               | ideogram      | low   | object   |
| 11  | 6       | 16-006 | U+1EBE1    | three strokes                                              | (plural)                                          | determinative | small | stroke   |
| 12  | 6       | 10-001 | U+1EB48    | current between two banks                                  | the river                                         | ideogram      | tall  | water    |
| 13  | 7       | 12-016 | U+1EC06    | two oars shipped across a boat                             | at peace (legez: oars shipped)                    | ideogram      | low   | object   |
| 14  | 7       | 12-014 | U+1EB8A    | barge laden with sacks                                     | the barges, laden                                 | ideogram      | low   | object   |
| 15  | 8       | 04-015 | U+1EAB8    | legs walking                                               | came up                                           | ideogram      | tall  | figure   |
| 16  | 8       | 13-038 | U+1EBB0    | gold nugget                                                | gold (qenuwa)                                     | ideogram      | low   | gold     |
| 17  | 9       | 13-037 | U+1EBAF    | log                                                        | cedar (timber, lagun) (flag: cedar)               | ideogram      | low   | object   |
| 18  | 9       | 16-006 | U+1EBE1    | three strokes                                              | (plural)                                          | determinative | small | stroke   |
| 19  | 9       | 05-005 | U+1EAC4    | horse, standing                                            | horses                                            | ideogram      | tall  | figure   |
| 20  | 9       | 16-006 | U+1EBE1    | three strokes                                              | (plural)                                          | determinative | small | stroke   |
| 21  | 10      | 01-069 | U+1EC09    | kneeling man, yoke-board on his neck                       | slaves (lemzu, bondsman) [restored]               | ideogram      | tall  | figure   |
| 22  | 11      | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored]                               | determinative | small | stroke   |
| 23  | 11      | 10-001 | U+1EB48    | current between two banks                                  | the river {added}                                 | ideogram      | tall  | water    |
| 24  | 11      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | was the Gar-Au's {added} (flag: was the Gar-Au's) | ideogram      | tall  | figure   |

```text
10-034:10-032-09-014:10-016-16-001*13-003-16-001:09-002-04-015:12-002-16-006:10-001-12-016:12-014-04-015:13-038-13-037*16-006:05-005*16-006-01-069-16-006:10-001*01-060
```

## Register 7 (episode 5: The great hunt and the lean years)

| #   | Quadrat | Sign   | Code point | Subject                                  | Writes                                   | Role     | Shape | Colour   |
| --- | ------- | ------ | ---------- | ---------------------------------------- | ---------------------------------------- | -------- | ----- | -------- |
| 1   | 1       | 05-005 | U+1EAC4    | horse, standing                          | rode out (the horse) (flag: rode out)    | ideogram | tall  | figure   |
| 2   | 2       | 11-001 | U+1EB64    | sealed gate                              | Gar- (house) {added}                     | phonetic | tall  | object   |
| 3   | 2       | 11-002 | U+1EB65    | seat on a mound                          | -Au (the seat on the mound) {added}      | ideogram | low   | object   |
| 4   | 3       | 13-002 | U+1EB8C    | weigh-beam on its post                   | Meqes: m (in the oval) {added}           | phonetic | tall  | object   |
| 5   | 4       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Meqes: q (in the oval) {added}           | phonetic | tall  | object   |
| 6   | 4       | 12-005 | U+1EB81    | sail on its spar                         | Meqes: s (in the oval) {added}           | phonetic | tall  | object   |
| 7   | 5       | 02-017 | U+1EA8E    | man and woman, arms about each other     | beloved (amqel) {added}                  | ideogram | tall  | figure   |
| 8   | 6       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of {added}                           | phonetic | low   | plant    |
| 9   | 6       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (initial U) {added}             | phonetic | small | stroke   |
| 10  | 6       | 13-003 | U+1EB8D    | surveyor's peg with its cord             | Uqa'a: q {added}                         | phonetic | tall  | object   |
| 11  | 6       | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (the pause) {added}             | phonetic | small | stroke   |
| 12  | 7       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues | Uqa'a (his sign closes the name) {added} | god      | tall  | god:uqaa |
| 13  | 7       | 01-013 | U+1EA4C    | standing man in a long garment           | Lord (zab) {added}                       | ideogram | tall  | figure   |
| 14  | 7       | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, of {added}                           | phonetic | low   | plant    |
| 15  | 8       | 10-001 | U+1EB48    | current between two banks                | the River (igelu) {added}                | ideogram | tall  | water    |
| 16  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing     | and of {added}                           | phonetic | low   | plant    |
| 17  | 9       | 10-025 | U+1EB60    | river bank                               | the bank {added}                         | ideogram | low   | land     |
| 18  | 10      | 16-005 | U+1EBE0    | two strokes                              | two (the Two Banks) {added}              | numeral  | small | stroke   |
| 19  | 10      | 13-025 | U+1EBA3    | bow and arrow                            | against, slaying (bow and arrow)         | ideogram | tall  | object   |

```text
05-005-11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002*01-013:10-016-10-001-10-016:10-025-16-005*13-025
```

## Register 8 (episode 5: The great hunt and the lean years)

| #   | Quadrat | Sign   | Code point | Subject                                     | Writes                                                                   | Role          | Shape | Colour |
| --- | ------- | ------ | ---------- | ------------------------------------------- | ------------------------------------------------------------------------ | ------------- | ----- | ------ |
| 1   | 1       | 05-015 | U+1EACE    | lion, standing                              | the lions (flag: the lions and the river-horses)                         | ideogram      | tall  | figure |
| 2   | 1       | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 3   | 1       | 05-018 | U+1EAD1    | river-horse half under the waterline        | the river-horses (igelzut)                                               | ideogram      | low   | figure |
| 4   | 1       | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 5   | 2       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of (that ravaged)                                                    | phonetic      | low   | plant  |
| 6   | 2       | 05-001 | U+1EAC0    | bull, standing                              | the herds (the herd beast) (flag: that ravaged the herds and the fields) | ideogram      | tall  | figure |
| 7   | 2       | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 8   | 3       | 10-008 | U+1EB4F    | plot with furrow lines                      | the fields                                                               | ideogram      | low   | plant  |
| 9   | 3       | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 10  | 3       | 13-035 | U+1EBAD    | tally rod being cut                         | counted (the tally rod) (flag: the beasts taken were counted)            | ideogram      | low   | object |
| 11  | 4       | 09-019 | U+1EB43    | ring of thirty-six nicks                    | the years                                                                | ideogram      | tall  | gold   |
| 12  | 4       | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 13  | 5       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of                                                                   | phonetic      | low   | plant  |
| 14  | 5       | 09-018 | U+1EB42    | low river between bare banks                | the low river (Shelu)                                                    | ideogram      | low   | water  |
| 15  | 5       | 04-011 | U+1EAB4    | hand                                        | opened (the hand) (flag: opened the granaries)                           | ideogram      | low   | figure |
| 16  | 6       | 15-010 | U+1EBD4    | signet ring                                 | his seal (his own seal)                                                  | ideogram      | small | gold   |
| 17  | 6       | 11-004 | U+1EB67    | domed granary                               | the granaries (habtun)                                                   | ideogram      | tall  | object |
| 18  | 6       | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 19  | 6       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of                                                                   | phonetic      | low   | plant  |
| 20  | 7       | 03-001 | U+1EA91    | seated god, hands on his knees              | the god (nelgir)                                                         | ideogram      | tall  | figure |
| 21  | 8       | 14-016 | U+1EBC3    | heap of grain                               | filled (heaped grain) (flag: filled its storehouses)                     | ideogram      | low   | object |
| 22  | 8       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ezu, in                                                                  | phonetic      | low   | plant  |
| 23  | 8       | 09-019 | U+1EB43    | ring of thirty-six nicks                    | the years                                                                | ideogram      | tall  | gold   |
| 24  | 9       | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 25  | 9       | 10-016 | U+1EB57    | field with furrows, one edge showing        | ez, of                                                                   | phonetic      | low   | plant  |
| 26  | 9       | 09-016 | U+1EB40    | flooded field under a wave                  | the flood (Azlet)                                                        | ideogram      | low   | water  |
| 27  | 10      | 01-068 | U+1EC08    | standing man, empty hands open at his sides | his people (zelar, the commoner) (flag: his people)                      | ideogram      | tall  | figure |
| 28  | 10      | 16-006 | U+1EBE1    | three strokes                               | (plural)                                                                 | determinative | small | stroke |
| 29  | 10      | 14-007 | U+1EBBA    | loaf                                        | did not hunger: bread (flag: none of his people hungered)                | ideogram      | low   | object |
| 30  | 11      | 08-005 | U+1EB21    | grain sprout out of the silt                | and life (flag: none of his people hungered)                             | ideogram      | tall  | plant  |

```text
05-015*16-006:05-018*16-006-10-016:05-001:16-006-10-008*16-006:13-035-09-019:16-006-10-016:09-018:04-011-15-010*11-004:16-006*10-016-03-001-14-016:10-016:09-019-16-006:10-016:09-016-01-068*16-006:14-007-08-005
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
| 19  | 11      | 04-009 | U+1EAB2    | forearm, palm up                         | gave it                                                                | ideogram      | low   | figure   |
| 20  | 11      | 14-009 | U+1EBBC    | offering table with loaves               | altars (the offering table)                                            | ideogram      | tall  | object   |
| 21  | 11      | 16-006 | U+1EBE1    | three strokes                            | (plural)                                                               | determinative | small | stroke   |
| 22  | 12      | 13-038 | U+1EBB0    | gold nugget                              | of gold (lapis: no sign) (flag: lapis)                                 | ideogram      | low   | gold     |
| 23  | 12      | 13-032 | U+1EBAA    | stamp seal                               | endowed (the seal and its warrant) (flag: endowed it)                  | ideogram      | tall  | object   |
| 24  | 13      | 10-008 | U+1EB4F    | plot with furrow lines                   | fields                                                                 | ideogram      | low   | plant    |
| 25  | 13      | 16-006 | U+1EBE1    | three strokes                            | (plural)                                                               | determinative | small | stroke   |
| 26  | 13      | 05-001 | U+1EAC0    | bull, standing                           | herds (the herd beast)                                                 | ideogram      | tall  | figure   |
| 27  | 13      | 16-006 | U+1EBE1    | three strokes                            | (plural)                                                               | determinative | small | stroke   |
| 28  | 14      | 01-061 | U+1EA7C    | man setting a block with a plumb-cord    | raised (the builder) [restored]                                        | ideogram      | tall  | figure   |
| 29  | 15      | 10-020 | U+1EB5B    | path between two stones                  | his Way (wal, the road) [restored]                                     | ideogram      | low   | land     |
| 30  | 15      | 11-017 | U+1EB74    | low tomb with sloping sides              | (tomb, det.) [restored]                                                | determinative | low   | object   |
| 31  | 16      | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, at (the head of) [restored]                                        | phonetic      | low   | plant    |
| 32  | 16      | 10-020 | U+1EB5B    | path between two stones                  | the death-road (road) [restored] (flag: at the head of the death-road) | ideogram      | low   | land     |
| 33  | 16      | 10-014 | U+1EB55    | ridge with a notch, the west             | of the dead (the west) [restored]                                      | determinative | low   | land     |
| 34  | 17      | 10-016 | U+1EB57    | field with furrows, one edge showing     | ezu, at [restored]                                                     | phonetic      | low   | plant    |
| 35  | 17      | 12-006 | U+1EB82    | furled sail with its tuck                | Zu-Gezer: z [restored]                                                 | phonetic      | tall  | object   |
| 36  | 18      | 10-002 | U+1EB49    | boundary stone                           | Gezer: g-z [restored]                                                  | phonetic      | tall  | object   |
| 37  | 18      | 12-007 | U+1EB83    | punting pole with a forked foot          | Gezer: r [restored]                                                    | phonetic      | tall  | object   |
| 38  | 19      | 10-027 | U+1EB62    | cluster of houses on a rise              | (town, det.) [restored]                                                | determinative | low   | land     |
| 39  | 19      | 03-005 | U+1EA95    | a curl of breath leaving a mouth         | words spoken (breath leaving a mouth) [restored]                       | ideogram      | tall  | figure   |
| 40  | 20      | 04-006 | U+1EAAF    | mouth                                    | (speech, det.) [restored]                                              | determinative | low   | figure   |
| 41  | 20      | 10-016 | U+1EB57    | field with furrows, one edge showing     | ez, by [restored]                                                      | phonetic      | low   | plant    |
| 42  | 20      | 16-001 | U+1EBDC    | slanted reed nick                        | Uqa'a: ' (initial U) [restored]                                        | phonetic      | small | stroke   |

```text
11-001:11-002-<13-002-13-003*12-005>-02-017-10-016:16-001*13-003*16-001-09-002-11-025-11-001:10-016-16-001*13-003-16-001:09-002-04-009:14-009*16-006-13-038:13-032-10-008*16-006:05-001*16-006-01-061-10-020:11-017-10-016:10-020:10-014-10-016:12-006-10-002*12-007-10-027:03-005-04-006:10-016:16-001
```

## Register 10 (episode 6: His works, the god's answer, and the weighing)

| #   | Quadrat | Sign   | Code point | Subject                                                    | Writes                                                                     | Role          | Shape | Colour     |
| --- | ------- | ------ | ---------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- | ------------- | ----- | ---------- |
| 1   | 1       | 13-003 | U+1EB8D    | surveyor's peg with its cord                               | Uqa'a: q [restored]                                                        | phonetic      | tall  | object     |
| 2   | 1       | 16-001 | U+1EBDC    | slanted reed nick                                          | Uqa'a: ' (the pause) [restored]                                            | phonetic      | small | stroke     |
| 3   | 2       | 09-002 | U+1EB32    | disk on the horizon, three flame tongues                   | Uqa'a (his sign closes the name) [restored]                                | god           | tall  | god:uqaa   |
| 4   | 2       | 09-014 | U+1EB3E    | flame on a brazier                                         | fire (the fire of Uqa'a) {added}                                           | ideogram      | tall  | god:uqaa   |
| 5   | 2       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | elu, on {added}                                                            | phonetic      | low   | plant      |
| 6   | 2       | 10-011 | U+1EB52    | mound on a flat                                            | the first ground (the mound) {added} (flag: fire on the first ground)      | ideogram      | low   | land       |
| 7   | 3       | 01-013 | U+1EA4C    | standing man in a long garment                             | lord {added}                                                               | ideogram      | tall  | figure     |
| 8   | 4       | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of {added}                                                             | phonetic      | low   | plant      |
| 9   | 4       | 14-020 | U+1EBC7    | ink cake and reed                                          | the dry ink (ink cake and reed) {added}                                    | ideogram      | low   | object     |
| 10  | 5       | 09-003 | U+1EB33    | disk rising between two hills, the east                    | who comes up (the sunrise) {added} (flag: who comes up the road)           | ideogram      | low   | gold       |
| 11  | 5       | 10-020 | U+1EB5B    | path between two stones                                    | the road {added}                                                           | ideogram      | low   | land       |
| 12  | 6       | 01-067 | U+1EC07    | tall standing figure beside a small one                    | my son (the parent with the child) [restored] (flag: my son)               | ideogram      | tall  | figure     |
| 13  | 6       | 02-017 | U+1EA8E    | man and woman, arms about each other                       | beloved (amqel) [restored]                                                 | ideogram      | tall  | figure     |
| 14  | 7       | 04-009 | U+1EAB2    | forearm, palm up                                           | I give you [restored]                                                      | ideogram      | low   | figure     |
| 15  | 7       | 10-028 | U+1EB63    | land and a sprout                                          | every land [restored] (flag: every land, every foreign country)            | ideogram      | low   | land       |
| 16  | 8       | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored]                                                        | determinative | small | stroke     |
| 17  | 8       | 10-013 | U+1EB54    | three hills over sand                                      | every foreign country [restored] (flag: every land, every foreign country) | ideogram      | low   | land       |
| 18  | 8       | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored]                                                        | determinative | small | stroke     |
| 19  | 9       | 01-043 | U+1EA6A    | man bowing low                                             | bowed (man bowing low) [restored]                                          | ideogram      | tall  | figure     |
| 20  | 10      | 15-009 | U+1EBD3    | sandal                                                     | beneath your sandals (the sandal) [restored]                               | ideogram      | low   | object     |
| 21  | 10      | 01-044 | U+1EA6B    | man prostrate, face to the ground                          | (the prostrate man, under the sandal) [restored]                           | determinative | low   | figure     |
| 22  | 11      | 04-009 | U+1EAB2    | forearm, palm up                                           | I give you [restored]                                                      | ideogram      | low   | figure     |
| 23  | 11      | 09-019 | U+1EB43    | ring of thirty-six nicks                                   | the years (selqur) [restored]                                              | ideogram      | tall  | gold       |
| 24  | 11      | 16-006 | U+1EBE1    | three strokes                                              | (plural) [restored]                                                        | determinative | small | stroke     |
| 25  | 12      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, of [restored]                                                          | phonetic      | low   | plant      |
| 26  | 12      | 09-005 | U+1EB35    | disk at the top of the arch                                | the sun (thelqen) [restored]                                               | ideogram      | low   | gold       |
| 27  | 12      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | elu, upon [restored]                                                       | phonetic      | low   | plant      |
| 28  | 13      | 11-002 | U+1EB65    | seat on a mound                                            | the throne of the mound [restored]                                         | ideogram      | low   | object     |
| 29  | 13      | 01-060 | U+1EA7B    | figure seated on a stepped throne, the crown of the Gar-Au | (the Gar-Au, det.) [restored]                                              | determinative | tall  | figure     |
| 30  | 14      | 10-016 | U+1EB57    | field with furrows, one edge showing                       | ez, before                                                                 | phonetic      | low   | plant      |
| 31  | 14      | 03-001 | U+1EA91    | seated god, hands on his knees                             | the gods                                                                   | ideogram      | tall  | figure     |
| 32  | 15      | 16-006 | U+1EBE1    | three strokes                                              | (plural)                                                                   | determinative | small | stroke     |
| 33  | 15      | 03-006 | U+1EA96    | two account tablets level on a beam over a post            | the tablets level on the beam (flag: the tablets level on the beam)        | ideogram      | tall  | god:qearet |
| 34  | 16      | 13-033 | U+1EBAB    | balance with two pans                                      | (the scale, det.)                                                          | determinative | tall  | object     |
| 35  | 16      | 14-032 | U+1EC22    | sealed roll resting in the closing bar                     | closed (what he owed; the entry closed)                                    | ideogram      | low   | object     |
| 36  | 17      | 16-030 | U+1EC1A    | a lone balance pan, empty, hung on its cords               | nothing remained (the empty pan)                                           | ideogram      | tall  | gold       |
| 37  | 17      | 14-034 | U+1EC24    | sealed roll over a gap in a bar                            | open (what was owed to him; the entry open)                                | ideogram      | low   | object     |
| 38  | 18      | 04-028 | U+1EC2C    | legs striding down a slope                                 | he went down (to the West: died)                                           | ideogram      | tall  | figure     |
| 39  | 19      | 10-014 | U+1EB55    | ridge with a notch, the west                               | the West                                                                   | ideogram      | low   | land       |
| 40  | 19      | 14-034 | U+1EC24    | sealed roll over a gap in a bar                            | owed (the entry open)                                                      | ideogram      | low   | object     |

```text
13-003*16-001-09-002*09-014:10-016:10-011-01-013-10-016:14-020-09-003:10-020-01-067*02-017-04-009:10-028-16-006:10-013:16-006-01-043-15-009:01-044-04-009:09-019*16-006-10-016:09-005:10-016-11-002:01-060-10-016:03-001-16-006:03-006-13-033:14-032-16-030:14-034-04-028-10-014:14-034
```

## Stretches flagged for the owner

- **living, enduring, strong** (register 1). From the stela's closing epithet. _Strong_ is 01-014, the standing man braced on a stave, whose consonants k-z are _kuz_, strong (the throne-name element in the Khelathi note).
- **lord of the count** (register 1). The stela's _lord of the count_ is written _lord, of, the tally rod_ (01-013, 10-016, 13-035).
- **whose seal is on the granary, whose grain the barges carry** (register 1). Written _his seal, upon, granary; grain, barge_ (15-010, 10-016, 11-004; 14-016, 12-014). The signet ring is the seal a man carries as his own. The relative _whose_ is unwritten.
- **his account** (register 1). 04-018, the heart bound with a cord and sealed (h-l-z), is _halzi_: the heart and the account it answers for.
- **set the crown on him** (register 2). The crown (15-007) alone writes the setting of it. The hand over the stand (04-011 : 03-025) writes _set_ only where Qe'aret sets truth; written here too, it would cost the line a quadrat.
- **every contract** (register 2). 14-019, the sealed roll tied with a cord, is the base of the entry family and writes the contract, with the plural strokes. The stela names contracts, tax rolls and leases; only the contract is written. 14-031, the entry opened, would write _every entry made_ instead.
- **is dated** (register 2). No sign means _to date_. The regnal-year sign (16-024) after _contract_ writes _of the year_, and the dating is read from it.
- **truth** (register 2). No sign means truth. 13-033, the balance with two pans, is the level account that Qe'aret's own sign (03-006) also draws. It reads as _order_ at least as readily as _truth_.
- **dominion** (register 2). 03-029, a hand of power within a ring, carries no stated word. Read as power held, it stands for dominion.
- **was the Gar-Au's** (register 4, 6). The stela's refrain _and the canal was his_ is written with the enthroned Gar-Au (01-060) after the thing taken: _the margins, the Gar-Au_.
- **cedar** (register 6). No sign for cedar. 13-037, the log (l-g-n, _lagun_), means timber of any kind.
- **rode out** (register 7). No chariot or rider is drawn. The horse (05-005) stands for riding out.
- **the lions and the river-horses** (register 8). Written _lions, river-horses_, each with the plural strokes, in one quadrat. No sign writes _and_; the beasts are listed as the tribute's gold, cedar and horses are.
- **that ravaged the herds and the fields** (register 8). No sign for ravaging. The line reads _the beasts of the herds and the fields_, and the scene carries the hunt.
- **the beasts taken were counted** (register 8). Written with the tally rod (13-035). No number is given in the approved text, so none is written. A count in strokes and tens (16-003) can follow the tally if the owner names one.
- **opened the granaries** (register 8). No sign for opening a store. The plain hand (04-011) stands for the act; the entry family's _open_ (14-034) names the state of an entry and does not write it.
- **filled its storehouses** (register 8). Written with 14-016, the heap of grain, before the granary. No sign means _fill_.
- **his people** (register 8). No sign for a people. 01-068, the standing man with empty hands (z-l-r, _zelar_, the commoner), with the plural strokes, writes the common folk.
- **none of his people hungered** (register 8). No sign for hunger or its absence. Written _his people: bread and life_, with the loaf (14-007) and the sprout of life (08-005).
- **lapis** (register 9). No sign for lapis or any blue stone, and none is coined. The register reads _altars of gold_; the render can paint the altar sign lapis blue to carry the rest.
- **endowed it** (register 9). Written with 13-032, the stamp seal (q-th-r, _qathur_, the seal and the warrant it closes): fields and herds given by sealed warrant.
- **at the head of the death-road** (register 9). No sign for the head of a road. Written _at the road of the dead_: 10-020 (path between two stones) with 10-014, the west, which also writes the dead, as determinative.
- **fire on the first ground** (register 10). The hymn's _first ground_ is the primeval mound; 10-011 (mound on a flat) writes it.
- **who comes up the road** (register 10). The hymn is sung on the eastern face before the sun is up the road, and _who comes up the road_ is the sun rising. 09-003, the disk rising between two hills, writes the coming up as the sunrise, and 10-020 the road.
- **my son** (register 10). No sign means son. 01-067, a tall standing figure beside a small one (th-z), shows a parent with a child. The seated child (01-011) is the alternative.
- **every land, every foreign country** (register 10). No sign for _every_. Written as plurals: lands, foreign countries.
- **the tablets level on the beam** (register 10). 03-006 draws the Reading's _tablets level on the beam_ exactly, and it is also Qe'aret's sign. On a wall of the weighing both readings stand: the level account, and the goddess of the scale who holds it.
- **The scenes repeat figures** (five bound princes, four soldiers, three bearers with poles, two barges and two boatmen, three hunters, two men receiving bread, two grain bearers, two reapers and two hoers), as a procession on a temple wall does. Every scene sign is a drawn sign; the herd beast 05-001 stands for herds in the scenes as in the text.

## Preview

`preview-wall.png` is the whole wall in monochrome at a 60 px quadrat, packed as the JSON packs it, with the scenes, the rules and the bands; `preview-1.png` to `preview-6.png` are its six episode blocks. They show the composition, not the render.
