import Image from "next/image";
import { storyItems } from "@/data/showcase";
import styles from "./StoriesFilms.module.css";

export function StoriesFilms() {
  return (
    <section className={styles.section} id="films" aria-labelledby="stories-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.kicker}>STORIES & FILMS</p>
          <h2 id="stories-title">Stories in Motion</h2>
          <p>
            Quick moments, behind-the-scenes glimpses and cinematic wedding
            films — all in one place.
          </p>
        </div>

        <div className={styles.storyRow}>
          {storyItems.map((story) => (
            <a href="#contact" className={styles.story} key={story.id} aria-label={story.caption}>
              <span className={styles.storyRing}>
                <span className={styles.storyImage}>
                  <Image src={story.src} alt={story.alt} fill sizes="84px" />
                </span>
              </span>
              <strong>{story.caption}</strong>
            </a>
          ))}
        </div>

        <div className={styles.filmHeading}>
          <span>FILMS</span>
          <div />
        </div>

        <div className={styles.filmsRow}>
          <article className={styles.filmCard}>
            <div className={styles.filmImage}>
              <Image src="/assets/Photos/01.jpg" alt="Wedding highlight reel" fill sizes="(max-width: 900px) 82vw, 33vw" />
              <span className={styles.play}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 7 8 5-8 5V7Z" />
                </svg>
              </span>
              <span className={styles.duration}>01:42</span>
            </div>
            <div className={styles.filmMeta}>
              <strong>Wedding Highlight</strong>
              <span>Cinematic Story</span>
            </div>
          </article>

          <article className={styles.filmCard}>
            <div className={styles.filmImage}>
              <Image src="/assets/Photos/02.jpg" alt="Wedding teaser film" fill sizes="(max-width: 900px) 82vw, 33vw" />
              <span className={styles.play}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 7 8 5-8 5V7Z" />
                </svg>
              </span>
              <span className={styles.duration}>00:54</span>
            </div>
            <div className={styles.filmMeta}>
              <strong>Wedding Teaser</strong>
              <span>Real Moments</span>
            </div>
          </article>

          <article className={styles.filmCard}>
            <div className={styles.filmImage}>
              <Image src="/assets/Photos/03.jpg" alt="Pre-wedding film" fill sizes="(max-width: 900px) 82vw, 33vw" />
              <span className={styles.play}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m9 7 8 5-8 5V7Z" />
                </svg>
              </span>
              <span className={styles.duration}>02:18</span>
            </div>
            <div className={styles.filmMeta}>
              <strong>Pre-Wedding Film</strong>
              <span>Couples · Portraits · Stories</span>
            </div>
          </article>
        </div>

        <p className={styles.note}>
          Film cards are ready for your actual video files. No fake video playback is created here.
        </p>
      </div>
    </section>
  );
}


