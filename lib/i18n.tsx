"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

export type Locale = "de" | "en" | "fr";

const localePrefixPattern = /^\/(en|fr)(?=\/|$)/;

export function getLocaleFromPathname(pathname: string): Locale {
  const prefix = pathname.match(localePrefixPattern)?.[1];
  return prefix === "en" || prefix === "fr" ? prefix : "de";
}

export function stripLocaleFromPathname(pathname: string) {
  const stripped = pathname.replace(localePrefixPattern, "");
  return stripped || "/";
}

export function localizePath(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href;
  }

  const suffixIndex = href.search(/[?#]/);
  const pathname = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : href.slice(suffixIndex);

  if (
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/")
  ) {
    return href;
  }

  const basePath = stripLocaleFromPathname(pathname);
  const localizedPath =
    locale === "de"
      ? basePath
      : `/${locale}${basePath === "/" ? "" : basePath}`;

  return `${localizedPath}${suffix}`;
}

type Translation = {
  en: string;
  fr: string;
};

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
};

const translations: Record<string, Translation> = {
  "Sprache wählen": {
    en: "Choose language",
    fr: "Choisir la langue",
  },
  "Aktuelle Sprache": {
    en: "Current language",
    fr: "Langue actuelle",
  },
  "Sprachauswahl schliessen": {
    en: "Close language selector",
    fr: "Fermer le sélecteur de langue",
  },
  Startseite: { en: "Home", fr: "Accueil" },
  "Über uns": { en: "About us", fr: "À propos" },
  Dienstleistungen: { en: "Services", fr: "Services" },
  Zertifizierungen: { en: "Certifications", fr: "Certifications" },
  Kontakt: { en: "Contact", fr: "Contact" },
  Aktuelles: { en: "News", fr: "Actualités" },
  Navigation: { en: "Navigation", fr: "Navigation" },
  Leistungen: { en: "Services", fr: "Services" },
  Standorte: { en: "Locations", fr: "Sites" },
  Partner: { en: "Partners", fr: "Partenaires" },
  Anfrage: { en: "Request a quote", fr: "Demande de devis" },
  "Transport anfragen": {
    en: "Request transport",
    fr: "Demander un transport",
  },
  "Kontakt aufnehmen": { en: "Contact us", fr: "Nous contacter" },
  "Leistungen entdecken": {
    en: "Explore services",
    fr: "Découvrir les services",
  },
  "Alle Leistungen": { en: "All services", fr: "Tous les services" },
  "Mehr über uns": { en: "More about us", fr: "En savoir plus" },
  "Mehr Einblicke": { en: "More stories", fr: "Plus d’actualités" },
  "PDF öffnen": { en: "Open PDF", fr: "Ouvrir le PDF" },
  "Zum Track & Trace": {
    en: "Go to Track & Trace",
    fr: "Accéder au suivi",
  },
  "Menü öffnen": { en: "Open menu", fr: "Ouvrir le menu" },
  "Menü schliessen": { en: "Close menu", fr: "Fermer le menu" },
  Hauptnavigation: { en: "Main navigation", fr: "Navigation principale" },
  "Weiter scrollen": { en: "Continue scrolling", fr: "Continuer à défiler" },
  "Sara Transporte Startseite": {
    en: "Sara Transporte home page",
    fr: "Accueil Sara Transporte",
  },
  "Sara Transporte auf LinkedIn": {
    en: "Sara Transporte on LinkedIn",
    fr: "Sara Transporte sur LinkedIn",
  },
  "Sara Transporte anrufen": {
    en: "Call Sara Transporte",
    fr: "Appeler Sara Transporte",
  },

  "Europa bewegen.": { en: "Moving Europe.", fr: "Faire bouger l’Europe." },
  "Verbindungen schaffen.": {
    en: "Creating connections.",
    fr: "Créer des connexions.",
  },
  "Persönlich disponiert, lückenlos begleitet und zuverlässig ans Ziel gebracht.": {
    en: "Personally coordinated, continuously monitored and reliably delivered.",
    fr: "Une coordination personnalisée, un suivi continu et une livraison fiable.",
  },
  "Seit 2014": { en: "Since 2014", fr: "Depuis 2014" },
  "LKW im eigenen Fuhrpark": {
    en: "trucks in our own fleet",
    fr: "camions dans notre propre flotte",
  },
  Scroll: { en: "Scroll", fr: "Défiler" },
  "Unsere Erfahrung": { en: "Our experience", fr: "Notre expérience" },
  "Sara Transporte AG entwickelt maßgeschneiderte Transport- und Logistiklösungen für Unternehmen, die Verlässlichkeit, Schnelligkeit und direkte Kommunikation erwarten.": {
    en: "Sara Transporte AG develops tailored transport and logistics solutions for companies that expect reliability, speed and direct communication.",
    fr: "Sara Transporte AG développe des solutions de transport et de logistique sur mesure pour les entreprises qui exigent fiabilité, rapidité et communication directe.",
  },
  "Eigener Fuhrpark": { en: "Our own fleet", fr: "Notre propre flotte" },
  "Bereit für Europa": { en: "Ready for Europe", fr: "Prête pour l’Europe" },
  "Jahre Erfahrung in Transport, Spedition und Zoll.": {
    en: "years of experience in transport, freight forwarding and customs.",
    fr: "ans d’expérience dans le transport, l’expédition et les douanes.",
  },
  "Von Döttingen aus koordiniert unser Team den Fuhrpark rund um die Uhr. Eigene Werkstatt, grenznahe Zollstandorte und europäische Niederlassungen halten die Wege kurz.": {
    en: "From Döttingen, our team coordinates the fleet around the clock. Our own workshop, customs offices close to the border and European branches keep routes and response times short.",
    fr: "Depuis Döttingen, notre équipe coordonne la flotte 24 heures sur 24. Notre propre atelier, nos bureaux de douane proches de la frontière et nos succursales européennes garantissent des circuits courts.",
  },
  "24/7 erreichbar und proaktiv": {
    en: "Available and proactive 24/7",
    fr: "Disponibles et proactifs 24 h/24, 7 j/7",
  },
  "Direkte, kurze Kommunikationswege": {
    en: "Direct, efficient communication",
    fr: "Une communication directe et efficace",
  },
  "ADR-geschulte Fahrer und eigener Fuhrpark": {
    en: "ADR-trained drivers and our own fleet",
    fr: "Des chauffeurs formés ADR et notre propre flotte",
  },
  "Transport und Verzollung aus einer Hand": {
    en: "Transport and customs clearance from one source",
    fr: "Transport et dédouanement auprès d’un seul partenaire",
  },
  "Best Service": { en: "Best Service", fr: "Service d’excellence" },
  "Unsere Leistungen": { en: "Our services", fr: "Nos services" },
  "Logistik, die weiterdenkt.": {
    en: "Logistics that thinks ahead.",
    fr: "Une logistique qui anticipe.",
  },
  "So arbeiten wir": { en: "How we work", fr: "Notre méthode" },
  "Vom Auftrag bis zur Ankunft.": {
    en: "From order to arrival.",
    fr: "De la commande à l’arrivée.",
  },
  "Transparente Preise": {
    en: "Transparent pricing",
    fr: "Tarification transparente",
  },
  "Ein klares Angebot passend zu Route und Anforderung.": {
    en: "A clear quote tailored to your route and requirements.",
    fr: "Une offre claire, adaptée à votre itinéraire et à vos exigences.",
  },
  "Volle Sichtbarkeit": { en: "Full visibility", fr: "Visibilité totale" },
  "Proaktive Updates und Track & Trace für Ihre Sendung.": {
    en: "Proactive updates and Track & Trace for your shipment.",
    fr: "Des mises à jour proactives et un suivi de votre envoi.",
  },
  "Direkte Entscheidungen": {
    en: "Fast decisions",
    fr: "Des décisions rapides",
  },
  "Ein persönliches Team mit kurzen Kommunikationswegen.": {
    en: "A dedicated team with direct lines of communication.",
    fr: "Une équipe dédiée et des échanges directs.",
  },
  Europaweit: { en: "Across Europe", fr: "Dans toute l’Europe" },
  "Von hier bis ans Ziel.": {
    en: "From here to your destination.",
    fr: "D’ici jusqu’à destination.",
  },
  "Schnelle Angebotserstellung": {
    en: "Fast quote preparation",
    fr: "Devis rapide",
  },
  "Erhalten Sie Ihr persönliches Angebot.": {
    en: "Get your tailored quote.",
    fr: "Recevez votre offre personnalisée.",
  },
  "Teilen Sie uns die wichtigsten Eckdaten mit. Wir bereiten Ihre Anfrage direkt für unser Dispositionsteam vor.": {
    en: "Share the key details with us. We will prepare your request directly for our dispatch team.",
    fr: "Communiquez-nous les informations essentielles. Nous transmettrons directement votre demande à notre équipe d’exploitation.",
  },
  "Zuverlässigkeit und Pünktlichkeit wird hier gross geschrieben. Sehr professionell – ich freue mich auf die weitere Zusammenarbeit.": {
    en: "Reliability and punctuality are a top priority here. Highly professional – I look forward to continuing our work together.",
    fr: "La fiabilité et la ponctualité sont ici une priorité. Très professionnels – je me réjouis de poursuivre notre collaboration.",
  },
  "Google Bewertung": { en: "Google review", fr: "Avis Google" },
  "Unsere Stärke": { en: "Our strength", fr: "Notre force" },
  "Leistung entlang der gesamten Lieferkette.": {
    en: "Performance across the entire supply chain.",
    fr: "Une performance sur toute la chaîne logistique.",
  },
  Transportplanung: { en: "Transport planning", fr: "Planification du transport" },
  "24/7 Überwachung": { en: "24/7 monitoring", fr: "Surveillance 24 h/24, 7 j/7" },
  "Eigene Werkstatt": { en: "Our own workshop", fr: "Notre propre atelier" },
  "Grenznahe Zollteams": {
    en: "Customs teams close to the border",
    fr: "Équipes douanières proches de la frontière",
  },
  "LKW im Fuhrpark": { en: "trucks in the fleet", fr: "camions dans la flotte" },
  Palettenplätze: { en: "pallet spaces", fr: "emplacements palettes" },
  Kundenbetreuung: { en: "customer support", fr: "service client" },
  "Unser Weg": { en: "Our journey", fr: "Notre parcours" },
  "Gewachsen mit jeder Verbindung.": {
    en: "Growing with every connection.",
    fr: "Grandir à chaque connexion.",
  },
  "2014 · Döttingen": { en: "2014 · Döttingen", fr: "2014 · Döttingen" },
  "Als Familienunternehmen gestartet.": {
    en: "Founded as a family business.",
    fr: "Les débuts d’une entreprise familiale.",
  },
  "2019 · Waldshut-Tiengen": {
    en: "2019 · Waldshut-Tiengen",
    fr: "2019 · Waldshut-Tiengen",
  },
  "Mit eigenem Zollteam über die Grenze gewachsen.": {
    en: "Expanding across the border with our own customs team.",
    fr: "Une expansion transfrontalière avec notre propre équipe douanière.",
  },
  "Heute · Europa": { en: "Today · Europe", fr: "Aujourd’hui · Europe" },
  "Transport, Zoll und Lagerung aus einer Hand.": {
    en: "Transport, customs and warehousing from one source.",
    fr: "Transport, douane et entreposage auprès d’un seul partenaire.",
  },

  Landverkehr: { en: "Road transport", fr: "Transport routier" },
  "Komplett-, Teil- und Expressladungen mit dem eigenen Fuhrpark durch ganz Europa.": {
    en: "Full, part and express loads across Europe with our own fleet.",
    fr: "Chargements complets, partiels et express dans toute l’Europe avec notre propre flotte.",
  },
  Zollabwicklung: { en: "Customs clearance", fr: "Dédouanement" },
  "Ausfuhr, Einfuhr und Transit – formal korrekt und grenznah aus einer Hand.": {
    en: "Export, import and transit – compliant, close to the border and from one source.",
    fr: "Exportation, importation et transit – conformes, proches de la frontière et auprès d’un seul partenaire.",
  },
  "Track & Trace": { en: "Track & Trace", fr: "Suivi des envois" },
  "Lückenlose Sendungsverfolgung und transparente Statusinformationen rund um die Uhr.": {
    en: "Continuous shipment tracking and transparent status information around the clock.",
    fr: "Suivi continu des envois et informations transparentes 24 heures sur 24.",
  },
  Lagerung: { en: "Warehousing", fr: "Entreposage" },
  "Lagerung, Kommissionierung, Cross-Docking und Fulfilment im Schwarzwald.": {
    en: "Warehousing, order picking, cross-docking and fulfilment in the Black Forest.",
    fr: "Entreposage, préparation de commandes, cross-docking et fulfilment en Forêt-Noire.",
  },
  "Weltweiter Versand": { en: "Worldwide shipping", fr: "Expédition mondiale" },
  "Kurier- und Stückgutlösungen über unser qualifiziertes Partnernetzwerk.": {
    en: "Courier and groupage solutions through our qualified partner network.",
    fr: "Solutions de messagerie et de groupage via notre réseau de partenaires qualifiés.",
  },
  "Ein direkter Ansprechpartner für schnelle Entscheidungen und klare Kommunikation.": {
    en: "One direct contact for fast decisions and clear communication.",
    fr: "Un interlocuteur direct pour des décisions rapides et une communication claire.",
  },
  "Customer Desk": { en: "Customer Desk", fr: "Service client" },
  Verstehen: { en: "Understand", fr: "Comprendre" },
  "Wir erfassen Route, Ware, Termin und alle besonderen Anforderungen.": {
    en: "We capture the route, goods, schedule and all special requirements.",
    fr: "Nous définissons l’itinéraire, la marchandise, les délais et toutes les exigences particulières.",
  },
  Planen: { en: "Plan", fr: "Planifier" },
  "Unsere Disposition entwickelt die passende Transport- und Zolllösung.": {
    en: "Our dispatch team develops the right transport and customs solution.",
    fr: "Notre équipe d’exploitation élabore la solution de transport et de douane adaptée.",
  },
  Bewegen: { en: "Move", fr: "Acheminer" },
  "Geschulte Fahrer und unser eigener Fuhrpark bringen Ihre Ware ans Ziel.": {
    en: "Trained drivers and our own fleet deliver your goods to their destination.",
    fr: "Des chauffeurs qualifiés et notre propre flotte acheminent vos marchandises à destination.",
  },
  Informieren: { en: "Inform", fr: "Informer" },
  "Sie erhalten proaktive Updates und behalten Ihre Sendung transparent im Blick.": {
    en: "You receive proactive updates and maintain a clear view of your shipment.",
    fr: "Vous recevez des mises à jour proactives et gardez une visibilité totale sur votre envoi.",
  },

  Schweiz: { en: "Switzerland", fr: "Suisse" },
  Deutschland: { en: "Germany", fr: "Allemagne" },
  England: { en: "England", fr: "Angleterre" },
  Niederlande: { en: "Netherlands", fr: "Pays-Bas" },
  Belgien: { en: "Belgium", fr: "Belgique" },
  Grossbritannien: { en: "United Kingdom", fr: "Royaume-Uni" },
  Geschäftsführer: { en: "Managing Director", fr: "Directeur général" },
  "Disposition International": {
    en: "International Dispatch",
    fr: "Exploitation internationale",
  },
  "Geschäftsleitung & Leitung Fuhrpark": {
    en: "Executive Management & Fleet Manager",
    fr: "Direction générale et responsable de flotte",
  },
  "Leitung Verkauf & Kundenservice": {
    en: "Head of Sales & Customer Service",
    fr: "Responsable des ventes et du service client",
  },
  "Sachbearbeiterin International": {
    en: "International Operations",
    fr: "Opérations internationales",
  },
  "Standortleiter Waldshut": {
    en: "Waldshut Site Manager",
    fr: "Responsable du site de Waldshut",
  },
  "Verkaufsleiter Deutschland": {
    en: "Sales Manager Germany",
    fr: "Directeur commercial Allemagne",
  },
  "Standortleiterin Basel-Weil am Rhein": {
    en: "Basel-Weil am Rhein Site Manager",
    fr: "Responsable du site de Bâle-Weil am Rhein",
  },
  "Business Development Manager": {
    en: "Business Development Manager",
    fr: "Responsable du développement commercial",
  },
  Auszubildender: { en: "Apprentice", fr: "Apprenti" },
  Team: { en: "Team", fr: "Équipe" },
  Transportlizenz: { en: "Transport licence", fr: "Licence de transport" },
  "Gewährleistung der sicheren und gesetzeskonformen Beförderung Ihrer Waren.": {
    en: "Assurance of the safe and legally compliant transport of your goods.",
    fr: "Garantie d’un transport sûr et conforme à la législation de vos marchandises.",
  },
  "Bestätigung unserer nachhaltigen und ressourcenschonenden Logistiklösungen.": {
    en: "Confirmation of our sustainable, resource-efficient logistics solutions.",
    fr: "Confirmation de nos solutions logistiques durables et économes en ressources.",
  },
  "Beleg für unser konsequentes Qualitätsmanagement und verlässliche Prozesse.": {
    en: "Evidence of our consistent quality management and reliable processes.",
    fr: "Preuve de notre gestion rigoureuse de la qualité et de la fiabilité de nos processus.",
  },
  "Nachweis unserer Standards für sichere Abläufe in der Lebensmittel-Logistik.": {
    en: "Evidence of our standards for safe processes in food logistics.",
    fr: "Preuve de nos standards garantissant la sécurité des processus en logistique alimentaire.",
  },
  "Unser zertifiziertes Engagement für umweltfreundliche Praktiken.": {
    en: "Our certified commitment to environmentally responsible practices.",
    fr: "Notre engagement certifié en faveur de pratiques respectueuses de l’environnement.",
  },

  "Über Sara Transporte": { en: "About Sara Transporte", fr: "À propos de Sara Transporte" },
  "Ein Familienunternehmen, das Europa bewegt.": {
    en: "A family business that moves Europe.",
    fr: "Une entreprise familiale qui fait bouger l’Europe.",
  },
  "Seit 2014 verbinden wir unternehmerische Nähe mit der Leistungsfähigkeit eines europäischen Logistikpartners.": {
    en: "Since 2014, we have combined the personal approach of an owner-managed business with the capabilities of a European logistics partner.",
    fr: "Depuis 2014, nous associons la proximité d’une entreprise familiale aux capacités d’un partenaire logistique européen.",
  },
  "Dokumente & Nachweise": { en: "Documents & credentials", fr: "Documents et justificatifs" },
  "Qualität, auf die Sie sich verlassen können.": {
    en: "Quality you can rely on.",
    fr: "Une qualité sur laquelle vous pouvez compter.",
  },
  "Unsere Zertifizierungen stehen für sichere, nachhaltige und nachvollziehbare Prozesse.": {
    en: "Our certifications stand for safe, sustainable and traceable processes.",
    fr: "Nos certifications attestent de processus sûrs, durables et traçables.",
  },
  Transportdienste: { en: "Transport services", fr: "Services de transport" },
  "Eine Lieferkette. Ein verlässlicher Partner.": {
    en: "One supply chain. One reliable partner.",
    fr: "Une chaîne logistique. Un partenaire fiable.",
  },
  "Von der Planung bis zur Ausführung entwickeln wir sichere, effiziente Lösungen für Ihre Waren.": {
    en: "From planning to execution, we develop safe and efficient solutions for your goods.",
    fr: "De la planification à l’exécution, nous développons des solutions sûres et efficaces pour vos marchandises.",
  },
  "Europaweit unterwegs. Persönlich geführt.": {
    en: "Across Europe. Personally managed.",
    fr: "Partout en Europe. Un suivi personnalisé.",
  },
  "Mit eigenem Fuhrpark verbinden wir die Schweiz täglich mit den wichtigsten europäischen Märkten.": {
    en: "With our own fleet, we connect Switzerland to Europe’s key markets every day.",
    fr: "Avec notre propre flotte, nous relions chaque jour la Suisse aux principaux marchés européens.",
  },
  "Für Ihre Anforderungen kennen wir keine Grenzen.": {
    en: "No borders to meeting your requirements.",
    fr: "Vos exigences ne connaissent pas de frontières.",
  },
  "Ausfuhr, Einfuhr und Transit werden von unseren Zollteams vollständig und zuverlässig abgewickelt.": {
    en: "Our customs teams handle exports, imports and transit completely and reliably.",
    fr: "Nos équipes douanières prennent en charge vos exportations, importations et transits de manière complète et fiable.",
  },
  "Ihre Sendung. Jederzeit transparent.": {
    en: "Your shipment. Visible at all times.",
    fr: "Votre envoi. Visible à tout moment.",
  },
  "Lückenlose Verfolgung entlang der gesamten Lieferkette schafft Klarheit für Sie und Ihre Kunden.": {
    en: "Continuous tracking across the entire supply chain provides clarity for you and your customers.",
    fr: "Un suivi continu sur toute la chaîne logistique vous offre, ainsi qu’à vos clients, une visibilité totale.",
  },
  "Lagerung & Kommissionierung": {
    en: "Warehousing & order picking",
    fr: "Entreposage et préparation de commandes",
  },
  "Mehr Raum für eine effiziente Lieferkette.": {
    en: "More space for an efficient supply chain.",
    fr: "Plus d’espace pour une chaîne logistique efficace.",
  },
  "Flexible Lager-, Fulfilment- und Umschlagslösungen an unserem Standort in Unterkirnach.": {
    en: "Flexible warehousing, fulfilment and transshipment solutions at our Unterkirnach site.",
    fr: "Des solutions flexibles d’entreposage, de fulfilment et de transbordement sur notre site d’Unterkirnach.",
  },
  "Reden wir über Ihre nächste Sendung.": {
    en: "Let’s talk about your next shipment.",
    fr: "Parlons de votre prochain envoi.",
  },
  "Unser Team ist persönlich erreichbar und entwickelt zeitnah die passende Transportlösung.": {
    en: "Our team is personally available and quickly develops the right transport solution.",
    fr: "Notre équipe est directement joignable et élabore rapidement la solution de transport adaptée.",
  },
  "Unterwegs mit Sara Transporte.": {
    en: "On the road with Sara Transporte.",
    fr: "Sur la route avec Sara Transporte.",
  },
  "Einblicke in unser Unternehmen, unsere Standorte und die Entwicklung unserer Leistungen.": {
    en: "Insights into our company, our locations and the development of our services.",
    fr: "Découvrez notre entreprise, nos sites et l’évolution de nos services.",
  },

  "Unsere Geschichte": { en: "Our story", fr: "Notre histoire" },
  "Logistik mit Verantwortung und persönlicher Nähe.": {
    en: "Responsible logistics with a personal touch.",
    fr: "Une logistique responsable et proche de vous.",
  },
  "Sara Transporte AG wurde 2014 als familiengeführtes Unternehmen in der Schweiz gegründet. Langjährige Erfahrung in Logistik und Spedition, ein engagiertes Team sowie starke Kunden- und Partnerbeziehungen liessen das Unternehmen rasch wachsen.": {
    en: "Sara Transporte AG was founded in Switzerland in 2014 as a family-run company. Years of experience in logistics and freight forwarding, a dedicated team and strong customer and partner relationships enabled the company to grow quickly.",
    fr: "Sara Transporte AG a été fondée en Suisse en 2014 en tant qu’entreprise familiale. Une longue expérience de la logistique et de l’expédition, une équipe engagée et de solides relations avec nos clients et partenaires ont permis à l’entreprise de se développer rapidement.",
  },
  "Am Hauptsitz in Döttingen wird der gesamte Fuhrpark disponiert und koordiniert. Unser Team betreut Kunden rund um die Uhr und garantiert dadurch eine schnelle, verlässliche Abwicklung.": {
    en: "The entire fleet is dispatched and coordinated from our headquarters in Döttingen. Our team supports customers around the clock, ensuring fast and reliable handling.",
    fr: "L’ensemble de la flotte est planifié et coordonné depuis notre siège de Döttingen. Notre équipe accompagne les clients 24 heures sur 24 et garantit ainsi un traitement rapide et fiable.",
  },
  "In Möhlin wird der Fuhrpark durch unsere eigenen Werkstattleiter und Mechaniker geprüft und gewartet. Seit 2019 betreut unser Schwesterunternehmen in Waldshut-Tiengen deutsche Kunden und übernimmt grenznahe Verzollungsdienstleistungen.": {
    en: "In Möhlin, our fleet is inspected and maintained by our own workshop managers and mechanics. Since 2019, our sister company in Waldshut-Tiengen has served German customers and provided customs clearance services close to the border.",
    fr: "À Möhlin, notre flotte est contrôlée et entretenue par nos propres responsables d’atelier et mécaniciens. Depuis 2019, notre société sœur de Waldshut-Tiengen accompagne les clients allemands et assure des services de dédouanement à proximité de la frontière.",
  },
  "Mit dem Standort Durham stärken wir seit 2021 den Linienverkehr von und nach Grossbritannien. Unser Lager in Unterkirnach erweitert die Gruppe um flexible Lager- und Kommissionierungslösungen.": {
    en: "Our Durham location has strengthened scheduled transport to and from the United Kingdom since 2021. Our warehouse in Unterkirnach adds flexible storage and order-picking solutions to the group.",
    fr: "Depuis 2021, notre site de Durham renforce nos lignes régulières à destination et en provenance du Royaume-Uni. Notre entrepôt d’Unterkirnach complète le groupe avec des solutions flexibles d’entreposage et de préparation de commandes.",
  },
  Familiengeführt: { en: "Family-run", fr: "Entreprise familiale" },
  "Verantwortung ist bei uns persönlich.": {
    en: "For us, responsibility is personal.",
    fr: "Chez nous, la responsabilité est personnelle.",
  },
  "24/7 erreichbar": { en: "Available 24/7", fr: "Disponibles 24 h/24, 7 j/7" },
  "Kurze Wege, auch wenn es schnell gehen muss.": {
    en: "Direct communication when every minute counts.",
    fr: "Des échanges directs quand chaque minute compte.",
  },
  "Kontrolle über Qualität, Zeit und Sicherheit.": {
    en: "Control over quality, timing and safety.",
    fr: "La maîtrise de la qualité, des délais et de la sécurité.",
  },
  "Lokale Teams mit internationaler Reichweite.": {
    en: "Local teams with international reach.",
    fr: "Des équipes locales à portée internationale.",
  },
  "Unser Anspruch": { en: "Our commitment", fr: "Notre engagement" },
  "Ein jeder nimmt, was Sara bringt.": {
    en: "Everyone welcomes what Sara delivers.",
    fr: "Chacun apprécie ce que Sara lui apporte.",
  },
  "Wir verbinden professionelle Prozesse mit der Flexibilität eines eingespielten Familienunternehmens – für Lösungen, die im Alltag wirklich funktionieren.": {
    en: "We combine professional processes with the flexibility of an experienced family business – for solutions that genuinely work in everyday operations.",
    fr: "Nous associons des processus professionnels à la flexibilité d’une entreprise familiale expérimentée, pour des solutions réellement efficaces au quotidien.",
  },
  "Direkte und kurze Kommunikationswege": {
    en: "Direct and efficient communication",
    fr: "Une communication directe et efficace",
  },
  "Motiviertes, dynamisches und kompetentes Team": {
    en: "Motivated, dynamic and skilled team",
    fr: "Une équipe motivée, dynamique et compétente",
  },
  "Eigene LKW-Flotte und Lagermöglichkeiten": {
    en: "Our own truck fleet and warehousing facilities",
    fr: "Notre propre flotte de camions et nos capacités d’entreposage",
  },
  "Unser Team": { en: "Our team", fr: "Notre équipe" },
  "Menschen, die Ihre Sendung begleiten.": {
    en: "People who look after your shipment.",
    fr: "Des personnes qui veillent sur votre envoi.",
  },
  "Zertifizierte Prozesse": { en: "Certified processes", fr: "Processus certifiés" },
  "Dokumentiert. Geprüft. Verlässlich.": {
    en: "Documented. Audited. Reliable.",
    fr: "Documentés. Contrôlés. Fiables.",
  },
  "Öffnen Sie die offiziellen Dokumente direkt als PDF.": {
    en: "Open the official documents directly as PDFs.",
    fr: "Consultez directement les documents officiels au format PDF.",
  },
  Zertifikat: { en: "Certificate", fr: "Certificat" },
  "Effizient von der Planung bis zur Zustellung.": {
    en: "Efficient from planning to delivery.",
    fr: "Efficaces de la planification à la livraison.",
  },
  "Entdecken Sie nahtlose Lösungen für pünktliche Lieferungen. Unsere Experten sorgen für eine sichere und effiziente Abwicklung und schaffen damit Freiraum für Ihr Kerngeschäft.": {
    en: "Discover seamless solutions for on-time deliveries. Our experts ensure safe and efficient handling, leaving you free to focus on your core business.",
    fr: "Découvrez des solutions fluides pour des livraisons ponctuelles. Nos experts garantissent une exécution sûre et efficace afin que vous puissiez vous concentrer sur votre cœur de métier.",
  },
  "Wie wir arbeiten": { en: "How we work", fr: "Notre méthode" },
  "Ein transparenter Ablauf in vier Schritten.": {
    en: "A transparent process in four steps.",
    fr: "Un processus transparent en quatre étapes.",
  },

  "Täglich in Bewegung": { en: "Moving every day", fr: "En mouvement chaque jour" },
  "Die Schweiz verbunden mit ganz Europa.": {
    en: "Connecting Switzerland with all of Europe.",
    fr: "Relier la Suisse à toute l’Europe.",
  },
  "Berlin, Amsterdam, London oder Lyon: Unsere Fahrer stehen für Sie bereit. Sie sind nach ADR-Normen geschult und damit auch für anspruchsvolle und gefährliche Güter bestens ausgerüstet.": {
    en: "Berlin, Amsterdam, London or Lyon: our drivers are ready for you. They are trained to ADR standards and fully equipped for demanding and hazardous goods.",
    fr: "Berlin, Amsterdam, Londres ou Lyon : nos chauffeurs sont à votre service. Formés aux normes ADR, ils sont parfaitement équipés pour les marchandises exigeantes et dangereuses.",
  },
  "Wir transportieren Stückgut, Kurier- und Expresssendungen sowie Komplett- oder Teilladungen und steuern Ihre europaweite Beschaffung und Distribution.": {
    en: "We transport groupage, courier and express shipments as well as full or part loads, and manage your procurement and distribution across Europe.",
    fr: "Nous transportons du groupage, des envois de messagerie et express ainsi que des chargements complets ou partiels, et pilotons vos approvisionnements et votre distribution dans toute l’Europe.",
  },
  "Handelsübliche Waren oder temperaturgeführte Transporte: Wir entwickeln zeitnah die individuelle Lösung für Ihre Anforderungen.": {
    en: "Whether standard commercial goods or temperature-controlled transport, we quickly develop a tailored solution for your requirements.",
    fr: "Marchandises courantes ou transport sous température dirigée : nous élaborons rapidement une solution adaptée à vos besoins.",
  },
  "Transport und Verzollung wickeln wir im eigenen Haus ab. So erhalten Sie eine zentrale Ansprechperson für Ihre gesamte Logistikaufgabe.": {
    en: "We handle transport and customs clearance in-house, giving you one central contact for your entire logistics operation.",
    fr: "Nous gérons le transport et le dédouanement en interne. Vous disposez ainsi d’un interlocuteur central pour l’ensemble de vos opérations logistiques.",
  },
  "Teil- & Komplettladung": { en: "Part & full loads", fr: "Chargements partiels et complets" },
  "Plane & Mega": {
    en: "Curtainsider & mega trailer",
    fr: "Bâché et méga-remorque",
  },
  "ADR & Thermotransport": {
    en: "ADR & temperature-controlled transport",
    fr: "ADR et transport sous température dirigée",
  },
  "Unsere Partner": { en: "Our partners", fr: "Nos partenaires" },
  "Starke Verbindungen für BeNeLux und Grossbritannien.": {
    en: "Strong connections for Benelux and the United Kingdom.",
    fr: "Des liaisons solides pour le Benelux et le Royaume-Uni.",
  },
  "Tägliche Abfahrten zwischen der Schweiz und Hapert verbinden uns mit einem erfahrenen Spezialisten für Warehousing, Hebebühnen, Ladekran und termingenaue Zustellungen in der gesamten BeNeLux-Region.": {
    en: "Daily departures between Switzerland and Hapert connect us with an experienced specialist in warehousing, tail lifts, truck-mounted cranes and on-time delivery across the Benelux region.",
    fr: "Des départs quotidiens entre la Suisse et Hapert nous relient à un spécialiste expérimenté de l’entreposage, des hayons élévateurs, des grues de chargement et des livraisons ponctuelles dans toute la région Benelux.",
  },
  "Über das Verteilzentrum Dover bietet unser Partner zeitkritische Express-, Sonder- und Stückguttransporte mit flächendeckender Zustellung und Track & Trace.": {
    en: "Through its Dover distribution centre, our partner provides time-critical express, special and groupage transport with nationwide delivery and Track & Trace.",
    fr: "Via son centre de distribution de Douvres, notre partenaire propose des transports express, spéciaux et de groupage urgents, avec une couverture nationale et un suivi complet.",
  },

  Ausfuhrabfertigungen: { en: "Export clearance", fr: "Dédouanement à l’exportation" },
  "Zolldokumente im Abgangsland": {
    en: "Customs documents in the country of departure",
    fr: "Documents douaniers dans le pays de départ",
  },
  "CH- und EU-Ausfuhren": { en: "Swiss and EU exports", fr: "Exportations suisses et UE" },
  "EUR.1 Warenverkehrsbescheinigungen": {
    en: "EUR.1 movement certificates",
    fr: "Certificats de circulation EUR.1",
  },
  "Carnet-ATA-Abfertigung": { en: "ATA Carnet processing", fr: "Traitement des carnets ATA" },
  Einfuhrabfertigungen: { en: "Import clearance", fr: "Dédouanement à l’importation" },
  "Zolldokumente im Bestimmungsland": {
    en: "Customs documents in the destination country",
    fr: "Documents douaniers dans le pays de destination",
  },
  "CH- und EU-Einfuhren": { en: "Swiss and EU imports", fr: "Importations suisses et UE" },
  "EU-Verzollungen": { en: "EU customs clearance", fr: "Dédouanements UE" },
  "ATA-Nummern via ATLAS": { en: "ATA numbers via ATLAS", fr: "Numéros ATA via ATLAS" },
  Transitabfertigungen: { en: "Transit clearance", fr: "Dédouanement de transit" },
  "Transitdokumente in Abgangs- und Bestimmungsland": {
    en: "Transit documents in the departure and destination countries",
    fr: "Documents de transit dans les pays de départ et de destination",
  },
  "T1/T2-Versandverfahren": { en: "T1/T2 transit procedures", fr: "Procédures de transit T1/T2" },
  "Nationales Transitverfahren Schweiz": {
    en: "Swiss national transit procedure",
    fr: "Procédure nationale de transit suisse",
  },
  "Verzollung für Privatpersonen": {
    en: "Customs clearance for private individuals",
    fr: "Dédouanement pour les particuliers",
  },
  Verzollungsstandorte: { en: "Customs locations", fr: "Sites de dédouanement" },
  "Direkt an der Grenze für Sie da.": {
    en: "Here for you, right at the border.",
    fr: "À votre service, directement à la frontière.",
  },
  "Unsere Spezialisten begleiten Ihre Zollfragen persönlich und sorgen dafür, dass Dokumente, Ware und Termine zusammenpassen.": {
    en: "Our specialists personally handle your customs requirements and ensure that documents, goods and schedules are perfectly aligned.",
    fr: "Nos spécialistes vous accompagnent personnellement dans vos démarches douanières et veillent à la parfaite coordination des documents, des marchandises et des délais.",
  },
  Hauptsitz: { en: "Head office", fr: "Siège principal" },
  Standort: { en: "Location", fr: "Site" },
  "Customs Support": { en: "Customs Support", fr: "Assistance douanière" },
  Partnernetzwerk: { en: "Partner network", fr: "Réseau de partenaires" },
  "Zollkompetenz über Grenzen hinweg.": {
    en: "Customs expertise across borders.",
    fr: "Une expertise douanière sans frontières.",
  },

  "Immer wissen, wo sich Ihr LKW befindet.": {
    en: "Always know where your truck is.",
    fr: "Sachez toujours où se trouve votre camion.",
  },
  "Unsere Kunden erhalten über den Vimcar-Fleet-Zugang die Möglichkeit, ihren exklusiven LKW im Teil- und Komplettladungsbereich jederzeit zu verfolgen.": {
    en: "Through Vimcar Fleet access, our customers can track their dedicated truck for part and full loads at any time.",
    fr: "Grâce à l’accès Vimcar Fleet, nos clients peuvent suivre à tout moment leur camion dédié aux chargements partiels et complets.",
  },
  "Statusmeldungen und Ablieferbelege schaffen einen transparenten Informationsfluss, damit Sie Kunden und Lieferanten proaktiv informieren können.": {
    en: "Status updates and proof of delivery create a transparent flow of information, enabling you to keep customers and suppliers proactively informed.",
    fr: "Les mises à jour de statut et les preuves de livraison assurent un flux d’informations transparent, afin que vous puissiez informer vos clients et fournisseurs de manière proactive.",
  },
  Sendungsstatus: { en: "Shipment status", fr: "Statut de l’envoi" },
  "Unterwegs · planmässig": { en: "In transit · on schedule", fr: "En transit · dans les délais" },
  Fahrzeugüberwachung: { en: "Vehicle monitoring", fr: "Suivi des véhicules" },
  Live: { en: "Live", fr: "En direct" },
  Statusinformationen: { en: "Status information", fr: "Informations de statut" },
  Direkt: { en: "Direct", fr: "Direct" },
  Ablieferbelege: { en: "Proofs of delivery", fr: "Preuves de livraison" },
  Proaktiv: { en: "Proactive", fr: "Proactif" },
  Kundenkommunikation: { en: "Customer communication", fr: "Communication client" },

  "Moderne Lagerung im Herzen des Schwarzwalds.": {
    en: "Modern warehousing in the heart of the Black Forest.",
    fr: "Un entreposage moderne au cœur de la Forêt-Noire.",
  },
  "Unsere Anlagen sind für Lagerung, Inventarverwaltung, Auftragsabwicklung, Cross-Docking und Transloading ausgelegt. Waren werden sicher und effizient gehandhabt, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.": {
    en: "Our facilities are designed for warehousing, inventory management, order processing, cross-docking and transloading. Goods are handled safely and efficiently so you can focus on your core business.",
    fr: "Nos installations sont conçues pour l’entreposage, la gestion des stocks, le traitement des commandes, le cross-docking et le transbordement. Les marchandises sont traitées de manière sûre et efficace afin que vous puissiez vous concentrer sur votre cœur de métier.",
  },
  "Flexible Lager- und Kommissionierungsoptionen passen sich Ihren Anforderungen an. Moderne Technologie unterstützt eine präzise Bestandsverwaltung und eine reibungslose Abwicklung Ihrer Aufträge.": {
    en: "Flexible storage and order-picking options adapt to your requirements. Modern technology supports accurate inventory management and smooth order fulfilment.",
    fr: "Des options flexibles d’entreposage et de préparation de commandes s’adaptent à vos besoins. Des technologies modernes garantissent une gestion précise des stocks et un traitement fluide de vos commandes.",
  },
  Branchen: { en: "Industries", fr: "Secteurs" },
  "Für anspruchsvolle Warenströme.": {
    en: "For demanding flows of goods.",
    fr: "Pour les flux de marchandises exigeants.",
  },
  Konsumgüter: { en: "Consumer goods", fr: "Biens de consommation" },
  "Lebensmittel & Getränke": { en: "Food & beverages", fr: "Alimentation et boissons" },
  Elektronik: { en: "Electronics", fr: "Électronique" },
  "Flexibel kombinierbar.": { en: "Flexible combinations.", fr: "Des solutions combinables." },
  Gemeinschaftslagerung: { en: "Shared warehousing", fr: "Entreposage mutualisé" },
  "Cross-Docking & Transloading": {
    en: "Cross-docking & transloading",
    fr: "Cross-docking et transbordement",
  },
  "Fulfilment- und FBA-Vorbereitung": {
    en: "Fulfilment and FBA preparation",
    fr: "Fulfilment et préparation FBA",
  },
  Grundstücksfläche: { en: "site area", fr: "surface du site" },
  Lagerfläche: { en: "warehouse area", fr: "surface d’entreposage" },
  Palettenstellplätze: { en: "pallet positions", fr: "emplacements palettes" },
  Docktore: { en: "dock doors", fr: "portes de quai" },
  Regalhöhe: { en: "racking height", fr: "hauteur des rayonnages" },
  Öffnungszeiten: { en: "opening hours", fr: "heures d’ouverture" },
  "05–22 Uhr": { en: "5 a.m.–10 p.m.", fr: "5 h–22 h" },

  "Direkter Kontakt": { en: "Direct contact", fr: "Contact direct" },
  "Wir sind für Sie erreichbar.": {
    en: "We are here for you.",
    fr: "Nous sommes à votre écoute.",
  },
  Notfallnummer: { en: "Emergency number", fr: "Numéro d’urgence" },
  "Ihre Anfrage": { en: "Your request", fr: "Votre demande" },
  "Wohin dürfen wir für Sie fahren?": {
    en: "Where can we deliver for you?",
    fr: "Où pouvons-nous livrer pour vous ?",
  },
  "Drei Standorte. Ein direkter Draht.": {
    en: "Three locations. One direct connection.",
    fr: "Trois sites. Un contact direct.",
  },
  "Gründung · 2014": { en: "Foundation · 2014", fr: "Création · 2014" },
  "Ein Familienunternehmen nimmt Fahrt auf.": {
    en: "A family business gets moving.",
    fr: "Une entreprise familiale prend la route.",
  },
  "In Döttingen beginnt Sara Transporte mit klarer Mission: verlässliche Logistik, persönlich geführt.": {
    en: "Sara Transporte starts in Döttingen with a clear mission: reliable logistics, personally managed.",
    fr: "Sara Transporte voit le jour à Döttingen avec une mission claire : une logistique fiable et un suivi personnalisé.",
  },
  "Expansion · 2019": { en: "Expansion · 2019", fr: "Expansion · 2019" },
  "Grenznahe Zollkompetenz in Deutschland.": {
    en: "Customs expertise close to the German border.",
    fr: "Une expertise douanière proche de la frontière allemande.",
  },
  "Der Standort Waldshut-Tiengen schafft direkte Wege für deutsche Kunden und Zollabwicklung.": {
    en: "The Waldshut-Tiengen location provides direct access for German customers and customs clearance.",
    fr: "Le site de Waldshut-Tiengen offre aux clients allemands un accès direct aux services de dédouanement.",
  },
  "Grossbritannien · 2021": { en: "United Kingdom · 2021", fr: "Royaume-Uni · 2021" },
  "Ein Local Contact für den englischen Markt.": {
    en: "A local contact for the UK market.",
    fr: "Un contact local pour le marché britannique.",
  },
  "Mit Durham wächst die Präsenz im Vereinigten Königreich und der Linienverkehr wird weiter gestärkt.": {
    en: "Durham expands our presence in the United Kingdom and further strengthens scheduled transport.",
    fr: "Durham renforce notre présence au Royaume-Uni et développe davantage nos lignes régulières.",
  },
  "Lagerung · Heute": { en: "Warehousing · Today", fr: "Entreposage · Aujourd’hui" },
  "Mehr Raum für Supply-Chain-Lösungen.": {
    en: "More space for supply chain solutions.",
    fr: "Plus d’espace pour les solutions de chaîne logistique.",
  },
  "Unterkirnach ergänzt Transport und Zoll um moderne Lagerung, Kommissionierung und Fulfilment.": {
    en: "Unterkirnach complements transport and customs with modern warehousing, order picking and fulfilment.",
    fr: "Unterkirnach complète le transport et la douane avec des solutions modernes d’entreposage, de préparation de commandes et de fulfilment.",
  },

  "Ihre Ware in sicheren Händen.": {
    en: "Your goods in safe hands.",
    fr: "Vos marchandises entre de bonnes mains.",
  },
  "Maßgeschneiderte Transport- und Logistiklösungen für Unternehmen in der Schweiz und ganz Europa.": {
    en: "Tailored transport and logistics solutions for companies in Switzerland and across Europe.",
    fr: "Des solutions de transport et de logistique sur mesure pour les entreprises en Suisse et dans toute l’Europe.",
  },

  "Vollständiger Name": { en: "Full name", fr: "Nom complet" },
  "Ihr Name": { en: "Your name", fr: "Votre nom" },
  Telefon: { en: "Phone", fr: "Téléphone" },
  Gewicht: { en: "Weight", fr: "Poids" },
  "z. B. 2.5 t": { en: "e.g. 2.5 t", fr: "p. ex. 2,5 t" },
  Von: { en: "From", fr: "De" },
  Abholort: { en: "Pickup location", fr: "Lieu d’enlèvement" },
  Nach: { en: "To", fr: "Vers" },
  Zielort: { en: "Destination", fr: "Destination" },
  Details: { en: "Details", fr: "Détails" },
  "Ware, Termin und besondere Anforderungen": {
    en: "Goods, schedule and special requirements",
    fr: "Marchandises, délais et exigences particulières",
  },
  "Anfrage vorbereiten": { en: "Prepare request", fr: "Préparer la demande" },
  "Ihr E-Mail-Programm wird mit der vorbereiteten Anfrage geöffnet.": {
    en: "Your email app will open with the prepared request.",
    fr: "Votre messagerie va s’ouvrir avec la demande préparée.",
  },
  "Transportanfrage von": { en: "Transport request from", fr: "Demande de transport de" },
  Website: { en: "Website", fr: "Site web" },
  Name: { en: "Name", fr: "Nom" },
  Nachricht: { en: "Message", fr: "Message" },

  "Transport, Zollabwicklung, Track & Trace und Lagerung für die Schweiz und Europa.": {
    en: "Transport, customs clearance, Track & Trace and warehousing for Switzerland and Europe.",
    fr: "Transport, dédouanement, suivi des envois et entreposage en Suisse et en Europe.",
  },
  "Sara Transporte AG – Europa bewegen. Verbindungen schaffen.": {
    en: "Sara Transporte AG – Moving Europe. Creating connections.",
    fr: "Sara Transporte AG – Faire bouger l’Europe. Créer des connexions.",
  },

  "Sara Transporte LKW am Logistikstandort": {
    en: "Sara Transporte truck at the logistics site",
    fr: "Camion Sara Transporte sur le site logistique",
  },
  "Sara Transporte LKW auf europäischer Route": {
    en: "Sara Transporte truck on a European route",
    fr: "Camion Sara Transporte sur une route européenne",
  },
  "Sara Transporte LKW in den Schweizer Bergen": {
    en: "Sara Transporte truck in the Swiss mountains",
    fr: "Camion Sara Transporte dans les montagnes suisses",
  },
  "Sara Transporte Fahrzeug": {
    en: "Sara Transporte vehicle",
    fr: "Véhicule Sara Transporte",
  },
  Logistikzentrum: { en: "Logistics centre", fr: "Centre logistique" },
  "Orangefarbener Scania LKW am Logistikstandort": {
    en: "Orange Scania truck at the logistics site",
    fr: "Camion Scania orange sur le site logistique",
  },
  "Sara Transporte LKW in der Schweiz": {
    en: "Sara Transporte truck in Switzerland",
    fr: "Camion Sara Transporte en Suisse",
  },
  "Sara Transporte am Logistikstandort": {
    en: "Sara Transporte at the logistics site",
    fr: "Sara Transporte sur le site logistique",
  },
  "Lagerhalle in Unterkirnach": {
    en: "Warehouse in Unterkirnach",
    fr: "Entrepôt à Unterkirnach",
  },
  "Sara Transporte Fahrzeug in alpiner Landschaft": {
    en: "Sara Transporte vehicle in an Alpine landscape",
    fr: "Véhicule Sara Transporte dans un paysage alpin",
  },
  "Sara Transporte Lagerstandort Unterkirnach": {
    en: "Sara Transporte warehouse in Unterkirnach",
    fr: "Entrepôt Sara Transporte à Unterkirnach",
  },
  "Fördertechnik im Lager": {
    en: "Conveyor equipment in the warehouse",
    fr: "Équipement de manutention dans l’entrepôt",
  },
  "Regalreihen im Lager": {
    en: "Warehouse racking",
    fr: "Rayonnages dans l’entrepôt",
  },
};

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

