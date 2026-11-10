/*
 * Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import YAML from "yaml";

const root = "assets/content";
function notes(dir = root) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const file = path.join(dir, entry.name);
        if (entry.isDirectory()) return notes(file);
        if (!file.endsWith(".md")) return [];
        const text = fs.readFileSync(file, "utf8");
        const match = text.match(/^---\n([\s\S]*?)\n---\n/);
        if (!match) return [];
        const front = YAML.parse(match[1]);
        return [{ file, text, front, body: text.slice(match[0].length) }];
    });
}
const all = notes();
function note(address) {
    const found = all.find(({ front }) => `${front.type}-${front.shortcode}` === address);
    assert.ok(found, address);
    return found;
}
function publicText(text) {
    return text
        .replace(/^:::secret[^\n]*\n[\s\S]*?^\s*:::\s*$/gm, "")
        .replace(/^#{1,6} [^\n]*\{[^}]*\.secret[^}]*\}[^\n]*\n[\s\S]*$/m, "");
}
function privateIdentity(profile) {
    assert.doesNotMatch(publicText(profile.text), /crimsnldgr|Crimson Ledger/i);
    assert.match(profile.body, /:::secret[^\n]*\n[\s\S]*\[\[affiliation-crimsnldgr\|/);
}
test("the Ledger has a collective head and its named principals have private reciprocal identities", () => {
    const ledger = note("affiliation-crimsnldgr");
    const gov = ledger.front.data.governance;
    assert.equal(gov.model, "council");
    assert.equal(Object.keys(gov.offices)[0], "Council of Principals");
    assert.doesNotMatch(JSON.stringify(gov), /\bBoss\b|Made Member|Hanger-on/);
    const secret = ledger.body.match(/:::secret[^\n]*\n([\s\S]*?)\n:::/)?.[1] ?? "";
    const principals = [...secret.matchAll(/\[\[(being-[^|\]]+)\|([^\]]+)\]\]/g)];
    assert.ok(principals.length >= 2 && principals.length <= 3);
    for (const [, address, name] of principals) {
        assert.ok(!publicText(ledger.text).includes(address));
        assert.ok(!publicText(ledger.text).includes(name));
        privateIdentity(note(address));
    }
});
test("a public Ledger affiliation or identity mention fails the privacy contract", () => {
    const hidden = {
        text: "---\naffiliations: {crimsnldgr: {rank: 3}}\n---\n:::secret\n[[affiliation-crimsnldgr|The Crimson Ledger]]\n:::",
        body: ":::secret\n[[affiliation-crimsnldgr|The Crimson Ledger]]\n:::",
    };
    assert.throws(() => privateIdentity(hidden));
    assert.throws(() => privateIdentity({ ...hidden, text: "A principal of the Crimson Ledger." }));
});
test("the current Dukran is an office holder without a military rank", () => {
    const holders = all.filter(
        ({ front }) =>
            front.type === "being" && front.data?.affiliations?.vylrnmltry?.office === "Dukran",
    );
    assert.equal(holders.length, 1);
    assert.ok(!Object.hasOwn(holders[0].front.data.affiliations.vylrnmltry, "rank"));
    assert.equal(holders[0].front.data.occupation, "Dukran");
    assert.ok(
        note("affiliation-vylrnmltry").body.includes(`[[being-${holders[0].front.shortcode}|`),
    );
});
test("Kentra remains an informal achievement without an invented officer ladder", () => {
    const kentra = note("affiliation-kentra");
    assert.deepEqual(kentra.front.data.governance.offices, {});
    assert.deepEqual(
        kentra.front.data.governance.ranks.map(({ level }) => level),
        [0, 1],
    );
    assert.ok(kentra.front.description);
    assert.match(kentra.body, /\{#present\}/);
    assert.doesNotMatch(
        publicText(kentra.body),
        /They are not hallucinating|The actual reason is the opposite|No one has ever read the files in sequence/,
    );
});
test("the Compact and Academy declare their attested collective heads first", () => {
    assert.equal(
        Object.keys(note("affiliation-auricompct").front.data.governance.offices)[0],
        "Council of Masters",
    );
    assert.equal(
        Object.keys(note("affiliation-panepistmm").front.data.governance.offices)[0],
        "Common Assembly",
    );
});
test("military credit belongs to the banking system and the guild deputy count adds up", () => {
    assert.doesNotMatch(
        note("affiliation-vylrnmltry").text,
        /Tevran script|Tevran Treasury|\b[Aa]n Lusel/,
    );
    const tevran = note("affiliation-tevran").body;
    assert.match(tevran, /eleven provincial deputies/);
    assert.doesNotMatch(tevran, /twelve regional deputies/);
});
test("the senators' betting debts and the last boat ambush stay private", () => {
    assert.doesNotMatch(
        publicText(note("affiliation-zargoi").body),
        /some of the sons now sit|Sons of senatorial houses/,
    );
    assert.doesNotMatch(
        publicText(note("affiliation-yamuzel").body),
        /Commander of the Marines has been told to catch/,
    );
    assert.match(note("affiliation-zargoi").body, /some of the sons now sit/);
    assert.match(note("affiliation-yamuzel").body, /:::secret/);
});
test("the timber price and the missing warehouse record have one current account", () => {
    assert.doesNotMatch(
        note("affiliation-haduruni").body,
        /agree a price for each trunk|hear her price/,
    );
    assert.doesNotMatch(note("affiliation-hitusuni").body, /Pazasan Khidizum has the record/);
    assert.match(note("affiliation-hillcouncil").body, /prices hold for a year/);
});

test("the Unpaid Fort has its current commander and the Merchantry keeps collective direction", () => {
    const command = note("affiliation-cmmndnpdfrt");
    assert.equal(Object.keys(command.front.data.governance.offices)[0], "Commander");
    assert.ok(!command.front.tags.includes("draft"));
    const holders = all.filter(
        ({ front }) =>
            front.type === "being" && front.data?.affiliations?.cmmndnpdfrt?.office === "Commander",
    );
    assert.equal(holders.length, 1);
    assert.equal(holders[0].front.data.affiliations.cmmndnpdfrt.rank, 3);
    assert.match(command.body, /\{#present\}/);
    assert.equal(
        Object.keys(note("affiliation-mrchntryvl").front.data.governance.offices)[0],
        "Council of Brokers",
    );
});
