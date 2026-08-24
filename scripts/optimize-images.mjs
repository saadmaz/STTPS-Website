import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const ASSETS_DIR = path.join(import.meta.dirname, "..", "src", "assets");

const TARGETS = {
  "hero.jpg": [640, 1024, 1920],
  "tank-sudda.jpg": [640, 1024, 1400],
  "team-sudda.jpg": [640, 1024, 1400],
  "polish-station.jpg": [640, 1024, 1400],
  "stopwash.jpg": [640, 1024, 1400],
};

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const [file, widths] of Object.entries(TARGETS)) {
    const srcPath = path.join(ASSETS_DIR, file);
    const before = (await stat(srcPath)).size;
    totalBefore += before;

    const base = file.replace(/\.jpg$/, "");
    let afterForFile = 0;

    for (const width of widths) {
      const outPath = path.join(ASSETS_DIR, `${base}-${width}.webp`);
      await sharp(srcPath).resize({ width }).webp({ quality: 80 }).toFile(outPath);
      const size = (await stat(outPath)).size;
      afterForFile += size;
      console.log(`${base}-${width}.webp`, (size / 1024).toFixed(1), "kB");
    }

    totalAfter += afterForFile;
    console.log(
      `${file}: ${(before / 1024).toFixed(1)} kB -> ${widths.length} webp variants totaling ${(afterForFile / 1024).toFixed(1)} kB\n`,
    );
  }

  console.log("---");
  console.log("Total original JPG weight:", (totalBefore / 1024).toFixed(1), "kB");
  console.log(
    "Total generated WebP weight (all variants combined):",
    (totalAfter / 1024).toFixed(1),
    "kB",
  );
}

main();
