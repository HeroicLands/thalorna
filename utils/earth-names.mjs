/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The Earth-name guard (`npm run lint:earth-names`).
 *
 * The corpus names no Earth proper name.
 *
 * A language, country, region, city, people, religion, mythology, real person or
 * work of fiction is an Earth name, as are names of the reader's languages
 * and "Common tongue".
 * "Common Calendar" is refused beside them: the shared year-count belongs to the
 * Vylarian Empire, and prose calls it the Vylarian Calendar.
 * Each is refused in every note, README and table under `assets/content`, and in
 * the lexicon data files, wherever it stands: prose, a tag, a pronunciation
 * guide or a comment. A name is recast as a gloss or a rendering, and a sound is
 * described without naming a language.
 *
 * Two places may name other Earth names: the Terran analogs note, and a
 * `# terran_analog:` comment line.
 *
 * Names of the reader's own languages are refused
 * as a whole word in any case everywhere under `assets/content`, the Terran
 * analogs note and `# terran_analog:` lines included.
 *
 * Findings are written `file:line:column: error: message`, the path first and
 * relative to the working directory, to stderr; the summary goes to stdout and the
 * exit status is 1 when there is a finding.
 *
 * Country, capital, continent and language names come from `countries-list`.
 * Peoples, religions, mythologies, persons and works of fiction have no package
 * and are listed in `CURATED`.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { continents, countries, languages } from "countries-list";
import YAML from "yaml";

const CONTENT_DIR = "assets/content";

const PRONUNCIATION_GUIDE = "assets/content/Lore/Pronouncing_Thalorna.md";
// These technical references explain the reader's spelling and pronunciation conventions.
const PRONUNCIATION_REFERENCES = new Set([
    PRONUNCIATION_GUIDE,
    "assets/content/Skills/Languages/Aelwythi.md",
    "assets/content/Lore/Scripts/Aelwythi_Semaron_Spelling.md",
]);

/** Files that may name Earth. */
const EXEMPT_FILES = new Set([
    "assets/content/Reference/Terran_Analogs.md",
    // Technical pronunciation references necessarily name reference languages.
    ...PRONUNCIATION_REFERENCES,
]);

/**
 * A language note lists the forms it refuses in `data.retired`, so each entry's
 * `form` holds an Earth name by design. Only that value is read past; the
 * entry's `instead` and `why` are checked.
 */
const RETIRED_KEY = /^ {2}retired:\s*$/;
const RETIRED_FORM = /(\bform:\s*)("[^"\n]*"|'[^'\n]*'|[^,}\n]+)/;

/**
 * An encoding note's `data.mappings` and `rules` hold letter sequences and glyph codes, not
 * words or names, so the whole block is read past.
 */
const MAP_KEY = /^ {2}(?:mappings|rules):\s*$/;

/** A line carrying this marker is a comment for later authors. */
const ANALOG_LINE = /#\s*terran_analog:/;

/**
 * Names the setting uses for its own things that coincide with an Earth name.
 * Each entry carries its reason.
 *
 * @type {Record<string, string>}
 */
export const IN_WORLD = {
    Islands: "a generic noun left over from splitting an Earth country name",
    "The Valley": "a generic place-role phrase left over from an Earth capital's name",
};

/**
 * Names no package covers: peoples and demonyms, religions, mythologies, real
 * persons, works of fiction and terms for real regions.
 */
