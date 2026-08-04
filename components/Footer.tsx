import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { SiteImage as Image } from "@/components/SiteImage";
import {
  IconMail,
  IconPhone,
  IconWorld,
} from "@tabler/icons-react";
import { ActionIcon } from "@/components/ActionIcon";
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
          <span>Transport anfragen</span>
          <ActionIcon />
        </Link>
      </div>

      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand brand-footer">
            <Image
              className="brand-logo"
              src="/assets/brand/sara-transporte-logo.png"
              alt="Sara Transporte AG"
              width={2065}
              height={762}
            />
          </div>
          <p>
            Maßgeschneiderte Transport- und Logistiklösungen für Unternehmen in
            der Schweiz und ganz Europa.
          </p>
          <a
            className="footer-contact-link"
            href={`tel:${company.phoneCH.replaceAll(" ", "")}`}
          >
            <IconPhone size={16} stroke={1.7} aria-hidden="true" />
            <span>{company.phoneCH}</span>
          </a>
          <a className="footer-contact-link" href={`mailto:${company.emailCH}`}>
            <IconMail size={16} stroke={1.7} aria-hidden="true" />
            <span>{company.emailCH}</span>
          </a>
          <a
            className="footer-contact-link"
            href="https://sara.websped.winsped.de/"
            target="_blank"
            rel="noreferrer"
          >
            <IconWorld size={16} stroke={1.7} aria-hidden="true" />
            <span>sara.websped.winsped.de</span>
          </a>
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
            <div
              className="footer-address"
              key={`${address.country}-${address.company}-${address.lines[0]}`}
            >
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
        <span className="footer-credit">
          Entwickelt von{" "}
          <a
            className="footer-credit-link"
            href="https://oninova.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Oninova
          </a>
        </span>
      </div>
    </footer>
  );
}
