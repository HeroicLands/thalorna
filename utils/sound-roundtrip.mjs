/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/** Explicit, lexicon-independent reversibility diagnostics for sound scripts. */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import { parseAddress, isAddressTuple } from "@heroiclands/package-build/engine/address";
import YAML from "yaml";
import { noteIndex, CONTENT_DIR, parseFrontmatter } from "./note-index.mjs";
import {
    positionOfFrontmatterPath,
    splitFrontmatter,
    positionOfYamlPath,
    formatDiagnostic,
} from "@heroiclands/package-build/engine/diagnostics";
import { runContext } from "@heroiclands/package-build/engine/content-scripts";
import { encodingFor } from "@heroiclands/package-build/engine/encoding-lexicon";
import { encodeWithLanguage } from "@heroiclands/package-build/engine/encoding-language";
import { decodeText } from "@heroiclands/package-build/engine/encoding";
import { derivedForms } from "@heroiclands/package-build/engine/word-forms";
import { validateGuideSounds } from "@heroiclands/package-build/engine/encoding-standard";

const SOUND = new Set([
    "skill-semrnscrpt",
    "skill-helnkscrpt",
    "skill-qalzscrscrpt",
    "skill-drthrkscrpt",
    "skill-clthndscrpt",
    "skill-thuravarkscript",
    "skill-vdykshrscrpt",
    "skill-thrvrknscrpt",
    "skill-merazanscrpt",
    "skill-okhthztscrpt",
    "skill-thrvrdhscrpt",
]);
const LOGOGRAPH = new Set(["skill-khelthzscrpt", "skill-tengchouscript", "skill-chlxplmscrpt"]);
const EXTRA_FONTS = { "skill-chlxplmscrpt": ["chalish-pilam-common", "chalish-pilam-ceremonial"] };
export const REQUIRED_ENCODINGS = [
    ["doc-aeleveldikkoenc", "skill-aelendlng", "skill-clthndscrpt", "veldikko"],
    ["doc-atarqalezuenc", "skill-atarzadilng", "skill-qalzscrscrpt", "qalezu-hand"],
    ["doc-bethhelonikaenc", "skill-bethunlng", "skill-helnkscrpt", "helonika-book"],
    ["doc-bizahelonikaenc", "skill-byzarnlng", "skill-helnkscrpt", "helonika-book"],
    ["doc-dunhqalezuenc", "skill-dunharlng", "skill-qalzscrscrpt", "qalezu-hand"],
    ["doc-aelwsemaronenc", "skill-aelwthlng", "skill-semrnscrpt", "semaron-kuriale"],
    ["doc-elavsemaronenc", "skill-elvndrlng", "skill-semrnscrpt", "semaron-kuriale"],
    ["doc-helohelonikaenc", "skill-helonclng", "skill-helnkscrpt", "helonika-book"],
    ["doc-khazpirzathcarvedenc", "skill-khazarlng", "skill-drthrkscrpt", "pirzath-carved"],
    ["doc-khazpirzathenc", "skill-khazarlng", "skill-drthrkscrpt", "pirzath-hand"],
    ["doc-khelqalezuenc", "skill-khelathlng", "skill-qalzscrscrpt", "qalezu-hand"],
    ["doc-nordthuravarkenc", "skill-nordmalng", "skill-thuravarkscript", "thuravark-carved"],
    ["doc-nyalqalezuenc", "skill-nyalbnlng", "skill-qalzscrscrpt", "qalezu-hand"],
    ["doc-provsemaronenc", "skill-provnzlng", "skill-semrnscrpt", "semaron-kuriale"],
    ["doc-senaveldikkoenc", "skill-senalilng", "skill-clthndscrpt", "veldikko"],
    ["doc-tarvsemaronenc", "skill-tarvenlng", "skill-semrnscrpt", "semaron-kuriale"],
    ["doc-valthelonikaenc", "skill-valtarlng", "skill-helnkscrpt", "helonika-book"],
    ["doc-varosemaronenc", "skill-varokhlng", "skill-semrnscrpt", "semaron-kuriale"],
    ["doc-vedyvedyaksharaenc", "skill-vedyarlng", "skill-vdykshrscrpt", "vedyakshara-classical"],
    ["doc-velthelonikaenc", "skill-velanthlng", "skill-helnkscrpt", "helonika-book"],
    ["doc-vylsemaronenc", "skill-vylarilng", "skill-semrnscrpt", "semaron-kuriale"],
];
const REQUIRED = [
    ["skill-valtarlng", "skill-semrnscrpt"],
    ["skill-vylarilng", "skill-thrvrknscrpt"],
    ["skill-taruzelilng", "skill-merazanscrpt"],
    ["skill-valtarlng", "skill-merazanscrpt"],
    ["skill-okharclng", "skill-okhthztscrpt"],
    ["skill-aelendlng", "skill-thrvrdhscrpt"],
];
const address = (record) => `${record.type}-${record.shortcode}`;
const list = (value) => (Array.isArray(value) ? value : []);
const isMap = (value) => value && typeof value === "object" && !Array.isArray(value);

