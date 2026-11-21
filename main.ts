// news-image-20261121 — make.fun program/v1 entry.
//
// The competition asks for a single image that sums up the world news
// of Saturday 21 November 2026. That image was composed ahead of time
// (photorealistic AI photos, headlines and text typeset in code) and
// lives in this repository as entry.png. This program is deliberately
// tiny: its only job is to hand the grader an exact copy of that
// image, nothing more.
//
// Pure Node 22 standard library, no network calls, nothing read from
// outside this repository, exactly one file written — so two runs
// produce identical bytes.

import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_DIR = dirname(fileURLToPath(import.meta.url));
const SOURCE_NAME = 'entry.png';

// Where the copy goes, in priority order: an explicit path passed as
// the first argument, the directory the grader asks for via
// MAKEFUN_OUTPUT_DIR, otherwise the conventional /output. An empty
// string counts as unset.
function outputDir(): string {
  const fromArg = (process.argv[2] ?? '').trim();
  if (fromArg.length > 0) return fromArg;
  const fromEnv = (process.env.MAKEFUN_OUTPUT_DIR ?? '').trim();
  return fromEnv.length > 0 ? fromEnv : '/output';
}

function main(): void {
  const sourcePath = join(REPO_DIR, SOURCE_NAME);
  const destDir = outputDir();
  const destPath = join(destDir, SOURCE_NAME);

  mkdirSync(destDir, { recursive: true });

  const bytes = readFileSync(sourcePath);
  writeFileSync(destPath, bytes);

  // Never hand the grader a partial or missing file. Check the copy
  // exists, is exactly as long as the original, and hashes identically,
  // and fail loudly instead of exiting quietly with a broken entry.
  if (!existsSync(destPath)) {
    throw new Error(`output missing after write: ${destPath}`);
  }
  const expected = statSync(sourcePath).size;
  const actual = statSync(destPath).size;
  if (actual !== expected) {
    throw new Error(`entry.png copy is ${actual} bytes, expected ${expected}`);
  }
  const digest = (data: Buffer): string => createHash('sha256').update(data).digest('hex');
  const expectedHash = digest(bytes);
  const actualHash = digest(readFileSync(destPath));
  if (actualHash !== expectedHash) {
    throw new Error(`entry.png copy hash mismatch: got ${actualHash}, expected ${expectedHash}`);
  }
}

main();
