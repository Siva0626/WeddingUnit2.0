"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const slides = [
  {
    src: "/assets/Photos/01.jpg",
    alt: "Wedding couple photographed by The Wedding Unit",
  },
  {
    src: "/assets/Photos/02.jpg",
    alt: "Wedding ceremony photographed by The Wedding Unit",
  },
  {
    src: "/assets/Photos/03.jpg",
    alt: "Wedding couple sharing a candid moment",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} id="hero" aria-label="Wedding photography hero">
      <div className={styles.background}>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`${styles.slide} ${
              index === active ? styles.active : ""
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={styles.image}
            />
          </div>
        ))}

        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.heroCard}>
        <p className={styles.eyebrow}>
          WEDDING PHOTOGRAPHY · CINEMATOGRAPHY
        </p>

        <h1>Storytelling through candid frames</h1>

        <p className={styles.description}>
          Book cinematic wedding coverage, intimate portraits and curated
          highlight films. Transparent pricing and friendly crew.
        </p>

        <a href="#contact" className={styles.button}>
          Book Your Slot Now
        </a>
      </div>
    </section>
  );
}



