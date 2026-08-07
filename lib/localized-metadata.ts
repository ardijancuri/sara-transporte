import type { PageSlug } from "@/lib/site-data";

export const localizedHomeMetadata = {
  en: {
    title: "Transport & Logistics in Europe",
    description:
      "Reliable transport, customs and warehousing solutions with our own fleet for Switzerland and Europe.",
  },
  fr: {
    title: "Transport et logistique en Europe",
    description:
      "Des solutions fiables de transport, de douane et d’entreposage avec notre propre flotte en Suisse et en Europe.",
  },
} as const;

export const localizedPageMetadata: Record<
  PageSlug,
  Record<"en" | "fr", { title: string; description: string }>
> = {
  "ueber-uns": {
    en: {
      title: "About Sara Transporte",
      description:
        "Since 2014, we have combined the personal approach of an owner-managed business with the capabilities of a European logistics partner.",
    },
    fr: {
      title: "À propos de Sara Transporte",
      description:
        "Depuis 2014, nous associons la proximité d’une entreprise familiale aux capacités d’un partenaire logistique européen.",
    },
  },
  zertifizierungen: {
    en: {
      title: "Documents & Credentials",
      description:
        "Our certifications stand for safe, sustainable and traceable processes.",
    },
    fr: {
      title: "Documents et justificatifs",
      description:
        "Nos certifications attestent de processus sûrs, durables et traçables.",
    },
  },
  dienstleistungen: {
    en: {
      title: "Transport Services",
      description:
        "From planning to execution, we develop safe and efficient solutions for your goods.",
    },
    fr: {
      title: "Services de transport",
      description:
        "De la planification à l’exécution, nous développons des solutions sûres et efficaces pour vos marchandises.",
    },
  },
  landverkehr: {
    en: {
      title: "Road Transport",
      description:
        "With our own fleet, we connect Switzerland to Europe’s key markets every day.",
    },
    fr: {
      title: "Transport routier",
      description:
        "Avec notre propre flotte, nous relions chaque jour la Suisse aux principaux marchés européens.",
    },
  },
  zollabwicklung: {
    en: {
      title: "Customs Clearance",
      description:
        "Our customs teams handle exports, imports and transit completely and reliably.",
    },
    fr: {
      title: "Dédouanement",
      description:
        "Nos équipes douanières prennent en charge vos exportations, importations et transits de manière complète et fiable.",
    },
  },
  "track-and-trace": {
    en: {
      title: "Track & Trace",
      description:
        "Continuous tracking across the entire supply chain provides clarity for you and your customers.",
    },
    fr: {
      title: "Suivi des envois",
      description:
        "Un suivi continu sur toute la chaîne logistique vous offre, ainsi qu’à vos clients, une visibilité totale.",
    },
  },
  warehouse: {
    en: {
      title: "Warehousing & Order Picking",
      description:
        "Flexible warehousing, fulfilment and transshipment solutions at our Unterkirnach site.",
    },
    fr: {
      title: "Entreposage et préparation de commandes",
      description:
        "Des solutions flexibles d’entreposage, de fulfilment et de transbordement sur notre site d’Unterkirnach.",
    },
  },
  expressfahrten: {
    en: {
      title: "Express Deliveries",
      description:
        "Direct express deliveries without transshipment, available 24 hours a day, 365 days a year.",
    },
    fr: {
      title: "Transports express",
      description:
        "Des transports express directs sans transbordement, disponibles 24 heures sur 24, 365 jours par an.",
    },
  },
  seefracht: {
    en: {
      title: "Ocean Freight",
      description:
        "Global import and export solutions with personal support and a complete end-to-end transport chain.",
    },
    fr: {
      title: "Fret maritime",
      description:
        "Des solutions mondiales d’import-export avec un suivi personnalisé et une chaîne de transport complète.",
    },
  },
  "contact-us": {
    en: {
      title: "Contact",
      description:
        "Our team is personally available and quickly develops the right transport solution.",
    },
    fr: {
      title: "Contact",
      description:
        "Notre équipe est directement joignable et élabore rapidement la solution de transport adaptée.",
    },
  },
  blog: {
    en: {
      title: "News",
      description:
        "Insights into our company, our locations and the development of our services.",
    },
    fr: {
      title: "Actualités",
      description:
        "Découvrez notre entreprise, nos sites et l’évolution de nos services.",
    },
  },
};

export function languageAlternates(pathname = "/") {
  const path = pathname === "/" ? "" : pathname;

  return {
    "de-DE": path || "/",
    en: `/en${path}`,
    fr: `/fr${path}`,
  };
}
