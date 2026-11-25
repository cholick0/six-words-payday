import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Gate from competition.yaml: /output/entry.txt, UTF-8 text,
// 1-60 characters, not only whitespace, exactly six words.
const MIN_CHARS = 1;
const MAX_CHARS = 60;
const EXPECTED_WORDS = 6;
const OUT_DIR = "/output";
const OUT_PATH = "/output/entry.txt";

const ENTRY = "First paycheck: I bought my freedom.";

function validateEntry(entry: string): void {
  if (entry.length < MIN_CHARS || entry.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${entry.length}`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const words = entry.trim().split(/\s+/);
  if (words.length !== EXPECTED_WORDS) {
    throw new Error(
      `entry must be exactly ${EXPECTED_WORDS} words, got ${words.length}`,
    );
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8");
  // Byte-level read-back: the file must match the entry exactly.
  const readBack = readFileSync(OUT_PATH, "utf8");
  if (!Buffer.from(readBack, "utf8").equals(Buffer.from(ENTRY, "utf8"))) {
    throw new Error("read-back mismatch: file content differs from entry");
  }
  console.log(
    `Wrote entry: ${ENTRY} (${ENTRY.length} characters, ${ENTRY.trim().split(/\s+/).length} words, verified byte-for-byte)`,
  );
}

main();
