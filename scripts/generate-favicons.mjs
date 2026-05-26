/**
 * Génère favicon / icon / apple-icon à partir du logo (logo plus grand, moins de marge).
 * Usage: node scripts/generate-favicons.mjs
 */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public", "image", "logo.PNG");
const bg = { r: 247, g: 244, b: 239, alpha: 1 }; // #F7F4EF — charte

/** Part du canvas occupée par le logo (plus élevé = favicon plus « gros ») */
const LOGO_FILL = 0.96;

async function trimmedLogoBuffer() {
  return sharp(logoPath).trim({ threshold: 12 }).png().toBuffer();
}

async function renderIcon(size, outPath) {
  const trimmed = await trimmedLogoBuffer();
  const inner = Math.round(size * LOGO_FILL);
  const resized = await sharp(trimmed)
    .resize(inner, inner, {
      fit: "inside",
      withoutEnlargement: false,
    })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: bg,
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(outPath);

  console.log(`✓ ${outPath} (${size}×${size})`);
}

async function renderIco() {
  const trimmed = await trimmedLogoBuffer();
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(async (size) => {
      const inner = Math.round(size * LOGO_FILL);
      const resized = await sharp(trimmed)
        .resize(inner, inner, { fit: "inside", withoutEnlargement: false })
        .toBuffer();
      return sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: bg,
        },
      })
        .composite([{ input: resized, gravity: "center" }])
        .png()
        .toBuffer();
    })
  );

  // ICO minimal : on écrit le PNG 32px comme favicon.ico (Windows accepte souvent PNG-in-ICO)
  // sharp ne génère pas ICO nativement — on garde le 32px en .ico via copie PNG renommée
  // Next.js utilise aussi icon.png ; favicon.ico = meilleur 32px
  writeFileSync(join(root, "app", "favicon.ico"), pngBuffers[1]);
  console.log("✓ app/favicon.ico (32×32 PNG)");
}

async function main() {
  // 96px source → rendu net sur écrans retina dans l’onglet
  await renderIcon(96, join(root, "app", "icon.png"));
  await renderIcon(180, join(root, "app", "apple-icon.png"));
  await renderIcon(180, join(root, "public", "apple-touch-icon.png"));
  await renderIcon(192, join(root, "public", "icon-192.png"));
  await renderIcon(512, join(root, "public", "icon-512.png"));
  await renderIco();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
