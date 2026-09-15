'use client';

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
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

type OptionIcon =
  | 'wedding'
  | 'reception'
  | 'engagement'
  | 'preWedding'
  | 'baby'
  | 'other'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'custom';

type SelectOption<T extends string> = {
  value: T;
  icon: OptionIcon;
  description?: string;
};

const ADDRESS =
  '59C, Krishnaswamy Nagar, Sowripalayam Pirivu, Ramanathapuram, Coimbatore, Tamil Nadu 641045';

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const eventOptions: SelectOption<EventType>[] = [
  { value: 'Wedding', icon: 'wedding' },
  { value: 'Reception', icon: 'reception' },
  { value: 'Engagement', icon: 'engagement' },
  { value: 'Pre-Wedding', icon: 'preWedding' },
  { value: 'Baby Shower', icon: 'baby' },
  { value: 'Other', icon: 'other' },
];

const packageOptions: SelectOption<PackageName>[] = [
  {
    value: 'Silver',
    icon: 'silver',
    description: 'Essential coverage',
  },
  {
    value: 'Gold',
    icon: 'gold',
    description: 'Signature coverage',
  },
  {
    value: 'Platinum',
    icon: 'platinum',
    description: 'Premium experience',
  },
  {
    value: 'Custom Package',
    icon: 'custom',
    description: 'Tailored to your needs',
  },
];

