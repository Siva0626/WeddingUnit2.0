"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./StoriesFilms.module.css";

const films = [
  {
    image: "/assets/Photos/01.jpg",
    title: "Wedding Highlight",
    tag: "Wedding Film",
    duration: "01:42",
  },
  {
    image: "/assets/Photos/02.jpg",
    title: "Wedding Teaser",
    tag: "Teaser",
    duration: "00:54",
  },
  {
    image: "/assets/Photos/03.jpg",
    title: "Pre-Wedding Film",
    tag: "Wedding Film",
    duration: "02:18",
  },
];

export function StoriesFilms() {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

  const previousFilm = () => {
    setActiveFilm((current) => {
      if (current === null) return 0;
      return (current - 1 + films.length) % films.length;
    });
  };

  const nextFilm = () => {
    setActiveFilm((current) => {
      if (current === null) return 0;
      return (current + 1) % films.length;
    });
  };

  return (
    <>
      <section className={styles.section} id="films" aria-labelledby="films-title">
        <div className={styles.container}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Films &amp; Videos</span>

            <h2 id="films-title">Stories in motion</h2>

            <p>
              One horizontal row, no filters — drag or scroll sideways to
              browse, click any film to watch.
            </p>
          </div>

          <div className={styles.videoRowOuter}>
            <div className={styles.videoRow}>
              {films.map((film, index) => (
                <article
                  className={styles.videoCard}
                  key={film.title}
                  onClick={() => setActiveFilm(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveFilm(index);
                    }
                  }}
                >
                  <div className={styles.videoThumb}>
                    <Image
                      src={film.image}
                      alt={film.title}
                      fill
                      sizes="(max-width: 600px) 76vw, 320px"
                    />

                    <span className={styles.videoTag}>{film.tag}</span>

                    <span className={styles.playButton} aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M9 7l8 5-8 5V7z" />
                      </svg>
                    </span>

                    <span className={styles.duration}>
                      {film.duration}
                    </span>
                  </div>

                  <div className={styles.videoMeta}>
                    <h3>{film.title}</h3>
                    <span>
                      {film.tag} · {film.duration}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.rowControls}>
            <button
              type="button"
              onClick={previousFilm}
              aria-label="Previous film"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={nextFilm}
              aria-label="Next film"
            >
              ›
            </button>
          </div>

          <div className={styles.more}>
            <a href="#contact">View all films</a>
          </div>
        </div>
      </section>

      {activeFilm !== null && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-label={films[activeFilm].title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setActiveFilm(null);
            }
          }}
        >
          <button
            type="button"
            className={styles.modalPrevious}
            onClick={previousFilm}
            aria-label="Previous film"
          >
            ‹
          </button>

          <div className={styles.modalBox}>
            <Image
              src={films[activeFilm].image}
              alt=""
              fill
              sizes="94vw"
            />

            <div className={styles.modalText}>
              <h3>{films[activeFilm].title}</h3>
              <p>
                {films[activeFilm].tag} · {films[activeFilm].duration}
              </p>
            </div>
          </div>

          <button
            type="button"
            className={styles.modalNext}
            onClick={nextFilm}
            aria-label="Next film"
          >
            ›
          </button>

          <button
            type="button"
            className={styles.modalClose}
            onClick={() => setActiveFilm(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

