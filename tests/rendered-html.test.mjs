import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Sara Transporte homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Sara Transporte AG/i);
  assert.match(html, /Europa bewegen/);
  assert.match(html, /Verbindungen schaffen/);
  assert.match(html, /Dienstleistungen/);
  assert.match(html, /Transport anfragen/);
  assert.match(html, /https:\/\/spedlogswiss\.com\//);
  assert.match(html, /\/assets\/partners\/spedlogswiss-footer\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps migrated routes and assets available", async () => {
  const [servicesResponse, contactResponse, pageSource] = await Promise.all([
    render("/dienstleistungen"),
    render("/contact-us"),
    readFile(new URL("../lib/site-data.ts", import.meta.url), "utf8"),
    access(
      new URL(
        "../public/assets/legacy/2023/10/CH-Transportlizenz-1.pdf",
        import.meta.url,
      ),
    ),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.equal(servicesResponse.status, 200);
  assert.equal(contactResponse.status, 200);
  assert.match(await servicesResponse.text(), /Eine Lieferkette/);
  assert.match(await contactResponse.text(), /Reden wir über Ihre nächste Sendung/);
  assert.match(pageSource, /track-and-trace/);
  assert.match(pageSource, /zertifizierungen/);
  assert.match(pageSource, /warehouse/);
});

test("serves English and French locale routes", async () => {
  const [englishHome, frenchHome, englishContact, frenchContact] =
    await Promise.all([
      render("/en"),
      render("/fr"),
      render("/en/contact-us"),
      render("/fr/contact-us"),
    ]);

  assert.equal(englishHome.status, 200);
  assert.equal(frenchHome.status, 200);
  assert.equal(englishContact.status, 200);
  assert.equal(frenchContact.status, 200);

  assert.match(await englishHome.text(), /Transport &amp; Logistics in Europe/);
  assert.match(await frenchHome.text(), /Transport et logistique en Europe/);
});
