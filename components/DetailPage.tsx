import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import {
  certifications,
  company,
  pages,
  serviceExtras,
  services,
  team,
  workflow,
  type PageSlug,
} from "@/lib/site-data";

function PageHero({ slug }: { slug: PageSlug }) {
  const page = pages[slug];
  return (
    <section
      className="hero hero-detail"
      style={{ backgroundImage: `url("${page.image}")` }}
    >
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
      <section className="section detail-intro">
        <Reveal>
          <p className="eyebrow">Unsere Geschichte</p>
          <h2>Logistik mit Verantwortung und persönlicher Nähe.</h2>
        </Reveal>
        <Reveal className="prose-columns" delay={80}>
          <div>
            <p>
              Sara Transporte AG wurde 2014 als familiengeführtes Unternehmen
              in der Schweiz gegründet. Langjährige Erfahrung in Logistik und
              Spedition, ein engagiertes Team sowie starke Kunden- und
              Partnerbeziehungen liessen das Unternehmen rasch wachsen.
            </p>
            <p>
              Am Hauptsitz in Döttingen wird der gesamte Fuhrpark disponiert
              und koordiniert. Unser Team betreut Kunden rund um die Uhr und
              garantiert dadurch eine schnelle, verlässliche Abwicklung.
            </p>
          </div>
          <div>
            <p>
              In Möhlin wird der Fuhrpark durch unsere eigenen Werkstattleiter
              und Mechaniker geprüft und gewartet. Seit 2019 betreut unser
              Schwesterunternehmen in Waldshut-Tiengen deutsche Kunden und
              übernimmt grenznahe Verzollungsdienstleistungen.
            </p>
            <p>
              Mit dem Standort Durham stärken wir seit 2021 den Linienverkehr
              von und nach Grossbritannien. Unser Lager in Unterkirnach
              erweitert die Gruppe um flexible Lager- und
              Kommissionierungslösungen.
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
          <img
            src="/assets/legacy/2023/10/image00174.jpeg"
            alt="Sara Transporte Fahrzeug in alpiner Landschaft"
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
          <ul className="check-list">
            <li>Direkte und kurze Kommunikationswege</li>
            <li>Motiviertes, dynamisches und kompetentes Team</li>
            <li>Eigene LKW-Flotte und Lagermöglichkeiten</li>
          </ul>
        </Reveal>
      </section>

      <section className="section team-section">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Unser Team</p>
            <h2>Menschen, die Ihre Sendung begleiten.</h2>
          </div>
        </Reveal>
        <div className="team-roster">
          {team.map(([name, role], index) => (
            <Reveal className="team-member" key={name} delay={(index % 4) * 50}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
                <img src={certificate.image} alt="" />
              </div>
              <div>
                <span>Zertifikat {String(index + 1).padStart(2, "0")}</span>
                <h3>{certificate.name}</h3>
                <p>{certificate.text}</p>
                <strong>PDF öffnen ↗</strong>
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
      <section className="section detail-intro">
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
      <section className="section services-index">
        {[...services, ...extraServices].map((service, index) => (
          <Reveal key={service.title} delay={(index % 3) * 70}>
            <Link className="service-index-row" href={service.href}>
              <span>{service.number}</span>
              <div className="service-index-image">
                <img src={service.image} alt="" />
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
          </Reveal>
        ))}
      </section>
      <section className="section workflow-section">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Wie wir arbeiten</p>
            <h2>Ein transparenter Ablauf in vier Schritten.</h2>
          </div>
        </Reveal>
        <div className="workflow-grid">
          {workflow.map((step, index) => (
            <Reveal key={step.number} delay={index * 60}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
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
          ["/assets/legacy/2023/10/image00012.jpeg", "ADR & Thermotransport"],
        ].map(([image, title], index) => (
          <Reveal key={title} delay={index * 80}>
            <img src={image} alt="" />
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
          <Reveal>
            <img
              src="/assets/legacy/2023/10/van-der-heijden-transport-logo.png"
              alt="Van der Heijden Transport & Logistiek"
            />
            <h3>BeNeLux</h3>
            <p>
              Tägliche Abfahrten zwischen der Schweiz und Hapert verbinden uns
              mit einem erfahrenen Spezialisten für Warehousing, Hebebühnen,
              Ladekran und termingenaue Zustellungen in der gesamten
              BeNeLux-Region.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src="/assets/legacy/2023/10/Priority-Freight.png"
              alt="Priority Freight"
            />
            <h3>Grossbritannien</h3>
            <p>
              Über das Verteilzentrum Dover bietet unser Partner zeitkritische
              Express-, Sonder- und Stückguttransporte mit flächendeckender
              Zustellung und Track & Trace.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CustomsContent() {
  const groups = [
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
  ];
  return (
    <>
      <section className="section customs-groups">
        {groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 70}>
            <span>0{index + 1}</span>
            <h2>{group.title}</h2>
            <ul className="check-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>
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
            <p>Lonzaring 9, DE-79761 Waldshut-Tiengen</p>
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
      <section className="section customs-partners">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">Partnernetzwerk</p>
            <h2>Zollkompetenz über Grenzen hinweg.</h2>
          </div>
        </Reveal>
        <div className="compact-columns">
          <div>
            <span>Niederlande</span>
            <h3>Customs Support</h3>
            <p>Marketing 19, NL-6921 RE Duiven</p>
            <p>+31 26 370 8622</p>
          </div>
          <div>
            <span>Belgien</span>
            <h3>Customs Support</h3>
            <p>Nicolaasstraat – Haven 1147, BE-9130 Kallo-Beveren</p>
            <p>+32 3 750 33 60</p>
          </div>
          <div>
            <span>Grossbritannien</span>
            <h3>Martintrux Group Ltd.</h3>
            <p>Lord Warden House, GB-CT17 9EQ Dover</p>
            <p>+44 130 421 31 22</p>
          </div>
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
            Zum Track & Trace <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
        <Reveal className="tracking-visual" delay={100}>
          <img
            src="/assets/legacy/2026/01/3.jpeg"
            alt="Sara Transporte LKW"
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
          <img
            src="/assets/legacy/2023/10/w_versand_0117500.jpg"
            alt="Sara Transporte Lagerstandort Unterkirnach"
          />
        </Reveal>
        <Reveal delay={80}>
          <img
            src="/assets/legacy/2023/10/w_versand_03.jpg"
            alt="Fördertechnik im Lager"
          />
        </Reveal>
        <Reveal delay={160}>
          <img
            src="/assets/legacy/2023/10/w_versand_04.jpg"
            alt="Regalreihen im Lager"
          />
        </Reveal>
      </section>
      <section className="section warehouse-offers">
        <Reveal>
          <span>Branchen</span>
          <h2>Für anspruchsvolle Warenströme.</h2>
          <ul className="check-list">
            <li>Konsumgüter</li>
            <li>Lebensmittel & Getränke</li>
            <li>Elektronik</li>
          </ul>
        </Reveal>
        <Reveal delay={100}>
          <span>Leistungen</span>
          <h2>Flexibel kombinierbar.</h2>
          <ul className="check-list">
            <li>Gemeinschaftslagerung</li>
            <li>Cross-Docking & Transloading</li>
            <li>Fulfilment- und FBA-Vorbereitung</li>
          </ul>
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
          <p className="eyebrow">Direkter Kontakt</p>
          <h2>Wir sind für Sie erreichbar.</h2>
          <div className="contact-block">
            <span>Schweiz</span>
            <a href="tel:+41562821181">{company.phoneCH}</a>
          </div>
          <div className="contact-block">
            <span>Deutschland</span>
            <a href="tel:+4977518948180">{company.phoneDE}</a>
          </div>
          <div className="contact-block">
            <span>Notfallnummer</span>
            <a href="tel:+41799323333">{company.emergency}</a>
          </div>
          <div className="contact-block">
            <span>E-Mail</span>
            <a href={`mailto:${company.emailCH}`}>{company.emailCH}</a>
            <a href={`mailto:${company.emailDE}`}>{company.emailDE}</a>
          </div>
        </Reveal>
        <Reveal className="contact-form-panel" delay={100}>
          <p className="eyebrow eyebrow-light">Ihre Anfrage</p>
          <h2>Wohin dürfen wir für Sie fahren?</h2>
          <QuoteForm />
        </Reveal>
      </section>
      <section className="section address-grid">
        {company.addresses.map((address, index) => (
          <Reveal key={address.country} delay={index * 80}>
            <span>0{index + 1}</span>
            <h2>{address.country}</h2>
            <p>
              <strong>{address.company}</strong>
              {address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </Reveal>
        ))}
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
      image: "/assets/legacy/2023/10/image00012.jpeg",
    },
    {
      tag: "Expansion · 2019",
      title: "Grenznahe Zollkompetenz in Deutschland.",
      text: "Der Standort Waldshut-Tiengen schafft direkte Wege für deutsche Kunden und Zollabwicklung.",
      image: "/assets/legacy/2023/10/image00164.jpeg",
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
          <img src={story.image} alt="" />
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
