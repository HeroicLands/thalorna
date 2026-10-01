/**
 * This repository's Prettier configuration — the shared one, re-exported.
 *
 * `content-build format` applies the shared options directly, so the lint chain
 * needs no config file. Everything else does. Prettier's editor integrations
 * and a bare `npx prettier` run resolve a *config file* and silently fall back
 * to Prettier's own defaults when they find none, which means `printWidth: 80`
 * against a project that formats at 100 — wide enough to explode every item
 * entry authored in the one-line flow form, which the lint chain then puts
 * back, the two tools taking turns rewriting the same lines.
 *
 * So this file exists to make every route to Prettier — the toolchain, the
 * editor, the command line — resolve the same options.
 *
 * @type {import("prettier").Config}
 */
export { default } from "@heroiclands/package-build/prettier";
