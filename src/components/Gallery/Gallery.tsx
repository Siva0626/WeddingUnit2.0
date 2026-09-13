"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { galleryItems } from "@/data/showcase";
import styles from "./Gallery.module.css";

const filters = [
  "ALL",
  "WEDDINGS",
  "ENGAGEMENTS",
  "PRE-WEDDING",
  "EVENTS",
  "MODEL SHOOTS",
  "PRODUCT SHOOTS",
];

export function Gallery() {
  const [filter, setFilter] = useState("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const filtered = useMemo(() => {
    if (filter === "ALL") return galleryItems;
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  useEffect(() => {
    if (paused || filtered.length < 2) return;

    timer.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % filtered.length);
    }, 4500);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, filtered.length]);

  const active = filtered[activeIndex] ?? filtered[0];

  const previous = () => {
    setActiveIndex((current) => (current - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % filtered.length);
  };

  const visible = [-2, -1, 0, 1, 2].map((offset) => {
    const index =
      (activeIndex + offset + filtered.length) % filtered.length;
    return {
      item: filtered[index],
      offset,
    };
  });

  return (
    <section
      className={styles.section}
      id="works"
      aria-labelledby="gallery-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.kicker}>SELECTED WORK</p>
          <h2 id="gallery-title">Gallery &amp; Our Works</h2>
          <p>
            Curated highlights from weddings, engagements and brand work.
            Every frame is selected to tell part of the story.
          </p>
        </div>

        <div className={styles.filters} role="tablist" aria-label="Gallery filters">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={filter === item}
              className={filter === item ? styles.filterActive : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className={styles.carousel}>
          <button
            className={styles.navButton}
            onClick={previous}
            type="button"
            aria-label="Previous gallery image"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5 7.5 12l7 7" />
            </svg>
          </button>

          <div className={styles.track}>
            {visible.map(({ item, offset }) => (
              <button
                key={`${item.id}-${offset}`}
                type="button"
                className={`${styles.frame} ${
                  offset === 0 ? styles.featured : styles.side
                }`}
                onClick={() => {
                  if (offset === 0) {
                    setLightbox(item.id);
                  } else {
                    const nextIndex =
                      (activeIndex + offset + filtered.length) % filtered.length;
                    setActiveIndex(nextIndex);
                  }
                }}
                aria-label={`View ${item.caption}`}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={
                      offset === 0
                        ? "(max-width: 900px) 74vw, 48vw"
                        : "(max-width: 900px) 24vw, 18vw"
                    }
                  />
                </div>

                <div className={styles.caption}>
                  <span>{String(item.id).padStart(2, "0")}</span>
                  <strong>{item.caption}</strong>
                </div>
              </button>
            ))}
          </div>

          <button
            className={styles.navButton}
            onClick={next}
            type="button"
            aria-label="Next gallery image"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9.5 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {filtered.slice(0, Math.min(filtered.length, 8)).map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to gallery image ${index + 1}`}
              className={index === activeIndex ? styles.dotActive : ""}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {lightbox !== null && (
          <div
            className={styles.lightbox}
            role="dialog"
            aria-modal="true"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className={styles.close}
              aria-label="Close gallery"
              onClick={() => setLightbox(null)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>

            {(() => {
              const item =
                galleryItems.find((entry) => entry.id === lightbox) ?? active;

              return (
                <div className={styles.lightboxImage} onClick={(event) => event.stopPropagation()}>
                  <Image src={item.src} alt={item.alt} fill sizes="90vw" />
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
}


