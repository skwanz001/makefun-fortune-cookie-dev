// Fortune Cookie Wisdom for Developers
// make.fun bounty: u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// Writes one original fortune-cookie line for a software developer to
// /output/entry.txt. Node 22.18+ (grader runs Node 22.23.4), stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The bug hides not in the code you suspect, but in the code you trust.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters,
// not only white space, exactly one line. Fail loudly instead of shipping
// an invalid entry.
if (FORTUNE.length < 1 || FORTUNE.length > 120) {
  throw new Error(`Fortune is ${FORTUNE.length} characters, must be 1-120.`);
}
if (FORTUNE.trim().length === 0 || FORTUNE.includes("\n")) {
  throw new Error("Fortune must be a single non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
