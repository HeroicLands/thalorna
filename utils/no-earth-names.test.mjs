/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * The corpus names no Earth proper name.
 *
 * A language, country, region, city, people, religion, mythology, real person or
 * work of fiction is an Earth name, and so are "English" and "Common tongue".
 * Each is refused in every note, README and table under `assets/content`, and in
 * the lexicon data files, wherever it stands: prose, a tag, a pronunciation
 * guide or a comment. A name is recast as a gloss or a rendering, and a sound is
 * described without naming a language.
 *
 * Two places may name them: the Terran analogs note, and a `# terran_analog:`
 * comment line.
 *
 * Country, capital, continent and language names come from `countries-list`.
 * Peoples, religions, mythologies, persons and works of fiction have no package
 * and are listed in `CURATED`.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { continents, countries, languages } from "countries-list";

const CONTENT_DIR = "assets/content";
const DATA_FILES = ["utils/nordmal-concordance.json"];

/** Files that may name Earth. */
const EXEMPT_FILES = new Set([
    "assets/content/Reference/Terran_Analogs.md",
    // Source credits for the writing manuals; ownership of the decision is open.
    "assets/content/README-gazeteer.md",
    "assets/content/Adventurers_Guides/README.md",
]);

/**
 * The concordance records the Earth names the corpus replaced; these keys hold
 * the replaced name or the path it sat at, which is the record's whole purpose.
 */
const RECORDED_KEY = /^\s*"(?:oldName|oldAliases|oldPath|oldRefPaths)"/;
const CONCORDANCE = "utils/nordmal-concordance.json";

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
    "Ur",
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

const ENGLISH = /\benglish\b/gi;
// Capitalized only: "common speech" in lower case is an in-setting lingua franca.
const COMMON = /\bCommon[- ](?:tongue|Tongue|Speech)\b/g;

/**
 * @param {string} file path relative to the working directory
 * @param {string} text
 * @param {RegExp} [names] the Earth-name matcher
 * @returns {string[]} one `file:line:column: error: message` finding per hit
 */
export function findEarthNames(file, text, names = NAMES) {
    if (EXEMPT_FILES.has(file)) return [];
    return text.split("\n").flatMap((line, i) => {
        if (ANALOG_LINE.test(line)) return [];
        if (file === CONCORDANCE && RECORDED_KEY.test(line)) return [];
        const hits = [];
        for (const [re, what] of [
            [ENGLISH, "the reader's language"],
            [COMMON, "a Common tongue"],
            [names, "an Earth proper name"],
        ]) {
            for (const m of line.matchAll(re)) {
                hits.push({ col: m.index + 1, text: m[0], what });
            }
        }
        return hits
            .sort((a, b) => a.col - b.col)
            .filter((h, j, all) => j === 0 || h.col !== all[j - 1].col)
            .map((h) => `${file}:${i + 1}:${h.col}: error: "${h.text}" is ${h.what}`);
    });
}

const NAMES = matcher(earthNames());

test("an Earth name is found, with its column", () => {
    assert.deepEqual(findEarthNames("a.md", "ok\nas in Scottish loch"), [
        'a.md:2:7: error: "Scottish" is an Earth proper name',
    ]);
    assert.equal(findEarthNames("a.md", "as in English").length, 1);
    assert.equal(findEarthNames("a.md", "the Common tongue calls it").length, 1);
    assert.equal(findEarthNames("a.md", "a Common-tongue name").length, 1);
    assert.equal(findEarthNames("a.md", "Latin letters, and Tolkien").length, 2);
    assert.equal(findEarthNames("a.md", "from France to Japan").length, 2);
    assert.equal(findEarthNames("a.md", "speaking Norwegian").length, 1);
});

test("whole words and in-world vocabulary pass", () => {
    assert.equal(findEarthNames("a.md", "englishman").length, 0);
    assert.equal(findEarthNames("a.md", "the common tongue of an empire").length, 0);
    assert.equal(findEarthNames("a.md", "latin and the romans in lower case").length, 0);
    assert.equal(findEarthNames("a.md", "Romanization of the Frankish").length, 0);
});

test("the Terran analogs note and terran_analog comments are exempt", () => {
    assert.deepEqual(findEarthNames("assets/content/Reference/Terran_Analogs.md", "Rome"), []);
    assert.deepEqual(findEarthNames("a.md", "# terran_analog: Rome, Norse"), []);
    assert.equal(findEarthNames("a.md", "Rome").length, 1);
});

test("every exemption carries a reason", () => {
    for (const [name, why] of Object.entries(IN_WORLD)) {
        assert.ok(why.trim().length > 0, `${name} needs a one-line reason`);
    }
});

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
    const files = [...walk(CONTENT_DIR).filter((f) => /\.(md|json|ya?ml)$/.test(f)), ...DATA_FILES];
    return files.flatMap((f) => findEarthNames(f, fs.readFileSync(f, "utf8")));
}

test("no note, README or lexicon data file names Earth", () => {
    assert.deepEqual(scan(), []);
});
