"use client";

import { useState, type FormEvent } from "react";
import { ActionIcon } from "@/components/ActionIcon";
import { useI18n } from "@/lib/i18n";
import { company } from "@/lib/site-data";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `${t("Transportanfrage von")} ${
      form.get("name") || t("Website")
    }`;
    const body = [
      `${t("Name")}: ${form.get("name") || ""}`,
      `E-Mail: ${form.get("email") || ""}`,
      `${t("Telefon")}: ${form.get("phone") || ""}`,
      `${t("Von")}: ${form.get("from") || ""}`,
      `${t("Nach")}: ${form.get("to") || ""}`,
      `${t("Gewicht")}: ${form.get("weight") || ""}`,
      `${t("Nachricht")}: ${form.get("message") || ""}`,
    ].join("\n");

    setSubmitted(true);
    window.location.href = `mailto:${company.emailCH}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className={compact ? "quote-form compact" : "quote-form"}
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        <label>
          <span>{t("Vollständiger Name")}</span>
          <input
            name="name"
            type="text"
            required
            placeholder={t("Ihr Name")}
          />
        </label>
        <label>
          <span>E-Mail</span>
          <input
            name="email"
            type="email"
            required
            placeholder="name@firma.ch"
          />
        </label>
        <label>
          <span>{t("Telefon")}</span>
          <input name="phone" type="tel" placeholder="+41 ..." />
        </label>
        {!compact && (
          <label>
            <span>{t("Gewicht")}</span>
            <input
              name="weight"
              type="text"
              placeholder={t("z. B. 2.5 t")}
            />
          </label>
        )}
        <label>
          <span>{t("Von")}</span>
          <input
            name="from"
            type="text"
            required
            placeholder={t("Abholort")}
          />
        </label>
        <label>
          <span>{t("Nach")}</span>
          <input
            name="to"
            type="text"
            required
            placeholder={t("Zielort")}
          />
        </label>
      </div>
      <label className="message-field">
        <span>{t("Details")}</span>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder={t("Ware, Termin und besondere Anforderungen")}
        />
      </label>
      <button type="submit" className="button button-light">
        <span>{t("Anfrage vorbereiten")}</span>
        <ActionIcon />
      </button>
      {submitted && (
        <p className="form-note" role="status">
          {t("Ihr E-Mail-Programm wird mit der vorbereiteten Anfrage geöffnet.")}
        </p>
      )}
    </form>
  );
}