const reverseTranslations = new Map<string, string>();

for (const [german, values] of Object.entries(translations)) {
  reverseTranslations.set(normalize(german), german);
  reverseTranslations.set(normalize(values.en), german);
  reverseTranslations.set(normalize(values.fr), german);
}

export function translate(value: string, locale: Locale): string {
  if (locale === "de") {
    return reverseTranslations.get(normalize(value)) ?? value;
  }

  const german = reverseTranslations.get(normalize(value)) ?? normalize(value);
  return translations[german]?.[locale] ?? value;
}

type I18nValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (value: string) => string;
};

const I18nContext = createContext<I18nValue>({
  locale: "de",
  setLocale: () => undefined,
  t: (value) => value,
});

const translatedAttributes = [
  "alt",
  "aria-label",
  "content",
  "placeholder",
  "title",
];

function isExcluded(node: Node) {
  const element =
    node.nodeType === Node.ELEMENT_NODE
      ? (node as Element)
      : node.parentElement;

  return Boolean(
    element?.closest(
      "script, style, noscript, [data-no-translate='true']",
    ),
  );
}

function translateTextNode(node: Text, locale: Locale) {
  if (isExcluded(node) || !node.nodeValue?.trim()) {
    return;
  }

  const current = node.nodeValue;
  const leading = current.match(/^\s*/)?.[0] ?? "";
  const trailing = current.match(/\s*$/)?.[0] ?? "";
  const next = translate(current, locale);

  if (normalize(current) !== normalize(next)) {
    node.nodeValue = `${leading}${next}${trailing}`;
  }
}

