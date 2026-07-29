"use client";

import { SiteImage as Image } from "@/components/SiteImage";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { ActionIcon } from "@/components/ActionIcon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { stripLocaleFromPathname, useI18n } from "@/lib/i18n";
import { primaryNav } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const activePath = stripLocaleFromPathname(pathname ?? "/");

  return (
    <header className="site-header">
      <Link
        href="/"
        className="brand"
        aria-label={t("Sara Transporte Startseite")}
      >
        <Image
          className="brand-logo"
          src="/assets/brand/sara-transporte-logo.png"
          alt="Sara Transporte AG"
          width={2065}
          height={762}
          priority
        />
      </Link>

      <button
        type="button"
        className="icon-button menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? t("Menü schliessen") : t("Menü öffnen")}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <IconX size={20} stroke={1.8} />
        ) : (
          <IconMenu2 size={20} stroke={1.8} />
        )}
      </button>

      <nav
        id="main-navigation"
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label={t("Hauptnavigation")}
      >
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`main-nav-link ${
              activePath === item.href ||
              (item.href !== "/" && activePath.startsWith(item.href))
                ? "active"
                : ""
            }`}
            onClick={() => setOpen(false)}
          >
            {t(item.label)}
          </Link>
        ))}

        <div className="mobile-menu-tools" aria-label={t("Aktuelle Sprache")}>
          <a
            href="https://www.linkedin.com/company/sara-transporte-ag/"
            target="_blank"
            rel="noreferrer"
            className="icon-button mobile-tool-button"
            aria-label={t("Sara Transporte auf LinkedIn")}
          >
            <FaLinkedinIn size={22} aria-hidden="true" />
          </a>
          <a
            href="tel:+41562821181"
            className="icon-button mobile-tool-button"
            aria-label={t("Sara Transporte anrufen")}
          >
            <FaPhoneAlt size={19} aria-hidden="true" />
          </a>
          <LanguageSwitcher mobile onSelect={() => setOpen(false)} />
        </div>
      </nav>

      <div className="header-actions">
        <div className="header-utility-links">
          <a
            href="https://www.linkedin.com/company/sara-transporte-ag/"
            target="_blank"
            rel="noreferrer"
            className="icon-button icon-button-ghost header-icon-link"
            aria-label={t("Sara Transporte auf LinkedIn")}
          >
            <FaLinkedinIn size={20} aria-hidden="true" />
          </a>
          <a
            href="tel:+41562821181"
            className="icon-button icon-button-ghost header-icon-link"
            aria-label={t("Sara Transporte anrufen")}
          >
            <FaPhoneAlt size={18} aria-hidden="true" />
          </a>
          <LanguageSwitcher />
        </div>
        <Link href="/contact-us#anfrage" className="header-cta">
          <span>{t("Anfrage")}</span>
          <ActionIcon />
        </Link>
      </div>
    </header>
  );
}