function location(record, keys, message) {
    const raw = record?.raw ?? "";
    const pos = positionOfFrontmatterPath(raw, keys);
    if (pos.line && pos.column) {
        const line = raw.split("\n")[pos.line - 1] ?? "";
        pos.column = [...line.slice(0, pos.column - 1)].length + 1;
    }
    return {
        file:
            typeof record?.file === "string" ?
                record.file
            :   (record?.file?.path ?? "sound-roundtrip"),
        ...(pos.line ? { line: pos.line } : {}),
        ...(pos.line && pos.column ? { column: pos.column } : {}),
        message:
            pos.line ? message : `${message} (source path ${keys.join(".")} could not be located)`,
    };
}

/** Collect each authored occurrence and the engine's derived forms. */
export function collectRoundtripCases({ config, records }) {
    const ctx = runContext(config, records);
    const byAddress = new Map(records.map((record) => [address(record), record]));
    const cases = [],
        findings = [],
        zeroAffixes = [];
    for (const [language, entry] of Object.entries(config.languages ?? {})) {
        if (!entry.note) continue;
        const own = ctx.languageRecords.get(language);
        if (!own) {
            findings.push({
                file: "package-build.config.yaml",
                ...positionOfYamlPath(
                    config.configSourceRaw ?? "",
                    ["languages", language, "note"],
                    { key: true },
                ),
                message: `Configured language ${language} has no language note ${entry.note}`,
            });
            continue;
        }
        const chain = [],
            seen = new Set();
        for (let record = own; record && !seen.has(address(record));) {
            chain.push(record);
            seen.add(address(record));
            const family = record.data?.family;
            const parent = typeof family === "string" ? family : family?.address;
            const parsed =
                parent &&
                parseAddress(
                    parent,
                    {
                        package: config.contentPackage,
                        system: "note",
                        type: "skill",
                        types: new Set(["skill"]),
                    },
                    { declared: true },
                );
            const key =
                isAddressTuple(parsed) && parsed.package === config.contentPackage ?
                    `${parsed.type}-${parsed.shortcode}`
                :   parent;
            record = parent ? byAddress.get(key) : undefined;
            if (parent && !record)
                findings.push(
                    location(
                        chain.at(-1),
                        ["data", "family"],
                        `Language family ${parent} is missing`,
                    ),
                );
        }
        const sources = new Map();
        for (const record of chain) {
            const local = new Map();
            list(record.data?.words).forEach((word, i) => {
                if (typeof word?.form !== "string") return;
                const key = word.form.normalize("NFC");
                if (!sources.has(key)) {
                    if (!local.has(key)) local.set(key, []);
                    local.get(key).push({ record, word, i });
                }
            });
            for (const [key, rows] of local) sources.set(key, rows);
        }
        const add = (record, text, keys, kind) => {
            if (typeof text === "string" && text.length)
                cases.push({ language, text, noteAddress: address(record), keys, kind });
        };
        for (const rows of sources.values())
            for (const { record, word, i } of rows) {
                const base = ["data", "words", i];
                add(record, word.form, [...base, "form"], "word");
                for (const field of ["variants", "built"])
                    list(word[field]).forEach((value, j) => {
                        if (typeof value === "string")
                            add(record, value, [...base, field, j], field);
                        else add(record, value?.form, [...base, field, j, "form"], field);
                    });
                add(record, word.plural, [...base, "plural"], "plural");
            }
        const lexicon = ctx.lexicons.get(language);
        const occurrences = new Map();
        const used = new Map();
        for (const word of list(lexicon?.data?.words)) {
            if (typeof word?.form !== "string") continue;
            const key = word.form.normalize("NFC");
            const index = used.get(key) ?? 0;
            occurrences.set(word, sources.get(key)?.[index]);
            used.set(key, index + 1);
        }
        for (const item of derivedForms(lexicon?.data)) {
            const match = occurrences.get(item.word);
            if (match) add(match.record, item.form, ["data", "words", match.i, "form"], "derived");
            else
                findings.push(
                    location(
                        own,
                        ["data", "words"],
                        `Cannot locate source of derived form ${item.form}`,
                    ),
                );
        }
        const data = own.data ?? {};
        list(data.register).forEach((row, i) => {
            if (row?.tongue !== "translation")
                add(own, row?.name, ["data", "register", i, "name"], "register");
        });
        const names = (value, keys) => {
            if (typeof value === "string") add(own, value, keys, "name");
            else if (Array.isArray(value)) value.forEach((item, i) => names(item, [...keys, i]));
            else if (isMap(value))
                for (const [key, item] of Object.entries(value))
                    if (!["en", "pattern", "metadata"].includes(key)) names(item, [...keys, key]);
        };
        names(data.names, ["data", "names"]);
        list(data.elements).forEach((element, i) => {
            add(own, element?.form, ["data", "elements", i, "form"], "element");
            for (const field of ["variants", "examples"])
                list(element?.[field]).forEach((text, j) =>
                    add(own, text, ["data", "elements", i, field, j], "element"),
                );
        });
        list(data.affixes).forEach((affix, i) => {
            if (affix?.zero === true) {
                zeroAffixes.push({
                    language,
                    noteAddress: address(own),
                    keys: ["data", "affixes", i],
                });
                return;
            }
            add(own, affix?.form, ["data", "affixes", i, "form"], "affix");
            if (typeof affix?.front === "string")
                add(own, affix.front, ["data", "affixes", i, "front"], "affix");
            else if (Array.isArray(affix?.front))
                affix.front.forEach((text, j) =>
                    add(own, text, ["data", "affixes", i, "front", j], "affix"),
                );
        });
    }
    return { cases, findings, zeroAffixes };
}

