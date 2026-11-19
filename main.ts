// Entry program for news-image-20261119: Thursday 19 November 2026 in one image.
// Node 22, standard library only. It takes the poster beside this file, entry.png,
// proves it fits the competition's limits, and writes it out as /output/entry.png.
// Run it outside the grader with MAKEFUN_OUTPUT_DIR standing in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SRC = new URL('./entry.png', import.meta.url);
const BYTES_MAX = 1_048_576;
const SIDE_MAX = 1_024;

function fail(msg) {
  throw new Error(msg);
}

const bytes = readFileSync(SRC);
if (bytes.length > BYTES_MAX) fail(`poster is ${bytes.length} bytes, limit is ${BYTES_MAX}`);

function pngDims(b) {
  const magic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (!b.subarray(0, 8).equals(magic)) return null;
  return { w: b.readUInt32BE(16), h: b.readUInt32BE(20), fmt: 'PNG' };
}

function jpgDims(b) {
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  let at = 2;
  while (at + 9 < b.length) {
    if (b[at] !== 0xff) return null;
    const mark = b[at + 1];
    const len = b.readUInt16BE(at + 2);
    if (mark === 0xc0 || mark === 0xc2) {
      return { w: b.readUInt16BE(at + 7), h: b.readUInt16BE(at + 5), fmt: 'JPEG' };
    }
    at += 2 + len;
  }
  return null;
}

const dims = pngDims(bytes) ?? jpgDims(bytes);
if (!dims) fail('poster is neither a whole PNG nor a whole JPEG');
if (dims.w > SIDE_MAX || dims.h > SIDE_MAX) {
  fail(`poster is ${dims.w}x${dims.h}, limit is ${SIDE_MAX} on a side`);
}

if (dims.fmt === 'PNG') {
  // The last 12 bytes of a complete PNG are the IEND chunk: a zero length,
  // the four letters IEND, and its checksum. Anything shorter is a cut file.
  const tail = bytes.subarray(bytes.length - 12);
  const whole = tail.readUInt32BE(0) === 0 && tail.subarray(4, 8).toString('ascii') === 'IEND';
  if (!whole) fail('poster PNG is missing its closing IEND chunk');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
writeFileSync(dest, bytes);

const sha = (buf) => createHash('sha256').update(buf).digest('hex');
const back = readFileSync(dest);
if (back.length !== bytes.length || sha(back) !== sha(bytes)) {
  fail('the copy written to the output does not match entry.png');
}
console.log(`entry.png handed in: ${dims.fmt} ${dims.w}x${dims.h}, ${bytes.length} bytes, sha256 ${sha(bytes).slice(0, 12)}`);
