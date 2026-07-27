import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Transport & Logistik in Europa",
  description:
    "Zuverlässige Transport-, Zoll- und Lagerlösungen mit eigenem Fuhrpark für die Schweiz und Europa.",
};

export default function Home() {
  return <HomePage />;
}
