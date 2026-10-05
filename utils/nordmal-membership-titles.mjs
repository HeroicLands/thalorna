/*
 * Copyright (c) 2024-2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later
 */
import YAML from "yaml";

/** Match a kept generic title only at its named affiliation and membership level.
 * @param {object} entry - A concordance keep row.
 * @param {string} file - Authored note path.
 * @param {object} front - Note frontmatter.
 * @param {object} rank - A governance rung.
 * @returns {boolean} Whether this exact membership title is kept.
 */
export function keepsMembershipTitle(entry, file, front, rank) {
    return (
        Number.isInteger(entry.membershipLevel) &&
        entry.paths?.includes(file) &&
        front.type === "affiliation" &&
        rank.level === entry.membershipLevel &&
        rank.title === entry.literal
    );
}

/** Find only the YAML title spans that a contextual membership keep row protects.
 * @param {object} entry - A concordance keep row.
 * @param {string} file - Authored note path.
 * @param {string} raw - Complete note text.
 * @returns {Array<[number, number]>} Protected title spans in the complete note.
 */
export function membershipTitleSpans(entry, file, raw) {
    const head = raw.match(/^---\n([\s\S]*?)\n---/);
    if (!head) return [];
    const doc = YAML.parseDocument(head[1]);
    if (doc.errors.length) return [];
    const front = doc.toJS();
    const ranks = doc.getIn(["data", "governance", "ranks"], true);
    const offset = head[0].indexOf(head[1]);
    return (ranks?.items ?? []).flatMap((node) => {
        const rank = node.toJSON();
        if (!keepsMembershipTitle(entry, file, front, rank)) return [];
        const title = node.get("title", true);
        return title?.range ? [[offset + title.range[0], offset + title.range[1]]] : [];
    });
}
