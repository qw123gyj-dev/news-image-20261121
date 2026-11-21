// news-image-20261121: a program/v1 entry for make.fun.
// The entry is one image that sums up the world news of Saturday
// 21 November 2026. The image is built ahead of time and held in this
// repository as entry.png; this program's only job is to copy it,
// byte for byte, to the output directory the grader provides.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The program uses the Node 22 standard library only, reads nothing
// outside this repository, makes no network calls, and writes exactly
// one file, so two runs produce identical bytes.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, 'entry.png'), join(outDir, 'entry.png'));

// The copy must be exact: fail loudly rather than hand the grader a short file.
const { size: inSize } = statSync(join(repoDir, 'entry.png'));
const { size: outSize } = statSync(join(outDir, 'entry.png'));
if (inSize !== outSize) throw new Error(`entry.png copy mismatch: ${outSize} of ${inSize} bytes`);
