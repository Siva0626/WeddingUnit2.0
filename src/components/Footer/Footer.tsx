"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems, serviceItems } from "@/data/showcase";
import styles from "./Footer.module.css";

function SocialIcon({ type }: { type: "instagram" | "facebook" | "youtube" | "threads" }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (type === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 7c3.6 0 6 2.2 6 6.1V19H9.5v-5.5c0-1.4-.5-2.5-1.9-2.5-1.3 0-2.1.9-2.1 2.5V19H3V7h2.5v1.6C6.2 7.5 6.9 7 7 7Zm9.4 0c2.8 0 4.6 1.8 4.6 5.2V19h-2.5v-5.3c0-1.7-.6-2.7-2-2.7s-2.2 1-2.2 2.7V19h-2.5V7H14v1.7c.6-1.1 1.4-1.7 2.4-1.7Z" />
    </svg>
  );
}

export function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <Image
              src="/assets/branding/logo.png"
              alt="The Wedding Unit"
              width={190}
              height={70}
              className={styles.logo}
            />
            <p className={styles.tagline}>
              Honest photographs. Cinematic films. Real moments remembered.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Instagram"><SocialIcon type="instagram" /></a>
              <a href="#" aria-label="Facebook"><SocialIcon type="facebook" /></a>
              <a href="#" aria-label="YouTube"><SocialIcon type="youtube" /></a>
              <a href="#" aria-label="Threads"><SocialIcon type="threads" /></a>
            </div>
          </div>

          <div className={styles.column}>
            <h3>Explore</h3>
            <div className={styles.links}>
              {navItems.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3>Services</h3>
            <div className={styles.links}>
              {serviceItems.map((service) => (
                <a key={service} href="#services">{service}</a>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h3>Contact</h3>
            <div className={styles.contactLinks}>
              <a href="tel:+919XXXXXXXXX">+91 9XXXXXXXXX</a>
              <a href="mailto:hello@theweddingunit.in.net">hello@theweddingunit.in.net</a>
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} The Wedding Unit Photography. All rights reserved.</span>

          <button
            type="button"
            className={styles.topButton}
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 14 6-6 6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}


