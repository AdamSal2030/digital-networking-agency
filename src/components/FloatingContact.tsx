"use client";

import { useEffect, useState } from "react";

const BOOKING = "/contact";
const EMAIL = "mailto:sam@digitalnetworkingagency.com";
const PHONE = "tel:+13302276337";
// WhatsApp: digits only, no + or spaces
const WHATSAPP = "https://wa.me/13302276337";

const ACTIONS = [
  { href: "/contact", label: "Get featured", icon: "★", primary: true, external: false },
  { href: BOOKING, label: "Book a call", icon: "◷", external: true },
  { href: WHATSAPP, label: "WhatsApp", icon: "✆", external: true },
  { href: EMAIL, label: "Email us", icon: "✉", external: false },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  // a one-time subtle nudge so people notice it
  useEffect(() => {
    const t = setTimeout(() => setNudge(true), 3500);
    const t2 = setTimeout(() => setNudge(false), 6500);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`fab-wrap${open ? " fab-open" : ""}`}>
      {open && (
        <button
          className="fab-scrim"
          aria-label="Close contact menu"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="fab-menu" role="menu" aria-hidden={!open}>
        {ACTIONS.map((a, i) => {
          const inner = (
            <>
              <span className="fab-item-label">{a.label}</span>
              <span className="fab-item-icon" aria-hidden="true">
                {a.icon}
              </span>
            </>
          );
          const style = { transitionDelay: `${(ACTIONS.length - i) * 0.04}s` };
          const cls = `fab-item${a.primary ? " fab-item-primary" : ""}`;
          return a.external ? (
            <a
              key={a.label}
              className={cls}
              style={style}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              {inner}
            </a>
          ) : (
            <a
              key={a.label}
              className={cls}
              style={style}
              href={a.href}
              onClick={() => setOpen(false)}
            >
              {inner}
            </a>
          );
        })}
      </div>

      {!open && nudge && <span className="fab-bubble">Get featured →</span>}

      <button
        className={`fab-btn${nudge ? " fab-nudge" : ""}`}
        aria-label={open ? "Close contact menu" : "Contact us"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fab-icon-open" aria-hidden="true">
          {/* chat glyph */}
          <svg viewBox="0 0 24 24" width="26" height="26">
            <path
              d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="10.5" r="1.1" fill="currentColor" />
            <circle cx="12.5" cy="10.5" r="1.1" fill="currentColor" />
            <circle cx="16" cy="10.5" r="1.1" fill="currentColor" />
          </svg>
        </span>
        <span className="fab-icon-close" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
