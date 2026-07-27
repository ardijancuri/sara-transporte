"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/lib/site-data";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Transportanfrage von ${form.get("name") || "Website"}`;
    const body = [
      `Name: ${form.get("name") || ""}`,
      `E-Mail: ${form.get("email") || ""}`,
      `Telefon: ${form.get("phone") || ""}`,
      `Von: ${form.get("from") || ""}`,
      `Nach: ${form.get("to") || ""}`,
      `Gewicht: ${form.get("weight") || ""}`,
      `Nachricht: ${form.get("message") || ""}`,
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
          <span>Vollständiger Name</span>
          <input name="name" type="text" required placeholder="Ihr Name" />
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
          <span>Telefon</span>
          <input name="phone" type="tel" placeholder="+41 ..." />
        </label>
        {!compact && (
          <label>
            <span>Gewicht</span>
            <input name="weight" type="text" placeholder="z. B. 2.5 t" />
          </label>
        )}
        <label>
          <span>Von</span>
          <input name="from" type="text" required placeholder="Abholort" />
        </label>
        <label>
          <span>Nach</span>
          <input name="to" type="text" required placeholder="Zielort" />
        </label>
      </div>
      <label className="message-field">
        <span>Details</span>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Ware, Termin und besondere Anforderungen"
        />
      </label>
      <button type="submit" className="button button-light">
        Anfrage vorbereiten <span aria-hidden="true">↗</span>
      </button>
      {submitted && (
        <p className="form-note" role="status">
          Ihr E-Mail-Programm wird mit der vorbereiteten Anfrage geöffnet.
        </p>
      )}
    </form>
  );
}
