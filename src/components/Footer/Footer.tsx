"use client";

import { useState } from "react";
import { serviceItems } from "@/data/showcase";
import styles from "./Footer.module.css";

function SocialIcon({
  type,
}: {
  type: "instagram" | "facebook" | "youtube" | "threads";
}) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.3" />
        <circle
          cx="17.2"
          cy="6.8"
          r=".9"
          fill="currentColor"
          stroke="none"
        />
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
        <path
          d="m10 9 5 3-5 3V9Z"
          fill="currentColor"
          stroke="none"
        />
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

        <div className={styles.mainGrid}>

          {/* BRAND */}
          <div className={styles.brandColumn}>
            <div className={styles.brandName}>
              THE WEDDING UNIT
            </div>

            <span className={styles.brandCategory}>
              PHOTOGRAPHY
            </span>

            <p className={styles.brandTagline}>
              REAL MOMENTS. FOREVER.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                <SocialIcon type="instagram" />
              </a>

              <a href="#" aria-label="Facebook">
                <SocialIcon type="facebook" />
              </a>

              <a href="#" aria-label="YouTube">
                <SocialIcon type="youtube" />
              </a>

              <a href="#" aria-label="Threads">
                <SocialIcon type="threads" />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div className={styles.servicesColumn}>
            <h3>SERVICES</h3>

            <nav className={styles.serviceLinks}>
              {serviceItems.slice(0, 5).map((service) => (
                <a key={service} href="#services">
                  {service}
                </a>
              ))}
            </nav>
          </div>

          {/* REACH US */}
          <div className={styles.enquiryColumn}>
            <h3>REACH US</h3>

            <span>
              Coimbatore, Tamil Nadu
            </span>

            <a href="mailto:theweddingunit@gmail.com">
              theweddingunit@gmail.com
            </a>

            <a href="tel:+919655800127">
              +91 96558 00127
            </a>

            <a
              href="#contact"
              className={styles.enquiryButton}
            >
              MAKE AN ENQUIRY
              <span>→</span>
            </a>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottom}>

          <span className={styles.copyright}>
            © {year} The Wedding Unit Photography. All rights reserved.
          </span>

          <div className={styles.bottomLinks}>
            <a href="#home">Home</a>
            <a href="#contact">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>

            <button
              type="button"
              className={styles.topButton}
              aria-label="Back to top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 14 6-6 6 6" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