export const CURATED = [
    "Bactria",
    "Bactrian",
    "Bactrians",
    "Komodo",
    "Saluki",
    "Salukis",
    // peoples and demonyms
    "Norse",
    "Celtic",
    "Celts",
    "Celt",
    "Viking",
    "Vikings",
    "Roman",
    "Romans",
    "Byzantine",
    "Byzantines",
    "Scottish",
    "Scots",
    "Scotsman",
    "Irishman",
    "Saxon",
    "Saxons",
    "Gaul",
    "Gauls",
    "Goth",
    "Goths",
    "Visigoth",
    "Visigoths",
    "Ostrogoth",
    "Ostrogoths",
    "Frank",
    "Franks",
    "Hun",
    "Huns",
    "Mongol",
    "Mongols",
    "Tatar",
    "Tatars",
    "Moor",
    "Moors",
    "Berber",
    "Berbers",
    "Bedouin",
    "Bedouins",
    "Inuit",
    "Maya",
    "Mayan",
    "Aztec",
    "Aztecs",
    "Inca",
    "Incas",
    "Sumerian",
    "Sumerians",
    "Babylonian",
    "Babylonians",
    "Assyrian",
    "Assyrians",
    "Phoenician",
    "Phoenicians",
    "Etruscan",
    "Etruscans",
    "Hittite",
    "Hittites",
    "Egyptian",
    "Egyptians",
    "Greek",
    "Greeks",
    "Latin",
    "Latins",
    "Slav",
    "Slavs",
    "Slavic",
    "Germanic",
    "Teutonic",
    "Anglo-Saxon",
    "Anglo-Saxons",
    "Norman",
    "Normans",
    "Gypsy",
    "Gypsies",
    "Romani",
    "Mongolian",
    "Scandinavian",
    "Scandinavians",
    "Nordic",
    "Mediterranean",
    "Oriental",
    "Occidental",
    "Caucasian",
    "Aryan",
    "European",
    "Europeans",
    "Asian",
    "Asians",
    "African",
    "Africans",
    "American",
    "Americans",
    "Arab",
    "Arabs",
    "Arabian",
    "Persian",
    "Persians",
    "Turk",
    "Turks",
    "Ottoman",
    "Ottomans",
    "Mughal",
    "Samurai",
    "Cossack",
    "Cossacks",
    "Spartan",
    "Spartans",
    "Athenian",
    "Athenians",
    "Carthaginian",
    "Carthaginians",
    "Pict",
    "Picts",
    "Gael",
    "Gaels",
    "Gaelic",
    "Briton",
    "Britons",
    "Welsh",
    "Irish",
    "French",
    "Spanish",
    "Italian",
    "Italians",
    "German",
    "Germans",
    "Dutch",
    "Danish",
    "Swedish",
    "Norwegian",
    "Finnish",
    "Icelandic",
    "Russian",
    "Russians",
    "Chinese",
    "Japanese",
    "Indian",
    "Indians",
    "Hindu",
    "Hindus",
    "British",
    "Englishman",
    "Frisian",
    "Basque",
    "Hebrew",
    "Aramaic",
    "Sanskrit",
    "Elizabethan",
    "Victorian",
    "Renaissance",
    "Crusader",
    "Crusaders",
    "Templar",
    "Templars",
    "Hanseatic",
    "Hansa",
    // religions
    "Christian",
    "Christians",
    "Christianity",
    "Catholic",
    "Catholics",
    "Protestant",
    "Protestants",
    "Islam",
    "Islamic",
    "Muslim",
    "Muslims",
    "Judaism",
    "Jewish",
    "Jew",
    "Jews",
    "Buddhism",
    "Buddhist",
    "Buddhists",
    "Hinduism",
    "Sikh",
    "Sikhs",
    "Sikhism",
    "Shinto",
    "Taoism",
    "Taoist",
    "Confucian",
    "Confucianism",
    "Zoroastrian",
    "Zoroastrianism",
    "Manichaean",
    "Gnostic",
    "Druid",
    "Druids",
    "Pagan",
    "Pagans",
    "Paganism",
    "Catharism",
    "Cathar",
    "Cathars",
    "Mormon",
    "Mormons",
    "Jainism",
    "Wicca",
    "Wiccan",
    "Pope",
    "Vatican",
    "Bible",
    "Biblical",
    "Koran",
    "Quran",
    "Torah",
    "Talmud",
    "Vedas",
    "Vedic",
    "Jesus",
    "Christ",
    "Muhammad",
    "Mohammed",
    "Allah",
    "Yahweh",
    "Jehovah",
    "Buddha",
    "Satan",
    "Lucifer",
    // mythologies
    "Olympian",
    "Olympians",
    "Olympus",
    "Valhalla",
    "Asgard",
    "Midgard",
    "Yggdrasil",
    "Ragnarok",
    "Ragnarök",
    "Odin",
    "Thor",
    "Loki",
    "Freya",
    "Freyja",
    "Zeus",
    "Hera",
    "Apollo",
    "Athena",
    "Poseidon",
    "Hades",
    "Ares",
    "Aphrodite",
    "Hermes",
    "Artemis",
    "Dionysus",
    "Demeter",
    "Hephaestus",
    "Hercules",
    "Heracles",
    "Achilles",
    "Odysseus",
    "Ulysses",
    "Jupiter",
    "Juno",
    "Neptune",
    "Mars",
    "Venus",
    "Vulcan",
    "Saturn",
    "Mercury",
    "Pluto",
    "Diana",
    "Bacchus",
    "Cupid",
    "Isis",
    "Osiris",
    "Horus",
    "Anubis",
    "Ra",
    "Shiva",
    "Vishnu",
    "Brahma",
    "Indra",
    "Rudra",
    "Ayodhya",
    "Ayodhyā",
    "Ganesha",
    "Krishna",
    "Kali",
    "Lakshmi",
    "Arthurian",
    "Camelot",
    "Excalibur",
    "Avalon",
    "Merlin",
    "Lancelot",
    "Guinevere",
    "Atlantis",
    "Eden",
    "Hell",
    "Valkyrie",
    "Valkyries",
    "Banshee",
    "Kraken",
    "Leprechaun",
    // real persons
    "Tolkien",
    "Shakespeare",
    "Napoleon",
    "Caesar",
    "Cleopatra",
    "Alexander the Great",
    "Charlemagne",
    "Genghis",
    "Attila",
    "Hannibal",
    "Socrates",
    "Plato",
    "Aristotle",
    "Homer",
    "Virgil",
    "Dante",
    "Machiavelli",
    "Columbus",
    "Magellan",
    "Marco Polo",
    "Einstein",
    "Newton",
    "Darwin",
    "Galileo",
    "Leonardo",
    "Michelangelo",
    "Gutenberg",
    "Luther",
    "Calvin",
    "Hitler",
    "Stalin",
    "Lenin",
    "Churchill",
    "Washington",
    "Lincoln",
    "Jefferson",
    "Gandhi",
    "Confucius",
    "Zarathustra",
    "Zarathushtra",
    "Zoroaster",
    "Laozi",
    "Lao Tzu",
    "Sun Tzu",
    "Saladin",
    "Suleiman",
    "Tamerlane",
    "Cortés",
    "Pizarro",
    "Elizabeth I",
    "Henry VIII",
    "Joan of Arc",
    "King Arthur",
    "Robin Hood",
    "Gygax",
    "Crossby",
    "Christian and Heard",
    "Teramis",
    "Deborah Teramis Christian",
    "Bruce A. Heard",
    // works and settings of fiction, and games
    "Sauron",
    "Balrog",
    "Balrogs",
    "Gandalf",
    "Frodo",
    "Aragorn",
    "Gollum",
    "Mordor",
    "Gondor",
    "Rohan",
    "Middle-earth",
    "Middle Earth",
    "Hobbit",
    "Hobbits",
    "Silmarillion",
    "Narnia",
    "Hogwarts",
    "Dumbledore",
    "Voldemort",
    "Westeros",
    "Arrakis",
    "Discworld",
    "Earthsea",
    "Forgotten Realms",
    "Faerûn",
    "Greyhawk",
    "Dragonlance",
    "Krynn",
    "Eberron",
    "Ravenloft",
    "Waterdeep",
    "Baldur's Gate",
    "Neverwinter",
    "Dungeons & Dragons",
    "Dungeons and Dragons",
    "Pathfinder",
    "Golarion",
    "Star Wars",
    "Star Trek",
    "Harry Potter",
    "Lord of the Rings",
    "Game of Thrones",
    "Conan",
    "Cthulhu",
    "Lovecraft",
    "Dracula",
    "Frankenstein",
    "Sherlock Holmes",
    "Hârn",
    "Harn",
    "HârnMaster",
    "HarnMaster",
    "Kethira",
    "Lythia",
    "Tekumel",
    "Glorantha",
    "RuneQuest",
    "Sword Coast",
    "Gazetteer Writer's Manual",
    // real regions and places no country list carries
    "Europe",
    "Asia",
    "Africa",
    "Antarctica",
    "Oceania",
    "Eurasia",
    "Scandinavia",
    "Iberia",
    "Iberian",
    "Anatolia",
    "Mesopotamia",
    "Levant",
    "Balkans",
    "Siberia",
    "Sahara",
    "Himalaya",
    "Himalayas",
    "Alps",
    "Pyrenees",
    "Atlantic",
    "Pacific",
    "Mediterranean Sea",
    "Black Sea",
    "Baltic",
    "North Sea",
    "Rhine",
    "Danube",
    "Nile",
    "Thames",
    "Tiber",
    "Seine",
    "Volga",
    "Euphrates",
    "Tigris",
    "Ganges",
    "Yangtze",
    "Amazon",
    "Mississippi",
    "Jerusalem",
    "Rome",
    "Athens",
    "Sparta",
    "Troy",
    "Constantinople",
    "Byzantium",
    "Carthage",
    "Babylon",
    "Nineveh",
    "Memphis",
    "Thebes",
    "Alexandria",
    "Venice",
    "Florence",
    "Paris",
    "London",
    "Berlin",
    "Moscow",
    "Beijing",
    "Tokyo",
    "Delhi",
    "Cairo",
    "Baghdad",
    "Damascus",
    "Mecca",
    "Medina",
    "Timbuktu",
    "Zanzibar",
    "Hanseatic League",
    "Holy Roman Empire",
    "Roman Empire",
    "British Empire",
    "Mongol Empire",
    "Ottoman Empire",
    "Terran",
    // weekday names
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

/**
 * Earth-Greek given names and place names. No package lists them, and the
 * setting's Helonic family is built to read as Greek without being Greek: its
 * names come from the lexicon's roots and endings, and a name that is also an
 * Earth person's or place is refused.
 *
 * Names are plain and unaccented; the guard folds accents in the text before
 * matching, so "Stávros" and "Stavros" are the same hit. Both the f and the
 * ph spelling of a name are listed where each is in use. A name that is also
 * an ordinary word in the reader's tongue is left out.
 */
export const GREEK_NAMES = [
    "Alexios",
    "Alexandros",
    "Nikandros",
    "Stavros",
    "Anastasios",
    "Eugenios",
    "Nikephoros",
    "Nikeforos",
    "Theoklitos",
    "Photios",
    "Fotios",
    "Photianos",
    "Basilios",
    "Vasilios",
    "Vasilis",
    "Basileios",
    "Konstantinos",
    "Theodoros",
    "Dimitrios",
    "Demetrios",
    "Georgios",
    "Gregorios",
    "Ioannis",
    "Ioannes",
    "Leonidas",
    "Leontios",
    "Nikolaos",
    "Panagiotis",
    "Petros",
    "Spyros",
    "Stefanos",
    "Stephanos",
    "Symeon",
    "Timotheos",
    "Kyriakos",
    "Kyros",
    "Lysandros",
    "Makarios",
    "Maximos",
    "Menandros",
    "Onesimos",
    "Pamphilos",
    "Pantelis",
    "Prokopios",
    "Serapion",
    "Sophronios",
    "Tryphon",
    "Xenophon",
    "Zosimos",
    "Athanasios",
    "Agathon",
    "Ambrosios",
    "Eustathios",
    "Euthymios",
    "Filaretos",
    "Philaretos",
    "Epiphanios",
    "Epifanios",
    "Dositheos",
    "Zacharias",
    "Kosmas",
    "Neophytos",
    "Klementos",
    "Akakios",
    "Arkadios",
    "Athenagoras",
    "Kallixenos",
    "Leonides",
    "Timotheon",
    "Fotianos",
    "Gregoras",
    "Dalassenos",
    "Katakalos",
    "Melissenos",
    "Patrikios",
    "Polytimos",
    "Kallinikos",
    "Gavrilos",
    "Demetrion",
    "Efthymiopoulos",
    "Philokenos",
    "Kallisthenes",
    "Zenais",
    "Drakonis",
    "Angelides",
    "Chrysantos",
    "Sampsion",
    "Philandros",
    "Filandros",
    // women
    "Anastasia",
    "Eudokia",
    "Theodora",
    "Basilia",
    "Euphrasia",
    "Eufrasia",
    "Athanasia",
    "Melissa",
    "Melissena",
    "Olympia",
    "Dorothea",
    "Dorotheia",
    "Pelagia",
    "Eulalia",
    "Glykeria",
    "Ekaterini",
    "Aikaterini",
    "Katerina",
    "Eirene",
    "Sophia",
    "Xenia",
    "Paraskevi",
    "Kassandra",
    "Theophano",
    "Theophania",
    "Eleni",
    "Eudoxia",
    "Anthousa",
    "Charito",
    "Euphemia",
    "Eufemia",
    "Elpida",
    "Thaleia",
    "Timothea",
    "Thekla",
    "Theodosia",
    "Zenaida",
    "Isidora",
    "Philina",
    // places
    "Temnos",
    "Kephala",
    "Kefala",
    "Thessalonike",
    "Thebas",
];

/**
 * @param {string} name a country, capital or language name from the package
 * @returns {string[]} the whole-word names it contains
 */
function split(name) {
    return name
        .split(/[,;()/]| and | or /)
        .map((s) => s.trim())
        .filter((s) => /^[A-ZÀ-Þ][\p{L}'’.\- ]+$/u.test(s) && s.length > 2);
}

let namesCache;

/** @returns {RegExp} the matcher over every refused name, built once */
export function earthMatcher() {
    namesCache ??= matcher(earthNames());
    return namesCache;
}

/** @returns {string[]} every Earth name the guard refuses, sorted longest first */
export function earthNames() {
    const names = new Set(CURATED);
    for (const c of Object.values(countries)) {
        split(c.name).forEach((n) => names.add(n));
        for (const cap of [].concat(c.capital ?? "")) split(cap).forEach((n) => names.add(n));
    }
    for (const l of Object.values(languages)) split(l.name).forEach((n) => names.add(n));
    Object.values(continents).forEach((n) => names.add(n));
    for (const n of Object.keys(IN_WORLD)) names.delete(n);
    return [...names].sort((a, b) => b.length - a.length || a.localeCompare(b));
}

let greekCache;

/** @returns {RegExp} the matcher over the Earth-Greek names, applied to accent-folded text */
function greekMatcher() {
    greekCache ??= matcher([...GREEK_NAMES].sort((a, b) => b.length - a.length));
    return greekCache;
}

/**
 * @param {string} line
 * @returns {string} the line with every accented letter reduced to its base letter, so
 *   that each character keeps its column
 */
function foldAccents(line) {
    return line.replace(/\p{L}/gu, (c) => (c.length === 1 ? c.normalize("NFD")[0] : c));
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * @param {string[]} names
 * @returns {RegExp} whole-word, case-sensitive match of any name
 */
function matcher(names) {
    return new RegExp(
        `(?<![\\p{L}\\p{N}_'’-])(?:${names.map(escape).join("|")})(?![\\p{L}\\p{N}_]|[’'-]?\\p{L})`,
        "gu",
    );
}

/** English homographs whose surrounding words identify a setting meaning. */
const CONTEXTUAL_HOMOGRAPHS = [
    // The English rendering describes polish worn off a coat of mail.
    /\bPolish(?= leaves in hand\b)/gu,
    // A soldier's translated sheep nickname, distinguished from the Earth tongue.
    /\bEwe(?= as the company says\b)/gu,
];

// The reader's own languages: refused on every line, exempt or not.
const READER_LANGUAGES = /\b(?:english|french|latin)\b/gi;
// Capitalized only: "common speech" in lower case is an in-setting lingua franca.
const COMMON = /\bCommon[- ](?:tongue|Tongue|Speech)\b/g;
// Any case: no people in the setting calls its year-count common.
const COMMON_CALENDAR = /\bcommon calendar\b/gi;

/**
 * @param {string} file path relative to the working directory
 * @param {string} text
 * @param {RegExp} [names] the Earth-name matcher
 * @returns {string[]} one `file:line:column: error: message` finding per hit
 */
export function findEarthNames(file, text, names = earthMatcher()) {
    const exemptFile = EXEMPT_FILES.has(file);
    // Only an executable encoding document can use Roman as an orthographic
    // label. Names of peoples and places in its ordinary prose still count.
    let encodingDocument = false;
    if (/^  mappings:/m.test(text)) {
        const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
        if (frontmatter) {
            let note;
            try {
                note = YAML.parse(frontmatter[1]);
            } catch {
                note = undefined;
            }
            encodingDocument =
                note?.type === "doc" &&
                typeof note.data?.language === "string" &&
                typeof note.data?.font === "string" &&
                typeof note.data?.mappings === "object" &&
                note.data.mappings !== null &&
                !Array.isArray(note.data.mappings) &&
                note.data?.rules?.normalization === "NFC";
        }
    }
    let inRetired = false;
    let inMap = false;
    return text.split("\n").flatMap((line, i) => {
        if (/^ {0,2}\S/.test(line)) {
            inRetired = RETIRED_KEY.test(line);
            inMap = MAP_KEY.test(line);
        }
        if (inMap) return [];
        // Blank a retired entry's form, keeping every column.
        if (inRetired)
            line = line.replace(RETIRED_FORM, (_all, key, value) => key + " ".repeat(value.length));
        if (encodingDocument)
            line = line.replace(
                /\bRoman(?=\s+(?:word|inventory|spelling|standard|punctuation|letter|text|input|repertoire)\b)/gu,
                (word) => " ".repeat(word.length),
            );
        // Blank only the homograph; other Earth references retain their columns.
        for (const pattern of CONTEXTUAL_HOMOGRAPHS)
            line = line.replace(pattern, (word) => " ".repeat(word.length));
        const exempt = exemptFile || ANALOG_LINE.test(line);
        const hits = [];
        for (const [re, what, subject] of [
            ...(PRONUNCIATION_REFERENCES.has(file) ?
                []
            :   [[READER_LANGUAGES, "the reader's language"]]),
            ...(exempt ?
                []
            :   [
                    [COMMON, "a Common tongue"],
                    [
                        COMMON_CALENDAR,
                        'the Vylarian Calendar\'s name in the tooling; write "the Vylarian Calendar"',
                    ],
                    [names, "an Earth proper name"],
                    [greekMatcher(), "an Earth-Greek name", foldAccents(line)],
                ]),
        ]) {
            for (const m of (subject ?? line).matchAll(re)) {
                hits.push({ col: m.index + 1, text: m[0], what });
            }
        }
        return hits
            .sort((a, b) => a.col - b.col)
            .filter((h, j, all) => j === 0 || h.col !== all[j - 1].col)
            .map((h) => `${file}:${i + 1}:${h.col}: error: "${h.text}" is ${h.what}`);
    });
}

/**
 * @param {string} dir
 * @returns {string[]} every file beneath `dir`
 */
function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
    });
}

/** @returns {string[]} every finding across the scanned corpus */
export function scan() {
    const files = [...walk(CONTENT_DIR).filter((f) => /\.(md|json|ya?ml)$/.test(f))];
    return files.flatMap((f) => findEarthNames(f, fs.readFileSync(f, "utf8")));
}

/** Prints the findings and the summary; returns the exit status. */
export function main() {
    const findings = scan();
    for (const f of findings) console.error(f);
    console.log(`earth-names: ${findings.length} finding${findings.length === 1 ? "" : "s"}`);
    return findings.length ? 1 : 0;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
    process.exitCode = main();
}
