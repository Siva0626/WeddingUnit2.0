'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import styles from './Contact.module.css';

type Preset = {
  service?: string;
  packageName?: string;
};

type EventType =
  | 'Wedding'
  | 'Reception'
  | 'Engagement'
  | 'Pre-Wedding'
  | 'Baby Shower'
  | 'Other';

type PackageName = 'Silver' | 'Gold' | 'Platinum' | 'Custom Package';

const ADDRESS =
  '59C, Krishnaswamy Nagar, Sowripalayam Pirivu, Ramanathapuram, Coimbatore, Tamil Nadu 641045';

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const eventTypes: EventType[] = [
  'Wedding',
  'Reception',
  'Engagement',
  'Pre-Wedding',
  'Baby Shower',
  'Other',
];

const packages: Array<{
  name: PackageName;
  description: string;
}> = [
  {
    name: 'Silver',
    description: 'Essential coverage',
  },
  {
    name: 'Gold',
    description: 'Signature coverage',
  },
  {
    name: 'Platinum',
    description: 'Complete experience',
  },
  {
    name: 'Custom Package',
    description: 'Built around you',
  },
];

function Icon({
  type,
}: {
  type: 'user' | 'mail' | 'phone' | 'calendar' | 'location' | 'camera' | 'package';
}) {
  if (type === 'user') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.8-3.2 3.1-5 7-5s6.2 1.8 7 5" />
      </svg>
    );
  }

  if (type === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m5 7 7 5 7-5" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 3.8 9.5 3l2 4.5-2 1.5a14 14 0 0 0 5.5 5.5l1.5-2 4.5 2-.8 2.3a2.2 2.2 0 0 1-2.4 1.4C10.7 17.2 6.8 13.3 3.8 6.2A2.2 2.2 0 0 1 5.2 3.8Z" />
      </svg>
    );
  }

  if (type === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5.5" width="16" height="15" rx="2" />
        <path d="M8 3.5v4M16 3.5v4M4 10h16" />
      </svg>
    );
  }

  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    );
  }

  if (type === 'camera') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8.5h4l1.5-2h5l1.5 2h4v10H4Z" />
        <circle cx="12" cy="13.5" r="3.2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4M4 17l8 4 8-4" />
    </svg>
  );
}

