"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { FieldIcon } from "./FieldIcon";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(name: string) {
    setSelectedServices((selected) => (selected.includes(name) ? selected.filter((entry) => entry !== name) : [...selected, name]));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        form.reset();
        setSelectedServices([]);
        setStatus({ kind: "sent", message: "Request sent. We will reply to the email address you gave." });
        return;
      }
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setStatus({
        kind: "error",
        message:
          body.error === "not_configured"
            ? "This form is not connected to an inbox yet, so nothing was sent."
            : body.error === "invalid"
              ? "Add your name, a valid email address and a message, then send again."
              : "The request could not be sent. Try again in a minute.",
      });
    } catch {
      setStatus({ kind: "error", message: "The request could not be sent. Check your connection and try again." });
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-pair">
        <label className="field">
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label className="field">
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="form-pair">
        <label className="field">
          Company (optional)
          <input name="company" autoComplete="organization" />
        </label>
        <label className="field">
          Phone (optional)
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <div className="form-pair">
        <label className="field">
          Project location (optional)
          <input name="location" placeholder="County and state" />
        </label>
        <label className="field">
          Commodity (optional)
          <input name="commodity" placeholder="Lithium, gold, silver" />
        </label>
      </div>
      <fieldset className="scope-picker">
        <legend>
          What would you like help with? <span>Optional</span>
        </legend>
        <p>Select every area that applies.</p>
        <div className="scope-choices">
          {services.map((service) => {
            const selected = selectedServices.includes(service.name);
            return (
              <button
                key={service.id}
                className="scope-choice"
                data-service={service.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleService(service.name)}
              >
                <FieldIcon kind={service.id} />
                <span>{service.name}</span>
              </button>
            );
          })}
        </div>
        <input type="hidden" name="services" value={selectedServices.join(", ")} />
      </fieldset>
      <label className="field">
        What do you need?
        <textarea name="message" required />
      </label>
      <label className="hp" aria-hidden="true">
        Leave this empty
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div>
        <button className="btn" type="submit" disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending" : "Request a Consultation"}
        </button>
      </div>
      {status.message && (
        <p className="form-status" data-kind={status.kind} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
