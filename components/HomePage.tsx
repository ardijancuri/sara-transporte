import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { Reveal } from "@/components/Reveal";
import { services, workflow } from "@/lib/site-data";

export function HomePage() {
  return (
    <>
      <main>
        <section className="hero hero-home">
          <Header />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="hero-eyebrow">
              Transport · Logistik · Zoll · Lagerung
            </p>
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
              <Link href="/contact-us#anfrage" className="button button-light">
                Transport anfragen <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/dienstleistungen" className="text-link text-link-light">
                Leistungen entdecken <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-proof">
            <span>Seit 2014</span>
            <strong>120+</strong>
            <span>LKW im eigenen Fuhrpark</span>
          </div>
          <a href="#intro" className="scroll-cue" aria-label="Weiter scrollen">
            <span>Scroll</span>
            <i aria-hidden="true">↓</i>
          </a>
        </section>

        <section className="partner-strip" aria-label="Partner">
          <span>Ein Netzwerk, das trägt</span>
          <img
            src="/assets/legacy/2023/10/van-der-heijden-transport-logo.png"
            alt="Van der Heijden Transport & Logistiek"
          />
          <img
            src="/assets/legacy/2023/10/Priority-Freight.png"
            alt="Priority Freight"
          />
          <img
            src="/assets/legacy/2023/10/MartinTrux-Logo-e1698833026509.jpeg"
            alt="Martintrux"
          />
          <img
            src="/assets/legacy/2026/04/spedlogswiss-logo.png"
            alt="Spedlogswiss"
          />
        </section>

        <section className="section intro-section" id="intro">
          <Reveal className="intro-heading">
            <div>
              <p className="eyebrow">Unsere Erfahrung</p>
              <h2>Ein Logistikpartner. Alle Wege.</h2>
            </div>
            <p className="lead">
              Sara Transporte AG entwickelt maßgeschneiderte Transport- und
              Logistiklösungen für Unternehmen, die Verlässlichkeit,
              Schnelligkeit und direkte Kommunikation erwarten.
            </p>
          </Reveal>

          <div className="experience-grid">
            <Reveal className="experience-photo">
              <img
                src="/assets/legacy/2026/01/4.jpeg"
                alt="Sara Transporte LKW am Logistikstandort"
              />
              <div className="photo-caption">
                <span>Eigener Fuhrpark</span>
                <strong>Bereit für Europa</strong>
              </div>
            </Reveal>

            <Reveal className="experience-stat" delay={100}>
              <span className="stat-number">12+</span>
              <p>Jahre Erfahrung in Transport, Spedition und Zoll.</p>
              <Link href="/ueber-uns" className="circle-link">
                <span>Mehr über uns</span>
                <i aria-hidden="true">↗</i>
              </Link>
            </Reveal>

            <Reveal className="experience-copy" delay={180}>
              <p>
                Von Döttingen aus koordiniert unser Team den Fuhrpark rund um
                die Uhr. Eigene Werkstatt, grenznahe Zollstandorte und
                europäische Niederlassungen halten die Wege kurz.
              </p>
              <ul className="check-list">
                <li>24/7 erreichbar und proaktiv</li>
                <li>Direkte, kurze Kommunikationswege</li>
                <li>ADR-geschulte Fahrer und eigener Fuhrpark</li>
                <li>Transport und Verzollung aus einer Hand</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="services-panel">
          <div className="section services-panel-inner">
            <Reveal className="section-heading section-heading-light">
              <div>
                <p className="eyebrow">Unsere Leistungen</p>
                <h2>Logistik, die weiterdenkt.</h2>
              </div>
              <Link href="/dienstleistungen" className="text-link text-link-light">
                Alle Leistungen <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <div className="service-grid">
              {services.map((service, index) => (
                <Reveal key={service.href} delay={index * 80}>
                  <Link href={service.href} className="service-card">
                    <span className="service-number">{service.number}</span>
                    <div className="service-card-image">
                      <img src={service.image} alt="" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.short}</p>
                    <span className="service-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section">
          <Reveal className="section-heading centered-heading">
            <div>
              <p className="eyebrow">So arbeiten wir</p>
              <h2>Vom Auftrag bis zur Ankunft.</h2>
            </div>
          </Reveal>
          <div className="process-layout">
            <Reveal className="process-image">
              <img
                src="/assets/legacy/2023/10/image00005-e1698833422232.jpeg"
                alt="Sara Transporte LKW auf europäischer Route"
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

          <div className="benefit-row">
            <Reveal>
              <span className="benefit-icon">◎</span>
              <div>
                <h3>Transparente Preise</h3>
                <p>Ein klares Angebot passend zu Route und Anforderung.</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <span className="benefit-icon">◫</span>
              <div>
                <h3>Volle Sichtbarkeit</h3>
                <p>Proaktive Updates und Track & Trace für Ihre Sendung.</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <span className="benefit-icon">↯</span>
              <div>
                <h3>Direkte Entscheidungen</h3>
                <p>Ein persönliches Team mit kurzen Kommunikationswegen.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section quote-section" id="anfrage">
          <Reveal className="quote-image">
            <img
              src="/assets/legacy/2023/10/image00174.jpeg"
              alt="Sara Transporte LKW in den Schweizer Bergen"
            />
            <div>
              <span>Europaweit</span>
              <strong>Von hier bis ans Ziel.</strong>
            </div>
          </Reveal>
          <Reveal className="quote-panel" delay={100}>
            <p className="eyebrow eyebrow-light">Schnelle Angebotserstellung</p>
            <h2>Erhalten Sie Ihr persönliches Angebot.</h2>
            <p>
              Teilen Sie uns die wichtigsten Eckdaten mit. Wir bereiten Ihre
              Anfrage direkt für unser Dispositionsteam vor.
            </p>
            <QuoteForm compact />
          </Reveal>
        </section>

        <section className="section testimonial-section">
          <Reveal className="testimonial-mark">“</Reveal>
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
              <img
                src="/assets/legacy/2026/01/7.jpeg"
                alt="Sara Transporte Fahrzeug"
              />
            </div>
            <div className="orbit-image orbit-two">
              <img
                src="/assets/legacy/2023/10/w_versand_0117500.jpg"
                alt="Logistikzentrum"
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
            <Link href="/contact-us" className="button button-outline-light">
              Kontakt aufnehmen <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="impact-image">
            <img
              src="/assets/legacy/2023/10/w_versand_03.jpg"
              alt="Moderne Lager- und Kommissionierungsanlage"
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
              Mehr Einblicke <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
          <div className="story-grid">
            <Reveal className="story-item">
              <img
                src="/assets/legacy/2023/10/image00012.jpeg"
                alt="Sara Transporte LKW in der Schweiz"
              />
              <span>2014 · Döttingen</span>
              <h3>Als Familienunternehmen gestartet.</h3>
            </Reveal>
            <Reveal className="story-item" delay={90}>
              <img
                src="/assets/legacy/2023/10/image00164.jpeg"
                alt="Sara Transporte am Logistikstandort"
              />
              <span>2019 · Waldshut-Tiengen</span>
              <h3>Mit eigenem Zollteam über die Grenze gewachsen.</h3>
            </Reveal>
            <Reveal className="story-item" delay={180}>
              <img
                src="/assets/legacy/2023/10/w_versand_04.jpg"
                alt="Lagerhalle in Unterkirnach"
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