export function Contact() {
  const [preset, setPreset] = useState<Preset>({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('');
  const [eventType, setEventType] = useState<EventType>('Wedding');
  const [packageName, setPackageName] =
    useState<PackageName>('Gold');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handlePreset = (event: Event) => {
      const customEvent = event as CustomEvent<Preset>;
      const nextPreset = customEvent.detail || {};

      setPreset(nextPreset);

      if (nextPreset.packageName) {
        const matchingPackage = packages.find(
          (item) => item.name === nextPreset.packageName
        );

        if (matchingPackage) {
          setPackageName(matchingPackage.name);
        }
      }

      if (nextPreset.service) {
        const matchingEvent = eventTypes.find(
          (item) =>
            item.toLowerCase() === nextPreset.service?.toLowerCase()
        );

        if (matchingEvent) {
          setEventType(matchingEvent);
        }
      }
    };

    window.addEventListener('prefill-enquiry', handlePreset);

    return () => {
      window.removeEventListener('prefill-enquiry', handlePreset);
    };
  }, []);

  const enquirySummary = useMemo(() => {
    const parts = [
      name.trim(),
      eventType,
      packageName,
      eventDate,
      location.trim(),
    ].filter(Boolean);

    return parts.join(' · ');
  }, [name, eventType, packageName, eventDate, location]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccess('');
    setError('');

    if (!consent) {
      setError('Please confirm that you agree to be contacted.');
      return;
    }

    setSubmitting(true);

    const data = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      eventType,
      packageName,
      eventDate,
      location: location.trim(),
      guests: guests.trim(),
      message: message.trim(),
      consent,
      preset,
      enquirySummary,
    };

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Unable to submit enquiry.');
      }

      setSuccess(
        'Thank you. Your enquiry has been received. We will get back to you shortly.'
      );

      setName('');
      setEmail('');
      setPhone('');
      setEventDate('');
      setLocation('');
      setGuests('');
      setMessage('');
      setConsent(false);
    } catch {
      setError(
        'Something went wrong while sending your enquiry. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <p className="sectionKicker">CONTACT &amp; BOOKING</p>

          <h2 id="contact-title">Let&apos;s Create Something Timeless.</h2>

          <div className={styles.headingAccent} aria-hidden="true">
            <span />
            <span>✦</span>
            <span />
          </div>

          <h3>Tell us about your celebration.</h3>

          <p>
            Share your date, venue and expectations — we&apos;ll send a
            tailored quote and breakdown.
          </p>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.panelTop}>
            <div>
              <span className={styles.panelKicker}>YOUR ENQUIRY</span>
              <h3>Let&apos;s plan your story.</h3>
            </div>

            <div className={styles.panelStatement}>
              <span>CRAFTED WITH INTENTION</span>
              <span>CAPTURED FOR A LIFETIME</span>
              <i />
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.basicFields}>
              <label className={styles.field}>
                <span>
                  YOUR NAME <b>*</b>
                </span>

                <span className={styles.inputWrap}>
                  <Icon type="user" />
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </span>
              </label>

              <label className={styles.field}>
                <span>
                  EMAIL ADDRESS <b>*</b>
                </span>

                <span className={styles.inputWrap}>
                  <Icon type="mail" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </span>
              </label>

              <label className={styles.field}>
                <span>
                  PHONE NUMBER <b>*</b>
                </span>

                <span className={styles.inputWrap}>
                  <Icon type="phone" />
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="+91"
                    autoComplete="tel"
                    required
                  />
                </span>
              </label>
            </div>

            <div className={styles.selectionGroup}>
              <span className={styles.groupLabel}>
                WHAT ARE YOU CELEBRATING? <b>*</b>
              </span>

              <div className={styles.eventGrid}>
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`${styles.eventCard} ${
                      eventType === type ? styles.selected : ''
                    }`}
                    aria-pressed={eventType === type}
                    onClick={() => setEventType(type)}
                  >
                    <Icon type="camera" />
                    <span>{type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.selectionGroup}>
              <span className={styles.groupLabel}>
                CHOOSE YOUR PACKAGE <b>*</b>
              </span>

              <div className={styles.packageGrid}>
                {packages.map((item) => (
                  <button
                    key={item.name}
                    type="button"
                    className={`${styles.packageCard} ${
                      packageName === item.name ? styles.selected : ''
                    }`}
                    aria-pressed={packageName === item.name}
                    onClick={() => setPackageName(item.name)}
                  >
                    <Icon type="package" />
                    <strong>{item.name}</strong>
                    <small>{item.description}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.detailFields}>
              <label className={styles.field}>
                <span>
                  EVENT DATE <b>*</b>
                </span>

                <span className={styles.inputWrap}>
                  <Icon type="calendar" />
                  <input
                    type="date"
                    name="eventDate"
                    value={eventDate}
                    onChange={(event) =>
                      setEventDate(event.target.value)
                    }
                    required
                  />
                </span>
              </label>

              <label className={styles.field}>
                <span>
                  EVENT LOCATION <b>*</b>
                </span>

                <span className={styles.inputWrap}>
                  <Icon type="location" />
                  <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={(event) =>
                      setLocation(event.target.value)
                    }
                    placeholder="Venue / City"
                    autoComplete="address-level2"
                    required
                  />
                </span>
              </label>

              <label className={styles.field}>
                <span>NUMBER OF GUESTS</span>

                <span className={styles.inputWrap}>
                  <Icon type="user" />
                  <input
                    type="text"
                    name="guests"
                    value={guests}
                    onChange={(event) => setGuests(event.target.value)}
                    placeholder="Approx. guest count"
                    inputMode="numeric"
                  />
                </span>
              </label>
            </div>

            <label className={styles.messageField}>
              <span>MESSAGE / REQUIREMENTS</span>

              <textarea
                name="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell us a little about your celebration, expectations or anything else we should know."
              />
            </label>

            <label className={styles.consent}>
              <input
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                required
              />

              <span>
                I agree to be contacted by The Wedding Unit regarding my
                enquiry.
              </span>
            </label>

            <div className={styles.submitRow}>
              <button
                className={styles.submit}
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'SENDING...' : 'SEND ENQUIRY'}
                <span aria-hidden="true">→</span>
              </button>
            </div>

            {success && (
              <p className={styles.success} role="status">
                {success}
              </p>
            )}

            {error && (
              <p className={styles.error} role="alert">
                {error}
              </p>
            )}
          </form>

          <div className={styles.enquiryBar}>
            <strong>ENQUIRY</strong>

            <i aria-hidden="true" />

            <div className={styles.barItem}>
              <Icon type="location" />

              <div className={styles.addressBlock}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open The Wedding Unit address in Google Maps"
                >
                  {ADDRESS}
                </a>

                <a
                  className={styles.directions}
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  GET DIRECTIONS →
                </a>
              </div>
            </div>

            <div className={styles.barItem}>
              <Icon type="mail" />

              <a href="mailto:theweddingunit@gmail.com">
                theweddingunit@gmail.com
              </a>
            </div>

            <div className={styles.barItem}>
              <Icon type="phone" />

              <a href="tel:+919655800127">+91 96558 00127</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}