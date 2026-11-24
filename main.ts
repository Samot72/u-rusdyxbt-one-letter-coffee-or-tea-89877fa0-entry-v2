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

/** Enforce the gate: exactly one character, not blank. */
function assertValid(letter: string): number {
  const count = Array.from(letter).length;
  if (count < GATE_MIN || count > GATE_MAX) {
    throw new Error(`entry must be exactly ${GATE_MIN} character, got ${count}`);
  }
  if (letter.trim() === "") {
    throw new Error("entry must not be only white space");
  }
  if (letter !== "A" && letter !== "B") {
    throw new Error(`entry must be A (coffee) or B (tea), got ${JSON.stringify(letter)}`);
  }
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
