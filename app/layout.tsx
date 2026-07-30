import type { Metadata } from "next";
import { headers } from "next/headers";
import { I18nProvider } from "@/lib/i18n";
import { PageLoadTransition } from "@/components/PageLoadTransition";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "sara-transporte.ch";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const description =
    "Transport, Zollabwicklung, Track & Trace und Lagerung für die Schweiz und Europa.";

  return {
    metadataBase: baseUrl,
    title: {
      default: "Sara Transporte AG",
      template: "%s | Sara Transporte AG",
    },
    description,
    icons: {
      icon: [
        {
          url: "/assets/brand/sara-s-favicon-32.png?v=white-s",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/assets/brand/sara-s-favicon-192.png?v=white-s",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/assets/brand/sara-s-favicon-512.png?v=white-s",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      shortcut: "/assets/brand/sara-s-favicon-32.png?v=white-s",
      apple: "/assets/brand/sara-s-favicon-192.png?v=white-s",
    },
    openGraph: {
      type: "website",
      siteName: "Sara Transporte AG",
      title: "Sara Transporte AG",
      description,
      images: [
        {
          url: new URL("/og.png", baseUrl).toString(),
          width: 1200,
          height: 630,
          alt: "Sara Transporte AG – Europa bewegen. Verbindungen schaffen.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Sara Transporte AG",
      description,
      images: [new URL("/og.png", baseUrl).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased" suppressHydrationWarning>
        <I18nProvider>
          <PageLoadTransition />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
