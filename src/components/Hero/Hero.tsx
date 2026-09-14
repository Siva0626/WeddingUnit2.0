"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const slides = [
  "/assets/Photos/01.jpg",
  "/assets/Photos/02.jpg",
  "/assets/Photos/03.jpg",
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className={styles.hero}
      aria-label="The Wedding Unit hero"
      style={
        {
          "--hero-photo": `url("${slides[active]}")`,
        } as React.CSSProperties
      }
    >
      <div className={styles.photo} aria-hidden="true" />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          WEDDING PHOTOGRAPHY · CINEMATOGRAPHY
        </p>

        <h1>Storytelling through candid frames</h1>

        <p className={styles.description}>
          Book cinematic wedding coverage, intimate portraits and curated
          highlight films. Transparent pricing and friendly crew.
        </p>

        <a href="#contact" className={styles.cta}>
          Book Your Slot Now
        </a>
      </div>

      <div className={styles.controls}>
        <span>
          {String(active + 1).padStart(2, "0")} / 03
        </span>

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous hero image"
        >
          ←
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next hero image"
        >
          →
        </button>
      </div>

      <div className={styles.rightStatement}>
        <span>REAL</span>
        <span>MOMENTS</span>
        <span>LAST FOREVER</span>
        <i />
      </div>
    </section>
  );
}

