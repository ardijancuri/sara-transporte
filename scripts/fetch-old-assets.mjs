import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const origin = "https://www.sara-transporte.ch";
const projectRoot = process.cwd();
const assetRoot = path.join(projectRoot, "public", "assets", "legacy");
const pages = [
  "/",
  "/ueber-uns/",
  "/zertifizierungen/",
  "/dienstleistungen/",
  "/landverkehr/",
  "/zollabwicklung/",
  "/track-and-trace/",
  "/warehouse/",
  "/contact-us/",
  "/blog/",
];

const assetPattern =
  /https?:\/\/[^"'\\\s<>]+?\.(?:avif|gif|jpe?g|png|svg|webp|pdf|mp4|mov)(?:\?[^"'\\\s<>]*)?/gi;
const cssPattern =
  /https?:\/\/[^"'\\\s<>]+?\.css(?:\?[^"'\\\s<>]*)?/gi;
const assets = new Set();
const stylesheets = new Set();

function cleanMarkup(value) {
  return value
    .replaceAll("\\/", "/")
    .replaceAll("&amp;", "&")
    .replaceAll("&#038;", "&");
}

function collectAssets(value) {
  const content = cleanMarkup(value);
  for (const match of content.matchAll(assetPattern)) {
    const cleaned = match[0].replace(/[),;]+$/, "");
    if (cleaned.startsWith(`${origin}/wp-content/uploads/`)) {
      assets.add(cleaned);
    }
  }
  for (const match of content.matchAll(cssPattern)) {
    const cleaned = match[0].replace(/[),;]+$/, "");
    if (cleaned.startsWith(origin)) {
      stylesheets.add(cleaned);
    }
  }
}

for (const route of pages) {
  const response = await fetch(new URL(route, origin), {
    headers: { "user-agent": "Sara-Transporte-site-migration/1.0" },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${route}: ${response.status}`);
  }
  collectAssets(await response.text());
}

for (const stylesheetUrl of stylesheets) {
  const response = await fetch(stylesheetUrl, {
    headers: { "user-agent": "Sara-Transporte-site-migration/1.0" },
  });
  if (response.ok) {
    collectAssets(await response.text());
  }
}

await mkdir(assetRoot, { recursive: true });

const manifest = {};
for (const assetUrl of [...assets].sort()) {
  const url = new URL(assetUrl);
  const relativeUploadPath = decodeURIComponent(
    url.pathname.replace("/wp-content/uploads/", ""),
  );
  const destination = path.join(assetRoot, relativeUploadPath);
  await mkdir(path.dirname(destination), { recursive: true });

  const response = await fetch(url, {
    headers: { "user-agent": "Sara-Transporte-site-migration/1.0" },
  });
  if (!response.ok) {
    console.warn(`Skipped ${assetUrl}: ${response.status}`);
    continue;
  }

  await writeFile(destination, Buffer.from(await response.arrayBuffer()));
  manifest[assetUrl] = `/assets/legacy/${relativeUploadPath.replaceAll("\\", "/")}`;
}

await writeFile(
  path.join(assetRoot, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(`Downloaded ${Object.keys(manifest).length} legacy assets.`);