/** Check each selected font against every occurrence, retaining direct decoder output. */
export function checkSoundRoundtrips({ config, records, context, cases }) {
    const ctx = context ?? runContext(config, records);
    const collected =
        cases ?
            { cases, findings: [], zeroAffixes: [] }
        :   collectRoundtripCases({ config, records });
    const findings = [...collected.findings, ...(ctx.encodingFindings ?? [])];
    const byAddress = new Map(records.map((record) => [address(record), record]));
    const scripts = records.filter(
        (record) => record.type === "skill" && record.subType === "script",
    );
    const fonts = new Map();
    for (const script of scripts)
        for (const font of new Set([
            ...list(script.data?.script?.fonts),
            ...list(EXTRA_FONTS[address(script)]),
        ])) {
            if (!fonts.has(font)) fonts.set(font, []);
            fonts.get(font).push(script);
        }
    const guide = byAddress.get("doc-prnncthlrn");
    const guideSounds = guide?.data?.sounds?.letters;
    if (!Array.isArray(guideSounds) || !guideSounds.length)
        findings.push(
            location(guide, ["data", "sounds", "letters"], "The shared sound inventory is missing"),
        );
    else
        for (const problem of validateGuideSounds(guideSounds))
            findings.push(location(guide, ["data", "sounds", "letters"], problem));
    const encodings = records.filter(
        (r) =>
            r.type === "doc" &&
            (Object.hasOwn(r.data ?? {}, "mappings") || Object.hasOwn(r.data ?? {}, "rules")),
    );
    const excluded = [],
        counts = [],
        covered = new Set();
    for (const record of encodings) {
        const { font, language } = record.data ?? {};
        const matches = fonts.get(font) ?? [];
        if (matches.length !== 1 || ![...SOUND, ...LOGOGRAPH].includes(address(matches[0]))) {
            findings.push(
                location(
                    record,
                    ["data", "font"],
                    `Font ${font} has no unique classified script relationship`,
                ),
            );
            continue;
        }
        const script = address(matches[0]);
        if (language === "zxx" || LOGOGRAPH.has(script)) {
            excluded.push({
                noteAddress: address(record),
                reason: language === "zxx" ? "literal" : "logographic",
            });
            continue;
        }
        const languageRecord = ctx.languageRecords.get(language);
        if (!languageRecord) {
            findings.push(
                location(
                    record,
                    ["data", "language"],
                    `Language ${language} has no configured note`,
                ),
            );
            continue;
        }
        covered.add(`${address(languageRecord)}\0${script}`);
        const selected = encodingFor(ctx, { enc: address(record), lang: language, font });
        const group = collected.cases.filter((item) => item.language === language);
        const count = {
            noteAddress: address(record),
            language,
            font,
            cases: group.length,
            failed: selected && group.length ? 0 : null,
        };
        counts.push(count);
        if (!group.length)
            findings.push(
                location(languageRecord, ["data", "words"], `No lexical cases for ${language}`),
            );
        if (
            record.data?.rules?.roundTrip !== "exact" &&
            record.data?.rules?.roundTrip !== undefined
        )
            findings.push(
                location(
                    record,
                    ["data", "rules", "roundTrip"],
                    "Sound encoding does not declare exact round trip",
                ),
            );
        const sounds = languageRecord.data?.sounds?.letters;
        if (!Array.isArray(sounds) || !sounds.length)
            findings.push(
                location(
                    languageRecord,
                    ["data", "sounds", "letters"],
                    "Language sound inventory is missing",
                ),
            );
        else {
            for (const problem of validateGuideSounds(sounds))
                findings.push(location(languageRecord, ["data", "sounds", "letters"], problem));
            const guideIpa = new Set(
                list(guideSounds).map((row) => (typeof row === "object" ? row.ipa : row)),
            );
            for (const [index, sound] of sounds.entries()) {
                const key = typeof sound === "object" ? sound.ipa : sound;
                if (
                    !guideIpa.has(key) &&
                    !list(guideSounds).some((row) => row?.letters?.includes(key))
                )
                    findings.push(
                        location(
                            languageRecord,
                            ["data", "sounds", "letters", index],
                            `Sound ${key} is absent from the guide`,
                        ),
                    );
            }
        }
        if (!selected) {
            findings.push(
                location(record, ["data", "font"], "Encoding could not be compiled or selected"),
            );
            continue;
        }
        for (const item of group) {
            try {
                const encoded = encodeWithLanguage(selected.encoding, item.text, {
                    font: selected.font,
                    lexicon: selected.lexicon,
                });
                if (encoded.findings.length)
                    throw new Error(encoded.findings.map((f) => f.message).join("; "));
                const decoded = decodeText(selected.encoding, encoded.text, {
                    font: selected.font,
                });
                if (decoded.normalize("NFC") !== item.text.normalize("NFC"))
                    throw new Error(
                        `decoded ${JSON.stringify(decoded)} instead of ${JSON.stringify(item.text)}`,
                    );
            } catch (error) {
                count.failed++;
                findings.push(
                    location(
                        byAddress.get(item.noteAddress),
                        item.keys,
                        `${address(record)}: ${error.message}`,
                    ),
                );
            }
        }
    }
    const coverage = [];
    for (const [document, language, script, font] of REQUIRED_ENCODINGS) {
        const record = byAddress.get(document);
        const actualLanguage = record && ctx.languageRecords.get(record.data?.language);
        const relation = fonts.get(font) ?? [];
        const present = Boolean(
            record &&
            encodings.includes(record) &&
            record.data?.font === font &&
            actualLanguage &&
            address(actualLanguage) === language &&
            relation.length === 1 &&
            address(relation[0]) === script,
        );
        coverage.push({ document, language, script, font, covered: present });
        if (!present)
            findings.push(
                location(
                    record ?? byAddress.get(language) ?? byAddress.get(script),
                    record ? ["data"] : ["data", "script"],
                    `Missing encoding coverage ${document}: ${language} / ${script} / ${font}`,
                ),
            );
    }
    for (const [language, script] of REQUIRED) {
        coverage.push({ language, script, covered: covered.has(`${language}\0${script}`) });
        if (!byAddress.has(language))
            findings.push(location(undefined, [], `Required language ${language} is missing`));
        if (!byAddress.has(script))
            findings.push(location(undefined, [], `Required script ${script} is missing`));
        if (!covered.has(`${language}\0${script}`))
            findings.push(
                location(
                    byAddress.get(script),
                    ["data", "script"],
                    `Missing encoding association ${language} / ${script}`,
                ),
            );
    }
    return { counts, findings, excluded, coverage, zeroAffixes: collected.zeroAffixes };
}

