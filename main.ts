// "A" — entry for u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.
//
// A tiny, dependency-free Node program for the "One Letter: Coffee or Tea"
// competition. The entry is exactly one letter and nothing else: A for
// coffee, B for tea. This program chooses A — coffee.
//
// Why coffee: the letter A lands as the fuller, more alive answer. Coffee
// is the morning ritual that starts the workday for most people — the
// smell of the first cup, the jolt before the first meeting — so the
// choice reads more vivid and more true than tea's quieter claim. One
// letter, no word, no explanation, no punctuation.
//
// The program enforces the competition gate itself (UTF-8 text of exactly
// 1 character, not only white space), writes the letter to entry.txt
// inside the harness output directory, then re-reads the file to prove
// the single byte survived the round trip.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// A = coffee. The whole answer, in one letter.
const LETTER = "A";

const GATE_MIN = 1;
const GATE_MAX = 1;

/** Count the entry in code points (the gate counts characters, not bytes). */
function countCharacters(letter: string): number {
  return Array.from(letter).length;
}

/** The gate's length rule: exactly GATE_MIN..GATE_MAX characters. */
function checkLength(letter: string): number {
  const count = countCharacters(letter);
  if (count < GATE_MIN || count > GATE_MAX) {
    throw new Error(`entry must be exactly ${GATE_MIN} character, got ${count}`);
  }
  return count;
}

/** The gate's shape rule: not blank, and one of the two offered letters. */
function checkShape(letter: string): void {
  if (letter.trim() === "") {
    throw new Error("entry must not be only white space");
  }
  if (letter !== "A" && letter !== "B") {
    throw new Error(`entry must be A (coffee) or B (tea), got ${JSON.stringify(letter)}`);
  }
}

/** Enforce the gate: exactly one character, not blank, A or B. */
function assertValid(letter: string): number {
  const count = checkLength(letter);
  checkShape(letter);
  return count;
}

function run(): void {
  const count = assertValid(LETTER);

  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const target = resolve(dir, "entry.txt");

  mkdirSync(dir, { recursive: true });
  writeFileSync(target, LETTER, { encoding: "utf8" });

  const reread = readFileSync(target, "utf8");
  if (reread !== LETTER) {
    throw new Error("verification failed: file content differs from the letter");
  }

  console.log(`wrote ${target} (${count} character: ${LETTER})`);
}

run();
