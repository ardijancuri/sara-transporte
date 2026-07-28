"use client";

import Link from "next/link";
import { SiteImage as Image } from "@/components/SiteImage";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IconBrandLinkedin,
  IconMenu2,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import { ActionIcon } from "@/components/ActionIcon";
import { primaryNav } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Sara Transporte Startseite">
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
        aria-label={open ? "Menü schliessen" : "Menü öffnen"}
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

      <div className="header-actions">
        <a
          href="https://www.linkedin.com/company/sara-transporte-ag/"
          target="_blank"
          rel="noreferrer"
          className="icon-button icon-button-ghost header-icon-link"
          aria-label="Sara Transporte auf LinkedIn"
        >
          <IconBrandLinkedin size={16} stroke={1.8} />
        </a>
        <a
          href="tel:+41562821181"
          className="icon-button icon-button-ghost header-icon-link"
          aria-label="Sara Transporte anrufen"
        >
          <IconPhone size={16} stroke={1.8} />
        </a>
        <Link href="/contact-us#anfrage" className="header-cta">
          <span>Anfrage</span>
          <ActionIcon />
        </Link>
      </div>
    </header>
  );
}