function loadRecords(root) {
    const index = noteIndex(root);
    const records = [...index.byFile.keys()].map((file) => ({
        ...index.frontmatter.get(file),
        file,
        raw: fs.readFileSync(path.join(root, file), "utf8"),
        package: "thalorna",
        system: "note",
    }));
    const errors = [];
    for (const entry of fs.readdirSync(path.join(root, CONTENT_DIR), { recursive: true }).sort()) {
        if (!entry.endsWith(".md")) continue;
        const file = path.join(CONTENT_DIR, entry);
        if (index.byFile.has(file)) continue;
        const raw = fs.readFileSync(path.join(root, file), "utf8");
        if (splitFrontmatter(raw) && !parseFrontmatter(raw))
            errors.push({
                file,
                message: "Malformed frontmatter prevents coverage",
            });
    }
    return { records, errors };
}

/** Save every diagnostic as one JSON object per line. */
export function writeFindingReport(root, findings) {
    const directory = path.join(root, "build", "sound-report");
    fs.mkdirSync(directory, { recursive: true });
    const file = path.join(directory, "findings.jsonl");
    const fd = fs.openSync(file, "w");
    try {
        for (const finding of findings) fs.writeFileSync(fd, `${JSON.stringify(finding)}\n`);
    } finally {
        fs.closeSync(fd);
    }
    return file;
}

