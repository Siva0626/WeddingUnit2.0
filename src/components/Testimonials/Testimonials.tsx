"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { testimonialItems } from "@/data/showcase";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTyping(true);

      window.setTimeout(() => {
        setIndex((current) => (current + 1) % testimonialItems.length);
        setTyping(false);
      }, 480);
    }, 4800);

    return () => clearInterval(timer);
  }, []);

  const item = testimonialItems[index];

  return (
    <section
      className={styles.section}
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.kicker}>Testimonials</span>
          <h2 id="testimonials-title">Real words, real weddings</h2>
          <p>
            Couples and families we&apos;ve worked with, in their own words.
          </p>
        </div>

        <div className={styles.chatPanel}>
          <div className={styles.chatHeader}>
            <div className={styles.headerAvatar}>
              <Image
                src={item.avatar}
                alt=""
                fill
                sizes="38px"
              />
            </div>

            <div>
              <strong>The Wedding Unit</strong>
              <span>
                <i />
                Verified client stories
              </span>
            </div>
          </div>

          <div className={styles.chatBody}>
            <div className={styles.botHint}>
              Here&apos;s what our couples told us 💬
            </div>

            <div className={styles.testimonialStage}>
              <div
                className={`${styles.testimonialBubble} ${
                  typing ? styles.leave : styles.show
                }`}
              >
                <Image
                  className={styles.testimonialAvatar}
                  src={item.avatar}
                  alt=""
                  width={42}
                  height={42}
                />

                <div className={styles.testimonialContent}>
                  <div className={styles.name}>{item.name}</div>

                  <div className={styles.role}>
                    Wedding photography
                  </div>

                  <div className={styles.stars}>
                    ★★★★★
                  </div>

                  <div className={styles.quote}>
                    {item.message}
                  </div>
                </div>
              </div>
            </div>

            {typing && (
              <div className={styles.typingBubble}>
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className={styles.chatDots}>
            {testimonialItems.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial ${dotIndex + 1}`}
                className={
                  dotIndex === index ? styles.activeDot : ""
                }
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

