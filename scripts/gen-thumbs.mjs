/**
 * Generates compressed WebP thumbnails for the photography gallery.
 *
 * For each image in public/images/photography/<album>/
 * this script creates a corresponding WebP in _thumb/ inside the same album folder.
 *
 * Thumbnails are used for the gallery grid (fast loading).
 * Originals are used for the lightbox (full quality on click).
 *
 * Run automatically before every build via the "prebuild" script in package.json.
 * Safe to re-run — skips images whose thumbnail is already up to date.
 */

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const PHOTO_BASE = path.join(process.cwd(), "public/images/photography");
const IMG_RE = /\.(jpg|jpeg|png|gif|webp|avif)$/i;

// Thumbnail settings: max width in pixels and WebP quality (0–100).
const THUMB_WIDTH = 900;
const THUMB_QUALITY = 82;

async function run() {
  const albums = fs
    .readdirSync(PHOTO_BASE, { withFileTypes: true })
    .filter((e) => e.isDirectory() && e.name !== "_thumb");

  let generated = 0;
  let skipped = 0;

  for (const album of albums) {
    const albumDir = path.join(PHOTO_BASE, album.name);
    const thumbDir = path.join(albumDir, "_thumb");
    fs.mkdirSync(thumbDir, { recursive: true });

    const images = fs
      .readdirSync(albumDir)
      .filter((f) => IMG_RE.test(f));

    for (const img of images) {
      const src = path.join(albumDir, img);
      const thumbName = path.parse(img).name + ".webp";
      const dest = path.join(thumbDir, thumbName);

      // Skip if thumbnail exists and is newer than the source image.
      if (fs.existsSync(dest)) {
        const srcMtime = fs.statSync(src).mtimeMs;
        const destMtime = fs.statSync(dest).mtimeMs;
        if (destMtime >= srcMtime) {
          skipped++;
          continue;
        }
      }

      await sharp(src)
        .resize({ width: THUMB_WIDTH, withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY })
        .toFile(dest);

      generated++;
      console.log(`  ✓ ${album.name}/${img} → _thumb/${thumbName}`);
    }
  }

  console.log(
    `\nThumbnails: ${generated} generated, ${skipped} already up to date.`
  );
}

run().catch((err) => {
  console.error("gen-thumbs failed:", err);
  process.exit(1);
});
