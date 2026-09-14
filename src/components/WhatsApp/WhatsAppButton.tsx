import styles from "./WhatsAppButton.module.css";

export function WhatsAppButton() {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919655600127";

  const message =
    "Hello The Wedding Unit, I would like to enquire about wedding photography and cinematography.";

  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className={styles.button}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with The Wedding Unit on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.4a8.5 8.5 0 0 1-12.7 7.4L3.5 20l1.3-4.1A8.5 8.5 0 1 1 20.5 11.4Z" />
        <path d="M9.1 8.2c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.5c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.2-1 .3-1.5.2-1.1-.2-2.4-.9-3.7-2.2-1.3-1.3-2-2.6-2.2-3.7-.1-.5 0-1.1.2-1.5Z" />
      </svg>
    </a>
  );
}
