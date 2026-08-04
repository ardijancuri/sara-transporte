"use client";

import { useEffect, useRef, useState } from "react";
import { SiteImage as Image } from "@/components/SiteImage";
import {
  localeNames,
  useI18n,
  type Locale,
} from "@/lib/i18n";

const locales: Locale[] = ["de", "en", "fr"];
const localeFlags: Record<Locale, string> = {
  de: "/assets/flags/de.svg",
  en: "/assets/flags/us.svg",
  fr: "/assets/flags/fr.svg",
};

export function LanguageSwitcher({
  mobile = false,
  onSelect,
}: {
  mobile?: boolean;
  onSelect?: () => void;
}) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function chooseLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    setOpen(false);
    onSelect?.();
  }

  return (
    <div
      ref={rootRef}
      className={mobile ? "language-switcher is-mobile" : "language-switcher"}
      data-no-translate="true"
    >
      <button
        type="button"
        className={
          mobile
            ? "icon-button mobile-tool-button language-trigger"
            : "icon-button icon-button-ghost header-icon-link language-trigger"
        }
        aria-label={`${t("Sprache wählen")}: ${localeNames[locale]}`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        <Image
          className="language-flag"
          src={localeFlags[locale]}
          alt=""
          width={36}
          height={36}
        />
      </button>

      {open && (
        <div
          className="language-menu"
          role="menu"
          aria-label={t("Sprache wählen")}
        >
          {locales.map((item) => (
            <button
              type="button"
              role="menuitemradio"
              aria-checked={locale === item}
              className={locale === item ? "is-active" : ""}
              key={item}
              onClick={() => chooseLocale(item)}
            >
              <span>{localeNames[item]}</span>
              <small>{item.toUpperCase()}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
