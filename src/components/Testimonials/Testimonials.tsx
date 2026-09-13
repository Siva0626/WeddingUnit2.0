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
      }, 550);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const item = testimonialItems[index];

  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testimonials-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className={styles.kicker}>REAL CONVERSATIONS</p>
          <h2 id="testimonials-title">What Couples Say</h2>
        </div>

        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.avatar}>
              <Image src={item.avatar} alt="" fill sizes="42px" />
            </div>
            <div>
              <strong>{item.name}</strong>
              <span><i /> online now</span>
            </div>
          </div>

          <div className={styles.chatBody}>
            <div className={`${styles.message} ${typing ? styles.exit : styles.enter}`}>
              <div className={styles.bubble}>
                <p>{item.message}</p>
                <time>Delivered · {index + 1}/3</time>
              </div>
            </div>

            {typing && (
              <div className={styles.typing}>
                <span />
                <span />
                <span />
                <em>typing…</em>
              </div>
            )}
          </div>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((current) => (current - 1 + testimonialItems.length) % testimonialItems.length)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m14.5 5-7 7 7 7" />
            </svg>
          </button>

          {testimonialItems.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${dotIndex + 1}`}
              className={dotIndex === index ? styles.activeDot : ""}
              onClick={() => setIndex(dotIndex)}
            />
          ))}

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((current) => (current + 1) % testimonialItems.length)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m9.5 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}


