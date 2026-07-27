import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      icon: "/assets/legacy/2023/10/Logo-Sara-Transporte-AG.png",
      shortcut: "/assets/legacy/2023/10/Logo-Sara-Transporte-AG.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