function translateElement(element: Element, locale: Locale) {
  if (isExcluded(element)) {
    return;
  }

  for (const attribute of translatedAttributes) {
    const current = element.getAttribute(attribute);
    if (!current) {
      continue;
    }

    const next = translate(current, locale);
    if (next !== current) {
      element.setAttribute(attribute, next);
    }
  }
}

function translateTree(root: Node, locale: Locale) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, locale);
    return;
  }

  if (root.nodeType === Node.ELEMENT_NODE) {
    translateElement(root as Element, locale);
  }

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  );

  let node = walker.nextNode();
  while (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node as Text, locale);
    } else {
      translateElement(node as Element, locale);
    }
    node = walker.nextNode();
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const locale = getLocaleFromPathname(pathname);
  const setLocale = useCallback(
    (nextLocale: Locale) => {
      const suffix = `${window.location.search}${window.location.hash}`;
      router.push(`${localizePath(pathname, nextLocale)}${suffix}`);
    },
    [pathname, router],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    translateTree(document.documentElement, locale);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target as Text, locale);
          continue;
        }

        if (mutation.type === "attributes") {
          translateElement(mutation.target as Element, locale);
          continue;
        }

        mutation.addedNodes.forEach((node) =>
          translateTree(node, locale),
        );
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: translatedAttributes,
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [locale]);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      t: (text) => translate(text, locale),
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
