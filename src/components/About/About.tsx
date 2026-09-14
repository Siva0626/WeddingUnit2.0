import { offers } from "@/data/offers";
import styles from "./About.module.css";

export function About() {
  const marqueeOffers = [...offers, ...offers];

  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 id="about-title">About Us</h2>

          <p>
            We blend editorial direction with candid moments to craft visuals
            that stand the test of time. Local teams, quick turnaround, and a
            happy couple guarantee.
          </p>
        </div>

        <div className={styles.offerViewport} aria-label="Current offers">
          <div className={styles.offerTrack}>
            {marqueeOffers.map((offer, index) => (
              <span className={styles.offerPill} key={`${offer}-${index}`}>
                {offer}
              </span>
            ))}
          </div>
<div className={styles.offerTrack}>
            {marqueeOffers.map((offer, index) => (
              <span className={styles.offerPill} key={`${offer}-${index}`}>
                {offer}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




