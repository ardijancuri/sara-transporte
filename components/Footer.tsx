import Link from "next/link";
import { company, primaryNav, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <p className="footer-kicker">Sara Transporte AG</p>
          <h2>Ihre Ware in sicheren Händen.</h2>
        </div>
        <Link href="/contact-us#anfrage" className="button button-light">
          Transport anfragen <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand brand-footer">
            <span className="brand-mark">S</span>
            <span className="brand-copy">
              <strong>SARA</strong>
              <small>TRANSPORTE AG</small>
            </span>
          </div>
          <p>
            Maßgeschneiderte Transport- und Logistiklösungen für Unternehmen in
            der Schweiz und ganz Europa.
          </p>
          <a href={`tel:${company.phoneCH.replaceAll(" ", "")}`}>
            {company.phoneCH}
          </a>
          <a href={`mailto:${company.emailCH}`}>{company.emailCH}</a>
        </div>

        <div>
          <h3>Navigation</h3>
          {primaryNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/blog">Aktuelles</Link>
        </div>

        <div>
          <h3>Leistungen</h3>
          {services.map((service) => (
            <Link href={service.href} key={service.href}>
              {service.title}
            </Link>
          ))}
        </div>

        <div>
          <h3>Standorte</h3>
          {company.addresses.map((address) => (
            <div className="footer-address" key={address.country}>
              <strong>{address.country}</strong>
              <span>{address.company}</span>
              {address.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sara Transporte AG</span>
        <a
          href="https://www.linkedin.com/company/sara-transporte-ag/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
