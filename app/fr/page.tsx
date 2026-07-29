import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import {
  languageAlternates,
  localizedHomeMetadata,
} from "@/lib/localized-metadata";

export const metadata: Metadata = {
  ...localizedHomeMetadata.fr,
  alternates: {
    canonical: "/fr",
    languages: languageAlternates("/"),
  },
};

export default function FrenchHome() {
  return <HomePage />;
}
