/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Retired names stay retired.
 *
 * A name that gives way to its culture's own has its retired forms written out
 * here and swept from prose.
 *
 * A row's `scope` is `corpus` for a name no other tongue writes by accident (a
 * theonym, a place), and a list of note paths for a personal name another
 * bearer keeps: there the retired form is swept only from the notes that speak
 * of the renamed person.
 *
 * Read past, because they are not prose: a `shortcode:` line, a
 * `# terran_analog:` comment, a language note's `data.retired` row, a
 * wikilink's target, a markdown link's target, an address and inline code.
 */

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const CONTENT_DIR = "assets/content";

/** @type {{retired: string[], replacement: string, scope: "corpus" | string[]}[]} */
export const RETIRED = [
    {
        retired: ["Jánus", "Janus", "Jánusian", "Janusian"],
        replacement: "Árdavon",
        scope: "corpus",
    },
    { retired: ["Thánatos", "Thanatos"], replacement: "Sélmoros", scope: "corpus" },
    {
        retired: ["Vúlcan", "Vulcan", "Vúlcani", "Vulcani", "Vúlcanian", "Vulcanian"],
        replacement: "Ústaron",
        scope: "corpus",
    },
    {
        retired: ["Vénusia", "Venusia", "Vénusian", "Vénustria", "Vénustrian"],
        replacement: "Ólvenía",
        scope: "corpus",
    },
    { retired: ["Aethería", "Aetheria"], replacement: "Zûnêlâs", scope: "corpus" },
    { retired: ["Múrkír", "Murkir", "Múrkían"], replacement: "Pôzêrâs", scope: "corpus" },
    { retired: ["Jánite", "Jánites"], replacement: "Árdavan", scope: "corpus" },
    { retired: ["Samantas"], replacement: "Samontas", scope: "corpus" },
    {
        retired: ["Thánatic", "Thanatine", "Thanatines", "Thánatan"],
        replacement: "Sélmoran",
        scope: "corpus",
    },
    { retired: ["Tz'umaq'ob"], replacement: "Ts'umaq'ob", scope: "corpus" },
    { retired: ["Tz'ab"], replacement: "Ts'ab", scope: "corpus" },
    { retired: ["Kael"], replacement: "the host culture's given names", scope: "corpus" },
    {
        retired: ["Theron"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Samarina_Oreinikot.md",
            "assets/content/Characters/Heroes_and_Knaves/Ghofa_Kepikot.md",
            "assets/content/Characters/Heroes_and_Knaves/Kreneze_Vokoghis.md",
            "assets/content/Characters/Heroes_and_Knaves/Fodios_Timiakit.md",
            "assets/content/Characters/Heroes_and_Knaves/Dorashkar_Tredis.md",
            "assets/content/Characters/Heroes_and_Knaves/Bazia_Lokios.md",
            "assets/content/Characters/Heroes_and_Knaves/Sedikon_Manedes.md",
            "assets/content/Characters/Heroes_and_Knaves/Domrithas_Vishardas.md",
            "assets/content/Characters/Heroes_and_Knaves/Mirene_Kalethos.md",
            "assets/content/Characters/Heroes_and_Knaves/Arevin_Lidren.md",
            "assets/content/Characters/Heroes_and_Knaves/Kayvonad_Zarid.md",
            "assets/content/Characters/Heroes_and_Knaves/Vishvakhila_Ratnadasa.md",
            "assets/content/Characters/Occupations/Dunith_Chilton.md",
            "assets/content/Characters/Occupations/Audrey_Harding.md",
        ],
    },
    {
        retired: [
            "Malachar Venn",
            "Dustrunner",
            "Casix",
            "Colonel Estáril Dómivar",
            "Colonel Dómivar",
        ],
        replacement: "names and offices of the bearer's culture",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Afzandah_Parnazar.md",
            "assets/content/Characters/Heroes_and_Knaves/Kayvonad_Zarid.md",
            "assets/content/Characters/Occupations/Tarsila_Thelvaris.md",
        ],
    },
    {
        retired: ["Aldric"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Gnaldurthann_Solvargur.md",
            "assets/content/Characters/Heroes_and_Knaves/Kelena_Estilgon.md",
            "assets/content/Characters/Heroes_and_Knaves/Vrildmil_Hrafansvald.md",
            "assets/content/Characters/Heroes_of_Asguard/Dvurnvir_the_Shaper.md",
        ],
    },
    {
        retired: ["Amrita"],
        replacement: "Shrimeti",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Pritarika_Padmadiksha.md"],
    },
    {
        retired: ["Vasilis"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Nomasahr_Paraklavos.md",
            "assets/content/Characters/Heroes_and_Knaves/Samarina_Oreinikot.md",
            "assets/content/Characters/Heroes_and_Knaves/Vishvakhila_Ratnadasa.md",
        ],
    },
    {
        retired: ["Devani"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Vishvakhila_Ratnadasa.md"],
    },
    {
        retired: ["Aldwin"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Hrandrinna_Drekanott.md",
            "assets/content/Characters/Heroes_and_Knaves/Svulthira_Solvargur.md",
            "assets/content/Characters/Heroes_and_Knaves/Eldira_Garrundeta.md",
        ],
    },
    {
        retired: ["Keira"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Hrandrinna_Drekanott.md",
            "assets/content/Characters/Heroes_and_Knaves/Ralthira_Drekanott.md",
        ],
    },
    {
        retired: ["Aldwyn"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Idrise_Korisvar.md",
            "assets/content/Characters/Heroes_and_Knaves/Thrildvir_Iseldur.md",
        ],
    },
    {
        retired: ["Meredith"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Vishvara_Mahapar.md",
            "assets/content/Characters/Occupations/Lothona_Harlanis.md",
        ],
    },
    {
        retired: ["Kesh"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Vishvara_Mahapar.md"],
    },
    {
        retired: ["Elara"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Thalmthann_Solvargur.md"],
    },
    {
        retired: ["Kyros"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Trufios_Veghekos.md",
            "assets/content/Characters/Heroes_and_Knaves/Vusukes_Govabes.md",
        ],
    },
    {
        retired: ["Korvin"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Arkhea_Kourkasios.md",
            "assets/content/Characters/Heroes_and_Knaves/Ranthor_Pardalen.md",
        ],
    },
    {
        retired: ["Mera"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Chorvan_Jarlen.md"],
    },
    {
        retired: ["Ivar"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Thraskorv_Jarnskel.md"],
    },
    {
        retired: ["Kalindi"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Narava_Tejanand.md"],
    },
    {
        retired: ["Eirik"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_of_Asguard/Dvulginda_Shadow_Walker.md",
            "assets/content/Characters/Heroes_of_Asguard/Hvilgthira_Knalthannsdottir.md",
        ],
    },
    {
        retired: ["Qelti"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Folk/Khelemur.md",
            "assets/content/Characters/Heroes_and_Knaves/Raiaku_UznerAu.md",
            "assets/content/Characters/Heroes_and_Knaves/Razanash_Mervaran.md",
            "assets/content/Characters/Heroes_and_Knaves/Thirye_GezAqeu.md",
            "assets/content/Characters/Heroes_and_Knaves/Thotkar_LetGerau.md",
            "assets/content/Characters/Heroes_and_Knaves/Ziprahu_IguMaathu.md",
        ],
    },
    {
        retired: ["Gezehutyu"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Folk/Balinta.md",
            "assets/content/Characters/Heroes_and_Knaves/Thotkar_LetGerau.md",
        ],
    },
    {
        retired: ["Zezabu"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Folk/Mathaku.md",
            "assets/content/Characters/Heroes_and_Knaves/Raiaku_UznerAu.md",
            "assets/content/Characters/Heroes_and_Knaves/Zekhemet_GulZekhenu.md",
        ],
    },
    {
        retired: ["Uzner"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Folk/Lemani.md"],
    },
    {
        retired: ["Aleziya"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Folk/Agosi.md"],
    },
    {
        retired: ["Southwestern Oasis-Belt", "southwestern oasis-belt"],
        replacement: "Tellumel",
        scope: "corpus",
    },
    { retired: ["Mōbadān-Shōfár"], replacement: "Tōqēl", scope: "corpus" },
    { retired: ["Ashalan"], replacement: "Ashaian", scope: "corpus" },
    { retired: ["Báhramis", "Bahramis", "Bahramish"], replacement: "Bazhrámiš", scope: "corpus" },
    { retired: ["Shōfet", "Dūkhen"], replacement: "Zhūdek", scope: "corpus" },
    { retired: ["Gurdi"], replacement: "Vurdil", scope: "corpus" },
    { retired: ["garen"], replacement: "relvan", scope: "corpus" },
    { retired: ["nasi"], replacement: "Rēzhul", scope: "corpus" },
    { retired: ["Chinvat"], replacement: "Mozhelurbek", scope: "corpus" },
    { retired: ["Asha"], replacement: "Ozhmar", scope: "corpus" },
    { retired: ["Druj"], replacement: "Ghuzdak", scope: "corpus" },
    {
        retired: ["Khazryn Confederation", "Khazryn confederation"],
        replacement: "Tellumi Confederation",
        scope: "corpus",
    },
    {
        retired: ["Khazryn Calendar", "Khazryn calendar"],
        replacement: "Tellumi Calendar",
        scope: "corpus",
    },
    { retired: ["Khazri"], replacement: "Tellumi", scope: "corpus" },
    {
        retired: [
            "Augustars",
            "augustars",
            "Augustari",
            "augustari",
            "Augustar",
            "augustar",
            "Augusta",
            "augusta",
        ],
        replacement: "Orzas or Orzoi",
        scope: "corpus",
    },
    { retired: ["Teqemod", "teqemod"], replacement: "Ozhmarod", scope: "corpus" },
    {
        retired: [
            "Morá-Shirván",
            "Mora-Shirvan",
            "Samim",
            "Yazdín",
            "Yazdin",
            "Parván",
            "Parvan",
            "Vahram",
        ],
        replacement: "the Tellumi names of the princely heads",
        scope: "corpus",
    },
    {
        retired: ["Khavar"],
        replacement: "Shavend",
        scope: ["assets/content/Skills/Languages/Dunhari_Language.md"],
    },
    {
        retired: ["Khavar"],
        replacement: "Gureshay",
        scope: [
            "assets/content/Adventurers_Guides/Tellumi_Adventurers_Guide.md",
            "assets/content/Adventures/Masks_in_the_Dry_Wash.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Council_of_the_Princes.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Henhutpedin.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Tellumi_Confederation.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Princely_Houses/House_of_Zargandur.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Relvanvesut.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Zargandur.md",
        ],
    },
    {
        retired: ["khanates", "khanate", "Khans", "Khan", "khan"],
        replacement: "orqwen (a khanate is an orqwenoq)",
        scope: [
            "assets/content/Affiliations/Divine/Dunhara/The_Storm_Cults_of_Bazhramis.md",
            "assets/content/Affiliations/Organizations/Vylarian/The_Warriors_Circle_of_the_Dunhara_Tribes.md",
            "assets/content/Affiliations/Social/Companies/TighSavaran_of_the_Koserur.md",
            "assets/content/Lore/History/The_Storm_of_the_Hundred_Banners.md",
            "assets/content/Regions/Ankaris/Hellad/Byzaria/Eastern_March.md",
            "assets/content/Regions/Ankaris/Hellad/Byzaria/Northern_March.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Desert_Region.md",
            "assets/content/Regions/Ankaris/Vedyara/History/The_Hard_Generation.md",
            "assets/content/Regions/Ankaris/Vedyara/History/The_Fall_of_Marupal.md",
            "assets/content/Regions/Ankaris/Vedyara/The_Banner_Ground.md",
            "assets/content/Regions/Ankaris/Vedyara/Ludrapur.md",
            "assets/content/Regions/Ankaris/Velanthia/Velanthia_Region.md",
        ],
    },
    { retired: ["Via Aquaria"], replacement: "Ulmerkazthos", scope: "corpus" },
    { retired: ["naumachiae", "naumachia"], replacement: "mock sea-battles", scope: "corpus" },
    {
        retired: ["Iulia Verronius"],
        replacement: "Ankela Nebralandis",
        scope: [
            "assets/content/Affiliations/Organizations/Guilds/The_Imperial_Scribal_Guild.md",
            "assets/content/Affiliations/Organizations/Vylarian/Great_College_of_Guilds.md",
        ],
    },
    {
        retired: ["Torvelis Velerianus"],
        replacement: "Solkimar Talothates",
        scope: [
            "assets/content/Affiliations/Organizations/Vylarian/Great_College_of_Guilds.md",
            "assets/content/Affiliations/Organizations/Guilds/The_Imperial_Scribal_Guild.md",
        ],
    },
    { retired: ["Chandramukha"], replacement: "Chendramukhva", scope: "corpus" },
    {
        retired: ["Karanat", "Dubzar", "Zamir-Kar"],
        replacement: "Sowides well names",
        scope: "corpus",
    },
    {
        retired: [
            "Bahrazad",
            "Darush",
            "Shabar",
            "Bazudar",
            "Sahravan",
            "Timan",
            "Shahrun",
            "Nari",
            "Goravan",
        ],
        replacement: "Sowides names",
        scope: [
            "assets/content/Affiliations/Companies.md",
            "assets/content/Affiliations/Social/Companies/TighSavaran_of_the_Koserur.md",
            "assets/content/Characters/Folk/Khazryn_Desert/Bulachsovid_Yovakur.md",
            "assets/content/Characters/Heroes_and_Knaves/Yovaqbeyuk_Qibudur.md",
            "assets/content/Characters/Heroes_and_Knaves/Lambira_Pedhinion.md",
            "assets/content/Characters/Heroes_and_Knaves/Dujarlun_Oroqidur.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Steppe_Tribes/Koserur.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Steppe_Tribes/Qibudur.md",
        ],
    },
];

const LETTER = "\\p{L}\\p{M}";
const NOT_PROSE =
    /\[\[[^\]|]*(?=[|\]])|\]\([^)]*\)|`[^`]*`|(?<![\w-])(?:affiliation|place|lore|being|skill|icon|image)-[a-z0-9]+/gu;

/**
 * The prose of a note: every line but a shortcode line, a terran_analog line
 * or a line inside the frontmatter's `data.retired` list (the `  retired:` key
 * and its rows, one-line or block), with link targets, addresses and code
 * spans blanked.
 * @param {string} text
 * @returns {string[]}
 */
export function proseLines(text) {
    let fence = 0;
    let top = "";
    let inRetired = false;
    return text.split("\n").map((line) => {
        const bare = line.trimStart();
        if (line === "---" && fence < 2) {
            fence += 1;
            return line;
        }
        if (fence === 1 && bare !== "") {
            const indent = line.length - bare.length;
            if (inRetired && (indent > 2 || (indent === 2 && bare.startsWith("- ")))) return "";
            inRetired = false;
            if (indent === 0 && !bare.startsWith("#")) top = bare.split(":")[0];
            else if (top === "data" && indent === 2 && bare.startsWith("retired:")) {
                inRetired = true;
                return "";
            }
        }
        if (bare.startsWith("shortcode:") || bare.startsWith("# terran_analog")) return "";
        return line.replace(NOT_PROSE, (m) => " ".repeat(m.length));
    });
}

/**
 * Every place a retired form stands in prose, as `file:line:column`.
 * @param {string} file
 * @param {string} text
 * @param {string[]} forms
 * @returns {string[]}
 */
export function sightings(file, text, forms) {
    const alternation = [...forms]
        .sort((a, b) => b.length - a.length)
        .map((f) => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|");
    const rx = new RegExp(`(?<![${LETTER}])(?:${alternation})(?![${LETTER}])`, "gu");
    const found = [];
    proseLines(text).forEach((line, i) => {
        for (const m of line.matchAll(rx)) found.push(`${file}:${i + 1}:${m.index + 1}: ${m[0]}`);
    });
    return found;
}

function notes(dir) {
    const out = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, entry.name);
        if (entry.isDirectory()) out.push(...notes(p));
        else if (entry.name.endsWith(".md")) out.push(p);
    }
    return out;
}

test("the sweep reads prose and passes over shortcodes, link targets and analogues", () => {
    const text = [
        "shortcode: janusdty",
        "# terran_analog: Janus, the Roman god of gates",
        "See [[affiliation-janus|Faith of Árdavon]] and `Janus`.",
        "A priest of Jánus.",
    ].join("\n");
    assert.deepEqual(sightings("x.md", text, ["Jánus", "Janus"]), ["x.md:4:13: Jánus"]);
});

test("a one-line data.retired row is passed over", () => {
    const text = [
        "---",
        "data:",
        "  retired:",
        "    - {form: Janus, instead: Árdavon, why: an Earth name}",
        "  inline: x",
        "---",
    ].join("\n");
    assert.deepEqual(sightings("x.md", text, ["Janus"]), []);
});

test("a retired form inside a longer word is not a sighting", () => {
    assert.deepEqual(sightings("x.md", "Januspath and Vénusiana", ["Janus", "Vénusia"]), []);
});

test("the sovereign's retired Latin title is swept in both cases and its plurals", () => {
    const forms = RETIRED.filter((r) => r.replacement === "Orzas or Orzoi").flatMap(
        (r) => r.retired,
    );
    const text = "An augustar and the Augustars, two augustars, an Augustari, an Augusta.";
    assert.equal(sightings("x.md", text, forms).length, 5);
});

test("no retired name stands in the prose of its scope", () => {
    const all = notes(CONTENT_DIR);
    const findings = [];
    for (const row of RETIRED) {
        const files = row.scope === "corpus" ? all : row.scope;
        for (const file of files) {
            assert(fs.existsSync(file), `${file}: the scope names a note that does not exist`);
            findings.push(...sightings(file, fs.readFileSync(file, "utf8"), row.retired));
        }
    }
    assert.deepEqual(findings, []);
});

test("a block-form data.retired row names its retired form without being a sighting", () => {
    const text = [
        "---",
        "data:",
        "  retired:",
        "    - form: Augustar",
        "      instead: Orzas",
        "      why: a Latin title",
        "  words:",
        "    - form: Orzas",
        "---",
        "Prose.",
    ].join("\n");
    assert.deepEqual(sightings("x.md", text, ["Augustar"]), []);
});

test("an active block lexicon row naming a retired form is a sighting", () => {
    const text = [
        "---",
        "data:",
        "  retired:",
        "    - form: Orzas",
        "  words:",
        "    - form: Augustar",
        "      gloss: a ruler",
        "---",
    ].join("\n");
    assert.deepEqual(sightings("x.md", text, ["Augustar"]), ["x.md:6:13: Augustar"]);
});

test("a prose line beginning form: is a sighting", () => {
    const text = ["---", "data: {}", "---", "form: Augustar"].join("\n");
    assert.deepEqual(sightings("x.md", text, ["Augustar"]), ["x.md:4:7: Augustar"]);
});
