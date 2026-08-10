"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const FORMSPREE = "https://formspree.io/f/moeadqdz";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={styles.success}>
        <span className={styles.successMark} aria-hidden="true">
          <svg viewBox="0 0 52 52" width="60" height="60">
            <circle
              cx="26"
              cy="26"
              r="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M15 27l7 7 15-16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className={styles.successTitle}>You&rsquo;re on the list.</h2>
        <p className={styles.successText}>
          Thanks for reaching out. We&rsquo;ll get back to you within 24 hours
          with the fastest path to your feature.
        </p>
        <button
          type="button"
          className={styles.successBtn}
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label>
          First name <span className={styles.req}>*</span>
          <input type="text" name="first_name" required />
        </label>
        <label>
          Last name
          <input type="text" name="last_name" />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          Email <span className={styles.req}>*</span>
          <input type="email" name="email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
      </div>

      <label>
        Website or social profile
        <input type="text" name="website" placeholder="https://" />
      </label>

      <label>
        Publications you have in mind
        <input
          type="text"
          name="publications"
          placeholder="e.g. Forbes, USA Today, Yahoo Finance"
        />
      </label>

      <div className={styles.row}>
        <label>
          Who are we featuring?
          <select name="featuring" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Personal brand</option>
            <option>Company</option>
            <option>Both</option>
          </select>
        </label>
        <label>
          Timeline
          <select name="timeline" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>As soon as possible</option>
            <option>Within a month</option>
            <option>1–3 months</option>
            <option>Just exploring</option>
          </select>
        </label>
      </div>

      <label>
        Budget in mind
        <select name="budget" defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          <option>Under $1,000</option>
          <option>$1,000 – $3,000</option>
          <option>$3,000 – $10,000</option>
          <option>$10,000+</option>
          <option>Not sure yet</option>
        </select>
      </label>

      <label>
        Anything else?
        <textarea name="message" rows={4} />
      </label>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my feature"}
      </button>

      {status === "error" && (
        <p className={styles.errnote}>
          Something went wrong. Please email us at{" "}
          <a href="mailto:sam@digitalnetworkingagency.com">
            sam@digitalnetworkingagency.com
          </a>
          .
        </p>
      )}
      <p className={styles.replynote}>We reply within 24 hours, every time.</p>
    </form>
  );
}