function Icon({
  type,
}: {
  type:
    | 'user'
    | 'mail'
    | 'phone'
    | 'calendar'
    | 'location'
    | 'message'
    | OptionIcon;
}) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.45,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (type === 'user') {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c.8-3.2 3.1-5 7-5s6.2 1.8 7 5" />
      </svg>
    );
  }

  if (type === 'mail') {
    return (
      <svg {...common}>
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m5 7 7 5 7-5" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg {...common}>
        <path d="M7.2 3.8 9.5 3l2 4.5-2 1.5a14 14 0 0 0 5.5 5.5l1.5-2 4.5 2-.8 2.3a2.2 2.2 0 0 1-2.4 1.4C10.7 17.2 6.8 13.3 3.8 6.2A2.2 2.2 0 0 1 5.2 3.8Z" />
      </svg>
    );
  }

  if (type === 'calendar') {
    return (
      <svg {...common}>
        <rect x="4" y="5.5" width="16" height="15" rx="2" />
        <path d="M8 3.5v4M16 3.5v4M4 10h16" />
      </svg>
    );
  }

  if (type === 'location') {
    return (
      <svg {...common}>
        <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    );
  }

  if (type === 'message') {
    return (
      <svg {...common}>
        <path d="M4 5.5h16v10H9l-5 4v-14Z" />
      </svg>
    );
  }

  if (type === 'wedding') {
    return (
      <svg {...common}>
        <circle cx="9" cy="12" r="4.2" />
        <circle cx="15" cy="12" r="4.2" />
        <path d="M12 8.8a4.2 4.2 0 0 0 0 6.4" />
      </svg>
    );
  }

  if (type === 'reception') {
    return (
      <svg {...common}>
        <path d="M7 5v7M5 5v3M9 5v3M7 12v7M17 5v14M14 5c3.2 0 4.5 2.2 4.5 4.5S17.2 14 14 14" />
      </svg>
    );
  }

  if (type === 'engagement') {
    return (
      <svg {...common}>
        <circle cx="12" cy="14" r="5.5" />
        <path d="m9 8 3-3 3 3M10 11h4" />
      </svg>
    );
  }

  if (type === 'preWedding') {
    return (
      <svg {...common}>
        <path d="M4 8.5h4l1.5-2h5l1.5 2h4v10H4Z" />
        <circle cx="12" cy="13.5" r="3.2" />
      </svg>
    );
  }

  if (type === 'baby') {
    return (
      <svg {...common}>
        <path d="M6 10h12v8H6Z" />
        <path d="M8 10c0-3 1.8-5 4-5s4 2 4 5M9 14h.01M15 14h.01" />
      </svg>
    );
  }

  if (type === 'other') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 12h.01M12 12h.01M15 12h.01" />
      </svg>
    );
  }

  if (type === 'silver') {
    return (
      <svg {...common}>
        <path d="m12 4 7 4-7 4-7-4 7-4Z" />
        <path d="m5 12 7 4 7-4M5 16l7 4 7-4" />
      </svg>
    );
  }

  if (type === 'gold') {
    return (
      <svg {...common}>
        <path d="m12 3 2.4 5.2 5.6.7-4.1 4 1 5.7-4.9-2.7-4.9 2.7 1-5.7-4.1-4 5.6-.7L12 3Z" />
      </svg>
    );
  }

  if (type === 'platinum') {
    return (
      <svg {...common}>
        <path d="m4 8 4-4h8l4 4-8 12L4 8Z" />
        <path d="m4 8h16M8 4l4 4 4-4M8 8l4 12 4-12" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

function PopupSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selected =
    options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className={styles.dropdownField} ref={wrapperRef}>
      <span className={styles.dropdownLabel}>
        {label} <b>*</b>
      </span>

      <button
        type="button"
        className={`${styles.dropdownTrigger} ${
          open ? styles.dropdownOpen : ''
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <Icon type={selected.icon} />

        <span>{selected.value}</span>

        <span className={styles.chevron} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {open && (
        <div className={styles.dropdownMenu} role="listbox">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              role="option"
              aria-selected={option.value === value}
              className={`${styles.dropdownOption} ${
                option.value === value
                  ? styles.dropdownOptionSelected
                  : ''
              }`}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <span className={styles.optionIcon}>
                <Icon type={option.icon} />
              </span>

              <span className={styles.optionContent}>
                <strong>{option.value}</strong>

                {option.description && (
                  <small>{option.description}</small>
                )}
              </span>

              {option.value === value && (
                <span className={styles.optionCheck}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
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
  const [eventType, setEventType] =
    useState<EventType>('Wedding');
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
        const matchingPackage = packageOptions.find(
          (option) =>
            option.value.toLowerCase() ===
            nextPreset.packageName?.toLowerCase()
        );

        if (matchingPackage) {
          setPackageName(matchingPackage.value);
        }
      }

      if (nextPreset.service) {
        const matchingEvent = eventOptions.find(
          (option) =>
            option.value.toLowerCase() ===
            nextPreset.service?.toLowerCase()
        );

        if (matchingEvent) {
          setEventType(matchingEvent.value);
        }
      }
    };

    window.addEventListener('prefill-enquiry', handlePreset);

    return () => {
      window.removeEventListener('prefill-enquiry', handlePreset);
    };
  }, []);

  const enquirySummary = useMemo(
    () =>
      [
        name.trim(),
        eventType,
        packageName,
        eventDate,
        location.trim(),
      ]
        .filter(Boolean)
        .join(' · '),
    [name, eventType, packageName, eventDate, location]
  );

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSuccess('');
    setError('');

    if (!consent) {
      setError(
        'Please confirm that you agree to be contacted.'
      );
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
      aria-label="Contact and booking"
    >
      <div className={styles.container}>
        <div className={styles.formPanel}>
          <div className={styles.formLayout}>
            <div className={styles.formColumn}>
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
                        onChange={(event) =>
                          setName(event.target.value)
                        }
                        placeholder="Enter your full name"
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
                        onChange={(event) =>
                          setEmail(event.target.value)
                        }
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
                        onChange={(event) =>
                          setPhone(event.target.value)
                        }
                        placeholder="+91 96558 00127"
                        autoComplete="tel"
                        required
                      />
                    </span>
                  </label>
                </div>

                <div className={styles.selectionRow}>
                  <PopupSelect
                    label="WHAT ARE YOU CELEBRATING?"
                    value={eventType}
                    options={eventOptions}
                    onChange={setEventType}
                  />

                  <PopupSelect
                    label="CHOOSE YOUR PACKAGE"
                    value={packageName}
                    options={packageOptions}
                    onChange={setPackageName}
                  />
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
                        onChange={(event) =>
                          setGuests(event.target.value)
                        }
                        placeholder="Approx. guest count"
                        inputMode="numeric"
                      />
                    </span>
                  </label>
                </div>

                <label className={styles.messageField}>
                  <span>MESSAGE / REQUIREMENTS</span>

                  <span className={styles.messageWrap}>
                    <Icon type="message" />

                    <textarea
                      name="message"
                      value={message}
                      onChange={(event) =>
                        setMessage(event.target.value)
                      }
                      placeholder="Tell us about your celebration, expectations or anything else we should know..."
                    />
                  </span>
                </label>

                <label className={styles.consent}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={consent}
                    onChange={(event) =>
                      setConsent(event.target.checked)
                    }
                    required
                  />

                  <span>
                    I agree to be contacted by The Wedding Unit
                    regarding my enquiry. <b>*</b>
                  </span>
                </label>

                <div className={styles.submitRow}>
                  <button
                    className={styles.submit}
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting
                      ? 'SENDING...'
                      : 'SEND ENQUIRY'}

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
            </div>

            <aside
              className={styles.studioPanel}
              aria-label="Our studio"
            >
              <span className={styles.studioTitle}>
                OUR STUDIO
              </span>

              <div className={styles.studioBlock}>
                <Icon type="location" />

                <div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
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

              <div className={styles.studioDivider} />

              <div className={styles.studioContact}>
                <a href="mailto:theweddingunit@gmail.com">
                  <Icon type="mail" />
                  <span>
                    theweddingunit@gmail.com
                  </span>
                </a>

                <a href="tel:+919655800127">
                  <Icon type="phone" />
                  <span>+91 96558 00127</span>
                </a>
              </div>

              <div className={styles.studioDivider} />

              <div className={styles.responseBlock}>
                <Icon type="calendar" />

                <div>
                  <span>RESPONSE TIME</span>

                  <p>
                    We usually respond within 24 hours.
                  </p>
                </div>
              </div>

              <div className={styles.studioDivider} />

              <div className={styles.studioTagline}>
                <span>LET&apos;S CAPTURE</span>
                <span>YOUR STORY</span>
                <i />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}