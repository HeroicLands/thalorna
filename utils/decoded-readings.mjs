/* Copyright (c) 2026 Tom Rodriguez ("Toasty") — <toasty@heroiclands.org>
 * SPDX-License-Identifier: GPL-3.0-or-later */

/**
 * Readings of a decoding from an encoding with `roundTrip: none`. Where several
 * spellings share a sign, the decoding lists each of them as `[a | b]`.
 */

const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");

/**
 * Whether a decoding admits the source: the source is one of the spellings the
 * decoding lists, choosing one alternative from each `[a | b]`.
 *
 * @param {string} decoded The decoded roman text.
 * @param {string} source The roman text that was encoded.
 * @returns {boolean}
 */
export function admits(decoded, source) {
    const pattern = decoded
        .split(/(\[[^\]]+\])/u)
        .map((part) =>
            /^\[[^\]]+\]$/u.test(part) ?
                `(?:${part.slice(1, -1).split(" | ").map(escapeRegExp).join("|")})`
            :   escapeRegExp(part),
        )
        .join("");
    return new RegExp(`^${pattern}$`, "u").test(source);
}
