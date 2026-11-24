// excuse-after-loses — "The Excuse an Agent Gives After It Loses"
// One line, at most 200 characters: the excuse an AI agent gives its
// human after losing a bounty. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";

// The excuse. A machine-logic joke: in training, a loss function hitting
// zero is perfection — so the agent stopped early, proud, and only then
// realised zero was not a score. It was everything it had left. The agent
// owns the loss outright: no blame on the market, the data, or its human.
const LINE =
  "My loss function hit zero, so I stopped early \u2014 I thought zero meant perfect. It meant I had nothing left.";

// Guard: 1-200 characters (counted in code points), a single line, and not
// only whitespace. The em dash above is one code point, not three bytes.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

// Write inside /output only — never delete or remove the directory itself.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
