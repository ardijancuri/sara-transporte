import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { SiteImage as Image } from "@/components/SiteImage";
import {
  IconCheck,
  IconClock,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import {
  FaEarthEurope,
  FaFileInvoice,
  FaHeadset,
  FaLocationDot,
  FaTruckFast,
  FaWarehouse,
} from "react-icons/fa6";
import { ActionIcon } from "@/components/ActionIcon";
import { CustomsSlider } from "@/components/CustomsSlider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import {
  certifications,
  company,
  pages,
  serviceExtras,
  services,
  workflow,
  type PageSlug,
} from "@/lib/site-data";

const detailServiceIcons = [
  FaTruckFast,
  FaFileInvoice,
  FaLocationDot,
  FaWarehouse,
  FaEarthEurope,
  FaHeadset,
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <IconCheck size={16} stroke={1.8} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PageHero({ slug }: { slug: PageSlug }) {
  const page = pages[slug];
  return (
    <section className={`hero hero-detail hero-detail-${slug}`}>
      <div
        className="hero-media"
        style={{ backgroundImage: `url("${page.image}")` }}
      />
      <Header />
      <div className="hero-shade" />
      <div className="hero-content">
        <p className="hero-eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="hero-copy">{page.intro}</p>
      </div>
      <div className="detail-route">
        <Link href="/">Startseite</Link>
        <span>/</span>
        <span>{page.eyebrow}</span>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <>
      <section className="section detail-intro about-story-intro">
        <Reveal>
          <p className="eyebrow">Unsere Geschichte</p>
          <h2>Über Sara Transporte AG</h2>
        </Reveal>
        <Reveal className="prose-columns" delay={80}>
          <div>
            <p>
              Die Sara Transporte AG wurde im Jahr 2014 als familiengeführtes
              Transportunternehmen in der Schweiz gegründet. Von Beginn an
              verfolgten wir eine klare Vision: unseren Kunden sämtliche
              Logistikdienstleistungen aus einer Hand anzubieten – von der
              Abholung der Ware über die Verzollung bis hin zur termingerechten
              Auslieferung. Dieses Konzept bildet bis heute die Grundlage
              unseres Handelns und hat massgeblich zu unserem kontinuierlichen
              Wachstum beigetragen.
            </p>
            <p>
              Dank langjähriger Erfahrung in den Bereichen Transport, Logistik
              und Zollabwicklung, einem engagierten Team sowie vertrauensvollen
              und langfristigen Kunden- und Partnerbeziehungen entwickelte sich
              die Sara Transporte AG innerhalb weniger Jahre zu einem
              leistungsstarken Logistikdienstleister mit europaweiter
              Ausrichtung.
            </p>
            <p>
              An unserem Hauptsitz in Döttingen (Schweiz) werden sämtliche
              Transporte disponiert und koordiniert. Unser erfahrenes
              Dispositionsteam steht unseren Kunden täglich zur Verfügung und
              sorgt für eine schnelle, flexible und zuverlässige Abwicklung
              ihrer Transportaufträge.
            </p>
            <p>
              Die technische Betreuung unseres stetig wachsenden Fuhrparks
              erfolgt an unserem Standort in Möhlin. Dort kümmern sich unsere
              eigenen Werkstattleiter und Mechaniker um Wartung, Reparaturen und
              die laufende Instandhaltung unserer Fahrzeuge. Dadurch
              gewährleisten wir höchste Zuverlässigkeit und Einsatzbereitschaft
              unserer Flotte.
            </p>
            <p>
              Mit der Gründung unseres deutschen Schwesterunternehmens in
              Waldshut-Tiengen im Jahr 2019 konnten wir unsere Präsenz im
              grenznahen Raum weiter ausbauen und unseren Kunden umfassende
              Verzollungsdienstleistungen sowie eine noch effizientere Betreuung
              im deutsch-schweizerischen Warenverkehr anbieten.
            </p>
          </div>
          <div>
            <p>
              Ein weiterer wichtiger Meilenstein folgte im Jahr 2020 mit der
              Eröffnung unseres Zollbüros direkt am Zollhof in Weil am Rhein.
              Dieser strategisch optimale Standort ermöglicht es uns, die
              täglichen Import- und Exportverzollungen für unsere Kunden mit
              eigenem Fachpersonal durchzuführen. Durch unsere eigenen Zollbüros
              sind wir unabhängig von externen Dienstleistern und können
              Verzollungen schnell, flexibel und effizient abwickeln.
            </p>
            <p>
              Seit 2021 verfügen wir zudem über einen eigenen Standort in Durham
              (Grossbritannien). Dadurch konnten wir unsere Transportlösungen im
              Verkehr zwischen Grossbritannien und Europa weiter ausbauen und
              bieten unseren Kunden auch nach dem Brexit einen zuverlässigen
              und professionellen Service im Import- und Exportgeschäft.
            </p>
            <p>
              Ein weiterer zentraler Bestandteil unserer Unternehmensgruppe ist
              unser eigenes Logistikzentrum in Unterkirnach. Seit über vier
              Jahren stehen dort mehr als 2&apos;500 m² Lagerfläche sowie rund
              10&apos;000 m² Grundstücksfläche für Lagerung, Kommissionierung,
              Umschlag und individuelle Logistiklösungen zur Verfügung. Damit
              bieten wir unseren Kunden flexible Lagerkapazitäten und können
              auch komplexe Logistikprozesse effizient aus einer Hand
              übernehmen.
            </p>
            <p>
              Heute zählt die SARA Transporte AG zu den wenigen Schweizer
              Transport- und Logistikunternehmen, die sämtliche Kernleistungen
              mit eigenen Ressourcen erbringen. Mit über 120 eigenen Lastwagen,
              eigenen Zollbüros, eigenen Lagerkapazitäten und einem europaweiten
              Partnernetzwerk bieten wir unseren Kunden individuelle Transport-
              und Logistiklösungen auf höchstem Niveau.
            </p>
            <p>
              Trotz unseres kontinuierlichen Wachstums sind wir unseren Werten
              treu geblieben: Als familiengeführtes Unternehmen stehen wir für
              persönliche Betreuung, flache Hierarchien, kurze Entscheidungswege
              und langfristige Partnerschaften. Unser Ziel ist es, für unsere
              Kunden nicht nur ein Transportdienstleister, sondern ein
              verlässlicher Logistikpartner zu sein, der Qualität, Flexibilität
              und Zuverlässigkeit miteinander verbindet.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section values-strip">
        {[
          ["Familiengeführt", "Verantwortung ist bei uns persönlich."],
          ["24/7 erreichbar", "Kurze Wege, auch wenn es schnell gehen muss."],
          ["Eigener Fuhrpark", "Kontrolle über Qualität, Zeit und Sicherheit."],
          ["Europaweit", "Lokale Teams mit internationaler Reichweite."],
        ].map(([title, text], index) => (
          <Reveal key={title} delay={index * 60}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </section>

      <section className="section image-statement">
        <Reveal className="image-statement-photo">
          <Image
            src="/assets/legacy/2023/10/image00174.jpeg"
            alt="Sara Transporte Fahrzeug in alpiner Landschaft"
            fill
            sizes="(max-width: 900px) calc(100vw - 32px), 58vw"
          />
        </Reveal>
        <Reveal className="image-statement-copy" delay={100}>
          <p className="eyebrow">Unser Anspruch</p>
          <h2>Ein jeder nimmt, was Sara bringt.</h2>
          <p>
            Wir verbinden professionelle Prozesse mit der Flexibilität eines
            eingespielten Familienunternehmens – für Lösungen, die im Alltag
            wirklich funktionieren.
          </p>
          <CheckList
            items={[
              "Direkte und kurze Kommunikationswege",
              "Motiviertes, dynamisches und kompetentes Team",
              "Eigene LKW-Flotte und Lagermöglichkeiten",
            ]}
          />
        </Reveal>
      </section>

      <section className="section heritage-section">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Unsere Wurzeln</p>
            <h2>Mit Herzblut auf Europas Strassen.</h2>
          </div>
        </Reveal>
        <Reveal className="heritage-image" delay={70}>
          <Image
            src="/assets/editorial/company-history.webp"
            alt="Historische Lastwagen und die Entwicklung der Sara Transporte AG"
            width={1666}
            height={944}
            sizes="(max-width: 900px) calc(100vw - 36px), 1320px"
          />
        </Reveal>
      </section>
    </>
  );
}

function CertificationsContent() {
  return (
    <section className="section certificates-section">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">Zertifizierte Prozesse</p>
          <h2>Dokumentiert. Geprüft. Verlässlich.</h2>
        </div>
        <p className="heading-copy">
          Öffnen Sie die offiziellen Dokumente direkt als PDF.
        </p>
      </Reveal>
      <div className="certificate-grid">
        {certifications.map((certificate, index) => (
          <Reveal key={certificate.name} delay={index * 60}>
            <a
              className="certificate-card"
              href={certificate.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="certificate-preview">
                <Image
                  src={certificate.image}
                  alt=""
                  fill
                  sizes="(max-width: 540px) calc(100vw - 64px), 34vw"
                />
              </div>
              <div>
                <span>Zertifikat {String(index + 1).padStart(2, "0")}</span>
                <h3>{certificate.name}</h3>
                <p>{certificate.text}</p>
                <strong className="certificate-action">
                  <span>PDF öffnen</span>
                  <ActionIcon kind="download" plain />
                </strong>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesContent() {
  const extraServices = serviceExtras.map((item, index) => ({
    ...item,
    number: `0${index + 5}`,
    href: "/contact-us",
    image:
      index === 0
        ? "/assets/legacy/2023/10/w_versand_0117500.jpg"
        : "/assets/legacy/2026/01/5.jpeg",
    short: item.text,
  }));
  return (
    <>
      <section className="section detail-intro services-page-intro">
        <Reveal>
          <p className="eyebrow">Transportdienste</p>
          <h2>Effizient von der Planung bis zur Zustellung.</h2>
        </Reveal>
        <Reveal className="detail-lead-copy" delay={90}>
          <p>
            Entdecken Sie nahtlose Lösungen für pünktliche Lieferungen. Unsere
            Experten sorgen für eine sichere und effiziente Abwicklung und
            schaffen damit Freiraum für Ihr Kerngeschäft.
          </p>
        </Reveal>
      </section>

      <section className="services-panel services-page-panel">
        <div className="section services-panel-inner services-page-panel-inner">
          <Reveal className="section-heading section-heading-light">
            <div>
              <p className="eyebrow">Unsere Leistungen</p>
              <h2>Logistik, die weiterdenkt.</h2>
            </div>
            <Link href="/contact-us#anfrage" className="text-link text-link-light">
              <span>Transport anfragen</span>
              <ActionIcon kind="forward" plain />
            </Link>
          </Reveal>

          <div
            className="service-grid services-page-grid"
            role="region"
            aria-label="Unsere Leistungen"
            tabIndex={0}
          >
            {[...services, ...extraServices].map((service, index) => {
              const ServiceIcon = detailServiceIcons[index];
              return (
                <Reveal key={service.title} delay={(index % 3) * 80}>
                  <Link className="service-card" href={service.href}>
                    <div className="service-card-topline">
                      <h3>{service.title}</h3>
                      <ServiceIcon size={30} aria-hidden="true" />
                    </div>
                    <p>{service.short}</p>
                    <div className="service-card-image">
                      <Image
                        src={service.image}
                        alt=""
                        fill
                        sizes="(max-width: 600px) calc(100vw - 56px), (max-width: 900px) 44vw, 31vw"
                      />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section process-section services-process-section">
        <Reveal className="section-heading centered-heading">
          <div>
            <p className="eyebrow">So arbeiten wir</p>
            <h2>Vom Auftrag bis zur Ankunft.</h2>
          </div>
        </Reveal>

        <div className="process-layout">
          <Reveal className="process-image">
            <Image
              src="/assets/legacy/2023/10/image00005-e1698833422232.jpeg"
              alt="Sara Transporte LKW auf europäischer Route"
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 55vw"
            />
            <div className="route-badge">
              <span>CH</span>
              <i />
              <span>EU</span>
            </div>
          </Reveal>
          <div className="process-list">
            {workflow.map((step, index) => (
              <Reveal className="process-step" key={step.number} delay={index * 70}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function LandTransportContent() {
  return (
    <>
      <section className="section detail-intro">
        <Reveal>
          <p className="eyebrow">Täglich in Bewegung</p>
          <h2>Die Schweiz verbunden mit ganz Europa.</h2>
        </Reveal>
        <Reveal className="prose-columns" delay={90}>
          <div>
            <p>
              Berlin, Amsterdam, London oder Lyon: Unsere Fahrer stehen für Sie
              bereit. Sie sind nach ADR-Normen geschult und damit auch für
              anspruchsvolle und gefährliche Güter bestens ausgerüstet.
            </p>
            <p>
              Wir transportieren Stückgut, Kurier- und Expresssendungen sowie
              Komplett- oder Teilladungen und steuern Ihre europaweite
              Beschaffung und Distribution.
            </p>
          </div>
          <div>
            <p>
              Handelsübliche Waren oder temperaturgeführte Transporte: Wir
              entwickeln zeitnah die individuelle Lösung für Ihre
              Anforderungen.
            </p>
            <p>
              Transport und Verzollung wickeln wir im eigenen Haus ab. So
              erhalten Sie eine zentrale Ansprechperson für Ihre gesamte
              Logistikaufgabe.
            </p>
          </div>
        </Reveal>
      </section>
      <section className="section fleet-gallery">
        {[
          ["/assets/legacy/2026/01/4.jpeg", "Plane & Mega"],
          ["/assets/legacy/2026/01/6.jpeg", "Teil- & Komplettladung"],
          [
            "/assets/editorial/adr-thermotransport-truck.jpeg",
            "ADR & Thermotransport",
          ],
        ].map(([image, title], index) => (
          <Reveal key={title} delay={index * 80}>
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 33vw"
            />
            <h3>{title}</h3>
          </Reveal>
        ))}
      </section>
      <section className="section partner-detail">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Unsere Partner</p>
            <h2>Starke Verbindungen für BeNeLux und Grossbritannien.</h2>
          </div>
        </Reveal>
        <div className="partner-detail-grid">
          <Reveal className="partner-detail-card">
            <Image
              src="/assets/legacy/2023/10/van-der-heijden-transport-logo.png"
              alt="Van der Heijden Transport & Logistiek"
              width={280}
              height={110}
            />
            <h3>BeNeLux</h3>
            <p>
              Tägliche Abfahrten zwischen der Schweiz und Hapert verbinden uns
              mit einem erfahrenen Spezialisten für Warehousing, Hebebühnen,
              Ladekran und termingenaue Zustellungen in der gesamten
              BeNeLux-Region.
            </p>
            <div className="partner-flyer-action">
              <Link
                className="button button-dark partner-flyer-button"
                href="/assets/flyers/sara-transporte-flyer-benelux.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Benelux-Flyer als PDF öffnen"
              >
                <span>PDF öffnen</span>
                <ActionIcon />
              </Link>
            </div>
          </Reveal>
          <Reveal className="partner-detail-card" delay={100}>
            <Image
              src="/assets/legacy/2023/10/Priority-Freight.png"
              alt="Priority Freight"
              width={280}
              height={110}
            />
            <h3>Grossbritannien</h3>
            <p>
              Über das Verteilzentrum Dover bietet unser Partner zeitkritische
              Express-, Sonder- und Stückguttransporte mit flächendeckender
              Zustellung und Track & Trace.
            </p>
            <div className="partner-flyer-action">
              <Link
                className="button button-dark partner-flyer-button"
                href="/assets/flyers/sara-transporte-flyer-grossbritannien.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Grossbritannien-Flyer als PDF öffnen"
              >
                <span>PDF öffnen</span>
                <ActionIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CustomsContent() {
  const groups: Array<{
    title: string;
    items?: string[];
    description?: string;
  }> = [
    {
      title: "Ausfuhrabfertigungen",
      items: [
        "Zolldokumente im Abgangsland",
        "CH- und EU-Ausfuhren",
        "EUR.1 Warenverkehrsbescheinigungen",
        "Carnet-ATA-Abfertigung",
      ],
    },
    {
      title: "Einfuhrabfertigungen",
      items: [
        "Zolldokumente im Bestimmungsland",
        "CH- und EU-Einfuhren",
        "EU-Verzollungen",
        "ATA-Nummern via ATLAS",
      ],
    },
    {
      title: "Transitabfertigungen",
      items: [
        "Transitdokumente in Abgangs- und Bestimmungsland",
        "T1/T2-Versandverfahren",
        "Nationales Transitverfahren Schweiz",
        "Verzollung für Privatpersonen",
      ],
    },
    {
      title: "Zollabfertigung",
      description:
        "Wir übernehmen die komplette Zollabwicklung schnell, zuverlässig und effizient.",
    },
    {
      title: "Import- und Exportabwicklung",
      description:
        "Professionelle Abwicklung aller Import- und Exportprozesse – von der Anmeldung bis zur Freigabe.",
    },
    {
      title: "Zollanmeldungen",
      description:
        "Erstellung und Übermittlung aller erforderlichen Zollanmeldungen für Ihre Waren.",
    },
    {
      title: "Tarifierung von Waren",
      description:
        "Fachgerechte Einreihung Ihrer Waren nach den geltenden Zolltarifen.",
    },
    {
      title: "Ursprungsnachweise",
      description:
        "Erstellung von Ursprungszeugnissen und Präferenznachweisen für den internationalen Handel.",
    },
    {
      title: "Zollberatung",
      description:
        "Kompetente Beratung zu Zollvorschriften, Verfahren und internationalen Handelsbestimmungen.",
    },
    {
      title: "Transitverfahren",
      description:
        "Abwicklung nationaler und internationaler Transitverfahren inklusive aller notwendigen Dokumente.",
    },
    {
      title: "Einfuhrabgaben berechnen",
      description:
        "Präzise Berechnung von Zöllen, Steuern und weiteren Einfuhrabgaben.",
    },
    {
      title: "Zollbewilligungen",
      description:
        "Unterstützung bei der Beantragung von Zollbewilligungen und den erforderlichen Unterlagen.",
    },
  ];
  return (
    <>
      <CustomsSlider>
        {groups.map((group, index) => (
          <Reveal
            className={
              group.items
                ? "customs-card customs-card-detailed"
                : "customs-card"
            }
            key={group.title}
            delay={(index % 3) * 70}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{group.title}</h2>
            {group.items ? <CheckList items={group.items} /> : null}
            {group.description ? (
              <p className="customs-card-description">{group.description}</p>
            ) : null}
          </Reveal>
        ))}
      </CustomsSlider>
      <section className="section offices-panel">
        <Reveal className="offices-copy">
          <p className="eyebrow eyebrow-light">Verzollungsstandorte</p>
          <h2>Direkt an der Grenze für Sie da.</h2>
          <p>
            Unsere Spezialisten begleiten Ihre Zollfragen persönlich und
            sorgen dafür, dass Dokumente, Ware und Termine zusammenpassen.
          </p>
        </Reveal>
        <div className="office-list">
          <Reveal>
            <span>Hauptsitz</span>
            <h3>Koblenz / Waldshut-Tiengen</h3>
            <p>Georg-Witting-Strasse 2, DE-79761 Waldshut-Tiengen</p>
            <a href="tel:+4977518948177">+49 7751 8948 177</a>
            <a href="mailto:zoll@sara-transporte.de">
              zoll@sara-transporte.de
            </a>
          </Reveal>
          <Reveal delay={80}>
            <span>Standort</span>
            <h3>Basel-Weil am Rhein</h3>
            <p>Weidstrasse 4, DE-79576 Weil am Rhein</p>
            <a href="tel:+4976219368997">+49 7621 936 8997</a>
            <a href="mailto:zoll@sara-transporte.de">
              zoll@sara-transporte.de
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TrackingContent() {
  return (
    <>
      <section className="section tracking-feature">
        <Reveal className="tracking-copy">
          <p className="eyebrow">Volle Sichtbarkeit</p>
          <h2>Immer wissen, wo sich Ihr LKW befindet.</h2>
          <p>
            Unsere Kunden erhalten über den Vimcar-Fleet-Zugang die Möglichkeit,
            ihren exklusiven LKW im Teil- und Komplettladungsbereich jederzeit
            zu verfolgen.
          </p>
          <p>
            Statusmeldungen und Ablieferbelege schaffen einen transparenten
            Informationsfluss, damit Sie Kunden und Lieferanten proaktiv
            informieren können.
          </p>
          <a
            href="https://sara.websped.winsped.de"
            target="_blank"
            rel="noreferrer"
            className="button button-dark"
          >
            <span>Zum Track & Trace</span>
            <ActionIcon />
          </a>
        </Reveal>
        <Reveal className="tracking-visual" delay={100}>
          <Image
            src="/assets/legacy/2026/01/3.jpeg"
            alt="Sara Transporte LKW"
            fill
            sizes="(max-width: 1100px) calc(100vw - 42px), 54vw"
          />
          <div className="tracking-status">
            <span className="status-dot" />
            <div>
              <small>Sendungsstatus</small>
              <strong>Unterwegs · planmässig</strong>
            </div>
          </div>
          <div className="tracking-route">
            <span>Döttingen</span>
            <i />
            <span>Rotterdam</span>
          </div>
        </Reveal>
      </section>
      <section className="section values-strip">
        {[
          ["24/7", "Fahrzeugüberwachung"],
          ["Live", "Statusinformationen"],
          ["Direkt", "Ablieferbelege"],
          ["Proaktiv", "Kundenkommunikation"],
        ].map(([value, label], index) => (
          <Reveal key={label} delay={index * 60}>
            <strong className="large-value">{value}</strong>
            <p>{label}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}

function WarehouseContent() {
  const facts = [
    ["8’000 m²", "Grundstücksfläche"],
    ["2’500 m²", "Lagerfläche"],
    ["1’500", "Palettenstellplätze"],
    ["28", "Docktore"],
    ["25 ft", "Regalhöhe"],
    ["05–22 Uhr", "Öffnungszeiten"],
  ];
  return (
    <>
      <section className="section detail-intro">
        <Reveal>
          <p className="eyebrow">Döbelweg 1 · Unterkirnach</p>
          <h2>Moderne Lagerung im Herzen des Schwarzwalds.</h2>
        </Reveal>
        <Reveal className="prose-columns" delay={90}>
          <p>
            Unsere Anlagen sind für Lagerung, Inventarverwaltung,
            Auftragsabwicklung, Cross-Docking und Transloading ausgelegt. Waren
            werden sicher und effizient gehandhabt, damit Sie sich auf Ihr
            Kerngeschäft konzentrieren können.
          </p>
          <p>
            Flexible Lager- und Kommissionierungsoptionen passen sich Ihren
            Anforderungen an. Moderne Technologie unterstützt eine präzise
            Bestandsverwaltung und eine reibungslose Abwicklung Ihrer Aufträge.
          </p>
        </Reveal>
      </section>
      <section className="warehouse-gallery">
        <Reveal>
          <Image
            src="/assets/legacy/2023/10/w_versand_0117500.jpg"
            alt="Sara Transporte Lagerstandort Unterkirnach"
            fill
            sizes="(max-width: 900px) 100vw, 38vw"
          />
        </Reveal>
        <Reveal delay={80}>
          <Image
            src="/assets/legacy/2023/10/w_versand_03.jpg"
            fill
            sizes="(max-width: 900px) 100vw, 27vw"
            alt="Fördertechnik im Lager"
          />
        </Reveal>
        <Reveal delay={160}>
          <Image
            src="/assets/legacy/2023/10/w_versand_04.jpg"
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            alt="Regalreihen im Lager"
          />
        </Reveal>
      </section>
      <section className="section warehouse-offers">
        <Reveal>
          <span>Branchen</span>
          <h2>Für anspruchsvolle Warenströme.</h2>
          <CheckList
            items={["Konsumgüter", "Lebensmittel & Getränke", "Elektronik"]}
          />
        </Reveal>
        <Reveal delay={100}>
          <span>Leistungen</span>
          <h2>Flexibel kombinierbar.</h2>
          <CheckList
            items={[
              "Gemeinschaftslagerung",
              "Cross-Docking & Transloading",
              "Fulfilment- und FBA-Vorbereitung",
            ]}
          />
        </Reveal>
      </section>
      <section className="section warehouse-facts">
        {facts.map(([value, label], index) => (
          <Reveal key={label} delay={(index % 3) * 60}>
            <strong>{value}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </section>
    </>
  );
}

function ContactContent() {
  return (
    <>
      <section className="section contact-layout" id="anfrage">
        <Reveal className="contact-details">
          <div className="contact-details-heading">
            <p className="eyebrow">Direkter Kontakt</p>
            <h2>Wir sind für Sie erreichbar.</h2>
          </div>
          <div className="contact-channel-list">
            <a className="contact-channel" href="tel:+41562821181">
              <span className="contact-channel-icon">
                <IconPhone size={21} stroke={1.7} />
              </span>
              <span className="contact-channel-copy">
                <small>Schweiz</small>
                <strong>{company.phoneCH}</strong>
              </span>
              <ActionIcon kind="forward" plain />
            </a>
            <a className="contact-channel" href="tel:+4977518948180">
              <span className="contact-channel-icon">
                <IconPhone size={21} stroke={1.7} />
              </span>
              <span className="contact-channel-copy">
                <small>Deutschland</small>
                <strong>{company.phoneDE}</strong>
              </span>
              <ActionIcon kind="forward" plain />
            </a>
            <a
              className="contact-channel contact-channel-emergency"
              href="tel:+41799323333"
            >
              <span className="contact-channel-icon">
                <IconClock size={21} stroke={1.7} />
              </span>
              <span className="contact-channel-copy">
                <small>Notfallnummer</small>
                <strong>{company.emergency}</strong>
              </span>
              <ActionIcon kind="forward" plain />
            </a>
            <div className="contact-channel contact-email-channel">
              <span className="contact-channel-icon">
                <IconMail size={21} stroke={1.7} />
              </span>
              <span className="contact-channel-copy">
                <small>E-Mail</small>
                <a href={`mailto:${company.emailCH}`}>{company.emailCH}</a>
                <a href={`mailto:${company.emailDE}`}>{company.emailDE}</a>
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section contact-locations">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Standorte</p>
            <h2>Fünf Standorte. Ein direkter Draht.</h2>
          </div>
        </Reveal>
        <div className="address-grid">
          {company.addresses.map((address, index) => (
            <Reveal
              key={`${address.country}-${address.company}-${address.lines[0]}`}
              delay={index * 80}
            >
              <span className="address-card-top">
                <FaLocationDot size={46} aria-hidden="true" />
              </span>
              <h2>{address.country}</h2>
              <address>
                <strong>{address.company}</strong>
                {address.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function BlogContent() {
  const stories = [
    {
      tag: "Gründung · 2014",
      title: "Ein Familienunternehmen nimmt Fahrt auf.",
      text: "In Döttingen beginnt Sara Transporte mit klarer Mission: verlässliche Logistik, persönlich geführt.",
      image: "/assets/editorial/journey-alpine-truck.webp",
    },
    {
      tag: "Expansion · 2019",
      title: "Grenznahe Zollkompetenz in Deutschland.",
      text: "Der Standort Waldshut-Tiengen schafft direkte Wege für deutsche Kunden und Zollabwicklung.",
      image: "/assets/editorial/journey-red-truck.webp",
    },
    {
      tag: "Grossbritannien · 2021",
      title: "Ein Local Contact für den englischen Markt.",
      text: "Mit Durham wächst die Präsenz im Vereinigten Königreich und der Linienverkehr wird weiter gestärkt.",
      image: "/assets/legacy/2023/10/image00005-e1698833422232.jpeg",
    },
    {
      tag: "Lagerung · Heute",
      title: "Mehr Raum für Supply-Chain-Lösungen.",
      text: "Unterkirnach ergänzt Transport und Zoll um moderne Lagerung, Kommissionierung und Fulfilment.",
      image: "/assets/legacy/2023/10/w_versand_04.jpg",
    },
  ];
  return (
    <section className="section editorial-grid">
      {stories.map((story, index) => (
        <Reveal
          className={
            index === 0
              ? "editorial-story editorial-featured"
              : "editorial-story"
          }
          key={story.title}
          delay={(index % 3) * 70}
        >
          <Image
            src={story.image}
            alt=""
            width={760}
            height={720}
          />
          <span>{story.tag}</span>
          <h2>{story.title}</h2>
          <p>{story.text}</p>
        </Reveal>
      ))}
    </section>
  );
}

export function DetailPage({ slug }: { slug: PageSlug }) {
  let content;
  switch (slug) {
    case "ueber-uns":
      content = <AboutContent />;
      break;
    case "zertifizierungen":
      content = <CertificationsContent />;
      break;
    case "dienstleistungen":
      content = <ServicesContent />;
      break;
    case "landverkehr":
      content = <LandTransportContent />;
      break;
    case "zollabwicklung":
      content = <CustomsContent />;
      break;
    case "track-and-trace":
      content = <TrackingContent />;
      break;
    case "warehouse":
      content = <WarehouseContent />;
      break;
    case "contact-us":
      content = <ContactContent />;
      break;
    case "blog":
      content = <BlogContent />;
      break;
  }

  return (
    <>
      <main>
        <PageHero slug={slug} />
        {content}
      </main>
      <Footer />
    </>
  );
}
