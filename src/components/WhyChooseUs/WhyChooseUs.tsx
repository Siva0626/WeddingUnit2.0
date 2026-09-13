import Image from "next/image";
import styles from "./WhyChooseUs.module.css";

const cards = [
  {
    title: "Why Choose Us",
    description:
      "Experienced crews, cinematic grading, and a friendly, unobtrusive presence that keeps the day joyful.",
    image: "/assets/Photos/why-choose-us.png",
  },
  {
    title: "Fast Delivery",
    description:
      "Edited highlights within 10 days and full galleries delivered via private online proofing links.",
    image: "/assets/Photos/fast-delivery.png",
  },
  {
    title: "Custom Packages",
    description:
      "Flexible offerings for intimate weddings to multi-day celebrations. Add-ons available for your story.",
    image: "/assets/Photos/custom-package.png",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.section} aria-labelledby="why-choose-us-title">
      <div className={styles.heading}>
        <h2 id="why-choose-us-title">Why Choose Us</h2>
      </div>

      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <Image
              src={card.image}
              alt={card.title}
              width={1024}
              height={1024}
              className={styles.image}
            />

            <div className={styles.content}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


