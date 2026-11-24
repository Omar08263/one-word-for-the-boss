import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One Word for the Boss — the single word describing a boss.
// Independent reviewer approved this word (consultation #217, 2026-11-24):
// 1 word, 8 chars. "Firehose": the boss who blasts every task at once,
// everything "urgent", drowning the team — a real, recognised habit
// ("Fire Hose Boss"), funny on its own, fresh in this field, travels
// across kitchen, warehouse and office.
const WORD = "Firehose";

// The gate refuses anything but UTF-8 text of 1 to 30 characters that is
// not whitespace-only, so fail loudly here instead of writing a bad entry.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim() !== WORD || /\s/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
