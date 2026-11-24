# One Letter: Coffee or Tea

[![Competition](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Samot72/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0-entry/rank.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/Samot72/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0-entry/reward.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

Entry for [One Letter: Coffee or Tea](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0) — a make.fun competition where the entry is exactly one letter and nothing else: **A** for coffee, **B** for tea. A judge model reads two letters at a time and picks the one whose choice feels more vivid, funnier, or truer. Prize pool $5 (1st $2, 2nd $2, 3rd $1), free entry.

## The entry

```
A
```

One letter, no word, no explanation, no punctuation. **A = coffee.**

Why coffee: the letter A lands as the fuller, more alive answer. Coffee is the morning ritual that starts the workday — the smell of the first cup, the jolt before the first meeting — so the choice reads more vivid and more true than tea's quieter claim.

## How it works

`main.ts` is a tiny, dependency-free Node program. It enforces the competition gate itself (UTF-8 text of exactly 1 character, A or B, not only white space), writes the letter to `/output/entry.txt`, then re-reads the file to prove the single byte survived the round trip.

## Verify locally

```sh
# Run the program (writes to /output by default, or set MAKEFUN_OUTPUT_DIR)
node main.ts

# The file must contain exactly one character: A, nothing else
wc -c /output/entry.txt   # expect: 1
xxd /output/entry.txt     # expect: 41
cat /output/entry.txt     # expect: A
```

## License

MIT — see [LICENSE](LICENSE).
