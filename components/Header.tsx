"use client";

import { SiteImage as Image } from "@/components/SiteImage";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  IconChevronDown,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { ActionIcon } from "@/components/ActionIcon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocalizedLink as Link } from "@/components/LocalizedLink";
import { stripLocaleFromPathname, useI18n } from "@/lib/i18n";
import { primaryNav, services } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesNavRef = useRef<HTMLDivElement>(null);
  const servicesToggleRef = useRef<HTMLButtonElement>(null);
  const { t } = useI18n();
  const activePath = stripLocaleFromPathname(pathname ?? "/");
  const servicesActive =
    activePath === "/dienstleistungen" ||
    services.some(
      (service) =>
        activePath === service.href ||
        activePath.startsWith(`${service.href}/`),
    );

  useEffect(() => {
    const mobileViewport = window.matchMedia("(max-width: 900px)");

    function syncScrollLock() {
      document.documentElement.classList.toggle(
        "mobile-menu-open",
        open && mobileViewport.matches,
      );
    }

    syncScrollLock();
    mobileViewport.addEventListener("change", syncScrollLock);

    return () => {
      mobileViewport.removeEventListener("change", syncScrollLock);
      document.documentElement.classList.remove("mobile-menu-open");
    };
  }, [open]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!servicesNavRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (servicesOpen) {
        setServicesOpen(false);
        servicesToggleRef.current?.focus();
      } else if (open) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, servicesOpen]);

  function closeNavigation() {
    setOpen(false);
    setServicesOpen(false);
  }

  function toggleNavigation() {
    const nextOpen = !open;
    setOpen(nextOpen);
    if (!nextOpen) setServicesOpen(false);
  }

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

      <div className="mobile-header-controls">
        <LanguageSwitcher mobile />
        <button
          type="button"
          className="icon-button menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? t("Menü schliessen") : t("Menü öffnen")}
          onClick={toggleNavigation}
        >
          {open ? (
            <IconX size={20} stroke={1.8} />
          ) : (
            <IconMenu2 size={20} stroke={1.8} />
          )}
        </button>
      </div>

      <nav
        id="main-navigation"
        className={`main-nav${open ? " is-open" : ""}${
          servicesOpen ? " has-expanded-submenu" : ""
        }`}
        aria-label={t("Hauptnavigation")}
      >
        {primaryNav.map((item) => {
          if (item.href !== "/dienstleistungen") {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`main-nav-link ${
                  activePath === item.href ||
                  (item.href !== "/" && activePath.startsWith(item.href))
                    ? "active"
                    : ""
                }`}
                onClick={closeNavigation}
              >
                {t(item.label)}
              </Link>
            );
          }

          return (
            <div
              ref={servicesNavRef}
              className={`main-nav-group main-nav-group-services${
                servicesOpen ? " is-open" : ""
              }`}
              key={item.href}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  setServicesOpen(false);
                }
              }}
            >
              <div className="main-nav-service-row">
                <Link
                  href={item.href}
                  className={`main-nav-link ${servicesActive ? "active" : ""}`}
                  onClick={closeNavigation}
                >
                  {t(item.label)}
                </Link>
                <button
                  ref={servicesToggleRef}
                  type="button"
                  className="services-menu-toggle"
                  aria-expanded={servicesOpen}
                  aria-controls="services-navigation"
                  aria-label={`${t(item.label)}: ${
                    servicesOpen ? t("Menü schliessen") : t("Menü öffnen")
                  }`}
                  onClick={() => setServicesOpen((current) => !current)}
                >
                  <IconChevronDown size={16} stroke={2} aria-hidden="true" />
                </button>
              </div>

              <div
                id="services-navigation"
                className="services-submenu"
              >
                {services.map((service) => (
                  <Link
                    href={service.href}
                    className={`services-submenu-link${
                      activePath === service.href ? " active" : ""
                    }`}
                    key={service.href}
                    onClick={closeNavigation}
                  >
                    <strong>{t(service.title)}</strong>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mobile-menu-tools">
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
        </div>
      </nav>

      <div className="header-actions">
        <div className="header-utility-links">
          <LanguageSwitcher />
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
        </div>
        <Link href="/contact-us#anfrage" className="header-cta">
          <span>{t("Anfrage")}</span>
          <ActionIcon />
        </Link>
      </div>
    </header>
  );
}
