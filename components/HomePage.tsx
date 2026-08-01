import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { SiteImage as Image } from "@/components/SiteImage";
import {
  IconArrowUpRight,
  IconCheck,
  IconQuote,
} from "@tabler/icons-react";
import {
  FaFileInvoice,
  FaLocationDot,
  FaTruckFast,
  FaWarehouse,
} from "react-icons/fa6";
import { ActionIcon } from "@/components/ActionIcon";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { services, workflow } from "@/lib/site-data";

const serviceIcons = [
  FaTruckFast,
  FaFileInvoice,
  FaLocationDot,
  FaWarehouse,
];

export function HomePage() {
  return (
    <>
      <main>
        <section className="hero hero-home">
          <div className="hero-media hero-media-home" />
          <Header />
          <div className="hero-shade" />
          <div className="hero-content">
            <h1>
              Europa bewegen.
              <br />
              Verbindungen schaffen.
            </h1>
            <p className="hero-copy">
              Persönlich disponiert, lückenlos begleitet und zuverlässig ans
              Ziel gebracht.
            </p>
            <div className="hero-actions">
              <Link href="/dienstleistungen" className="text-link text-link-light">
                <span>Leistungen entdecken</span>
                <ActionIcon kind="forward" plain />
              </Link>
            </div>
          </div>
          <div className="hero-proof">
            <span>Seit 2014</span>
            <strong>120+</strong>
            <span>LKW im eigenen Fuhrpark</span>
          </div>
        </section>

        <section className="partner-strip" aria-label="Partner">
          <Image
            className="partner-logo partner-logo-vdh"
            src="/assets/partners/van-der-heijden.png"
            alt="Van der Heijden Transport & Logistiek"
            width={1119}
            height={234}
            sizes="(max-width: 600px) 70vw, 220px"
          />
          <Image
            className="partner-logo partner-logo-priority"
            src="/assets/partners/priority-freight.png"
            alt="Priority Freight"
            width={370}
            height={173}
            sizes="(max-width: 600px) 42vw, 170px"
          />
          <Image
            className="partner-logo partner-logo-martin"
            src="/assets/partners/martintrux.png"
            alt="Martintrux"
            width={412}
            height={110}
            sizes="(max-width: 600px) 42vw, 200px"
          />
          <Image
            className="partner-logo partner-logo-spedlog"
            src="/assets/partners/spedlogswiss.png"
            alt="Spedlogswiss"
            width={817}
            height={91}
            sizes="(max-width: 600px) 70vw, 225px"
          />
        </section>

        <section className="section intro-section" id="intro">
          <Reveal className="intro-heading">
            <p className="eyebrow">Unsere Erfahrung</p>
            <h2 className="intro-statement">
              Sara Transporte AG entwickelt maßgeschneiderte Transport- und
              Logistiklösungen für Unternehmen, die Verlässlichkeit,
              Schnelligkeit und direkte Kommunikation erwarten.
            </h2>
          </Reveal>

          <div className="experience-grid">
            <Reveal className="experience-photo">
              <Image
                src="/assets/legacy/2026/01/4.jpeg"
                alt="Sara Transporte LKW am Logistikstandort"
                fill
                sizes="(max-width: 900px) calc(100vw - 32px), 38vw"
              />
              <div className="photo-caption">
                <span>Eigener Fuhrpark</span>
                <strong>Bereit für Europa</strong>
              </div>
            </Reveal>

            <Reveal className="experience-stat" delay={100}>
              <span className="stat-number">25+</span>
              <p>Jahre Erfahrung in Transport, Spedition und Zoll.</p>
              <Link href="/ueber-uns" className="text-link">
                <span>Mehr über uns</span>
                <ActionIcon plain />
              </Link>
            </Reveal>

            <Reveal className="experience-copy" delay={180}>
              <p>
                Von Döttingen aus koordiniert unser Team den Fuhrpark rund um
                die Uhr. Eigene Werkstatt, grenznahe Zollstandorte und
                europäische Niederlassungen halten die Wege kurz.
              </p>
              <ul className="check-list">
                {[
                  "24/7 erreichbar und proaktiv",
                  "Direkte, kurze Kommunikationswege",
                  "ADR-geschulte Fahrer und eigener Fuhrpark",
                  "Transport und Verzollung aus einer Hand",
                ].map((item) => (
                  <li key={item}>
                    <IconCheck size={16} stroke={1.8} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <div className="service-marquee" aria-hidden="true">
          <span className="marquee-icon">
            <IconArrowUpRight size={34} stroke={1.5} />
          </span>
          <span>Best Service</span>
        </div>

        <section className="services-panel" id="leistungen">
          <div className="section services-panel-inner">
            <Reveal className="section-heading section-heading-light">
              <div>
                <p className="eyebrow">Unsere Leistungen</p>
                <h2>Logistik, die weiterdenkt.</h2>
              </div>
              <Link href="/dienstleistungen" className="text-link text-link-light">
                <span>Alle Leistungen</span>
                <ActionIcon kind="forward" plain />
              </Link>
            </Reveal>

            <div
              className="service-grid"
              role="region"
              aria-label="Unsere Leistungen"
              tabIndex={0}
            >
              {services.map((service, index) => {
                const ServiceIcon = serviceIcons[index];
                return (
                  <Reveal key={service.href} delay={index * 80}>
                    <Link href={service.href} className="service-card">
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
                          sizes="(max-width: 600px) calc(100vw - 56px), (max-width: 900px) 44vw, 24vw"
                        />
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section process-section home-process-section">
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

        <section className="section testimonial-section">
          <Reveal className="testimonial-mark">
            <IconQuote size={72} stroke={1.25} />
          </Reveal>
          <Reveal className="testimonial-copy" delay={80}>
            <blockquote>
              Zuverlässigkeit und Pünktlichkeit wird hier gross geschrieben.
              Sehr professionell – ich freue mich auf die weitere
              Zusammenarbeit.
            </blockquote>
            <p>
              <strong>Rinor Salihi</strong>
              <span>Google Bewertung</span>
            </p>
          </Reveal>
          <Reveal className="location-orbit" delay={150}>
            <div className="orbit-image orbit-one">
              <Image
                src="/assets/legacy/2026/01/7.jpeg"
                alt="Sara Transporte Fahrzeug"
                fill
                sizes="190px"
              />
            </div>
            <div className="orbit-image orbit-two">
              <Image
                src="/assets/legacy/2023/10/w_versand_0117500.jpg"
                alt="Logistikzentrum"
                fill
                sizes="170px"
              />
            </div>
            <div className="orbit-center">
              <strong>4</strong>
              <span>Standorte</span>
            </div>
          </Reveal>
        </section>

        <section className="section impact-panel">
          <div className="impact-copy">
            <p className="eyebrow eyebrow-light">Unsere Stärke</p>
            <h2>Leistung entlang der gesamten Lieferkette.</h2>
            <ul>
              <li>Transportplanung</li>
              <li>24/7 Überwachung</li>
              <li>Eigene Werkstatt</li>
              <li>Grenznahe Zollteams</li>
            </ul>
            <Link href="/contact-us" className="button button-light">
              <span>Kontakt aufnehmen</span>
              <ActionIcon />
            </Link>
          </div>
          <div className="impact-image">
            <Image
              src="/assets/legacy/2026/01/5.jpeg"
              alt="Orangefarbener Scania LKW am Logistikstandort"
              fill
              sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
            />
          </div>
          <div className="impact-stats">
            <div>
              <strong>120+</strong>
              <span>LKW im Fuhrpark</span>
            </div>
            <div>
              <strong>1’500</strong>
              <span>Palettenplätze</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Kundenbetreuung</span>
            </div>
          </div>
        </section>

        <section className="section story-section">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">Unser Weg</p>
              <h2>Gewachsen mit jeder Verbindung.</h2>
            </div>
            <Link href="/blog" className="text-link">
              <span>Mehr Einblicke</span>
              <ActionIcon kind="forward" plain />
            </Link>
          </Reveal>
          <div className="story-grid">
            <Reveal className="story-item">
              <Image
                src="/assets/legacy/2023/10/image00012.jpeg"
                alt="Sara Transporte LKW in der Schweiz"
                width={760}
                height={620}
              />
              <span>2014 · Döttingen</span>
              <h3>Als Familienunternehmen gestartet.</h3>
            </Reveal>
            <Reveal className="story-item" delay={90}>
              <Image
                src="/assets/legacy/2023/10/image00164.jpeg"
                alt="Sara Transporte am Logistikstandort"
                width={760}
                height={620}
              />
              <span>2019 · Waldshut-Tiengen</span>
              <h3>Mit eigenem Zollteam über die Grenze gewachsen.</h3>
            </Reveal>
            <Reveal className="story-item" delay={180}>
              <Image
                src="/assets/legacy/2023/10/w_versand_04.jpg"
                alt="Lagerhalle in Unterkirnach"
                width={760}
                height={620}
              />
              <span>Heute · Europa</span>
              <h3>Transport, Zoll und Lagerung aus einer Hand.</h3>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
