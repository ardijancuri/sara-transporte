"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNav } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Sara Transporte Startseite">
        <span className="brand-mark">S</span>
        <span className="brand-copy">
          <strong>SARA</strong>
          <small>TRANSPORTE AG</small>
        </span>
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? "Menü schliessen" : "Menü öffnen"}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label="Hauptnavigation"
      >
        {primaryNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href))
                ? "active"
                : ""
            }
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link href="/contact-us#anfrage" className="header-cta">
        Anfrage <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}
