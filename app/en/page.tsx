import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import {
  languageAlternates,
  localizedHomeMetadata,
} from "@/lib/localized-metadata";

export const metadata: Metadata = {
  ...localizedHomeMetadata.en,
  alternates: {
    canonical: "/en",
    languages: languageAlternates("/"),
  },
};

export default function EnglishHome() {
  return <HomePage />;
}
