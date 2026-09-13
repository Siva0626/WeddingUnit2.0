"use client";

import { FormEvent, useState } from "react";
import styles from "./Contact.module.css";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [eventType, setEventType] = useState("");

  const events = [
    "Wedding Photography",
    "Cinematography",
    "Pre-Wedding Shoot",
    "Engagement",
    "Events & Functions",
    "Other",
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      event_type: String(data.get("event_type") || ""),
      event_date: String(data.get("event_date") || ""),
      location: String(data.get("location") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to submit enquiry");
      }

      setSubmitted(true);
      form.reset();
      setEventType("");
    } catch {
      setSubmitted(false);
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>LET&apos;S CREATE SOMETHING TIMELESS</span>
          <h2>Contact &amp; Booking</h2>
          <p>
            Share your date, venue and vision. We&apos;ll help shape the right
            coverage for your story.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.visual}>
            <div className={styles.imageWrap}>
              <img
                src="/assets/Photos/01.jpg"
                alt="Wedding photography"
              />
              <div className={styles.imageOverlay} />
              <div className={styles.quote}>
                <span>&quot;Every story deserves to be remembered.&quot;</span>
              </div>
            </div>

            <div className={styles.contactMeta}>
              <div>
                <small>WHATSAPP</small>
                <strong>Chat with us</strong>
              </div>

              <div>
                <small>RESPONSE</small>
                <strong>Usually within 24 hours</strong>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <h3>Thank You!</h3>
                <p>
                  Your enquiry has been received. We&apos;ll get back to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formHeader}>
                  <small>YOUR DETAILS</small>
                  <h3>Tell us about your day</h3>
                </div>

                <div className={styles.field}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label>Event Type</label>
                  <div className={styles.chips}>
                    {events.map((event) => (
                      <button
                        key={event}
                        type="button"
                        className={
                          eventType === event
                            ? styles.chipActive
                            : styles.chip
                        }
                        onClick={() => setEventType(event)}
                      >
                        {event}
                      </button>
                    ))}
                  </div>
                  <input
                    type="hidden"
                    name="event_type"
                    value={eventType}
                    required
                  />
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="event_date">Event Date</label>
                    <input
                      id="event_date"
                      name="event_date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="location">Location / Venue</label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Venue / City"
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">
                    Tell us about your wedding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your plans, expectations or anything you'd like us to know..."
                  />
                </div>

                <label className={styles.consent}>
                  <input type="checkbox" name="consent" required />
                  <span>
                    I agree to be contacted regarding my enquiry.
                  </span>
                </label>

                <button className={styles.submit} type="submit">
                  SEND ENQUIRY
                  <span>→</span>
                </button>

                <p className={styles.whatsappNote}>
                  Prefer WhatsApp? <a href="https://wa.me/919656500127">Chat with us →</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

