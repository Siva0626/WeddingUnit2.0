"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Header.module.css";

const navigation = [
  ["HOME", "#home"],
  ["WORKS", "#gallery"],
  ["SERVICES", "#services"],
  ["PACKAGES", "#packages"],
  ["TESTIMONIALS", "#testimonials"],
  ["CONTACT", "#contact"],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a
          href="#home"
          className={styles.brand}
          aria-label="The Wedding Unit"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/branding/logo.png"
            alt="The Wedding Unit"
            width={70}
            height={70}
            className={styles.logo}
            priority
          />

          <span className={styles.brandName}>THE WEDDING UNIT</span>
        </a>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={label === "HOME" ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

