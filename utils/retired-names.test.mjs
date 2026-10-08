/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

/**
 * Retired names outside the Nordmal concordance stay retired.
 *
 * The Nordmal drift guard reads `utils/nordmal-concordance.json`, whose scope is
 * the north. A name of another culture that gives way to its culture's own has
 * no row there, so its retired forms are written out here and swept from prose.
 *
 * A row's `scope` is `corpus` for a name no other tongue writes by accident (a
 * theonym, a place), and a list of note paths for a personal name another
 * bearer keeps: there the retired form is swept only from the notes that speak
 * of the renamed person.
 *
 * Read past, because they are not prose: a `shortcode:` line, a
 * `# terran_analog:` comment, a wikilink's target, a markdown link's target, an
 * address and inline code. Shortcodes keep their original letters on purpose.
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
    { retired: ["Kael"], replacement: "the host culture's given names", scope: "corpus" },
    {
        retired: ["Theron"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Samarina_Oreinikot.md",
            "assets/content/Characters/Heroes_and_Knaves/Zenais_Kepikot.md",
            "assets/content/Characters/Heroes_and_Knaves/Philina_Markesianos.md",
            "assets/content/Characters/Heroes_and_Knaves/Angelides_Thymiakit.md",
            "assets/content/Characters/Heroes_and_Knaves/Konstantinos_Polytimos.md",
            "assets/content/Characters/Heroes_and_Knaves/Helenaia_Mystakes.md",
            "assets/content/Characters/Heroes_and_Knaves/Gavrilos_Niktariotes.md",
            "assets/content/Characters/Heroes_and_Knaves/Domrithas_Vishardas.md",
            "assets/content/Characters/Heroes_and_Knaves/Myrine_Kalypsos.md",
            "assets/content/Characters/Heroes_and_Knaves/Arevyn_Llydar.md",
            "assets/content/Characters/Heroes_and_Knaves/Kayvonad_Zarid.md",
            "assets/content/Characters/Heroes_and_Knaves/Visvambharakhila_Ratnangadevadasa.md",
            "assets/content/Characters/Occupations/Aldith_Chilton.md",
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
            "assets/content/Characters/Occupations/Tarsia_Torvaleth.md",
        ],
    },
    {
        retired: ["Aldric"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Gnaldrthann_Solvargr.md",
            "assets/content/Characters/Heroes_and_Knaves/Kelena_Stylgon.md",
            "assets/content/Characters/Heroes_and_Knaves/Vrildmyl_Hrafnsvald.md",
            "assets/content/Characters/Heroes_of_Asguard/Dvurnvir_the_Shaper.md",
        ],
    },
    {
        retired: ["Vasilis"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Kallixenos_Paraklavos.md",
            "assets/content/Characters/Heroes_and_Knaves/Samarina_Oreinikot.md",
            "assets/content/Characters/Heroes_and_Knaves/Visvambharakhila_Ratnangadevadasa.md",
        ],
    },
    {
        retired: ["Devani"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Visvambharakhila_Ratnangadevadasa.md"],
    },
    {
        retired: ["Aldwin"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Hrandrinna_Drekanott.md",
            "assets/content/Characters/Heroes_and_Knaves/Svulthyra_Solvargr.md",
            "assets/content/Characters/Heroes_and_Knaves/Thalisa_Torvaleth.md",
        ],
    },
    {
        retired: ["Keira"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Hrandrinna_Drekanott.md",
            "assets/content/Characters/Heroes_and_Knaves/Ralthyra_Drekanott.md",
        ],
    },
    {
        retired: ["Aldwyn"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Idrise_Korisvar.md",
            "assets/content/Characters/Heroes_and_Knaves/Thrildvir_Iseldr.md",
        ],
    },
    {
        retired: ["Meredith"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Visvara_Mahapara.md",
            "assets/content/Characters/Occupations/Lothona_Harlanis.md",
        ],
    },
    {
        retired: ["Kesh"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Visvara_Mahapara.md"],
    },
    {
        retired: ["Elara"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Thalmthann_Solvargr.md"],
    },
    {
        retired: ["Kyros"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Gregoras_Ephthymiopoulos.md",
            "assets/content/Characters/Heroes_and_Knaves/Theomides_Epiphaniotes.md",
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
        scope: ["assets/content/Characters/Heroes_and_Knaves/Kjorvan_Gjarlen.md"],
    },
    {
        retired: ["Ivar"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Thraskorv_Jarnskel.md"],
    },
    {
        retired: ["Kalindi"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Narava_Suryatejamahananda.md"],
    },
    {
        retired: ["Eirik"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Heroes_of_Asguard/Dvulgynda_Shadow_Walker.md",
            "assets/content/Characters/Heroes_of_Asguard/Hvilgthyra_Knalthannsdottir.md",
        ],
    },
    {
        retired: ["Qelti"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Folk/Qelti.md",
            "assets/content/Characters/Heroes_and_Knaves/Raiaqu_UznerAu.md",
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
            "assets/content/Characters/Folk/Gezehutyu.md",
            "assets/content/Characters/Heroes_and_Knaves/Thotkar_LetGerau.md",
        ],
    },
    {
        retired: ["Zezabu"],
        replacement: "the host culture's given names",
        scope: [
            "assets/content/Characters/Folk/Zezabu.md",
            "assets/content/Characters/Heroes_and_Knaves/Raiaqu_UznerAu.md",
            "assets/content/Characters/Heroes_and_Knaves/Zekhemet_GulZekhenu.md",
        ],
    },
    {
        retired: ["Uzner"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Folk/Uzner.md"],
    },
    {
        retired: ["Aleziya"],
        replacement: "the host culture's given names",
        scope: ["assets/content/Characters/Folk/Aleziya.md"],
    },
    { retired: ["Oasis of Shirvan", "Shirvan"], replacement: "Kenbel", scope: "corpus" },
    { retired: ["Mehrnāgord"], replacement: "Yisurel", scope: "corpus" },
    { retired: ["Ashkarad"], replacement: "Himbar", scope: "corpus" },
    { retired: ["Zargandûr"], replacement: "Gudelun", scope: "corpus" },
    { retired: ["Kethramír"], replacement: "Hulenul", scope: "corpus" },
    { retired: ["Vahúrdash"], replacement: "Velkunar", scope: "corpus" },
    { retired: ["Ushtra-bēr"], replacement: "Tenhur", scope: "corpus" },
    { retired: ["Caldar"], replacement: "Dēlkosh", scope: "corpus" },
    { retired: ["Mōrávar"], replacement: "Tekevar", scope: "corpus" },
    { retired: ["Dranavár"], replacement: "Genbunel", scope: "corpus" },
    { retired: ["Vēštákán"], replacement: "Turem", scope: "corpus" },
    {
        retired: ["Southwestern Oasis-Belt", "southwestern oasis-belt"],
        replacement: "Tellumel",
        scope: "corpus",
    },
    {
        retired: ["Mōrá-Shirván"],
        replacement: "Murele",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Confederation.md"],
    },
    {
        retired: ["Sāmīm"],
        replacement: "Sunhemul",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Confederation.md"],
    },
    {
        retired: ["Khávar"],
        replacement: "Kirelul",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Confederation.md"],
    },
    {
        retired: ["Yázdín"],
        replacement: "Vurine",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Confederation.md"],
    },
    {
        retired: ["Pārván"],
        replacement: "Bernirul",
        scope: [
            "assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Confederation.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Mehrnagord.md",
        ],
    },
    {
        retired: ["Vāhrām"],
        replacement: "Karvemul",
        scope: [
            "assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Confederation.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Ushtra-ber.md",
        ],
    },
    {
        retired: ["Khoršád-Vahūr"],
        replacement: "Revunul",
        scope: [
            "assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Confederation.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Vahurdash.md",
        ],
    },
    {
        retired: ["Zevârad"],
        replacement: "Nelimul",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Razanash_Mervaran.md",
            "assets/content/Characters/Heroes_and_Knaves/Zevarad_Dathvarun.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Dathvarûn"],
        replacement: "Talvulun",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Razanash_Mervaran.md",
            "assets/content/Characters/Heroes_and_Knaves/Zevarad_Dathvarun.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Kamîd"],
        replacement: "Danilul",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Kamid_Khavandar.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Khâvandar"],
        replacement: "Hudelun",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Kamid_Khavandar.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Afzandah"],
        replacement: "Tamkere",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Afzandah_Parnazar.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
            "assets/content/README-gazeteer.md",
        ],
    },
    {
        retired: ["Parnâzar"],
        replacement: "Budilun",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Afzandah_Parnazar.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Nushir"],
        replacement: "Perime",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Nushir_Narsafi.md"],
    },
    {
        retired: ["Narsâfî"],
        replacement: "Nebalun",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Nushir_Narsafi.md"],
    },
    {
        retired: ["Khârânah"],
        replacement: "Yalgeme",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Kharanah_Khafur.md"],
    },
    {
        retired: ["Khafûr"],
        replacement: "Lisenun",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Kharanah_Khafur.md"],
    },
    {
        retired: ["Mūshárā"],
        replacement: "Zēlum",
        scope: [
            "assets/content/Regions/Ankaris/Khazryn_Desert/Mount_Shofar.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/beit_shofar.md",
        ],
    },
    {
        retired: ["Yáhōshí"],
        replacement: "Zūrkhem",
        scope: [
            "assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/beit_shofar.md",
        ],
    },
    {
        retired: ["Mount Shōfar", "Mt. Shōfar", "Shōfar"],
        replacement: "Shēkhulēz",
        scope: "corpus",
    },
    { retired: ["Beit-Shōfár"], replacement: "Lūkhemēz", scope: "corpus" },
    { retired: ["Mōbadān-Shōfár"], replacement: "Tōqēl", scope: "corpus" },
    { retired: ["Shōfet"], replacement: "Dūkhen", scope: "corpus" },
    { retired: ["nasi"], replacement: "Rēzhul", scope: "corpus" },
    { retired: ["Sárdá"], replacement: "Khēmōz", scope: "corpus" },
    { retired: ["Ārmán"], replacement: "Tūlqen", scope: "corpus" },
    { retired: ["Zhárván"], replacement: "Bīzhun", scope: "corpus" },
    { retired: ["Bāhrām"], replacement: "Zhōqarōd", scope: "corpus" },
    { retired: ["Ardashír"], replacement: "Būshkelōd", scope: "corpus" },
    { retired: ["Khorshad"], replacement: "Shēkhulōd", scope: "corpus" },
    { retired: ["Zarvān"], replacement: "Tōzhirōd", scope: "corpus" },
    { retired: ["Mihrān"], replacement: "Ēlqushōd", scope: "corpus" },
    { retired: ["Ráhmān"], replacement: "Gherōsōd", scope: "corpus" },
    { retired: ["Vaspūr"], replacement: "Bōzekhōd", scope: "corpus" },
    { retired: ["Sāvash"], replacement: "Nōghezōd", scope: "corpus" },
    { retired: ["Yazdānbar"], replacement: "Kēlumōd", scope: "corpus" },
    { retired: ["Pārmīda"], replacement: "Hōzhīrōd", scope: "corpus" },
    { retired: ["Dārvāz"], replacement: "Lēqoshōd", scope: "corpus" },
    { retired: ["Ardvī"], replacement: "Sēkholōd", scope: "corpus" },
    {
        retired: ["Ātarpāt"],
        replacement: "Tōshel",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md"],
    },
    {
        retired: ["Aspánsár"],
        replacement: "Sīghot",
        scope: [
            "assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/beit_shofar.md",
        ],
    },
    {
        retired: ["Yázdarmīd"],
        replacement: "Nōzhik",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md"],
    },
    {
        retired: ["Hānā"],
        replacement: "Āqesh",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md"],
    },
    {
        retired: ["Pārvīz"],
        replacement: "Hāmekh",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md"],
    },
    {
        retired: ["Ártáz"],
        replacement: "Ghāzur",
        scope: ["assets/content/Regions/Ankaris/Khazryn_Desert/Tribes_of_Atarzad.md"],
    },
    {
        retired: ["Kayvonad"],
        replacement: "Zōghelōr",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Kayvonad_Zarid.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Caldar.md",
        ],
    },
    {
        retired: ["Sharmînah"],
        replacement: "Tēqemāt",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Sharminah_Tahvan.md"],
    },
    {
        retired: ["Tahvân"],
        replacement: "Tōzhirōd",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Sharminah_Tahvan.md"],
    },
    {
        retired: ["Zârîd", "Zarid"],
        replacement: "Būshkelōd",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Kayvonad_Zarid.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Caldar.md",
        ],
    },
    {
        retired: ["Sahri"],
        replacement: "Yoweqes",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Amqelet_Zelemu_Leguluaqun.md",
            "assets/content/Characters/Heroes_and_Knaves/Atenheru.md",
            "assets/content/Folders/Dunhara_Tribes_dunharatribes.md",
        ],
    },
    {
        retired: ["Zarnûsh"],
        replacement: "Wogeles",
        scope: [
            "assets/content/Affiliations/Companies.md",
            "assets/content/Affiliations/Social/Companies/TighSavaran_of_the_Zarnush.md",
        ],
    },
    {
        retired: ["Âzardan"],
        replacement: "Kesuqes",
        scope: ["assets/content/Affiliations/Social/Companies/TighSavaran_of_the_Zarnush.md"],
    },
    {
        retired: ["Shirzâri"],
        replacement: "Hilodes",
        scope: [
            "assets/content/Affiliations/Companies.md",
            "assets/content/Affiliations/Social/Companies/TighSavaran_of_the_Zarnush.md",
        ],
    },
    {
        retired: ["Dûrmand"],
        replacement: "Dikraqes",
        scope: ["assets/content/Affiliations/Social/Companies/TighSavaran_of_the_Zarnush.md"],
    },
    { retired: ["Desert of Hek'ar", "Hek'ar"], replacement: "Pulekor", scope: "corpus" },
    { retired: ["Ruins of Arkor", "Arkor"], replacement: "Bolid", scope: "corpus" },
    {
        retired: ["Nari"],
        replacement: "Òwinye",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Nari_Sahravan.md",
            "assets/content/Characters/Heroes_and_Knaves/Zahira_Malkhet.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Sahravân"],
        replacement: "Ruweqes",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Nari_Sahravan.md",
            "assets/content/Characters/Heroes_and_Knaves/Zahira_Malkhet.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Bazûdar"],
        replacement: "Kwedutolis",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Bazudar_Shahrun.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Shahrûn"],
        replacement: "Gwirades",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Bazudar_Shahrun.md",
            "assets/content/Folders/Khazryn_Desert_ankariskhazryndesert.md",
        ],
    },
    {
        retired: ["Razanash"],
        replacement: "Huwenye",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Razanash_Mervaran.md",
            "assets/content/Characters/Heroes_and_Knaves/Zevarad_Dathvarun.md",
        ],
    },
    {
        retired: ["Mervaran"],
        replacement: "Gwatekes",
        scope: [
            "assets/content/Characters/Heroes_and_Knaves/Razanash_Mervaran.md",
            "assets/content/Characters/Heroes_and_Knaves/Zevarad_Dathvarun.md",
        ],
    },
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
    {
        retired: ["Khán"],
        replacement: "Varendi",
        scope: ["assets/content/Characters/Heroes_and_Knaves/Qamira_Lamari.md"],
    },
    { retired: ["Khazri"], replacement: "Tellumi", scope: "corpus" },
    {
        retired: ["khanates", "khanate", "Khans", "Khan", "khan"],
        replacement: "orqwen (a khanate is an orqwenoq)",
        scope: [
            "assets/content/Affiliations/Divine/Dunhara/Storm_Cults_of_Bahramish.md",
            "assets/content/Affiliations/Organizations/Vylarian/Dunhara_Warriors_Circle.md",
            "assets/content/Affiliations/Social/Companies/TighSavaran_of_the_Zarnush.md",
            "assets/content/Lore/History/The_Storm_of_the_Hundred_Banners.md",
            "assets/content/Regions/Ankaris/Hellad/Byzaria/Eastern_March.md",
            "assets/content/Regions/Ankaris/Hellad/Byzaria/Northern_March.md",
            "assets/content/Regions/Ankaris/Khazryn_Desert/Khazryn_Desert_Region.md",
            "assets/content/Regions/Ankaris/Vedyara/History/Era_6_The_Hard_Generation.md",
            "assets/content/Regions/Ankaris/Vedyara/History/The_Fall_of_Marupala.md",
            "assets/content/Regions/Ankaris/Vedyara/Lanthusthali.md",
            "assets/content/Regions/Ankaris/Vedyara/Ludrapur.md",
            "assets/content/Regions/Ankaris/Velanthia/Velanthia_Region.md",
        ],
    },
];

const LETTER = "\\p{L}\\p{M}";
const NOT_PROSE =
    /\[\[[^\]|]*(?=[|\]])|\]\([^)]*\)|`[^`]*`|(?<![\w-])(?:affiliation|place|lore|being|skill|icon|image)-[a-z0-9]+/gu;

/**
 * The prose of a note: every line but a shortcode or terran_analog line, with
 * link targets, addresses and code spans blanked.
 * @param {string} text
 * @returns {string[]}
 */
export function proseLines(text) {
    return text.split("\n").map((line) => {
        const bare = line.trimStart();
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

test("a retired form inside a longer word is not a sighting", () => {
    assert.deepEqual(sightings("x.md", "Januspath and Vénusiana", ["Janus", "Vénusia"]), []);
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