export function main(argv) {
    if (argv.length === 1 && argv[0] === "--help") {
        console.log(
            "Usage: node utils/sound-roundtrip.mjs [--root DIRECTORY]\n--root defaults to the current directory. Exit: 0 success, 1 findings or error, 2 invalid arguments.",
        );
        return 0;
    }
    if (
        argv.length &&
        (argv.length !== 2 || argv[0] !== "--root" || !argv[1] || argv[1].startsWith("-"))
    ) {
        console.error("Usage: node utils/sound-roundtrip.mjs [--root DIRECTORY]");
        return 2;
    }
    const root = path.resolve(argv[1] ?? ".");
    let reportWritten = false;
    try {
        const configFile = path.join(root, "package-build.config.yaml");
        let configSourceRaw, parsedConfig;
        try {
            configSourceRaw = fs.readFileSync(configFile, "utf8");
            parsedConfig = YAML.parse(configSourceRaw);
        } catch (error) {
            const position = error.linePos?.[0] ?? {};
            throw Object.assign(new Error(error.message), {
                diagnostic: { file: configFile, line: position.line, column: position.col },
            });
        }
        const config = { ...parsedConfig, rootDir: root, configSourceRaw };
        const { records, errors } = loadRecords(root);
        const revision = execFileSync("git", ["rev-parse", "HEAD"], {
            cwd: root,
            encoding: "utf8",
        }).trim();
        const versions = ["package-build", "fonts"].map((name) => {
            const manifest = JSON.parse(
                fs.readFileSync(
                    path.join(root, "node_modules", "@heroiclands", name, "package.json"),
                    "utf8",
                ),
            );
            return `${name} ${manifest.version}`;
        });
        console.log(`Revision: ${revision}; ${versions.join("; ")}`);
        const result = checkSoundRoundtrips({ config, records });
        const findings = [...errors, ...result.findings];
        writeFindingReport(root, findings);
        reportWritten = true;
        if (findings.length > 5000)
            console.error(
                `Console limited to 5000 of ${findings.length} findings; the complete report is build/sound-report/findings.jsonl`,
            );
        for (const f of findings.slice(0, 5000))
            console.error(formatDiagnostic({ ...f, severity: "error" }));
        for (const row of result.counts)
            console.log(
                `${row.noteAddress} ${row.language} ${row.font}: ${row.cases} cases, ${row.failed === null ? "not evaluated" : `${row.failed} failed`}`,
            );
        for (const row of result.coverage)
            console.log(
                `${row.document ? `${row.document} / ${row.font}: ` : ""}${row.language} / ${row.script}: ${row.covered ? "covered" : "missing"}`,
            );
        for (const row of result.excluded)
            console.log(`${row.noteAddress}: excluded ${row.reason}`);
        console.log(
            `Encodings: ${result.counts.length}; excluded: ${result.excluded.length}; zero affixes: ${result.zeroAffixes.length}; findings: ${errors.length + result.findings.length}`,
        );
        return errors.length || result.findings.length ? 1 : 0;
    } catch (error) {
        const finding = { ...(error?.diagnostic ?? {}), message: String(error?.message ?? error) };
        if (!reportWritten) {
            try {
                writeFindingReport(root, [finding]);
            } catch (reportError) {
                console.error(
                    formatDiagnostic({
                        severity: "error",
                        message: `Cannot write findings report: ${reportError.message}`,
                    }),
                );
            }
        }
        console.error(formatDiagnostic({ ...finding, severity: "error" }));
        return 1;
    }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
    process.exitCode = main(process.argv.slice(2));
